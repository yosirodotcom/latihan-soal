
import { QuestionData, Option } from './types';
import { RAW_DATA } from './data_source';
import { RawQuestion } from './data_types';

export const SMP_SUBJECTS: Record<number, string[]> = {
  7: ["PAI", "PKn", "Bahasa Indonesia", "PJOK", "Bahasa Inggris", "Matematika", "IPA", "IPS"],
  8: ["PAI", "PPKn", "Bahasa Indonesia", "Bahasa Inggris", "Matematika", "IPA", "IPS", "Seni"],
  9: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris", "Fisika", "Biologi", "Sejarah", "Geografi", "Sosiologi", "PPkn", "PAI", "PJOK"]
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

export const getSMPQuestions = (): QuestionData[] => {
    const questions: QuestionData[] = [];
    const grades = [7, 8, 9];

    grades.forEach(grade => {
        const subjects = SMP_SUBJECTS[grade] || [];
        subjects.forEach(subject => {
            const subjectLower = subject.toLowerCase();
            const keywords: string[] = [];

            if (subjectLower.includes("matematika")) keywords.push("matematika");
            else if (subjectLower.includes("indonesia")) keywords.push("bahasa indonesia");
            else if (subjectLower.includes("inggris")) keywords.push("bahasa inggris");
            else if (subjectLower.includes("ipa") || subjectLower.includes("fisika") || subjectLower.includes("biologi")) keywords.push("ipa", "fisika", "biologi");
            else if (subjectLower.includes("ips") || subjectLower.includes("sejarah") || subjectLower.includes("geografi") || subjectLower.includes("sosiologi")) keywords.push("ips", "sejarah", "geografi", "sosiologi");
            else if (subjectLower.includes("pancasila") || subjectLower.includes("ppkn") || subjectLower.includes("pkn")) keywords.push("pancasila", "ppkn", "pkn");
            else if (subjectLower === "pai" || subjectLower.includes("agama")) keywords.push("pai", "agama"); // Added "pai" keyword

            const relevantBlocks = RAW_DATA.filter(block => {
                return block.Grade === grade && keywords.includes(block.Subject.toLowerCase());
            });

            relevantBlocks.forEach((block) => {
                const chapterNum = block.Bab;
                const semester = block.Semester;
                const rawQuestions = block.Daftar_Soal || [];

                rawQuestions.forEach((q, idx) => {
                   const id = `SMP_${grade}_${subject.replace(/\s/g, '')}_${chapterNum}_${idx}`;
                   questions.push(parseQuestion(q, id, 'SMP', grade, subject, semester, chapterNum));
                });
            });
        });
    });
    return questions;
};
