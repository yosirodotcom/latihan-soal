import { RawDataBlock } from './data_types';

export const DATA_SMA_10_SEM_1_FISIKA: RawDataBlock[] = [
  {
    Grade: 10,
    Semester: 1,
    Subject: "Fisika",
    Bab: 1,
    JudulBab: "Hakikat Fisika dan Pengukuran",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Alat ukur panjang yang memiliki ketelitian hingga 0,01 mm adalah ...",
        "Prompt Gambar": "Gambar Mikrometer Sekrup.",
        "Pilihan Jawaban": [
            { "teks": "Mistat", "prompt gambar": "Gambar penggaris biasa" },
            { "teks": "Jangka Sorong", "prompt gambar": "Gambar Jangka Sorong" },
            { "teks": "Mikrometer Sekrup", "prompt gambar": "Gambar Mikrometer Sekrup" },
            { "teks": "Meteran", "prompt gambar": "Gambar meteran gulung" }
        ],
        Jawaban: "Mikrometer Sekrup",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Untuk mengukur ketebalan kertas yang sangat tipis, alat yang paling tepat adalah ...",
            "Prompt Gambar": "Tumpukan kertas tipis.",
            "Pilihan Jawaban": [
                { "teks": "Penggaris", "prompt gambar": null },
                { "teks": "Mikrometer Sekrup", "prompt gambar": "Alat ukur presisi" },
                { "teks": "Jangka Sorong", "prompt gambar": null },
                { "teks": "Pita Ukur", "prompt gambar": null }
            ],
            Jawaban: "Mikrometer Sekrup"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan 3 besaran pokok dalam Fisika!",
        "Prompt Gambar": "Simbol-simbol fisika (kg, m, s).",
        Jawaban: "Panjang Massa Waktu",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Manakah yang termasuk besaran pokok?",
            "Prompt Gambar": "Tabel besaran.",
            "Pilihan Jawaban": [
                { "teks": "Kecepatan", "prompt gambar": null },
                { "teks": "Gaya", "prompt gambar": null },
                { "teks": "Panjang", "prompt gambar": "Penggaris" },
                { "teks": "Volume", "prompt gambar": null }
            ],
            Jawaban: "Panjang"
        }
      }
    ]
  }
];