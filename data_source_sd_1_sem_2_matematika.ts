import { RawDataBlock } from './data_types';

export const DATA_SD_1_SEM_2_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 1,
    Semester: 2,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Penjumlahan dan Pengurangan sampai 20",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "12 + 5 = ...",
        "Prompt Gambar": "12 jari ditambah 5 jari (ilustrasi).",
        "Pilihan Jawaban": [
            { "teks": "15", "prompt gambar": "Angka 15" },
            { "teks": "17", "prompt gambar": "Angka 17" },
            { "teks": "18", "prompt gambar": "Angka 18" },
            { "teks": "16", "prompt gambar": "Angka 16" }
        ],
        Jawaban: "17",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Hasil dari 10 + 7 adalah ...",
            "Prompt Gambar": "10 bola ditambah 7 bola.",
            "Pilihan Jawaban": [
                { "teks": "10", "prompt gambar": null },
                { "teks": "17", "prompt gambar": "Angka 17" },
                { "teks": "70", "prompt gambar": null },
                { "teks": "7", "prompt gambar": null }
            ],
            Jawaban: "17"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Ibu membeli 10 telur, pecah 2. Sisa telur ibu ada berapa?",
        "Prompt Gambar": "10 telur, 2 diantaranya pecah.",
        Jawaban: "8",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "10 dikurangi 2 sama dengan ...",
            "Prompt Gambar": "Pengurangan bilangan.",
            Jawaban: "8"
        }
      }
    ]
  },
  {
    Grade: 1,
    Semester: 2,
    Subject: "Matematika",
    Bab: 2,
    JudulBab: "Bentuk Bangun Datar",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Benda yang berbentuk lingkaran adalah ...",
        "Prompt Gambar": "Bola, Buku, Kotak Pensil.",
        "Pilihan Jawaban": [
            { "teks": "Buku", "prompt gambar": "Gambar buku persegi panjang" },
            { "teks": "Papan Tulis", "prompt gambar": "Gambar papan tulis persegi panjang" },
            { "teks": "Uang Koin", "prompt gambar": "Gambar uang koin bundar" },
            { "teks": "Meja", "prompt gambar": "Gambar meja persegi" }
        ],
        Jawaban: "Uang Koin",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Manakah gambar yang berbentuk Segitiga?",
            "Prompt Gambar": "Berbagai bentuk geometri.",
            "Pilihan Jawaban": [
                { "teks": "Roda", "prompt gambar": "Gambar roda" },
                { "teks": "Potongan Pizza", "prompt gambar": "Gambar potongan pizza segitiga" },
                { "teks": "Pintu", "prompt gambar": "Gambar pintu" },
                { "teks": "Jendela", "prompt gambar": "Gambar jendela" }
            ],
            Jawaban: "Potongan Pizza"
        }
      }
    ]
  }
];