import { RawDataBlock } from './data_types';

export const DATA_SD_1_SEM_1_BINDO: RawDataBlock[] = [
  {
    Grade: 1,
    Semester: 1,
    Subject: "Bahasa Indonesia",
    Bab: 1,
    JudulBab: "Bunyi Apa?",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Suara bebek adalah ...",
        "Prompt Gambar": "Gambar bebek berenang di kolam.",
        "Pilihan Jawaban": [
            { "teks": "Mbeee", "prompt gambar": "Gambar kambing" },
            { "teks": "Kwek kwek", "prompt gambar": "Gambar bebek" },
            { "teks": "Meong", "prompt gambar": "Gambar kucing" },
            { "teks": "Guk guk", "prompt gambar": "Gambar anjing" }
        ],
        Jawaban: "Kwek kwek",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Hewan yang bersuara 'Meong' adalah ...",
            "Prompt Gambar": "Gambar seekor kucing lucu.",
            "Pilihan Jawaban": [
                { "teks": "Kucing", "prompt gambar": "Gambar kucing" },
                { "teks": "Sapi", "prompt gambar": "Gambar sapi" },
                { "teks": "Ayam", "prompt gambar": "Gambar ayam" },
                { "teks": "Bebek", "prompt gambar": "Gambar bebek" }
            ],
            Jawaban: "Kucing"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Huruf awal dari kata 'BOLA' adalah ...",
        "Prompt Gambar": "Gambar bola sepak berwarna hitam putih.",
        "Pilihan Jawaban": [
            { "teks": "A", "prompt gambar": "Huruf A besar berwarna merah" },
            { "teks": "B", "prompt gambar": "Huruf B besar berwarna biru" },
            { "teks": "L", "prompt gambar": "Huruf L besar berwarna hijau" },
            { "teks": "O", "prompt gambar": "Huruf O besar berwarna kuning" }
        ],
        Jawaban: "B",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Kata 'APEL' dimulai dengan huruf ...",
            "Prompt Gambar": "Gambar buah apel merah.",
            "Pilihan Jawaban": [
                { "teks": "P", "prompt gambar": "Huruf P" },
                { "teks": "L", "prompt gambar": "Huruf L" },
                { "teks": "A", "prompt gambar": "Huruf A" },
                { "teks": "E", "prompt gambar": "Huruf E" }
            ],
            Jawaban: "A"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Bunyi hujan turun adalah 'Tik tik tik'.",
        "Prompt Gambar": "Gambar suasana hujan turun membasahi tanah.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Suara petir bunyinya pelan sekali seperti bisikan.",
            "Prompt Gambar": "Gambar kilat menyambar di langit gelap.",
            Jawaban: "Salah"
        }
      },
      {
        Nomor: 4,
        Jenis: "Esai",
        Pertanyaan: "Jika ada teman yang jatuh, kita harus mengucapkan ...",
        "Prompt Gambar": "Anak menolong temannya yang terjatuh.",
        Jawaban: "Maaf / Apakah kamu baik-baik saja",
        proxy: {
            Nomor: 4,
            Jenis: "Esai",
            Pertanyaan: "Setelah diberi hadiah, kita mengucapkan ...",
            "Prompt Gambar": "Anak menerima kado ulang tahun.",
            Jawaban: "Terima kasih"
        }
      }
    ]
  }
];