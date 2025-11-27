import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Perkalian dan Pembagian",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Hasil dari 3 x 4 adalah ...",
        "Prompt Gambar": "Tiga kelompok, masing-masing berisi 4 objek.",
        "Pilihan Jawaban": [
            { "teks": "7", "prompt gambar": "Angka 7" },
            { "teks": "10", "prompt gambar": "Angka 10" },
            { "teks": "12", "prompt gambar": "Angka 12" },
            { "teks": "15", "prompt gambar": "Angka 15" }
        ],
        Jawaban: "12",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Jika kamu punya 5 kotak, dan setiap kotak berisi 3 pensil, berapa total pensil?",
            "Prompt Gambar": "Lima kotak, setiap kotak berisi 3 pensil.",
            "Pilihan Jawaban": [
                { "teks": "8", "prompt gambar": null },
                { "teks": "12", "prompt gambar": null },
                { "teks": "15", "prompt gambar": null },
                { "teks": "18", "prompt gambar": null }
            ],
            Jawaban: "15"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Berapa hasil dari 18 dibagi 3?",
        "Prompt Gambar": "18 buah apel dibagi menjadi 3 kelompok sama rata.",
        Jawaban: "6",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Jika ada 20 permen dibagikan kepada 4 anak secara merata, berapa permen yang didapat setiap anak?",
            "Prompt Gambar": "20 permen dibagi ke 4 anak.",
            Jawaban: "5"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Perkalian adalah penjumlahan berulang.",
        "Prompt Gambar": "Angka 3x2 = 2+2+2.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Pembagian adalah pengurangan berulang.",
            "Prompt Gambar": "Angka 6:2 = 6-2-2-2.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];