import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_INGGRIS: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "Bahasa Inggris",
    Bab: 1,
    JudulBab: "Daily Activities",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "I eat breakfast in the ...",
        "Prompt Gambar": "Anak sarapan di pagi hari.",
        "Pilihan Jawaban": [
            { "teks": "afternoon", "prompt gambar": null },
            { "teks": "morning", "prompt gambar": null },
            { "teks": "evening", "prompt gambar": null },
            { "teks": "night", "prompt gambar": null }
        ],
        Jawaban: "morning",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "We usually sleep at ...",
            "Prompt Gambar": "Anak tidur di malam hari.",
            "Pilihan Jawaban": [
                { "teks": "morning", "prompt gambar": null },
                { "teks": "noon", "prompt gambar": null },
                { "teks": "night", "prompt gambar": null },
                { "teks": "afternoon", "prompt gambar": null }
            ],
            Jawaban: "night"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "What do you say when you wake up?",
        "Prompt Gambar": "Anak bangun tidur.",
        Jawaban: "Good morning", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "How do you say 'selamat malam' in English?",
            "Prompt Gambar": "Malam hari.",
            Jawaban: "Good night"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "We go to school in the evening.",
        "Prompt Gambar": "Anak berangkat sekolah di pagi hari.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Students study at school.",
            "Prompt Gambar": "Siswa belajar di kelas.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];