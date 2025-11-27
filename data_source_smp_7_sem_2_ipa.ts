import { RawDataBlock } from './data_types';

export const DATA_SMP_7_SEM_2_IPA: RawDataBlock[] = [
  {
    Grade: 7,
    Semester: 2,
    Subject: "IPA",
    Bab: 1,
    JudulBab: "Sistem Organisasi Kehidupan",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Unit terkecil penyusun makhluk hidup disebut ...",
        "Prompt Gambar": "Gambar sel di bawah mikroskop.",
        "Pilihan Jawaban": [
            { "teks": "Jaringan", "prompt gambar": "Kumpulan sel" },
            { "teks": "Organ", "prompt gambar": "Gambar jantung" },
            { "teks": "Sel", "prompt gambar": "Gambar sel tunggal" },
            { "teks": "Sistem Organ", "prompt gambar": "Gambar sistem pencernaan" }
        ],
        Jawaban: "Sel",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Bagian paling dasar dari tubuh kita adalah ...",
            "Prompt Gambar": "Tubuh manusia tersusun dari kotak-kotak kecil.",
            "Pilihan Jawaban": [
                { "teks": "Sel", "prompt gambar": null },
                { "teks": "Daging", "prompt gambar": null },
                { "teks": "Tulang", "prompt gambar": null },
                { "teks": "Kulit", "prompt gambar": null }
            ],
            Jawaban: "Sel"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Bagian sel yang berfungsi mengatur seluruh kegiatan sel adalah ...",
        "Prompt Gambar": "Struktur sel hewan dengan label.",
        "Pilihan Jawaban": [
            { "teks": "Inti Sel (Nukleus)", "prompt gambar": "Gambar nukleus" },
            { "teks": "Sitoplasma", "prompt gambar": "Cairan sel" },
            { "teks": "Dinding Sel", "prompt gambar": "Dinding sel" },
            { "teks": "Vakuola", "prompt gambar": "Rongga sel" }
        ],
        Jawaban: "Inti Sel (Nukleus)",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Otak dari sebuah sel disebut ...",
            "Prompt Gambar": "Gambar otak manusia dan inti sel.",
            "Pilihan Jawaban": [
                { "teks": "Nukleus", "prompt gambar": null },
                { "teks": "Membran", "prompt gambar": null },
                { "teks": "Ribosom", "prompt gambar": null },
                { "teks": "Mitokondria", "prompt gambar": null }
            ],
            Jawaban: "Nukleus"
        }
      }
    ]
  }
];