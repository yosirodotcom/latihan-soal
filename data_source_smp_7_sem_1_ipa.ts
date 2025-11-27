import { RawDataBlock } from './data_types';

export const DATA_SMP_7_SEM_1_IPA: RawDataBlock[] = [
  {
    Grade: 7,
    Semester: 1,
    Subject: "IPA",
    Bab: 1,
    JudulBab: "Objek IPA dan Pengamatannya",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Langkah pertama dalam metode ilmiah adalah ...",
        "Prompt Gambar": "Ilmuwan sedang mengamati sesuatu dengan kaca pembesar.",
        "Pilihan Jawaban": [
            { "teks": "Eksperimen", "prompt gambar": "Melakukan percobaan di lab" },
            { "teks": "Observasi", "prompt gambar": "Mengamati alam sekitar" },
            { "teks": "Hipotesis", "prompt gambar": "Berpikir dugaan sementara" },
            { "teks": "Kesimpulan", "prompt gambar": "Menulis laporan" }
        ],
        Jawaban: "Observasi",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Kegiatan mengamati objek menggunakan panca indera disebut ...",
            "Prompt Gambar": "Mata melihat bunga.",
            "Pilihan Jawaban": [
                { "teks": "Hipotesis", "prompt gambar": null },
                { "teks": "Eksperimen", "prompt gambar": null },
                { "teks": "Observasi", "prompt gambar": null },
                { "teks": "Analisis", "prompt gambar": null }
            ],
            Jawaban: "Observasi"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Satuan Internasional untuk suhu adalah ...",
        "Prompt Gambar": "Termometer.",
        "Pilihan Jawaban": [
            { "teks": "Celcius", "prompt gambar": null },
            { "teks": "Fahrenheit", "prompt gambar": null },
            { "teks": "Kelvin", "prompt gambar": null },
            { "teks": "Reamur", "prompt gambar": null }
        ],
        Jawaban: "Kelvin",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Alat yang digunakan untuk mengukur suhu adalah ...",
            "Prompt Gambar": "Gambar alat ukur suhu.",
            Jawaban: "Termometer"
        }
      }
    ]
  }
];