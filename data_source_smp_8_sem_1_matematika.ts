import { RawDataBlock } from './data_types';

export const DATA_SMP_8_SEM_1_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 8,
    Semester: 1,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Pola Bilangan",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Dua suku berikutnya dari barisan 2, 4, 6, 8, ... adalah",
        "Prompt Gambar": "Deretan angka genap.",
        "Pilihan Jawaban": [
            { "teks": "9, 10", "prompt gambar": null },
            { "teks": "10, 12", "prompt gambar": null },
            { "teks": "12, 14", "prompt gambar": null },
            { "teks": "10, 11", "prompt gambar": null }
        ],
        Jawaban: "10, 12",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Lanjutkan pola berikut: 1, 3, 5, 7, ...",
            "Prompt Gambar": "Deretan angka ganjil.",
            "Pilihan Jawaban": [
                { "teks": "8, 9", "prompt gambar": null },
                { "teks": "9, 11", "prompt gambar": null },
                { "teks": "9, 10", "prompt gambar": null },
                { "teks": "8, 10", "prompt gambar": null }
            ],
            Jawaban: "9, 11"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Tentukan suku ke-5 dari barisan persegi: 1, 4, 9, 16, ...",
        "Prompt Gambar": "Gambar pola persegi yang semakin membesar.",
        Jawaban: "25",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Berapakah hasil dari 5 pangkat 2?",
            "Prompt Gambar": "5^2 = ?",
            Jawaban: "25"
        }
      }
    ]
  }
];