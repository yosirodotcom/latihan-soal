import { GoogleGenAI, Modality, Type, GenerateContentResponse } from "@google/genai";
import { SchoolLevel } from "./types";

// Singleton AudioContext to prevent browser limits
let audioCtx: AudioContext | null = null;
let currentSource: AudioBufferSourceNode | null = null;
let currentPlaybackId = 0; // Track the latest playback request ID to prevent overlaps

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

// NEW: Generate TTS Audio Buffer without playing it (for pre-loading)
export const generateGeminiAudio = async (text: string): Promise<AudioBuffer | null> => {
    if (!process.env.API_KEY) {
        console.warn("Gemini API Key is missing.");
        return null;
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const modelId = "gemini-2.5-flash-preview-tts";

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
            console.warn("No audio data returned from Gemini.");
            return null;
        }

        const ctx = getAudioContext();
        // Ensure context is running (needed for some browsers after user gesture)
        if (ctx.state === 'suspended') {
             await ctx.resume();
        }

        const pcmBytes = decodeBase64(base64Audio);
        
        return await decodeAudioData(
            pcmBytes,
            ctx,
            24000, 
            1
        );
    } catch (error) {
        console.error("Gemini TTS Generation Error:", error);
        return null;
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
export const playGeminiTTS = async (text: string): Promise<boolean> => {
  stopAudio(); 
  const myPlaybackId = currentPlaybackId;

  // Re-use the generation logic
  const audioBuffer = await generateGeminiAudio(text);

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

  if (!UNSPLASH_ACCESS_KEY) {
    console.warn("Unsplash API Key is missing from environment. Cannot fetch image from Unsplash.");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      console.error(`Unsplash API error: ${response.status} ${response.statusText}`);
      // Special handling for API Key errors in AI Studio
      if (response.status === 401 && (window as any).aistudio?.openSelectKey) {
        alert("Unsplash API Key might be invalid or missing. Please ensure your Unsplash API key is correctly configured.");
      }
      return null;
    }

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const imageUrl = data.results[0].urls.small; // Use 'small' for good balance of size/quality
      imageCache.set(query, imageUrl); // Cache the image URL
      return imageUrl;
    }
    return null; // No results found
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    return null;
  }
};

// New: Gemini function to grade essays
export const gradeEssayWithGemini = async (userAnswer: string, correctAnswer: string): Promise<{ score: number; feedback: string }> => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return { score: 0, feedback: "API Key tidak tersedia untuk penilaian esai." };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-pro-preview'; // Use a pro model for complex reasoning

    const prompt = `Nilai jawaban esai siswa berikut ini.
    Jawaban siswa: "${userAnswer}"
    Jawaban yang benar: "${correctAnswer}"

    Abaikan kesalahan ejaan atau tata bahasa kecil, fokus pada esensi dan keakuratan jawaban siswa.
    Berikan skor antara 0-100 (100 adalah sempurna, 0 adalah tidak relevan sama sekali) dan berikan umpan balik konstruktif yang singkat dalam Bahasa Indonesia.
    Fokus pada:
    1. Relevansi jawaban siswa dengan pertanyaan.
    2. Akurasi informasi yang diberikan.
    3. Kelengkapan jawaban dibandingkan dengan jawaban yang benar.
    4. Bahasa dan struktur (namun tetap abaikan kesalahan kecil seperti yang diinstruksikan).

    Format output sebagai JSON dengan properti 'score' (number) dan 'feedback' (string).`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.NUMBER, description: "Skor penilaian 0-100" },
            feedback: { type: Type.STRING, description: "Umpan balik konstruktif" },
          },
          required: ["score", "feedback"],
        },
        temperature: 0.2, // Lower temperature for more objective grading
      },
    });

    const jsonText = response.text?.trim();
    if (!jsonText) {
      throw new Error("No JSON response from Gemini for essay grading.");
    }

    // Try to parse the JSON, handle potential malformed output
    try {
      const parsed = JSON.parse(jsonText);
      if (typeof parsed.score === 'number' && typeof parsed.feedback === 'string') {
        return parsed;
      } else {
        throw new Error("Malformed JSON structure for essay grading.");
      }
    } catch (parseError) {
      console.error("Error parsing Gemini essay grading JSON:", parseError, "Raw text:", jsonText);
      // Fallback to simple logic if JSON parsing fails
      // Fix: Use 'correctAnswer' instead of 'correctAns'
      const isCorrectFallback = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase());
      return {
        score: isCorrectFallback ? 80 : 20,
        feedback: `(Fallback) ${isCorrectFallback ? "Jawaban Anda relevan." : "Jawaban Anda kurang relevan."} Coba periksa kembali.`
      };
    }

  } catch (error) {
    console.error("Error calling Gemini for essay grading:", error);
    if (
      (error instanceof Error &&
        (error.message.includes("RESOURCE_EXHAUSTED") ||
          error.message.includes("Requested entity was not found."))) ||
      (typeof (error as any).code === 'number' && (error as any).code === 500) ||
      (typeof (error as any).code === 'number' && (error as any).code === 6 && (error as any).message.includes("Rpc failed"))
    ) {
      alert("Terjadi kesalahan API Gemini. Mohon pastikan API Key Gemini Anda valid dan memiliki billing aktif. Klik OK untuk memilih ulang kunci API.");
      (window as any).aistudio?.openSelectKey();
    }
    return { score: 0, feedback: `Terjadi kesalahan saat menilai esai: ${(error as Error).message}` };
  }
};

// New: Gemini function to generate learning suggestions
export const generateLearningSuggestionsWithGemini = async (
  wrongQuestions: Array<{ question: string; subject: string; chapter: number }>,
  level: SchoolLevel
): Promise<string> => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return "API Key tidak tersedia untuk saran belajar.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-pro-preview'; // Use a pro model for better reasoning

    let mistakeSummary = "Siswa menjawab semua soal dengan benar.";
    if (wrongQuestions.length > 0) {
      mistakeSummary = "Berikut adalah pertanyaan-pertanyaan yang dijawab SALAH oleh siswa:\n";
      wrongQuestions.forEach(q => {
        mistakeSummary += `- Mata Pelajaran ${q.subject} (Bab ${q.chapter}): "${q.question}"\n`;
      });
    }

    const prompt = `Analisis kesalahan kuis siswa berikut (Jenjang ${level}):
    ${mistakeSummary}

    Tugas:
    Identifikasi **TOPIK SPESIFIK** atau **KONSEP** yang belum dipahami siswa berdasarkan isi pertanyaan yang salah tersebut (contoh: "Konsep Hewan Vertebrata", "Penjumlahan 2 digit", "Penggunaan To Be").
    
    Berikan saran belajar yang:
    1. SANGAT SINGKAT (Maksimal 3 kalimat).
    2. Langsung menyebutkan nama topik/materi spesifik yang perlu dipelajari ulang. JANGAN hanya menyebut "Bab 1" atau nama Mata Pelajarannya saja, tapi sebutkan konsep intinya.
    3. Hindari kata-kata motivasi umum (seperti "belajar lebih giat", "jangan menyerah").
    4. Gunakan Bahasa Indonesia yang santai namun jelas.

    Contoh Output Bagus:
    "Kamu perlu mempelajari kembali tentang **Hewan Vertebrata** dan ciri-cirinya. Selain itu, perkuat pemahamanmu tentang **perkalian dasar** agar lebih teliti."`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        temperature: 0.4, // Balanced creativity and focus
      },
    });

    return response.text ?? "Tidak dapat memuat saran belajar tambahan.";

  } catch (error) {
    console.error("Error calling Gemini for learning suggestions:", error);
    if (
      (error instanceof Error &&
        (error.message.includes("RESOURCE_EXHAUSTED") ||
          error.message.includes("Requested entity was not found."))) ||
      (typeof (error as any).code === 'number' && (error as any).code === 500) ||
      (typeof (error as any).code === 'number' && (error as any).code === 6 && (error as any).message.includes("Rpc failed"))
    ) {
      alert("Terjadi kesalahan API Gemini. Mohon pastikan API Key Gemini Anda valid dan memiliki billing aktif. Klik OK untuk memilih ulang kunci API.");
      (window as any).aistudio?.openSelectKey();
    }
    return `Terjadi kesalahan saat memuat saran belajar: ${(error as Error).message}`;
  }
};
