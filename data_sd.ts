
import { QuestionData, Option } from './types';
import { RAW_DATA } from './data_source';
import { RawQuestion } from './data_types';

// SD Subject Configuration (1-6)
export const SD_SUBJECTS: Record<number, string[]> = {
  1: ["PAI", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "PJOK", "Seni Rupa"],
  2: ["PAI", "Pendidikan Pancasila", "Bahasa Indonesia", "Matematika", "PJOK", "Seni Rupa", "Bahasa Inggris"],
  3: ["Pendidikan Pancasila", "Bahasa Indonesia", "Bahasa Inggris", "Matematika", "IPAS", "Seni Rupa", "PJOK", "PAI", "TIK"], // Added PAI and TIK
  4: ["Bahasa Indonesia", "Matematika", "IPAS", "Bahasa Inggris", "PPKn", "PAI", "PJOK", "Seni"],
  5: ["Matematika", "IPAS", "Bahasa Indonesia", "PPKn", "Bahasa Inggris", "PAI", "PJOK"],
  6: ["PPKn", "PAI", "IPAS", "Bahasa Indonesia", "Matematika", "PJOK", "Bahasa Inggris", "Seni Rupa"]
};

const processOptions = (rawOpts: any): Option[] => {
    if (!rawOpts) return [];
    if (Array.isArray(rawOpts)) {
      return rawOpts.map((o: any) => ({
        text: o.teks,
        image_prompt: o["prompt gambar"]
      }));
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

export const getSDQuestions = (): QuestionData[] => {
    const questions: QuestionData[] = [];
    const grades = [1, 2, 3, 4, 5, 6];

    grades.forEach(grade => {
        const subjects = SD_SUBJECTS[grade] || [];
        
        subjects.forEach(subject => {
            const subjectLower = subject.toLowerCase();
            const keywords: string[] = [];
            
            if (subjectLower.includes("matematika")) keywords.push("matematika");
            else if (subjectLower.includes("indonesia")) keywords.push("bahasa indonesia");
            else if (subjectLower.includes("inggris")) keywords.push("bahasa inggris");
            else if (subjectLower.includes("ipas") || subjectLower.includes("alam")) keywords.push("ipas", "ipa");
            else if (subjectLower.includes("pancasila") || subjectLower.includes("ppkn") || subjectLower.includes("pkn")) keywords.push("pancasila", "ppkn", "pkn");
            else if (subjectLower.includes("seni")) keywords.push("seni rupa", "seni");
            else if (subjectLower.includes("pjok") || subjectLower.includes("olahraga")) keywords.push("pjok");
            else if (subjectLower === "pai" || subjectLower.includes("agama")) keywords.push("pai", "agama"); // Added "pai" keyword
            else if (subjectLower.includes("tik")) keywords.push("tik", "informatika"); // Added TIK

            const relevantBlocks = RAW_DATA.filter(block => {
                return block.Grade === grade && keywords.includes(block.Subject.toLowerCase());
            });

            relevantBlocks.forEach((block) => {
                const chapterNum = block.Bab;
                const semester = block.Semester;
                const rawQuestions = block.Daftar_Soal || [];

                rawQuestions.forEach((q, idx) => {
                   const id = `SD_${grade}_${subject.replace(/\s/g, '')}_${chapterNum}_${idx}`;
                   questions.push(parseQuestion(q, id, 'SD', grade, subject, semester, chapterNum));
                });
            });
        });
    });

    return questions;
};
