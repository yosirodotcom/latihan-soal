
import { QuestionData, Option } from './types';
import { RAW_DATA } from './data_source';
import { RawQuestion } from './data_types';

export const SMA_SUBJECTS: Record<number, string[]> = {
  10: ["Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Bahasa Inggris", "Sejarah Indonesia", "Fisika", "Kimia", "Biologi", "Sosiologi", "Geografi", "Ekonomi", "PAI"],
  11: ["Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Bahasa Inggris", "Sejarah Indonesia", "Fisika", "Kimia", "Biologi", "Sosiologi", "Geografi", "Ekonomi", "PAI"],
  12: ["Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "Bahasa Inggris", "Sejarah Indonesia", "Fisika", "Kimia", "Biologi", "Sosiologi", "Geografi", "Ekonomi", "PAI"]
};

const processOptions = (rawOpts: any): Option[] => {
    if (!rawOpts) return [];
    if (Array.isArray(rawOpts)) {
      return rawOpts.map((o: any) => ({ text: o.teks, image_prompt: o["prompt gambar"] }));
    }
    return [];
};

const parseQuestion = (q: RawQuestion, baseId: string, level: any, grade: number, subject: string, semester: number, chapter: number): QuestionData => {
    const typeMap: Record<string, 'multiple_choice' | 'true_false' | 'essay'> = {
        "Pilihan Ganda": 'multiple_choice',
        "Pertanyaan Benar atau Salah": 'true_false',
        "Esai": 'essay'
    };
    
    const questionData: QuestionData = {
        id: baseId,
        level,
        grade,
        subject,
        semester,
        chapter,
        type: typeMap[q.Jenis] || 'multiple_choice',
        question: q.Pertanyaan,
        image_prompt: q["Prompt Gambar"],
        options: processOptions(q["Pilihan Jawaban"]),
        correct_answer: q.Jawaban
    };

    if (q.proxy) {
        questionData.proxy = parseQuestion(q.proxy, baseId + '_proxy', level, grade, subject, semester, chapter);
    }

    return questionData;
};

export const getSMAQuestions = (): QuestionData[] => {
    const questions: QuestionData[] = [];
    const grades = [10, 11, 12];

    grades.forEach(grade => {
        const subjects = SMA_SUBJECTS[grade] || [];
        subjects.forEach(subject => {
            const subjectLower = subject.toLowerCase();
            const keywords: string[] = [];

            if (subjectLower.includes("matematika")) keywords.push("matematika");
            else if (subjectLower.includes("indonesia")) keywords.push("bahasa indonesia");
            else if (subjectLower.includes("inggris")) keywords.push("bahasa inggris");
            else if (subjectLower.includes("fisika")) keywords.push("fisika", "ipa");
            else if (subjectLower.includes("kimia")) keywords.push("kimia", "ipa");
            else if (subjectLower.includes("biologi")) keywords.push("biologi", "ipa");
            else if (subjectLower.includes("sejarah")) keywords.push("sejarah", "ips");
            else if (subjectLower.includes("geografi")) keywords.push("geografi", "ips");
            else if (subjectLower.includes("sosiologi")) keywords.push("sosiologi", "ips");
            else if (subjectLower.includes("ekonomi")) keywords.push("ekonomi", "ips");
            else if (subjectLower.includes("pancasila") || subjectLower.includes("ppkn")) keywords.push("pancasila", "ppkn");
            else if (subjectLower === "pai" || subjectLower.includes("agama")) keywords.push("pai", "agama"); // Added "pai" keyword

            const relevantBlocks = RAW_DATA.filter(block => {
                return block.Grade === grade && keywords.includes(block.Subject.toLowerCase());
            });

            relevantBlocks.forEach((block) => {
                const chapterNum = block.Bab;
                const semester = block.Semester;
                const rawQuestions = block.Daftar_Soal || [];

                rawQuestions.forEach((q, idx) => {
                   const id = `SMA_${grade}_${subject.replace(/\s/g, '')}_${chapterNum}_${idx}`;
                   questions.push(parseQuestion(q, id, 'SMA', grade, subject, semester, chapterNum));
                });
            });
        });
    });
    return questions;
};
