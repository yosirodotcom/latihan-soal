
import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_PAI: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "PAI",
    Bab: 1,
    JudulBab: "Akhlak Terpuji",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Sifat rajin dan tidak mudah menyerah disebut ...",
        "Prompt Gambar": "Anak sedang belajar dengan tekun.",
        "Pilihan Jawaban": [
            { "teks": "Malas", "prompt gambar": "Anak malas" },
            { "teks": "Putus asa", "prompt gambar": "Anak sedih" },
            { "teks": "Gigih", "prompt gambar": "Anak semangat" },
            { "teks": "Pemarah", "prompt gambar": "Anak marah" }
        ],
        Jawaban: "Gigih",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Jika kita menemukan dompet jatuh di jalan, sebaiknya kita ...",
            "Prompt Gambar": "Anak menemukan dompet.",
            "Pilihan Jawaban": [
                { "teks": "Mengambilnya", "prompt gambar": null },
                { "teks": "Membiarkannya", "prompt gambar": null },
                { "teks": "Mengembalikan ke pemilik", "prompt gambar": null },
                { "teks": "Memberikan ke teman", "prompt gambar": null }
            ],
            Jawaban: "Mengembalikan ke pemilik"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu contoh perilaku jujur di sekolah!",
        "Prompt Gambar": "Anak mengembalikan pensil temannya.",
        Jawaban: "Mengakui kesalahan", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Mengapa kita tidak boleh mencontek saat ujian?",
            "Prompt Gambar": "Anak mencontek.",
            Jawaban: "Perbuatan tidak jujur" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Membantu orang lain yang kesusahan adalah perbuatan baik.",
        "Prompt Gambar": "Anak membantu nenek menyeberang jalan.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Bersikap sombong disukai banyak teman.",
            "Prompt Gambar": "Anak sombong dikucilkan teman.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];