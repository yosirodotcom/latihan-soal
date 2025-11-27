import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_1_BINDO: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "Bahasa Indonesia",
    Bab: 1,
    JudulBab: "Membaca dan Menulis Kalimat Sederhana",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Kalimat yang benar untuk 'Aku makan nasi' adalah ...",
        "Prompt Gambar": "Anak sedang makan nasi.",
        "Pilihan Jawaban": [
            { "teks": "nasi makan aku", "prompt gambar": null },
            { "teks": "aku makan nasi", "prompt gambar": null },
            { "teks": "makan aku nasi", "prompt gambar": null },
            { "teks": "aku nasi makan", "prompt gambar": null }
        ],
        Jawaban: "aku makan nasi",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Susunlah kata-kata ini menjadi kalimat yang benar: 'bermain - bola - saya'",
            "Prompt Gambar": "Anak bermain bola.",
            "Pilihan Jawaban": [
                { "teks": "bola bermain saya", "prompt gambar": null },
                { "teks": "saya bermain bola", "prompt gambar": null },
                { "teks": "bermain saya bola", "prompt gambar": null },
                { "teks": "saya bola bermain", "prompt gambar": null }
            ],
            Jawaban: "saya bermain bola"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Setiap awal kalimat harus diawali dengan huruf besar.",
        "Prompt Gambar": "Huruf 'A' besar di awal kalimat.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Nama orang harus diawali dengan huruf kecil.",
            "Prompt Gambar": "Nama 'Andi' dengan huruf 'A' kecil.",
            Jawaban: "Salah"
        }
      },
      {
        Nomor: 3,
        Jenis: "Esai",
        Pertanyaan: "Buatlah satu kalimat sederhana tentang 'sekolah'!",
        "Prompt Gambar": "Gambar anak-anak berseragam di depan gerbang sekolah.",
        Jawaban: "Saya pergi ke sekolah.", // Example answer
        proxy: {
            Nomor: 3,
            Jenis: "Esai",
            Pertanyaan: "Tuliskan satu kalimat yang menggambarkan kegiatanmu di rumah!",
            "Prompt Gambar": "Anak sedang membantu ibu di dapur.",
            Jawaban: "Saya membantu ibu." // Example answer
        }
      }
    ]
  }
];