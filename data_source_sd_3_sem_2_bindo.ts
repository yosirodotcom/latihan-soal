import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_BINDO: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "Bahasa Indonesia",
    Bab: 1,
    JudulBab: "Menulis Cerita Pendek",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Bagian awal dalam sebuah cerita disebut ...",
        "Prompt Gambar": "Buku cerita anak terbuka pada halaman pertama.",
        "Pilihan Jawaban": [
            { "teks": "Ending", "prompt gambar": null },
            { "teks": "Klimaks", "prompt gambar": null },
            { "teks": "Pembukaan", "prompt gambar": null },
            { "teks": "Konflik", "prompt gambar": null }
        ],
        Jawaban: "Pembukaan",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Di akhir cerita, biasanya ada ...",
            "Prompt Gambar": "Halaman terakhir buku cerita.",
            "Pilihan Jawaban": [
                { "teks": "Perkenalan", "prompt gambar": null },
                { "teks": "Kesimpulan", "prompt gambar": null },
                { "teks": "Penutup", "prompt gambar": null },
                { "teks": "Latar", "prompt gambar": null }
            ],
            Jawaban: "Penutup"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu hal yang harus ada dalam cerita (misal: tokoh, latar, dsb.)!",
        "Prompt Gambar": "Daftar elemen cerita.",
        Jawaban: "Tokoh", // Example answer
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Bagian cerita yang menceritakan tempat dan waktu kejadian disebut apa?",
            "Prompt Gambar": "Jam dan peta.",
            Jawaban: "Latar"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Cerita harus selalu memiliki akhir yang bahagia.",
        "Prompt Gambar": "Anak membaca buku cerita sedih.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Tokoh dalam cerita adalah orang atau hewan yang melakukan tindakan di cerita.",
            "Prompt Gambar": "Karakter kartun.",
            Jawaban: "Benar"
        }
      }
    ]
  }
];