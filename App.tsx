
import React, { useState, useEffect, useRef } from 'react';
import { Play, StopCircle, Type, Clock, Send, Volume2, Image as ImageIcon, CheckCircle, XCircle, Eye, ArrowRight, ChevronDown, ChevronUp, List, FileText, HelpCircle } from 'lucide-react';
import { QUESTIONS_DB, getSubjects, getChapters } from './data';
import { QuizSettings, QuizState, QuestionData, ChatMessage } from './types';
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
        className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors border border-blue-200 w-fit"
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

export default function App() {
  // --- State ---
  const [settings, setSettings] = useState<QuizSettings>({
    subjects: [],
    semester: 1,
    chapters: [],
    questionCount: 0,
    fontSize: 2, // 1=sm, 2=base, 3=lg
    timerEnabled: false,
    questionTypes: ['multiple_choice', 'essay', 'true_false'], // Default all selected
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.history.length]);

  // Auto-update Question Count when filters change
  useEffect(() => {
    const total = calculateTotalQuestions(settings.subjects, settings.semester, settings.chapters, settings.questionTypes);
    setSettings(prev => ({ ...prev, questionCount: total }));
  }, [settings.subjects, settings.semester, settings.chapters, settings.questionTypes]);

  const handlePlayAudio = async (text: string) => {
    // Attempt to play using Gemini TTS
    // result is true if played OR cancelled. false if failed.
    const result = await playGeminiTTS(text);
    
    // Fallback to Native TTS if Gemini failed
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
            // Time up! Treat as wrong answer
            handleAnswerSubmit(null, true); 
            return { ...prev, timeLeft: 0 };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.status, settings.timerEnabled, gameState.timeLeft, gameState.isWaitingForNext]);

  // Logic to calculate available questions
  const calculateTotalQuestions = (subjects: string[], semester: number, chapters: number[], types: string[]) => {
    return QUESTIONS_DB.filter(q => 
      subjects.includes(q.subject) &&
      q.semester === semester &&
      chapters.includes(q.chapter) &&
      types.includes(q.type)
    ).length;
  };

  // --- Logic: Setup ---
  const handleStartQuiz = () => {
    stopAudio();
    // Filter questions
    let filtered = QUESTIONS_DB.filter(q => 
      settings.subjects.includes(q.subject) &&
      q.semester === settings.semester &&
      settings.chapters.includes(q.chapter) &&
      settings.questionTypes.includes(q.type)
    );

    // Randomize and limit
    filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, settings.questionCount);

    if (filtered.length === 0) {
      alert("Tidak ada soal yang ditemukan untuk pilihan ini!");
      return;
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
        text: `Halo! Mari kita mulai belajar. Semangat ya! 🚀\n\n${firstQ.question}`,
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

    // Normalize Answer
    const userAns = answer ? answer.trim() : "Waktu Habis";
    const correctAns = currentQ.correct_answer;
    
    let isCorrect = false;
    let aiFeedback = "";

    if (!timeUp && answer) {
        if (currentQ.type === 'essay') {
            // Use AI Grading for Essay
            try {
              const grade = await gradeEssayWithGemini(userAns, correctAns);
              // Threshold: 70% match
              isCorrect = grade.score >= 70;
              aiFeedback = `${grade.score >= 70 ? '👍' : '🤔'} (Skor: ${grade.score})\n${grade.feedback}`;
            } catch (e) {
              console.error("Grading failed", e);
              // Fallback simple check
              isCorrect = userAns.toLowerCase().includes(correctAns.toLowerCase());
            }
        } else {
            // Simple check for MC/TrueFalse
            isCorrect = userAns.toLowerCase() === correctAns.toLowerCase();
        }
    }

    // Update History with User Answer immediately
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: userAns,
    };

    setGameState(prev => ({
      ...prev,
      history: [...prev.history, userMsg]
    }));
    setInputText(""); // Clear input

    // Stop current audio when user answers
    stopAudio();

    // Proceed to Feedback Flow
    await handleTurn(isCorrect, currentQ, aiFeedback);
  };

  // Async function to handle the flow: Feedback -> Audio -> Show Next Button
  const handleTurn = async (isCorrect: boolean, question: QuestionData, customFeedback?: string) => {
    // 1. Determine and Show Feedback
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

    // 2. Play Feedback Audio and Wait for it to finish
    await handlePlayAudio(feedbackText);
  };

  // Handle the transition to the next question
  const handleNextQuestion = () => {
    stopAudio();
    
    setGameState(prev => {
      const isCorrect = prev.lastAnswerCorrect === true;
      const question = prev.currentQuestion;
      
      if (!question) return prev; // Should not happen

      let newScore = prev.score;
      let newHistory = [...prev.history];
      let newQueue = [...prev.queue];
      let newLoopState = { ...prev.loopState };
      let nextQuestion: QuestionData | null = null;
      let nextTime = 0;

      // --- Logic: Loop vs Normal ---
      if (prev.loopState.active) {
        // We are inside the Wrong Answer Loop
        if (isCorrect) {
          // Increment Streak
          const newStreak = prev.loopState.streak + 1;
          
          if (newStreak >= 2) {
            // Exit Loop Condition Met! (Both correct in sequence)
            newLoopState = { active: false, streak: 0, parentId: null };
            // Move to next fresh question from queue
            nextQuestion = newQueue.shift() || null;
          } else {
            // Streak is 1. Need 1 more. Switch question type.
            newLoopState = { ...prev.loopState, streak: newStreak };
            
            if (question.proxy) {
               // Current was Main, switch to Proxy
               const isMain = question.id === prev.loopState.parentId;
               if (isMain && question.proxy) {
                   nextQuestion = { ...question.proxy, id: question.id + '_proxy', proxy: undefined }; 
               } else {
                   // Current was Proxy, switch back to Main
                   const mainQ = QUESTIONS_DB.find(q => q.id === prev.loopState.parentId);
                   if (mainQ) nextQuestion = mainQ;
                   else {
                       newLoopState = { active: false, streak: 0, parentId: null };
                       nextQuestion = newQueue.shift() || null;
                   }
               }
            } else {
                 const mainQ = QUESTIONS_DB.find(q => q.id === prev.loopState.parentId);
                 nextQuestion = mainQ || null;
            }
          }

        } else {
          // Wrong Answer inside Loop -> Reset Streak
          newLoopState = { ...prev.loopState, streak: 0 };
          
          // Toggle between Main and Proxy
          const isMain = question.id === prev.loopState.parentId;
          if (isMain && question.proxy) {
              nextQuestion = { ...question.proxy, id: question.id + '_proxy', proxy: undefined };
          } else {
              const mainQ = QUESTIONS_DB.find(q => q.id === prev.loopState.parentId);
              nextQuestion = mainQ || null;
          }
        }

      } else {
        // --- Normal Mode ---
        if (isCorrect) {
          newScore += 1; // Only count score in normal mode
          nextQuestion = newQueue.shift() || null;
          prev.totalAnswered += 1; 
        } else {
          // WRONG! Enter Loop
          if (question.proxy) {
             newLoopState = { active: true, streak: 0, parentId: question.id };
             nextQuestion = { ...question.proxy, id: question.id + '_proxy', proxy: undefined };
          } else {
             nextQuestion = newQueue.shift() || null;
             prev.totalAnswered += 1;
          }
          prev.totalAnswered += 1;
        }
      }

      // --- Next Question Handling ---
      let status: QuizState['status'] = prev.status;
      if (!nextQuestion) {
        status = 'summary';
        newHistory.push({
           id: 'end',
           sender: 'teacher',
           text: "Sesi latihan selesai! Mari kita lihat nilaimu."
        });
      } else {
        // Prepare next message
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
        totalAnswered: isCorrect && !prev.loopState.active ? prev.totalAnswered + 1 : (!isCorrect && !prev.loopState.active ? prev.totalAnswered + 1 : prev.totalAnswered),
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

  // --- Renderers ---

  const renderSetup = () => {
    const subjects = getSubjects();
    const totalAvailable = calculateTotalQuestions(settings.subjects, settings.semester, settings.chapters, settings.questionTypes);
    
    const questionTypes = [
        { id: 'multiple_choice', label: 'Pilihan Ganda', icon: List },
        { id: 'essay', label: 'Esian', icon: FileText },
        { id: 'true_false', label: 'Benar/Salah', icon: HelpCircle },
    ] as const;

    return (
      <div className="max-w-md mx-auto p-6 bg-white min-h-screen flex flex-col gap-6 font-sans">
        <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-4 tracking-tight">Smart Chat 🎓</h1>
        
        {/* Subject */}
        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
          <label className="block text-sm font-bold text-blue-800 mb-3">Mata Pelajaran</label>
          <div className="flex flex-wrap gap-2">
            {subjects.map(sub => (
              <button
                key={sub}
                onClick={() => setSettings(s => {
                  const newSubjects = s.subjects.includes(sub) ? s.subjects.filter(x => x !== sub) : [...s.subjects, sub];
                  return { ...s, subjects: newSubjects };
                })}
                className={`px-4 py-2 rounded-xl border-2 transition-all font-semibold ${settings.subjects.includes(sub) ? 'bg-blue-500 text-white border-blue-500 shadow-md transform scale-105' : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* Semester */}
        <div className="bg-green-50 p-4 rounded-2xl border border-green-100">
           <label className="block text-sm font-bold text-green-800 mb-3">Semester</label>
           <div className="flex gap-4">
              {[1, 2].map(sem => (
                <button 
                  key={sem}
                  onClick={() => setSettings(s => ({ ...s, semester: sem }))}
                  className={`flex-1 py-3 rounded-xl border-2 font-bold transition-all ${settings.semester === sem ? 'bg-green-500 text-white border-green-500 shadow-md' : 'bg-white text-gray-600 border-gray-200 hover:border-green-300'}`}
                >
                  Semester {sem}
                </button>
              ))}
           </div>
        </div>

        {/* Chapters */}
        {settings.subjects.length > 0 && (
          <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
            <label className="block text-sm font-bold text-purple-800 mb-3">Bab (Pilih Minimal 1)</label>
            <div className="grid grid-cols-3 gap-2">
              {getChapters(settings.subjects[0], settings.semester).map(chap => (
                 <button
                   key={chap}
                   onClick={() => setSettings(s => {
                     const newChapters = s.chapters.includes(chap) ? s.chapters.filter(c => c !== chap) : [...s.chapters, chap];
                     return { ...s, chapters: newChapters };
                   })}
                   className={`py-2 rounded-lg border-2 font-medium transition-all ${settings.chapters.includes(chap) ? 'bg-purple-500 text-white border-purple-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'}`}
                 >
                   Bab {chap}
                 </button>
              ))}
            </div>
          </div>
        )}

        {/* Question Types */}
        <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100">
            <label className="block text-sm font-bold text-yellow-800 mb-3">Jenis Soal</label>
            <div className="flex flex-wrap gap-2">
                {questionTypes.map(type => (
                    <button
                        key={type.id}
                        onClick={() => setSettings(s => {
                            const isSelected = s.questionTypes.includes(type.id);
                            // Prevent unselecting the last item
                            if (isSelected && s.questionTypes.length === 1) return s;
                            const newTypes = isSelected 
                                ? s.questionTypes.filter(t => t !== type.id) 
                                : [...s.questionTypes, type.id];
                            return { ...s, questionTypes: newTypes };
                        })}
                        className={`px-3 py-2 rounded-lg border-2 text-xs font-bold flex items-center gap-2 transition-all ${settings.questionTypes.includes(type.id) ? 'bg-yellow-500 text-white border-yellow-500 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-yellow-300'}`}
                    >
                        <type.icon size={14} /> {type.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Question Count & Font */}
        <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100 space-y-4">
           <div>
             <label className="block text-sm font-bold text-orange-800 mb-2">
               Jumlah Soal: {settings.questionCount} <span className="text-orange-400 font-normal">/ {totalAvailable}</span>
             </label>
             <input 
               type="range" min="1" max={totalAvailable || 1} step="1" 
               value={settings.questionCount}
               onChange={(e) => setSettings(s => ({...s, questionCount: parseInt(e.target.value)}))}
               disabled={totalAvailable === 0}
               className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
             />
           </div>
           
           <div>
              <label className="flex items-center gap-2 text-sm font-bold text-orange-800 mb-2">
                 <Type size={16} /> Ukuran Teks
              </label>
              <div className="flex justify-between items-center text-orange-700">
                  <span className="text-xs">Aa</span>
                  <input 
                      type="range" min="1" max="3" step="1"
                      value={settings.fontSize}
                      onChange={(e) => setSettings(s => ({...s, fontSize: parseInt(e.target.value)}))}
                      className="w-2/3 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <span className="text-lg font-bold">Aa</span>
              </div>
           </div>
        </div>

        <button 
          onClick={handleStartQuiz}
          disabled={settings.subjects.length === 0 || settings.chapters.length === 0 || settings.questionCount === 0 || settings.questionTypes.length === 0}
          className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-transform active:scale-95"
        >
          <Play size={24} fill="currentColor" /> Mulai Kuis
        </button>
      </div>
    );
  };

  const renderQuiz = () => {
    const fontSizeClass = settings.fontSize === 1 ? 'text-sm' : settings.fontSize === 3 ? 'text-lg' : 'text-base';
    
    return (
      <div className={`flex flex-col h-screen bg-slate-50 ${fontSizeClass}`}>
        {/* Header */}
        <div className="bg-white px-4 py-3 shadow-md flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold border border-blue-200 shadow-sm">
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
               onClick={() => setSettings(s => ({...s, timerEnabled: !s.timerEnabled}))}
               className={`p-2 rounded-full transition-colors ${settings.timerEnabled ? 'bg-green-100 text-green-600 hover:bg-green-200' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
               title="Toggle Timer"
             >
                <Clock size={20} />
             </button>
             
             <button 
               onClick={handleStop}
               className="px-4 py-2 bg-red-100 text-red-600 rounded-full flex items-center gap-2 text-sm font-bold border border-red-200 hover:bg-red-200 transition-colors"
             >
               <StopCircle size={18} /> Berhenti
             </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 chat-scroll pb-40">
          {gameState.history.map((msg) => (
            <div key={msg.id} className={`chat ${msg.sender === 'teacher' ? 'chat-start' : 'chat-end'} flex flex-col ${msg.sender === 'student' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] rounded-3xl p-5 shadow-sm border ${msg.sender === 'teacher' ? 'bg-white border-gray-100 text-gray-800 rounded-tl-none' : 'bg-blue-600 border-blue-600 text-white rounded-tr-none shadow-blue-200'}`}>
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
                       className="p-1.5 rounded-full text-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
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
               className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-700 flex items-center justify-center gap-2 transition-transform active:scale-95 animate-bounce-subtle"
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
                       className="w-full text-left p-3 rounded-xl border border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 active:bg-blue-100 transition-all flex items-center gap-2 group shadow-sm"
                     >
                       <div className="w-6 h-6 flex-shrink-0 rounded-full bg-gray-100 group-hover:bg-blue-200 group-hover:text-blue-700 flex items-center justify-center text-xs font-bold text-gray-500 transition-colors">
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
                      className="flex-1 border-2 border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                    />
                    <button 
                      onClick={() => handleAnswerSubmit(inputText)}
                      disabled={!inputText.trim() || isProcessing}
                      className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 shadow-md transition-transform active:scale-95"
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
    const percentage = gameState.totalAnswered > 0 
        ? Math.round((gameState.score / gameState.totalAnswered) * 100) 
        : 0;
        
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
         <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl">
             <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <span className="text-6xl animate-bounce">🏆</span>
             </div>
             <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Hasil Kuis</h1>
             <p className="text-gray-500 mb-8 font-medium">Kamu sudah berusaha dengan baik!</p>

             <div className="grid grid-cols-2 gap-4 w-full mb-8">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <div className="text-4xl font-extrabold text-blue-600 mb-1">{gameState.score}</div>
                    <div className="text-sm font-bold text-blue-400 uppercase tracking-wider">Benar</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                    <div className="text-4xl font-extrabold text-purple-600 mb-1">{gameState.totalAnswered}</div>
                    <div className="text-sm font-bold text-purple-400 uppercase tracking-wider">Total Soal</div>
                </div>
             </div>

             <div className="w-full bg-gray-100 rounded-full h-6 mb-4 overflow-hidden shadow-inner">
                <div className="bg-gradient-to-r from-green-400 to-green-600 h-6 rounded-full transition-all duration-1000 flex items-center justify-end px-2" style={{ width: `${percentage}%` }}>
                    {percentage > 10 && <span className="text-xs text-white font-bold">{percentage}%</span>}
                </div>
             </div>
             <div className="text-xl font-bold text-gray-700 mb-10">Nilai Akhir: <span className="text-blue-600">{percentage}</span></div>

             <button 
               onClick={handleRestart}
               className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-xl shadow-lg hover:bg-blue-700 transition-transform active:scale-95 flex items-center justify-center gap-2"
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
