
export interface ImagePrompt {
  description: string;
}

export interface Option {
  text: string;
  image_prompt?: string | null;
}

export interface ProxyQuestion {
  Nomor: number;
  Jenis: string;
  Pertanyaan: string;
  "Prompt Gambar"?: string;
  "Pilihan Jawaban"?: { teks: string; "prompt gambar"?: string }[]; // For mapped data
  Jawaban: string;
  proxy?: ProxyQuestion;
}

export interface QuestionData {
  id: string;
  subject: string;
  semester: number;
  chapter: number;
  type: 'multiple_choice' | 'essay' | 'true_false';
  question: string;
  image_prompt?: string | null;
  options: Option[];
  correct_answer: string;
  proxy?: QuestionData; // Recursive structure for normalized data
}

export interface RawQuestion {
  Nomor: number;
  Jenis: string;
  Pertanyaan: string;
  "Prompt Gambar"?: string;
  "Pilihan Jawaban"?: { teks: string; "prompt gambar"?: string }[];
  Jawaban: string;
  proxy?: ProxyQuestion;
}

export interface RawChapter {
  Bab?: string; // IPAS
  Chapter?: number; // English
  Topic?: string; // English
  Total_Soal?: number;
  Total_Questions?: number;
  Daftar_Soal?: RawQuestion[]; // IPAS
  Questions?: RawQuestion[]; // English
}

export interface ChatMessage {
  id: string;
  sender: 'teacher' | 'student';
  text: string;
  imagePrompts?: string[]; // List of descriptions
  isQuestion?: boolean;
}

export interface QuizSettings {
  subjects: string[];
  semester: number;
  chapters: number[];
  questionCount: number;
  fontSize: number; // 1 to 3 scale
  timerEnabled: boolean;
  questionTypes: ('multiple_choice' | 'essay' | 'true_false')[]; // New Field
}

export interface QuizState {
  status: 'setup' | 'quiz' | 'summary';
  score: number;
  totalAnswered: number; // Only counts unique questions, not loop attempts
  history: ChatMessage[];
  queue: QuestionData[];
  currentQuestion: QuestionData | null;
  loopState: {
    active: boolean;
    streak: number; // Needs 2 to exit
    parentId: string | null; // ID of the question that started the loop
  };
  timeLeft: number; // For the current question (if essay & timer on)
  isWaitingForNext: boolean; // True when feedback is shown, waiting for user to click Next
  lastAnswerCorrect: boolean | null; // Stores result of the last answer to process next logic
}
