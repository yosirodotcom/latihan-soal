import { RawDataBlock } from './data_types';

export const DATA_SMA_12_SEM_1_EKONOMI: RawDataBlock[] = [
  {
    Grade: 12,
    Semester: 1,
    Subject: "Ekonomi",
    Bab: 1,
    JudulBab: "Akuntansi Sebagai Sistem Informasi",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Pihak eksternal pemakai informasi akuntansi adalah ...",
        "Prompt Gambar": "Orang berdasi melihat laporan keuangan dari luar gedung kantor.",
        "Pilihan Jawaban": [
            { "teks": "Manajer", "prompt gambar": null },
            { "teks": "Kreditur", "prompt gambar": "Bank memberikan pinjaman" },
            { "teks": "Karyawan", "prompt gambar": null },
            { "teks": "Direktur", "prompt gambar": null }
        ],
        Jawaban: "Kreditur",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Bank membutuhkan informasi akuntansi perusahaan untuk memutuskan pemberian ...",
            "Prompt Gambar": "Gedung Bank.",
            "Pilihan Jawaban": [
                { "teks": "Promosi", "prompt gambar": null },
                { "teks": "Kredit / Pinjaman", "prompt gambar": "Uang pinjaman" },
                { "teks": "Hadiah", "prompt gambar": null },
                { "teks": "Sanksi", "prompt gambar": null }
            ],
            Jawaban: "Kredit / Pinjaman"
        }
      },
      {
        Nomor: 2,
        Jenis: "Esai",
        Pertanyaan: "Apa rumus dasar persamaan akuntansi?",
        "Prompt Gambar": "Timbangan seimbang antara Harta dan (Utang+Modal).",
        Jawaban: "Harta = Utang + Modal",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Aktiva = Kewajiban + ...",
            "Prompt Gambar": "Rumus matematika keuangan.",
            "Pilihan Jawaban": [
                { "teks": "Beban", "prompt gambar": null },
                { "teks": "Modal (Ekuitas)", "prompt gambar": "Modal usaha" },
                { "teks": "Pendapatan", "prompt gambar": null },
                { "teks": "Prive", "prompt gambar": null }
            ],
            Jawaban: "Modal (Ekuitas)"
        }
      }
    ]
  }
];