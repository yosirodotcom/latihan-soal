import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_TIK: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "TIK",
    Bab: 1,
    JudulBab: "Menggunakan Internet",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Internet adalah jaringan yang menghubungkan ...",
        "Prompt Gambar": "Globe dengan garis-garis koneksi di seluruh dunia.",
        "Pilihan Jawaban": [
            { "teks": "Hanya satu komputer", "prompt gambar": "Satu komputer" },
            { "teks": "Banyak komputer di seluruh dunia", "prompt gambar": "Banyak komputer terhubung" },
            { "teks": "Hanya printer", "prompt gambar": "Printer" },
            { "teks": "Hanya handphone", "prompt gambar": "Handphone" }
        ],
        Jawaban: "Banyak komputer di seluruh dunia",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Untuk mencari informasi di internet, kita menggunakan ...",
            "Prompt Gambar": "Anak mencari sesuatu di komputer.",
            "Pilihan Jawaban": [
                { "teks": "Kamus", "prompt gambar": null },
                { "teks": "Mesin pencari (Search Engine)", "prompt gambar": null },
                { "teks": "Buku", "prompt gambar": null },
                { "teks": "Pena", "prompt gambar": null }
            ],
            Jawaban: "Mesin pencari (Search Engine)"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu manfaat menggunakan internet untuk belajar!",
        "Prompt Gambar": "Anak belajar dari komputer.",
        Jawaban: "Mencari informasi", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Mengapa kita harus didampingi orang tua saat menggunakan internet?",
            "Prompt Gambar": "Anak menggunakan komputer didampingi orang tua.",
            Jawaban: "Agar aman" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Semua informasi di internet selalu benar dan boleh dipercaya.",
        "Prompt Gambar": "Berita palsu di layar komputer.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Kita harus berhati-hati saat berselancar di internet.",
            "Prompt Gambar": "Anak-anak belajar tentang keamanan internet.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];