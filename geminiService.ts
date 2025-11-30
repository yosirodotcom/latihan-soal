import { GoogleGenAI, Modality, Type, GenerateContentResponse } from "@google/genai";
import { SchoolLevel, QuestionData } from "./types";

// Singleton AudioContext to prevent browser limits
let audioCtx: AudioContext | null = null;
let currentSource: AudioBufferSourceNode | null = null;
let currentPlaybackId = 0; // Track the latest playback request ID to prevent overlaps

// Cache to store promises of AudioBuffers
// Key: string (ID), Value: Promise<AudioBuffer | null>
const audioCache = new Map<string, Promise<AudioBuffer | null>>();

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  }
  return audioCtx;
}

// Stop any currently playing audio (Gemini or Native)
export const stopAudio = () => {
  // Increment playback ID to invalidate any pending async operations
  currentPlaybackId++;

  // Stop Web Audio API source
  if (currentSource) {
    try {
      currentSource.stop();
    } catch (e) {
      // Ignore errors if already stopped
    }
    currentSource = null;
  }

  // Stop SpeechSynthesis
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// Helpers for Audio Decoding (Raw PCM to AudioBuffer)
function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  // Gemini TTS returns 16-bit PCM
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      // Convert Int16 to Float32 [-1.0, 1.0]
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// --- Main Services ---

// Internal function to call API with Retry Logic
const fetchGeminiAudio = async (text: string): Promise<AudioBuffer | null> => {
    if (!process.env.API_KEY) {
        console.warn("Gemini API Key is missing.");
        return null;
    }

    if (!text || !text.trim()) return null;

    const maxRetries = 3;
    const modelId = "gemini-2.5-flash-preview-tts";
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await ai.models.generateContent({
                model: modelId,
                contents: [{
                    parts: [{ text: text }],
                }],
                config: {
                    responseModalities: [Modality.AUDIO],
                    speechConfig: {
                        voiceConfig: {
                            prebuiltVoiceConfig: { voiceName: 'Kore' },
                        },
                    },
                },
            });

            const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

            if (!base64Audio) {
                // If no audio returned, it might be a temporary glitch, try again if not last attempt
                if (attempt < maxRetries) {
                    console.warn(`Gemini TTS Attempt ${attempt}: No audio data returned. Retrying...`);
                    // Short delay before retry
                    await new Promise(resolve => setTimeout(resolve, 500));
                    continue; 
                }
                console.warn("No audio data returned from Gemini after retries.");
                return null;
            }

            const ctx = getAudioContext();
            const pcmBytes = decodeBase64(base64Audio);
            
            return await decodeAudioData(
                pcmBytes,
                ctx,
                24000, 
                1
            );
        } catch (error: any) {
            // Check if it is the last attempt
            if (attempt === maxRetries) {
                console.error("Gemini TTS Generation Error (Final):", error);
                return null;
            }
            
            console.warn(`Gemini TTS Attempt ${attempt} failed. Retrying... Error: ${error.message || 'Unknown'}`);
            
            // Exponential backoff: 500ms, 1000ms, 2000ms...
            const delay = 500 * Math.pow(2, attempt - 1);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
    return null;
}

// Generate TTS Audio Buffer. 
// If key is provided, it checks/updates the cache.
export const generateGeminiAudio = async (text: string, key?: string): Promise<AudioBuffer | null> => {
    // If key provided and exists in cache, return the promise (await it)
    if (key && audioCache.has(key)) {
        return audioCache.get(key)!;
    }

    // Create the generation promise
    const audioPromise = fetchGeminiAudio(text);

    // If key provided, cache the promise
    if (key) {
        audioCache.set(key, audioPromise);
    }

    return audioPromise;
}

// NEW: Preload a batch of questions to background cache
export const preloadQuizAssets = async (questions: QuestionData[], userName: string) => {
    const safeName = userName || "Teman";
    
    // 1. Preload Personalized Correct Audio
    generateGeminiAudio(`Benar, ${safeName}! Jawabanmu tepat sekali. Hebat!`, "fb_correct");

    // 2. Preload Questions and Wrong Feedback
    // Process sequentially to avoid rate limits, or in small batches
    for (const q of questions) {
        // Preload Question Text
        const qKey = `q_${q.id}`;
        if (!audioCache.has(qKey)) {
            generateGeminiAudio(q.question, qKey);
        }

        // Preload Wrong Feedback (Except Essay which is dynamic)
        if (q.type !== 'essay') {
            const fbKey = `fb_wrong_${q.id}`;
            const fbText = `Kurang tepat, ${safeName}. Jawaban yang benar adalah ${q.correct_answer}.`;
            if (!audioCache.has(fbKey)) {
                generateGeminiAudio(fbText, fbKey);
            }
        }

        // Small delay to be gentle on the API
        await new Promise(r => setTimeout(r, 200)); 
    }
}

// NEW: Play a pre-loaded AudioBuffer
export const playAudioBuffer = async (audioBuffer: AudioBuffer): Promise<boolean> => {
    stopAudio();
    const myPlaybackId = currentPlaybackId;
    const ctx = getAudioContext();
    
    if (ctx.state === 'suspended') {
        await ctx.resume();
    }

    return new Promise((resolve) => {
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      
      source.onended = () => {
        if (currentSource === source) {
            currentSource = null;
        }
        resolve(true);
      };

      currentSource = source;
      source.start();
      
      // Check immediately if it was cancelled during setup (rare edge case)
      if (myPlaybackId !== currentPlaybackId) {
          source.stop();
          resolve(true);
      }
    });
}


// Returns a Promise that resolves when audio FINISHES playing or is cancelled
// Now supports an optional cacheKey to play pre-loaded audio
export const playGeminiTTS = async (text: string, cacheKey?: string): Promise<boolean> => {
  stopAudio(); 
  const myPlaybackId = currentPlaybackId;

  // Use the cached promise if available, otherwise generate new
  const audioBuffer = await generateGeminiAudio(text, cacheKey);

  // Check cancellation
  if (myPlaybackId !== currentPlaybackId) return true;

  if (!audioBuffer) return false;

  return playAudioBuffer(audioBuffer);
};

// New: Play native browser TTS as a fallback
export const playNativeTTS = (text: string): Promise<boolean> => {
  stopAudio(); // Stop any previous audio, including Gemini TTS
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn("Native TTS is not supported in this browser.");
      resolve(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'id-ID'; // Set language to Indonesian
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1; // 0 to 2

    utterance.onend = () => {
      resolve(true);
    };
    utterance.onerror = (event) => {
      console.error('Native TTS error:', event);
      resolve(false);
    };

    window.speechSynthesis.speak(utterance);
  });
};

// Cache to prevent re-fetching the same image
const imageCache = new Map<string, string>();

// New: Exported function to fetch image for a prompt
export const fetchImageForPrompt = async (query: string): Promise<string | null> => {
  // Check cache first
  if (imageCache.has(query)) {
    return imageCache.get(query)!;
  }

  const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_API_KEY;

  // 1. Try Unsplash if Key exists
  if (UNSPLASH_ACCESS_KEY) {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const imageUrl = data.results[0].urls.small;
          imageCache.set(query, imageUrl);
          return imageUrl;
        }
      } else {
        console.warn(`Unsplash API error: ${response.status}. Falling back to generative image.`);
      }
    } catch (error) {
      console.error("Error fetching image from Unsplash:", error);
    }
  } else {
    // Only warn once or just proceed to fallback quietly
    // console.warn("Unsplash API Key missing. Using generative fallback.");
  }

  // 2. Fallback: Use Pollinations.ai (No API Key required)
  // This generates an image based on the prompt description.
  try {
    // Add seed to make it consistent for the same query during the session, 
    // but random enough to be interesting. 
    // Using a hash of the query would be better for consistency across reloads, 
    // but random seed is fine for now.
    const seed = Math.floor(Math.random() * 1000); 
    // Construct URL directly. Pollinations returns the image binary, so we use the URL as the src.
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(query)}?width=400&height=300&nologo=true&seed=${seed}&model=flux`;
    
    // Cache the URL (browser will cache the image resource itself)
    imageCache.set(query, imageUrl);
    return imageUrl;
  } catch (e) {
    console.error("Error generating image:", e);
    return null;
  }
};

// --- New: Essay Grading ---
// Returns score (0-100) and feedback
export const gradeEssayWithGemini = async (
  userAnswer: string, 
  correctAnswer: string,
  userName: string
): Promise<{ score: number; feedback: string }> => {
  if (!process.env.API_KEY) {
    // Fallback if no API key
    const isClose = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase());
    return { 
      score: isClose ? 100 : 0, 
      feedback: isClose ? "Jawabanmu mengandung kata kunci yang benar." : `Jawaban yang benar adalah: ${correctAnswer}` 
    };
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelId = "gemini-2.5-flash";

  const prompt = `
    Bertindaklah sebagai guru yang ramah bernama Smart Coach.
    Nama siswa: ${userName}.
    Pertanyaan: (Tidak perlu konteks pertanyaan, fokus pada kecocokan jawaban).
    Kunci Jawaban Guru: "${correctAnswer}"
    Jawaban Siswa: "${userAnswer}"

    Tugas:
    1. Berikan nilai 0-100 berdasarkan seberapa akurat jawaban siswa terhadap kunci jawaban. Perhatikan makna, bukan hanya kata persis.
    2. Berikan umpan balik singkat (maksimal 2 kalimat) yang menyemangati siswa dalam Bahasa Indonesia.
    
    Format respon JSON:
    {
      "score": number,
      "feedback": "string"
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json"
      }
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    if (text) {
      const result = JSON.parse(text);
      return result;
    }
  } catch (e) {
    console.error("Error grading essay:", e);
  }

  return { score: 0, feedback: "Maaf, terjadi kesalahan saat menilai. Tapi tetap semangat!" };
};

// --- New: Generate Learning Suggestions (Summary) ---
export const generateLearningSuggestionsWithGemini = async (
  wrongQuestions: { question: string, subject: string, chapter: number }[],
  level: SchoolLevel,
  userName: string
): Promise<string> => {
  if (!process.env.API_KEY || wrongQuestions.length === 0) {
    return `Kerja bagus, ${userName}! Teruslah berlatih untuk meningkatkan prestasimu.`;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelId = "gemini-2.5-flash";

  const wrongList = wrongQuestions.map(q => `- ${q.subject} Bab ${q.chapter}: ${q.question}`).join('\n');

  const prompt = `
    Bertindaklah sebagai guru pembimbing yang bijaksana dan ramah.
    Nama siswa: ${userName}.
    Jenjang: ${level}.
    
    Siswa ini baru saja menyelesaikan kuis dan salah menjawab pertanyaan-pertanyaan berikut:
    ${wrongList}

    Berikan saran belajar singkat (1 paragraf, maks 3 kalimat) yang memotivasi. 
    Fokuskan saran pada topik/bab yang perlu dipelajari lagi berdasarkan daftar kesalahan di atas.
    Gunakan bahasa yang hangat dan menyemangati.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: [{ parts: [{ text: prompt }] }],
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || `Semangat belajar ${userName}!`;
  } catch (e) {
    console.error("Error generating suggestions:", e);
    return `Tetap semangat belajar, ${userName}!`;
  }
};

// Helper: Check viability of a YouTube URL using oEmbed via a CORS-friendly proxy
const checkYouTubeAvailability = async (url: string): Promise<boolean> => {
  try {
    if (!url.match(/^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/)) {
      return false;
    }
    // YouTube's direct oEmbed endpoint often blocks CORS from browsers.
    // We use noembed.com which is CORS-friendly and wraps the oEmbed response.
    const noembedUrl = `https://noembed.com/embed?url=${encodeURIComponent(url)}`;
    const response = await fetch(noembedUrl);
    const data = await response.json();
    
    // noembed returns an object. If it has an 'error' property or no title, it's likely invalid.
    if (data.error) {
        console.warn("YouTube video unavailable (noembed error):", data.error);
        return false;
    }
    return true;
  } catch (e) {
    console.warn("Failed to check video availability:", e);
    // If fetch fails (e.g. network), we default to true to avoid hiding potentially valid videos due to transient network issues.
    return true; 
  }
};

// --- NEW: Get Remedial Video Suggestion ---
// Returns Video Title and URL
export const getRemedialVideoSuggestion = async (
  questionText: string,
  subject: string,
  grade: number
): Promise<{ title: string; url: string } | null> => {
  if (!process.env.API_KEY) return null;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelId = "gemini-2.5-flash"; 

  const prompt = `
    Carikan satu video YouTube edukasi yang:
    1. Audio-nya BERBAHASA INDONESIA (Wajib).
    2. Menjelaskan materi untuk siswa Kelas ${grade} Mata Pelajaran ${subject}.
    3. Berkaitan dengan pertanyaan yang salah dijawab ini: "${questionText}".
    4. Pastikan video BUKAN YouTube Shorts (Video reguler).
    5. Video harus AKTIF dan PUBLIK (bisa di-embed, tidak private).
    
    Berikan respons dalam format JSON murni:
    {
      "title": "Judul Video",
      "url": "Link YouTube"
    }
  `;

  try {
    const response = await ai.models.generateContent({
        model: modelId,
        contents: [{ parts: [{ text: prompt }] }],
        config: {
            tools: [{ googleSearch: {} }],
        }
    });

    let text = response.candidates?.[0]?.content?.parts?.[0]?.text;
    let result = null;

    if (text) {
        // Improved JSON extraction using Regex to handle potential extra text
        try {
            const jsonMatch = text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                result = JSON.parse(jsonMatch[0]);
            } else {
                // Fallback cleanup
                const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
                result = JSON.parse(cleanText);
            }
        } catch (e) {
            console.warn("Failed to parse video JSON from text", e);
        }
    }
    
    // 2. Fallback: If grounding chunks exist, use the first video/web link
    if (!result || !result.url) {
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (chunks && chunks.length > 0) {
            const webChunk = chunks.find((c: any) => c.web?.uri?.includes("youtube.com") || c.web?.uri?.includes("youtu.be"));
            if (webChunk && webChunk.web) {
                result = {
                    title: webChunk.web.title || "Video Pembelajaran",
                    url: webChunk.web.uri
                };
            }
        }
    }

    // 3. VALIDATION STEP
    if (result && result.url) {
        const isValid = await checkYouTubeAvailability(result.url);
        if (isValid) {
            return result;
        } else {
            console.warn(`Suggested video ${result.url} is unavailable/deleted. Skipping.`);
            return null; 
        }
    }

  } catch (e) {
    console.error("Error getting remedial video:", e);
  }

  return null;
}

// --- NEW: Chat with Guru AI ---
export const chatWithGuru = async (
  message: string,
  history: { sender: 'user' | 'model'; text: string }[],
  currentContext?: string
): Promise<string> => {
  if (!process.env.API_KEY) return "Maaf, kunci API tidak ditemukan. Saya tidak bisa menjawab.";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const modelId = "gemini-2.5-flash";

  // Construct context string
  let systemInstruction = "Kamu adalah 'Guru AI', asisten belajar yang ramah, pintar, dan sabar untuk siswa sekolah (SD/SMP/SMA). " +
    "Gunakan bahasa Indonesia yang baik, sopan, dan mudah dimengerti sesuai usia siswa. " +
    "Tugasmu adalah membantu siswa memahami pelajaran, menjawab pertanyaan mereka, dan memberikan semangat. " +
    "JIKA siswa bertanya tentang jawaban soal kuis, JANGAN langsung memberikan kunci jawaban (A, B, C). " +
    "Sebaliknya, berikan penjelasan konsep atau petunjuk (clue) agar mereka bisa menemukan jawabannya sendiri. " +
    "Bersikaplah ceria dan suportif.";

  if (currentContext) {
    systemInstruction += `\n\nKonteks saat ini (Siswa sedang mengerjakan soal ini): "${currentContext}". ` +
      "Gunakan konteks ini jika pertanyaan siswa berkaitan dengannya.";
  }

  try {
    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(h => ({
        role: h.sender,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "Maaf, Guru AI sedang berpikir keras dan tidak bisa menjawab saat ini.";
  } catch (e) {
    console.error("Error communicating with Guru AI:", e);
    return "Maaf, terjadi gangguan koneksi. Coba tanya lagi ya!";
  }
};