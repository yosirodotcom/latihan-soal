import { RawDataBlock } from './data_types';

export const DATA_SD_1_SEM_1_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 1,
    Semester: 1,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Bilangan Sampai 10",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Hitunglah jumlah apel ini: 🍎 🍎 🍎",
        "Prompt Gambar": "3 buah apel merah segar.",
        "Pilihan Jawaban": [
            { "teks": "2", "prompt gambar": "Gambar angka 2 berwarna warni" },
            { "teks": "3", "prompt gambar": "Gambar angka 3 berwarna warni" },
            { "teks": "4", "prompt gambar": "Gambar angka 4 berwarna warni" },
            { "teks": "5", "prompt gambar": "Gambar angka 5 berwarna warni" }
        ],
        Jawaban: "3",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Ada berapa jumlah jari tangan kananmu?",
            "Prompt Gambar": "Gambar tangan membuka kelima jarinya.",
            "Pilihan Jawaban": [
                { "teks": "3", "prompt gambar": null },
                { "teks": "4", "prompt gambar": null },
                { "teks": "5", "prompt gambar": null },
                { "teks": "6", "prompt gambar": null }
            ],
            Jawaban: "5"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Angka setelah 5 adalah ...",
        "Prompt Gambar": "Gambar urutan angka 1 sampai 5 lalu tanda tanya.",
        "Pilihan Jawaban": [
            { "teks": "4", "prompt gambar": null },
            { "teks": "6", "prompt gambar": null },
            { "teks": "7", "prompt gambar": null },
            { "teks": "3", "prompt gambar": null }
        ],
        Jawaban: "6",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Sebelum angka 2 adalah angka ...",
            "Prompt Gambar": "Gambar urutan angka 1, 2, 3.",
            "Pilihan Jawaban": [
                { "teks": "1", "prompt gambar": null },
                { "teks": "3", "prompt gambar": null },
                { "teks": "0", "prompt gambar": null },
                { "teks": "4", "prompt gambar": null }
            ],
            Jawaban: "1"
        }
      },
      {
        Nomor: 3,
        Jenis: "Esai",
        Pertanyaan: "Jika kamu punya 2 permen dan diberi 1 lagi, berapa jumlahnya?",
        "Prompt Gambar": "Gambar 2 permen ditambah 1 permen.",
        Jawaban: "3",
        proxy: {
            Nomor: 3,
            Jenis: "Esai",
            Pertanyaan: "Satu ditambah satu sama dengan ...",
            "Prompt Gambar": "Gambar 1 jari ditambah 1 jari.",
            Jawaban: "2"
        }
      },
      {
        Nomor: 4,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Angka 9 lebih besar daripada angka 5.",
        "Prompt Gambar": "Gambar timbangan, sisi kiri angka 9 (berat), sisi kanan angka 5 (ringan).",
        Jawaban: "Benar",
        proxy: {
            Nomor: 4,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Angka 2 lebih kecil daripada angka 1.",
            "Prompt Gambar": "Perbandingan tumpukan balok. 2 balok vs 1 balok.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];