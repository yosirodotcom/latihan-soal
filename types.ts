
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
  fontSize: number;
  timerEnabled: boolean;
  questionTypes: ('multiple_choice' | 'essay' | 'true_false')[];
}

export interface QuizState {
  status: 'setup' | 'quiz' | 'summary';
  score: number;
  totalAnswered: number;
  history: ChatMessage[];
  queue: QuestionData[];
  currentQuestion: QuestionData | null;
  loopState: {
    active: boolean;
    streak: number;
    parentId: string | null;
  };
  timeLeft: number;
  isWaitingForNext: boolean;
  lastAnswerCorrect: boolean | null;
}
