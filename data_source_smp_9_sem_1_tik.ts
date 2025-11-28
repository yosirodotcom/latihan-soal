import { RawDataBlock } from './data_types';

export const DATA_SMP_9_SEM_1_TIK: RawDataBlock[] = [
  {
    Grade: 9,
    Semester: 1,
    Subject: "TIK",
    Bab: 1,
    JudulBab: "Browser dan Aplikasi CMS",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Perangkat lunak yang digunakan untuk mengakses halaman web di internet disebut ...",
        "Prompt Gambar": "Web browser icons",
        "Pilihan Jawaban": [
            { "teks": "Search Engine", "prompt gambar": "Magnifying glass" },
            { "teks": "Web Browser", "prompt gambar": "Browser window" },
            { "teks": "File Manager", "prompt gambar": "Folder icon" },
            { "teks": "Word Processor", "prompt gambar": "Typing icon" }
        ],
        Jawaban: "Web Browser",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Contoh aplikasi Web Browser yang populer adalah ...",
            "Prompt Gambar": "Browser logos",
            "Pilihan Jawaban": [
                { "teks": "Google Chrome", "prompt gambar": "Chrome logo" },
                { "teks": "Microsoft Word", "prompt gambar": "Word logo" },
                { "teks": "Paint", "prompt gambar": "Paint logo" },
                { "teks": "Calculator", "prompt gambar": "Calc logo" }
            ],
            Jawaban: "Google Chrome"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "CMS adalah singkatan dari ...",
        "Prompt Gambar": "Website building blocks",
        "Pilihan Jawaban": [
            { "teks": "Content Management System", "prompt gambar": null },
            { "teks": "Computer Maintenance System", "prompt gambar": null },
            { "teks": "Central Memory System", "prompt gambar": null },
            { "teks": "Creative Media Source", "prompt gambar": null }
        ],
        Jawaban: "Content Management System",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Aplikasi CMS yang populer untuk membuat blog adalah ...",
            "Prompt Gambar": "Wordpress logo",
            "Pilihan Jawaban": [
                { "teks": "Photoshop", "prompt gambar": null },
                { "teks": "WordPress", "prompt gambar": null },
                { "teks": "Excel", "prompt gambar": null },
                { "teks": "Winamp", "prompt gambar": null }
            ],
            Jawaban: "WordPress"
        }
      },
      {
        Nomor: 3,
        Jenis: "Esai",
        Pertanyaan: "Jelaskan perbedaan antara Browser dan Search Engine!",
        "Prompt Gambar": "Browser frame vs Google search bar",
        Jawaban: "Browser adalah aplikasi untuk membuka web, Search Engine adalah situs untuk mencari informasi.",
        proxy: {
            Nomor: 3,
            Jenis: "Esai",
            Pertanyaan: "Apa fungsi utama dari internet dalam dunia pendidikan?",
            "Prompt Gambar": "Student learning online",
            Jawaban: "Mencari sumber belajar dan informasi."
        }
      }
    ]
  }
];