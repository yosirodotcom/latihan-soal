import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_PJOK: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "PJOK",
    Bab: 1,
    JudulBab: "Gerak Non-Lokomotor",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Contoh gerak non-lokomotor adalah ...",
        "Prompt Gambar": "Anak sedang memutar pinggang di tempat.",
        "Pilihan Jawaban": [
            { "teks": "Berlari", "prompt gambar": "Anak berlari" },
            { "teks": "Melompat", "prompt gambar": "Anak melompat" },
            { "teks": "Mengayun tangan", "prompt gambar": "Anak mengayun tangan" },
            { "teks": "Berjalan", "prompt gambar": "Anak berjalan" }
        ],
        Jawaban: "Mengayun tangan",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Gerakan membungkuk termasuk jenis gerak ...",
            "Prompt Gambar": "Anak sedang membungkuk.",
            "Pilihan Jawaban": [
                { "teks": "Lokomotor", "prompt gambar": null },
                { "teks": "Non-lokomotor", "prompt gambar": null },
                { "teks": "Manipulatif", "prompt gambar": null },
                { "teks": "Keseimbangan", "prompt gambar": null }
            ],
            Jawaban: "Non-lokomotor"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu contoh olahraga yang membutuhkan gerak non-lokomotor!",
        "Prompt Gambar": "Anak melakukan senam lantai.",
        Jawaban: "Senam", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Mengapa gerak non-lokomotor penting untuk kelenturan tubuh?",
            "Prompt Gambar": "Orang melakukan stretching.",
            Jawaban: "Melatih otot" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Memutar kepala adalah gerak lokomotor.",
        "Prompt Gambar": "Anak memutar kepala.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Gerak non-lokomotor dilakukan di tempat tanpa berpindah posisi.",
            "Prompt Gambar": "Orang berdiri diam sambil menggerakkan tangan.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];