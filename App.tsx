
import React, { useState, useEffect, useRef } from 'react';
import { Play, StopCircle, Clock, Send, Volume2, Image as ImageIcon, CheckCircle, XCircle, ArrowRight, ChevronDown, ChevronUp, List, BookOpen, GraduationCap, Flame, Lightbulb, Loader2, BrainCircuit, Palette, User } from 'lucide-react';
import { QUESTIONS_DB, getSubjects, getChapters } from './data';
import { QuizSettings, QuizState, QuestionData, ChatMessage, SchoolLevel } from './types';
import { playGeminiTTS, fetchImageForPrompt, playNativeTTS, stopAudio, gradeEssayWithGemini, generateLearningSuggestionsWithGemini, generateGeminiAudio, playAudioBuffer, preloadQuizAssets } from './geminiService';



// Sub-component for handling Async Image Fetching/Generation
const PromptImage: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchImage = async () => {
      try {
        const data = await fetchImageForPrompt(prompt);
        if (active) setSrc(data);
      } catch (e) {
        console.error(e);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchImage();
    return () => { active = false; };
  }, [prompt]);

  if (loading) {
    return (
      <div className="w-full h-48 bg-gray-100 rounded-lg animate-pulse flex flex-col items-center justify-center gap-2 border border-gray-200">
        <ImageIcon className="text-gray-300" size={32} />
        <span className="text-xs text-gray-400">Sedang memuat gambar...</span>
      </div>
    );
  }

  if (!src) {
    return (
      <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex items-center gap-3">
         <ImageIcon className="text-red-300" size={24} />
         <span className="text-xs text-red-400">Gagal memuat gambar</span>
      </div>
    );
  }

  return (
    <div className="group relative">
      <img 
        src={src} 
        alt={prompt} 
        className="rounded-lg w-full max-h-64 object-cover shadow-sm transition-transform cursor-zoom-in" 
        onClick={() => window.open(src, '_blank')} 
      />
    </div>
  );
};

// Wrapper component to toggle image visibility
const ToggleableImage: React.FC<{ prompt: string, label?: string }> = ({ prompt, label = "Lihat Gambar" }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
        className="flex items-center gap-2 px-3 py-2 bg-opacity-50 bg-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-300 transition-colors border border-slate-300 w-fit"
      >
        <ImageIcon size={16} /> {label} <ChevronDown size={14} />
      </button>
    );
  }

  return (
    <div className="mt-2 w-full">
      <div className="flex justify-between items-center mb-2">
        {/* Removed: <span className="text-xs text-gray-400 italic truncate flex-1 mr-2">{prompt}</span> */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className="text-gray-400 hover:text-gray-600 ml-auto" // Added ml-auto to push button to right
        >
          <ChevronUp size={16} />
        </button>
      </div>
      <PromptImage prompt={prompt} />
    </div>
  );
}

// Single large Checkmark pop-up component for correct answers
// Updated to be fixed centered on screen
const ConfettiPop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Remove after animation
    }, 2000); // Matches CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="confetti-pop"
      style={{
        position: 'fixed',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 50
      }}
    >
      <CheckCircle size={80} />
    </div>
  );
};


// --- Theme Config ---
// Expanded Color Palettes for User Selection
const PALETTES: Record<string, any> = {
  Rose: {
    primary: 'bg-rose-500',
    secondary: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-600',
    textDark: 'text-rose-800',
    hover: 'hover:bg-rose-600',
    accent: 'rose',
    bg: 'bg-rose-500'
  },
  Indigo: {
    primary: 'bg-indigo-600',
    secondary: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    textDark: 'text-indigo-800',
    hover: 'hover:bg-indigo-700',
    accent: 'indigo',
    bg: 'bg-indigo-600'
  },
  Slate: {
    primary: 'bg-slate-600',
    secondary: 'bg-slate-100',
    border: 'border-slate-300',
    text: 'text-slate-600',
    textDark: 'text-slate-800',
    hover: 'hover:bg-slate-700',
    accent: 'slate',
    bg: 'bg-slate-600'
  },
  Blue: {
    primary: 'bg-blue-600',
    secondary: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600',
    textDark: 'text-blue-800',
    hover: 'hover:bg-blue-700',
    accent: 'blue',
    bg: 'bg-blue-600'
  },
  Emerald: {
    primary: 'bg-emerald-600',
    secondary: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    textDark: 'text-emerald-800',
    hover: 'hover:bg-emerald-700',
    accent: 'emerald',
    bg: 'bg-emerald-600'
  },
  Orange: {
    primary: 'bg-orange-500',
    secondary: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600',
    textDark: 'text-orange-800',
    hover: 'hover:bg-orange-600',
    accent: 'orange',
    bg: 'bg-orange-500'
  },
  Violet: {
    primary: 'bg-violet-600',
    secondary: 'bg-violet-50',
    border: 'border-violet-200',
    text: 'text-violet-600',
    textDark: 'text-violet-800',
    hover: 'hover:bg-violet-700',
    accent: 'violet',
    bg: 'bg-violet-600'
  },
  Fuchsia: {
    primary: 'bg-fuchsia-600',
    secondary: 'bg-fuchsia-50',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-600',
    textDark: 'text-fuchsia-800',
    hover: 'hover:bg-fuchsia-700',
    accent: 'fuchsia',
    bg: 'bg-fuchsia-600'
  }
};

// Map default themes to levels
const DEFAULT_LEVEL_THEMES: Record<SchoolLevel, string> = {
  SD: 'Rose',
  SMP: 'Indigo',
  SMA: 'Slate'
};

export default function App() {
  // --- State ---
  const [settings, setSettings] = useState<QuizSettings>({
    level: 'SD',
    grade: 1,
    subjects: [],
    semester: 1,
    chapters: [],
    questionCount: 0,
    fontSize: 3, // New: 1=xs, 2=sm, 3=base, 4=lg, 5=xl
    timerEnabled: false,
    questionTypes: ['multiple_choice', 'essay', 'true_false'],
    themeColor: 'Rose' // Default theme
  });

  const [gameState, setGameState] = useState<QuizState>({
    status: 'setup',
    userName: null,
    score: 0,
    totalAnswered: 0,
    history: [],
    queue: [],
    currentQuestion: null,
    remediationState: {}, // New tracking for false answer logic
    currentStreak: 0, // Reset general streak
    timeLeft: 0,
    isWaitingForNext: false,
    lastAnswerCorrect: null,
    showConfetti: false, // Controls confetti animation
    // Fix: Add animation-related properties to QuizState
    animatingOptionValue: null, 
    animationFeedback: null, 
    correctAnswerOptionValue: null,
    elapsedTime: 0, // New: Initialize elapsed time
    questionAttempts: [], // New: Track individual question outcomes
    confettiKey: 0, // New: Key to force remounting ConfettiPop
  });

  const [inputText, setInputText] = useState('');
  const [tempUserName, setTempUserName] = useState(''); // Local state for name input
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Removed Smart Coach Feedback State
  const [learningSuggestions, setLearningSuggestions] = useState<string | null>(null); // New: State for learning suggestions
  // Removed isGeneratingLearningSuggestions as we use 'analyzing' status now

  // New: Ref to track when the current question started
  const questionStartTimeRef = useRef<number>(0);

  // Audio refs for correct/wrong answers
  const correctAudio = useRef<HTMLAudioElement | null>(null);
  const wrongAudio = useRef<HTMLAudioElement | null>(null);

  // Effect to assign audio elements to refs after component mounts
  useEffect(() => {
    // Using more reliable public domain sounds
    correctAudio.current = new Audio('https://wordpress-8fnnl.wasmer.app/wp-content/uploads/2025/11/ding.mp3'); 
    wrongAudio.current = new Audio('https://wordpress-8fnnl.wasmer.app/wp-content/uploads/2025/11/wrong.mp3'); 
    
    // Ensure volume is pleasant and NOT muted
    if (correctAudio.current) {
      correctAudio.current.volume = 0.5;
      correctAudio.current.muted = false;
    }
    if (wrongAudio.current) {
      wrongAudio.current.volume = 0.3; // Slightly lower for the buzzer
      wrongAudio.current.muted = false;
    }
  }, []);

  // Effect to track question start time
  useEffect(() => {
    if (gameState.status === 'quiz' && gameState.currentQuestion) {
      questionStartTimeRef.current = Date.now();
    }
  }, [gameState.currentQuestion, gameState.status]);

  // --- Helpers ---
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [gameState.history, gameState.isWaitingForNext]);

  // Audio Auto-play
  useEffect(() => {
    const lastMsg = gameState.history[gameState.history.length - 1];
    // Fix: Access animationFeedback property correctly
    if (lastMsg && lastMsg.sender === 'teacher' && lastMsg.isQuestion && !gameState.isWaitingForNext && gameState.animationFeedback === null) {
      // Logic for pre-loaded keys
      const currentQ = gameState.currentQuestion;
      let audioKey: string | undefined = undefined;
      
      // If the message is the current question text, use the pre-loaded key
      // Strip dynamic remediation text if present to match preload key
      if (currentQ && lastMsg.text.includes(currentQ.question)) {
          audioKey = `q_${currentQ.id}`;
      } else if (lastMsg.id === 'intro') {
          audioKey = 'msg_intro'; 
      }

      handlePlayAudio(lastMsg.text, audioKey);
    }
  }, [gameState.history.length, gameState.isWaitingForNext, gameState.animationFeedback, gameState.currentQuestion]);

  // Reset Dependent Settings when Level Changes
  useEffect(() => {
    let defaultGrade = 1;
    if (settings.level === 'SD') defaultGrade = 1;
    if (settings.level === 'SMP') defaultGrade = 7;
    if (settings.level === 'SMA') defaultGrade = 10;
    
    // Check if current grade is out of bounds for the new level
    let isOutOfBounds = false;
    if (settings.level === 'SD' && (settings.grade < 1 || settings.grade > 6)) isOutOfBounds = true;
    if (settings.level === 'SMP' && (settings.grade < 7 || settings.grade > 9)) isOutOfBounds = true;
    if (settings.level === 'SMA' && (settings.grade < 10 || settings.grade > 12)) isOutOfBounds = true;

    // Default theme change when level changes (User can override later)
    const newTheme = DEFAULT_LEVEL_THEMES[settings.level];

    setSettings(s => ({ 
        ...s, 
        grade: isOutOfBounds ? defaultGrade : s.grade, 
        subjects: isOutOfBounds ? [] : s.subjects, 
        chapters: isOutOfBounds ? [] : s.chapters,
        themeColor: newTheme
    }));
  }, [settings.level]);

  // Reset Subjects/Chapters when Grade Changes
  useEffect(() => {
      setSettings(s => ({ ...s, subjects: [], chapters: [] }));
  }, [settings.grade]);


  // Auto-update Question Count
  useEffect(() => {
    const total = calculateTotalQuestions();
    setSettings(prev => ({ ...prev, questionCount: Math.min(prev.questionCount || 5, Math.max(1, total)) }));
  }, [settings.subjects, settings.semester, settings.chapters, settings.questionTypes, settings.level, settings.grade]);

  const handlePlayAudio = async (text: string, cacheKey?: string) => {
    const result = await playGeminiTTS(text, cacheKey);
    if (result === false) {
      await playNativeTTS(text);
    }
  };

  // Helper to render bold text from markdown-style **text**
  const renderFormattedText = (text: string) => {
    // Split by ** to separate bold parts
    const parts = text.split('**');
    return parts.map((part, index) => {
      // Odd indices are the text between ** **, so they should be bold
      if (index % 2 === 1) {
        return <strong key={index} className="font-extrabold text-gray-900">{part}</strong>;
      }
      // Even indices are normal text
      return <span key={index}>{part}</span>;
    });
  };

  // Per-question Timer Logic
  useEffect(() => {
    let interval: number;
    // Fix: Access animationFeedback property correctly
    if (gameState.status === 'quiz' && settings.timerEnabled && gameState.timeLeft > 0 && !gameState.isWaitingForNext && gameState.animationFeedback === null) {
      interval = window.setInterval(() => {
        setGameState(prev => {
          if (prev.timeLeft <= 1) {
            handleAnswerSubmit(null, true); 
            return { ...prev, timeLeft: 0 };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState.status, settings.timerEnabled, gameState.timeLeft, gameState.isWaitingForNext, gameState.animationFeedback]);

  // Global Elapsed Timer Logic
  useEffect(() => {
    let elapsedInterval: number;
    if (gameState.status === 'quiz') {
      elapsedInterval = window.setInterval(() => {
        setGameState(prev => ({ ...prev, elapsedTime: prev.elapsedTime + 1 }));
      }, 1000);
    }
    return () => clearInterval(elapsedInterval);
  }, [gameState.status]);

  const calculateTotalQuestions = () => {
    const count = QUESTIONS_DB.filter(q => 
      q.level === settings.level &&
      q.grade === settings.grade &&
      settings.subjects.includes(q.subject) &&
      q.semester === settings.semester &&
      settings.chapters.includes(q.chapter) &&
      settings.questionTypes.includes(q.type)
    ).length;
    
    return count > 0 ? count : 10;
  };

  // --- Logic: Setup ---
  const handleStartSetup = () => {
    if (settings.subjects.length === 0 || settings.chapters.length === 0) {
      alert("Silakan pilih mata pelajaran dan jenis soal terlebih dahulu.");
      return;
    }
    setGameState(prev => ({ ...prev, status: 'name_input' }));
  };

  // --- Logic: Name Submission & Start Quiz ---
  const handleConfirmName = () => {
    stopAudio();
    const finalName = tempUserName.trim() || "Teman";

    let filtered = QUESTIONS_DB.filter(q => 
      q.level === settings.level &&
      q.grade === settings.grade &&
      settings.subjects.includes(q.subject) &&
      q.semester === settings.semester &&
      settings.chapters.includes(q.chapter) &&
      settings.questionTypes.includes(q.type)
    );

    filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, settings.questionCount);

    if (filtered.length === 0) {
      // Fallback for empty (should be caught in setup, but just in case)
      const dummyQ: QuestionData = {
          id: 'dummy',
          level: settings.level,
          grade: settings.grade,
          subject: settings.subjects[0] || "Umum",
          semester: settings.semester,
          chapter: settings.chapters[0] || 1,
          type: 'essay',
          question: "Jelaskan apa yang kamu ketahui tentang mata pelajaran ini.",
          options: [],
          correct_answer: "belajar",
      };
      filtered = [dummyQ];
    }

    const firstQ = filtered[0];
    const initialQueue = filtered.slice(1);
    
    // Trigger background preloading for the whole quiz queue WITH user name
    preloadQuizAssets(filtered, finalName);

    // Prepare personalized intro text
    const introText = `Halo ${finalName}! Mari kita mulai belajar ${settings.subjects.join(', ')} Kelas ${settings.grade}. Semangat! 🚀\n\n${firstQ.question}`;

    // Pre-load audio for the intro (Generated on the fly since name is dynamic)
    generateGeminiAudio(introText, 'msg_intro');
    // Also specific key for first question to be safe
    generateGeminiAudio(firstQ.question, `q_${firstQ.id}`);

    setGameState({
      status: 'quiz',
      userName: finalName,
      score: 0,
      totalAnswered: 0,
      history: [{
        id: 'intro',
        sender: 'teacher',
        text: introText,
        imagePrompts: firstQ.image_prompt ? [firstQ.image_prompt] : [],
        isQuestion: true
      }] as ChatMessage[],
      queue: initialQueue,
      currentQuestion: firstQ,
      remediationState: {}, // Initialize empty remediation map
      currentStreak: 0, 
      timeLeft: settings.timerEnabled ? (firstQ.type === 'essay' ? 120 : 60) : 0, 
      isWaitingForNext: false,
      lastAnswerCorrect: null,
      showConfetti: false,
      animatingOptionValue: null,
      animationFeedback: null,
      correctAnswerOptionValue: null,
      elapsedTime: 0, 
      questionAttempts: [], 
      confettiKey: 0, 
    });
    setLearningSuggestions(null); 
  };

  // Helper to extract the base ID from a proxy or retry ID
  const getBaseId = (id: string): string => {
    // Splits by _proxy or _retry and takes the first part
    return id.replace(/(_proxy.*|_retry.*)/, '');
  };

  // Helper to insert a question into the queue at a random position (3 to 10 steps ahead)
  const insertAtRandomPosition = (queue: QuestionData[], question: QuestionData) => {
    const minDistance = 2; // Index 2 means 3rd position (0, 1, 2)
    const maxDistance = 9; // Index 9 means 10th position
    
    // If queue is short, insert at end or random available position
    if (queue.length <= minDistance) {
        const randomIndex = Math.floor(Math.random() * (queue.length + 1));
        queue.splice(randomIndex, 0, question);
    } else {
        const actualMax = Math.min(queue.length, maxDistance);
        const range = actualMax - minDistance + 1;
        const randomIndex = Math.floor(Math.random() * range) + minDistance;
        queue.splice(randomIndex, 0, question);
    }
    return queue;
  };

  // --- Logic: Answering ---
  const handleAnswerSubmit = async (answer: string | null, timeUp = false) => {
    // 1. Pre-check and initial state
    if (isProcessing || gameState.animationFeedback !== null || gameState.isWaitingForNext) return;
    
    // Capture time taken immediately
    const timeTaken = Math.max(1, Math.round((Date.now() - questionStartTimeRef.current) / 1000));
    const timeString = `\n⏱️ Waktu menyelesaikan soal ini adalah ${timeTaken} detik.`;

    setIsProcessing(true);
    stopAudio(); 

    const currentQ = gameState.currentQuestion;
    if (!currentQ) {
      setIsProcessing(false);
      return;
    }

    const userAns = answer ? answer.trim() : "Waktu Habis";
    const correctAns = currentQ.correct_answer;
    const name = gameState.userName || "Teman";

    // 2. Immediate UI updates (user answer & optional thinking message)
    const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'student',
        text: userAns,
    };
    
    // Create thinking message only for essay questions
    const thinkingMsgId = currentQ.type === 'essay' ? Date.now().toString() + '_thinking' : null;
    const thinkingMsg: ChatMessage | null = thinkingMsgId ? {
        id: thinkingMsgId,
        sender: 'teacher',
        text: "Jawabanmu sedang dinilai.....",
    } : null;

    setGameState(prev => ({
        ...prev,
        history: [...prev.history, userMsg, ...(thinkingMsg ? [thinkingMsg] : [])],
    }));
    setInputText(""); // Clear input immediately for all types

    // This part runs without delay for correctness/feedback logic
    let isCorrect = false;
    let aiFeedback = "";
    
    // For audio caching logic
    let audioCacheKey: string | undefined = undefined;
    let audioSpeechText = "";

    // 3. Determine correctness and AI feedback (async for essay, sync for others)
    if (currentQ.type === 'essay' && !timeUp && answer) {
        try {
            // Pass user name to grading for personalized feedback
            const grade = await gradeEssayWithGemini(userAns, correctAns, name);
            isCorrect = grade.score >= 50;
            aiFeedback = `${grade.score >= 50 ? '👍' : '🤔'} (Skor: ${grade.score})\n${grade.feedback}`;
            // Essay feedback is dynamic, so no cache key
            audioSpeechText = aiFeedback;
        } catch (e) {
            console.error("Error grading essay with Gemini:", e);
            isCorrect = userAns.toLowerCase().includes(correctAns.toLowerCase());
            aiFeedback = `Gagal menilai dengan AI. Jawaban yang benar adalah: ${correctAns}.`;
            audioSpeechText = aiFeedback;
        }
    } else if (timeUp) {
        aiFeedback = `Waktu habis, ${name}! Jawaban yang benar adalah: ${correctAns}.`;
        audioSpeechText = aiFeedback;
    } else { // For multiple_choice/true_false
        isCorrect = userAns.toLowerCase() === correctAns.toLowerCase();
        
        if (isCorrect) {
            aiFeedback = `Benar, ${name}! 🎉 Hebat sekali!`;
            // Use the generic correct audio
            audioCacheKey = "fb_correct";
            audioSpeechText = `Benar, ${name}! Jawabanmu tepat sekali. Hebat!`; 
        } else {
            // Standard wrong feedback
            aiFeedback = `Kurang tepat, ${name}. Jawaban yang benar adalah: ${correctAns}. 😔`;
            // Use the specific wrong feedback pre-loaded for this question
            audioCacheKey = `fb_wrong_${currentQ.id}`;
            audioSpeechText = `Kurang tepat, ${name}. Jawaban yang benar adalah ${correctAns}.`;
        }
    }

    // 4. Trigger animations/sounds and update temporary state for animation feedback
    setGameState(prev => {
        // Point 7: Only count as "Wrong" if it's the first time this Question ID (base ID) is encountered.
        // Or strictly speaking, if it's a "fresh" question. But tracking all attempts is useful for stats.
        // We will filter distinct questions later in summary.
        
        const baseId = getBaseId(currentQ.id);
        // Check if this base ID has been attempted before
        const isFirstAttempt = !prev.questionAttempts.some(qa => getBaseId(qa.questionId) === baseId);

        return {
          ...prev,
          animatingOptionValue: userAns, 
          animationFeedback: isCorrect ? 'correct' : 'wrong',
          correctAnswerOptionValue: isCorrect ? null : correctAns,
          showConfetti: isCorrect,
          confettiKey: isCorrect ? prev.confettiKey + 1 : prev.confettiKey,
          questionAttempts: [...prev.questionAttempts, { 
            questionId: currentQ.id, 
            isCorrect: isCorrect,
            subject: currentQ.subject,
            chapter: currentQ.chapter,
          }],
        }
    });

    if (isCorrect) {
        correctAudio.current?.play().catch(e => console.log("Audio play failed", e));
    } else {
        wrongAudio.current?.play().catch(e => console.log("Audio play failed", e));
    }

    // 5. Delayed final UI update
    setTimeout(async () => {
        // Calculate the streak value that *will be committed* to state
        const futureCurrentStreak = isCorrect ? gameState.currentStreak + 1 : 0; 

        let finalFeedbackText = aiFeedback;

        if (isCorrect && futureCurrentStreak >= 3) {
            finalFeedbackText = `Luar biasa, ${name}! 🔥 Streakmu ${futureCurrentStreak}! ${aiFeedback.replace(`Benar, ${name}! 🎉 Hebat sekali!`, '')}`;
        } else if (!isCorrect && gameState.currentStreak > 0) {
            finalFeedbackText = `Ups, streakmu terhenti di ${gameState.currentStreak}. Jangan menyerah ${name}! ${aiFeedback}`;
        }

        // Append the time string to the final feedback
        finalFeedbackText += timeString;

        const finalTeacherMsg: ChatMessage = {
            id: Date.now().toString() + '_fb',
            sender: 'teacher',
            text: finalFeedbackText
        } as ChatMessage;

        setGameState(prev => {
            let updatedHistory = [...prev.history];
            if (thinkingMsgId) {
                // Replace the thinking message with the final teacher feedback
                updatedHistory = updatedHistory.map(msg => 
                    msg.id === thinkingMsgId ? finalTeacherMsg : msg
                );
            } else {
                updatedHistory.push(finalTeacherMsg);
            }

            return {
                ...prev,
                history: updatedHistory,
                isWaitingForNext: true,
                lastAnswerCorrect: isCorrect,
                currentStreak: futureCurrentStreak, 
                animatingOptionValue: null,
                animationFeedback: null,
                correctAnswerOptionValue: null,
                showConfetti: false,
            };
        });
        setIsProcessing(false); 
        
        await handlePlayAudio(audioSpeechText || finalFeedbackText, audioCacheKey); 
    }, 2000); 
  };

  // --- Core Logic: Navigation & Remediation Loop ---
  const handleNextQuestion = () => {
    stopAudio();
    setGameState(prev => {
      const isCorrect = prev.lastAnswerCorrect === true;
      const question = prev.currentQuestion;
      const name = prev.userName || "Teman";
      if (!question) return prev;

      // Calculate score and total - ONLY if it's the FIRST attempt of a main question
      // This prevents inflating score with remediation questions
      const baseId = getBaseId(question.id);
      
      // Determine if this exact question instance was a "fresh" attempt (not a proxy or retry in the queue)
      // We look at the ID suffix to guess. 
      // Original IDs: "SD_1_MAT_1_1"
      // Proxy IDs: "..._proxy..."
      // Retry IDs: "..._retry..."
      
      const isProxy = question.id.includes('_proxy');
      const isRetry = question.id.includes('_retry');
      const isFresh = !isProxy && !isRetry;

      let newScore = prev.score;
      let newTotalAnswered = prev.totalAnswered;

      if (isFresh) {
          // Point 7: Only count stats for the first answer (even if wrong)
          newTotalAnswered += 1;
          if (isCorrect) newScore += 1;
      }

      let newHistory: ChatMessage[] = [...prev.history];
      let newQueue = [...prev.queue];
      let newRemediationState = { ...prev.remediationState };
      
      // --- Remediation Logic (The 7 Points) ---
      
      const originalQ = QUESTIONS_DB.find(q => q.id === baseId) || question;
      const proxyQ = originalQ.proxy ? { ...originalQ.proxy, id: baseId + '_proxy_' + Date.now(), proxy: undefined } : null;
      const retryQ = { ...originalQ, id: baseId + '_retry_' + Date.now(), proxy: undefined };

      // Point 1: If user answers wrong (Main/Fresh), ask Proxy randomly later.
      if (isFresh && !isCorrect) {
          if (proxyQ) {
              newQueue = insertAtRandomPosition(newQueue, proxyQ);
              newRemediationState[baseId] = { step: 'waiting_for_proxy', proxyPassed: false };
          }
          // If no proxy exists, maybe just retry main? Following prompt strictly: "Proxynya".
          // If no proxy, we might fall back to retry main directly or just skip. Let's insert Main retry if no proxy.
          else {
              newQueue = insertAtRandomPosition(newQueue, retryQ);
              newRemediationState[baseId] = { step: 'waiting_for_main_retry', proxyPassed: false }; // Dummy state
          }
      }

      // Point 2: If user answers wrong (Proxy), ask Main again randomly later.
      if (isProxy && !isCorrect) {
          // Flag that proxy failed
          newRemediationState[baseId] = { step: 'waiting_for_main_retry', proxyPassed: false };
          newQueue = insertAtRandomPosition(newQueue, retryQ);
      }

      // Point 3: If user answers wrong (Main Retry) -> Go back to Point 1 (Ask Proxy)
      if (isRetry && !isCorrect) {
          if (proxyQ) {
              newQueue = insertAtRandomPosition(newQueue, proxyQ);
              newRemediationState[baseId] = { step: 'waiting_for_proxy', proxyPassed: false };
          } else {
              // Fallback loop if no proxy
              newQueue = insertAtRandomPosition(newQueue, retryQ);
          }
      }

      // Point 4: If user answers Correct (Main Retry) ... BUT failed proxy?
      // "Jika user menjawab benar pertanyaan utama, maka kembali ke poin satu" 
      // This implies if they didn't pass the full sequence (Proxy->Main), the loop isn't done.
      // But if they passed Proxy then passed Main (Point 6), it's done.
      if (isRetry && isCorrect) {
          const status = newRemediationState[baseId];
          if (status && status.proxyPassed) {
              // Point 6: Consecutive correct (Proxy then Main) -> Done.
              // Remove from remediation tracking
              delete newRemediationState[baseId]; 
          } else {
              // Point 4: Got Main right, but Proxy was failed/skipped -> Loop continues (Back to Proxy)
              if (proxyQ) {
                  newQueue = insertAtRandomPosition(newQueue, proxyQ);
                  newRemediationState[baseId] = { step: 'waiting_for_proxy', proxyPassed: false };
              } else {
                  // If no proxy exists, getting Main right should effectively end the loop
                  delete newRemediationState[baseId]; 
              }
          }
      }

      // Point 5: If user answers Correct (Proxy) -> Ask Main randomly.
      if (isProxy && isCorrect) {
          newRemediationState[baseId] = { step: 'waiting_for_main_retry', proxyPassed: true };
          newQueue = insertAtRandomPosition(newQueue, retryQ);
      }

      // Point 6 is handled in Point 4's logic (Success condition).

      
      // --- Proceed to Next ---
      const nextQuestion = newQueue.shift() || null;
      let nextTime = 0;
      let status: QuizState['status'] = prev.status;

      if (!nextQuestion) {
        status = 'analyzing'; 
        newHistory.push({
           id: 'end',
           sender: 'teacher',
           text: `Sesi latihan selesai! Mari kita lihat nilaimu, ${name}.`
        } as ChatMessage);
      } else {
        // Preload assets for the specific next question if distinct
        preloadQuizAssets([nextQuestion], name);

        newHistory.push({
          id: nextQuestion.id, // Use unique ID from queue (includes suffixes)
          sender: 'teacher',
          text: nextQuestion.question,
          imagePrompts: nextQuestion.image_prompt ? [nextQuestion.image_prompt] : [],
          isQuestion: true
        } as ChatMessage);
        
        if (settings.timerEnabled && nextQuestion) { 
            nextTime = nextQuestion.type === 'essay' ? 120 : 60; 
        }
      }

      return {
        ...prev,
        score: newScore,
        history: newHistory,
        queue: newQueue,
        remediationState: newRemediationState,
        currentQuestion: nextQuestion,
        status: status,
        timeLeft: nextTime,
        totalAnswered: newTotalAnswered,
        isWaitingForNext: false,
        lastAnswerCorrect: null,
        showConfetti: false,
        animatingOptionValue: null,
        animationFeedback: null,
        correctAnswerOptionValue: null,
      };
    });
  };

  const handleStop = () => {
    stopAudio();
    setGameState(prev => ({ ...prev, status: 'analyzing' })); // Changed from 'summary' to 'analyzing'
  };

  const handleRestart = () => {
    stopAudio();
    setGameState({
      status: 'setup',
      userName: null, // Reset name on full restart
      score: 0,
      totalAnswered: 0,
      history: [],
      queue: [],
      currentQuestion: null,
      remediationState: {}, // Reset complex remediation state
      currentStreak: 0, // Reset general streak
      timeLeft: 0,
      isWaitingForNext: false,
      lastAnswerCorrect: null,
      showConfetti: false,
      // Fix: Reset new animation-related state properties
      animatingOptionValue: null,
      animationFeedback: null,
      correctAnswerOptionValue: null,
      elapsedTime: 0, // Reset elapsed time on restart
      questionAttempts: [], // New: Reset question attempts
      confettiKey: 0, // New: Reset confetti key on restart
    });
    setLearningSuggestions(null); // New: Clear previous suggestions
    setTempUserName(''); // Clear temp name input
  };

  // New Effect to generate Learning Suggestions AND Background Audio when in 'analyzing' state
  useEffect(() => {
    if (gameState.status === 'analyzing' && learningSuggestions === null) {
      const processResults = async () => {
        // 1. Gather wrong questions - Filter for FIRST ATTEMPTS of base IDs only
        // We only want to summarize based on the initial performance, not the remedial loops
        const uniqueAttempts = new Map();
        
        gameState.questionAttempts.forEach(attempt => {
            const baseId = getBaseId(attempt.questionId);
            // Only store the first attempt for each base ID
            if (!uniqueAttempts.has(baseId)) {
                uniqueAttempts.set(baseId, attempt);
            }
        });

        const wrongQuestions = Array.from(uniqueAttempts.values())
            .filter(attempt => !attempt.isCorrect)
            .map(attempt => {
                const qData = QUESTIONS_DB.find(q => q.id === getBaseId(attempt.questionId));
                return {
                    question: qData?.question || "Pertanyaan tidak diketahui",
                    subject: attempt.subject,
                    chapter: attempt.chapter
                };
            });

        // 2. Generate Text Suggestions (AI) with User Name
        const name = gameState.userName || "Teman";
        const suggestionsText = await generateLearningSuggestionsWithGemini(
          wrongQuestions,
          settings.level,
          name
        );
        
        // 3. Generate Audio Buffer in the background (Pre-load audio)
        // This runs while the user still sees the "Analyzing" screen
        let audioBuffer: AudioBuffer | null = null;
        try {
           audioBuffer = await generateGeminiAudio(suggestionsText);
        } catch (e) {
           console.error("Failed to generate audio buffer", e);
        }

        // 4. Update state to show summary
        setLearningSuggestions(suggestionsText);
        setGameState(prev => ({ ...prev, status: 'summary' }));

        // 5. Play audio immediately after showing summary
        if (audioBuffer) {
           await playAudioBuffer(audioBuffer);
        } else {
           // Fallback to Native TTS if Gemini Audio failed
           await playNativeTTS(suggestionsText);
        }
      };

      processResults();
    }
  }, [gameState.status, learningSuggestions, gameState.questionAttempts, settings.level, gameState.userName]);


  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const renderSetup = () => {
    const theme = PALETTES[settings.themeColor] || PALETTES['Rose'];
    const availableSubjects = getSubjects(settings.level, settings.grade);
    // const totalAvailable = calculateTotalQuestions(); // Not used directly in render

    // Config for grades per level
    const gradeOptions = settings.level === 'SD' ? [1,2,3,4,5,6] : settings.level === 'SMP' ? [7,8,9] : [10,11,12];

    return (
      <div className="max-w-lg mx-auto p-6 bg-white min-h-screen flex flex-col gap-6 font-sans animate-fade-in">
        <div className="text-center mb-2">
            <h1 className={`text-3xl font-extrabold ${theme.text} tracking-tight`}>Smart LKS</h1>
            <p className="text-gray-500 text-sm">Asisten Belajar Interaktif</p>
        </div>
        
        {/* Level Selection */}
        <div>
            <label className={`text-sm font-bold ${theme.textDark} block mb-2`}>Jenjang Sekolah</label>
            <div className="grid grid-cols-3 gap-3">
                {(['SD', 'SMP', 'SMA'] as SchoolLevel[]).map(lvl => {
                    // Pre-calculate theme for level buttons to match the logic (SD=Rose, etc) even if unselected
                    const levelDefaultColor = DEFAULT_LEVEL_THEMES[lvl];
                    const levelTheme = PALETTES[levelDefaultColor];
                    
                    return (
                        <button
                            key={lvl}
                            onClick={() => setSettings(s => ({ ...s, level: lvl }))}
                            className={`py-3 rounded-xl font-bold text-lg transition-all border-2 ${settings.level === lvl ? `${levelTheme.primary} text-white ${levelTheme.border} shadow-lg scale-105` : `bg-white text-gray-400 border-gray-100 hover:border-gray-300`}`}
                        >
                            {lvl}
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Grade Selection */}
        <div className={`${theme.secondary} p-5 rounded-3xl border ${theme.border}`}>
            <div className="flex items-center justify-between mb-4">
                <label className={`text-sm font-bold ${theme.textDark} flex items-center gap-2`}><GraduationCap size={18}/> Kelas</label>
                
                {/* Semester Toggle */}
                <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
                    {[1, 2].map(sem => (
                        <button
                            key={sem}
                            onClick={() => setSettings(s => ({ ...s, semester: sem }))}
                            className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${settings.semester === sem ? `${theme.primary} text-white` : 'text-gray-400 hover:bg-gray-100'}`}
                        >
                            Sem {sem}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
                {gradeOptions.map(g => (
                    <button
                        key={g}
                        onClick={() => setSettings(s => ({ ...s, grade: g }))}
                        className={`h-12 rounded-xl font-bold text-lg transition-all border-2 ${settings.grade === g ? 'bg-white border-current text-current shadow-md' : 'bg-white/50 border-transparent text-gray-400 hover:bg-white'} ${settings.grade === g ? theme.text : ''} ${settings.grade === g ? theme.border : ''}`}
                    >
                        {g}
                    </button>
                ))}
            </div>
        </div>

        {/* Subjects */}
        <div>
            <label className={`block text-sm font-bold ${theme.textDark} mb-3 flex items-center gap-2 pl-1`}><BookOpen size={18}/> Mata Pelajaran</label>
            <div className="flex flex-wrap gap-2">
                {availableSubjects.length > 0 ? availableSubjects.map(sub => (
                    <button
                        key={sub}
                        onClick={() => setSettings(s => {
                            const newSubjects = s.subjects.includes(sub) ? s.subjects.filter(x => x !== sub) : [...s.subjects, sub];
                            return { ...s, subjects: newSubjects };
                        })}
                        className={`px-4 py-2 rounded-xl border-2 font-semibold transition-all text-sm ${settings.subjects.includes(sub) ? `${theme.primary} text-white border-transparent shadow-md` : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                    >
                        {sub}
                    </button>
                )) : <div className="text-gray-400 text-sm italic w-full text-center py-4 bg-gray-50 rounded-xl">Belum ada mata pelajaran.</div>}
            </div>
        </div>

        {/* Chapters */}
        {settings.subjects.length > 0 && (
          <div>
            <label className={`block text-sm font-bold ${theme.textDark} mb-3 flex items-center gap-2 pl-1`}><List size={18}/> Bab</label>
            <div className="grid grid-cols-3 gap-2">
              {getChapters(settings.level, settings.grade, settings.subjects[0], settings.semester).map(chap => (
                 <button
                   key={chap}
                   onClick={() => setSettings(s => {
                     const newChapters = s.chapters.includes(chap) ? s.chapters.filter(c => c !== chap) : [...s.chapters, chap];
                     return { ...s, chapters: newChapters };
                   })}
                   className={`py-2 rounded-lg border-2 font-medium text-sm transition-all ${settings.chapters.includes(chap) ? `${theme.primary} text-white border-transparent shadow-sm` : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
                 >
                   Bab {chap}
                 </button>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 mt-auto">
             <label className="block text-xs font-bold text-gray-500 mb-4 uppercase tracking-wide">Pengaturan Tambahan</label>
             
             {/* Question Types */}
             <div className="mb-4">
                <label className={`block text-xs font-bold ${theme.textDark} mb-2 flex items-center gap-1`}>
                    <List size={14}/> Jenis Soal
                </label>
                <div className="flex flex-wrap gap-2">
                    {[
                        { id: 'multiple_choice', label: 'Pilihan Ganda' },
                        { id: 'true_false', label: 'Benar/Salah' },
                        { id: 'essay', label: 'Esai' }
                    ].map(type => (
                        <button
                            key={type.id}
                            onClick={() => setSettings(s => {
                                const current = s.questionTypes;
                                const newTypes = current.includes(type.id as any)
                                    ? current.filter(t => t !== type.id)
                                    : [...current, type.id as any];
                                // Prevent deselecting all
                                if (newTypes.length === 0) return s;
                                return { ...s, questionTypes: newTypes };
                            })}
                            className={`px-3 py-2 rounded-lg text-xs font-bold border-2 transition-all flex items-center gap-1
                                ${settings.questionTypes.includes(type.id as any) 
                                    ? `${theme.primary} text-white border-transparent` 
                                    : 'bg-white text-gray-500 border-gray-200'}`}
                        >
                            {settings.questionTypes.includes(type.id as any) && <CheckCircle size={12} />}
                            {type.label}
                        </button>
                    ))}
                </div>
             </div>

             {/* Timer Toggle */}
             <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={16} /> 
                    <span className="text-sm font-medium">Timer</span>
                </div>
                <button 
                    onClick={() => setSettings(s => ({...s, timerEnabled: !s.timerEnabled}))}
                    className={`w-12 h-6 rounded-full transition-colors relative ${settings.timerEnabled ? theme.primary : 'bg-gray-300'}`}
                >
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${settings.timerEnabled ? 'left-7' : 'left-1'}`} />
                </button>
             </div>

             {/* Question Count Slider */}
             <div className="mb-4">
                 <div className="flex justify-between text-xs text-gray-500 font-bold mb-1">
                    <span>Jumlah Soal</span>
                    <span>{settings.questionCount}</span>
                 </div>
                 <input 
                   type="range" min="1" max="50" step="1" 
                   value={settings.questionCount}
                   onChange={(e) => setSettings(s => ({...s, questionCount: parseInt(e.target.value)}))}
                   className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-${theme.accent}-500`}
                 />
             </div>

             {/* Font Size Adjustment */}
             <div className="mb-4">
                 <div className="flex justify-between text-xs text-gray-500 font-bold mb-1">
                    <span>Ukuran Font</span>
                    <span>
                      {settings.fontSize === 1 ? 'Sangat Kecil' : 
                       settings.fontSize === 2 ? 'Kecil' : 
                       settings.fontSize === 3 ? 'Sedang' : 
                       settings.fontSize === 4 ? 'Besar' : 'Sangat Besar'}
                    </span>
                 </div>
                 <input 
                   type="range" min="1" max="5" step="1" 
                   value={settings.fontSize}
                   onChange={(e) => setSettings(s => ({...s, fontSize: parseInt(e.target.value)}))}
                   className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-${theme.accent}-500`}
                 />
             </div>

             {/* Theme Color Picker */}
             <div>
                 <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Palette size={16} /> 
                    <span className="text-sm font-medium">Tema Warna</span>
                 </div>
                 <div className="flex flex-wrap gap-2 justify-between">
                    {Object.keys(PALETTES).map((colorKey) => {
                        const palette = PALETTES[colorKey];
                        const isSelected = settings.themeColor === colorKey;
                        return (
                            <button
                                key={colorKey}
                                onClick={() => setSettings(s => ({...s, themeColor: colorKey}))}
                                className={`w-8 h-8 rounded-full ${palette.bg} transition-all duration-200 flex items-center justify-center ${isSelected ? 'ring-2 ring-offset-2 ring-gray-400 scale-110 shadow-sm' : 'hover:scale-105'}`}
                                title={colorKey}
                            >
                                {isSelected && <CheckCircle size={14} className="text-white" />}
                            </button>
                        );
                    })}
                 </div>
             </div>
        </div>

        <button 
          onClick={handleStartSetup}
          disabled={settings.subjects.length === 0 || settings.chapters.length === 0}
          className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-xl shadow-xl ${theme.hover} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-transform active:scale-95`}
        >
          <Play size={24} fill="currentColor" /> Mulai
        </button>
      </div>
    );
  };

  // New: Render Name Input Screen
  const renderNameInput = () => {
    const theme = PALETTES[settings.themeColor] || PALETTES['Rose'];
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 animate-fade-in">
         <div className="max-w-sm w-full">
            <div className={`w-20 h-20 mx-auto ${theme.secondary} rounded-full flex items-center justify-center mb-6 shadow-inner`}>
                <User size={40} className={theme.text} />
            </div>
            <h2 className={`text-2xl font-bold text-center ${theme.textDark} mb-2`}>Siapa namamu?</h2>
            <p className="text-center text-gray-500 text-sm mb-8">Aku ingin mengenalmu lebih dekat.</p>
            
            <input 
              type="text"
              placeholder="Ketik namamu di sini..."
              value={tempUserName}
              onChange={(e) => setTempUserName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && tempUserName.trim() && handleConfirmName()}
              autoFocus
              className={`w-full text-center text-xl font-bold p-4 border-b-2 border-gray-200 focus:border-${theme.accent}-500 focus:outline-none bg-transparent transition-colors mb-8 placeholder-gray-300`}
            />

            <button 
              onClick={handleConfirmName}
              disabled={!tempUserName.trim()}
              className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-lg shadow-lg ${theme.hover} disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 flex items-center justify-center gap-2`}
            >
              Lanjut <ArrowRight size={20} />
            </button>
         </div>
      </div>
    );
  };

  const renderQuiz = () => {
    const theme = PALETTES[settings.themeColor] || PALETTES['Rose'];
    // Dynamic font size class based on settings
    const fontSizeClass = 
      settings.fontSize === 1 ? 'text-xs' :
      settings.fontSize === 2 ? 'text-sm' :
      settings.fontSize === 4 ? 'text-lg' :
      settings.fontSize === 5 ? 'text-xl' : 'text-base'; // Default for 3
    
    // Calculate questions remaining (total set - already answered)
    // Note: totalAnswered increments on the *next* question, so for current display,
    // if currentQuestion exists, it's one more question than totalAnswered.
    // If we're at the summary, currentQuestion is null, so it's just totalAnswered.
    // Loop questions (Proxy/Retry) are extra steps, so don't count towards the original total.
    // To make this accurate, we need to count how many *fresh* questions are remaining in the queue.
    
    // Simple calc: Total planned - Currently Answered Fresh
    const displayQuestionsLeft = Math.max(0, settings.questionCount - gameState.totalAnswered);

    return (
      <div className={`flex flex-col h-screen bg-slate-50 ${fontSizeClass}`}>
        {/* Header */}
        <div className="bg-white px-4 py-3 shadow-md flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            {/* Current Question Number */}
            <div className={`w-10 h-10 ${theme.secondary} rounded-full flex items-center justify-center ${theme.text} font-bold border ${theme.border} shadow-sm`}>
               {Math.min(gameState.totalAnswered + 1, settings.questionCount)}
            </div>

            {/* Questions Left */}
            <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-gray-100 text-gray-700`}>
                <List size={16} /> {displayQuestionsLeft}
            </div>

            {/* Current Score */}
            <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-green-100 text-green-700`}>
                <CheckCircle size={16} /> {gameState.score}
            </div>

            {/* Per-question timer */}
            {settings.timerEnabled && (
                <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-gray-100 ${gameState.timeLeft < 10 ? 'text-red-500 bg-red-50' : 'text-gray-700'}`}>
                    <Clock size={16} /> {gameState.timeLeft}s
                </div>
            )}
            {/* Global elapsed time */}
            <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-700`}>
                <Clock size={16} /> {formatTime(gameState.elapsedTime)}
            </div>
            {gameState.currentStreak > 0 && (
                <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700`}>
                    <Flame size={16} className="text-yellow-500" /> {gameState.currentStreak}
                </div>
            )}
          </div>

          <div className="flex items-center gap-3">
             <button 
               onClick={handleStop}
               className="px-4 py-2 bg-red-50 text-red-600 rounded-full flex items-center gap-2 text-sm font-bold border border-red-100 hover:bg-red-100 transition-colors"
             >
               <StopCircle size={18} /> Berhenti
             </button>
          </div>
        </div>

        {/* Confetti */}
        {gameState.showConfetti && <ConfettiPop key={gameState.confettiKey} />}

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 chat-scroll pb-40">
          {gameState.history.map((msg) => (
            <div 
              key={msg.id} 
              className={`chat ${msg.sender === 'teacher' ? 'chat-start' : 'chat-end'} flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}
            >
              <div className={`max-w-[85%] rounded-3xl p-5 shadow-sm border ${msg.sender === 'teacher' ? 'bg-white border-gray-100 text-gray-800 rounded-tl-none' : `${theme.primary} border-transparent text-white rounded-tr-none shadow-md`}`}>
                 <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.id.endsWith('_thinking') ? (
                       <div className="flex items-center gap-2 py-1">
                          <Loader2 className="animate-spin text-gray-400" size={20} />
                          <span className="italic text-gray-500 text-sm">Sedang menilai jawabanmu...</span>
                       </div>
                    ) : (
                       msg.text
                    )}
                 </div>
                 
                 {/* Image Generation */}
                 {msg.imagePrompts && msg.imagePrompts.length > 0 && (
                   <div className="w-full mt-3">
                     {msg.imagePrompts.map((prompt, idx) => (
                        <ToggleableImage key={idx} prompt={prompt} />
                     ))}
                   </div>
                 )}

                 {/* Audio Control */}
                 {msg.sender === 'teacher' && !msg.id.endsWith('_thinking') && (
                   <div className="flex justify-end mt-2">
                     <button 
                       onClick={() => handlePlayAudio(msg.text)}
                       className={`p-1.5 rounded-full ${theme.text} bg-opacity-10 hover:bg-gray-100 transition-colors`}
                       title="Putar Suara"
                     >
                       <Volume2 size={18} />
                     </button>
                   </div>
                 )}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t sticky bottom-0 z-30 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          {gameState.isWaitingForNext ? (
             <button 
               onClick={handleNextQuestion}
               className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-xl shadow-xl ${theme.hover} flex items-center justify-center gap-2 transition-transform active:scale-95 animate-bounce-subtle`}
             >
               Lanjut <ArrowRight size={24} />
             </button>
          ) : !gameState.currentQuestion ? (
             <div className="text-center text-gray-500 animate-pulse">Memuat pertanyaan...</div>
          ) : (
            <div className="max-w-3xl mx-auto">
               {gameState.currentQuestion.type === 'multiple_choice' && (
                 <div className="grid grid-cols-2 gap-2">
                   {gameState.currentQuestion.options.map((opt, idx) => {
                     // Fix: Access new animation-related state properties correctly
                     const isSelectedAndAnimating = gameState.animatingOptionValue === opt.text;
                     const isCorrectHighlight = gameState.animationFeedback === 'wrong' && gameState.correctAnswerOptionValue === opt.text;

                     let buttonClasses = `w-full text-left p-3 rounded-xl border border-gray-200 bg-white hover:${theme.secondary} hover:${theme.border} active:bg-gray-100 transition-all flex items-center gap-2 group shadow-sm`;

                     if (isSelectedAndAnimating) {
                       if (gameState.animationFeedback === 'correct') {
                         buttonClasses += ' glowing-green';
                       } else if (gameState.animationFeedback === 'wrong') {
                         buttonClasses += ' swing-red';
                       }
                     } else if (isCorrectHighlight) {
                       buttonClasses += ' correct-highlight';
                     }

                     return (
                       <button
                         key={idx}
                         onClick={() => handleAnswerSubmit(opt.text)}
                         // Fix: Access animationFeedback property correctly
                         disabled={isProcessing || gameState.animationFeedback !== null || gameState.isWaitingForNext}
                         className={buttonClasses}
                       >
                         <div className="w-6 h-6 flex-shrink-0 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center text-xs font-bold text-gray-500 transition-colors">
                           {String.fromCharCode(65 + idx)}
                         </div>
                         <div className="flex-1 min-w-0">
                           <span className={`block font-medium truncate leading-tight whitespace-normal line-clamp-2 ${fontSizeClass}`}>{opt.text}</span>
                           {opt.image_prompt && (
                             <div className="mt-1">
                               <ToggleableImage prompt={opt.image_prompt} label="Gbr" />
                             </div>
                           )}
                         </div>
                       </button>
                     );
                   })}
                 </div>
               )}

               {gameState.currentQuestion.type === 'true_false' && (
                 <div className="flex gap-4">
                    <button 
                      onClick={() => handleAnswerSubmit("Benar")} 
                      // Fix: Access new animation-related state properties correctly
                      disabled={isProcessing || gameState.animationFeedback !== null || gameState.isWaitingForNext} 
                      className={`flex-1 py-4 bg-green-50 text-green-700 hover:bg-green-100 rounded-xl font-bold border-2 border-green-200 flex items-center justify-center gap-2 transition-all shadow-sm
                        ${gameState.animatingOptionValue === "Benar" && gameState.animationFeedback === 'correct' ? 'glowing-green' : ''}
                        ${gameState.animatingOptionValue === "Benar" && gameState.animationFeedback === 'wrong' ? 'swing-red' : ''}
                        ${gameState.animationFeedback === 'wrong' && gameState.correctAnswerOptionValue === "Benar" && gameState.animatingOptionValue !== "Benar" ? 'correct-highlight' : ''}
                      `}
                    >
                        <CheckCircle size={24} /> <span className={fontSizeClass}>Benar</span>
                    </button>
                    <button 
                      onClick={() => handleAnswerSubmit("Salah")} 
                      // Fix: Access new animation-related state properties correctly
                      disabled={isProcessing || gameState.animationFeedback !== null || gameState.isWaitingForNext} 
                      className={`flex-1 py-4 bg-red-50 text-red-700 hover:bg-red-100 rounded-xl font-bold border-2 border-red-200 flex items-center justify-center gap-2 transition-all shadow-sm
                        ${gameState.animatingOptionValue === "Salah" && gameState.animationFeedback === 'correct' ? 'glowing-green' : ''}
                        ${gameState.animatingOptionValue === "Salah" && gameState.animationFeedback === 'wrong' ? 'swing-red' : ''}
                        ${gameState.animationFeedback === 'wrong' && gameState.correctAnswerOptionValue === "Salah" && gameState.animatingOptionValue !== "Salah" ? 'correct-highlight' : ''}
                      `}
                    >
                        <XCircle size={24} /> <span className={fontSizeClass}>Salah</span>
                    </button>
                 </div>
               )}

               {gameState.currentQuestion.type === 'essay' && (
                 <div className="flex gap-3">
                    <input 
                      type="text" 
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAnswerSubmit(inputText)}
                      placeholder="Ketik jawabanmu di sini..."
                      className={`flex-1 border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-${theme.accent}-500 focus:ring-4 focus:ring-${theme.accent}-100 transition-all ${fontSizeClass}`}
                    />
                    <button 
                      onClick={() => handleAnswerSubmit(inputText)}
                      // Fix: Access animationFeedback property correctly
                      disabled={!inputText.trim() || isProcessing || gameState.animationFeedback !== null || gameState.isWaitingForNext}
                      className={`${theme.primary} text-white p-4 rounded-full ${theme.hover} disabled:opacity-50 shadow-md transition-transform active:scale-95`}
                    >
                      <Send size={24} />
                    </button>
                 </div>
               )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // New Render function for the Analyzing state
  const renderAnalyzing = () => {
    const theme = PALETTES[settings.themeColor] || PALETTES['Rose'];
    const name = gameState.userName || "Teman";
    
    return (
      <div className={`min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center animate-fade-in`}>
         <div className="max-w-md w-full flex flex-col items-center">
             <div className={`w-32 h-32 ${theme.secondary} rounded-full flex items-center justify-center mb-8 shadow-inner relative`}>
                <BrainCircuit className={`text-${theme.accent}-500 animate-pulse`} size={64} />
                <div className={`absolute -top-2 -right-2 w-8 h-8 ${theme.primary} rounded-full animate-bounce flex items-center justify-center text-white`}>
                   <Lightbulb size={16} />
                </div>
             </div>
             <h2 className={`text-2xl font-bold ${theme.textDark} mb-4`}>
                Sedang Menganalisis Hasil Belajarmu...
             </h2>
             <div className="flex items-center gap-3 text-gray-500 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
                <Loader2 className="animate-spin text-gray-400" size={20} />
                <span className="font-medium text-sm">AI sedang menyiapkan saran & suara...</span>
             </div>
             <p className="mt-8 text-xs text-gray-400 max-w-xs leading-relaxed">
               Mohon tunggu sebentar {name}, Smart Coach sedang melihat kekuatan dan area yang perlu ditingkatkan.
             </p>
         </div>
      </div>
    );
  };

  const renderSummary = () => {
    const theme = PALETTES[settings.themeColor] || PALETTES['Rose'];
    const name = gameState.userName || "Teman";
    const percentage = gameState.totalAnswered > 0 
        ? Math.round((gameState.score / gameState.totalAnswered) * 100) 
        : 0;
    const fontSizeClass = 
      settings.fontSize === 1 ? 'text-xs' :
      settings.fontSize === 2 ? 'text-sm' :
      settings.fontSize === 4 ? 'text-lg' :
      settings.fontSize === 5 ? 'text-xl' : 'text-base'; // Default for 3
        
    return (
      <div className={`min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center ${fontSizeClass} animate-fade-in`}>
         <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
             <div className={`w-32 h-32 ${theme.secondary} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                <span className="text-6xl animate-bounce">🏆</span>
             </div>
             <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Hasil Kuis {name}</h1>
             <p className="text-gray-500 mb-8 font-medium">Kelas {settings.grade} • {settings.subjects.join(', ')}</p>

             <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <div className="text-4xl font-extrabold text-green-600 mb-1">{gameState.score}</div>
                    <div className="text-sm font-bold text-green-400 uppercase tracking-wider">Benar</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <div className="text-4xl font-extrabold text-gray-600 mb-1">{gameState.totalAnswered}</div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Soal</div>
                </div>
             </div>

             <div className="w-full bg-gray-100 rounded-full h-6 mb-4 overflow-hidden shadow-inner">
                <div className={`h-6 rounded-full transition-all duration-1000 flex items-center justify-end px-2 ${percentage > 70 ? 'bg-green-500' : percentage > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${percentage}%` }}>
                    {percentage > 10 && <span className="text-xs text-white font-bold">{percentage}%</span>}
                </div>
             </div>
             <div className="text-xl font-bold text-gray-700 mb-10">Nilai Akhir: <span className={theme.text}>{percentage}</span></div>

             {/* Total Elapsed Time in Summary */}
             <div className="flex items-center justify-center gap-2 text-gray-600 font-bold mb-6">
                <Clock size={20} className="text-blue-500" />
                <span>Waktu Pengerjaan: {formatTime(gameState.elapsedTime)}</span>
             </div>

             {/* New: Learning Suggestions Section */}
             <div className="mt-8 pt-6 border-t border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                    <Lightbulb size={24} className="text-yellow-500" /> Saran Belajar Tambahan
                </h2>
                {learningSuggestions ? (
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                        {renderFormattedText(learningSuggestions)}
                    </p>
                ) : (
                    <p className="text-gray-400 italic text-sm">
                        Tidak ada saran khusus.
                    </p>
                )}
             </div>


             <button 
               onClick={handleRestart}
               className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-xl shadow-lg ${theme.hover} transition-transform active:scale-95 flex items-center justify-center gap-2 mt-8`}
             >
               <Play size={24} fill="currentColor" /> Main Lagi
             </button>
         </div>
      </div>
    );
  };

  return (
    <>
      {gameState.status === 'setup' && renderSetup()}
      {gameState.status === 'name_input' && renderNameInput()}
      {gameState.status === 'quiz' && renderQuiz()}
      {gameState.status === 'analyzing' && renderAnalyzing()}
      {gameState.status === 'summary' && renderSummary()}
    </>
  );
}