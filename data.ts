
import { QuestionData, SchoolLevel } from './types';
import { getSDQuestions, SD_SUBJECTS } from './data_sd';
import { getSMPQuestions, SMP_SUBJECTS } from './data_smp';
import { getSMAQuestions, SMA_SUBJECTS } from './data_sma';

// Aggregate all questions
export const QUESTIONS_DB: QuestionData[] = [
    ...getSDQuestions(),
    ...getSMPQuestions(),
    ...getSMAQuestions()
];

// Subject Definitions by Grade
export const ALL_SUBJECTS = {
    ...SD_SUBJECTS,
    ...SMP_SUBJECTS,
    ...SMA_SUBJECTS
};

export const getSubjects = (level: SchoolLevel, grade: number): string[] => {
  return ALL_SUBJECTS[grade as keyof typeof ALL_SUBJECTS] || [];
};

export const getChapters = (level: SchoolLevel, grade: number, sub: string, sem: number) => {
  // Filter questions matching criteria to find unique chapters
  const chapters = Array.from(new Set(QUESTIONS_DB.filter(q => 
      q.level === level && 
      q.grade === grade && 
      q.subject === sub && 
      q.semester === sem
  ).map(q => q.chapter))).sort((a,b)=>a-b);
  
  // If no chapters found in DB (because we only have sample data for chapter 1), 
  // return at least Chapter 1 for UI purpose if subject exists
  if (chapters.length === 0) return [1];
  return chapters;
};
