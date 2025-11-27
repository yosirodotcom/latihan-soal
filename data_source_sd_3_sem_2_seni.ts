import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_SENI: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "Seni Rupa",
    Bab: 1,
    JudulBab: "Menggambar Pemandangan",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Saat menggambar gunung, warna yang paling sering digunakan adalah ...",
        "Prompt Gambar": "Gambar gunung dengan warna umum.",
        "Pilihan Jawaban": [
            { "teks": "biru", "prompt gambar": "Warna biru" },
            { "teks": "hijau", "prompt gambar": "Warna hijau" },
            { "teks": "merah", "prompt gambar": "Warna merah" },
            { "teks": "kuning", "prompt gambar": "Warna kuning" }
        ],
        Jawaban: "hijau",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Warna yang cocok untuk menggambar langit di siang hari adalah ...",
            "Prompt Gambar": "Langit siang hari.",
            "Pilihan Jawaban": [
                { "teks": "hitam", "prompt gambar": null },
                { "teks": "biru", "prompt gambar": null },
                { "teks": "oranye", "prompt gambar": null },
                { "teks": "cokelat", "prompt gambar": null }
            ],
            Jawaban: "biru"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan dua benda yang sering ada di pemandangan desa!",
        "Prompt Gambar": "Pemandangan desa (sawah, rumah, gunung).",
        Jawaban: "Sawah dan Gunung", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Apa yang kamu gambar di bawah pohon?",
            "Prompt Gambar": "Pohon besar di padang rumput.",
            Jawaban: "Rumput" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Pemandangan pantai selalu digambar dengan banyak salju.",
        "Prompt Gambar": "Gambar pantai tropis.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Pemandangan gunung seringkali digambar dengan warna hijau dan cokelat.",
            "Prompt Gambar": "Pemandangan gunung hijau.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];