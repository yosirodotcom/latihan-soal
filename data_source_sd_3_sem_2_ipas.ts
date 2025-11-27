import { RawDataBlock } from './data_types';

export const DATA_SD_3_SEM_2_IPAS: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 2,
    Subject: "IPAS",
    Bab: 1,
    JudulBab: "Perubahan Wujud Benda",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Peristiwa es mencair menjadi air disebut ...",
        "Prompt Gambar": "Es batu yang mulai meleleh di gelas.",
        "Pilihan Jawaban": [
            { "teks": "Membeku", "prompt gambar": "Air menjadi es" },
            { "teks": "Mencair", "prompt gambar": "Es menjadi air" },
            { "teks": "Menguap", "prompt gambar": "Air mendidih" },
            { "teks": "Menyublim", "prompt gambar": "Kapur barus mengecil" }
        ],
        Jawaban: "Mencair",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Proses air berubah menjadi uap saat dipanaskan disebut ...",
            "Prompt Gambar": "Air mendidih di panci.",
            "Pilihan Jawaban": [
                { "teks": "Membeku", "prompt gambar": null },
                { "teks": "Mencair", "prompt gambar": null },
                { "teks": "Menguap", "prompt gambar": null },
                { "teks": "Mengembun", "prompt gambar": null }
            ],
            Jawaban: "Menguap"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Apa yang terjadi pada air jika dimasukkan ke dalam freezer?",
        "Prompt Gambar": "Air di dalam wadah dimasukkan ke freezer.",
        Jawaban: "Membeku",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Perubahan wujud dari cair menjadi padat disebut apa?",
            "Prompt Gambar": "Gambar air berubah jadi es.",
            Jawaban: "Membeku"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Uap air yang berubah menjadi titik-titik air di pagi hari disebut embun.",
        "Prompt Gambar": "Rumput basah oleh embun pagi.",
        Jawaban: "Benar",
        proxy: {
            Nomor: 3,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Kapur barus yang mengecil di lemari adalah contoh peristiwa menguap.",
            "Prompt Gambar": "Kapur barus yang mengecil.",
            Jawaban: "Salah" // It's "menyublim"
        }
      }
    ]
  }
];