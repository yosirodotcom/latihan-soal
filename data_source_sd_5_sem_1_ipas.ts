import { RawDataBlock } from './data_types';

export const DATA_SD_5_SEM_1_IPAS: RawDataBlock[] = [
  {
    Grade: 5,
    Semester: 1,
    Subject: "IPAS",
    Bab: 1,
    JudulBab: "Melihat karena Cahaya",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Sifat cahaya yang terjadi saat kita bercermin adalah ...",
        "Prompt Gambar": "Anak sedang bercermin.",
        "Pilihan Jawaban": [
            { "teks": "Dibiaskan", "prompt gambar": "Pensil di air terlihat patah" },
            { "teks": "Dipantulkan", "prompt gambar": "Cermin memantulkan bayangan" },
            { "teks": "Diuraikan", "prompt gambar": "Pelangi" },
            { "teks": "Merambat lurus", "prompt gambar": "Senter menyala lurus" }
        ],
        Jawaban: "Dipantulkan",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Bayangan kita di cermin terjadi karena cahaya mengalami ...",
            "Prompt Gambar": "Gambar cermin datar.",
            "Pilihan Jawaban": [
                { "teks": "Pemantulan", "prompt gambar": null },
                { "teks": "Pembiasan", "prompt gambar": null },
                { "teks": "Penyerapan", "prompt gambar": null },
                { "teks": "Penguraian", "prompt gambar": null }
            ],
            Jawaban: "Pemantulan"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Mengapa pensil di dalam gelas berisi air terlihat patah?",
        "Prompt Gambar": "Gelas berisi air dengan pensil di dalamnya terlihat bengkok.",
        Jawaban: "Pembiasan cahaya",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Peristiwa pelangi terjadi karena cahaya matahari diuraikan oleh titik-titik air hujan.",
            "Prompt Gambar": "Gambar pelangi yang indah.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];