import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_SENI: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "Seni Rupa",
    Bab: 1,
    JudulBab: "Mengenal Warna",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Warna yang dihasilkan dari campuran merah dan kuning adalah ...",
        "Prompt Gambar": "Palet warna dengan merah dan kuning dicampur.",
        "Pilihan Jawaban": [
            { "teks": "biru", "prompt gambar": "Warna biru" },
            { "teks": "hijau", "prompt gambar": "Warna hijau" },
            { "teks": "ungu", "prompt gambar": "Warna ungu" },
            { "teks": "oranye", "prompt gambar": "Warna oranye" }
        ],
        Jawaban: "oranye",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Jika kamu mencampur warna biru dan kuning, akan menghasilkan warna ...",
            "Prompt Gambar": "Pencampuran warna biru dan kuning.",
            "Pilihan Jawaban": [
                { "teks": "merah", "prompt gambar": null },
                { "teks": "ungu", "prompt gambar": null },
                { "teks": "hijau", "prompt gambar": null },
                { "teks": "oranye", "prompt gambar": null }
            ],
            Jawaban: "hijau"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan dua warna primer!",
        "Prompt Gambar": "Tiga warna primer (merah, kuning, biru).",
        Jawaban: "Merah dan Biru", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Apa warna langit di siang hari?",
            "Prompt Gambar": "Langit biru cerah.",
            Jawaban: "Biru"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Hitam adalah salah satu warna primer.",
        "Prompt Gambar": "Kotak warna primer.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Merah, kuning, dan biru adalah warna-warna primer.",
            "Prompt Gambar": "Tiga buah cat dengan warna merah, kuning, dan biru.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];