import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_INGGRIS: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "Bahasa Inggris",
    Bab: 1,
    JudulBab: "My Family",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "My mother's brother is my ...",
        "Prompt Gambar": "Anak laki-laki dan paman.",
        "Pilihan Jawaban": [
            { "teks": "sister", "prompt gambar": "Gadis kecil" },
            { "teks": "uncle", "prompt gambar": "Paman" },
            { "teks": "aunt", "prompt gambar": "Bibi" },
            { "teks": "cousin", "prompt gambar": "Sepupu" }
        ],
        Jawaban: "uncle",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Your father's sister is your ...",
            "Prompt Gambar": "Bapak dan adik perempuannya.",
            "Pilihan Jawaban": [
                { "teks": "grandma", "prompt gambar": null },
                { "teks": "aunt", "prompt gambar": null },
                { "teks": "niece", "prompt gambar": null },
                { "teks": "nephew", "prompt gambar": null }
            ],
            Jawaban: "aunt"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Translate 'ayah' into English.",
        "Prompt Gambar": "Pria dewasa sebagai ayah.",
        Jawaban: "father",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "What is the English word for 'ibu'?",
            "Prompt Gambar": "Wanita dewasa sebagai ibu.",
            Jawaban: "mother"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "A 'brother' is a male sibling.",
        "Prompt Gambar": "Dua anak laki-laki.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "A 'sister' is a male sibling.",
            "Prompt Gambar": "Seorang anak perempuan.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];