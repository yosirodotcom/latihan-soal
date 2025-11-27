import { RawDataBlock } from './data_types';

export const DATA_SMA_11_SEM_1_BIOLOGI: RawDataBlock[] = [
  {
    Grade: 11,
    Semester: 1,
    Subject: "Biologi",
    Bab: 1,
    JudulBab: "Sel",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Perbedaan utama sel tumbuhan dan sel hewan adalah adanya ...",
        "Prompt Gambar": "Perbandingan diagram sel hewan dan sel tumbuhan bersebelahan.",
        "Pilihan Jawaban": [
            { "teks": "Nukleus", "prompt gambar": "Gambar inti sel" },
            { "teks": "Dinding Sel", "prompt gambar": "Gambar lapisan luar sel tumbuhan yang kaku" },
            { "teks": "Mitokondria", "prompt gambar": "Gambar organel mitokondria" },
            { "teks": "Ribosom", "prompt gambar": "Gambar bintik ribosom" }
        ],
        Jawaban: "Dinding Sel",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Sel hewan tidak memiliki bentuk yang kaku karena tidak memiliki ...",
            "Prompt Gambar": "Sel hewan yang bentuknya tidak beraturan.",
            "Pilihan Jawaban": [
                { "teks": "Membran Sel", "prompt gambar": null },
                { "teks": "Dinding Sel", "prompt gambar": "Struktur dinding bata" },
                { "teks": "Sitoplasma", "prompt gambar": null },
                { "teks": "DNA", "prompt gambar": null }
            ],
            Jawaban: "Dinding Sel"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Transportasi zat dari konsentrasi tinggi ke rendah tanpa energi disebut ...",
        "Prompt Gambar": "Partikel menyebar dari area padat ke renggang.",
        "Pilihan Jawaban": [
            { "teks": "Osmosis", "prompt gambar": null },
            { "teks": "Difusi", "prompt gambar": "Teh celup menyebar di air" },
            { "teks": "Transport Aktif", "prompt gambar": null },
            { "teks": "Endositosis", "prompt gambar": null }
        ],
        Jawaban: "Difusi",
        proxy: {
            Nomor: 2,
            Jenis: "Esai",
            Pertanyaan: "Contoh peristiwa difusi dalam kehidupan sehari-hari adalah?",
            "Prompt Gambar": "Gelas berisi air dan tinta tetes.",
            Jawaban: "Tinta dalam air"
        }
      }
    ]
  }
];