import { RawDataBlock } from './data_types';

export const DATA_SD_4_SEM_1_MATEMATIKA: RawDataBlock[] = [
  {
    Grade: 4,
    Semester: 1,
    Subject: "Matematika",
    Bab: 1,
    JudulBab: "Pecahan Senilai",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Pecahan 1/2 senilai dengan ...",
        "Prompt Gambar": "Gambar diagram lingkaran dibagi 2, satu bagian diarsir.",
        "Pilihan Jawaban": [
            { "teks": "1/3", "prompt gambar": "Lingkaran bagi 3, arsir 1" },
            { "teks": "2/4", "prompt gambar": "Lingkaran bagi 4, arsir 2" },
            { "teks": "3/5", "prompt gambar": "Lingkaran bagi 5, arsir 3" },
            { "teks": "1/4", "prompt gambar": "Lingkaran bagi 4, arsir 1" }
        ],
        Jawaban: "2/4",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Manakah pecahan yang nilainya sama dengan 2/4?",
            "Prompt Gambar": "Gambar dua lingkaran. Satu dibagi 4 arsir 2. Satu lagi kosong.",
            "Pilihan Jawaban": [
                { "teks": "1/2", "prompt gambar": "Lingkaran bagi 2, arsir 1" },
                { "teks": "1/3", "prompt gambar": "Lingkaran bagi 3, arsir 1" },
                { "teks": "3/4", "prompt gambar": "Lingkaran bagi 4, arsir 3" },
                { "teks": "1/8", "prompt gambar": "Lingkaran bagi 8, arsir 1" }
            ],
            Jawaban: "1/2"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Bagian yang diarsir pada gambar menunjukkan pecahan ...",
        "Prompt Gambar": "Lingkaran dibagi 4, 1 bagian diarsir.",
        "Pilihan Jawaban": [
            { "teks": "1/4", "prompt gambar": "Angka 1/4" },
            { "teks": "1/2", "prompt gambar": "Angka 1/2" },
            { "teks": "3/4", "prompt gambar": "Angka 3/4" },
            { "teks": "2/3", "prompt gambar": "Angka 2/3" }
        ],
        Jawaban: "1/4",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Jika sebuah pizza dipotong menjadi 8 bagian sama besar dan kamu memakan 2 potong, berapa nilai pecahannya?",
            "Prompt Gambar": "Pizza dipotong 8.",
            Jawaban: "2/8"
        }
      }
    ]
  }
];