import { GoogleGenAI, Modality, Type } from "@google/genai";

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

// Returns a Promise that resolves when audio FINISHES playing or is cancelled
// Returns true if handled (played or cancelled), false if failed (needs fallback)
export const playGeminiTTS = async (text: string): Promise<boolean> => {
  stopAudio(); // Stop previous audio first
  const myPlaybackId = currentPlaybackId;

  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return false;
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
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is a good female voice
          },
        },
      },
    });

    // Check if a new audio request started while we were fetching
    if (myPlaybackId !== currentPlaybackId) {
        return true; // Return true to indicate handled (cancelled), avoiding fallback
    }

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      console.warn("No audio data returned from Gemini.");
      return false;
    }

    // Decode and Play
    const ctx = getAudioContext();
    
    // Ensure context is running (needed for some browsers after user gesture)
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    const pcmBytes = decodeBase64(base64Audio);
    
    const audioBuffer = await decodeAudioData(
      pcmBytes,
      ctx,
      24000, // Gemini TTS typically uses 24kHz
      1      // Mono
    );

    // Check cancellation again after decoding
    if (myPlaybackId !== currentPlaybackId) {
        return true;
    }

    return new Promise((resolve) => {
      const source = ctx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(ctx.destination);
      
      source.onended = () => {
        // Only nullify currentSource if it's still the same one
        if (currentSource === source) {
            currentSource = null;
        }
        resolve(true);
      };

      currentSource = source;
      source.start();
    });

  } catch (error) {
    // If cancelled, ignore error
    if (myPlaybackId !== currentPlaybackId) return true;
    console.error("Gemini TTS Error:", error);
    return false;
  }
};

// Cache to prevent re-fetching the same image
const imageCache = new Map<string, string>();

export const generateImage = async (prompt: string): Promise<string | null> => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key is missing.");
    return null;
  }

  if (imageCache.has(prompt)) {
    return imageCache.get(prompt) || null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData) {
          const base64Image = part.inlineData.data;
          const mimeType = part.inlineData.mimeType || 'image/png';
          const imageSrc = `data:${mimeType};base64,${base64Image}`;
          imageCache.set(prompt, imageSrc);
          return imageSrc;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};

export const playNativeTTS = (text: string): Promise<void> => {
  stopAudio(); // Ensure stop is called
  const myPlaybackId = currentPlaybackId;

  return new Promise((resolve) => {
    if (myPlaybackId !== currentPlaybackId) {
        resolve();
        return;
    }

    if (!('speechSynthesis' in window)) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    
    // Prioritize Indonesian voice, then generic Female/English
    const indoVoice = voices.find(v => v.lang.includes('id') || v.lang.includes('ID'));
    const femaleVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Google US English'));
    
    if (indoVoice) {
      utterance.voice = indoVoice;
    } else if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1;

    utterance.onend = () => resolve();
    utterance.onerror = () => resolve(); // Resolve on error too so app doesn't hang

    if (myPlaybackId === currentPlaybackId) {
        window.speechSynthesis.speak(utterance);
    } else {
        resolve();
    }
  });
};

export const gradeEssayWithGemini = async (userAnswer: string, correctAnswer: string): Promise<{ score: number; feedback: string }> => {
  if (!process.env.API_KEY) {
      return { score: 0, feedback: "API Key missing, cannot grade." };
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{
        parts: [{ text: `
          Peran: Guru Sekolah Dasar (SD) yang bijaksana.
          Tugas: Menilai jawaban siswa berdasarkan jawaban kunci.
          
          Pertanyaan Konteks: Pelajaran Sekolah Dasar.
          Jawaban Kunci: "${correctAnswer}"
          Jawaban Siswa: "${userAnswer}"
          
          Instruksi Penilaian:
          1. Berikan skor 0-100 berdasarkan kemiripan makna, bukan persis kata-per-kata.
          2. Typo kecil dimaafkan.
          3. Jika jawaban siswa kosong atau sangat ngawur, beri nilai 0.
          4. Berikan umpan balik singkat (maksimal 15 kata) dalam Bahasa Indonesia yang menyemangati.
          
          Output JSON:
          {
            "score": number,
            "feedback": "string"
          }
        ` }]
      }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                score: { type: Type.NUMBER },
                feedback: { type: Type.STRING }
            },
            required: ["score", "feedback"]
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return { score: result.score || 0, feedback: result.feedback || "" };
  } catch (error) {
    console.error("Gemini Grading Error:", error);
    // Fallback basic grading
    const normalizedUser = userAnswer.toLowerCase();
    const normalizedKey = correctAnswer.toLowerCase();
    const isMatch = normalizedUser.includes(normalizedKey) || normalizedKey.includes(normalizedUser);
    return { 
        score: isMatch ? 100 : 0, 
        feedback: isMatch ? "Jawaban mirip secara manual." : "Gagal menilai dengan AI." 
    };
  }
};
