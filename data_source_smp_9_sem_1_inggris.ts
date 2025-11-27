import { RawDataBlock } from './data_types';

export const DATA_SMP_9_SEM_1_INGGRIS: RawDataBlock[] = [
  {
    Grade: 9,
    Semester: 1,
    Subject: "Bahasa Inggris",
    Bab: 1,
    JudulBab: "Congratulations and Hopes",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Choose the correct expression to congratulate someone.",
        "Prompt Gambar": "Two people shaking hands, one looking happy holding a trophy.",
        "Pilihan Jawaban": [
            { "teks": "I'm sorry to hear that", "prompt gambar": "Sad face" },
            { "teks": "Congratulations on your success!", "prompt gambar": "Happy face" },
            { "teks": "Are you okay?", "prompt gambar": "Worried face" },
            { "teks": "Good bye", "prompt gambar": "Waving hand" }
        ],
        Jawaban: "Congratulations on your success!",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "What do you say when your friend wins a competition?",
            "Prompt Gambar": "Friend winning a gold medal.",
            "Pilihan Jawaban": [
                { "teks": "Better luck next time", "prompt gambar": null },
                { "teks": "Happy Birthday", "prompt gambar": null },
                { "teks": "Congratulations!", "prompt gambar": "Party popper" },
                { "teks": "I don't care", "prompt gambar": null }
            ],
            Jawaban: "Congratulations!"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "I hope you ... the competition.",
        "Prompt Gambar": "Someone praying or wishing.",
        "Pilihan Jawaban": [
            { "teks": "win", "prompt gambar": null },
            { "teks": "loses", "prompt gambar": null },
            { "teks": "winning", "prompt gambar": null },
            { "teks": "lost", "prompt gambar": null }
        ],
        Jawaban: "win",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "'I wish you luck' is an expression of hope.",
            "Prompt Gambar": "Fingers crossed symbol.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];