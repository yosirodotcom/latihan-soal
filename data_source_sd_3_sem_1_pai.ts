
import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_PAI: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "PAI",
    Bab: 1,
    JudulBab: "Beriman kepada Allah SWT",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Siapakah yang menciptakan langit dan bumi?",
        "Prompt Gambar": "Pemandangan langit dan bumi yang indah.",
        "Pilihan Jawaban": [
            { "teks": "Manusia", "prompt gambar": "Orang sedang membangun" },
            { "teks": "Allah SWT", "prompt gambar": "Tangan menunjuk ke langit" },
            { "teks": "Malaikat", "prompt gambar": "Gambar malaikat" },
            { "teks": "Jin", "prompt gambar": "Gambar jin" }
        ],
        Jawaban: "Allah SWT",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Sebagai umat Muslim, kita wajib beriman kepada ...",
            "Prompt Gambar": "Anak berdoa.",
            "Pilihan Jawaban": [
                { "teks": "Raja", "prompt gambar": null },
                { "teks": "Dewa", "prompt gambar": null },
                { "teks": "Allah SWT", "prompt gambar": null },
                { "teks": "Bulan", "prompt gambar": null }
            ],
            Jawaban: "Allah SWT"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu ciptaan Allah yang ada di sekitarmu!",
        "Prompt Gambar": "Pemandangan alam (gunung, pohon, sungai).",
        Jawaban: "Pohon", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Apa manfaat air hujan bagi kehidupan?",
            "Prompt Gambar": "Hujan menyirami tumbuhan.",
            Jawaban: "Menyuburkan tanaman" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Kita boleh berbohong kepada orang tua.",
        "Prompt Gambar": "Anak berbohong kepada orang tua.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Berbicara jujur adalah perbuatan terpuji.",
            "Prompt Gambar": "Anak berbicara jujur.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];