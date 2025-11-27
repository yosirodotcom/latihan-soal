import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Penjumlahan dan Pengurangan",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Hasil dari 25 + 15 adalah ...",
        "Prompt Gambar": "Ilustrasi 25 objek ditambah 15 objek.",
        "Pilihan Jawaban": [
            { "teks": "30", "prompt gambar": "Angka 30" },
            { "teks": "35", "prompt gambar": "Angka 35" },
            { "teks": "40", "prompt gambar": "Angka 40" },
            { "teks": "45", "prompt gambar": "Angka 45" }
        ],
        Jawaban: "40",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Jika ada 18 kue dan ditambahkan 12 kue lagi, berapa total kue sekarang?",
            "Prompt Gambar": "Gambar 18 kue di piring dan 12 kue di piring lain.",
            "Pilihan Jawaban": [
                { "teks": "20", "prompt gambar": null },
                { "teks": "25", "prompt gambar": null },
                { "teks": "30", "prompt gambar": null },
                { "teks": "32", "prompt gambar": null }
            ],
            Jawaban: "30"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Berapa hasil dari 50 dikurangi 20?",
        "Prompt Gambar": "Angka 50 dikurangi angka 20.",
        Jawaban: "30",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Seorang pedagang memiliki 45 buah apel. Jika terjual 15 buah, berapa sisa apelnya?",
            "Prompt Gambar": "Pedagang dengan keranjang apel, beberapa apel hilang.",
            Jawaban: "30"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "60 - 30 = 20 adalah pernyataan yang benar.",
        "Prompt Gambar": "Kalkulator menunjukkan 60 - 30.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Hasil dari 10 + 10 adalah 20.",
            "Prompt Gambar": "Ilustrasi dua kelompok 10 objek digabungkan.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];