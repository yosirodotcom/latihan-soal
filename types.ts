

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

// New: Track the status of a specific question's remediation loop
export interface RemediationStatus {
  step: 'waiting_for_proxy' | 'waiting_for_main_retry';
  proxyPassed: boolean; // Tracks if the user got the proxy right in this cycle
}

export interface QuizState {
  status: 'setup' | 'name_input' | 'quiz' | 'analyzing' | 'summary';
  userName: string | null;
  score: number;
  totalAnswered: number;
  history: ChatMessage[];
  queue: QuestionData[];
  currentQuestion: QuestionData | null;
  
  // Updated: Complex remediation tracking instead of simple loopState
  remediationState: Record<string, RemediationStatus>; 
  
  currentStreak: number;
  timeLeft: number;
  isWaitingForNext: boolean;
  lastAnswerCorrect: boolean | null;
  showConfetti: boolean;
  animatingOptionValue: string | null;
  animationFeedback: 'correct' | 'wrong' | null;
  correctAnswerOptionValue: string | null;
  elapsedTime: number;
  questionAttempts: { questionId: string; isCorrect: boolean; subject: string; chapter: number; }[];
  confettiKey: number;
}