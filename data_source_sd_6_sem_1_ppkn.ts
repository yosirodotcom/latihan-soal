import { RawDataBlock } from './data_types';

export const DATA_SD_6_SEM_1_PPKN: RawDataBlock[] = [
  {
    Grade: 6,
    Semester: 1,
    Subject: "PPKn",
    Bab: 1,
    JudulBab: "Penerapan Nilai Pancasila",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Mengutamakan musyawarah untuk mufakat adalah pengamalan sila ke-...",
        "Prompt Gambar": "Orang-orang sedang berdiskusi atau rapat.",
        "Pilihan Jawaban": [
            { "teks": "2", "prompt gambar": "Rantai Emas" },
            { "teks": "3", "prompt gambar": "Pohon Beringin" },
            { "teks": "4", "prompt gambar": "Kepala Banteng" },
            { "teks": "5", "prompt gambar": "Padi dan Kapas" }
        ],
        Jawaban: "4",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Lambang dari sila keempat Pancasila adalah ...",
            "Prompt Gambar": "Burung Garuda Pancasila.",
            "Pilihan Jawaban": [
                { "teks": "Bintang", "prompt gambar": "Bintang" },
                { "teks": "Kepala Banteng", "prompt gambar": "Kepala Banteng" },
                { "teks": "Pohon Beringin", "prompt gambar": "Pohon Beringin" },
                { "teks": "Rantai", "prompt gambar": "Rantai" }
            ],
            Jawaban: "Kepala Banteng"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Menghormati teman yang sedang beribadah merupakan wujud toleransi beragama sesuai sila ke-...",
        "Prompt Gambar": "Anak-anak berbeda agama bermain bersama.",
        "Pilihan Jawaban": [
            { "teks": "1", "prompt gambar": "Bintang" },
            { "teks": "2", "prompt gambar": "Rantai" },
            { "teks": "3", "prompt gambar": "Pohon Beringin" },
            { "teks": "4", "prompt gambar": "Kepala Banteng" }
        ],
        Jawaban: "1",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Sila pertama Pancasila mengajarkan kita untuk percaya kepada Tuhan Yang Maha Esa.",
            "Prompt Gambar": "Simbol Bintang.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];