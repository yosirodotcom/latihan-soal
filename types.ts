

export type SchoolLevel = 'SD' | 'SMP' | 'SMA';

export interface ImagePrompt {
  description: string;
}

export interface Option {
  text: string;
  image_prompt?: string | null;
}

export interface QuestionData {
  id: string;
  level: SchoolLevel; // New
  grade: number;      // New
  subject: string;
  semester: number;
  chapter: number;
  type: 'multiple_choice' | 'essay' | 'true_false';
  question: string;
  image_prompt?: string | null;
  options: Option[];
  correct_answer: string;
  proxy?: QuestionData;
}

export interface ChatMessage {
  id: string;
  sender: 'teacher' | 'student';
  text: string;
  imagePrompts?: string[];
  isQuestion?: boolean;
}

export interface QuizSettings {
  level: SchoolLevel; // New
  grade: number;      // New
  subjects: string[];
  semester: number;
  chapters: number[];
  questionCount: number;
  fontSize: number; // New: Font size setting (1=sm, 2=base, 3=lg)
  timerEnabled: boolean;
  questionTypes: ('multiple_choice' | 'essay' | 'true_false')[];
  themeColor: string; // New: Selected theme color key
}

export interface QuizState {
  status: 'setup' | 'name_input' | 'quiz' | 'analyzing' | 'summary'; // Updated: Added 'name_input'
  userName: string | null; // New: Store user name
  score: number;
  totalAnswered: number;
  history: ChatMessage[];
  queue: QuestionData[];
  currentQuestion: QuestionData | null;
  loopState: {
    active: boolean;
    streak: number; // This streak is for the remediation loop
    parentId: string | null;
  };
  currentStreak: number; // New: General gamification streak
  timeLeft: number;
  isWaitingForNext: boolean;
  lastAnswerCorrect: boolean | null;
  showConfetti: boolean; // New: Controls confetti animation
  // Fix: Add animation-related properties to QuizState
  animatingOptionValue: string | null; // Stores the value of the option being animated
  animationFeedback: 'correct' | 'wrong' | null; // Stores the feedback type for animation
  correctAnswerOptionValue: string | null; // Stores the correct answer text for highlighting
  elapsedTime: number; // New: Total time spent on the quiz
  questionAttempts: { questionId: string; isCorrect: boolean; subject: string; chapter: number; }[]; // New: Track individual question outcomes
  confettiKey: number; // New: Key to force remounting ConfettiPop
}