import { RawDataBlock } from './data_types';

export const DATA_SMP_9_SEM_1_IPS: RawDataBlock[] = [
  {
    Grade: 9,
    Semester: 1,
    Subject: "IPS",
    Bab: 1,
    JudulBab: "Interaksi Antarnegara Asia dan Benua Lainnya",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Benua terluas di permukaan bumi adalah Benua ...",
        "Prompt Gambar": "World map highlighting Asia",
        "Pilihan Jawaban": [
            { "teks": "Afrika", "prompt gambar": "Africa map" },
            { "teks": "Amerika", "prompt gambar": "America map" },
            { "teks": "Asia", "prompt gambar": "Asia map" },
            { "teks": "Eropa", "prompt gambar": "Europe map" }
        ],
        Jawaban: "Asia",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Batas benua Asia di sebelah timur adalah ...",
            "Prompt Gambar": "Map pointing east of Asia",
            "Pilihan Jawaban": [
                { "teks": "Samudra Pasifik", "prompt gambar": "Pacific Ocean" },
                { "teks": "Samudra Hindia", "prompt gambar": "Indian Ocean" },
                { "teks": "Pegunungan Ural", "prompt gambar": "Mountains" },
                { "teks": "Laut Merah", "prompt gambar": "Red Sea" }
            ],
            Jawaban: "Samudra Pasifik"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Jepang dikenal sebagai negara yang sering mengalami gempa bumi karena berada di wilayah ...",
        "Prompt Gambar": "Ring of fire map",
        "Pilihan Jawaban": [
            { "teks": "Ring of Fire (Cincin Api Pasifik)", "prompt gambar": "Volcanoes map" },
            { "teks": "Gurun Pasir", "prompt gambar": "Desert" },
            { "teks": "Kutub Utara", "prompt gambar": "Ice" },
            { "teks": "Dataran Rendah", "prompt gambar": "Plains" }
        ],
        Jawaban: "Ring of Fire (Cincin Api Pasifik)",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Gunung tertinggi di Jepang yang menjadi simbol negara tersebut adalah ...",
            "Prompt Gambar": "Mount Fuji",
            "Pilihan Jawaban": [
                { "teks": "Gunung Everest", "prompt gambar": null },
                { "teks": "Gunung Fuji", "prompt gambar": null },
                { "teks": "Gunung Aso", "prompt gambar": null },
                { "teks": "Gunung Kilimanjaro", "prompt gambar": null }
            ],
            Jawaban: "Gunung Fuji"
        }
      },
      {
        Nomor: 3,
        Jenis: "Esai",
        Pertanyaan: "Mengapa Benua Eropa sering dijuluki sebagai Benua Biru?",
        "Prompt Gambar": "European map blue eyes",
        Jawaban: "Karena mayoritas penduduknya memiliki mata berwarna biru.",
        proxy: {
            Nomor: 3,
            Jenis: "Esai",
            Pertanyaan: "Sebutkan satu negara maju yang terletak di Benua Amerika Utara!",
            "Prompt Gambar": "USA Flag or Canada Flag",
            Jawaban: "Amerika Serikat / Kanada"
        }
      }
    ]
  }
];