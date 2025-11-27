import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_PJOK: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "PJOK",
    Bab: 1,
    JudulBab: "Gerak Lokomotor",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Contoh gerak lokomotor adalah ...",
        "Prompt Gambar": "Anak sedang berlari di lapangan.",
        "Pilihan Jawaban": [
            { "teks": "Melompat", "prompt gambar": "Anak melompat" },
            { "teks": "Mengayun tangan", "prompt gambar": "Anak mengayun tangan" },
            { "teks": "Memutar pinggang", "prompt gambar": "Anak memutar pinggang" },
            { "teks": "Membungkuk", "prompt gambar": "Anak membungkuk" }
        ],
        Jawaban: "Melompat",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Gerakan berjalan termasuk jenis gerak ...",
            "Prompt Gambar": "Anak sedang berjalan.",
            "Pilihan Jawaban": [
                { "teks": "Non-lokomotor", "prompt gambar": null },
                { "teks": "Lokomotor", "prompt gambar": null },
                { "teks": "Manipulatif", "prompt gambar": null },
                { "teks": "Statik", "prompt gambar": null }
            ],
            Jawaban: "Lokomotor"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu manfaat melakukan pemanasan sebelum olahraga!",
        "Prompt Gambar": "Anak-anak melakukan pemanasan.",
        Jawaban: "Mencegah cedera", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Mengapa kita perlu minum air setelah berolahraga?",
            "Prompt Gambar": "Anak minum air setelah berlari.",
            Jawaban: "Mengganti cairan tubuh" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Gerak non-lokomotor adalah gerak berpindah tempat.",
        "Prompt Gambar": "Anak sedang meregangkan otot (tidak berpindah tempat).",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Gerak lokomotor membuat tubuh berpindah dari satu tempat ke tempat lain.",
            "Prompt Gambar": "Anak sedang melompat dari satu titik ke titik lain.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];