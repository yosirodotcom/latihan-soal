import { RawDataBlock } from './data_types';

export const DATA_SMA_10_SEM_2_FISIKA: RawDataBlock[] = [
  {
    Grade: 10,
    Semester: 2,
    Subject: "Fisika",
    Bab: 1,
    JudulBab: "Hukum Newton",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Hukum I Newton sering disebut juga sebagai hukum ...",
        "Prompt Gambar": "Benda diam tetap diam, benda bergerak tetap bergerak.",
        "Pilihan Jawaban": [
            { "teks": "Aksi-Reaksi", "prompt gambar": null },
            { "teks": "Kelembaman (Inersia)", "prompt gambar": "Penumpang bus terdorong ke depan saat rem mendadak" },
            { "teks": "Kekekalan Energi", "prompt gambar": null },
            { "teks": "Gravitasi", "prompt gambar": "Apel jatuh" }
        ],
        Jawaban: "Kelembaman (Inersia)",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Kecenderungan benda untuk mempertahankan keadaan diam atau bergeraknya disebut ...",
            "Prompt Gambar": "Koin di atas kertas ditarik cepat.",
            "Pilihan Jawaban": [
                { "teks": "Gaya", "prompt gambar": null },
                { "teks": "Inersia", "prompt gambar": "Benda malas bergerak" },
                { "teks": "Usaha", "prompt gambar": null },
                { "teks": "Daya", "prompt gambar": null }
            ],
            Jawaban: "Inersia"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Jika gaya aksi sebesar 50 N ke kanan, berapa besar dan ke mana arah gaya reaksi?",
        "Prompt Gambar": "Orang mendorong tembok.",
        Jawaban: "50 N ke kiri",
        proxy: {
            Nomor: 2,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Gaya aksi dan reaksi bekerja pada benda yang sama.",
            "Prompt Gambar": "Dua balok saling dorong.",
            Jawaban: "Salah"
        }
      }
    ]
  }
];