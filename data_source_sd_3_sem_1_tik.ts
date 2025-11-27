import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_TIK: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "TIK",
    Bab: 1,
    JudulBab: "Mengenal Komputer",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Alat yang digunakan untuk mengetik huruf dan angka di komputer adalah ...",
        "Prompt Gambar": "Keyboard komputer.",
        "Pilihan Jawaban": [
            { "teks": "Mouse", "prompt gambar": "Mouse komputer" },
            { "teks": "Keyboard", "prompt gambar": "Keyboard komputer" },
            { "teks": "Monitor", "prompt gambar": "Layar monitor" },
            { "teks": "Speaker", "prompt gambar": "Speaker komputer" }
        ],
        Jawaban: "Keyboard",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Untuk melihat gambar atau tulisan di komputer, kita menggunakan ...",
            "Prompt Gambar": "Layar komputer menyala.",
            "Pilihan Jawaban": [
                { "teks": "Keyboard", "prompt gambar": null },
                { "teks": "Monitor", "prompt gambar": null },
                { "teks": "Printer", "prompt gambar": null },
                { "teks": "CPU", "prompt gambar": null }
            ],
            Jawaban: "Monitor"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Apa fungsi dari mouse komputer?",
        "Prompt Gambar": "Tangan menggunakan mouse komputer.",
        Jawaban: "Menggerakkan kursor", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Sebutkan satu contoh perangkat keras komputer!",
            "Prompt Gambar": "Komputer desktop.",
            Jawaban: "Keyboard" // Example answer
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "CPU adalah singkatan dari Central Processing Unit.",
        "Prompt Gambar": "Komponen CPU.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Monitor digunakan untuk mencetak dokumen.",
            "Prompt Gambar": "Monitor dan printer.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];