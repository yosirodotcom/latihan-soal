
import React, { useState, useEffect, useRef } from 'react';
import { Play, StopCircle, Clock, Send, Volume2, Image as ImageIcon, CheckCircle, XCircle, ArrowRight, ChevronDown, ChevronUp, List, BookOpen, GraduationCap } from 'lucide-react';
import { QUESTIONS_DB, getSubjects, getChapters } from './data';
import { QuizSettings, QuizState, QuestionData, ChatMessage, SchoolLevel } from './types';
import { playGeminiTTS, generateImage, playNativeTTS, stopAudio, gradeEssayWithGemini } from './geminiService';

// Sub-component for handling Async Image Generation
const GeneratedImage: React.FC<{ prompt: string }> = ({ prompt }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchImage = async () => {
      try {
        const data = await generateImage(prompt);
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
        <span className="text-xs text-gray-400">Sedang menggambar...</span>
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
        <span className="text-xs text-gray-400 italic truncate flex-1 mr-2">{prompt}</span>
        <button 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronUp size={16} />
        </button>
      </div>
      <GeneratedImage prompt={prompt} />
    </div>
  );
}

// --- Theme Config ---
const THEME = {
  SD: {
    primary: 'bg-rose-500',
    secondary: 'bg-rose-50',
    border: 'border-rose-200',
    text: 'text-rose-600',
    textDark: 'text-rose-800',
    hover: 'hover:bg-rose-600',
    accent: 'rose'
  },
  SMP: {
    primary: 'bg-indigo-600',
    secondary: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    textDark: 'text-indigo-800',
    hover: 'hover:bg-indigo-700',
    accent: 'indigo'
  },
  SMA: {
    primary: 'bg-slate-600',
    secondary: 'bg-slate-100',
    border: 'border-slate-300',
    text: 'text-slate-600',
    textDark: 'text-slate-800',
    hover: 'hover:bg-slate-700',
    accent: 'slate'
  }
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
    fontSize: 2, // 1=sm, 2=base, 3=lg
    timerEnabled: false,
    questionTypes: ['multiple_choice', 'essay', 'true_false'],
  });

  const [gameState, setGameState] = useState<QuizState>({
    status: 'setup',
    score: 0,
    totalAnswered: 0,
    history: [],
    queue: [],
    currentQuestion: null,
    loopState: { active: false, streak: 0, parentId: null },
    timeLeft: 0,
    isWaitingForNext: false,
    lastAnswerCorrect: null,
  });

  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    if (lastMsg && lastMsg.sender === 'teacher' && lastMsg.isQuestion && !gameState.isWaitingForNext) {
      handlePlayAudio(lastMsg.text);
    }
  }, [gameState.history.length]);

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

    if (isOutOfBounds) {
        setSettings(s => ({ ...s, grade: defaultGrade, subjects: [], chapters: [] }));
    }
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

  const handlePlayAudio = async (text: string) => {
    const result = await playGeminiTTS(text);
    if (result === false) {
      await playNativeTTS(text);
    }
  };

  // Timer Logic
  useEffect(() => {
    let interval: number;
    if (gameState.status === 'quiz' && settings.timerEnabled && gameState.timeLeft > 0 && !gameState.isWaitingForNext) {
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
  }, [gameState.status, settings.timerEnabled, gameState.timeLeft, gameState.isWaitingForNext]);

  const calculateTotalQuestions = () => {
    const count = QUESTIONS_DB.filter(q => 
      q.level === settings.level &&
      q.grade === settings.grade &&
      settings.subjects.includes(q.subject) &&
      q.semester === settings.semester &&
      settings.chapters.includes(q.chapter)
    ).length;
    
    return count > 0 ? count : 10;
  };

  // --- Logic: Setup ---
  const handleStartQuiz = () => {
    stopAudio();
    let filtered = QUESTIONS_DB.filter(q => 
      q.level === settings.level &&
      q.grade === settings.grade &&
      settings.subjects.includes(q.subject) &&
      q.semester === settings.semester &&
      settings.chapters.includes(q.chapter)
    );

    filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, settings.questionCount);

    if (filtered.length === 0) {
      if (settings.subjects.length > 0) {
          const dummyQ: QuestionData = {
              id: 'dummy',
              level: settings.level,
              grade: settings.grade,
              subject: settings.subjects[0],
              semester: settings.semester,
              chapter: settings.chapters[0] || 1,
              type: 'essay',
              question: "Jelaskan apa yang kamu ketahui tentang mata pelajaran ini.",
              options: [],
              correct_answer: "belajar",
          };
          filtered = [dummyQ];
      } else {
          alert("Silakan pilih mata pelajaran terlebih dahulu.");
          return;
      }
    }

    const firstQ = filtered[0];
    const initialQueue = filtered.slice(1);

    setGameState({
      status: 'quiz',
      score: 0,
      totalAnswered: 0,
      history: [{
        id: 'intro',
        sender: 'teacher',
        text: `Halo! Mari kita mulai belajar ${settings.subjects.join(', ')} Kelas ${settings.grade}. Semangat! 🚀\n\n${firstQ.question}`,
        imagePrompts: firstQ.image_prompt ? [firstQ.image_prompt] : [],
        isQuestion: true
      }],
      queue: initialQueue,
      currentQuestion: firstQ,
      loopState: { active: false, streak: 0, parentId: null },
      timeLeft: settings.timerEnabled && firstQ.type === 'essay' ? 120 : 0,
      isWaitingForNext: false,
      lastAnswerCorrect: null
    });
  };

  // --- Logic: Answering ---
  const handleAnswerSubmit = async (answer: string | null, timeUp = false) => {
    if (isProcessing || gameState.isWaitingForNext) return;
    setIsProcessing(true);

    const currentQ = gameState.currentQuestion;
    if (!currentQ) return;

    const userAns = answer ? answer.trim() : "Waktu Habis";
    const correctAns = currentQ.correct_answer;
    
    let isCorrect = false;
    let aiFeedback = "";

    if (!timeUp && answer) {
        if (currentQ.type === 'essay') {
            try {
              const grade = await gradeEssayWithGemini(userAns, correctAns);
              isCorrect = grade.score >= 70;
              aiFeedback = `${grade.score >= 70 ? '👍' : '🤔'} (Skor: ${grade.score})\n${grade.feedback}`;
            } catch (e) {
              isCorrect = userAns.toLowerCase().includes(correctAns.toLowerCase());
            }
        } else {
            isCorrect = userAns.toLowerCase() === correctAns.toLowerCase();
        }
    }

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: userAns,
    };

    setGameState(prev => ({
      ...prev,
      history: [...prev.history, userMsg]
    }));
    setInputText("");
    stopAudio();

    await handleTurn(isCorrect, currentQ, aiFeedback);
  };

  const handleTurn = async (isCorrect: boolean, question: QuestionData, customFeedback?: string) => {
    let feedbackText = "";
    if (customFeedback) {
        feedbackText = customFeedback;
    } else {
        feedbackText = isCorrect 
            ? "Benar! 🎉 Hebat sekali!" 
            : `Kurang tepat. Jawaban yang benar adalah: ${question.correct_answer}. 😔`;
    }
    
    setGameState(prev => ({
      ...prev,
      history: [...prev.history, {
        id: Date.now().toString() + '_fb',
        sender: 'teacher',
        text: feedbackText
      }],
      isWaitingForNext: true,
      lastAnswerCorrect: isCorrect
    }));

    setIsProcessing(false);
    await handlePlayAudio(feedbackText);
  };

  // --- Core Logic: Navigation & Looping ---
  const handleNextQuestion = () => {
    stopAudio();
    setGameState(prev => {
      const isCorrect = prev.lastAnswerCorrect === true;
      const question = prev.currentQuestion;
      if (!question) return prev;

      let newScore = prev.score;
      let newHistory = [...prev.history];
      let newQueue = [...prev.queue];
      let newLoopState = { ...prev.loopState };
      let nextQuestion: QuestionData | null = null;
      let nextTime = 0;
      let newTotalAnswered = prev.totalAnswered;

      // Logic: Wrong Answer Loop
      // Goal: Answer BOTH Main and Proxy correctly in SUCCESSION (Streak = 2).
      // If wrong, reset streak to 0 and switch to the other question.

      const isProxy = question.id.endsWith('_proxy');
      
      // Determine the "Main" question object (Parent)
      // If currently looking at proxy, parent is hidden in closure, but we can reconstruct or find it.
      // Ideally we stored parentId in loopState.
      // However, to keep it simple, we need access to the Main Question and Proxy Question.
      // The `question` object itself might be the Main, or the Proxy.
      // If it's the Proxy, we don't easily have the Main unless we stored it.
      // BUT: `question.proxy` exists on the Main. 
      // Strategy: When entering loop, store the FULL Main question in state or use ID to find it?
      // Since `queue` has popped it, we need to rely on `currentQuestion` or a stored "Problem Question".

      // Let's refine loopState to store the active main question data to easily toggle.
      // However, existing type is `parentId: string`. 
      // We can rely on: 
      // If Main -> Proxy is `question.proxy`.
      // If Proxy -> Main is ... we need to store Main in a temporary place or just toggle ID logic?
      // Better: When starting loop, keep Main in `currentQuestion` but conceptually render Proxy?
      // No, `currentQuestion` drives the UI.
      
      // We need to fetch the Main Question from DB if we are in Proxy and need to go back to Main?
      // Or just keep it in loopState. Ideally loopState should hold the `mainQuestion` object.
      // For now, let's use a hack: QUESTIONS_DB contains all questions. We can find by ID.
      // `parentId` in `loopState` is the ID of the Main Question.
      
      const getOriginalMain = (id: string): QuestionData | undefined => {
         // Flatten DB is hard because of filtering.
         // But we can just use the `question` if it IS the main.
         // If it is proxy, we need to find parent. 
         // Let's assume we can pass the main question object into `loopState` as `mainQuestion`.
         // But I can't change `types.ts` easily in this step without breaking other things?
         // I'll assume I can find it in QUESTIONS_DB.
         return QUESTIONS_DB.find(q => q.id === id);
      };

      if (prev.loopState.active && prev.loopState.parentId) {
        // --- INSIDE LOOP ---
        const mainQ = getOriginalMain(prev.loopState.parentId) || question; // Fallback
        const proxyQ = mainQ.proxy ? { ...mainQ.proxy, id: mainQ.id + '_proxy', proxy: undefined } : null;

        if (isCorrect) {
          const newStreak = prev.loopState.streak + 1;
          
          if (newStreak >= 2) {
             // SUCCESS: Streak 2. Exit Loop.
             newLoopState = { active: false, streak: 0, parentId: null };
             nextQuestion = newQueue.shift() || null;
             // Don't increment score for remediation? Or maybe yes? Usually no for repeated attempts.
             // We'll leave score as is.
          } else {
             // Streak 1. Must switch to the OTHER one.
             newLoopState = { ...prev.loopState, streak: newStreak };
             if (isProxy) {
                 // Proxy Correct -> Next is Main
                 nextQuestion = mainQ;
             } else {
                 // Main Correct -> Next is Proxy
                 nextQuestion = proxyQ;
             }
          }
        } else {
          // WRONG in Loop
          // Reset Streak. Switch to the other one.
          newLoopState = { ...prev.loopState, streak: 0 };
          if (isProxy) {
              // Proxy Wrong -> Next is Main
              nextQuestion = mainQ;
          } else {
              // Main Wrong -> Next is Proxy
              nextQuestion = proxyQ;
          }
        }

        // Safety fallback if proxy missing
        if (!nextQuestion) {
            newLoopState = { active: false, streak: 0, parentId: null };
            nextQuestion = newQueue.shift() || null;
        }

      } else {
        // --- NORMAL MODE ---
        if (isCorrect) {
          newScore += 1;
          nextQuestion = newQueue.shift() || null;
          newTotalAnswered += 1;
        } else {
          // Wrong Answer -> Enter Loop
          // Check if proxy exists
          if (question.proxy) {
             newLoopState = { active: true, streak: 0, parentId: question.id };
             // First step of loop: Ask Proxy (randomly? Prompt says "proxy question again at random...").
             // Let's just always start with Proxy to help them learn.
             nextQuestion = { ...question.proxy, id: question.id + '_proxy', proxy: undefined };
          } else {
             // No proxy available, just move on
             nextQuestion = newQueue.shift() || null;
          }
          newTotalAnswered += 1; // Count the first attempt
        }
      }

      let status: QuizState['status'] = prev.status;
      if (!nextQuestion) {
        status = 'summary';
        newHistory.push({
           id: 'end',
           sender: 'teacher',
           text: "Sesi latihan selesai! Mari kita lihat nilaimu."
        });
      } else {
        newHistory.push({
          id: nextQuestion.id + '_' + Date.now(),
          sender: 'teacher',
          text: nextQuestion.question,
          imagePrompts: nextQuestion.image_prompt ? [nextQuestion.image_prompt] : [],
          isQuestion: true
        });
        if (settings.timerEnabled && nextQuestion.type === 'essay') {
            nextTime = 120;
        }
      }

      return {
        ...prev,
        score: newScore,
        history: newHistory,
        queue: newQueue,
        loopState: newLoopState,
        currentQuestion: nextQuestion,
        status: status,
        timeLeft: nextTime,
        totalAnswered: newTotalAnswered,
        isWaitingForNext: false,
        lastAnswerCorrect: null
      };
    });
  };

  const handleStop = () => {
    stopAudio();
    setGameState(prev => ({ ...prev, status: 'summary' }));
  };

  const handleRestart = () => {
    stopAudio();
    setGameState({
      status: 'setup',
      score: 0,
      totalAnswered: 0,
      history: [],
      queue: [],
      currentQuestion: null,
      loopState: { active: false, streak: 0, parentId: null },
      timeLeft: 0,
      isWaitingForNext: false,
      lastAnswerCorrect: null,
    });
  };

  const renderSetup = () => {
    const theme = THEME[settings.level];
    const availableSubjects = getSubjects(settings.level, settings.grade);
    const totalAvailable = calculateTotalQuestions();
    
    // Config for grades per level
    const gradeOptions = settings.level === 'SD' ? [1,2,3,4,5,6] : settings.level === 'SMP' ? [7,8,9] : [10,11,12];

    return (
      <div className="max-w-lg mx-auto p-6 bg-white min-h-screen flex flex-col gap-6 font-sans animate-fade-in">
        <div className="text-center mb-2">
            <h1 className={`text-3xl font-extrabold ${theme.text} tracking-tight`}>Smart Chat K-12</h1>
            <p className="text-gray-500 text-sm">Asisten Belajar Interaktif</p>
        </div>
        
        {/* Level Selection */}
        <div>
            <label className={`text-sm font-bold ${theme.textDark} block mb-2`}>Jenjang Sekolah</label>
            <div className="grid grid-cols-3 gap-3">
                {(['SD', 'SMP', 'SMA'] as SchoolLevel[]).map(lvl => (
                    <button
                        key={lvl}
                        onClick={() => setSettings(s => ({ ...s, level: lvl }))}
                        className={`py-3 rounded-xl font-bold text-lg transition-all border-2 ${settings.level === lvl ? `${THEME[lvl].primary} text-white ${THEME[lvl].border} shadow-lg scale-105` : `bg-white text-gray-400 border-gray-100 hover:border-gray-300`}`}
                    >
                        {lvl}
                    </button>
                ))}
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
             <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Pengaturan Tambahan</label>
             <div className="flex items-center justify-between">
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
             <div className="mt-4">
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
        </div>

        <button 
          onClick={handleStartQuiz}
          disabled={settings.subjects.length === 0 || settings.chapters.length === 0}
          className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-xl shadow-xl ${theme.hover} disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-transform active:scale-95`}
        >
          <Play size={24} fill="currentColor" /> Mulai
        </button>
      </div>
    );
  };

  const renderQuiz = () => {
    const theme = THEME[settings.level];
    const fontSizeClass = settings.fontSize === 1 ? 'text-sm' : settings.fontSize === 3 ? 'text-lg' : 'text-base';
    
    return (
      <div className={`flex flex-col h-screen bg-slate-50 ${fontSizeClass}`}>
        {/* Header */}
        <div className="bg-white px-4 py-3 shadow-md flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${theme.secondary} rounded-full flex items-center justify-center ${theme.text} font-bold border ${theme.border} shadow-sm`}>
               {gameState.history.filter(m => m.sender === 'teacher' && m.isQuestion).length}
            </div>
            {settings.timerEnabled && !gameState.isWaitingForNext && (
                <div className={`flex items-center gap-1 font-mono font-bold px-3 py-1 rounded-full bg-gray-100 ${gameState.timeLeft < 10 ? 'text-red-500 bg-red-50' : 'text-gray-700'}`}>
                    <Clock size={16} /> {gameState.timeLeft}s
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

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 chat-scroll pb-40">
          {gameState.history.map((msg) => (
            <div key={msg.id} className={`chat ${msg.sender === 'teacher' ? 'chat-start' : 'chat-end'} flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] rounded-3xl p-5 shadow-sm border ${msg.sender === 'teacher' ? 'bg-white border-gray-100 text-gray-800 rounded-tl-none' : `${theme.primary} border-transparent text-white rounded-tr-none shadow-md`}`}>
                 <div className="whitespace-pre-wrap leading-relaxed">{msg.text}</div>
                 
                 {/* Image Generation */}
                 {msg.imagePrompts && msg.imagePrompts.length > 0 && (
                   <div className="w-full mt-3">
                     {msg.imagePrompts.map((prompt, idx) => (
                        <ToggleableImage key={idx} prompt={prompt} />
                     ))}
                   </div>
                 )}

                 {/* Audio Control */}
                 {msg.sender === 'teacher' && (
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
                   {gameState.currentQuestion.options.map((opt, idx) => (
                     <button
                       key={idx}
                       onClick={() => handleAnswerSubmit(opt.text)}
                       disabled={isProcessing}
                       className={`w-full text-left p-3 rounded-xl border border-gray-200 bg-white hover:${theme.secondary} hover:${theme.border} active:bg-gray-100 transition-all flex items-center gap-2 group shadow-sm`}
                     >
                       <div className="w-6 h-6 flex-shrink-0 rounded-full bg-gray-100 group-hover:bg-white group-hover:shadow-sm flex items-center justify-center text-xs font-bold text-gray-500 transition-colors">
                         {String.fromCharCode(65 + idx)}
                       </div>
                       <div className="flex-1 min-w-0">
                         <span className="block font-medium text-sm truncate leading-tight whitespace-normal line-clamp-2">{opt.text}</span>
                         {opt.image_prompt && (
                           <div className="mt-1">
                             <ToggleableImage prompt={opt.image_prompt} label="Gbr" />
                           </div>
                         )}
                       </div>
                     </button>
                   ))}
                 </div>
               )}

               {gameState.currentQuestion.type === 'true_false' && (
                 <div className="flex gap-4">
                    <button onClick={() => handleAnswerSubmit("Benar")} disabled={isProcessing} className="flex-1 py-4 bg-green-50 text-green-700 hover:bg-green-100 rounded-xl font-bold border-2 border-green-200 flex items-center justify-center gap-2 transition-all shadow-sm">
                        <CheckCircle size={24} /> Benar
                    </button>
                    <button onClick={() => handleAnswerSubmit("Salah")} disabled={isProcessing} className="flex-1 py-4 bg-red-50 text-red-700 hover:bg-red-100 rounded-xl font-bold border-2 border-red-200 flex items-center justify-center gap-2 transition-all shadow-sm">
                        <XCircle size={24} /> Salah
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
                      className={`flex-1 border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-${theme.accent}-500 focus:ring-4 focus:ring-${theme.accent}-100 transition-all`}
                    />
                    <button 
                      onClick={() => handleAnswerSubmit(inputText)}
                      disabled={!inputText.trim() || isProcessing}
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

  const renderSummary = () => {
    const theme = THEME[settings.level];
    const percentage = gameState.totalAnswered > 0 
        ? Math.round((gameState.score / gameState.totalAnswered) * 100) 
        : 0;
        
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
         <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
             <div className={`w-32 h-32 ${theme.secondary} rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner`}>
                <span className="text-6xl animate-bounce">🏆</span>
             </div>
             <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Hasil Kuis</h1>
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

             <button 
               onClick={handleRestart}
               className={`w-full py-4 ${theme.primary} text-white rounded-2xl font-bold text-xl shadow-lg ${theme.hover} transition-transform active:scale-95 flex items-center justify-center gap-2`}
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
      {gameState.status === 'quiz' && renderQuiz()}
      {gameState.status === 'summary' && renderSummary()}
    </>
  );
}
