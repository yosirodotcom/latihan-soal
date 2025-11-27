import { RawDataBlock } from './data_types';

export const DATA_SD_2_SEM_1_PANCASILA: RawDataBlock[] = [
  {
    Grade: 2,
    Semester: 1,
    Subject: "Pancasila",
    Bab: 1,
    JudulBab: "Aku Patuh Aturan",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Jika lampu lalu lintas berwarna merah, kita harus ...",
        "Prompt Gambar": "Lampu lalu lintas menyala merah.",
        "Pilihan Jawaban": [
            { "teks": "Jalan terus", "prompt gambar": "Mobil melaju kencang" },
            { "teks": "Berhenti", "prompt gambar": "Mobil berhenti di garis stop" },
            { "teks": "Lari", "prompt gambar": null },
            { "teks": "Tidur", "prompt gambar": null }
        ],
        Jawaban: "Berhenti",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Saat lampu hijau menyala, artinya kendaraan boleh ...",
            "Prompt Gambar": "Lampu lalu lintas menyala hijau.",
            "Pilihan Jawaban": [
                { "teks": "Berhenti", "prompt gambar": null },
                { "teks": "Parkir", "prompt gambar": null },
                { "teks": "Jalan", "prompt gambar": "Mobil berjalan" },
                { "teks": "Mundur", "prompt gambar": null }
            ],
            Jawaban: "Jalan"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Sebelum makan kita harus ...",
        "Prompt Gambar": "Anak duduk di meja makan dengan makanan tersedia.",
        "Pilihan Jawaban": [
            { "teks": "Berdoa", "prompt gambar": "Anak sedang berdoa sebelum makan" },
            { "teks": "Bermain", "prompt gambar": "Anak bermain bola" },
            { "teks": "Tidur", "prompt gambar": "Anak tidur" },
            { "teks": "Lari", "prompt gambar": "Anak berlari" }
        ],
        Jawaban: "Berdoa",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Kita boleh berbicara saat mulut penuh makanan.",
            "Prompt Gambar": "Anak makan dengan mulut penuh sambil bicara.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];