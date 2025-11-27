import { QuestionData, Option } from './types';

// Define loose types for the raw data to accommodate both schemas
interface RawOption {
  teks?: string;
  "prompt gambar"?: string;
  [key: string]: any; // Allow for English keys "option 1" etc if processed differently, though English JSON uses key-value pairs in "Pilihan Jawaban"
}

interface RawQuestion {
  Nomor: number;
  Jenis: string;
  Pertanyaan: string;
  "Prompt Gambar"?: string;
  "Pilihan Jawaban"?: any; // Can be array (IPAS) or object (English)
  Jawaban: string;
  proxy?: any;
}

interface RawChapter {
  Bab?: string; // IPAS
  Chapter?: number; // English
  Topic?: string; // English
  Total_Soal?: number;
  Total_Questions?: number;
  Daftar_Soal?: RawQuestion[]; // IPAS
  Questions?: RawQuestion[]; // English
}

const rawData: RawChapter[] = [
  // --- IPAS ---
  // --- IPAS ---
{
  "Bab": "1 - Mari Kenali Hewan di Sekitar Kita",
  "Total_Soal": 50,
  "Daftar_Soal": [
    {
      "Nomor": 1,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perhatikan hewan pada gambar. Hewan tersebut memiliki tulang belakang. Hewan yang memiliki tulang belakang disebut hewan ...",
      "Prompt Gambar": "Buatkan gambar ilustrasi tulang belakang manusia atau hewan vertebrata yang jelas.",
      "Pilihan Jawaban": [
        {
          "teks": "Vertebrata",
          "prompt gambar": "Buatkan gambar kerangka kucing atau hewan bertulang belakang."
        },
        {
          "teks": "Invertebrata",
          "prompt gambar": "Buatkan gambar cacing tanah atau ubur-ubur."
        },
        {
          "teks": "Melata",
          "prompt gambar": "Buatkan gambar ular sedang melata."
        },
        {
          "teks": "Buas",
          "prompt gambar": "Buatkan gambar singa sedang mengaum."
        }
      ],
      "Jawaban": "Vertebrata",
      "proxy": {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kucing dan Ayam memiliki tulang punggung di tubuhnya. Kelompok hewan ini disebut apa?",
        "Prompt Gambar": "Buatkan gambar kucing dan ayam berdampingan.",
        "Pilihan Jawaban": [
          {
            "teks": "Invertebrata",
            "prompt gambar": "Buatkan gambar siput."
          },
          {
            "teks": "Vertebrata",
            "prompt gambar": "Buatkan gambar kerangka ikan."
          },
          {
            "teks": "Herbivora",
            "prompt gambar": "Buatkan gambar sapi makan rumput."
          },
          {
            "teks": "Karnivora",
            "prompt gambar": "Buatkan gambar harimau makan daging."
          }
        ],
        "Jawaban": "Vertebrata"
      }
    },
    {
      "Nomor": 2,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Cacing tanah dan ubur-ubur tidak memiliki tulang belakang. Mereka termasuk kelompok hewan ...",
      "Prompt Gambar": "Buatkan gambar cacing tanah dan ubur-ubur di laut.",
      "Pilihan Jawaban": [
        {
          "teks": "Mamalia",
          "prompt gambar": "Buatkan gambar sapi menyusui anaknya."
        },
        {
          "teks": "Vertebrata",
          "prompt gambar": "Buatkan gambar kerangka burung."
        },
        {
          "teks": "Invertebrata",
          "prompt gambar": "Buatkan gambar bintang laut dan siput."
        },
        {
          "teks": "Unggas",
          "prompt gambar": "Buatkan gambar ayam dan bebek."
        }
      ],
      "Jawaban": "Invertebrata",
      "proxy": {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan manakah di bawah ini yang tubuhnya lunak dan TIDAK punya tulang belakang?",
        "Prompt Gambar": "Buatkan gambar koleksi hewan: Kucing, Ayam, Gurita, Kambing.",
        "Pilihan Jawaban": [
          {
            "teks": "Kucing",
            "prompt gambar": "Buatkan gambar kucing."
          },
          {
            "teks": "Ayam",
            "prompt gambar": "Buatkan gambar ayam."
          },
          {
            "teks": "Gurita",
            "prompt gambar": "Buatkan gambar gurita."
          },
          {
            "teks": "Kambing",
            "prompt gambar": "Buatkan gambar kambing."
          }
        ],
        "Jawaban": "Gurita"
      }
    },
    {
      "Nomor": 3,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Ikan bergerak di dalam air menggunakan organ tubuh yang ditunjuk panah. Apa nama organ tersebut?",
      "Prompt Gambar": "Buatkan gambar ikan sedang berenang, berikan tanda panah menunjuk ke arah siripnya.",
      "Pilihan Jawaban": [
        {
          "teks": "Sayap",
          "prompt gambar": "Buatkan gambar sayap burung."
        },
        {
          "teks": "Kaki",
          "prompt gambar": "Buatkan gambar kaki ayam."
        },
        {
          "teks": "Sirip",
          "prompt gambar": "Buatkan gambar sirip ikan."
        },
        {
          "teks": "Ekor saja",
          "prompt gambar": "Buatkan gambar ekor kucing."
        }
      ],
      "Jawaban": "Sirip",
      "proxy": {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Agar bisa berenang lincah di air, ikan mas menggunakan bantuan alat gerak berupa ...",
        "Prompt Gambar": "Buatkan gambar ikan mas koki yang cantik.",
        "Pilihan Jawaban": [
          {
            "teks": "Kaki selaput",
            "prompt gambar": "Buatkan gambar kaki bebek."
          },
          {
            "teks": "Sirip",
            "prompt gambar": "Buatkan gambar sirip hiu."
          },
          {
            "teks": "Sayap",
            "prompt gambar": "Buatkan gambar sayap kupu-kupu."
          },
          {
            "teks": "Perut",
            "prompt gambar": "Buatkan gambar ular melata."
          }
        ],
        "Jawaban": "Sirip"
      }
    },
    {
      "Nomor": 4,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Burung Elang memiliki paruh yang tajam dan melengkung. Paruh seperti ini berguna untuk ...",
      "Prompt Gambar": "Buatkan gambar kepala burung elang close-up yang memperlihatkan paruhnya yang tajam.",
      "Pilihan Jawaban": [
        {
          "teks": "Memecah biji-bijian",
          "prompt gambar": "Buatkan gambar paruh burung pipit memakan biji."
        },
        {
          "teks": "Mengoyak daging",
          "prompt gambar": "Buatkan gambar elang sedang memakan daging."
        },
        {
          "teks": "Menghisap madu",
          "prompt gambar": "Buatkan gambar burung kolibri menghisap bunga."
        },
        {
          "teks": "Menyaring lumpur",
          "prompt gambar": "Buatkan gambar paruh bebek."
        }
      ],
      "Jawaban": "Mengoyak daging",
      "proxy": {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan karnivora (pemakan daging) seperti elang biasanya memiliki bentuk paruh yang ...",
        "Prompt Gambar": "Buatkan gambar siluet burung elang terbang.",
        "Pilihan Jawaban": [
          {
            "teks": "Pipih dan lebar",
            "prompt gambar": "Buatkan gambar paruh bebek."
          },
          {
            "teks": "Kecil dan pendek",
            "prompt gambar": "Buatkan gambar paruh ayam."
          },
          {
            "teks": "Runcing dan melengkung tajam",
            "prompt gambar": "Buatkan gambar paruh burung hantu/elang."
          },
          {
            "teks": "Panjang seperti jarum",
            "prompt gambar": "Buatkan gambar paruh burung kolibri."
          }
        ],
        "Jawaban": "Runcing dan melengkung tajam"
      }
    },
    {
      "Nomor": 5,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perhatikan gambar kaki hewan berikut. Hewan ini hidup di air dan darat (seperti bebek). Apa fungsi selaput pada kakinya?",
      "Prompt Gambar": "Buatkan gambar kaki bebek yang berselaput (webbed feet).",
      "Pilihan Jawaban": [
        {
          "teks": "Untuk mencengkram mangsa",
          "prompt gambar": "Buatkan gambar kaki elang mencengkram."
        },
        {
          "teks": "Untuk memanjat pohon",
          "prompt gambar": "Buatkan gambar kaki kucing memanjat."
        },
        {
          "teks": "Untuk berenang dan berjalan di lumpur",
          "prompt gambar": "Buatkan gambar bebek berenang di air."
        },
        {
          "teks": "Untuk berlari kencang",
          "prompt gambar": "Buatkan gambar kaki kuda berlari."
        }
      ],
      "Jawaban": "Untuk berenang dan berjalan di lumpur",
      "proxy": {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Bebek bisa berenang dengan mudah karena kakinya memiliki ...",
        "Prompt Gambar": "Buatkan gambar seekor bebek di pinggir danau.",
        "Pilihan Jawaban": [
          {
            "teks": "Cakar yang tajam",
            "prompt gambar": "Buatkan gambar cakar harimau."
          },
          {
            "teks": "Selaput renang",
            "prompt gambar": "Buatkan gambar detail kaki bebek."
          },
          {
            "teks": "Bantalan empuk",
            "prompt gambar": "Buatkan gambar telapak kaki kucing."
          },
          {
            "teks": "Kuku panjang",
            "prompt gambar": "Buatkan gambar kaki ayam."
          }
        ],
        "Jawaban": "Selaput renang"
      }
    },
    {
      "Nomor": 6,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan seperti sapi dan kambing memakan rumput. Gigi yang paling dominan (banyak) mereka gunakan untuk mengunyah adalah ...",
      "Prompt Gambar": "Buatkan gambar sapi sedang memakan rumput.",
      "Pilihan Jawaban": [
        {
          "teks": "Gigi Taring",
          "prompt gambar": "Buatkan gambar gigi taring harimau."
        },
        {
          "teks": "Gigi Geraham",
          "prompt gambar": "Buatkan gambar gigi geraham datar (pengunyah)."
        },
        {
          "teks": "Paruh",
          "prompt gambar": "Buatkan gambar paruh burung."
        },
        {
          "teks": "Lidah panjang",
          "prompt gambar": "Buatkan gambar lidah bunglon."
        }
      ],
      "Jawaban": "Gigi Geraham",
      "proxy": {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan Herbivora (pemakan tumbuhan) memiliki gigi geraham yang lebar dan kuat. Fungsinya adalah untuk ...",
        "Prompt Gambar": "Buatkan gambar tengkorak gigi hewan herbivora.",
        "Pilihan Jawaban": [
          {
            "teks": "Mengoyak daging",
            "prompt gambar": "Buatkan gambar daging sobek."
          },
          {
            "teks": "Melumat dan menggilas rumput/daun",
            "prompt gambar": "Buatkan gambar rumput yang hancur."
          },
          {
            "teks": "Menghisap darah",
            "prompt gambar": "Buatkan gambar nyamuk."
          },
          {
            "teks": "Memecah biji keras",
            "prompt gambar": "Buatkan gambar burung memecah biji."
          }
        ],
        "Jawaban": "Melumat dan menggilas rumput/daun"
      }
    },
    {
      "Nomor": 7,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kupu-kupu memiliki bentuk mulut khusus seperti selang yang panjang. Apa fungsi bentuk mulut tersebut?",
      "Prompt Gambar": "Buatkan gambar kupu-kupu sedang hinggap di bunga dengan mulut probosisnya menjulur.",
      "Pilihan Jawaban": [
        {
          "teks": "Menggigit daun",
          "prompt gambar": "Buatkan gambar ulat menggigit daun."
        },
        {
          "teks": "Menghisap nektar bunga",
          "prompt gambar": "Buatkan gambar nektar bunga."
        },
        {
          "teks": "Menusuk kulit manusia",
          "prompt gambar": "Buatkan gambar nyamuk."
        },
        {
          "teks": "Menjilat air",
          "prompt gambar": "Buatkan gambar lalat."
        }
      ],
      "Jawaban": "Menghisap nektar bunga",
      "proxy": {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Serangga yang memiliki tipe mulut penghisap (seperti belalai) adalah ...",
        "Prompt Gambar": "Buatkan gambar taman bunga dengan serangga.",
        "Pilihan Jawaban": [
          {
            "teks": "Belalang",
            "prompt gambar": "Buatkan gambar belalang."
          },
          {
            "teks": "Kupu-kupu",
            "prompt gambar": "Buatkan gambar kupu-kupu."
          },
          {
            "teks": "Nyamuk",
            "prompt gambar": "Buatkan gambar nyamuk."
          },
          {
            "teks": "Semut",
            "prompt gambar": "Buatkan gambar semut."
          }
        ],
        "Jawaban": "Kupu-kupu"
      }
    },
    {
      "Nomor": 8,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan ini bergerak dengan cara melata menggunakan otot perutnya. Hewan apakah itu?",
      "Prompt Gambar": "Buatkan gambar ular atau cacing sedang bergerak di tanah.",
      "Pilihan Jawaban": [
        {
          "teks": "Kucing",
          "prompt gambar": "Buatkan gambar kucing berjalan."
        },
        {
          "teks": "Ular",
          "prompt gambar": "Buatkan gambar ular."
        },
        {
          "teks": "Burung",
          "prompt gambar": "Buatkan gambar burung."
        },
        {
          "teks": "Katak",
          "prompt gambar": "Buatkan gambar katak melompat."
        }
      ],
      "Jawaban": "Ular",
      "proxy": {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Manakah di bawah ini yang BUKAN hewan yang bergerak dengan kaki?",
        "Prompt Gambar": "Buatkan gambar kebun binatang.",
        "Pilihan Jawaban": [
          {
            "teks": "Kuda",
            "prompt gambar": "Buatkan gambar kuda."
          },
          {
            "teks": "Ayam",
            "prompt gambar": "Buatkan gambar ayam."
          },
          {
            "teks": "Cacing",
            "prompt gambar": "Buatkan gambar cacing tanah."
          },
          {
            "teks": "Kambing",
            "prompt gambar": "Buatkan gambar kambing."
          }
        ],
        "Jawaban": "Cacing"
      }
    },
    {
      "Nomor": 9,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perhatikan gambar kelinci berikut. Apa kegunaan utama telinga panjang pada kelinci?",
      "Prompt Gambar": "Buatkan gambar kelinci dengan telinga yang panjang dan tegak.",
      "Pilihan Jawaban": [
        {
          "teks": "Untuk terbang",
          "prompt gambar": "Buatkan gambar kelinci dengan sayap (imajinasi)."
        },
        {
          "teks": "Untuk mendengar suara musuh dari jauh",
          "prompt gambar": "Buatkan gambar kelinci sedang waspada mendengarkan."
        },
        {
          "teks": "Untuk menyerang lawan",
          "prompt gambar": "Buatkan gambar kelinci berkelahi."
        },
        {
          "teks": "Untuk makan wortel",
          "prompt gambar": "Buatkan gambar kelinci makan wortel."
        }
      ],
      "Jawaban": "Untuk mendengar suara musuh dari jauh",
      "proxy": {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kelinci memiliki indra pendengaran yang sangat peka karena memiliki ...",
        "Prompt Gambar": "Buatkan gambar kelinci di padang rumput.",
        "Pilihan Jawaban": [
          {
            "teks": "Hidung yang pesek",
            "prompt gambar": "Buatkan gambar hidung kelinci."
          },
          {
            "teks": "Ekor yang bulat",
            "prompt gambar": "Buatkan gambar ekor kelinci."
          },
          {
            "teks": "Telinga yang panjang",
            "prompt gambar": "Buatkan gambar telinga kelinci."
          },
          {
            "teks": "Kaki yang pendek",
            "prompt gambar": "Buatkan gambar kaki depan kelinci."
          }
        ],
        "Jawaban": "Telinga yang panjang"
      }
    },
    {
      "Nomor": 10,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan Omnivora adalah hewan pemakan segala. Manakah di bawah ini yang termasuk Omnivora?",
      "Prompt Gambar": "Buatkan gambar Ayam, Harimau, dan Sapi sejajar.",
      "Pilihan Jawaban": [
        {
          "teks": "Harimau",
          "prompt gambar": "Buatkan gambar harimau."
        },
        {
          "teks": "Sapi",
          "prompt gambar": "Buatkan gambar sapi."
        },
        {
          "teks": "Ayam",
          "prompt gambar": "Buatkan gambar ayam memakan biji dan cacing."
        },
        {
          "teks": "Kambing",
          "prompt gambar": "Buatkan gambar kambing."
        }
      ],
      "Jawaban": "Ayam",
      "proxy": {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Ayam memakan biji jagung, tetapi juga suka memakan cacing. Berarti ayam termasuk hewan pemakan ...",
        "Prompt Gambar": "Buatkan gambar ayam sedang mengais tanah.",
        "Pilihan Jawaban": [
          {
            "teks": "Daging saja (Karnivora)",
            "prompt gambar": "Buatkan gambar daging."
          },
          {
            "teks": "Tumbuhan saja (Herbivora)",
            "prompt gambar": "Buatkan gambar sayuran."
          },
          {
            "teks": "Segala (Omnivora)",
            "prompt gambar": "Buatkan gambar piring berisi sayur dan daging."
          },
          {
            "teks": "Batu",
            "prompt gambar": "Buatkan gambar batu."
          }
        ],
        "Jawaban": "Segala (Omnivora)"
      }
    },
    {
      "Nomor": 11,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Katak bisa hidup di dua tempat, yaitu di air dan di darat. Hewan seperti ini disebut ...",
      "Prompt Gambar": "Buatkan gambar katak duduk di atas daun teratai di kolam.",
      "Pilihan Jawaban": [
        {
          "teks": "Mamalia",
          "prompt gambar": "Buatkan gambar kucing."
        },
        {
          "teks": "Amfibi",
          "prompt gambar": "Buatkan gambar katak dan salamander."
        },
        {
          "teks": "Reptil",
          "prompt gambar": "Buatkan gambar buaya."
        },
        {
          "teks": "Unggas",
          "prompt gambar": "Buatkan gambar bebek."
        }
      ],
      "Jawaban": "Amfibi",
      "proxy": {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Salah satu ciri hewan Amfibi adalah ...",
        "Prompt Gambar": "Buatkan gambar siklus hidup katak.",
        "Pilihan Jawaban": [
          {
            "teks": "Hidup di dua alam (darat dan air)",
            "prompt gambar": "Buatkan gambar pantai (perbatasan darat dan air)."
          },
          {
            "teks": "Hanya hidup di udara",
            "prompt gambar": "Buatkan gambar burung terbang."
          },
          {
            "teks": "Memiliki bulu tebal",
            "prompt gambar": "Buatkan gambar beruang kutub."
          },
          {
            "teks": "Menyusui anaknya",
            "prompt gambar": "Buatkan gambar kucing menyusui."
          }
        ],
        "Jawaban": "Hidup di dua alam (darat dan air)"
      }
    },
    {
      "Nomor": 12,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Nyamuk memiliki tipe mulut yang tajam dan panjang seperti jarum suntik. Mulut ini digunakan untuk ...",
      "Prompt Gambar": "Buatkan gambar nyamuk sedang hinggap di kulit manusia.",
      "Pilihan Jawaban": [
        {
          "teks": "Mengunyah daun",
          "prompt gambar": "Buatkan gambar ulat makan daun."
        },
        {
          "teks": "Menjilat nektar",
          "prompt gambar": "Buatkan gambar lebah."
        },
        {
          "teks": "Menusuk dan menghisap darah",
          "prompt gambar": "Buatkan gambar ilustrasi jarum suntik."
        },
        {
          "teks": "Memecah biji",
          "prompt gambar": "Buatkan gambar burung pipit."
        }
      ],
      "Jawaban": "Menusuk dan menghisap darah",
      "proxy": {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Serangga yang memiliki mulut tipe 'penusuk dan penghisap' adalah ...",
        "Prompt Gambar": "Buatkan gambar kumpulan serangga.",
        "Pilihan Jawaban": [
          {
            "teks": "Belalang",
            "prompt gambar": "Buatkan gambar belalang."
          },
          {
            "teks": "Kupu-kupu",
            "prompt gambar": "Buatkan gambar kupu-kupu."
          },
          {
            "teks": "Nyamuk",
            "prompt gambar": "Buatkan gambar nyamuk."
          },
          {
            "teks": "Jangkrik",
            "prompt gambar": "Buatkan gambar jangkrik."
          }
        ],
        "Jawaban": "Nyamuk"
      }
    },
    {
      "Nomor": 13,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan Mamalia adalah hewan yang menyusui anaknya. Contoh hewan mamalia yang hidup di air adalah ...",
      "Prompt Gambar": "Buatkan gambar laut dengan berbagai hewan.",
      "Pilihan Jawaban": [
        {
          "teks": "Ikan Hiu",
          "prompt gambar": "Buatkan gambar ikan hiu."
        },
        {
          "teks": "Lumba-lumba",
          "prompt gambar": "Buatkan gambar lumba-lumba."
        },
        {
          "teks": "Kuda Laut",
          "prompt gambar": "Buatkan gambar kuda laut."
        },
        {
          "teks": "Gurita",
          "prompt gambar": "Buatkan gambar gurita."
        }
      ],
      "Jawaban": "Lumba-lumba",
      "proxy": {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Paus dan Lumba-lumba bukan termasuk ikan, tetapi termasuk Mamalia karena ...",
        "Prompt Gambar": "Buatkan gambar paus menyemburkan air.",
        "Pilihan Jawaban": [
          {
            "teks": "Bertelur",
            "prompt gambar": "Buatkan gambar telur ikan."
          },
          {
            "teks": "Bernapas dengan insang",
            "prompt gambar": "Buatkan gambar insang ikan."
          },
          {
            "teks": "Melahirkan dan menyusui",
            "prompt gambar": "Buatkan gambar ibu menyusui bayi (simbol)."
          },
          {
            "teks": "Memiliki sisik",
            "prompt gambar": "Buatkan gambar sisik ikan."
          }
        ],
        "Jawaban": "Melahirkan dan menyusui"
      }
    },
    {
      "Nomor": 14,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perhatikan gambar burung pelatuk. Paruhnya kuat dan runcing. Apa gunanya?",
      "Prompt Gambar": "Buatkan gambar burung pelatuk sedang mematuk batang pohon.",
      "Pilihan Jawaban": [
        {
          "teks": "Untuk menyaring air",
          "prompt gambar": "Buatkan gambar bebek."
        },
        {
          "teks": "Untuk memahat kayu pohon dan mencari serangga",
          "prompt gambar": "Buatkan gambar lubang di pohon."
        },
        {
          "teks": "Untuk mengoyak daging mangsa",
          "prompt gambar": "Buatkan gambar elang."
        },
        {
          "teks": "Untuk menghisap madu bunga",
          "prompt gambar": "Buatkan gambar kolibri."
        }
      ],
      "Jawaban": "Untuk memahat kayu pohon dan mencari serangga",
      "proxy": {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Burung yang mencari makan dengan cara melubangi batang pohon adalah ...",
        "Prompt Gambar": "Buatkan gambar hutan.",
        "Pilihan Jawaban": [
          {
            "teks": "Burung Hantu",
            "prompt gambar": "Buatkan gambar burung hantu."
          },
          {
            "teks": "Burung Pelatuk",
            "prompt gambar": "Buatkan gambar burung pelatuk."
          },
          {
            "teks": "Burung Pipit",
            "prompt gambar": "Buatkan gambar burung pipit."
          },
          {
            "teks": "Burung Merpati",
            "prompt gambar": "Buatkan gambar burung merpati."
          }
        ],
        "Jawaban": "Burung Pelatuk"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kucing, anjing, dan harimau memiliki gigi taring yang tajam. Ini menunjukkan bahwa mereka adalah hewan ...",
      "Prompt Gambar": "Buatkan gambar harimau memperlihatkan giginya.",
      "Pilihan Jawaban": [
        {
          "teks": "Herbivora (Pemakan Tumbuhan)",
          "prompt gambar": "Buatkan gambar kambing."
        },
        {
          "teks": "Karnivora (Pemakan Daging)",
          "prompt gambar": "Buatkan gambar singa."
        },
        {
          "teks": "Insectivora (Pemakan Serangga)",
          "prompt gambar": "Buatkan gambar cicak."
        },
        {
          "teks": "Granivora (Pemakan Biji)",
          "prompt gambar": "Buatkan gambar burung pipit."
        }
      ],
      "Jawaban": "Karnivora (Pemakan Daging)",
      "proxy": {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Ciri utama hewan pemakan daging (Karnivora) pada bagian mulutnya adalah ...",
        "Prompt Gambar": "Buatkan gambar tengkorak hewan karnivora.",
        "Pilihan Jawaban": [
          {
            "teks": "Memiliki gigi geraham yang lebar",
            "prompt gambar": "Buatkan gambar gigi sapi."
          },
          {
            "teks": "Memiliki gigi taring yang tajam dan kuat",
            "prompt gambar": "Buatkan gambar gigi singa."
          },
          {
            "teks": "Memiliki paruh pipih",
            "prompt gambar": "Buatkan gambar paruh bebek."
          },
          {
            "teks": "Tidak memiliki gigi",
            "prompt gambar": "Buatkan gambar cacing."
          }
        ],
        "Jawaban": "Memiliki gigi taring yang tajam dan kuat"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Manakah di bawah ini yang termasuk hewan Reptil (hewan melata/merayap)?",
      "Prompt Gambar": "Buatkan gambar Buaya, Ayam, Kucing, dan Ikan.",
      "Pilihan Jawaban": [
        {
          "teks": "Ayam",
          "prompt gambar": "Buatkan gambar ayam."
        },
        {
          "teks": "Buaya",
          "prompt gambar": "Buatkan gambar buaya."
        },
        {
          "teks": "Kucing",
          "prompt gambar": "Buatkan gambar kucing."
        },
        {
          "teks": "Ikan Mas",
          "prompt gambar": "Buatkan gambar ikan mas."
        }
      ],
      "Jawaban": "Buaya",
      "proxy": {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan reptil biasanya memiliki kulit yang ...",
        "Prompt Gambar": "Buatkan gambar kulit buaya atau ular secara close up.",
        "Pilihan Jawaban": [
          {
            "teks": "Berbulu halus",
            "prompt gambar": "Buatkan gambar bulu kucing."
          },
          {
            "teks": "Bersisik keras dan kering",
            "prompt gambar": "Buatkan gambar sisik ular."
          },
          {
            "teks": "Berlendir dan basah",
            "prompt gambar": "Buatkan gambar kulit katak."
          },
          {
            "teks": "Berbulu pelepah",
            "prompt gambar": "Buatkan gambar bulu burung."
          }
        ],
        "Jawaban": "Bersisik keras dan kering"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Ikan bernapas di dalam air menggunakan ...",
      "Prompt Gambar": "Buatkan gambar organ dalam ikan (insang).",
      "Pilihan Jawaban": [
        {
          "teks": "Paru-paru",
          "prompt gambar": "Buatkan gambar paru-paru manusia."
        },
        {
          "teks": "Insang",
          "prompt gambar": "Buatkan gambar insang berwarna merah."
        },
        {
          "teks": "Trakea",
          "prompt gambar": "Buatkan gambar belalang."
        },
        {
          "teks": "Kulit",
          "prompt gambar": "Buatkan gambar cacing."
        }
      ],
      "Jawaban": "Insang",
      "proxy": {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apa yang terjadi jika ikan diangkat ke darat terlalu lama?",
        "Prompt Gambar": "Buatkan gambar ikan di daratan.",
        "Pilihan Jawaban": [
          {
            "teks": "Ikan akan berjalan",
            "prompt gambar": "Buatkan gambar ikan berkaki (kartun)."
          },
          {
            "teks": "Ikan akan mati karena insang tidak bisa mengambil oksigen dari udara",
            "prompt gambar": "Buatkan gambar ikan lemas."
          },
          {
            "teks": "Ikan akan berubah menjadi katak",
            "prompt gambar": "Buatkan gambar katak."
          },
          {
            "teks": "Ikan akan tidur",
            "prompt gambar": "Buatkan gambar ikan tidur."
          }
        ],
        "Jawaban": "Ikan akan mati karena insang tidak bisa mengambil oksigen dari udara"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Siput adalah hewan lunak yang membawa 'rumahnya' kemana-mana. Bagian keras di punggung siput disebut ...",
      "Prompt Gambar": "Buatkan gambar siput dengan cangkangnya.",
      "Pilihan Jawaban": [
        {
          "teks": "Tulang belakang",
          "prompt gambar": "Buatkan gambar tulang."
        },
        {
          "teks": "Cangkang",
          "prompt gambar": "Buatkan gambar kerang/cangkang."
        },
        {
          "teks": "Sisik",
          "prompt gambar": "Buatkan gambar sisik ikan."
        },
        {
          "teks": "Bulu",
          "prompt gambar": "Buatkan gambar bulu."
        }
      ],
      "Jawaban": "Cangkang",
      "proxy": {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan invertebrata (tidak bertulang belakang) yang melindungi tubuh lunaknya dengan cangkang adalah ...",
        "Prompt Gambar": "Buatkan gambar pantai.",
        "Pilihan Jawaban": [
          {
            "teks": "Cacing",
            "prompt gambar": "Buatkan gambar cacing."
          },
          {
            "teks": "Kerang / Siput",
            "prompt gambar": "Buatkan gambar kerang."
          },
          {
            "teks": "Ubur-ubur",
            "prompt gambar": "Buatkan gambar ubur-ubur."
          },
          {
            "teks": "Lintah",
            "prompt gambar": "Buatkan gambar lintah."
          }
        ],
        "Jawaban": "Kerang / Siput"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perhatikan gambar capung. Capung, kupu-kupu, dan belalang termasuk ke dalam kelompok ...",
      "Prompt Gambar": "Buatkan gambar capung, kupu-kupu, dan belalang.",
      "Pilihan Jawaban": [
        {
          "teks": "Reptil",
          "prompt gambar": "Buatkan gambar ular."
        },
        {
          "teks": "Serangga (Insekta)",
          "prompt gambar": "Buatkan gambar lebah."
        },
        {
          "teks": "Ikan (Pisces)",
          "prompt gambar": "Buatkan gambar ikan."
        },
        {
          "teks": "Mamalia",
          "prompt gambar": "Buatkan gambar kucing."
        }
      ],
      "Jawaban": "Serangga (Insekta)",
      "proxy": {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Ciri utama serangga adalah memiliki kaki berjumlah ...",
        "Prompt Gambar": "Buatkan gambar semut (memperlihatkan kakinya).",
        "Pilihan Jawaban": [
          {
            "teks": "2 pasang (4 kaki)",
            "prompt gambar": "Buatkan gambar sapi."
          },
          {
            "teks": "3 pasang (6 kaki)",
            "prompt gambar": "Buatkan gambar semut."
          },
          {
            "teks": "4 pasang (8 kaki)",
            "prompt gambar": "Buatkan gambar laba-laba."
          },
          {
            "teks": "Banyak sekali (seribu kaki)",
            "prompt gambar": "Buatkan gambar luwing."
          }
        ],
        "Jawaban": "3 pasang (6 kaki)"
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Unta memiliki punuk di punggungnya. Apa fungsi punuk tersebut?",
      "Prompt Gambar": "Buatkan gambar unta di gurun pasir.",
      "Pilihan Jawaban": [
        {
          "teks": "Untuk hiasan",
          "prompt gambar": "Buatkan gambar hiasan."
        },
        {
          "teks": "Menyimpan air secara langsung",
          "prompt gambar": "Buatkan gambar botol air."
        },
        {
          "teks": "Menyimpan cadangan makanan berupa lemak",
          "prompt gambar": "Buatkan gambar ilustrasi lemak."
        },
        {
          "teks": "Agar terlihat tinggi",
          "prompt gambar": "Buatkan gambar tangga."
        }
      ],
      "Jawaban": "Menyimpan cadangan makanan berupa lemak",
      "proxy": {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan unta hidup di habitat yang panas dan kering, yaitu ...",
        "Prompt Gambar": "Buatkan gambar unta.",
        "Pilihan Jawaban": [
          {
            "teks": "Hutan Hujan",
            "prompt gambar": "Buatkan gambar hutan lebat."
          },
          {
            "teks": "Kutub Es",
            "prompt gambar": "Buatkan gambar es salju."
          },
          {
            "teks": "Gurun Pasir",
            "prompt gambar": "Buatkan gambar gurun pasir."
          },
          {
            "teks": "Laut Dalam",
            "prompt gambar": "Buatkan gambar dasar laut."
          }
        ],
        "Jawaban": "Gurun Pasir"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Apa fungsi utama ekor pada seekor kucing?",
      "Prompt Gambar": "Buatkan gambar kucing sedang berjalan di atas pagar sempit.",
      "Pilihan Jawaban": [
        {
          "teks": "Hanya untuk hiasan",
          "prompt gambar": "Buatkan gambar pita."
        },
        {
          "teks": "Untuk menjaga keseimbangan tubuh",
          "prompt gambar": "Buatkan gambar timbangan seimbang."
        },
        {
          "teks": "Untuk mendengar",
          "prompt gambar": "Buatkan gambar telinga."
        },
        {
          "teks": "Untuk bernapas",
          "prompt gambar": "Buatkan gambar hidung."
        }
      ],
      "Jawaban": "Untuk menjaga keseimbangan tubuh",
      "proxy": {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Selain kucing, hewan apa lagi yang menggunakan ekor untuk keseimbangan saat melompat/memanjat?",
        "Prompt Gambar": "Buatkan gambar pohon.",
        "Pilihan Jawaban": [
          {
            "teks": "Gajah",
            "prompt gambar": "Buatkan gambar gajah."
          },
          {
            "teks": "Monyet",
            "prompt gambar": "Buatkan gambar monyet."
          },
          {
            "teks": "Kura-kura",
            "prompt gambar": "Buatkan gambar kura-kura."
          },
          {
            "teks": "Siput",
            "prompt gambar": "Buatkan gambar siput."
          }
        ],
        "Jawaban": "Monyet"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan ini tidak memiliki kaki, tetapi bisa bergerak cepat di dalam tanah dan menyuburkan tanah. Hewan apakah ini?",
      "Prompt Gambar": "Buatkan gambar tanah gembur.",
      "Pilihan Jawaban": [
        {
          "teks": "Ular",
          "prompt gambar": "Buatkan gambar ular."
        },
        {
          "teks": "Cacing Tanah",
          "prompt gambar": "Buatkan gambar cacing tanah."
        },
        {
          "teks": "Lipan",
          "prompt gambar": "Buatkan gambar lipan (kaki seribu)."
        },
        {
          "teks": "Semut",
          "prompt gambar": "Buatkan gambar semut."
        }
      ],
      "Jawaban": "Cacing Tanah",
      "proxy": {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Cacing tanah termasuk hewan invertebrata karena ...",
        "Prompt Gambar": "Buatkan gambar cacing tanah.",
        "Pilihan Jawaban": [
          {
            "teks": "Memiliki tulang belakang",
            "prompt gambar": "Buatkan gambar tulang."
          },
          {
            "teks": "Tidak memiliki tulang belakang",
            "prompt gambar": "Buatkan gambar tubuh lunak."
          },
          {
            "teks": "Memiliki cangkang keras",
            "prompt gambar": "Buatkan gambar siput."
          },
          {
            "teks": "Memiliki kaki",
            "prompt gambar": "Buatkan gambar kaki."
          }
        ],
        "Jawaban": "Tidak memiliki tulang belakang"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Burung hantu aktif mencari makan pada malam hari. Hewan yang aktif di malam hari disebut hewan ...",
      "Prompt Gambar": "Buatkan gambar burung hantu di malam hari dengan bulan.",
      "Pilihan Jawaban": [
        {
          "teks": "Nokturnal",
          "prompt gambar": "Buatkan gambar bulan dan bintang."
        },
        {
          "teks": "Diurnal",
          "prompt gambar": "Buatkan gambar matahari."
        },
        {
          "teks": "Mamalia",
          "prompt gambar": "Buatkan gambar kucing."
        },
        {
          "teks": "Karnivora",
          "prompt gambar": "Buatkan gambar daging."
        }
      ],
      "Jawaban": "Nokturnal",
      "proxy": {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Selain burung hantu, hewan apa lagi yang termasuk hewan nokturnal (aktif malam hari)?",
        "Prompt Gambar": "Buatkan gambar suasana malam.",
        "Pilihan Jawaban": [
          {
            "teks": "Ayam",
            "prompt gambar": "Buatkan gambar ayam berkokok."
          },
          {
            "teks": "Kelelawar",
            "prompt gambar": "Buatkan gambar kelelawar tidur terbalik."
          },
          {
            "teks": "Kupu-kupu",
            "prompt gambar": "Buatkan gambar kupu-kupu di bunga."
          },
          {
            "teks": "Sapi",
            "prompt gambar": "Buatkan gambar sapi."
          }
        ],
        "Jawaban": "Kelelawar"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Apa fungsi sisik pada tubuh ikan?",
      "Prompt Gambar": "Buatkan gambar sisik ikan dari dekat.",
      "Pilihan Jawaban": [
        {
          "teks": "Untuk terbang",
          "prompt gambar": "Buatkan gambar sayap."
        },
        {
          "teks": "Untuk melindungi tubuhnya",
          "prompt gambar": "Buatkan gambar perisai pelindung."
        },
        {
          "teks": "Untuk makan",
          "prompt gambar": "Buatkan gambar makanan ikan."
        },
        {
          "teks": "Untuk mendengar",
          "prompt gambar": "Buatkan gambar telinga."
        }
      ],
      "Jawaban": "Untuk melindungi tubuhnya",
      "proxy": {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Selain ikan, hewan apa lagi yang tubuhnya ditutupi oleh sisik?",
        "Prompt Gambar": "Buatkan gambar hewan-hewan.",
        "Pilihan Jawaban": [
          {
            "teks": "Kucing",
            "prompt gambar": "Buatkan gambar kucing."
          },
          {
            "teks": "Ular",
            "prompt gambar": "Buatkan gambar ular."
          },
          {
            "teks": "Burung",
            "prompt gambar": "Buatkan gambar burung."
          },
          {
            "teks": "Katak",
            "prompt gambar": "Buatkan gambar katak."
          }
        ],
        "Jawaban": "Ular"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kelinci bergerak dengan cara ...",
      "Prompt Gambar": "Buatkan gambar kelinci sedang bergerak.",
      "Pilihan Jawaban": [
        {
          "teks": "Terbang",
          "prompt gambar": "Buatkan gambar burung."
        },
        {
          "teks": "Berenang",
          "prompt gambar": "Buatkan gambar ikan."
        },
        {
          "teks": "Melompat",
          "prompt gambar": "Buatkan gambar kelinci melompat."
        },
        {
          "teks": "Melata",
          "prompt gambar": "Buatkan gambar ular."
        }
      ],
      "Jawaban": "Melompat",
      "proxy": {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan lain yang bergerak dengan cara melompat seperti kelinci adalah ...",
        "Prompt Gambar": "Buatkan gambar padang rumput.",
        "Pilihan Jawaban": [
          {
            "teks": "Kura-kura",
            "prompt gambar": "Buatkan gambar kura-kura."
          },
          {
            "teks": "Kanguru",
            "prompt gambar": "Buatkan gambar kanguru."
          },
          {
            "teks": "Gajah",
            "prompt gambar": "Buatkan gambar gajah."
          },
          {
            "teks": "Siput",
            "prompt gambar": "Buatkan gambar siput."
          }
        ],
        "Jawaban": "Kanguru"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Bagian tubuh gajah yang berfungsi seperti tangan untuk mengambil makanan adalah ...",
      "Prompt Gambar": "Buatkan gambar gajah mengambil makanan.",
      "Pilihan Jawaban": [
        {
          "teks": "Gading",
          "prompt gambar": "Buatkan gambar gading gajah."
        },
        {
          "teks": "Belalai",
          "prompt gambar": "Buatkan gambar belalai gajah."
        },
        {
          "teks": "Ekor",
          "prompt gambar": "Buatkan gambar ekor gajah."
        },
        {
          "teks": "Telinga",
          "prompt gambar": "Buatkan gambar telinga gajah."
        }
      ],
      "Jawaban": "Belalai",
      "proxy": {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Gading pada gajah sebenarnya adalah ...",
        "Prompt Gambar": "Buatkan gambar gading gajah yang panjang.",
        "Pilihan Jawaban": [
          {
            "teks": "Hidung yang memanjang",
            "prompt gambar": "Buatkan gambar hidung."
          },
          {
            "teks": "Gigi yang memanjang",
            "prompt gambar": "Buatkan gambar gigi."
          },
          {
            "teks": "Tanduk",
            "prompt gambar": "Buatkan gambar tanduk rusa."
          },
          {
            "teks": "Tulang kaki",
            "prompt gambar": "Buatkan gambar tulang kaki."
          }
        ],
        "Jawaban": "Gigi yang memanjang"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Laba-laba memiliki berapa pasang kaki?",
      "Prompt Gambar": "Buatkan gambar laba-laba.",
      "Pilihan Jawaban": [
        {
          "teks": "2 pasang (4 kaki)",
          "prompt gambar": "Buatkan gambar kambing."
        },
        {
          "teks": "3 pasang (6 kaki)",
          "prompt gambar": "Buatkan gambar semut."
        },
        {
          "teks": "4 pasang (8 kaki)",
          "prompt gambar": "Buatkan gambar laba-laba."
        },
        {
          "teks": "5 pasang (10 kaki)",
          "prompt gambar": "Buatkan gambar kepiting."
        }
      ],
      "Jawaban": "4 pasang (8 kaki)",
      "proxy": {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apakah laba-laba termasuk serangga (insekta)?",
        "Prompt Gambar": "Buatkan gambar laba-laba dan semut berdampingan.",
        "Pilihan Jawaban": [
          {
            "teks": "Ya, karena kecil",
            "prompt gambar": "Buatkan simbol centang."
          },
          {
            "teks": "Tidak, karena kakinya ada 8 (Arachnida)",
            "prompt gambar": "Buatkan simbol silang."
          },
          {
            "teks": "Ya, karena punya mata",
            "prompt gambar": "Buatkan gambar mata."
          },
          {
            "teks": "Tidak, karena laba-laba adalah ikan",
            "prompt gambar": "Buatkan gambar ikan."
          }
        ],
        "Jawaban": "Tidak, karena kakinya ada 8 (Arachnida)"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan yang melindungi diri dengan cara memutuskan ekornya (autotomi) adalah ...",
      "Prompt Gambar": "Buatkan gambar cicak di dinding.",
      "Pilihan Jawaban": [
        {
          "teks": "Kucing",
          "prompt gambar": "Buatkan gambar kucing."
        },
        {
          "teks": "Cicak",
          "prompt gambar": "Buatkan gambar cicak tanpa ekor."
        },
        {
          "teks": "Ayam",
          "prompt gambar": "Buatkan gambar ayam."
        },
        {
          "teks": "Ular",
          "prompt gambar": "Buatkan gambar ular."
        }
      ],
      "Jawaban": "Cicak",
      "proxy": {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Bunglon melindungi diri dari musuh dengan cara ...",
        "Prompt Gambar": "Buatkan gambar bunglon berubah warna.",
        "Pilihan Jawaban": [
          {
            "teks": "Memutuskan ekor",
            "prompt gambar": "Buatkan gambar ekor putus."
          },
          {
            "teks": "Mengubah warna kulit (Mimikri)",
            "prompt gambar": "Buatkan gambar bunglon di daun hijau."
          },
          {
            "teks": "Mengeluarkan bau busuk",
            "prompt gambar": "Buatkan gambar walang sangit."
          },
          {
            "teks": "Mengeluarkan tinta",
            "prompt gambar": "Buatkan gambar cumi-cumi."
          }
        ],
        "Jawaban": "Mengubah warna kulit (Mimikri)"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Burung Pipit suka memakan biji-bijian. Bentuk paruhnya adalah ...",
      "Prompt Gambar": "Buatkan gambar burung pipit makan padi.",
      "Pilihan Jawaban": [
        {
          "teks": "Panjang dan besar",
          "prompt gambar": "Buatkan gambar paruh pelikan."
        },
        {
          "teks": "Pendek, tebal, dan runcing",
          "prompt gambar": "Buatkan gambar paruh pipit."
        },
        {
          "teks": "Seperti sendok",
          "prompt gambar": "Buatkan gambar paruh bebek."
        },
        {
          "teks": "Tajam dan melengkung",
          "prompt gambar": "Buatkan gambar paruh elang."
        }
      ],
      "Jawaban": "Pendek, tebal, dan runcing",
      "proxy": {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Burung Pelikan memiliki paruh yang besar dan berkantong. Fungsinya untuk ...",
        "Prompt Gambar": "Buatkan gambar burung pelikan.",
        "Pilihan Jawaban": [
          {
            "teks": "Menangkap serangga",
            "prompt gambar": "Buatkan gambar serangga."
          },
          {
            "teks": "Menangkap dan menyimpan ikan",
            "prompt gambar": "Buatkan gambar ikan dalam paruh pelikan."
          },
          {
            "teks": "Memecah biji",
            "prompt gambar": "Buatkan gambar biji."
          },
          {
            "teks": "Menghisap madu",
            "prompt gambar": "Buatkan gambar bunga."
          }
        ],
        "Jawaban": "Menangkap dan menyimpan ikan"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan apa yang memiliki ciri khas tidur dengan cara menggantung terbalik?",
      "Prompt Gambar": "Buatkan gambar gua yang gelap.",
      "Pilihan Jawaban": [
        {
          "teks": "Burung",
          "prompt gambar": "Buatkan gambar burung di sarang."
        },
        {
          "teks": "Kelelawar",
          "prompt gambar": "Buatkan gambar kelelawar menggantung."
        },
        {
          "teks": "Monyet",
          "prompt gambar": "Buatkan gambar monyet duduk."
        },
        {
          "teks": "Ular",
          "prompt gambar": "Buatkan gambar ular melingkar."
        }
      ],
      "Jawaban": "Kelelawar",
      "proxy": {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kelelawar mencari makan di malam hari dengan menggunakan ...",
        "Prompt Gambar": "Buatkan gambar gelombang suara (sonar).",
        "Pilihan Jawaban": [
          {
            "teks": "Mata yang sangat tajam",
            "prompt gambar": "Buatkan gambar mata elang."
          },
          {
            "teks": "Bunyi pantul (Ekolokasi)",
            "prompt gambar": "Buatkan gambar kelelawar mengeluarkan suara."
          },
          {
            "teks": "Hidung yang panjang",
            "prompt gambar": "Buatkan gambar hidung gajah."
          },
          {
            "teks": "Cahaya tubuh",
            "prompt gambar": "Buatkan gambar kunang-kunang."
          }
        ],
        "Jawaban": "Bunyi pantul (Ekolokasi)"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Semua hewan yang hidup di air bernapas dengan insang.",
      "Prompt Gambar": "Buatkan gambar lumba-lumba dan ikan mas berenang bersama.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Paus adalah hewan air yang bernapas dengan paru-paru.",
        "Prompt Gambar": "Buatkan gambar paus mengambil napas di permukaan air.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Ular adalah contoh hewan vertebrata (bertulang belakang).",
      "Prompt Gambar": "Buatkan gambar kerangka ular.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Cacing tanah memiliki tulang belakang.",
        "Prompt Gambar": "Buatkan gambar cacing tanah.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Sapi adalah hewan karnivora.",
      "Prompt Gambar": "Buatkan gambar sapi makan daging (imajinasi salah).",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Singa adalah hewan karnivora (pemakan daging).",
        "Prompt Gambar": "Buatkan gambar singa makan daging.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Kupu-kupu mengalami metamorfosis sempurna.",
      "Prompt Gambar": "Buatkan gambar siklus hidup kupu-kupu (telur-ulat-kepompong-kupu).",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Belalang mengalami metamorfosis tidak sempurna (tidak ada fase kepompong).",
        "Prompt Gambar": "Buatkan gambar siklus hidup belalang.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Hewan yang berkembang biak dengan cara bertelur disebut Vivipar.",
      "Prompt Gambar": "Buatkan gambar ayam bertelur.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Ovipar adalah cara berkembang biak dengan bertelur.",
        "Prompt Gambar": "Buatkan gambar telur burung menetas.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Tubuh burung ditutupi oleh rambut.",
      "Prompt Gambar": "Buatkan gambar burung.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Tubuh kucing ditutupi oleh rambut/bulu halus (fur), sedangkan burung oleh bulu pelepah (feather).",
        "Prompt Gambar": "Buatkan gambar perbandingan bulu kucing dan bulu burung.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Katak dewasa bernapas menggunakan paru-paru dan kulit.",
      "Prompt Gambar": "Buatkan gambar katak.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Berudu (anak katak) bernapas menggunakan paru-paru.",
        "Prompt Gambar": "Buatkan gambar berudu di air.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Laba-laba adalah jenis serangga.",
      "Prompt Gambar": "Buatkan gambar laba-laba.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Laba-laba memiliki 8 kaki, sedangkan serangga memiliki 6 kaki.",
        "Prompt Gambar": "Buatkan gambar perbandingan semut dan laba-laba.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Ikan Hiu adalah hewan pemakan daging (Karnivora).",
      "Prompt Gambar": "Buatkan gambar Hiu makan ikan kecil.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Kambing adalah hewan Herbivora.",
        "Prompt Gambar": "Buatkan gambar Kambing makan rumput.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Siput bergerak sangat cepat.",
      "Prompt Gambar": "Buatkan gambar siput balapan dengan kura-kura.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Cheetah adalah hewan darat yang larinya sangat cepat.",
        "Prompt Gambar": "Buatkan gambar cheetah berlari.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan 3 contoh hewan yang termasuk Vertebrata (bertulang belakang)!",
      "Prompt Gambar": "Buatkan gambar kelompok hewan vertebrata.",
      "Jawaban": "Sapi, Kucing, Ayam, Ikan, Burung, Katak, Ular (pilih 3)",
      "proxy": {
        "Nomor": 41,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 3 contoh hewan yang termasuk Invertebrata (tidak bertulang belakang)!",
        "Prompt Gambar": "Buatkan gambar kelompok hewan invertebrata.",
        "Jawaban": "Cacing, Siput, Ubur-ubur, Laba-laba, Kupu-kupu, Semut"
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Esai",
      "Pertanyaan": "Mengapa bebek memiliki selaput pada kakinya? Jelaskan!",
      "Prompt Gambar": "Buatkan gambar kaki bebek.",
      "Jawaban": "Untuk membantunya berenang di air dan agar tidak terperosok saat berjalan di tanah berlumpur.",
      "proxy": {
        "Nomor": 42,
        "Jenis": "Esai",
        "Pertanyaan": "Mengapa ayam memiliki kaki dengan cakar yang kuat?",
        "Prompt Gambar": "Buatkan gambar kaki ayam.",
        "Jawaban": "Untuk mengais tanah mencari makanan (seperti cacing atau biji) dan untuk melindungi diri."
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Esai",
      "Pertanyaan": "Apa bedanya hewan Herbivora dan Karnivora? Jelaskan dan beri contoh!",
      "Prompt Gambar": "Buatkan gambar Sapi dan Singa.",
      "Jawaban": "Herbivora adalah pemakan tumbuhan (contoh: Sapi). Karnivora adalah pemakan daging (contoh: Singa).",
      "proxy": {
        "Nomor": 43,
        "Jenis": "Esai",
        "Pertanyaan": "Apa yang dimaksud dengan hewan Omnivora? Beri contoh!",
        "Prompt Gambar": "Buatkan gambar Ayam.",
        "Jawaban": "Omnivora adalah hewan pemakan segala (tumbuhan dan daging). Contohnya: Ayam, Tikus, Beruang."
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan 2 hewan yang bergerak dengan cara terbang!",
      "Prompt Gambar": "Buatkan gambar langit biru.",
      "Jawaban": "Burung, Kupu-kupu, Nyamuk, Lalat, Kelelawar (pilih 2)",
      "proxy": {
        "Nomor": 44,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 2 hewan yang bergerak dengan cara berenang!",
        "Prompt Gambar": "Buatkan gambar laut.",
        "Jawaban": "Ikan, Paus, Lumba-lumba, Penyu"
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Esai",
      "Pertanyaan": "Apa fungsi insang pada ikan?",
      "Prompt Gambar": "Buatkan gambar ikan.",
      "Jawaban": "Sebagai alat pernapasan untuk mengambil oksigen di dalam air.",
      "proxy": {
        "Nomor": 45,
        "Jenis": "Esai",
        "Pertanyaan": "Apa fungsi paru-paru pada sapi?",
        "Prompt Gambar": "Buatkan gambar sapi.",
        "Jawaban": "Sebagai alat pernapasan untuk mengambil oksigen dari udara."
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Esai",
      "Pertanyaan": "Jelaskan ciri-ciri fisik burung Elang yang membantunya berburu mangsa!",
      "Prompt Gambar": "Buatkan gambar burung elang.",
      "Jawaban": "Memiliki paruh yang tajam dan melengkung, kuku/cakar yang tajam dan kuat, serta penglihatan yang sangat tajam.",
      "proxy": {
        "Nomor": 46,
        "Jenis": "Esai",
        "Pertanyaan": "Jelaskan ciri-ciri fisik Bangau yang membantunya mencari ikan di rawa!",
        "Prompt Gambar": "Buatkan gambar burung bangau.",
        "Jawaban": "Memiliki paruh yang panjang dan kaki yang panjang."
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan 3 bagian tubuh utama pada serangga (seperti semut atau lebah)!",
      "Prompt Gambar": "Buatkan gambar anatomi semut.",
      "Jawaban": "Kepala, Dada (Thorax), dan Perut (Abdomen).",
      "proxy": {
        "Nomor": 47,
        "Jenis": "Esai",
        "Pertanyaan": "Berapa jumlah kaki yang dimiliki oleh serangga?",
        "Prompt Gambar": "Buatkan gambar belalang.",
        "Jawaban": "6 kaki atau 3 pasang kaki."
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang dimaksud dengan hewan Amfibi? Berikan contohnya!",
      "Prompt Gambar": "Buatkan gambar kolam dan daratan.",
      "Jawaban": "Hewan yang dapat hidup di dua alam (air dan darat). Contohnya: Katak, Salamander.",
      "proxy": {
        "Nomor": 48,
        "Jenis": "Esai",
        "Pertanyaan": "Dimanakah katak biasanya meletakkan telurnya?",
        "Prompt Gambar": "Buatkan gambar telur katak.",
        "Jawaban": "Di dalam air."
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Esai",
      "Pertanyaan": "Apa kegunaan cangkang keras pada kura-kura atau siput?",
      "Prompt Gambar": "Buatkan gambar kura-kura menyembunyikan kepala.",
      "Jawaban": "Untuk melindungi tubuhnya yang lunak dari bahaya atau musuh.",
      "proxy": {
        "Nomor": 49,
        "Jenis": "Esai",
        "Pertanyaan": "Apa kegunaan duri pada landak?",
        "Prompt Gambar": "Buatkan gambar landak.",
        "Jawaban": "Untuk melindungi diri dari serangan musuh."
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan perbedaan penutup tubuh antara Ikan dan Kucing!",
      "Prompt Gambar": "Buatkan gambar Ikan dan Kucing.",
      "Jawaban": "Tubuh ikan ditutupi oleh sisik yang licin, sedangkan tubuh kucing ditutupi oleh rambut/bulu halus.",
      "proxy": {
        "Nomor": 50,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan perbedaan alat gerak antara Burung dan Ular!",
        "Prompt Gambar": "Buatkan gambar Burung dan Ular.",
        "Jawaban": "Burung bergerak menggunakan sayap (terbang) dan kaki, sedangkan ular bergerak menggunakan otot perut (melata)."
      }
    }
  ]
},
  {
  "Bab": "2 - Ayo, Mengenal Siklus pada Makhluk Hidup",
  "Total_Soal": 50,
  "Daftar_Soal": [
    {
      "Nomor": 1,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Salah satu ciri makhluk hidup adalah dapat memiliki keturunan. Kemampuan ini disebut ...",
      "Prompt Gambar": "Buatkan gambar induk ayam dengan anak-anaknya.",
      "Pilihan Jawaban": [
        { "teks": "Bernapas", "prompt gambar": "Buatkan gambar orang bernapas." },
        { "teks": "Bergerak", "prompt gambar": "Buatkan gambar orang berlari." },
        { "teks": "Berkembang biak", "prompt gambar": "Buatkan gambar kucing menyusui anaknya." },
        { "teks": "Tumbuh", "prompt gambar": "Buatkan gambar tanaman tumbuh tinggi." }
      ],
      "Jawaban": "Berkembang biak",
      "proxy": {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Agar jenisnya tidak punah dan tetap ada di bumi, makhluk hidup harus ...",
        "Prompt Gambar": "Buatkan gambar keluarga hewan yang bahagia.",
        "Pilihan Jawaban": [
          { "teks": "Tidur", "prompt gambar": "Buatkan gambar beruang tidur." },
          { "teks": "Berkembang biak", "prompt gambar": "Buatkan gambar tanaman tunas baru." },
          { "teks": "Makan", "prompt gambar": "Buatkan gambar sapi makan rumput." },
          { "teks": "Bermain", "prompt gambar": "Buatkan gambar anak kucing bermain." }
        ],
        "Jawaban": "Berkembang biak"
      }
    },
    {
      "Nomor": 2,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Manusia mengalami pertumbuhan. Tahap pertama kehidupan manusia setelah lahir disebut ...",
      "Prompt Gambar": "Buatkan gambar bayi yang lucu.",
      "Pilihan Jawaban": [
        { "teks": "Remaja", "prompt gambar": "Buatkan gambar anak SMP." },
        { "teks": "Dewasa", "prompt gambar": "Buatkan gambar orang bekerja." },
        { "teks": "Bayi / Balita", "prompt gambar": "Buatkan gambar bayi merangkak." },
        { "teks": "Lansia", "prompt gambar": "Buatkan gambar kakek nenek." }
      ],
      "Jawaban": "Bayi / Balita",
      "proxy": {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Urutan siklus hidup manusia yang benar adalah ...",
        "Prompt Gambar": "Buatkan ilustrasi tahapan pertumbuhan manusia.",
        "Pilihan Jawaban": [
          { "teks": "Bayi -> Remaja -> Anak-anak -> Dewasa", "prompt gambar": "Buatkan diagram alur yang salah." },
          { "teks": "Anak-anak -> Bayi -> Dewasa -> Lansia", "prompt gambar": "Buatkan diagram alur yang salah." },
          { "teks": "Bayi -> Anak-anak -> Remaja -> Dewasa -> Lansia", "prompt gambar": "Buatkan diagram alur pertumbuhan manusia yang benar." },
          { "teks": "Dewasa -> Bayi -> Remaja -> Anak-anak", "prompt gambar": "Buatkan diagram alur yang salah." }
        ],
        "Jawaban": "Bayi -> Anak-anak -> Remaja -> Dewasa -> Lansia"
      }
    },
    {
      "Nomor": 3,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Pada masa ini, manusia mulai mengalami masa pubertas (perubahan fisik). Masa ini disebut ...",
      "Prompt Gambar": "Buatkan gambar anak remaja SMP.",
      "Pilihan Jawaban": [
        { "teks": "Balita", "prompt gambar": "Buatkan gambar balita." },
        { "teks": "Kanak-kanak", "prompt gambar": "Buatkan gambar anak SD bermain." },
        { "teks": "Remaja", "prompt gambar": "Buatkan gambar sekelompok remaja." },
        { "teks": "Lansia", "prompt gambar": "Buatkan gambar orang tua." }
      ],
      "Jawaban": "Remaja",
      "proxy": {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Tahap pertumbuhan manusia di mana tubuh sudah tidak bertambah tinggi lagi disebut tahap ...",
        "Prompt Gambar": "Buatkan gambar orang dewasa bekerja.",
        "Pilihan Jawaban": [
          { "teks": "Balita", "prompt gambar": "Buatkan gambar balita." },
          { "teks": "Remaja", "prompt gambar": "Buatkan gambar remaja." },
          { "teks": "Dewasa", "prompt gambar": "Buatkan gambar pria dan wanita dewasa." },
          { "teks": "Anak-anak", "prompt gambar": "Buatkan gambar anak-anak." }
        ],
        "Jawaban": "Dewasa"
      }
    },
    {
      "Nomor": 4,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kucing adalah hewan yang tidak mengalami metamorfosis. Artinya ...",
      "Prompt Gambar": "Buatkan gambar anak kucing dan induk kucing.",
      "Pilihan Jawaban": [
        { "teks": "Bentuk tubuh anak kucing berbeda jauh dengan induknya", "prompt gambar": "Buatkan gambar ulat dan kupu-kupu." },
        { "teks": "Bentuk tubuh anak kucing sama dengan induknya, hanya beda ukuran", "prompt gambar": "Buatkan gambar kucing kecil dan besar yang mirip." },
        { "teks": "Kucing bertelur", "prompt gambar": "Buatkan gambar telur." },
        { "teks": "Kucing bisa terbang", "prompt gambar": "Buatkan gambar kucing bersayap." }
      ],
      "Jawaban": "Bentuk tubuh anak kucing sama dengan induknya, hanya beda ukuran",
      "proxy": {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan manakah di bawah ini yang siklus hidupnya TANPA mengalami perubahan bentuk (metamorfosis)?",
        "Prompt Gambar": "Buatkan gambar Kambing, Kupu-kupu, Katak, Nyamuk.",
        "Pilihan Jawaban": [
          { "teks": "Kupu-kupu", "prompt gambar": "Buatkan gambar kupu-kupu." },
          { "teks": "Kambing", "prompt gambar": "Buatkan gambar kambing." },
          { "teks": "Katak", "prompt gambar": "Buatkan gambar katak." },
          { "teks": "Nyamuk", "prompt gambar": "Buatkan gambar nyamuk." }
        ],
        "Jawaban": "Kambing"
      }
    },
    {
      "Nomor": 5,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Siklus hidup ayam dimulai dari ...",
      "Prompt Gambar": "Buatkan gambar telur ayam.",
      "Pilihan Jawaban": [
        { "teks": "Melahirkan", "prompt gambar": "Buatkan gambar kucing melahirkan." },
        { "teks": "Telur", "prompt gambar": "Buatkan gambar telur ayam." },
        { "teks": "Kepompong", "prompt gambar": "Buatkan gambar kepompong." },
        { "teks": "Jentik", "prompt gambar": "Buatkan gambar jentik nyamuk." }
      ],
      "Jawaban": "Telur",
      "proxy": {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Setelah telur ayam menetas, keluarlah ...",
        "Prompt Gambar": "Buatkan gambar cangkang telur pecah.",
        "Pilihan Jawaban": [
          { "teks": "Ulat", "prompt gambar": "Buatkan gambar ulat." },
          { "teks": "Anak ayam", "prompt gambar": "Buatkan gambar anak ayam yang lucu." },
          { "teks": "Ayam dewasa", "prompt gambar": "Buatkan gambar ayam jago." },
          { "teks": "Kecebong", "prompt gambar": "Buatkan gambar kecebong." }
        ],
        "Jawaban": "Anak ayam"
      }
    },
    {
      "Nomor": 6,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan yang berkembang biak dengan cara melahirkan disebut ...",
      "Prompt Gambar": "Buatkan gambar sapi dan anaknya.",
      "Pilihan Jawaban": [
        { "teks": "Ovipar", "prompt gambar": "Buatkan gambar telur." },
        { "teks": "Vivipar", "prompt gambar": "Buatkan gambar hewan menyusui." },
        { "teks": "Ovovivipar", "prompt gambar": "Buatkan gambar kadal." },
        { "teks": "Herbivora", "prompt gambar": "Buatkan gambar rumput." }
      ],
      "Jawaban": "Vivipar",
      "proxy": {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Salah satu ciri hewan Vivipar (melahirkan) adalah ...",
        "Prompt Gambar": "Buatkan gambar kelinci.",
        "Pilihan Jawaban": [
          { "teks": "Tidak punya daun telinga", "prompt gambar": "Buatkan gambar kepala ular." },
          { "teks": "Memiliki daun telinga dan menyusui", "prompt gambar": "Buatkan gambar kelinci menyusui." },
          { "teks": "Tubuhnya penuh bulu (seperti burung)", "prompt gambar": "Buatkan gambar burung." },
          { "teks": "Mengerami telur", "prompt gambar": "Buatkan gambar ayam mengerami telur." }
        ],
        "Jawaban": "Memiliki daun telinga dan menyusui"
      }
    },
    {
      "Nomor": 7,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan yang berkembang biak dengan cara bertelur disebut ...",
      "Prompt Gambar": "Buatkan gambar burung di sarang dengan telur.",
      "Pilihan Jawaban": [
        { "teks": "Vivipar", "prompt gambar": "Buatkan gambar kucing." },
        { "teks": "Ovipar", "prompt gambar": "Buatkan gambar telur pecah." },
        { "teks": "Ovovivipar", "prompt gambar": "Buatkan gambar hiu." },
        { "teks": "Karnivora", "prompt gambar": "Buatkan gambar daging." }
      ],
      "Jawaban": "Ovipar",
      "proxy": {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Manakah hewan di bawah ini yang termasuk Ovipar?",
        "Prompt Gambar": "Buatkan gambar Kuda, Kambing, Bebek, Sapi.",
        "Pilihan Jawaban": [
          { "teks": "Kuda", "prompt gambar": "Buatkan gambar kuda." },
          { "teks": "Kambing", "prompt gambar": "Buatkan gambar kambing." },
          { "teks": "Sapi", "prompt gambar": "Buatkan gambar sapi." },
          { "teks": "Bebek", "prompt gambar": "Buatkan gambar bebek." }
        ],
        "Jawaban": "Bebek"
      }
    },
    {
      "Nomor": 8,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan Ovovivipar berkembang biak dengan cara ...",
      "Prompt Gambar": "Buatkan gambar ikan hiu atau bunglon.",
      "Pilihan Jawaban": [
        { "teks": "Bertelur saja", "prompt gambar": "Buatkan gambar telur." },
        { "teks": "Melahirkan saja", "prompt gambar": "Buatkan gambar bayi hewan." },
        { "teks": "Bertelur dan Melahirkan", "prompt gambar": "Buatkan gambar telur menetas di dalam perut." },
        { "teks": "Membelah diri", "prompt gambar": "Buatkan gambar amoeba." }
      ],
      "Jawaban": "Bertelur dan Melahirkan",
      "proxy": {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Contoh hewan yang berkembang biak dengan cara Ovovivipar adalah ...",
        "Prompt Gambar": "Buatkan gambar laut.",
        "Pilihan Jawaban": [
          { "teks": "Ayam", "prompt gambar": "Buatkan gambar ayam." },
          { "teks": "Kucing", "prompt gambar": "Buatkan gambar kucing." },
          { "teks": "Ikan Hiu", "prompt gambar": "Buatkan gambar ikan hiu." },
          { "teks": "Sapi", "prompt gambar": "Buatkan gambar sapi." }
        ],
        "Jawaban": "Ikan Hiu"
      }
    },
    {
      "Nomor": 9,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Siklus hidup tumbuhan mangga dimulai dari ...",
      "Prompt Gambar": "Buatkan gambar buah mangga yang dibelah terlihat bijinya.",
      "Pilihan Jawaban": [
        { "teks": "Bunga", "prompt gambar": "Buatkan gambar bunga mangga." },
        { "teks": "Batang", "prompt gambar": "Buatkan gambar batang kayu." },
        { "teks": "Biji", "prompt gambar": "Buatkan gambar biji mangga." },
        { "teks": "Daun", "prompt gambar": "Buatkan gambar daun mangga." }
      ],
      "Jawaban": "Biji",
      "proxy": {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Setelah biji ditanam, akan tumbuh akar dan ...",
        "Prompt Gambar": "Buatkan gambar proses perkecambahan biji.",
        "Pilihan Jawaban": [
          { "teks": "Buah langsung", "prompt gambar": "Buatkan gambar buah di tanah." },
          { "teks": "Tunas", "prompt gambar": "Buatkan gambar tunas kecil muncul dari tanah." },
          { "teks": "Bunga", "prompt gambar": "Buatkan gambar bunga di tanah." },
          { "teks": "Pohon besar", "prompt gambar": "Buatkan gambar pohon besar instan." }
        ],
        "Jawaban": "Tunas"
      }
    },
    {
      "Nomor": 10,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Perubahan bentuk tubuh hewan secara bertahap dari telur hingga dewasa disebut ...",
      "Prompt Gambar": "Buatkan gambar siklus kupu-kupu.",
      "Pilihan Jawaban": [
        { "teks": "Fotosintesis", "prompt gambar": "Buatkan gambar tumbuhan terkena matahari." },
        { "teks": "Metamorfosis", "prompt gambar": "Buatkan diagram perubahan bentuk hewan." },
        { "teks": "Simiosis", "prompt gambar": "Buatkan gambar lebah dan bunga." },
        { "teks": "Adaptasi", "prompt gambar": "Buatkan gambar bunglon berubah warna." }
      ],
      "Jawaban": "Metamorfosis",
      "proxy": {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Ada dua jenis metamorfosis, yaitu ...",
        "Prompt Gambar": "Buatkan gambar perbandingan siklus kupu-kupu dan belalang.",
        "Pilihan Jawaban": [
          { "teks": "Sempurna dan Tidak Sempurna", "prompt gambar": "Buatkan diagram dua siklus berbeda." },
          { "teks": "Besar dan Kecil", "prompt gambar": "Buatkan gambar hewan besar dan kecil." },
          { "teks": "Cepat dan Lambat", "prompt gambar": "Buatkan gambar jam." },
          { "teks": "Darat dan Laut", "prompt gambar": "Buatkan gambar darat dan laut." }
        ],
        "Jawaban": "Sempurna dan Tidak Sempurna"
      }
    },
    {
      "Nomor": 11,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Metamorfosis sempurna memiliki 4 tahapan. Salah satu ciri khasnya adalah adanya tahap ...",
      "Prompt Gambar": "Buatkan gambar kepompong menggantung di ranting.",
      "Pilihan Jawaban": [
        { "teks": "Nimfa (Hewan muda)", "prompt gambar": "Buatkan gambar belalang kecil." },
        { "teks": "Pupa (Kepompong)", "prompt gambar": "Buatkan gambar kepompong." },
        { "teks": "Melahirkan", "prompt gambar": "Buatkan gambar kucing melahirkan." },
        { "teks": "Menyusui", "prompt gambar": "Buatkan gambar sapi menyusui." }
      ],
      "Jawaban": "Pupa (Kepompong)",
      "proxy": {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan manakah di bawah ini yang mengalami metamorfosis sempurna (ada kepompongnya)?",
        "Prompt Gambar": "Buatkan gambar Kupu-kupu, Belalang, Kecoak, Jangkrik.",
        "Pilihan Jawaban": [
          { "teks": "Belalang", "prompt gambar": "Buatkan gambar belalang." },
          { "teks": "Kupu-kupu", "prompt gambar": "Buatkan gambar kupu-kupu." },
          { "teks": "Kecoak", "prompt gambar": "Buatkan gambar kecoak." },
          { "teks": "Jangkrik", "prompt gambar": "Buatkan gambar jangkrik." }
        ],
        "Jawaban": "Kupu-kupu"
      }
    },
    {
      "Nomor": 12,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Urutan metamorfosis kupu-kupu yang benar adalah ...",
      "Prompt Gambar": "Buatkan diagram siklus kupu-kupu yang acak.",
      "Pilihan Jawaban": [
        { "teks": "Telur -> Kepompong -> Ulat -> Kupu-kupu", "prompt gambar": "Buatkan urutan salah." },
        { "teks": "Telur -> Ulat -> Kepompong -> Kupu-kupu", "prompt gambar": "Buatkan urutan benar: Telur, Ulat, Kepompong, Kupu-kupu." },
        { "teks": "Kupu-kupu -> Kepompong -> Ulat -> Telur", "prompt gambar": "Buatkan urutan terbalik." },
        { "teks": "Ulat -> Telur -> Kupu-kupu -> Kepompong", "prompt gambar": "Buatkan urutan acak." }
      ],
      "Jawaban": "Telur -> Ulat -> Kepompong -> Kupu-kupu",
      "proxy": {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Tahapan ulat pada kupu-kupu disebut juga dengan ...",
        "Prompt Gambar": "Buatkan gambar ulat makan daun.",
        "Pilihan Jawaban": [
          { "teks": "Pupa", "prompt gambar": "Buatkan gambar kepompong." },
          { "teks": "Larva", "prompt gambar": "Buatkan gambar larva/ulat." },
          { "teks": "Imago", "prompt gambar": "Buatkan gambar kupu-kupu dewasa." },
          { "teks": "Nimfa", "prompt gambar": "Buatkan gambar belalang kecil." }
        ],
        "Jawaban": "Larva"
      }
    },
    {
      "Nomor": 13,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Nyamuk juga mengalami metamorfosis sempurna. Tahapan nyamuk yang hidup di air dan sering bergerak-gerak disebut ...",
      "Prompt Gambar": "Buatkan gambar jentik-jentik nyamuk di air.",
      "Pilihan Jawaban": [
        { "teks": "Ulat", "prompt gambar": "Buatkan gambar ulat." },
        { "teks": "Jentik-jentik (Larva)", "prompt gambar": "Buatkan gambar jentik nyamuk." },
        { "teks": "Kecebong", "prompt gambar": "Buatkan gambar kecebong." },
        { "teks": "Nimfa", "prompt gambar": "Buatkan gambar serangga kecil." }
      ],
      "Jawaban": "Jentik-jentik (Larva)",
      "proxy": {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Tahapan nyamuk yang berbahaya karena bisa menularkan penyakit demam berdarah adalah saat menjadi ...",
        "Prompt Gambar": "Buatkan gambar nyamuk dewasa.",
        "Pilihan Jawaban": [
          { "teks": "Telur", "prompt gambar": "Buatkan gambar telur nyamuk di air." },
          { "teks": "Jentik", "prompt gambar": "Buatkan gambar jentik." },
          { "teks": "Pupa", "prompt gambar": "Buatkan gambar pupa nyamuk." },
          { "teks": "Nyamuk Dewasa", "prompt gambar": "Buatkan gambar nyamuk menggigit." }
        ],
        "Jawaban": "Nyamuk Dewasa"
      }
    },
    {
      "Nomor": 14,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Katak mengalami metamorfosis sempurna. Anak katak yang hidup di air dan berekor disebut ...",
      "Prompt Gambar": "Buatkan gambar kecebong berenang.",
      "Pilihan Jawaban": [
        { "teks": "Ulat", "prompt gambar": "Buatkan gambar ulat." },
        { "teks": "Kecebong (Berudu)", "prompt gambar": "Buatkan gambar kecebong." },
        { "teks": "Nimfa", "prompt gambar": "Buatkan gambar nimfa." },
        { "teks": "Pupa", "prompt gambar": "Buatkan gambar kepompong." }
      ],
      "Jawaban": "Kecebong (Berudu)",
      "proxy": {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Perbedaan katak muda dan katak dewasa adalah ...",
        "Prompt Gambar": "Buatkan gambar katak muda berekor dan katak dewasa tanpa ekor.",
        "Pilihan Jawaban": [
          { "teks": "Katak dewasa punya ekor, katak muda tidak", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Katak muda punya ekor, katak dewasa tidak", "prompt gambar": "Buatkan gambar benar." },
          { "teks": "Katak muda punya sayap", "prompt gambar": "Buatkan gambar katak bersayap." },
          { "teks": "Katak dewasa tidak punya kaki", "prompt gambar": "Buatkan gambar salah." }
        ],
        "Jawaban": "Katak muda punya ekor, katak dewasa tidak"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Metamorfosis Tidak Sempurna tidak mengalami masa kepompong. Tahapan hewan muda yang mirip induknya disebut ...",
      "Prompt Gambar": "Buatkan gambar belalang kecil (nimfa) dan dewasa.",
      "Pilihan Jawaban": [
        { "teks": "Larva", "prompt gambar": "Buatkan gambar ulat." },
        { "teks": "Pupa", "prompt gambar": "Buatkan gambar kepompong." },
        { "teks": "Nimfa", "prompt gambar": "Buatkan gambar belalang kecil." },
        { "teks": "Janin", "prompt gambar": "Buatkan gambar janin." }
      ],
      "Jawaban": "Nimfa",
      "proxy": {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Contoh hewan yang mengalami metamorfosis TIDAK sempurna adalah ...",
        "Prompt Gambar": "Buatkan gambar Belalang, Kupu-kupu, Nyamuk, Katak.",
        "Pilihan Jawaban": [
          { "teks": "Kupu-kupu", "prompt gambar": "Buatkan gambar kupu-kupu." },
          { "teks": "Belalang", "prompt gambar": "Buatkan gambar belalang." },
          { "teks": "Nyamuk", "prompt gambar": "Buatkan gambar nyamuk." },
          { "teks": "Katak", "prompt gambar": "Buatkan gambar katak." }
        ],
        "Jawaban": "Belalang"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Siklus hidup belalang adalah: Telur -> ... -> Belalang Dewasa",
      "Prompt Gambar": "Buatkan diagram siklus belalang dengan bagian tengah kosong.",
      "Pilihan Jawaban": [
        { "teks": "Ulat", "prompt gambar": "Buatkan gambar ulat." },
        { "teks": "Kepompong", "prompt gambar": "Buatkan gambar kepompong." },
        { "teks": "Nimfa", "prompt gambar": "Buatkan gambar nimfa belalang." },
        { "teks": "Jentik", "prompt gambar": "Buatkan gambar jentik." }
      ],
      "Jawaban": "Nimfa",
      "proxy": {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apa bedanya nimfa belalang dengan belalang dewasa?",
        "Prompt Gambar": "Buatkan gambar perbandingan nimfa dan belalang dewasa.",
        "Pilihan Jawaban": [
          { "teks": "Nimfa tidak punya kaki", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Nimfa belum memiliki sayap yang sempurna", "prompt gambar": "Buatkan gambar nimfa tanpa sayap." },
          { "teks": "Nimfa hidup di air", "prompt gambar": "Buatkan gambar belalang di air." },
          { "teks": "Belalang dewasa tidak punya kepala", "prompt gambar": "Buatkan gambar salah." }
        ],
        "Jawaban": "Nimfa belum memiliki sayap yang sempurna"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kecoak adalah hewan yang sering kita jumpai. Kecoak berkembang biak dengan cara ...",
      "Prompt Gambar": "Buatkan gambar kecoak dan telurnya.",
      "Pilihan Jawaban": [
        { "teks": "Melahirkan", "prompt gambar": "Buatkan gambar hewan melahirkan." },
        { "teks": "Bertelur", "prompt gambar": "Buatkan gambar kapsul telur kecoak." },
        { "teks": "Membelah diri", "prompt gambar": "Buatkan gambar amoeba." },
        { "teks": "Bertunas", "prompt gambar": "Buatkan gambar pohon pisang." }
      ],
      "Jawaban": "Bertelur",
      "proxy": {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apakah kecoak mengalami fase kepompong?",
        "Prompt Gambar": "Buatkan gambar siklus kecoak.",
        "Pilihan Jawaban": [
          { "teks": "Ya, kecoak punya kepompong", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Tidak, kecoak mengalami metamorfosis tidak sempurna", "prompt gambar": "Buatkan gambar nimfa kecoak." },
          { "teks": "Ya, saat menjadi ulat", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Tidak, kecoak tidak bertelur", "prompt gambar": "Buatkan gambar salah." }
        ],
        "Jawaban": "Tidak, kecoak mengalami metamorfosis tidak sempurna"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Fase metamorfosis kupu-kupu yang sering merugikan petani karena memakan daun adalah ...",
      "Prompt Gambar": "Buatkan gambar ulat memakan daun tanaman sampai habis.",
      "Pilihan Jawaban": [
        { "teks": "Telur", "prompt gambar": "Buatkan gambar telur di daun." },
        { "teks": "Ulat (Larva)", "prompt gambar": "Buatkan gambar ulat." },
        { "teks": "Kepompong", "prompt gambar": "Buatkan gambar kepompong diam." },
        { "teks": "Kupu-kupu", "prompt gambar": "Buatkan gambar kupu-kupu menghisap madu." }
      ],
      "Jawaban": "Ulat (Larva)",
      "proxy": {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Sebaliknya, fase kupu-kupu dewasa menguntungkan bagi tumbuhan karena ...",
        "Prompt Gambar": "Buatkan gambar kupu-kupu hinggap di bunga.",
        "Pilihan Jawaban": [
          { "teks": "Memakan hama", "prompt gambar": "Buatkan gambar burung makan ulat." },
          { "teks": "Membantu penyerbukan bunga", "prompt gambar": "Buatkan gambar serbuk sari menempel di kaki kupu-kupu." },
          { "teks": "Memberikan pupuk", "prompt gambar": "Buatkan gambar pupuk." },
          { "teks": "Menjaga kebun", "prompt gambar": "Buatkan gambar anjing penjaga." }
        ],
        "Jawaban": "Membantu penyerbukan bunga"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Lebah menghasilkan sesuatu yang manis dan sehat untuk manusia. Apa itu?",
      "Prompt Gambar": "Buatkan gambar lebah di sarangnya.",
      "Pilihan Jawaban": [
        { "teks": "Susu", "prompt gambar": "Buatkan gambar susu." },
        { "teks": "Madu", "prompt gambar": "Buatkan gambar toples madu." },
        { "teks": "Telur", "prompt gambar": "Buatkan gambar telur." },
        { "teks": "Daging", "prompt gambar": "Buatkan gambar daging." }
      ],
      "Jawaban": "Madu",
      "proxy": {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Lebah termasuk hewan yang mengalami metamorfosis ...",
        "Prompt Gambar": "Buatkan diagram siklus lebah (Telur-Larva-Pupa-Imago).",
        "Pilihan Jawaban": [
          { "teks": "Sempurna", "prompt gambar": "Buatkan simbol jempol." },
          { "teks": "Tidak Sempurna", "prompt gambar": "Buatkan simbol silang." },
          { "teks": "Setengah", "prompt gambar": "Buatkan simbol setengah lingkaran." },
          { "teks": "Tidak mengalami metamorfosis", "prompt gambar": "Buatkan gambar kucing." }
        ],
        "Jawaban": "Sempurna"
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Capung biasanya meletakkan telurnya di ...",
      "Prompt Gambar": "Buatkan gambar capung di atas air.",
      "Pilihan Jawaban": [
        { "teks": "Dalam tanah", "prompt gambar": "Buatkan gambar tanah." },
        { "teks": "Air (sungai/danau)", "prompt gambar": "Buatkan gambar air sungai." },
        { "teks": "Sarang burung", "prompt gambar": "Buatkan gambar sarang burung." },
        { "teks": "Pasir gurun", "prompt gambar": "Buatkan gambar gurun." }
      ],
      "Jawaban": "Air (sungai/danau)",
      "proxy": {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Anak capung yang hidup di air disebut ...",
        "Prompt Gambar": "Buatkan gambar nimfa capung di dalam air.",
        "Pilihan Jawaban": [
          { "teks": "Ulat", "prompt gambar": "Buatkan gambar ulat." },
          { "teks": "Nimfa", "prompt gambar": "Buatkan gambar nimfa capung." },
          { "teks": "Kecebong", "prompt gambar": "Buatkan gambar kecebong." },
          { "teks": "Jentik", "prompt gambar": "Buatkan gambar jentik." }
        ],
        "Jawaban": "Nimfa"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kepik (Ladybug) adalah serangga kecil yang cantik. Kepik mengalami metamorfosis ...",
      "Prompt Gambar": "Buatkan gambar kepik merah berbintik hitam.",
      "Pilihan Jawaban": [
        { "teks": "Sempurna (Ada kepompong)", "prompt gambar": "Buatkan gambar kepompong kepik." },
        { "teks": "Tidak Sempurna (Tidak ada kepompong)", "prompt gambar": "Buatkan gambar nimfa kepik." },
        { "teks": "Melahirkan", "prompt gambar": "Buatkan gambar kepik melahirkan." },
        { "teks": "Bertunas", "prompt gambar": "Buatkan gambar tanaman." }
      ],
      "Jawaban": "Sempurna (Ada kepompong)",
      "proxy": {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Di mana biasanya kepik meletakkan telurnya?",
        "Prompt Gambar": "Buatkan gambar daun.",
        "Pilihan Jawaban": [
          { "teks": "Di dalam air", "prompt gambar": "Buatkan gambar air." },
          { "teks": "Di balik daun", "prompt gambar": "Buatkan gambar telur kuning di balik daun." },
          { "teks": "Di dalam tanah", "prompt gambar": "Buatkan gambar tanah." },
          { "teks": "Di rambut manusia", "prompt gambar": "Buatkan gambar rambut." }
        ],
        "Jawaban": "Di balik daun"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Jangkrik adalah serangga yang suka berbunyi 'krik krik'. Jangkrik mengalami metamorfosis ...",
      "Prompt Gambar": "Buatkan gambar jangkrik.",
      "Pilihan Jawaban": [
        { "teks": "Sempurna", "prompt gambar": "Buatkan simbol jempol." },
        { "teks": "Tidak Sempurna", "prompt gambar": "Buatkan diagram siklus jangkrik (Telur-Nimfa-Imago)." },
        { "teks": "Tidak bermetamorfosis", "prompt gambar": "Buatkan gambar kucing." },
        { "teks": "Ovovivipar", "prompt gambar": "Buatkan gambar hiu." }
      ],
      "Jawaban": "Tidak Sempurna",
      "proxy": {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Urutan siklus hidup jangkrik adalah ...",
        "Prompt Gambar": "Buatkan diagram siklus jangkrik.",
        "Pilihan Jawaban": [
          { "teks": "Telur -> Nimfa -> Imago", "prompt gambar": "Buatkan urutan benar." },
          { "teks": "Telur -> Ulat -> Kepompong -> Imago", "prompt gambar": "Buatkan urutan salah." },
          { "teks": "Nimfa -> Telur -> Imago", "prompt gambar": "Buatkan urutan terbalik." },
          { "teks": "Telur -> Jentik -> Imago", "prompt gambar": "Buatkan urutan salah." }
        ],
        "Jawaban": "Telur -> Nimfa -> Imago"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Taoge yang biasa kita makan berasal dari biji tanaman apa?",
      "Prompt Gambar": "Buatkan gambar sayur taoge.",
      "Pilihan Jawaban": [
        { "teks": "Kacang Merah", "prompt gambar": "Buatkan gambar kacang merah." },
        { "teks": "Kacang Hijau", "prompt gambar": "Buatkan gambar kacang hijau." },
        { "teks": "Kedelai", "prompt gambar": "Buatkan gambar kedelai." },
        { "teks": "Jagung", "prompt gambar": "Buatkan gambar jagung." }
      ],
      "Jawaban": "Kacang Hijau",
      "proxy": {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kecambah kacang hijau akan tumbuh menjadi ...",
        "Prompt Gambar": "Buatkan gambar tanaman kacang hijau dewasa.",
        "Pilihan Jawaban": [
          { "teks": "Pohon Mangga", "prompt gambar": "Buatkan gambar pohon mangga." },
          { "teks": "Tanaman Kacang Hijau Dewasa", "prompt gambar": "Buatkan gambar tanaman kacang." },
          { "teks": "Rumput", "prompt gambar": "Buatkan gambar rumput." },
          { "teks": "Jamur", "prompt gambar": "Buatkan gambar jamur." }
        ],
        "Jawaban": "Tanaman Kacang Hijau Dewasa"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Pohon mangga dewasa akan menghasilkan ... yang kemudian menjadi buah.",
      "Prompt Gambar": "Buatkan gambar pohon mangga.",
      "Pilihan Jawaban": [
        { "teks": "Akar", "prompt gambar": "Buatkan gambar akar." },
        { "teks": "Bunga", "prompt gambar": "Buatkan gambar bunga mangga." },
        { "teks": "Daun kering", "prompt gambar": "Buatkan gambar daun kering." },
        { "teks": "Kayu", "prompt gambar": "Buatkan gambar batang kayu." }
      ],
      "Jawaban": "Bunga",
      "proxy": {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Di dalam buah mangga terdapat ... yang bisa ditanam kembali.",
        "Prompt Gambar": "Buatkan gambar biji mangga (pelok).",
        "Pilihan Jawaban": [
          { "teks": "Biji", "prompt gambar": "Buatkan gambar biji." },
          { "teks": "Bunga", "prompt gambar": "Buatkan gambar bunga." },
          { "teks": "Daun", "prompt gambar": "Buatkan gambar daun." },
          { "teks": "Akar", "prompt gambar": "Buatkan gambar akar." }
        ],
        "Jawaban": "Biji"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan Laron sebenarnya adalah fase dewasa dari hewan ...",
      "Prompt Gambar": "Buatkan gambar laron (rayap bersayap).",
      "Pilihan Jawaban": [
        { "teks": "Semut", "prompt gambar": "Buatkan gambar semut." },
        { "teks": "Rayap", "prompt gambar": "Buatkan gambar rayap." },
        { "teks": "Lebah", "prompt gambar": "Buatkan gambar lebah." },
        { "teks": "Lalat", "prompt gambar": "Buatkan gambar lalat." }
      ],
      "Jawaban": "Rayap",
      "proxy": {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Dalam koloni rayap, ada rayap yang bertugas mencari makan dan membangun sarang, yaitu ...",
        "Prompt Gambar": "Buatkan gambar rayap pekerja.",
        "Pilihan Jawaban": [
          { "teks": "Ratu Rayap", "prompt gambar": "Buatkan gambar ratu rayap besar." },
          { "teks": "Rayap Pekerja", "prompt gambar": "Buatkan gambar rayap kecil banyak." },
          { "teks": "Raja Rayap", "prompt gambar": "Buatkan gambar raja rayap." },
          { "teks": "Laron", "prompt gambar": "Buatkan gambar laron." }
        ],
        "Jawaban": "Rayap Pekerja"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Tahapan metamorfosis lalat yang sering kita lihat di tempat sampah adalah ...",
      "Prompt Gambar": "Buatkan gambar belatung (larva lalat).",
      "Pilihan Jawaban": [
        { "teks": "Telur", "prompt gambar": "Buatkan gambar telur lalat." },
        { "teks": "Larva (Belatung)", "prompt gambar": "Buatkan gambar belatung." },
        { "teks": "Pupa", "prompt gambar": "Buatkan gambar pupa lalat." },
        { "teks": "Imago", "prompt gambar": "Buatkan gambar lalat terbang." }
      ],
      "Jawaban": "Larva (Belatung)",
      "proxy": {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apakah lalat mengalami metamorfosis sempurna?",
        "Prompt Gambar": "Buatkan gambar lalat.",
        "Pilihan Jawaban": [
          { "teks": "Ya, karena ada fase Pupa", "prompt gambar": "Buatkan gambar pupa lalat." },
          { "teks": "Tidak, karena lalat langsung besar", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Ya, karena lalat bertelur", "prompt gambar": "Buatkan gambar telur." },
          { "teks": "Tidak, lalat melahirkan", "prompt gambar": "Buatkan gambar salah." }
        ],
        "Jawaban": "Ya, karena ada fase Pupa"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Semut juga mengalami metamorfosis. Setelah menetas dari telur, semut menjadi ...",
      "Prompt Gambar": "Buatkan gambar telur semut.",
      "Pilihan Jawaban": [
        { "teks": "Semut kecil", "prompt gambar": "Buatkan gambar semut kecil." },
        { "teks": "Larva", "prompt gambar": "Buatkan gambar larva semut (seperti ulat putih kecil)." },
        { "teks": "Pupa", "prompt gambar": "Buatkan gambar pupa semut." },
        { "teks": "Kepompong", "prompt gambar": "Buatkan gambar kepompong." }
      ],
      "Jawaban": "Larva",
      "proxy": {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Siapakah yang memberi makan larva semut?",
        "Prompt Gambar": "Buatkan gambar semut dewasa menyuapi larva.",
        "Pilihan Jawaban": [
          { "teks": "Mencari makan sendiri", "prompt gambar": "Buatkan gambar larva makan daun." },
          { "teks": "Semut Dewasa", "prompt gambar": "Buatkan gambar semut dewasa." },
          { "teks": "Ratu Semut", "prompt gambar": "Buatkan gambar ratu semut." },
          { "teks": "Manusia", "prompt gambar": "Buatkan gambar tangan manusia." }
        ],
        "Jawaban": "Semut Dewasa"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Hewan mamalia yang hidup di air dan bernapas dengan paru-paru adalah ...",
      "Prompt Gambar": "Buatkan gambar paus biru.",
      "Pilihan Jawaban": [
        { "teks": "Ikan Pari", "prompt gambar": "Buatkan gambar ikan pari." },
        { "teks": "Ikan Hiu", "prompt gambar": "Buatkan gambar ikan hiu." },
        { "teks": "Ikan Paus", "prompt gambar": "Buatkan gambar ikan paus." },
        { "teks": "Kuda Laut", "prompt gambar": "Buatkan gambar kuda laut." }
      ],
      "Jawaban": "Ikan Paus",
      "proxy": {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Paus berkembang biak dengan cara ...",
        "Prompt Gambar": "Buatkan gambar anak paus.",
        "Pilihan Jawaban": [
          { "teks": "Bertelur (Ovipar)", "prompt gambar": "Buatkan gambar telur." },
          { "teks": "Melahirkan (Vivipar)", "prompt gambar": "Buatkan gambar paus melahirkan." },
          { "teks": "Bertelur-Melahirkan (Ovovivipar)", "prompt gambar": "Buatkan gambar hiu." },
          { "teks": "Membelah diri", "prompt gambar": "Buatkan gambar amoeba." }
        ],
        "Jawaban": "Melahirkan (Vivipar)"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Ikan Mas meletakkan telurnya di ...",
      "Prompt Gambar": "Buatkan gambar tanaman air.",
      "Pilihan Jawaban": [
        { "teks": "Pasir pantai", "prompt gambar": "Buatkan gambar pasir." },
        { "teks": "Sarang burung", "prompt gambar": "Buatkan gambar sarang." },
        { "teks": "Menempel di tumbuhan air", "prompt gambar": "Buatkan gambar telur ikan di daun air." },
        { "teks": "Dalam tanah", "prompt gambar": "Buatkan gambar tanah." }
      ],
      "Jawaban": "Menempel di tumbuhan air",
      "proxy": {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Setelah menetas, ikan mas kecil akan ...",
        "Prompt Gambar": "Buatkan gambar ikan kecil berenang.",
        "Pilihan Jawaban": [
          { "teks": "Disusui induknya", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Mencari makan sendiri", "prompt gambar": "Buatkan gambar ikan makan." },
          { "teks": "Tidur terus", "prompt gambar": "Buatkan gambar ikan tidur." },
          { "teks": "Terbang", "prompt gambar": "Buatkan gambar ikan terbang." }
        ],
        "Jawaban": "Mencari makan sendiri"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Anak kambing yang baru lahir makanannya adalah ...",
      "Prompt Gambar": "Buatkan gambar anak kambing menyusu induknya.",
      "Pilihan Jawaban": [
        { "teks": "Rumput", "prompt gambar": "Buatkan gambar rumput." },
        { "teks": "Daging", "prompt gambar": "Buatkan gambar daging." },
        { "teks": "Air Susu Induknya", "prompt gambar": "Buatkan gambar susu." },
        { "teks": "Nasi", "prompt gambar": "Buatkan gambar nasi." }
      ],
      "Jawaban": "Air Susu Induknya",
      "proxy": {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kapan anak kambing mulai belajar makan rumput?",
        "Prompt Gambar": "Buatkan gambar kambing muda.",
        "Pilihan Jawaban": [
          { "teks": "Setelah dewasa", "prompt gambar": "Buatkan gambar kambing besar." },
          { "teks": "Saat menjadi kambing muda", "prompt gambar": "Buatkan gambar kambing makan rumput." },
          { "teks": "Sejak lahir langsung makan rumput", "prompt gambar": "Buatkan gambar salah." },
          { "teks": "Tidak pernah makan rumput", "prompt gambar": "Buatkan gambar salah." }
        ],
        "Jawaban": "Saat menjadi kambing muda"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Manusia akan berhenti tumbuh tinggi pada tahap Dewasa.",
      "Prompt Gambar": "Buatkan gambar orang dewasa mengukur tinggi badan.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Pada tahap Lansia (Lanjut Usia), fisik manusia semakin kuat.",
        "Prompt Gambar": "Buatkan gambar kakek nenek berjalan pakai tongkat.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Siklus hidup kucing mengalami metamorfosis sempurna.",
      "Prompt Gambar": "Buatkan gambar kucing.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Kucing hanya mengalami perubahan ukuran tubuh, tidak berubah bentuk.",
        "Prompt Gambar": "Buatkan gambar urutan pertumbuhan kucing.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Telur nyamuk menetas menjadi ulat.",
      "Prompt Gambar": "Buatkan gambar jentik nyamuk.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Telur nyamuk menetas menjadi jentik-jentik (larva).",
        "Prompt Gambar": "Buatkan gambar jentik di air.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Hewan Vivipar memiliki daun telinga.",
      "Prompt Gambar": "Buatkan gambar sapi dan telinganya.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Ayam (Ovipar) memiliki daun telinga.",
        "Prompt Gambar": "Buatkan gambar kepala ayam.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Kupu-kupu membantu penyerbukan bunga.",
      "Prompt Gambar": "Buatkan gambar kupu-kupu di bunga.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Fase ulat pada kupu-kupu menguntungkan petani.",
        "Prompt Gambar": "Buatkan gambar ulat makan daun tanaman.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Katak muda (berudu) bernapas dengan paru-paru.",
      "Prompt Gambar": "Buatkan gambar berudu.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Berudu bernapas dengan insang karena hidup di air.",
        "Prompt Gambar": "Buatkan gambar insang berudu.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Metamorfosis Tidak Sempurna tidak memiliki fase kepompong (pupa).",
      "Prompt Gambar": "Buatkan gambar siklus belalang.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Kupu-kupu mengalami metamorfosis tidak sempurna.",
        "Prompt Gambar": "Buatkan gambar kepompong kupu-kupu.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Tumbuhan mangga dewasa akan menghasilkan biji.",
      "Prompt Gambar": "Buatkan gambar buah mangga.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Pohon mangga dewasa menghasilkan bunga untuk berkembang biak.",
        "Prompt Gambar": "Buatkan gambar bunga mangga.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Kuda Laut berkembang biak dengan cara Ovovivipar.",
      "Prompt Gambar": "Buatkan gambar kuda laut.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Ovovivipar artinya bertelur dan melahirkan.",
        "Prompt Gambar": "Buatkan gambar simbol telur dan bayi.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Induk ayam mengerami telurnya selama 10 hari.",
      "Prompt Gambar": "Buatkan gambar ayam mengeram.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Lama induk ayam mengerami telur adalah 21 hari.",
        "Prompt Gambar": "Buatkan gambar kalender 21 hari.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Esai",
      "Pertanyaan": "Jelaskan secara singkat urutan siklus hidup manusia!",
      "Prompt Gambar": "Buatkan gambar urutan usia manusia.",
      "Jawaban": "Bayi/Balita -> Kanak-kanak -> Remaja -> Dewasa -> Lansia (Lanjut Usia).",
      "proxy": {
        "Nomor": 41,
        "Jenis": "Esai",
        "Pertanyaan": "Pada tahap apakah manusia mulai mengalami masa pubertas?",
        "Prompt Gambar": "Buatkan gambar remaja.",
        "Jawaban": "Tahap Remaja."
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan 3 contoh hewan yang berkembang biak dengan cara Vivipar (Melahirkan)!",
      "Prompt Gambar": "Buatkan gambar hewan-hewan mamalia.",
      "Jawaban": "Kucing, Sapi, Gajah, Orangutan, Paus, Lumba-lumba (Pilih 3).",
      "proxy": {
        "Nomor": 42,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 3 ciri-ciri hewan Vivipar!",
        "Prompt Gambar": "Buatkan gambar ciri hewan mamalia.",
        "Jawaban": "Memiliki daun telinga, memiliki kelenjar susu (menyusui), tubuh ditutupi rambut."
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Esai",
      "Pertanyaan": "Apa perbedaan Metamorfosis Sempurna dan Tidak Sempurna?",
      "Prompt Gambar": "Buatkan gambar perbandingan siklus kupu-kupu dan belalang.",
      "Jawaban": "Metamorfosis Sempurna mengalami fase kepompong (pupa), sedangkan Metamorfosis Tidak Sempurna tidak mengalami fase kepompong (langsung nimfa).",
      "proxy": {
        "Nomor": 43,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 2 hewan yang mengalami Metamorfosis Sempurna!",
        "Prompt Gambar": "Buatkan gambar kupu-kupu dan katak.",
        "Jawaban": "Kupu-kupu, Nyamuk, Lalat, Katak, Lebah."
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Esai",
      "Pertanyaan": "Tuliskan urutan siklus hidup Kupu-kupu!",
      "Prompt Gambar": "Buatkan gambar siklus kupu-kupu.",
      "Jawaban": "Telur -> Ulat (Larva) -> Kepompong (Pupa) -> Kupu-kupu (Imago).",
      "proxy": {
        "Nomor": 44,
        "Jenis": "Esai",
        "Pertanyaan": "Tuliskan urutan siklus hidup Belalang!",
        "Prompt Gambar": "Buatkan gambar siklus belalang.",
        "Jawaban": "Telur -> Nimfa -> Belalang Dewasa (Imago)."
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang dimaksud dengan Hewan Ovovivipar?",
      "Prompt Gambar": "Buatkan gambar ikan hiu.",
      "Jawaban": "Hewan yang berkembang biak dengan cara bertelur dan melahirkan. Telurnya menetas di dalam tubuh induk, lalu anaknya dilahirkan.",
      "proxy": {
        "Nomor": 45,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan contoh hewan Ovovivipar!",
        "Prompt Gambar": "Buatkan gambar hewan-hewan laut.",
        "Jawaban": "Ikan Hiu, Kuda Laut, Kadal, Bunglon, Ular Boa."
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Esai",
      "Pertanyaan": "Mengapa nyamuk disebut hewan yang merugikan manusia?",
      "Prompt Gambar": "Buatkan gambar nyamuk menggigit tangan.",
      "Jawaban": "Karena nyamuk menghisap darah dan bisa menularkan penyakit seperti demam berdarah dan malaria.",
      "proxy": {
        "Nomor": 46,
        "Jenis": "Esai",
        "Pertanyaan": "Pada fase apa nyamuk hidup di air?",
        "Prompt Gambar": "Buatkan gambar air tergenang.",
        "Jawaban": "Pada fase telur, jentik (larva), dan pupa."
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Esai",
      "Pertanyaan": "Jelaskan siklus hidup katak!",
      "Prompt Gambar": "Buatkan gambar siklus katak.",
      "Jawaban": "Telur -> Kecebong (Berudu) -> Katak Muda (berekor) -> Katak Dewasa (tidak berekor).",
      "proxy": {
        "Nomor": 47,
        "Jenis": "Esai",
        "Pertanyaan": "Apa perbedaan alat pernapasan kecebong dan katak dewasa?",
        "Prompt Gambar": "Buatkan gambar insang dan paru-paru.",
        "Jawaban": "Kecebong bernapas dengan insang, Katak dewasa bernapas dengan paru-paru dan kulit."
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Esai",
      "Pertanyaan": "Bagaimana cara tumbuhan mangga berkembang biak?",
      "Prompt Gambar": "Buatkan gambar biji mangga.",
      "Jawaban": "Dengan biji yang ditanam, kemudian tumbuh akar dan tunas, lalu menjadi pohon besar yang berbunga dan berbuah.",
      "proxy": {
        "Nomor": 48,
        "Jenis": "Esai",
        "Pertanyaan": "Apa fungsi bunga pada tumbuhan?",
        "Prompt Gambar": "Buatkan gambar bunga.",
        "Jawaban": "Sebagai alat perkembangbiakan untuk menghasilkan biji/buah."
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang terjadi pada telur kepik setelah menetas?",
      "Prompt Gambar": "Buatkan gambar siklus kepik.",
      "Jawaban": "Telur menetas menjadi larva, kemudian larva berubah menjadi kepompong (pupa) sebelum menjadi kepik dewasa.",
      "proxy": {
        "Nomor": 49,
        "Jenis": "Esai",
        "Pertanyaan": "Kepik mengalami metamorfosis apa?",
        "Prompt Gambar": "Buatkan gambar kepik.",
        "Jawaban": "Metamorfosis Sempurna."
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang dimaksud dengan 'Nimfa' dalam siklus hidup serangga?",
      "Prompt Gambar": "Buatkan gambar nimfa belalang.",
      "Jawaban": "Nimfa adalah hewan muda yang bentuk tubuhnya sudah mirip dengan hewan dewasa tetapi ukurannya lebih kecil dan belum punya sayap sempurna.",
      "proxy": {
        "Nomor": 50,
        "Jenis": "Esai",
        "Pertanyaan": "Serangga apa saja yang mengalami fase Nimfa?",
        "Prompt Gambar": "Buatkan gambar belalang dan kecoak.",
        "Jawaban": "Belalang, Kecoak, Jangkrik, Capung."
      }
    }
  ]
},
  {
    "Bab": "3 - Hidup Bersama Alam",
    "Total_Soal": 50,
    "Daftar_Soal": [
      {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Seekor harimau yang hidup sendirian di hutan disebut sebagai ...",
        "Prompt Gambar": "Buatkan gambar seekor harimau sendirian di hutan.",
        "Pilihan Jawaban": [
          { "teks": "Populasi", "prompt gambar": "Buatkan gambar sekumpulan harimau." },
          { "teks": "Individu", "prompt gambar": "Buatkan gambar satu ekor harimau." },
          { "teks": "Komunitas", "prompt gambar": "Buatkan gambar berbagai hewan di hutan." },
          { "teks": "Ekosistem", "prompt gambar": "Buatkan gambar hutan lengkap dengan sungai dan matahari." }
        ],
        "Jawaban": "Individu",
        "proxy": {
          "Nomor": 1,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Satuan terkecil dari makhluk hidup tunggal (sendirian) dalam suatu lingkungan disebut ...",
          "Prompt Gambar": "Buatkan gambar sebatang pohon pisang sendirian.",
          "Pilihan Jawaban": [
            { "teks": "Komunitas", "prompt gambar": "Buatkan gambar kebun pisang." },
            { "teks": "Ekosistem", "prompt gambar": "Buatkan gambar sawah." },
            { "teks": "Individu", "prompt gambar": "Buatkan gambar satu orang anak." },
            { "teks": "Populasi", "prompt gambar": "Buatkan gambar sekelompok semut." }
          ],
          "Jawaban": "Individu"
        }
      },
      {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kumpulan dari beberapa individu sejenis (misalnya sekumpulan gajah) yang tinggal di tempat yang sama disebut ...",
        "Prompt Gambar": "Buatkan gambar sekawanan gajah di padang rumput.",
        "Pilihan Jawaban": [
          { "teks": "Individu", "prompt gambar": "Buatkan gambar satu gajah." },
          { "teks": "Populasi", "prompt gambar": "Buatkan gambar kawanan gajah." },
          { "teks": "Abiotik", "prompt gambar": "Buatkan gambar batu dan air." },
          { "teks": "Produsen", "prompt gambar": "Buatkan gambar rumput." }
        ],
        "Jawaban": "Populasi",
        "proxy": {
          "Nomor": 2,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Jika di sebuah kolam terdapat 10 ekor ikan mas, kumpulan ikan mas tersebut membentuk ...",
          "Prompt Gambar": "Buatkan gambar kolam berisi banyak ikan mas.",
          "Pilihan Jawaban": [
            { "teks": "Individu", "prompt gambar": "Buatkan gambar satu ikan." },
            { "teks": "Populasi", "prompt gambar": "Buatkan gambar banyak ikan sejenis." },
            { "teks": "Ekosistem", "prompt gambar": "Buatkan gambar kolam lengkap." },
            { "teks": "Biosfer", "prompt gambar": "Buatkan gambar bumi." }
          ],
          "Jawaban": "Populasi"
        }
      },
      {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hubungan timbal balik antara makhluk hidup dengan lingkungannya (benda mati) disebut ...",
        "Prompt Gambar": "Buatkan gambar interaksi hewan minum air di sungai.",
        "Pilihan Jawaban": [
          { "teks": "Komunitas", "prompt gambar": "Buatkan gambar kumpulan hewan berbeda." },
          { "teks": "Populasi", "prompt gambar": "Buatkan gambar kumpulan hewan sama." },
          { "teks": "Ekosistem", "prompt gambar": "Buatkan gambar lingkungan alam lengkap (air, tanah, hewan, tumbuhan)." },
          { "teks": "Habitat", "prompt gambar": "Buatkan gambar rumah hewan." }
        ],
        "Jawaban": "Ekosistem",
        "proxy": {
          "Nomor": 3,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Kesatuan antara komunitas makhluk hidup dengan benda-benda tak hidup di lingkungannya disebut ...",
          "Prompt Gambar": "Buatkan gambar akuarium.",
          "Pilihan Jawaban": [
            { "teks": "Individu", "prompt gambar": "Buatkan gambar satu ikan." },
            { "teks": "Ekosistem", "prompt gambar": "Buatkan gambar interaksi ikan, air, dan batu." },
            { "teks": "Simbiosis", "prompt gambar": "Buatkan gambar lebah dan bunga." },
            { "teks": "Adaptasi", "prompt gambar": "Buatkan gambar bunglon." }
          ],
          "Jawaban": "Ekosistem"
        }
      },
      {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Manakah di bawah ini yang termasuk contoh Ekosistem Alami (terbentuk oleh alam)?",
        "Prompt Gambar": "Buatkan gambar hutan dan sungai.",
        "Pilihan Jawaban": [
          { "teks": "Sawah", "prompt gambar": "Buatkan gambar petani di sawah." },
          { "teks": "Hutan", "prompt gambar": "Buatkan gambar hutan lebat." },
          { "teks": "Waduk (Bendungan)", "prompt gambar": "Buatkan gambar bendungan air." },
          { "teks": "Akuarium", "prompt gambar": "Buatkan gambar akuarium." }
        ],
        "Jawaban": "Hutan",
        "proxy": {
          "Nomor": 4,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Ekosistem yang tidak dibuat oleh manusia disebut ekosistem alami. Contohnya adalah ...",
          "Prompt Gambar": "Buatkan gambar laut dan kolam renang.",
          "Pilihan Jawaban": [
            { "teks": "Kolam Ikan", "prompt gambar": "Buatkan gambar kolam semen." },
            { "teks": "Kebun Binatang", "prompt gambar": "Buatkan gambar kandang hewan." },
            { "teks": "Laut", "prompt gambar": "Buatkan gambar lautan luas." },
            { "teks": "Taman Kota", "prompt gambar": "Buatkan gambar taman bermain." }
          ],
          "Jawaban": "Laut"
        }
      },
      {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Sawah dan Waduk adalah contoh dari ekosistem ...",
        "Prompt Gambar": "Buatkan gambar sawah yang rapi dan bendungan.",
        "Pilihan Jawaban": [
          { "teks": "Alami", "prompt gambar": "Buatkan gambar gunung." },
          { "teks": "Buatan", "prompt gambar": "Buatkan gambar manusia membuat sawah/bangunan." },
          { "teks": "Laut", "prompt gambar": "Buatkan gambar laut." },
          { "teks": "Udara", "prompt gambar": "Buatkan gambar langit." }
        ],
        "Jawaban": "Buatan",
        "proxy": {
          "Nomor": 5,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Ekosistem yang sengaja dibuat oleh manusia untuk memenuhi kebutuhannya disebut ...",
          "Prompt Gambar": "Buatkan gambar akuarium dan kebun.",
          "Pilihan Jawaban": [
            { "teks": "Ekosistem Alami", "prompt gambar": "Buatkan gambar sungai." },
            { "teks": "Ekosistem Buatan", "prompt gambar": "Buatkan gambar kolam renang." },
            { "teks": "Ekosistem Liar", "prompt gambar": "Buatkan gambar hutan rimba." },
            { "teks": "Ekosistem Purba", "prompt gambar": "Buatkan gambar dinosaurus." }
          ],
          "Jawaban": "Ekosistem Buatan"
        }
      },
      {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Komponen dalam ekosistem yang terdiri dari makhluk hidup (bernyawa) disebut komponen ...",
        "Prompt Gambar": "Buatkan gambar hewan, tumbuhan, dan manusia.",
        "Pilihan Jawaban": [
          { "teks": "Abiotik", "prompt gambar": "Buatkan gambar batu dan air." },
          { "teks": "Biotik", "prompt gambar": "Buatkan gambar kucing dan bunga." },
          { "teks": "Kimia", "prompt gambar": "Buatkan gambar tabung reaksi." },
          { "teks": "Fisik", "prompt gambar": "Buatkan gambar tanah." }
        ],
        "Jawaban": "Biotik",
        "proxy": {
          "Nomor": 6,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Manakah di bawah ini yang termasuk komponen BIOTIK?",
          "Prompt Gambar": "Buatkan gambar campuran benda hidup dan mati.",
          "Pilihan Jawaban": [
            { "teks": "Air", "prompt gambar": "Buatkan gambar air." },
            { "teks": "Tanah", "prompt gambar": "Buatkan gambar tanah." },
            { "teks": "Pohon Mangga", "prompt gambar": "Buatkan gambar pohon mangga." },
            { "teks": "Cahaya Matahari", "prompt gambar": "Buatkan gambar matahari." }
          ],
          "Jawaban": "Pohon Mangga"
        }
      },
      {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Komponen Abiotik adalah segala benda mati yang ada di lingkungan. Contohnya adalah ...",
        "Prompt Gambar": "Buatkan gambar pemandangan alam fokus ke benda mati.",
        "Pilihan Jawaban": [
          { "teks": "Semut dan Lebah", "prompt gambar": "Buatkan gambar serangga." },
          { "teks": "Air, Tanah, dan Udara", "prompt gambar": "Buatkan gambar air, tanah, awan." },
          { "teks": "Rumput dan Pohon", "prompt gambar": "Buatkan gambar tanaman." },
          { "teks": "Burung dan Ikan", "prompt gambar": "Buatkan gambar hewan." }
        ],
        "Jawaban": "Air, Tanah, dan Udara",
        "proxy": {
          "Nomor": 7,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Yang BUKAN termasuk komponen abiotik (benda mati) di bawah ini adalah ...",
          "Prompt Gambar": "Buatkan gambar batu, matahari, air, dan cacing.",
          "Pilihan Jawaban": [
            { "teks": "Batu", "prompt gambar": "Buatkan gambar batu." },
            { "teks": "Cahaya Matahari", "prompt gambar": "Buatkan gambar matahari." },
            { "teks": "Cacing Tanah", "prompt gambar": "Buatkan gambar cacing tanah." },
            { "teks": "Udara", "prompt gambar": "Buatkan gambar angin/udara." }
          ],
          "Jawaban": "Cacing Tanah"
        }
      },
      {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Dalam sebuah ekosistem, tumbuhan hijau berperan sebagai ... karena bisa membuat makanannya sendiri.",
        "Prompt Gambar": "Buatkan gambar tumbuhan berfotosintesis.",
        "Pilihan Jawaban": [
          { "teks": "Konsumen", "prompt gambar": "Buatkan gambar hewan makan." },
          { "teks": "Produsen", "prompt gambar": "Buatkan gambar padi atau sayuran." },
          { "teks": "Pengurai", "prompt gambar": "Buatkan gambar jamur." },
          { "teks": "Predator", "prompt gambar": "Buatkan gambar harimau." }
        ],
        "Jawaban": "Produsen",
        "proxy": {
          "Nomor": 8,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Makhluk hidup yang tugasnya menghasilkan makanan untuk makhluk hidup lain disebut ...",
          "Prompt Gambar": "Buatkan gambar rantai makanan (fokus ke rumput).",
          "Pilihan Jawaban": [
            { "teks": "Produsen", "prompt gambar": "Buatkan gambar pohon." },
            { "teks": "Konsumen tingkat 1", "prompt gambar": "Buatkan gambar ulat." },
            { "teks": "Konsumen tingkat 2", "prompt gambar": "Buatkan gambar ayam." },
            { "teks": "Dekomposer", "prompt gambar": "Buatkan gambar bakteri." }
          ],
          "Jawaban": "Produsen"
        }
      },
      {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hewan dan manusia tidak bisa membuat makanan sendiri, mereka memakan tumbuhan atau hewan lain. Maka mereka disebut ...",
        "Prompt Gambar": "Buatkan gambar manusia makan nasi dan kucing makan ikan.",
        "Pilihan Jawaban": [
          { "teks": "Produsen", "prompt gambar": "Buatkan gambar padi." },
          { "teks": "Konsumen", "prompt gambar": "Buatkan gambar sapi makan rumput." },
          { "teks": "Matahari", "prompt gambar": "Buatkan gambar matahari." },
          { "teks": "Air", "prompt gambar": "Buatkan gambar air." }
        ],
        "Jawaban": "Konsumen",
        "proxy": {
          "Nomor": 9,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Kambing memakan rumput. Dalam ekosistem, kambing berperan sebagai ...",
          "Prompt Gambar": "Buatkan gambar kambing.",
          "Pilihan Jawaban": [
            { "teks": "Produsen", "prompt gambar": "Buatkan gambar rumput." },
            { "teks": "Konsumen", "prompt gambar": "Buatkan gambar hewan pemakan." },
            { "teks": "Pengurai", "prompt gambar": "Buatkan gambar cacing." },
            { "teks": "Abiotik", "prompt gambar": "Buatkan gambar batu." }
          ],
          "Jawaban": "Konsumen"
        }
      },
      {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Makhluk hidup kecil seperti cacing dan jamur yang bertugas menguraikan sisa-sisa makhluk hidup yang sudah mati disebut ...",
        "Prompt Gambar": "Buatkan gambar jamur tumbuh di kayu lapuk.",
        "Pilihan Jawaban": [
          { "teks": "Produsen", "prompt gambar": "Buatkan gambar tanaman." },
          { "teks": "Dekomposer (Pengurai)", "prompt gambar": "Buatkan gambar jamur dan bakteri." },
          { "teks": "Konsumen", "prompt gambar": "Buatkan gambar hewan." },
          { "teks": "Predator", "prompt gambar": "Buatkan gambar singa." }
        ],
        "Jawaban": "Dekomposer (Pengurai)",
        "proxy": {
          "Nomor": 10,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Cacing tanah membantu menggemburkan tanah dengan memakan sisa daun busuk. Cacing tanah berperan sebagai ...",
          "Prompt Gambar": "Buatkan gambar cacing di dalam tanah.",
          "Pilihan Jawaban": [
            { "teks": "Detritivor / Pengurai", "prompt gambar": "Buatkan gambar cacing mengurai sampah." },
            { "teks": "Produsen", "prompt gambar": "Buatkan gambar daun." },
            { "teks": "Karnivora", "prompt gambar": "Buatkan gambar harimau." },
            { "teks": "Herbivora", "prompt gambar": "Buatkan gambar kambing." }
          ],
          "Jawaban": "Detritivor / Pengurai"
        }
      },
      {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hubungan khas antara dua makhluk hidup yang berbeda jenis disebut ...",
        "Prompt Gambar": "Buatkan gambar interaksi lebah dan bunga.",
        "Pilihan Jawaban": [
          { "teks": "Kompetisi", "prompt gambar": "Buatkan gambar dua hewan berebut makanan." },
          { "teks": "Simbiosis", "prompt gambar": "Buatkan gambar simbol persahabatan hewan." },
          { "teks": "Metamorfosis", "prompt gambar": "Buatkan gambar kupu-kupu." },
          { "teks": "Polusi", "prompt gambar": "Buatkan gambar asap pabrik." }
        ],
        "Jawaban": "Simbiosis",
        "proxy": {
          "Nomor": 11,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Interaksi atau hubungan erat antara dua makhluk hidup disebut ...",
          "Prompt Gambar": "Buatkan gambar ikan remora menempel di hiu.",
          "Pilihan Jawaban": [
            { "teks": "Simbiosis", "prompt gambar": "Buatkan gambar simbiosis." },
            { "teks": "Fotosintesis", "prompt gambar": "Buatkan gambar daun kena matahari." },
            { "teks": "Adaptasi", "prompt gambar": "Buatkan gambar bunglon." },
            { "teks": "Reproduksi", "prompt gambar": "Buatkan gambar hewan beranak." }
          ],
          "Jawaban": "Simbiosis"
        }
      },
      {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hubungan antara dua makhluk hidup yang saling menguntungkan (sama-sama untung) disebut Simbiosis ...",
        "Prompt Gambar": "Buatkan gambar kupu-kupu hinggap di bunga.",
        "Pilihan Jawaban": [
          { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar nyamuk menggigit manusia." },
          { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar ikan remora dan hiu." },
          { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar lebah dan bunga." },
          { "teks": "Egoisme", "prompt gambar": "Buatkan gambar anak main sendiri." }
        ],
        "Jawaban": "Mutualisme",
        "proxy": {
          "Nomor": 12,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Kupu-kupu mendapatkan nektar, dan bunga terbantu penyerbukannya. Ini contoh simbiosis ...",
          "Prompt Gambar": "Buatkan gambar kupu-kupu dan bunga.",
          "Pilihan Jawaban": [
            { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar saling bersalaman (simbol)." },
            { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar satu untung satu diam." },
            { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar satu untung satu rugi." },
            { "teks": "Netralisme", "prompt gambar": "Buatkan gambar dua hewan tidak peduli." }
          ],
          "Jawaban": "Mutualisme"
        }
      },
      {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hubungan di mana satu makhluk hidup untung, tetapi yang lain dirugikan disebut Simbiosis ...",
        "Prompt Gambar": "Buatkan gambar benalu menempel di pohon mangga.",
        "Pilihan Jawaban": [
          { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar burung jalak di punggung kerbau." },
          { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar kutu di rambut." },
          { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar anggrek di pohon besar." },
          { "teks": "Komunisme", "prompt gambar": "Buatkan gambar bendera merah (salah)." }
        ],
        "Jawaban": "Parasitisme",
        "proxy": {
          "Nomor": 13,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Nyamuk menggigit manusia. Nyamuk kenyang (untung), manusia gatal (rugi). Ini adalah contoh simbiosis ...",
          "Prompt Gambar": "Buatkan gambar nyamuk di tangan.",
          "Pilihan Jawaban": [
            { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar saling bantu." },
            { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar menumpang." },
            { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar benalu." },
            { "teks": "Amensalisme", "prompt gambar": "Buatkan gambar jamur penisilin." }
          ],
          "Jawaban": "Parasitisme"
        }
      },
      {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Hubungan di mana satu makhluk hidup untung, dan yang lain tidak untung juga tidak rugi (biasa saja) disebut Simbiosis ...",
        "Prompt Gambar": "Buatkan gambar tanaman anggrek menempel di pohon.",
        "Pilihan Jawaban": [
          { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar lebah." },
          { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar cacing pita." },
          { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar ikan remora." },
          { "teks": "Sosialisme", "prompt gambar": "Buatkan gambar orang berkumpul." }
        ],
        "Jawaban": "Komensalisme",
        "proxy": {
          "Nomor": 14,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Ikan remora berenang dekat ikan hiu untuk mendapat sisa makanan dan perlindungan. Hiu tidak merasa terganggu. Ini adalah contoh simbiosis ...",
          "Prompt Gambar": "Buatkan gambar ikan hiu dan remora.",
          "Pilihan Jawaban": [
            { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar kutu." },
            { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar kupu-kupu." },
            { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar anggrek." },
            { "teks": "Predasi", "prompt gambar": "Buatkan gambar harimau makan rusa." }
          ],
          "Jawaban": "Komensalisme"
        }
      },
      {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Benalu yang menempel pada pohon mangga termasuk contoh simbiosis parasitisme karena ...",
        "Prompt Gambar": "Buatkan gambar benalu mengambil sari makanan pohon.",
        "Pilihan Jawaban": [
          { "teks": "Benalu memberi makanan ke pohon mangga", "prompt gambar": "Buatkan gambar benalu memberi kado." },
          { "teks": "Benalu mengambil makanan dari pohon mangga sehingga pohon mangga kurus", "prompt gambar": "Buatkan gambar pohon mangga layu." },
          { "teks": "Pohon mangga tidak terganggu", "prompt gambar": "Buatkan gambar pohon mangga tersenyum." },
          { "teks": "Benalu melindungi pohon mangga", "prompt gambar": "Buatkan gambar benalu jadi payung." }
        ],
        "Jawaban": "Benalu mengambil makanan dari pohon mangga sehingga pohon mangga kurus",
        "proxy": {
          "Nomor": 15,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Mengapa tanaman Tali Putri disebut parasit?",
          "Prompt Gambar": "Buatkan gambar tanaman tali putri berwarna kuning menutupi tanaman pagar.",
          "Pilihan Jawaban": [
            { "teks": "Karena warnanya kuning indah", "prompt gambar": "Buatkan gambar bunga kuning." },
            { "teks": "Karena dia mengambil sari makanan dari tanaman inangnya", "prompt gambar": "Buatkan gambar tanaman inang kurus." },
            { "teks": "Karena dia membantu tanaman lain tumbuh", "prompt gambar": "Buatkan gambar pupuk." },
            { "teks": "Karena dia tidak menempel", "prompt gambar": "Buatkan gambar tanaman di tanah." }
          ],
          "Jawaban": "Karena dia mengambil sari makanan dari tanaman inangnya"
        }
      },
      {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Burung Jalak suka hinggap di punggung kerbau untuk memakan kutu. Kerbau merasa senang karena kutunya hilang. Ini contoh simbiosis ...",
        "Prompt Gambar": "Buatkan gambar burung jalak di atas punggung kerbau.",
        "Pilihan Jawaban": [
          { "teks": "Parasitisme", "prompt gambar": "Buatkan gambar nyamuk." },
          { "teks": "Komensalisme", "prompt gambar": "Buatkan gambar anggrek." },
          { "teks": "Mutualisme", "prompt gambar": "Buatkan gambar jabat tangan." },
          { "teks": "Kompetisi", "prompt gambar": "Buatkan gambar dua hewan berebut." }
        ],
        "Jawaban": "Mutualisme",
        "proxy": {
          "Nomor": 16,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Hubungan antara Lebah dan Bunga termasuk simbiosis Mutualisme karena ...",
          "Prompt Gambar": "Buatkan gambar lebah mengambil nektar.",
          "Pilihan Jawaban": [
            { "teks": "Lebah untung, Bunga rugi", "prompt gambar": "Buatkan gambar bunga layu." },
            { "teks": "Lebah rugi, Bunga untung", "prompt gambar": "Buatkan gambar lebah sakit." },
            { "teks": "Lebah dan Bunga sama-sama untung", "prompt gambar": "Buatkan gambar lebah kenyang dan bunga mekar." },
            { "teks": "Lebah dan Bunga tidak saling mempengaruhi", "prompt gambar": "Buatkan gambar lebah terbang menjauh." }
          ],
          "Jawaban": "Lebah dan Bunga sama-sama untung"
        }
      },
      {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Manusia sangat bergantung pada alam. Apa yang kita dapatkan dari tumbuhan untuk bernapas?",
        "Prompt Gambar": "Buatkan gambar orang menghirup udara segar di bawah pohon.",
        "Pilihan Jawaban": [
          { "teks": "Karbondioksida", "prompt gambar": "Buatkan gambar asap." },
          { "teks": "Oksigen", "prompt gambar": "Buatkan gambar simbol O2 segar." },
          { "teks": "Nitrogen", "prompt gambar": "Buatkan gambar tabung gas." },
          { "teks": "Air", "prompt gambar": "Buatkan gambar air." }
        ],
        "Jawaban": "Oksigen",
        "proxy": {
          "Nomor": 17,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Pohon menghasilkan gas yang bersih yang dibutuhkan manusia dan hewan untuk bernapas, yaitu ...",
          "Prompt Gambar": "Buatkan gambar hutan yang asri.",
          "Pilihan Jawaban": [
            { "teks": "Asap kendaraan", "prompt gambar": "Buatkan gambar knalpot." },
            { "teks": "Oksigen", "prompt gambar": "Buatkan gambar orang bernapas lega." },
            { "teks": "Debu", "prompt gambar": "Buatkan gambar debu." },
            { "teks": "Limbah", "prompt gambar": "Buatkan gambar sampah." }
          ],
          "Jawaban": "Oksigen"
        }
      },
      {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apa peran cahaya matahari bagi tumbuhan?",
        "Prompt Gambar": "Buatkan gambar matahari menyinari tumbuhan.",
        "Pilihan Jawaban": [
          { "teks": "Untuk tidur", "prompt gambar": "Buatkan gambar tumbuhan tidur." },
          { "teks": "Untuk fotosintesis (membuat makanan)", "prompt gambar": "Buatkan gambar proses fotosintesis sederhana." },
          { "teks": "Untuk minum", "prompt gambar": "Buatkan gambar tumbuhan minum es." },
          { "teks": "Untuk berteduh", "prompt gambar": "Buatkan gambar payung." }
        ],
        "Jawaban": "Untuk fotosintesis (membuat makanan)",
        "proxy": {
          "Nomor": 18,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Tumbuhan hijau membutuhkan ... untuk memasak makanannya sendiri (fotosintesis).",
          "Prompt Gambar": "Buatkan gambar matahari, air, dan daun.",
          "Pilihan Jawaban": [
            { "teks": "Cahaya Matahari", "prompt gambar": "Buatkan gambar matahari bersinar." },
            { "teks": "Cahaya Bulan", "prompt gambar": "Buatkan gambar bulan." },
            { "teks": "Api Unggun", "prompt gambar": "Buatkan gambar api unggun." },
            { "teks": "Listrik", "prompt gambar": "Buatkan gambar lampu." }
          ],
          "Jawaban": "Cahaya Matahari"
        }
      },
      {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Di ekosistem sawah, tikus sering memakan padi petani. Jika ular di sawah diburu sampai habis, apa yang akan terjadi?",
        "Prompt Gambar": "Buatkan gambar tikus makan padi.",
        "Pilihan Jawaban": [
          { "teks": "Panen padi melimpah", "prompt gambar": "Buatkan gambar tumpukan padi." },
          { "teks": "Jumlah tikus semakin banyak dan padi rusak", "prompt gambar": "Buatkan gambar sawah penuh tikus." },
          { "teks": "Tikus ikut mati", "prompt gambar": "Buatkan gambar tikus mati." },
          { "teks": "Sawah menjadi subur", "prompt gambar": "Buatkan gambar sawah hijau." }
        ],
        "Jawaban": "Jumlah tikus semakin banyak dan padi rusak",
        "proxy": {
          "Nomor": 19,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Ular sawah membantu petani karena ular memakan ...",
          "Prompt Gambar": "Buatkan gambar ular memangsa tikus.",
          "Pilihan Jawaban": [
            { "teks": "Padi", "prompt gambar": "Buatkan gambar padi." },
            { "teks": "Tikus (hama padi)", "prompt gambar": "Buatkan gambar tikus." },
            { "teks": "Kerbau", "prompt gambar": "Buatkan gambar kerbau." },
            { "teks": "Rumput", "prompt gambar": "Buatkan gambar rumput." }
          ],
          "Jawaban": "Tikus (hama padi)"
        }
      },
      {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Cacing tanah termasuk hewan Detritivor. Apa tugas Detritivor?",
        "Prompt Gambar": "Buatkan gambar cacing tanah memakan daun busuk.",
        "Pilihan Jawaban": [
          { "teks": "Membuat makanan sendiri", "prompt gambar": "Buatkan gambar tumbuhan." },
          { "teks": "Memakan sisa-sisa makhluk hidup yang sudah mati dan menghancurkannya", "prompt gambar": "Buatkan gambar sampah organik terurai." },
          { "teks": "Memburu hewan lain", "prompt gambar": "Buatkan gambar harimau." },
          { "teks": "Terbang di udara", "prompt gambar": "Buatkan gambar burung." }
        ],
        "Jawaban": "Memakan sisa-sisa makhluk hidup yang sudah mati dan menghancurkannya",
        "proxy": {
          "Nomor": 20,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Hewan seperti cacing tanah dan kutu kayu yang memakan sampah organik disebut ...",
          "Prompt Gambar": "Buatkan gambar tanah subur.",
          "Pilihan Jawaban": [
            { "teks": "Herbivora", "prompt gambar": "Buatkan gambar kambing." },
            { "teks": "Karnivora", "prompt gambar": "Buatkan gambar singa." },
            { "teks": "Detritivor", "prompt gambar": "Buatkan gambar cacing." },
            { "teks": "Produsen", "prompt gambar": "Buatkan gambar pohon." }
          ],
          "Jawaban": "Detritivor"
        }
      },
      {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Aktivitas manusia yang dapat MERUSAK ekosistem hutan adalah ...",
        "Prompt Gambar": "Buatkan gambar hutan yang gundul/rusak.",
        "Pilihan Jawaban": [
          { "teks": "Menanam pohon (Reboisasi)", "prompt gambar": "Buatkan gambar menanam pohon." },
          { "teks": "Tebang pilih (menebang pohon tua saja)", "prompt gambar": "Buatkan gambar memilih pohon." },
          { "teks": "Penebangan liar dan pembakaran hutan", "prompt gambar": "Buatkan gambar hutan terbakar dan penebangan liar." },
          { "teks": "Berkemah dengan tertib", "prompt gambar": "Buatkan gambar tenda kemah." }
        ],
        "Jawaban": "Penebangan liar dan pembakaran hutan",
        "proxy": {
          "Nomor": 21,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Apa akibatnya jika hutan ditebang sembarangan?",
          "Prompt Gambar": "Buatkan gambar banjir atau tanah longsor.",
          "Pilihan Jawaban": [
            { "teks": "Udara menjadi lebih sejuk", "prompt gambar": "Buatkan gambar angin sejuk." },
            { "teks": "Banjir dan tanah longsor", "prompt gambar": "Buatkan gambar rumah kebanjiran." },
            { "teks": "Hewan-hewan semakin banyak", "prompt gambar": "Buatkan gambar hewan berpesta." },
            { "teks": "Tanah menjadi subur", "prompt gambar": "Buatkan gambar tanaman subur." }
          ],
          "Jawaban": "Banjir dan tanah longsor"
        }
      },
      {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Tanah adalah komponen abiotik. Apa fungsi tanah bagi tumbuhan?",
        "Prompt Gambar": "Buatkan gambar akar pohon mencengkram tanah.",
        "Pilihan Jawaban": [
          { "teks": "Sebagai tempat tumbuh dan mencari air/mineral", "prompt gambar": "Buatkan gambar akar menyerap air." },
          { "teks": "Untuk bernapas", "prompt gambar": "Buatkan gambar daun." },
          { "teks": "Untuk fotosintesis", "prompt gambar": "Buatkan gambar matahari." },
          { "teks": "Untuk bergerak", "prompt gambar": "Buatkan gambar kaki." }
        ],
        "Jawaban": "Sebagai tempat tumbuh dan mencari air/mineral",
        "proxy": {
          "Nomor": 22,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Tumbuhan mengambil air dan zat hara dari ...",
          "Prompt Gambar": "Buatkan gambar tanaman dalam pot.",
          "Pilihan Jawaban": [
            { "teks": "Udara", "prompt gambar": "Buatkan gambar awan." },
            { "teks": "Tanah", "prompt gambar": "Buatkan gambar tanah hitam." },
            { "teks": "Batu", "prompt gambar": "Buatkan gambar batu keras." },
            { "teks": "Cahaya", "prompt gambar": "Buatkan gambar lampu." }
          ],
          "Jawaban": "Tanah"
        }
      },
      {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Contoh komponen abiotik (benda mati) yang sangat penting untuk minum semua makhluk hidup adalah ...",
        "Prompt Gambar": "Buatkan gambar gelas berisi air.",
        "Pilihan Jawaban": [
          { "teks": "Batu", "prompt gambar": "Buatkan gambar batu." },
          { "teks": "Pasir", "prompt gambar": "Buatkan gambar pasir." },
          { "teks": "Air", "prompt gambar": "Buatkan gambar air terjun." },
          { "teks": "Kayu", "prompt gambar": "Buatkan gambar kayu." }
        ],
        "Jawaban": "Air",
        "proxy": {
          "Nomor": 23,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Manakah benda berikut yang tidak bernyawa (abiotik) tapi dibutuhkan ikan untuk berenang?",
          "Prompt Gambar": "Buatkan gambar akuarium.",
          "Pilihan Jawaban": [
            { "teks": "Cacing", "prompt gambar": "Buatkan gambar cacing." },
            { "teks": "Air", "prompt gambar": "Buatkan gambar air." },
            { "teks": "Tanaman air", "prompt gambar": "Buatkan gambar tanaman air." },
            { "teks": "Ikan kecil", "prompt gambar": "Buatkan gambar ikan kecil." }
          ],
          "Jawaban": "Air"
        }
      },
      {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Waduk adalah ekosistem buatan. Apa fungsi waduk bagi manusia?",
        "Prompt Gambar": "Buatkan gambar bendungan besar (waduk).",
        "Pilihan Jawaban": [
          { "teks": "Hanya untuk hiasan", "prompt gambar": "Buatkan gambar lukisan." },
          { "teks": "Pembangkit listrik dan irigasi sawah", "prompt gambar": "Buatkan gambar turbin air dan sawah." },
          { "teks": "Tempat membuang sampah", "prompt gambar": "Buatkan gambar tempat sampah." },
          { "teks": "Tempat tinggal harimau", "prompt gambar": "Buatkan gambar hutan." }
        ],
        "Jawaban": "Pembangkit listrik dan irigasi sawah",
        "proxy": {
          "Nomor": 24,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Bendungan air yang besar (waduk) dibuat manusia untuk ...",
          "Prompt Gambar": "Buatkan gambar air mengalir ke sawah.",
          "Pilihan Jawaban": [
            { "teks": "Menampung air", "prompt gambar": "Buatkan gambar kolam besar." },
            { "teks": "Membuat banjir", "prompt gambar": "Buatkan gambar banjir." },
            { "teks": "Menanam padi", "prompt gambar": "Buatkan gambar padi." },
            { "teks": "Tidur", "prompt gambar": "Buatkan gambar kasur." }
          ],
          "Jawaban": "Menampung air"
        }
      },
      {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Apa yang akan terjadi jika kita membuang sampah plastik ke sungai?",
        "Prompt Gambar": "Buatkan gambar sungai penuh sampah plastik.",
        "Pilihan Jawaban": [
          { "teks": "Sungai menjadi bersih", "prompt gambar": "Buatkan gambar sungai jernih." },
          { "teks": "Ikan-ikan menjadi sehat", "prompt gambar": "Buatkan gambar ikan gemuk." },
          { "teks": "Sungai tercemar dan bisa menyebabkan banjir", "prompt gambar": "Buatkan gambar banjir di perumahan." },
          { "teks": "Air sungai menjadi harum", "prompt gambar": "Buatkan gambar parfum." }
        ],
        "Jawaban": "Sungai tercemar dan bisa menyebabkan banjir",
        "proxy": {
          "Nomor": 25,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Untuk menjaga ekosistem sungai agar tetap baik, kita harus ...",
          "Prompt Gambar": "Buatkan gambar orang membuang sampah di tempat sampah.",
          "Pilihan Jawaban": [
            { "teks": "Membuang limbah pabrik ke sungai", "prompt gambar": "Buatkan gambar pipa limbah." },
            { "teks": "Tidak membuang sampah sembarangan ke sungai", "prompt gambar": "Buatkan gambar sungai bersih." },
            { "teks": "Menangkap semua ikan dengan racun", "prompt gambar": "Buatkan gambar racun ikan." },
            { "teks": "Menebang pohon di pinggir sungai", "prompt gambar": "Buatkan gambar penebangan pohon." }
          ],
          "Jawaban": "Tidak membuang sampah sembarangan ke sungai"
        }
      },
      {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Ekosistem Gurun memiliki suhu yang sangat ...",
        "Prompt Gambar": "Buatkan gambar gurun pasir dengan matahari terik.",
        "Pilihan Jawaban": [
          { "teks": "Dingin dan beku", "prompt gambar": "Buatkan gambar es kutub." },
          { "teks": "Panas dan kering", "prompt gambar": "Buatkan gambar termometer merah." },
          { "teks": "Lembab dan basah", "prompt gambar": "Buatkan gambar hutan hujan." },
          { "teks": "Sejuk", "prompt gambar": "Buatkan gambar pegunungan." }
        ],
        "Jawaban": "Panas dan kering",
        "proxy": {
          "Nomor": 26,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Tumbuhan yang banyak ditemukan di ekosistem gurun adalah ...",
          "Prompt Gambar": "Buatkan gambar kaktus.",
          "Pilihan Jawaban": [
            { "teks": "Padi", "prompt gambar": "Buatkan gambar padi." },
            { "teks": "Kaktus", "prompt gambar": "Buatkan gambar kaktus berduri." },
            { "teks": "Teratai", "prompt gambar": "Buatkan gambar bunga teratai di air." },
            { "teks": "Lumut", "prompt gambar": "Buatkan gambar lumut di batu basah." }
          ],
          "Jawaban": "Kaktus"
        }
      },
      {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Dalam ekosistem laut, terumbu karang menjadi tempat tinggal bagi ...",
        "Prompt Gambar": "Buatkan gambar terumbu karang yang indah dengan banyak ikan.",
        "Pilihan Jawaban": [
          { "teks": "Burung Elang", "prompt gambar": "Buatkan gambar burung elang." },
          { "teks": "Ikan-ikan kecil", "prompt gambar": "Buatkan gambar ikan nemo (badut)." },
          { "teks": "Harimau", "prompt gambar": "Buatkan gambar harimau." },
          { "teks": "Kambing", "prompt gambar": "Buatkan gambar kambing." }
        ],
        "Jawaban": "Ikan-ikan kecil",
        "proxy": {
          "Nomor": 27,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Ekosistem laut memiliki air yang rasanya ...",
          "Prompt Gambar": "Buatkan gambar air laut.",
          "Pilihan Jawaban": [
            { "teks": "Manis", "prompt gambar": "Buatkan gambar gula." },
            { "teks": "Tawar", "prompt gambar": "Buatkan gambar air minum." },
            { "teks": "Asin", "prompt gambar": "Buatkan gambar garam." },
            { "teks": "Pahit", "prompt gambar": "Buatkan gambar obat." }
          ],
          "Jawaban": "Asin"
        }
      },
      {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Perhatikan gambar jaring laba-laba. Interaksi laba-laba membuat jaring bertujuan untuk ...",
        "Prompt Gambar": "Buatkan gambar jaring laba-laba menangkap lalat.",
        "Pilihan Jawaban": [
          { "teks": "Tidur", "prompt gambar": "Buatkan gambar bantal." },
          { "teks": "Menangkap mangsa", "prompt gambar": "Buatkan gambar serangga terjebak di jaring." },
          { "teks": "Bermain", "prompt gambar": "Buatkan gambar mainan." },
          { "teks": "Berteduh", "prompt gambar": "Buatkan gambar payung." }
        ],
        "Jawaban": "Menangkap mangsa",
        "proxy": {
          "Nomor": 28,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Laba-laba adalah hewan pemangsa serangga lain. Dalam rantai makanan, laba-laba berperan sebagai ...",
          "Prompt Gambar": "Buatkan gambar laba-laba makan lalat.",
          "Pilihan Jawaban": [
            { "teks": "Produsen", "prompt gambar": "Buatkan gambar tumbuhan." },
            { "teks": "Konsumen", "prompt gambar": "Buatkan gambar hewan." },
            { "teks": "Pengurai", "prompt gambar": "Buatkan gambar cacing." },
            { "teks": "Abiotik", "prompt gambar": "Buatkan gambar batu." }
          ],
          "Jawaban": "Konsumen"
        }
      },
      {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kegiatan 'Tebang Pilih' di hutan artinya ...",
        "Prompt Gambar": "Buatkan gambar penebangan pohon yang sudah tua saja.",
        "Pilihan Jawaban": [
          { "teks": "Menebang semua pohon sampai habis", "prompt gambar": "Buatkan gambar hutan gundul." },
          { "teks": "Hanya menebang pohon yang sudah tua/besar dan menanam kembali", "prompt gambar": "Buatkan gambar menanam bibit pohon baru." },
          { "teks": "Membakar hutan", "prompt gambar": "Buatkan gambar api." },
          { "teks": "Menebang pohon kecil", "prompt gambar": "Buatkan gambar pohon kecil ditebang." }
        ],
        "Jawaban": "Hanya menebang pohon yang sudah tua/besar dan menanam kembali",
        "proxy": {
          "Nomor": 29,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Cara menjaga kelestarian hutan agar tidak gundul adalah dengan melakukan ...",
          "Prompt Gambar": "Buatkan gambar menanam pohon (reboisasi).",
          "Pilihan Jawaban": [
            { "teks": "Reboisasi (Penanaman kembali)", "prompt gambar": "Buatkan gambar orang menanam pohon." },
            { "teks": "Pembakaran", "prompt gambar": "Buatkan gambar api." },
            { "teks": "Penebangan liar", "prompt gambar": "Buatkan gambar gergaji mesin." },
            { "teks": "Membuang sampah", "prompt gambar": "Buatkan gambar sampah." }
          ],
          "Jawaban": "Reboisasi (Penanaman kembali)"
        }
      },
      {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Dalam ekosistem akuarium, ikan membutuhkan tumbuhan air (seperti Hydrilla) untuk ...",
        "Prompt Gambar": "Buatkan gambar akuarium dengan ikan dan tanaman.",
        "Pilihan Jawaban": [
          { "teks": "Mendapatkan oksigen dan tempat sembunyi", "prompt gambar": "Buatkan gambar gelembung oksigen dari tanaman." },
          { "teks": "Agar air menjadi keruh", "prompt gambar": "Buatkan gambar air kotor." },
          { "teks": "Menghabiskan air", "prompt gambar": "Buatkan gambar akuarium kering." },
          { "teks": "Mengotori akuarium", "prompt gambar": "Buatkan gambar sampah." }
        ],
        "Jawaban": "Mendapatkan oksigen dan tempat sembunyi",
        "proxy": {
          "Nomor": 30,
          "Jenis": "Pilihan Ganda",
          "Pertanyaan": "Jika di akuarium tidak ada tumbuhan air dan pompa udara, ikan bisa mati karena kekurangan ...",
          "Prompt Gambar": "Buatkan gambar ikan megap-megap di permukaan.",
          "Pilihan Jawaban": [
            { "teks": "Makanan", "prompt gambar": "Buatkan gambar pelet ikan." },
            { "teks": "Oksigen", "prompt gambar": "Buatkan gambar O2." },
            { "teks": "Teman", "prompt gambar": "Buatkan gambar ikan lain." },
            { "teks": "Mainan", "prompt gambar": "Buatkan gambar mainan." }
          ],
          "Jawaban": "Oksigen"
        }
      },
      {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Batu, tanah, dan air adalah contoh komponen Biotik.",
        "Prompt Gambar": "Buatkan gambar batu dan tanah.",
        "Jawaban": "Salah",
        "proxy": {
          "Nomor": 31,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Batu, tanah, dan air adalah benda mati (Abiotik).",
          "Prompt Gambar": "Buatkan gambar pemandangan tanpa hewan/tumbuhan.",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Tumbuhan berperan sebagai Produsen dalam ekosistem.",
        "Prompt Gambar": "Buatkan gambar pohon apel berbuah.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 32,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Hewan karnivora berperan sebagai Produsen.",
          "Prompt Gambar": "Buatkan gambar singa.",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Hubungan Kupu-kupu dengan Bunga adalah Simbiosis Parasitisme.",
        "Prompt Gambar": "Buatkan gambar kupu-kupu di bunga.",
        "Jawaban": "Salah",
        "proxy": {
          "Nomor": 33,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Hubungan Kupu-kupu dengan Bunga adalah Simbiosis Mutualisme (Saling menguntungkan).",
          "Prompt Gambar": "Buatkan gambar kupu-kupu dan bunga tersenyum.",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Benalu yang menempel di pohon inang adalah contoh Simbiosis Parasitisme.",
        "Prompt Gambar": "Buatkan gambar benalu merusak pohon.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 34,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Benalu menguntungkan pohon yang ditumpanginya.",
          "Prompt Gambar": "Buatkan gambar pohon subur dengan benalu (salah).",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Ikan Remora dan Ikan Hiu memiliki hubungan Simbiosis Komensalisme.",
        "Prompt Gambar": "Buatkan gambar ikan remora menempel di hiu.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 35,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Pada simbiosis komensalisme, satu pihak untung dan pihak lain dirugikan.",
          "Prompt Gambar": "Buatkan gambar satu senang satu sedih.",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Sawah adalah contoh Ekosistem Alami.",
        "Prompt Gambar": "Buatkan gambar petani menanam padi.",
        "Jawaban": "Salah",
        "proxy": {
          "Nomor": 36,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Sawah adalah contoh Ekosistem Buatan (dibuat manusia).",
          "Prompt Gambar": "Buatkan gambar sawah terasering.",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Dekomposer (pengurai) bertugas memakan sisa makhluk hidup yang sudah mati.",
        "Prompt Gambar": "Buatkan gambar bakteri dan jamur mengurai daun.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 37,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Jamur dan Bakteri adalah contoh Konsumen tingkat 1.",
          "Prompt Gambar": "Buatkan gambar jamur makan rumput (salah).",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Menebang pohon secara liar dapat menyebabkan banjir.",
        "Prompt Gambar": "Buatkan gambar banjir.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 38,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Hutan gundul dapat menyerap air hujan dengan baik.",
          "Prompt Gambar": "Buatkan gambar air mengalir deras di tanah gundul.",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Manusia adalah komponen Abiotik.",
        "Prompt Gambar": "Buatkan gambar manusia.",
        "Jawaban": "Salah",
        "proxy": {
          "Nomor": 39,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Manusia adalah komponen Biotik (Makhluk Hidup).",
          "Prompt Gambar": "Buatkan gambar anak sekolah.",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Ekosistem laut memiliki kadar garam yang tinggi (asin).",
        "Prompt Gambar": "Buatkan gambar laut.",
        "Jawaban": "Benar",
        "proxy": {
          "Nomor": 40,
          "Jenis": "Pertanyaan Benar atau Salah",
          "Pertanyaan": "Sungai adalah ekosistem air asin.",
          "Prompt Gambar": "Buatkan gambar sungai tawar.",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 41,
        "Jenis": "Esai",
        "Pertanyaan": "Apa yang dimaksud dengan Ekosistem?",
        "Prompt Gambar": "Buatkan gambar interaksi lingkungan.",
        "Jawaban": "Hubungan timbal balik antara makhluk hidup dengan lingkungannya (benda mati).",
        "proxy": {
          "Nomor": 41,
          "Jenis": "Esai",
          "Pertanyaan": "Sebutkan 2 komponen penyusun ekosistem!",
          "Prompt Gambar": "Buatkan gambar komponen biotik dan abiotik.",
          "Jawaban": "Komponen Biotik (makhluk hidup) dan Komponen Abiotik (benda mati)."
        }
      },
      {
        "Nomor": 42,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 3 contoh komponen Biotik di kebun sekolah!",
        "Prompt Gambar": "Buatkan gambar kebun sekolah.",
        "Jawaban": "Semut, Kupu-kupu, Rumput, Bunga, Cacing, Siswa (Pilih 3).",
        "proxy": {
          "Nomor": 42,
          "Jenis": "Esai",
          "Pertanyaan": "Sebutkan 3 contoh komponen Abiotik di kebun sekolah!",
          "Prompt Gambar": "Buatkan gambar batu, tanah, cahaya.",
          "Jawaban": "Batu, Tanah, Udara, Cahaya Matahari, Air."
        }
      },
      {
        "Nomor": 43,
        "Jenis": "Esai",
        "Pertanyaan": "Jelaskan apa itu Simbiosis Mutualisme dan berikan 1 contoh!",
        "Prompt Gambar": "Buatkan gambar lebah dan bunga.",
        "Jawaban": "Hubungan yang saling menguntungkan kedua belah pihak. Contoh: Lebah dan Bunga / Burung Jalak dan Kerbau.",
        "proxy": {
          "Nomor": 43,
          "Jenis": "Esai",
          "Pertanyaan": "Jelaskan apa itu Simbiosis Parasitisme dan berikan 1 contoh!",
          "Prompt Gambar": "Buatkan gambar nyamuk.",
          "Jawaban": "Hubungan yang menguntungkan satu pihak dan merugikan pihak lain. Contoh: Nyamuk dan Manusia / Benalu dan Pohon Inang."
        }
      },
      {
        "Nomor": 44,
        "Jenis": "Esai",
        "Pertanyaan": "Apa peran Produsen dalam ekosistem?",
        "Prompt Gambar": "Buatkan gambar tumbuhan hijau.",
        "Jawaban": "Menghasilkan makanan sendiri (melalui fotosintesis) dan menjadi sumber makanan bagi makhluk hidup lain.",
        "proxy": {
          "Nomor": 44,
          "Jenis": "Esai",
          "Pertanyaan": "Siapakah yang berperan sebagai Produsen di daratan?",
          "Prompt Gambar": "Buatkan gambar hutan.",
          "Jawaban": "Tumbuhan hijau / Pohon / Rumput."
        }
      },
      {
        "Nomor": 45,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan perbedaan Ekosistem Alami dan Ekosistem Buatan!",
        "Prompt Gambar": "Buatkan gambar Hutan (alami) vs Sawah (buatan).",
        "Jawaban": "Ekosistem Alami terbentuk secara alami oleh alam (contoh: hutan, laut). Ekosistem Buatan dibuat oleh manusia (contoh: sawah, waduk, akuarium).",
        "proxy": {
          "Nomor": 45,
          "Jenis": "Esai",
          "Pertanyaan": "Berikan 2 contoh ekosistem buatan!",
          "Prompt Gambar": "Buatkan gambar akuarium dan kolam.",
          "Jawaban": "Sawah, Waduk, Kolam Ikan, Akuarium, Kebun Binatang."
        }
      },
      {
        "Nomor": 46,
        "Jenis": "Esai",
        "Pertanyaan": "Mengapa Tali Putri merugikan tanaman inangnya?",
        "Prompt Gambar": "Buatkan gambar tali putri melilit tanaman.",
        "Jawaban": "Karena Tali Putri mengambil sari makanan dari tanaman inangnya sehingga tanaman inang menjadi kurus atau mati.",
        "proxy": {
          "Nomor": 46,
          "Jenis": "Esai",
          "Pertanyaan": "Termasuk simbiosis apakah hubungan Tali Putri dan Inangnya?",
          "Prompt Gambar": "Buatkan gambar simbol parasitisme.",
          "Jawaban": "Simbiosis Parasitisme."
        }
      },
      {
        "Nomor": 47,
        "Jenis": "Esai",
        "Pertanyaan": "Apa fungsi Cahaya Matahari bagi ekosistem?",
        "Prompt Gambar": "Buatkan gambar matahari bersinar.",
        "Jawaban": "Membantu tumbuhan berfotosintesis, menghangatkan bumi, dan memberikan penerangan.",
        "proxy": {
          "Nomor": 47,
          "Jenis": "Esai",
          "Pertanyaan": "Apa fungsi Air bagi makhluk hidup?",
          "Prompt Gambar": "Buatkan gambar hewan minum.",
          "Jawaban": "Untuk minum, tempat hidup hewan air, dan melarutkan zat makanan."
        }
      },
      {
        "Nomor": 48,
        "Jenis": "Esai",
        "Pertanyaan": "Apa yang dimaksud dengan Dekomposer?",
        "Prompt Gambar": "Buatkan gambar jamur.",
        "Jawaban": "Organisme pengurai yang bertugas menguraikan sisa-sisa makhluk hidup yang sudah mati menjadi zat hara (tanah).",
        "proxy": {
          "Nomor": 48,
          "Jenis": "Esai",
          "Pertanyaan": "Sebutkan contoh hewan Detritivor (pemakan sampah organik)!",
          "Prompt Gambar": "Buatkan gambar cacing dan lipan.",
          "Jawaban": "Cacing tanah, Kutu kayu, Kumbang tanduk."
        }
      },
      {
        "Nomor": 49,
        "Jenis": "Esai",
        "Pertanyaan": "Jelaskan hubungan Simbiosis Komensalisme pada Ikan Hiu dan Ikan Remora!",
        "Prompt Gambar": "Buatkan gambar hiu dan remora.",
        "Jawaban": "Ikan Remora untung karena mendapat sisa makanan dan perlindungan, sedangkan Ikan Hiu tidak untung dan tidak rugi (biasa saja).",
        "proxy": {
          "Nomor": 49,
          "Jenis": "Esai",
          "Pertanyaan": "Jelaskan hubungan Simbiosis Komensalisme pada Anggrek dan Pohon Besar!",
          "Prompt Gambar": "Buatkan gambar anggrek di pohon.",
          "Jawaban": "Anggrek untung karena mendapat tempat tinggi untuk cahaya matahari, Pohon Besar tidak dirugikan (tidak diambil makanannya)."
        }
      },
      {
        "Nomor": 50,
        "Jenis": "Esai",
        "Pertanyaan": "Bagaimana cara kita menjaga keseimbangan ekosistem sungai?",
        "Prompt Gambar": "Buatkan gambar sungai bersih.",
        "Jawaban": "Tidak membuang sampah ke sungai, tidak membuang limbah pabrik, dan menanam pohon di pinggir sungai.",
        "proxy": {
          "Nomor": 50,
          "Jenis": "Esai",
          "Pertanyaan": "Apa akibatnya jika kita membuang sampah plastik sembarangan ke sungai?",
          "Prompt Gambar": "Buatkan gambar banjir.",
          "Jawaban": "Sungai tercemar, ikan mati, dan menyebabkan banjir."
        }
      }
    ]
  },
  // --- IPAS ---
{
  "Bab": "4 - Berkenalan dengan Energi",
  "Total_Soal": 50,
  "Daftar_Soal": [
    {
      "Nomor": 1,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Energi adalah kemampuan untuk melakukan ...",
      "Prompt Gambar": "Buatkan gambar orang sedang mendorong gerobak atau berlari.",
      "Pilihan Jawaban": [
        {
          "teks": "Tidur",
          "prompt gambar": "Buatkan gambar orang tidur."
        },
        {
          "teks": "Diam",
          "prompt gambar": "Buatkan gambar patung."
        },
        {
          "teks": "Kegiatan atau Kerja",
          "prompt gambar": "Buatkan gambar orang bekerja mengangkat barang."
        },
        {
          "teks": "Mimpi",
          "prompt gambar": "Buatkan gambar awan mimpi."
        }
      ],
      "Jawaban": "Kegiatan atau Kerja",
      "proxy": {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kata lain dari energi adalah ...",
        "Prompt Gambar": "Buatkan gambar simbol petir atau otot lengan.",
        "Pilihan Jawaban": [
          {
            "teks": "Tenaga",
            "prompt gambar": "Buatkan gambar orang kuat."
          },
          {
            "teks": "Lemas",
            "prompt gambar": "Buatkan gambar orang lemas."
          },
          {
            "teks": "Cahaya",
            "prompt gambar": "Buatkan gambar lampu."
          },
          {
            "teks": "Benda",
            "prompt gambar": "Buatkan gambar kotak."
          }
        ],
        "Jawaban": "Tenaga"
      }
    },
    {
      "Nomor": 2,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Matahari adalah sumber energi terbesar di bumi. Energi apa yang dihasilkan matahari?",
      "Prompt Gambar": "Buatkan gambar matahari bersinar terik.",
      "Pilihan Jawaban": [
        {
          "teks": "Bunyi dan Gerak",
          "prompt gambar": "Buatkan gambar speaker dan roda."
        },
        {
          "teks": "Panas dan Cahaya",
          "prompt gambar": "Buatkan gambar termometer panas dan lampu."
        },
        {
          "teks": "Listrik dan Kimia",
          "prompt gambar": "Buatkan gambar baterai."
        },
        {
          "teks": "Air dan Udara",
          "prompt gambar": "Buatkan gambar air dan angin."
        }
      ],
      "Jawaban": "Panas dan Cahaya",
      "proxy": {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Saat kita berjemur di pagi hari, tubuh terasa hangat karena matahari mengeluarkan energi ...",
        "Prompt Gambar": "Buatkan gambar orang berjemur.",
        "Pilihan Jawaban": [
          {
            "teks": "Listrik",
            "prompt gambar": "Buatkan gambar kabel."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar lonceng."
          },
          {
            "teks": "Panas (Kalor)",
            "prompt gambar": "Buatkan gambar api unggun."
          },
          {
            "teks": "Gerak",
            "prompt gambar": "Buatkan gambar kipas angin."
          }
        ],
        "Jawaban": "Panas (Kalor)"
      }
    },
    {
      "Nomor": 3,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Ibu menjemur pakaian basah di halaman. Energi apa yang membantu pakaian menjadi kering?",
      "Prompt Gambar": "Buatkan gambar pakaian dijemur di bawah matahari.",
      "Pilihan Jawaban": [
        {
          "teks": "Energi Bunyi",
          "prompt gambar": "Buatkan gambar radio."
        },
        {
          "teks": "Energi Listrik",
          "prompt gambar": "Buatkan gambar setrika listrik."
        },
        {
          "teks": "Energi Panas Matahari",
          "prompt gambar": "Buatkan gambar matahari."
        },
        {
          "teks": "Energi Kimia",
          "prompt gambar": "Buatkan gambar makanan."
        }
      ],
      "Jawaban": "Energi Panas Matahari",
      "proxy": {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Petani garam memanfaatkan panas matahari untuk ...",
        "Prompt Gambar": "Buatkan gambar tambak garam.",
        "Pilihan Jawaban": [
          {
            "teks": "Menguapkan air laut",
            "prompt gambar": "Buatkan gambar air menguap."
          },
          {
            "teks": "Mendinginkan air",
            "prompt gambar": "Buatkan gambar es batu."
          },
          {
            "teks": "Menggerakkan kincir",
            "prompt gambar": "Buatkan gambar kincir angin."
          },
          {
            "teks": "Menghidupkan lampu",
            "prompt gambar": "Buatkan gambar lampu."
          }
        ],
        "Jawaban": "Menguapkan air laut"
      }
    },
    {
      "Nomor": 4,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Lampu di rumah kita bisa menyala karena adanya energi ...",
      "Prompt Gambar": "Buatkan gambar lampu menyala terang.",
      "Pilihan Jawaban": [
        {
          "teks": "Gerak",
          "prompt gambar": "Buatkan gambar roda berputar."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar speaker."
        },
        {
          "teks": "Listrik",
          "prompt gambar": "Buatkan gambar kabel dan colokan."
        },
        {
          "teks": "Otot",
          "prompt gambar": "Buatkan gambar tangan mengangkat beban."
        }
      ],
      "Jawaban": "Listrik",
      "proxy": {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Benda-benda seperti Televisi, Kulkas, dan Komputer membutuhkan energi apa untuk menyala?",
        "Prompt Gambar": "Buatkan gambar alat elektronik rumah tangga.",
        "Pilihan Jawaban": [
          {
            "teks": "Energi Angin",
            "prompt gambar": "Buatkan gambar kincir angin."
          },
          {
            "teks": "Energi Listrik",
            "prompt gambar": "Buatkan gambar petir/listrik."
          },
          {
            "teks": "Energi Air",
            "prompt gambar": "Buatkan gambar air terjun."
          },
          {
            "teks": "Energi Otot",
            "prompt gambar": "Buatkan gambar orang mendorong."
          }
        ],
        "Jawaban": "Energi Listrik"
      }
    },
    {
      "Nomor": 5,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Kipas angin yang menyala mengubah energi listrik menjadi energi ...",
      "Prompt Gambar": "Buatkan gambar kipas angin berputar.",
      "Pilihan Jawaban": [
        {
          "teks": "Panas",
          "prompt gambar": "Buatkan gambar api."
        },
        {
          "teks": "Gerak",
          "prompt gambar": "Buatkan gambar baling-baling berputar."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar not balok."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar baterai."
        }
      ],
      "Jawaban": "Gerak",
      "proxy": {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Blender dan Mixer di dapur bisa menghaluskan makanan karena menghasilkan energi ...",
        "Prompt Gambar": "Buatkan gambar blender sedang menyala.",
        "Pilihan Jawaban": [
          {
            "teks": "Gerak (Kinetik)",
            "prompt gambar": "Buatkan gambar pisau blender berputar."
          },
          {
            "teks": "Cahaya",
            "prompt gambar": "Buatkan gambar lampu senter."
          },
          {
            "teks": "Dingin",
            "prompt gambar": "Buatkan gambar kulkas."
          },
          {
            "teks": "Kimia",
            "prompt gambar": "Buatkan gambar arang."
          }
        ],
        "Jawaban": "Gerak (Kinetik)"
      }
    },
    {
      "Nomor": 6,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Manusia mendapatkan energi untuk beraktivitas dari ...",
      "Prompt Gambar": "Buatkan gambar anak sedang makan nasi.",
      "Pilihan Jawaban": [
        {
          "teks": "Bensin",
          "prompt gambar": "Buatkan gambar pom bensin."
        },
        {
          "teks": "Baterai",
          "prompt gambar": "Buatkan gambar baterai."
        },
        {
          "teks": "Makanan",
          "prompt gambar": "Buatkan gambar piring berisi makanan."
        },
        {
          "teks": "Listrik",
          "prompt gambar": "Buatkan gambar stop kontak."
        }
      ],
      "Jawaban": "Makanan",
      "proxy": {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Energi yang tersimpan di dalam makanan disebut energi ...",
        "Prompt Gambar": "Buatkan gambar roti dan buah.",
        "Pilihan Jawaban": [
          {
            "teks": "Listrik",
            "prompt gambar": "Buatkan gambar listrik."
          },
          {
            "teks": "Gerak",
            "prompt gambar": "Buatkan gambar orang lari."
          },
          {
            "teks": "Kimia",
            "prompt gambar": "Buatkan gambar simbol kimia/molekul sederhana."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar gitar."
          }
        ],
        "Jawaban": "Kimia"
      }
    },
    {
      "Nomor": 7,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Gitar yang dipetik akan menghasilkan energi ...",
      "Prompt Gambar": "Buatkan gambar orang bermain gitar.",
      "Pilihan Jawaban": [
        {
          "teks": "Panas",
          "prompt gambar": "Buatkan gambar api."
        },
        {
          "teks": "Cahaya",
          "prompt gambar": "Buatkan gambar lampu."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar not musik."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar makanan."
        }
      ],
      "Jawaban": "Bunyi",
      "proxy": {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Alat musik seperti drum dan pianika menghasilkan energi ...",
        "Prompt Gambar": "Buatkan gambar drum.",
        "Pilihan Jawaban": [
          {
            "teks": "Cahaya",
            "prompt gambar": "Buatkan gambar senter."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar telinga mendengar."
          },
          {
            "teks": "Panas",
            "prompt gambar": "Buatkan gambar setrika."
          },
          {
            "teks": "Listrik",
            "prompt gambar": "Buatkan gambar kabel."
          }
        ],
        "Jawaban": "Bunyi"
      }
    },
    {
      "Nomor": 8,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Bahan bakar kendaraan bermotor seperti bensin dan solar mengandung energi ...",
      "Prompt Gambar": "Buatkan gambar mobil sedang mengisi bensin.",
      "Pilihan Jawaban": [
        {
          "teks": "Listrik",
          "prompt gambar": "Buatkan gambar petir."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar jerigen bensin."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar klakson."
        },
        {
          "teks": "Otot",
          "prompt gambar": "Buatkan gambar otot."
        }
      ],
      "Jawaban": "Kimia",
      "proxy": {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kayu bakar dan gas elpiji yang digunakan untuk memasak mengandung energi ...",
        "Prompt Gambar": "Buatkan gambar tabung gas elpiji dan kayu bakar.",
        "Pilihan Jawaban": [
          {
            "teks": "Gerak",
            "prompt gambar": "Buatkan gambar roda."
          },
          {
            "teks": "Kimia",
            "prompt gambar": "Buatkan gambar api dari kayu."
          },
          {
            "teks": "Listrik",
            "prompt gambar": "Buatkan gambar kabel."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar radio."
          }
        ],
        "Jawaban": "Kimia"
      }
    },
    {
      "Nomor": 9,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Benda pada gambar (Baterai) berguna untuk menyimpan energi dalam bentuk ...",
      "Prompt Gambar": "Buatkan gambar batu baterai.",
      "Pilihan Jawaban": [
        {
          "teks": "Energi Gerak",
          "prompt gambar": "Buatkan gambar mobil mainan."
        },
        {
          "teks": "Energi Kimia",
          "prompt gambar": "Buatkan gambar baterai."
        },
        {
          "teks": "Energi Bunyi",
          "prompt gambar": "Buatkan gambar speaker."
        },
        {
          "teks": "Energi Cahaya",
          "prompt gambar": "Buatkan gambar lampu."
        }
      ],
      "Jawaban": "Energi Kimia",
      "proxy": {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Saat baterai dipasang pada senter, energi kimia berubah menjadi energi ...",
        "Prompt Gambar": "Buatkan gambar senter menyala.",
        "Pilihan Jawaban": [
          {
            "teks": "Listrik lalu Cahaya",
            "prompt gambar": "Buatkan gambar cahaya terang."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar suara."
          },
          {
            "teks": "Gerak",
            "prompt gambar": "Buatkan gambar baling-baling."
          },
          {
            "teks": "Dingin",
            "prompt gambar": "Buatkan gambar es."
          }
        ],
        "Jawaban": "Listrik lalu Cahaya"
      }
    },
    {
      "Nomor": 10,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Angin adalah udara yang bergerak. Energi angin dapat dimanfaatkan untuk menggerakkan ...",
      "Prompt Gambar": "Buatkan gambar kincir angin.",
      "Pilihan Jawaban": [
        {
          "teks": "Televisi",
          "prompt gambar": "Buatkan gambar TV."
        },
        {
          "teks": "Kincir Angin / Kapal Layar",
          "prompt gambar": "Buatkan gambar kapal layar di laut."
        },
        {
          "teks": "Mobil",
          "prompt gambar": "Buatkan gambar mobil."
        },
        {
          "teks": "Kompor",
          "prompt gambar": "Buatkan gambar kompor."
        }
      ],
      "Jawaban": "Kincir Angin / Kapal Layar",
      "proxy": {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Pembangkit Listrik Tenaga Bayu (PLTB) menggunakan sumber energi dari ...",
        "Prompt Gambar": "Buatkan gambar turbin angin raksasa.",
        "Pilihan Jawaban": [
          {
            "teks": "Air",
            "prompt gambar": "Buatkan gambar air sungai."
          },
          {
            "teks": "Matahari",
            "prompt gambar": "Buatkan gambar matahari."
          },
          {
            "teks": "Angin",
            "prompt gambar": "Buatkan gambar angin bertiup."
          },
          {
            "teks": "Batu bara",
            "prompt gambar": "Buatkan gambar batu hitam."
          }
        ],
        "Jawaban": "Angin"
      }
    },
    {
      "Nomor": 11,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Aliran air sungai yang deras dapat dimanfaatkan untuk memutar turbin. Ini adalah prinsip kerja dari ...",
      "Prompt Gambar": "Buatkan gambar bendungan PLTA.",
      "Pilihan Jawaban": [
        {
          "teks": "PLTS (Tenaga Surya)",
          "prompt gambar": "Buatkan gambar panel surya."
        },
        {
          "teks": "PLTA (Tenaga Air)",
          "prompt gambar": "Buatkan gambar air terjun dan turbin."
        },
        {
          "teks": "PLTU (Tenaga Uap)",
          "prompt gambar": "Buatkan gambar asap uap."
        },
        {
          "teks": "PLTB (Tenaga Bayu)",
          "prompt gambar": "Buatkan gambar kincir angin."
        }
      ],
      "Jawaban": "PLTA (Tenaga Air)",
      "proxy": {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Energi air (hidro) termasuk energi yang ...",
        "Prompt Gambar": "Buatkan gambar sungai mengalir.",
        "Pilihan Jawaban": [
          {
            "teks": "Cepat habis",
            "prompt gambar": "Buatkan gambar tangki kosong."
          },
          {
            "teks": "Mahal",
            "prompt gambar": "Buatkan gambar uang."
          },
          {
            "teks": "Terbarukan (tidak cepat habis)",
            "prompt gambar": "Buatkan gambar siklus air."
          },
          {
            "teks": "Berbahaya",
            "prompt gambar": "Buatkan gambar tanda bahaya."
          }
        ],
        "Jawaban": "Terbarukan (tidak cepat habis)"
      }
    },
    {
      "Nomor": 12,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Bahan bakar bio (biofuel) yang berasal dari tumbuhan disebut ...",
      "Prompt Gambar": "Buatkan gambar biji jarak atau kelapa sawit.",
      "Pilihan Jawaban": [
        {
          "teks": "Bensin",
          "prompt gambar": "Buatkan gambar bensin."
        },
        {
          "teks": "Bahan bakar nabati",
          "prompt gambar": "Buatkan gambar tumbuhan penghasil minyak."
        },
        {
          "teks": "Biogas",
          "prompt gambar": "Buatkan gambar kotoran sapi."
        },
        {
          "teks": "Batu bara",
          "prompt gambar": "Buatkan gambar batu bara."
        }
      ],
      "Jawaban": "Bahan bakar nabati",
      "proxy": {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Kotoran hewan ternak dapat diolah menjadi bahan bakar gas untuk memasak yang disebut ...",
        "Prompt Gambar": "Buatkan gambar instalasi biogas sederhana.",
        "Pilihan Jawaban": [
          {
            "teks": "Biogas",
            "prompt gambar": "Buatkan gambar kompor gas menyala."
          },
          {
            "teks": "Solar",
            "prompt gambar": "Buatkan gambar truk."
          },
          {
            "teks": "Bensin",
            "prompt gambar": "Buatkan gambar motor."
          },
          {
            "teks": "Arang",
            "prompt gambar": "Buatkan gambar arang hitam."
          }
        ],
        "Jawaban": "Biogas"
      }
    },
    {
      "Nomor": 13,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Panel surya (solar cell) adalah alat untuk mengubah energi ... menjadi energi listrik.",
      "Prompt Gambar": "Buatkan gambar panel surya di atap rumah.",
      "Pilihan Jawaban": [
        {
          "teks": "Angin",
          "prompt gambar": "Buatkan gambar angin."
        },
        {
          "teks": "Air",
          "prompt gambar": "Buatkan gambar air."
        },
        {
          "teks": "Cahaya Matahari",
          "prompt gambar": "Buatkan gambar matahari bersinar ke panel."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar suara."
        }
      ],
      "Jawaban": "Cahaya Matahari",
      "proxy": {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "PLTS adalah singkatan dari Pembangkit Listrik Tenaga ...",
        "Prompt Gambar": "Buatkan gambar matahari.",
        "Pilihan Jawaban": [
          {
            "teks": "Sampah",
            "prompt gambar": "Buatkan gambar sampah."
          },
          {
            "teks": "Surya (Matahari)",
            "prompt gambar": "Buatkan gambar matahari."
          },
          {
            "teks": "Sungai",
            "prompt gambar": "Buatkan gambar sungai."
          },
          {
            "teks": "Sapi",
            "prompt gambar": "Buatkan gambar sapi."
          }
        ],
        "Jawaban": "Surya (Matahari)"
      }
    },
    {
      "Nomor": 14,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Manakah di bawah ini yang termasuk sumber energi yang TIDAK dapat diperbarui (bisa habis)?",
      "Prompt Gambar": "Buatkan gambar pengeboran minyak bumi.",
      "Pilihan Jawaban": [
        {
          "teks": "Matahari",
          "prompt gambar": "Buatkan gambar matahari."
        },
        {
          "teks": "Angin",
          "prompt gambar": "Buatkan gambar angin."
        },
        {
          "teks": "Minyak Bumi (Bensin/Solar)",
          "prompt gambar": "Buatkan gambar drum minyak."
        },
        {
          "teks": "Air",
          "prompt gambar": "Buatkan gambar air terjun."
        }
      ],
      "Jawaban": "Minyak Bumi (Bensin/Solar)",
      "proxy": {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Agar minyak bumi tidak cepat habis, kita harus ...",
        "Prompt Gambar": "Buatkan gambar orang naik sepeda/jalan kaki.",
        "Pilihan Jawaban": [
          {
            "teks": "Menggunakan kendaraan pribadi setiap saat",
            "prompt gambar": "Buatkan gambar macet mobil."
          },
          {
            "teks": "Menghemat bahan bakar dan menggunakan energi alternatif",
            "prompt gambar": "Buatkan gambar energi matahari/angin."
          },
          {
            "teks": "Membuang-buang bensin",
            "prompt gambar": "Buatkan gambar bensin tumpah."
          },
          {
            "teks": "Membeli mobil yang banyak",
            "prompt gambar": "Buatkan gambar garasi penuh mobil."
          }
        ],
        "Jawaban": "Menghemat bahan bakar dan menggunakan energi alternatif"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Panas bumi juga bisa menjadi sumber energi listrik. Pembangkit listrik ini disebut ...",
      "Prompt Gambar": "Buatkan gambar uap panas keluar dari tanah.",
      "Pilihan Jawaban": [
        {
          "teks": "PLTA",
          "prompt gambar": "Buatkan gambar air."
        },
        {
          "teks": "PLTP (Panas Bumi)",
          "prompt gambar": "Buatkan gambar gunung berapi/uap panas."
        },
        {
          "teks": "PLTS",
          "prompt gambar": "Buatkan gambar matahari."
        },
        {
          "teks": "PLTB",
          "prompt gambar": "Buatkan gambar angin."
        }
      ],
      "Jawaban": "PLTP (Panas Bumi)",
      "proxy": {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Energi Geothermal berasal dari ...",
        "Prompt Gambar": "Buatkan gambar inti bumi yang panas.",
        "Pilihan Jawaban": [
          {
            "teks": "Panas Matahari",
            "prompt gambar": "Buatkan gambar matahari."
          },
          {
            "teks": "Panas dari dalam perut bumi",
            "prompt gambar": "Buatkan gambar magma/bumi."
          },
          {
            "teks": "Panas Api Unggun",
            "prompt gambar": "Buatkan gambar api."
          },
          {
            "teks": "Panas Lilin",
            "prompt gambar": "Buatkan gambar lilin."
          }
        ],
        "Jawaban": "Panas dari dalam perut bumi"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Mengapa kita tidak boleh membuang-buang makanan?",
      "Prompt Gambar": "Buatkan gambar makanan sisa di tempat sampah.",
      "Pilihan Jawaban": [
        {
          "teks": "Karena makanan itu murah",
          "prompt gambar": "Buatkan gambar uang koin."
        },
        {
          "teks": "Karena membuang makanan berarti membuang energi",
          "prompt gambar": "Buatkan gambar energi terbuang."
        },
        {
          "teks": "Karena makanan tidak enak",
          "prompt gambar": "Buatkan gambar makanan basi."
        },
        {
          "teks": "Karena makanan membuat sakit",
          "prompt gambar": "Buatkan gambar orang sakit perut."
        }
      ],
      "Jawaban": "Karena membuang makanan berarti membuang energi",
      "proxy": {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Sisa makanan yang membusuk di tempat sampah akan menghasilkan gas yang berbahaya bagi lingkungan, yaitu ...",
        "Prompt Gambar": "Buatkan gambar tumpukan sampah.",
        "Pilihan Jawaban": [
          {
            "teks": "Oksigen",
            "prompt gambar": "Buatkan gambar pohon."
          },
          {
            "teks": "Gas Metana",
            "prompt gambar": "Buatkan gambar gas menguap dari sampah."
          },
          {
            "teks": "Gas Elpiji",
            "prompt gambar": "Buatkan gambar tabung gas."
          },
          {
            "teks": "Uap Air",
            "prompt gambar": "Buatkan gambar awan."
          }
        ],
        "Jawaban": "Gas Metana"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Salah satu cara menghemat air di rumah adalah ...",
      "Prompt Gambar": "Buatkan gambar keran air.",
      "Pilihan Jawaban": [
        {
          "teks": "Membiarkan keran menyala saat gosok gigi",
          "prompt gambar": "Buatkan gambar air terbuang percuma."
        },
        {
          "teks": "Mandi berlama-lama",
          "prompt gambar": "Buatkan gambar anak main air di kamar mandi."
        },
        {
          "teks": "Menutup keran rapat setelah digunakan",
          "prompt gambar": "Buatkan gambar tangan menutup keran."
        },
        {
          "teks": "Menyiram halaman dengan air bersih berlebihan",
          "prompt gambar": "Buatkan gambar halaman banjir."
        }
      ],
      "Jawaban": "Menutup keran rapat setelah digunakan",
      "proxy": {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Jika melihat keran air di sekolah menetes/bocor, sikap yang baik adalah ...",
        "Prompt Gambar": "Buatkan gambar keran bocor.",
        "Pilihan Jawaban": [
          {
            "teks": "Membiarkannya",
            "prompt gambar": "Buatkan gambar orang cuek."
          },
          {
            "teks": "Menutupnya sampai rapat atau lapor guru",
            "prompt gambar": "Buatkan gambar anak menutup keran."
          },
          {
            "teks": "Memainkannya",
            "prompt gambar": "Buatkan gambar main air."
          },
          {
            "teks": "Merusaknya",
            "prompt gambar": "Buatkan gambar keran rusak."
          }
        ],
        "Jawaban": "Menutupnya sampai rapat atau lapor guru"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Cara menghemat listrik di siang hari adalah ...",
      "Prompt Gambar": "Buatkan gambar ruangan terang oleh matahari.",
      "Pilihan Jawaban": [
        {
          "teks": "Menyalakan semua lampu",
          "prompt gambar": "Buatkan gambar lampu menyala di siang hari."
        },
        {
          "teks": "Membuka jendela agar cahaya matahari masuk dan mematikan lampu",
          "prompt gambar": "Buatkan gambar jendela terbuka terang."
        },
        {
          "teks": "Menutup gorden dan menyalakan lampu",
          "prompt gambar": "Buatkan gambar ruangan gelap berlampu."
        },
        {
          "teks": "Menyalakan senter",
          "prompt gambar": "Buatkan gambar senter."
        }
      ],
      "Jawaban": "Membuka jendela agar cahaya matahari masuk dan mematikan lampu",
      "proxy": {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Alat elektronik yang harus dimatikan jika tidak ditonton adalah ...",
        "Prompt Gambar": "Buatkan gambar TV menyala tanpa penonton.",
        "Pilihan Jawaban": [
          {
            "teks": "Kulkas",
            "prompt gambar": "Buatkan gambar kulkas."
          },
          {
            "teks": "Televisi",
            "prompt gambar": "Buatkan gambar televisi."
          },
          {
            "teks": "Jam Dinding",
            "prompt gambar": "Buatkan gambar jam."
          },
          {
            "teks": "Pintu",
            "prompt gambar": "Buatkan gambar pintu."
          }
        ],
        "Jawaban": "Televisi"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Sumber energi alternatif adalah sumber energi yang ...",
      "Prompt Gambar": "Buatkan gambar kincir angin dan panel surya.",
      "Pilihan Jawaban": [
        {
          "teks": "Cepat habis dan kotor",
          "prompt gambar": "Buatkan gambar asap hitam."
        },
        {
          "teks": "Dapat diperbarui dan ramah lingkungan",
          "prompt gambar": "Buatkan gambar alam hijau bersih."
        },
        {
          "teks": "Mahal dan sudah ada",
          "prompt gambar": "Buatkan gambar uang."
        },
        {
          "teks": "Berasal dari fosil",
          "prompt gambar": "Buatkan gambar tulang dinosaurus."
        }
      ],
      "Jawaban": "Dapat diperbarui dan ramah lingkungan",
      "proxy": {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Manakah yang BUKAN sumber energi alternatif?",
        "Prompt Gambar": "Buatkan gambar Matahari, Angin, Batu Bara, Air.",
        "Pilihan Jawaban": [
          {
            "teks": "Matahari",
            "prompt gambar": "Buatkan gambar matahari."
          },
          {
            "teks": "Angin",
            "prompt gambar": "Buatkan gambar angin."
          },
          {
            "teks": "Batu Bara",
            "prompt gambar": "Buatkan gambar tumpukan batu bara."
          },
          {
            "teks": "Air",
            "prompt gambar": "Buatkan gambar air."
          }
        ],
        "Jawaban": "Batu Bara"
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Setrika listrik menghasilkan energi panas. Energi panas ini digunakan untuk ...",
      "Prompt Gambar": "Buatkan gambar setrika.",
      "Pilihan Jawaban": [
        {
          "teks": "Mendinginkan makanan",
          "prompt gambar": "Buatkan gambar kulkas."
        },
        {
          "teks": "Merapikan pakaian",
          "prompt gambar": "Buatkan gambar baju rapi."
        },
        {
          "teks": "Menerangi ruangan",
          "prompt gambar": "Buatkan gambar lampu."
        },
        {
          "teks": "Memutar musik",
          "prompt gambar": "Buatkan gambar radio."
        }
      ],
      "Jawaban": "Merapikan pakaian",
      "proxy": {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Alat rumah tangga yang mengubah energi listrik menjadi energi panas adalah ...",
        "Prompt Gambar": "Buatkan gambar Kipas Angin, Rice Cooker, TV, Radio.",
        "Pilihan Jawaban": [
          {
            "teks": "Kipas Angin",
            "prompt gambar": "Buatkan gambar kipas angin."
          },
          {
            "teks": "Rice Cooker (Penanak Nasi)",
            "prompt gambar": "Buatkan gambar rice cooker."
          },
          {
            "teks": "Televisi",
            "prompt gambar": "Buatkan gambar TV."
          },
          {
            "teks": "Radio",
            "prompt gambar": "Buatkan gambar radio."
          }
        ],
        "Jawaban": "Rice Cooker (Penanak Nasi)"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Energi yang membantu kita melihat benda-benda di sekitar adalah energi ...",
      "Prompt Gambar": "Buatkan gambar mata melihat benda.",
      "Pilihan Jawaban": [
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar telinga."
        },
        {
          "teks": "Gerak",
          "prompt gambar": "Buatkan gambar kaki."
        },
        {
          "teks": "Cahaya",
          "prompt gambar": "Buatkan gambar lampu/matahari."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar baterai."
        }
      ],
      "Jawaban": "Cahaya",
      "proxy": {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Jika tidak ada energi cahaya, maka keadaan akan menjadi ...",
        "Prompt Gambar": "Buatkan gambar ruangan gelap gulita.",
        "Pilihan Jawaban": [
          {
            "teks": "Gelap",
            "prompt gambar": "Buatkan gambar hitam."
          },
          {
            "teks": "Terang benderang",
            "prompt gambar": "Buatkan gambar siang hari."
          },
          {
            "teks": "Panas",
            "prompt gambar": "Buatkan gambar api."
          },
          {
            "teks": "Bising",
            "prompt gambar": "Buatkan gambar speaker."
          }
        ],
        "Jawaban": "Gelap"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Laut di Indonesia sangat luas. Gerakan air laut yang naik dan turun (pasang surut) bisa dijadikan sumber energi ...",
      "Prompt Gambar": "Buatkan gambar ombak laut.",
      "Pilihan Jawaban": [
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar zat kimia."
        },
        {
          "teks": "Listrik (Energi Pasang Surut)",
          "prompt gambar": "Buatkan gambar pembangkit listrik di laut."
        },
        {
          "teks": "Panas",
          "prompt gambar": "Buatkan gambar api."
        },
        {
          "teks": "Cahaya",
          "prompt gambar": "Buatkan gambar lampu."
        }
      ],
      "Jawaban": "Listrik (Energi Pasang Surut)",
      "proxy": {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Selain ombak, air terjun juga bisa menghasilkan listrik karena memiliki energi ...",
        "Prompt Gambar": "Buatkan gambar air terjun deras.",
        "Pilihan Jawaban": [
          {
            "teks": "Gerak (Kinetik)",
            "prompt gambar": "Buatkan gambar air bergerak deras."
          },
          {
            "teks": "Panas",
            "prompt gambar": "Buatkan gambar air mendidih."
          },
          {
            "teks": "Cahaya",
            "prompt gambar": "Buatkan gambar air bercahaya."
          },
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar suara gemuruh."
          }
        ],
        "Jawaban": "Gerak (Kinetik)"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Menggosok-gosokkan kedua telapak tangan akan menghasilkan energi ...",
      "Prompt Gambar": "Buatkan gambar tangan saling digosokkan.",
      "Pilihan Jawaban": [
        {
          "teks": "Dingin",
          "prompt gambar": "Buatkan gambar es."
        },
        {
          "teks": "Cahaya",
          "prompt gambar": "Buatkan gambar sinar."
        },
        {
          "teks": "Panas",
          "prompt gambar": "Buatkan gambar tangan menjadi hangat/merah."
        },
        {
          "teks": "Listrik",
          "prompt gambar": "Buatkan gambar setrum."
        }
      ],
      "Jawaban": "Panas",
      "proxy": {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Gesekan antara dua benda (seperti batu) bisa menghasilkan percikan api. Api adalah sumber energi ...",
        "Prompt Gambar": "Buatkan gambar api unggun.",
        "Pilihan Jawaban": [
          {
            "teks": "Bunyi",
            "prompt gambar": "Buatkan gambar speaker."
          },
          {
            "teks": "Panas dan Cahaya",
            "prompt gambar": "Buatkan gambar api panas dan terang."
          },
          {
            "teks": "Gerak",
            "prompt gambar": "Buatkan gambar roda."
          },
          {
            "teks": "Listrik",
            "prompt gambar": "Buatkan gambar kabel."
          }
        ],
        "Jawaban": "Panas dan Cahaya"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Sumber energi yang paling banyak digunakan untuk kendaraan saat ini adalah ...",
      "Prompt Gambar": "Buatkan gambar mobil dan motor di jalan raya.",
      "Pilihan Jawaban": [
        {
          "teks": "Air",
          "prompt gambar": "Buatkan gambar air."
        },
        {
          "teks": "Angin",
          "prompt gambar": "Buatkan gambar angin."
        },
        {
          "teks": "Bahan Bakar Minyak (BBM)",
          "prompt gambar": "Buatkan gambar SPBU."
        },
        {
          "teks": "Kayu Bakar",
          "prompt gambar": "Buatkan gambar kayu."
        }
      ],
      "Jawaban": "Bahan Bakar Minyak (BBM)",
      "proxy": {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Bensin dan Solar berasal dari pengolahan ...",
        "Prompt Gambar": "Buatkan gambar kilang minyak.",
        "Pilihan Jawaban": [
          {
            "teks": "Air Laut",
            "prompt gambar": "Buatkan gambar laut."
          },
          {
            "teks": "Minyak Bumi",
            "prompt gambar": "Buatkan gambar minyak bumi mentah."
          },
          {
            "teks": "Minyak Goreng",
            "prompt gambar": "Buatkan gambar minyak goreng."
          },
          {
            "teks": "Minyak Kayu Putih",
            "prompt gambar": "Buatkan gambar daun kayu putih."
          }
        ],
        "Jawaban": "Minyak Bumi"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Untuk menyalakan radio, kita memerlukan perubahan energi dari ... menjadi energi bunyi.",
      "Prompt Gambar": "Buatkan gambar radio.",
      "Pilihan Jawaban": [
        {
          "teks": "Energi Listrik",
          "prompt gambar": "Buatkan gambar colokan listrik/baterai."
        },
        {
          "teks": "Energi Panas",
          "prompt gambar": "Buatkan gambar api."
        },
        {
          "teks": "Energi Cahaya",
          "prompt gambar": "Buatkan gambar lampu."
        },
        {
          "teks": "Energi Gerak",
          "prompt gambar": "Buatkan gambar roda."
        }
      ],
      "Jawaban": "Energi Listrik",
      "proxy": {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Televisi mengubah energi listrik menjadi energi ...",
        "Prompt Gambar": "Buatkan gambar TV menyala.",
        "Pilihan Jawaban": [
          {
            "teks": "Gerak saja",
            "prompt gambar": "Buatkan gambar kipas."
          },
          {
            "teks": "Cahaya dan Bunyi",
            "prompt gambar": "Buatkan gambar layar TV bercahaya dan bersuara."
          },
          {
            "teks": "Kimia",
            "prompt gambar": "Buatkan gambar baterai."
          },
          {
            "teks": "Panas saja",
            "prompt gambar": "Buatkan gambar setrika."
          }
        ],
        "Jawaban": "Cahaya dan Bunyi"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Salah satu manfaat menanam pohon di lingkungan rumah adalah ...",
      "Prompt Gambar": "Buatkan gambar rumah dengan pohon rindang.",
      "Pilihan Jawaban": [
        {
          "teks": "Membuat udara panas",
          "prompt gambar": "Buatkan gambar termometer tinggi."
        },
        {
          "teks": "Membuat udara sejuk dan segar",
          "prompt gambar": "Buatkan gambar orang menikmati udara segar."
        },
        {
          "teks": "Menghabiskan air tanah",
          "prompt gambar": "Buatkan gambar tanah kering."
        },
        {
          "teks": "Menghalangi jalan",
          "prompt gambar": "Buatkan gambar jalan buntu."
        }
      ],
      "Jawaban": "Membuat udara sejuk dan segar",
      "proxy": {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Pohon menghasilkan oksigen yang berguna untuk ...",
        "Prompt Gambar": "Buatkan gambar sistem pernapasan manusia.",
        "Pilihan Jawaban": [
          {
            "teks": "Bahan bakar",
            "prompt gambar": "Buatkan gambar bensin."
          },
          {
            "teks": "Pernapasan makhluk hidup",
            "prompt gambar": "Buatkan gambar orang bernapas."
          },
          {
            "teks": "Penerangan",
            "prompt gambar": "Buatkan gambar lampu."
          },
          {
            "teks": "Pendingin kulkas",
            "prompt gambar": "Buatkan gambar kulkas."
          }
        ],
        "Jawaban": "Pernapasan makhluk hidup"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Mengapa kita disarankan menggunakan lampu hemat energi (LED)?",
      "Prompt Gambar": "Buatkan gambar lampu LED.",
      "Pilihan Jawaban": [
        {
          "teks": "Agar tagihan listrik mahal",
          "prompt gambar": "Buatkan gambar uang banyak."
        },
        {
          "teks": "Agar hemat listrik dan biaya",
          "prompt gambar": "Buatkan gambar celengan dan lampu."
        },
        {
          "teks": "Agar lampu cepat rusak",
          "prompt gambar": "Buatkan gambar lampu pecah."
        },
        {
          "teks": "Agar rumah menjadi panas",
          "prompt gambar": "Buatkan gambar api."
        }
      ],
      "Jawaban": "Agar hemat listrik dan biaya",
      "proxy": {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Memilih alat elektronik dengan daya (Watt) yang rendah bertujuan untuk ...",
        "Prompt Gambar": "Buatkan gambar stiker hemat energi.",
        "Pilihan Jawaban": [
          {
            "teks": "Memboroskan energi",
            "prompt gambar": "Buatkan gambar boros."
          },
          {
            "teks": "Menghemat energi",
            "prompt gambar": "Buatkan gambar hemat."
          },
          {
            "teks": "Merusak alat",
            "prompt gambar": "Buatkan gambar alat rusak."
          },
          {
            "teks": "Membuat mati lampu",
            "prompt gambar": "Buatkan gambar gelap."
          }
        ],
        "Jawaban": "Menghemat energi"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Gambar di samping adalah turbin angin. Turbin ini mengubah energi angin menjadi energi ...",
      "Prompt Gambar": "Buatkan gambar turbin angin (kincir raksasa).",
      "Pilihan Jawaban": [
        {
          "teks": "Air",
          "prompt gambar": "Buatkan gambar air."
        },
        {
          "teks": "Listrik",
          "prompt gambar": "Buatkan gambar tiang listrik."
        },
        {
          "teks": "Bunyi",
          "prompt gambar": "Buatkan gambar speaker."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar baterai."
        }
      ],
      "Jawaban": "Listrik",
      "proxy": {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Energi gerak dari angin juga bisa digunakan nelayan untuk ...",
        "Prompt Gambar": "Buatkan gambar laut.",
        "Pilihan Jawaban": [
          {
            "teks": "Menggerakkan perahu layar",
            "prompt gambar": "Buatkan gambar perahu layar."
          },
          {
            "teks": "Menjemur ikan",
            "prompt gambar": "Buatkan gambar ikan kering."
          },
          {
            "teks": "Memasak ikan",
            "prompt gambar": "Buatkan gambar kompor."
          },
          {
            "teks": "Menyelam",
            "prompt gambar": "Buatkan gambar penyelam."
          }
        ],
        "Jawaban": "Menggerakkan perahu layar"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Air sungai yang dibendung (waduk) memiliki energi potensial yang besar. Jika pintu air dibuka, air akan mengalir deras dan menghasilkan energi ...",
      "Prompt Gambar": "Buatkan gambar pintu air bendungan terbuka.",
      "Pilihan Jawaban": [
        {
          "teks": "Gerak (Kinetik)",
          "prompt gambar": "Buatkan gambar air bergerak cepat."
        },
        {
          "teks": "Panas",
          "prompt gambar": "Buatkan gambar air mendidih."
        },
        {
          "teks": "Cahaya",
          "prompt gambar": "Buatkan gambar air bercahaya."
        },
        {
          "teks": "Kimia",
          "prompt gambar": "Buatkan gambar air berwarna kimia."
        }
      ],
      "Jawaban": "Gerak (Kinetik)",
      "proxy": {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Energi gerak air di bendungan digunakan untuk memutar ...",
        "Prompt Gambar": "Buatkan gambar turbin air.",
        "Pilihan Jawaban": [
          {
            "teks": "Roda mobil",
            "prompt gambar": "Buatkan gambar ban mobil."
          },
          {
            "teks": "Turbin",
            "prompt gambar": "Buatkan gambar turbin."
          },
          {
            "teks": "Kipas angin",
            "prompt gambar": "Buatkan gambar kipas."
          },
          {
            "teks": "Jam dinding",
            "prompt gambar": "Buatkan gambar jam."
          }
        ],
        "Jawaban": "Turbin"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Sumber energi panas yang paling utama bagi bumi adalah ...",
      "Prompt Gambar": "Buatkan gambar bumi dan matahari.",
      "Pilihan Jawaban": [
        {
          "teks": "Api Unggun",
          "prompt gambar": "Buatkan gambar api unggun."
        },
        {
          "teks": "Kompor Gas",
          "prompt gambar": "Buatkan gambar kompor."
        },
        {
          "teks": "Matahari",
          "prompt gambar": "Buatkan gambar matahari besar."
        },
        {
          "teks": "Lampu",
          "prompt gambar": "Buatkan gambar lampu jalan."
        }
      ],
      "Jawaban": "Matahari",
      "proxy": {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Tanpa matahari, bumi akan menjadi ...",
        "Prompt Gambar": "Buatkan gambar bumi membeku.",
        "Pilihan Jawaban": [
          {
            "teks": "Hangat dan terang",
            "prompt gambar": "Buatkan gambar pantai cerah."
          },
          {
            "teks": "Gelap dan beku",
            "prompt gambar": "Buatkan gambar es gelap."
          },
          {
            "teks": "Penuh tumbuhan",
            "prompt gambar": "Buatkan gambar hutan lebat."
          },
          {
            "teks": "Sangat panas",
            "prompt gambar": "Buatkan gambar gurun."
          }
        ],
        "Jawaban": "Gelap dan beku"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Baterai menyimpan energi dalam bentuk energi Listrik secara langsung.",
      "Prompt Gambar": "Buatkan gambar baterai dibelah (isi kimia).",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Di dalam baterai terdapat zat kimia yang bisa menghasilkan listrik.",
        "Prompt Gambar": "Buatkan gambar baterai.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Angin adalah sumber energi yang dapat diperbarui (tidak akan habis).",
      "Prompt Gambar": "Buatkan gambar angin bertiup.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Minyak bumi adalah sumber energi yang tidak akan pernah habis.",
        "Prompt Gambar": "Buatkan gambar sumur minyak kering.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Kita harus membiarkan lampu menyala di siang hari agar ruangan terlihat bagus.",
      "Prompt Gambar": "Buatkan gambar lampu menyala siang bolong.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Mematikan lampu di siang hari adalah cara menghemat energi.",
        "Prompt Gambar": "Buatkan gambar mematikan saklar.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Makanan memberikan energi bagi tubuh kita untuk bermain dan belajar.",
      "Prompt Gambar": "Buatkan gambar anak sehat beraktivitas.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Jika tidak makan, tubuh kita akan tetap kuat dan bertenaga.",
        "Prompt Gambar": "Buatkan gambar anak lemas kelaparan.",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Panel Surya (Solar Cell) bekerja dengan menangkap energi dari air hujan.",
      "Prompt Gambar": "Buatkan gambar panel surya terkena hujan.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Panel Surya mengubah energi cahaya matahari menjadi listrik.",
        "Prompt Gambar": "Buatkan gambar panel surya terkena matahari.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Energi panas bumi berasal dari dalam perut bumi.",
      "Prompt Gambar": "Buatkan gambar uap panas bumi.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Energi panas bumi disebut juga energi Geothermal.",
        "Prompt Gambar": "Buatkan gambar pembangkit listrik panas bumi.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Menutup keran air saat menggosok gigi adalah perilaku boros energi.",
      "Prompt Gambar": "Buatkan gambar anak menutup keran saat sikat gigi.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Menutup keran air saat tidak dipakai menghemat air.",
        "Prompt Gambar": "Buatkan gambar keran tertutup rapat.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Kipas angin mengubah energi listrik menjadi energi dingin.",
      "Prompt Gambar": "Buatkan gambar kipas angin.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Energi utama yang dihasilkan kipas angin adalah energi gerak.",
        "Prompt Gambar": "Buatkan gambar baling-baling kipas berputar.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Biogas adalah bahan bakar yang dihasilkan dari kotoran hewan ternak.",
      "Prompt Gambar": "Buatkan gambar instalasi biogas peternakan.",
      "Jawaban": "Benar",
      "proxy": {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Biogas dapat digunakan untuk menyalakan kompor gas.",
        "Prompt Gambar": "Buatkan gambar kompor biogas menyala.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Bunyi dihasilkan oleh benda yang diam.",
      "Prompt Gambar": "Buatkan gambar batu diam.",
      "Jawaban": "Salah",
      "proxy": {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Energi bunyi dihasilkan oleh benda yang bergetar.",
        "Prompt Gambar": "Buatkan gambar senar gitar bergetar.",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang dimaksud dengan Energi?",
      "Prompt Gambar": "Buatkan gambar simbol energi (petir/api/gerak).",
      "Jawaban": "Kemampuan untuk melakukan kegiatan, usaha, atau kerja.",
      "proxy": {
        "Nomor": 41,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 3 bentuk energi yang kamu ketahui!",
        "Prompt Gambar": "Buatkan gambar lampu, api, dan kipas.",
        "Jawaban": "Energi Panas, Cahaya, Gerak, Listrik, Bunyi, Kimia (Pilih 3)."
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Esai",
      "Pertanyaan": "Mengapa Matahari disebut sebagai sumber energi terbesar di bumi?",
      "Prompt Gambar": "Buatkan gambar matahari menyinari bumi.",
      "Jawaban": "Karena matahari menghasilkan energi panas dan cahaya yang sangat besar dan dibutuhkan oleh seluruh makhluk hidup di bumi.",
      "proxy": {
        "Nomor": 42,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 2 manfaat energi matahari bagi kehidupan sehari-hari!",
        "Prompt Gambar": "Buatkan gambar jemuran dan panel surya.",
        "Jawaban": "Mengeringkan pakaian, membantu fotosintesis tumbuhan, menghasilkan listrik (panel surya), menghangatkan bumi."
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Esai",
      "Pertanyaan": "Jelaskan perubahan energi yang terjadi pada Setrika Listrik!",
      "Prompt Gambar": "Buatkan gambar setrika.",
      "Jawaban": "Energi Listrik berubah menjadi Energi Panas.",
      "proxy": {
        "Nomor": 43,
        "Jenis": "Esai",
        "Pertanyaan": "Jelaskan perubahan energi yang terjadi pada Radio!",
        "Prompt Gambar": "Buatkan gambar radio.",
        "Jawaban": "Energi Listrik (atau Kimia dari baterai) berubah menjadi Energi Bunyi."
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Esai",
      "Pertanyaan": "Bagaimana cara tubuh kita mendapatkan energi?",
      "Prompt Gambar": "Buatkan gambar anak makan.",
      "Jawaban": "Dengan cara makan dan minum, kemudian tubuh mengolahnya (pencernaan) menjadi tenaga.",
      "proxy": {
        "Nomor": 44,
        "Jenis": "Esai",
        "Pertanyaan": "Apa yang terjadi jika tubuh kita kekurangan energi?",
        "Prompt Gambar": "Buatkan gambar orang lemas.",
        "Jawaban": "Tubuh menjadi lemas, tidak bertenaga, dan sulit berkonsentrasi."
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Esai",
      "Pertanyaan": "Sebutkan 2 cara menghemat energi listrik di rumah!",
      "Prompt Gambar": "Buatkan gambar rumah hemat energi.",
      "Jawaban": "Mematikan lampu di siang hari, mematikan TV jika tidak ditonton, menggunakan alat elektronik hemat energi.",
      "proxy": {
        "Nomor": 45,
        "Jenis": "Esai",
        "Pertanyaan": "Sebutkan 2 cara menghemat air!",
        "Prompt Gambar": "Buatkan gambar keran air.",
        "Jawaban": "Menutup keran setelah dipakai, mandi dengan air secukupnya, tidak membiarkan air meluap."
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Esai",
      "Pertanyaan": "Apa yang dimaksud dengan Sumber Energi Alternatif?",
      "Prompt Gambar": "Buatkan gambar kincir angin dan matahari.",
      "Jawaban": "Sumber energi yang digunakan untuk menggantikan bahan bakar fosil (minyak bumi), biasanya dapat diperbarui dan ramah lingkungan.",
      "proxy": {
        "Nomor": 46,
        "Jenis": "Esai",
        "Pertanyaan": "Berikan 3 contoh sumber energi alternatif!",
        "Prompt Gambar": "Buatkan gambar alam.",
        "Jawaban": "Matahari, Angin, Air, Panas Bumi, Biogas, Biomassa."
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Esai",
      "Pertanyaan": "Apa itu Fotosintesis?",
      "Prompt Gambar": "Buatkan gambar tumbuhan kena matahari.",
      "Jawaban": "Proses tumbuhan memasak makanannya sendiri dengan bantuan cahaya matahari.",
      "proxy": {
        "Nomor": 47,
        "Jenis": "Esai",
        "Pertanyaan": "Energi apa yang dibutuhkan tumbuhan untuk fotosintesis?",
        "Prompt Gambar": "Buatkan gambar matahari.",
        "Jawaban": "Energi Cahaya (Matahari)."
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Esai",
      "Pertanyaan": "Jelaskan bagaimana Angin bisa menghasilkan listrik!",
      "Prompt Gambar": "Buatkan gambar kincir angin memutar turbin.",
      "Jawaban": "Angin memutar kincir/baling-baling, putaran kincir menggerakkan generator, dan generator menghasilkan listrik.",
      "proxy": {
        "Nomor": 48,
        "Jenis": "Esai",
        "Pertanyaan": "Apa nama pembangkit listrik yang menggunakan tenaga angin?",
        "Prompt Gambar": "Buatkan gambar PLTB.",
        "Jawaban": "PLTB (Pembangkit Listrik Tenaga Bayu)."
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Esai",
      "Pertanyaan": "Mengapa kita harus menghabiskan makanan yang kita ambil?",
      "Prompt Gambar": "Buatkan gambar piring bersih.",
      "Jawaban": "Untuk menghargai makanan dan agar tidak membuang-buang energi yang digunakan untuk menghasilkan makanan tersebut.",
      "proxy": {
        "Nomor": 49,
        "Jenis": "Esai",
        "Pertanyaan": "Apa dampak buruk membuang sisa makanan bagi lingkungan?",
        "Prompt Gambar": "Buatkan gambar sampah menumpuk.",
        "Jawaban": "Menambah sampah dan menghasilkan gas metana yang mencemari udara."
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Esai",
      "Pertanyaan": "Apa perbedaan sumber energi terbarukan dan tidak terbarukan?",
      "Prompt Gambar": "Buatkan gambar matahari vs batubara.",
      "Jawaban": "Energi terbarukan tidak akan habis (seperti matahari, angin), sedangkan energi tidak terbarukan jumlahnya terbatas dan bisa habis (seperti minyak bumi, batubara).",
      "proxy": {
        "Nomor": 50,
        "Jenis": "Esai",
        "Pertanyaan": "Berikan contoh sumber energi yang tidak dapat diperbarui (bisa habis)!",
        "Prompt Gambar": "Buatkan gambar pompa bensin.",
        "Jawaban": "Minyak bumi (bensin, solar), Batu bara, Gas alam."
      }
    }
  ]
},
  // --- English ---
  {
    "Chapter": 1,
    "Topic": "I Like Mi Aceh (Food and Drinks)",
    "Total_Questions": 50,
    "Questions": [
      {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. What is it?",
        "Prompt Gambar": "Buatkan gambar semangkuk mi (noodle) yang lezat",
        "Pilihan Jawaban": {
          "option 1": "Pizza",
          "option 2": "Noodle",
          "option 3": "Bread",
          "option 4": "Rice"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "What is the English word for the picture?",
          "Prompt Gambar": "Buatkan gambar semangkuk bakso",
          "Jawaban": "Meatball"
        }
      },
      {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I want to eat ...",
        "Prompt Gambar": "Buatkan gambar sepotong ayam goreng",
        "Pilihan Jawaban": {
          "option 1": "Fried Chicken",
          "option 2": "Milk",
          "option 3": "Tea",
          "option 4": "Water"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "I want to eat ...",
          "Prompt Gambar": "Buatkan gambar ikan goreng",
          "Jawaban": "Fried Fish"
        }
      },
      {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What is the color of the milk?",
        "Prompt Gambar": "Buatkan gambar segelas susu putih",
        "Pilihan Jawaban": {
          "option 1": "Red",
          "option 2": "Green",
          "option 3": "White",
          "option 4": "Black"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "What is the color of the coffee?",
          "Prompt Gambar": "Buatkan gambar secangkir kopi hitam",
          "Jawaban": "Black"
        }
      },
      {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which one is a drink?",
        "Prompt Gambar": "Buatkan gambar meja dengan piring nasi, roti, apel, dan segelas jus",
        "Pilihan Jawaban": {
          "option 1": "Rice",
          "option 2": "Bread",
          "option 3": "Apple",
          "option 4": "Juice"
        },
        "Jawaban": "option 4",
        "proxy": {
          "Pertanyaan": "Which one is a food?",
          "Prompt Gambar": "Buatkan gambar meja dengan susu, teh, kopi, dan kue",
          "Jawaban": "Cake"
        }
      },
      {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate to English: 'Saya suka roti'.",
        "Prompt Gambar": "Buatkan gambar anak tersenyum memegang roti",
        "Pilihan Jawaban": {
          "option 1": "I like noodle",
          "option 2": "I like bread",
          "option 3": "I like rice",
          "option 4": "I like milk"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Translate to English: 'Saya suka keju'.",
          "Prompt Gambar": "Buatkan gambar anak tersenyum memegang keju",
          "Jawaban": "I like cheese"
        }
      },
      {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "This food is round and has cheese on it. What is it?",
        "Prompt Gambar": "Buatkan gambar pizza utuh",
        "Pilihan Jawaban": {
          "option 1": "Pizza",
          "option 2": "Hotdog",
          "option 3": "Satay",
          "option 4": "Soup"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "This food is long and made of meat. What is it?",
          "Prompt Gambar": "Buatkan gambar sosis",
          "Jawaban": "Sausage"
        }
      },
      {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Do you like ...? (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar es krim",
        "Pilihan Jawaban": {
          "option 1": "Coffee",
          "option 2": "Tea",
          "option 3": "Ice Cream",
          "option 4": "Water"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Do you like ...? (Look at the picture)",
          "Prompt Gambar": "Buatkan gambar cokelat batangan",
          "Jawaban": "Chocolate"
        }
      },
      {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Arrange the letters: T - E - A",
        "Prompt Gambar": "Buatkan gambar cangkir teh",
        "Pilihan Jawaban": {
          "option 1": "Eat",
          "option 2": "Tea",
          "option 3": "Ate",
          "option 4": "Eta"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Arrange the letters: M - I - L - K",
          "Prompt Gambar": "Buatkan gambar kotak susu",
          "Jawaban": "Milk"
        }
      },
      {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "'Nasi Goreng' in English is ...",
        "Prompt Gambar": "Buatkan gambar nasi goreng",
        "Pilihan Jawaban": {
          "option 1": "Fried Chicken",
          "option 2": "Fried Fish",
          "option 3": "Fried Rice",
          "option 4": "Boiled Egg"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "'Mie Goreng' in English is ...",
          "Prompt Gambar": "Buatkan gambar mie goreng",
          "Jawaban": "Fried Noodle"
        }
      },
      {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Aisyah eats ... for breakfast.",
        "Prompt Gambar": "Buatkan gambar roti dengan selai",
        "Pilihan Jawaban": {
          "option 1": "Water",
          "option 2": "Juice",
          "option 3": "Bread",
          "option 4": "Soda"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Budi eats ... for lunch.",
          "Prompt Gambar": "Buatkan gambar piring berisi nasi",
          "Jawaban": "Rice"
        }
      },
      {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which food is spicy (pedas)?",
        "Prompt Gambar": "Buatkan gambar berbagai makanan, salah satunya ada cabainya",
        "Pilihan Jawaban": {
          "option 1": "Cake",
          "option 2": "Ice Cream",
          "option 3": "Candy",
          "option 4": "Mi Aceh"
        },
        "Jawaban": "option 4",
        "proxy": {
          "Pertanyaan": "Which food is sweet (manis)?",
          "Prompt Gambar": "Buatkan gambar permen dan makanan pedas",
          "Jawaban": "Candy"
        }
      },
      {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. It is a glass of ...",
        "Prompt Gambar": "Buatkan gambar segelas air bening",
        "Pilihan Jawaban": {
          "option 1": "Mineral Water",
          "option 2": "Milk",
          "option 3": "Coffee",
          "option 4": "Juice"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Look at the picture. It is a cup of ...",
          "Prompt Gambar": "Buatkan gambar secangkir kopi",
          "Jawaban": "Coffee"
        }
      },
      {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Joshua likes ...",
        "Prompt Gambar": "Buatkan gambar Joshua sedang makan bakso",
        "Pilihan Jawaban": {
          "option 1": "Pizza",
          "option 2": "Meatball",
          "option 3": "Burger",
          "option 4": "Satay"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Made likes ...",
          "Prompt Gambar": "Buatkan gambar Made sedang makan sate",
          "Jawaban": "Satay"
        }
      },
      {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What is 'Telur' in English?",
        "Prompt Gambar": "Buatkan gambar sebutir telur",
        "Pilihan Jawaban": {
          "option 1": "Rice",
          "option 2": "Fish",
          "option 3": "Egg",
          "option 4": "Meat"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "What is 'Daging' in English?",
          "Prompt Gambar": "Buatkan gambar sepotong daging",
          "Jawaban": "Meat"
        }
      },
      {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Do you like orange juice? Yes, I ...",
        "Prompt Gambar": "Buatkan gambar anak mengacungkan jempol memegang jus jeruk",
        "Pilihan Jawaban": {
          "option 1": "don't",
          "option 2": "do",
          "option 3": "am",
          "option 4": "not"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Do you like coffee? No, I ...",
          "Prompt Gambar": "Buatkan gambar anak menolak kopi",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which picture shows 'Satay'?",
        "Prompt Gambar": "Buatkan 4 gambar: A (Sate), B (Bakso), C (Soto), D (Nasi)",
        "Pilihan Jawaban": {
          "option 1": "Picture A",
          "option 2": "Picture B",
          "option 3": "Picture C",
          "option 4": "Picture D"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Which picture shows 'Burger'?",
          "Prompt Gambar": "Buatkan 4 gambar: A (Pizza), B (Burger), C (Roti), D (Kue)",
          "Jawaban": "Picture B"
        }
      },
      {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I am hungry (lapar). I want to ...",
        "Prompt Gambar": "Buatkan gambar anak memegang perut lapar dan membayangkan makanan",
        "Pilihan Jawaban": {
          "option 1": "Drink",
          "option 2": "Sleep",
          "option 3": "Eat",
          "option 4": "Run"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "I am thirsty (haus). I want to ...",
          "Prompt Gambar": "Buatkan gambar anak memegang leher haus dan membayangkan air",
          "Jawaban": "Drink"
        }
      },
      {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate: 'I like fish'.",
        "Prompt Gambar": "Buatkan gambar anak senang makan ikan",
        "Pilihan Jawaban": {
          "option 1": "Saya suka ayam",
          "option 2": "Saya suka daging",
          "option 3": "Saya suka ikan",
          "option 4": "Saya suka telur"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Translate: 'I like chicken'.",
          "Prompt Gambar": "Buatkan gambar anak senang makan ayam",
          "Jawaban": "Saya suka ayam"
        }
      },
      {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "S - O - D - ... . Complete the word.",
        "Prompt Gambar": "Buatkan gambar kaleng minuman bersoda",
        "Pilihan Jawaban": {
          "option 1": "A",
          "option 2": "O",
          "option 3": "U",
          "option 4": "I"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "M - I - L - ... . Complete the word.",
          "Prompt Gambar": "Buatkan gambar susu",
          "Jawaban": "K"
        }
      },
      {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. It is a bottle of ...",
        "Prompt Gambar": "Buatkan gambar botol saus tomat",
        "Pilihan Jawaban": {
          "option 1": "Water",
          "option 2": "Ketchup",
          "option 3": "Milk",
          "option 4": "Tea"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Look at the picture. It is a jar of ...",
          "Prompt Gambar": "Buatkan gambar toples selai",
          "Jawaban": "Jam"
        }
      },
      {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which one is NOT a food?",
        "Prompt Gambar": "Buatkan gambar Nasi, Roti, Air, dan Kue",
        "Pilihan Jawaban": {
          "option 1": "Rice",
          "option 2": "Bread",
          "option 3": "Water",
          "option 4": "Cake"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Which one is NOT a drink?",
          "Prompt Gambar": "Buatkan gambar Susu, Teh, Jus, dan Pizza",
          "Jawaban": "Pizza"
        }
      },
      {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Cici likes to eat ... in the morning.",
        "Prompt Gambar": "Buatkan gambar mangkuk berisi sereal dan susu",
        "Pilihan Jawaban": {
          "option 1": "Cereal",
          "option 2": "Satay",
          "option 3": "Meatball",
          "option 4": "Burger"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Made likes to eat ... for lunch.",
          "Prompt Gambar": "Buatkan gambar piring berisi nasi dan lauk",
          "Jawaban": "Rice"
        }
      },
      {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What do you need to eat soup?",
        "Prompt Gambar": "Buatkan gambar mangkuk sup",
        "Pilihan Jawaban": {
          "option 1": "Fork (Garpu)",
          "option 2": "Spoon (Sendok)",
          "option 3": "Knife (Pisau)",
          "option 4": "Straw (Sedotan)"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "What do you need to drink juice?",
          "Prompt Gambar": "Buatkan gambar gelas jus",
          "Jawaban": "Straw (Sedotan) / Glass"
        }
      },
      {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "This fruit is yellow and long. Monkeys like it.",
        "Prompt Gambar": "Buatkan gambar pisang",
        "Pilihan Jawaban": {
          "option 1": "Apple",
          "option 2": "Banana",
          "option 3": "Orange",
          "option 4": "Grape"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "This fruit is red and round.",
          "Prompt Gambar": "Buatkan gambar apel",
          "Jawaban": "Apple"
        }
      },
      {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Burger is a ...",
        "Prompt Gambar": "Buatkan gambar burger",
        "Pilihan Jawaban": {
          "option 1": "Drink",
          "option 2": "Food",
          "option 3": "Fruit",
          "option 4": "Vegetable"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Tea is a ...",
          "Prompt Gambar": "Buatkan gambar teh",
          "Jawaban": "Drink"
        }
      },
      {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What fruit is used to make Orange Juice?",
        "Prompt Gambar": "Buatkan gambar buah jeruk",
        "Pilihan Jawaban": {
          "option 1": "Apple",
          "option 2": "Mango",
          "option 3": "Orange",
          "option 4": "Banana"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "What fruit is used to make Apple Juice?",
          "Prompt Gambar": "Buatkan gambar buah apel",
          "Jawaban": "Apple"
        }
      },
      {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I like ... (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar permen loli",
        "Pilihan Jawaban": {
          "option 1": "Lollipop",
          "option 2": "Bread",
          "option 3": "Rice",
          "option 4": "Egg"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "I like ... (Look at the picture)",
          "Prompt Gambar": "Buatkan gambar donat",
          "Jawaban": "Donut"
        }
      },
      {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Bakso is shaped like a ...",
        "Prompt Gambar": "Buatkan gambar bola",
        "Pilihan Jawaban": {
          "option 1": "Square (Kotak)",
          "option 2": "Triangle (Segitiga)",
          "option 3": "Ball (Bola)",
          "option 4": "Star (Bintang)"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Pizza is usually shaped like a ...",
          "Prompt Gambar": "Buatkan gambar lingkaran",
          "Jawaban": "Circle (Lingkaran)"
        }
      },
      {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Where do you buy food at school?",
        "Prompt Gambar": "Buatkan gambar kantin sekolah",
        "Pilihan Jawaban": {
          "option 1": "Library",
          "option 2": "Canteen",
          "option 3": "Classroom",
          "option 4": "Office"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Where do you cook food at home?",
          "Prompt Gambar": "Buatkan gambar dapur",
          "Jawaban": "Kitchen"
        }
      },
      {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate: 'Teh Panas'",
        "Prompt Gambar": "Buatkan gambar teh berasap",
        "Pilihan Jawaban": {
          "option 1": "Ice Tea",
          "option 2": "Hot Tea",
          "option 3": "Sweet Tea",
          "option 4": "Green Tea"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Translate: 'Es Teh'",
          "Prompt Gambar": "Buatkan gambar teh dengan es batu",
          "Jawaban": "Ice Tea"
        }
      },
      {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. It is a Burger.",
        "Prompt Gambar": "Buatkan gambar Burger yang lezat",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Look at the picture. It is a Pizza.",
          "Prompt Gambar": "Buatkan gambar Pizza",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. It is Coffee.",
        "Prompt Gambar": "Buatkan gambar segelas susu putih (bukan kopi)",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "Look at the picture. It is Milk.",
          "Prompt Gambar": "Buatkan gambar secangkir kopi hitam",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "'Fried Rice' means 'Nasi Goreng'.",
        "Prompt Gambar": "Buatkan gambar nasi goreng",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "'Fried Chicken' means 'Ikan Goreng'.",
          "Prompt Gambar": "Buatkan gambar ayam goreng",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "We eat 'Soup'. Soup is a food.",
        "Prompt Gambar": "Buatkan gambar mangkuk sup",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "We drink 'Water'. Water is a food.",
          "Prompt Gambar": "Buatkan gambar air",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. This is 'Satay'.",
        "Prompt Gambar": "Buatkan gambar beberapa tusuk sate",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Look at the picture. This is 'Meatball'.",
          "Prompt Gambar": "Buatkan gambar tusuk sate (bukan bakso)",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "'I like' means 'Saya suka'.",
        "Prompt Gambar": "Buatkan gambar anak tersenyum tanda suka",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "'I like' means 'Saya tidak suka'.",
          "Prompt Gambar": "Buatkan gambar anak tersenyum",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Soda is a healthy drink.",
        "Prompt Gambar": "Buatkan gambar minuman bersoda",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "Mineral water is a healthy drink.",
          "Prompt Gambar": "Buatkan gambar air mineral",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "We eat ice cream when it is hot.",
        "Prompt Gambar": "Buatkan gambar anak makan es krim di hari panas",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "We drink hot coffee when it is hot.",
          "Prompt Gambar": "Buatkan gambar orang minum kopi panas di pantai terik",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Noodle is a drink.",
        "Prompt Gambar": "Buatkan gambar mi goreng",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "Juice is a drink.",
          "Prompt Gambar": "Buatkan gambar jus",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. The girl likes the cake.",
        "Prompt Gambar": "Buatkan gambar anak perempuan memakan kue dengan lahap dan tersenyum",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Look at the picture. The boy likes the vegetable.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki menutup mulut menolak sayur",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 41,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Look at the picture. Write the name of the food.",
        "Prompt Gambar": "Buatkan gambar sepotong Roti",
        "Jawaban": "Bread",
        "proxy": {
          "Pertanyaan": "Look at the picture. Write the name of the food.",
          "Prompt Gambar": "Buatkan gambar Keju",
          "Jawaban": "Cheese"
        }
      },
      {
        "Nomor": 42,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Look at the picture. Write the name of the drink.",
        "Prompt Gambar": "Buatkan gambar segelas Susu",
        "Jawaban": "Milk",
        "proxy": {
          "Pertanyaan": "Look at the picture. Write the name of the drink.",
          "Prompt Gambar": "Buatkan gambar segelas Teh",
          "Jawaban": "Tea"
        }
      },
      {
        "Nomor": 43,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Arrange the letters: C - A - K - E",
        "Prompt Gambar": "Buatkan gambar Kue ulang tahun",
        "Jawaban": "Cake",
        "proxy": {
          "Pertanyaan": "Arrange the letters: R - I - C - E",
          "Prompt Gambar": "Buatkan gambar Nasi",
          "Jawaban": "Rice"
        }
      },
      {
        "Nomor": 44,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Translate to English: 'Saya suka Ikan'.",
        "Prompt Gambar": "Buatkan gambar Ikan goreng",
        "Jawaban": "I like fish",
        "proxy": {
          "Pertanyaan": "Translate to English: 'Saya suka Daging'.",
          "Prompt Gambar": "Buatkan gambar Daging",
          "Jawaban": "I like meat"
        }
      },
      {
        "Nomor": 45,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Mention 3 kinds of food!",
        "Prompt Gambar": "Buatkan gambar meja penuh makanan",
        "Jawaban": "Bread, Rice, Noodle, Pizza, Burger, Chicken (Jawaban siswa dapat bervariasi)",
        "proxy": {
          "Pertanyaan": "Mention 3 kinds of drinks!",
          "Prompt Gambar": "Buatkan gambar meja penuh minuman",
          "Jawaban": "Milk, Tea, Coffee, Juice, Water, Soda (Jawaban siswa dapat bervariasi)"
        }
      },
      {
        "Nomor": 46,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Fill in the blank: I ... noodle. (Saya suka mi)",
        "Prompt Gambar": "Buatkan gambar anak makan mi dengan senang",
        "Jawaban": "like",
        "proxy": {
          "Pertanyaan": "Fill in the blank: I ... pizza. (Saya suka pizza)",
          "Prompt Gambar": "Buatkan gambar anak makan pizza dengan senang",
          "Jawaban": "like"
        }
      },
      {
        "Nomor": 47,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "What is the English for 'Kopi'?",
        "Prompt Gambar": "Buatkan gambar biji kopi dan cangkir kopi",
        "Jawaban": "Coffee",
        "proxy": {
          "Pertanyaan": "What is the English for 'Teh'?",
          "Prompt Gambar": "Buatkan gambar daun teh dan cangkir teh",
          "Jawaban": "Tea"
        }
      },
      {
        "Nomor": 48,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Arrange the words: like - I - chicken - fried",
        "Prompt Gambar": "Buatkan gambar ayam goreng",
        "Jawaban": "I like fried chicken",
        "proxy": {
          "Pertanyaan": "Arrange the words: rice - like - fried - I",
          "Prompt Gambar": "Buatkan gambar nasi goreng",
          "Jawaban": "I like fried rice"
        }
      },
      {
        "Nomor": 49,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "What food is sweet? (Write one)",
        "Prompt Gambar": "Buatkan gambar makanan-makanan manis (cokelat, permen, kue)",
        "Jawaban": "Candy / Cake / Chocolate / Ice Cream",
        "proxy": {
          "Pertanyaan": "What drink is white? (Write one)",
          "Prompt Gambar": "Buatkan gambar susu",
          "Jawaban": "Milk"
        }
      },
      {
        "Nomor": 50,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Complete the sentence: My favorite drink is ...",
        "Prompt Gambar": "Buatkan gambar anak memegang minuman favoritnya (bebas)",
        "Jawaban": "Milk / Tea / Juice / Water (Jawaban siswa bebas sesuai favoritnya)",
        "proxy": {
          "Pertanyaan": "Complete the sentence: My favorite food is ...",
          "Prompt Gambar": "Buatkan gambar anak memegang makanan favoritnya (bebas)",
          "Jawaban": "Pizza / Noodle / Rice (Jawaban siswa bebas sesuai favoritnya)"
        }
      }
    ]
  },
  {
    "Chapter": 2,
    "Topic": "I Don't Like Rice (Expressing Likes and Dislikes)",
    "Total_Questions": 50,
    "Questions": [
      {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. I ... rice.",
        "Prompt Gambar": "Buatkan gambar piring nasi dengan tanda silang merah (tidak suka)",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "doesn't like"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Look at the picture. I ... milk.",
          "Prompt Gambar": "Buatkan gambar kotak susu dengan tanda silang merah",
          "Jawaban": "don't like"
        }
      },
      {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "She ... spinach (bayam).",
        "Prompt Gambar": "Buatkan gambar anak perempuan menutup mulut menolak sayur bayam",
        "Pilihan Jawaban": {
          "option 1": "don't like",
          "option 2": "doesn't like",
          "option 3": "like",
          "option 4": "liking"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "He ... coffee.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki menolak cangkir kopi",
          "Jawaban": "doesn't like"
        }
      },
      {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Do you like pizza? No, I ...",
        "Prompt Gambar": "Buatkan gambar anak menggelengkan kepala saat ditawari pizza",
        "Pilihan Jawaban": {
          "option 1": "do",
          "option 2": "don't",
          "option 3": "does",
          "option 4": "doesn't"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Do you like candy? No, I ...",
          "Prompt Gambar": "Buatkan gambar anak menolak permen",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Does he like fried chicken? Yes, he ...",
        "Prompt Gambar": "Buatkan gambar anak laki-laki makan ayam goreng dengan lahap",
        "Pilihan Jawaban": {
          "option 1": "do",
          "option 2": "don't",
          "option 3": "does",
          "option 4": "doesn't"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Does she like ice cream? Yes, she ...",
          "Prompt Gambar": "Buatkan gambar anak perempuan makan es krim dengan senang",
          "Jawaban": "does"
        }
      },
      {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "They ... like spicy food.",
        "Prompt Gambar": "Buatkan gambar dua orang kepedasan dan tidak suka makanannya",
        "Pilihan Jawaban": {
          "option 1": "doesn't",
          "option 2": "likes",
          "option 3": "don't",
          "option 4": "is not"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "We ... like dirty food.",
          "Prompt Gambar": "Buatkan gambar dua anak menolak makanan kotor",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Made ... banana.",
        "Prompt Gambar": "Buatkan gambar Made (anak laki-laki) tersenyum memegang pisang",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "dislike"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Cici ... apple.",
          "Prompt Gambar": "Buatkan gambar Cici (anak perempuan) tersenyum memegang apel",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate: 'Saya tidak suka nanas'.",
        "Prompt Gambar": "Buatkan gambar nanas dengan tanda silang",
        "Pilihan Jawaban": {
          "option 1": "I doesn't like pineapple",
          "option 2": "I don't like pineapple",
          "option 3": "I like pineapple",
          "option 4": "I am pineapple"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Translate: 'Saya tidak suka salak'.",
          "Prompt Gambar": "Buatkan gambar buah salak dengan tanda silang",
          "Jawaban": "I don't like snake fruit"
        }
      },
      {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate: 'Dia (perempuan) suka cokelat'.",
        "Prompt Gambar": "Buatkan gambar anak perempuan makan cokelat",
        "Pilihan Jawaban": {
          "option 1": "She like chocolate",
          "option 2": "She likes chocolate",
          "option 3": "She don't like chocolate",
          "option 4": "She doesn't like chocolate"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Translate: 'Dia (laki-laki) suka permen'.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki makan permen",
          "Jawaban": "He likes candy"
        }
      },
      {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "My mother ... like coffee.",
        "Prompt Gambar": "Buatkan gambar ibu menolak kopi",
        "Pilihan Jawaban": {
          "option 1": "don't",
          "option 2": "doesn't",
          "option 3": "isn't",
          "option 4": "aren't"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "My father ... like tea.",
          "Prompt Gambar": "Buatkan gambar ayah menolak teh",
          "Jawaban": "doesn't"
        }
      },
      {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which sentence is correct?",
        "Prompt Gambar": "Buatkan gambar anak-anak (banyak) makan pizza",
        "Pilihan Jawaban": {
          "option 1": "They likes pizza",
          "option 2": "They like pizza",
          "option 3": "They doesn't like pizza",
          "option 4": "They is like pizza"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Which sentence is correct?",
          "Prompt Gambar": "Buatkan gambar dua orang makan burger",
          "Jawaban": "We like burger"
        }
      },
      {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Does your cat like fish?",
        "Prompt Gambar": "Buatkan gambar kucing makan ikan dengan lahap",
        "Pilihan Jawaban": {
          "option 1": "Yes, it does",
          "option 2": "Yes, it do",
          "option 3": "No, it doesn't",
          "option 4": "No, it don't"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Does your dog like bone?",
          "Prompt Gambar": "Buatkan gambar anjing makan tulang",
          "Jawaban": "Yes, it does"
        }
      },
      {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Mr. Udin ... orange juice.",
        "Prompt Gambar": "Buatkan gambar Pak Udin minum jus jeruk dan tersenyum",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "liking",
          "option 4": "to like"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Mrs. Ani ... tea.",
          "Prompt Gambar": "Buatkan gambar Bu Ani minum teh dan tersenyum",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. Aisyah ... noodle.",
        "Prompt Gambar": "Buatkan gambar Aisyah mendorong mangkuk mi (tidak mau)",
        "Pilihan Jawaban": {
          "option 1": "likes",
          "option 2": "doesn't like",
          "option 3": "don't like",
          "option 4": "like"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Look at the picture. Joshua ... vegetables.",
          "Prompt Gambar": "Buatkan gambar Joshua mendorong piring sayur (tidak mau)",
          "Jawaban": "doesn't like"
        }
      },
      {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I like apple, but I ... mango.",
        "Prompt Gambar": "Buatkan gambar apel (centang) dan mangga (silang)",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "doesn't like"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "I like tea, but I ... coffee.",
          "Prompt Gambar": "Buatkan gambar teh (centang) dan kopi (silang)",
          "Jawaban": "don't like"
        }
      },
      {
        "Nomor": 15,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Arrange the words: not - I - do - like - soda",
        "Prompt Gambar": "Buatkan gambar kaleng soda dicoret",
        "Pilihan Jawaban": {
          "option 1": "I not do like soda",
          "option 2": "I do not like soda",
          "option 3": "Soda like not I do",
          "option 4": "Do I not like soda"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Arrange the words: milk - not - does - He - like",
          "Prompt Gambar": "Buatkan gambar kotak susu dicoret",
          "Jawaban": "He does not like milk"
        }
      },
      {
        "Nomor": 16,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Joshua ... (tidak suka) durian.",
        "Prompt Gambar": "Buatkan gambar Joshua menutup hidung di depan durian",
        "Pilihan Jawaban": {
          "option 1": "don't like",
          "option 2": "doesn't like",
          "option 3": "like",
          "option 4": "likes"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Cici ... (tidak suka) papaya.",
          "Prompt Gambar": "Buatkan gambar Cici menolak pepaya",
          "Jawaban": "doesn't like"
        }
      },
      {
        "Nomor": 17,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "We ... (suka) ice cream.",
        "Prompt Gambar": "Buatkan gambar kita (banyak orang) makan es krim",
        "Pilihan Jawaban": {
          "option 1": "likes",
          "option 2": "like",
          "option 3": "doesn't like",
          "option 4": "are like"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "You ... (suka) chocolate.",
          "Prompt Gambar": "Buatkan gambar kamu makan cokelat",
          "Jawaban": "like"
        }
      },
      {
        "Nomor": 18,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Doni is a student. He ... studying.",
        "Prompt Gambar": "Buatkan gambar Doni sedang belajar dengan rajin",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "doesn't like"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Siti is a chef. She ... cooking.",
          "Prompt Gambar": "Buatkan gambar Siti sedang memasak",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 19,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What food does the rabbit like?",
        "Prompt Gambar": "Buatkan gambar kelinci",
        "Pilihan Jawaban": {
          "option 1": "It likes fish",
          "option 2": "It likes carrot",
          "option 3": "It likes meat",
          "option 4": "It likes candy"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "What food does the monkey like?",
          "Prompt Gambar": "Buatkan gambar monyet",
          "Jawaban": "It likes banana"
        }
      },
      {
        "Nomor": 20,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Choose the correct sentence.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki cemberut melihat sayur",
        "Pilihan Jawaban": {
          "option 1": "He don't like vegetable.",
          "option 2": "He doesn't like vegetable.",
          "option 3": "He not like vegetable.",
          "option 4": "He no like vegetable."
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Choose the correct sentence.",
          "Prompt Gambar": "Buatkan gambar anak perempuan cemberut melihat ikan",
          "Jawaban": "She doesn't like fish."
        }
      },
      {
        "Nomor": 21,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Joshua and Made ... like playing doll.",
        "Prompt Gambar": "Buatkan gambar Joshua dan Made tidak mau main boneka",
        "Pilihan Jawaban": {
          "option 1": "doesn't",
          "option 2": "don't",
          "option 3": "isn't",
          "option 4": "aren't"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Cici and Aisyah ... like playing football.",
          "Prompt Gambar": "Buatkan gambar Cici dan Aisyah tidak mau main bola",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 22,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Does she like burger? No, she likes ...",
        "Prompt Gambar": "Buatkan gambar anak perempuan memegang hotdog",
        "Pilihan Jawaban": {
          "option 1": "Pizza",
          "option 2": "Hotdog",
          "option 3": "Sushi",
          "option 4": "Salad"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Does he like tea? No, he likes ...",
          "Prompt Gambar": "Buatkan gambar anak laki-laki memegang kopi",
          "Jawaban": "Coffee"
        }
      },
      {
        "Nomor": 23,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "My sister ... strawberry.",
        "Prompt Gambar": "Buatkan gambar adik perempuan makan stroberi",
        "Pilihan Jawaban": {
          "option 1": "likes",
          "option 2": "like",
          "option 3": "don't like",
          "option 4": "liking"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "My brother ... grape.",
          "Prompt Gambar": "Buatkan gambar kakak laki-laki makan anggur",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 24,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Do they like swimming? Yes, ...",
        "Prompt Gambar": "Buatkan gambar anak-anak berenang dengan senang",
        "Pilihan Jawaban": {
          "option 1": "they do",
          "option 2": "they does",
          "option 3": "they don't",
          "option 4": "they doesn't"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Do we like studying? Yes, ...",
          "Prompt Gambar": "Buatkan gambar kita belajar dengan senang",
          "Jawaban": "we do"
        }
      },
      {
        "Nomor": 25,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "It is hot. I like ...",
        "Prompt Gambar": "Buatkan gambar es teh segar",
        "Pilihan Jawaban": {
          "option 1": "Hot tea",
          "option 2": "Ice tea",
          "option 3": "Hot coffee",
          "option 4": "Soup"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "It is cold. I like ...",
          "Prompt Gambar": "Buatkan gambar teh panas berasap",
          "Jawaban": "Hot tea"
        }
      },
      {
        "Nomor": 26,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which subject takes 'doesn't like'?",
        "Prompt Gambar": "Buatkan gambar orang menunjuk satu anak laki-laki (He)",
        "Pilihan Jawaban": {
          "option 1": "I",
          "option 2": "You",
          "option 3": "They",
          "option 4": "He"
        },
        "Jawaban": "option 4",
        "proxy": {
          "Pertanyaan": "Which subject takes 'don't like'?",
          "Prompt Gambar": "Buatkan gambar orang menunjuk sekelompok orang (They)",
          "Jawaban": "They"
        }
      },
      {
        "Nomor": 27,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I ... like papaya, but I like mango.",
        "Prompt Gambar": "Buatkan gambar pepaya disilang dan mangga dicentang",
        "Pilihan Jawaban": {
          "option 1": "doesn't",
          "option 2": "don't",
          "option 3": "not",
          "option 4": "no"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "He ... like milk, but he likes juice.",
          "Prompt Gambar": "Buatkan gambar susu disilang dan jus dicentang",
          "Jawaban": "doesn't"
        }
      },
      {
        "Nomor": 28,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Cici likes cake. Aisyah likes cake. They ... cake.",
        "Prompt Gambar": "Buatkan gambar Cici dan Aisyah makan kue",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "doesn't like"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Joshua likes bakso. Made likes bakso. They ... bakso.",
          "Prompt Gambar": "Buatkan gambar Joshua dan Made makan bakso",
          "Jawaban": "like"
        }
      },
      {
        "Nomor": 29,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "D - O - N - U - T. I ... it.",
        "Prompt Gambar": "Buatkan gambar anak makan donat dengan senang",
        "Pilihan Jawaban": {
          "option 1": "like",
          "option 2": "likes",
          "option 3": "don't like",
          "option 4": "doesn't like"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "S - P - I - N - A - C - H. He ... it.",
          "Prompt Gambar": "Buatkan gambar anak makan bayam dengan senang",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 30,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Does Cici like satay? No, ...",
        "Prompt Gambar": "Buatkan gambar Cici menolak sate",
        "Pilihan Jawaban": {
          "option 1": "She don't",
          "option 2": "She doesn't",
          "option 3": "He doesn't",
          "option 4": "He don't"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Does Joshua like sushi? No, ...",
          "Prompt Gambar": "Buatkan gambar Joshua menolak sushi",
          "Jawaban": "He doesn't"
        }
      },
      {
        "Nomor": 31,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "He don't like banana.",
        "Prompt Gambar": "Buatkan gambar tanda silang merah pada kalimat 'He don't'",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "He doesn't like banana.",
          "Prompt Gambar": "Buatkan gambar tanda centang hijau pada kalimat 'He doesn't'",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 32,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "I like fried chicken.",
        "Prompt Gambar": "Buatkan gambar anak makan ayam goreng dengan senang",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "I likes fried chicken.",
          "Prompt Gambar": "Buatkan gambar tanda silang pada kata 'likes' setelah 'I'",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 33,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. She likes reading.",
        "Prompt Gambar": "Buatkan gambar anak perempuan sedang membaca buku",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Look at the picture. She likes swimming.",
          "Prompt Gambar": "Buatkan gambar anak perempuan sedang membaca buku (bukan berenang)",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 34,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "They doesn't like coffee.",
        "Prompt Gambar": "Buatkan gambar tanda silang pada kalimat 'They doesn't'",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "They don't like coffee.",
          "Prompt Gambar": "Buatkan gambar orang-orang menolak kopi",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 35,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Do you like water? Yes, I do.",
        "Prompt Gambar": "Buatkan gambar anak minum air dengan jempol ke atas",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Do you like water? Yes, I don't.",
          "Prompt Gambar": "Buatkan gambar wajah bingung",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 36,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Look at the picture. He doesn't like snake.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki takut melihat ular",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Look at the picture. He likes snake.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki takut melihat ular",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 37,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "We use 'likes' for 'She'.",
        "Prompt Gambar": "Buatkan gambar anak perempuan",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "We use 'likes' for 'They'.",
          "Prompt Gambar": "Buatkan gambar sekelompok anak",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 38,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "Does she like chocolate? Yes, she does.",
        "Prompt Gambar": "Buatkan gambar anak perempuan makan cokelat",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "Does she like chocolate? Yes, she do.",
          "Prompt Gambar": "Buatkan gambar tanda silang pada 'she do'",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 39,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "My father likes tea.",
        "Prompt Gambar": "Buatkan gambar ayah minum teh",
        "Jawaban": "Benar",
        "proxy": {
          "Pertanyaan": "My father like tea.",
          "Prompt Gambar": "Buatkan gambar tanda silang pada kata 'like'",
          "Jawaban": "Salah"
        }
      },
      {
        "Nomor": 40,
        "Jenis": "Pertanyaan Benar atau Salah",
        "Pertanyaan": "You likes apple.",
        "Prompt Gambar": "Buatkan gambar tanda silang pada kalimat 'You likes'",
        "Jawaban": "Salah",
        "proxy": {
          "Pertanyaan": "You like apple.",
          "Prompt Gambar": "Buatkan gambar kamu makan apel",
          "Jawaban": "Benar"
        }
      },
      {
        "Nomor": 41,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Make a sentence: She - likes - noodle.",
        "Prompt Gambar": "Buatkan gambar anak perempuan makan mi",
        "Jawaban": "She likes noodle",
        "proxy": {
          "Pertanyaan": "Make a sentence: He - likes - pizza.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki makan pizza",
          "Jawaban": "He likes pizza"
        }
      },
      {
        "Nomor": 42,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Make a negative sentence: I - like - not - do - chili.",
        "Prompt Gambar": "Buatkan gambar cabai dicoret",
        "Jawaban": "I do not like chili / I don't like chili",
        "proxy": {
          "Pertanyaan": "Make a negative sentence: You - like - not - do - coffee.",
          "Prompt Gambar": "Buatkan gambar kopi dicoret",
          "Jawaban": "You do not like coffee / You don't like coffee"
        }
      },
      {
        "Nomor": 43,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Fill in the blank: Aisyah ... (tidak suka) cheese.",
        "Prompt Gambar": "Buatkan gambar Aisyah menolak keju",
        "Jawaban": "doesn't like / does not like",
        "proxy": {
          "Pertanyaan": "Fill in the blank: Made ... (tidak suka) milk.",
          "Prompt Gambar": "Buatkan gambar Made menolak susu",
          "Jawaban": "doesn't like / does not like"
        }
      },
      {
        "Nomor": 44,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Translate to Indonesian: 'Does he like bread?'",
        "Prompt Gambar": "Buatkan gambar tanda tanya di atas roti dan anak laki-laki",
        "Jawaban": "Apakah dia suka roti?",
        "proxy": {
          "Pertanyaan": "Translate to Indonesian: 'Does she like candy?'",
          "Prompt Gambar": "Buatkan gambar tanda tanya di atas permen dan anak perempuan",
          "Jawaban": "Apakah dia suka permen?"
        }
      },
      {
        "Nomor": 45,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Complete the dialogue: Joshua: Do you like soup? Cici: Yes, I ...",
        "Prompt Gambar": "Buatkan gambar Joshua bertanya dan Cici menjawab senang",
        "Jawaban": "do",
        "proxy": {
          "Pertanyaan": "Complete the dialogue: Joshua: Do you like salad? Cici: No, I ...",
          "Prompt Gambar": "Buatkan gambar Joshua bertanya dan Cici menjawab tidak",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 46,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Write a sentence about what you like.",
        "Prompt Gambar": "Buatkan gambar anak sedang memikirkan makanan favoritnya",
        "Jawaban": "I like ... (Jawaban bebas, contoh: I like pizza)",
        "proxy": {
          "Pertanyaan": "Write a sentence about what you dislike.",
          "Prompt Gambar": "Buatkan gambar anak sedang memikirkan makanan yang tidak disukai",
          "Jawaban": "I don't like ... (Jawaban bebas, contoh: I don't like chili)"
        }
      },
      {
        "Nomor": 47,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Change to English: 'Kami suka buah'.",
        "Prompt Gambar": "Buatkan gambar kami makan buah",
        "Jawaban": "We like fruit",
        "proxy": {
          "Pertanyaan": "Change to English: 'Mereka suka sayur'.",
          "Prompt Gambar": "Buatkan gambar mereka makan sayur",
          "Jawaban": "They like vegetable"
        }
      },
      {
        "Nomor": 48,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Fill in the blank: My cat ... fish.",
        "Prompt Gambar": "Buatkan gambar kucing makan ikan",
        "Jawaban": "likes",
        "proxy": {
          "Pertanyaan": "Fill in the blank: My rabbit ... carrot.",
          "Prompt Gambar": "Buatkan gambar kelinci makan wortel",
          "Jawaban": "likes"
        }
      },
      {
        "Nomor": 49,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Look at the picture (Salad X). Write the sentence using 'She'.",
        "Prompt Gambar": "Buatkan gambar anak perempuan dan salad yang disilang",
        "Jawaban": "She doesn't like salad",
        "proxy": {
          "Pertanyaan": "Look at the picture (Soda X). Write the sentence using 'He'.",
          "Prompt Gambar": "Buatkan gambar anak laki-laki dan soda yang disilang",
          "Jawaban": "He doesn't like soda"
        }
      },
      {
        "Nomor": 50,
        "Jenis": "Pertanyaan Esai",
        "Pertanyaan": "Arrange: like - Do - orange - you - ?",
        "Prompt Gambar": "Buatkan gambar jeruk",
        "Jawaban": "Do you like orange?",
        "proxy": {
          "Pertanyaan": "Arrange: like - Do - apple - you - ?",
          "Prompt Gambar": "Buatkan gambar apel",
          "Jawaban": "Do you like apple?"
        }
      }
    ]
  },
  {
    "Chapter": 3,
    "Topic": "I Have Fried Chicken for Breakfast (Meal Times)",
    "Total_Questions": 50,
    "Questions": [
      {
        "Nomor": 1,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "We eat in the morning. It is called ...",
        "Prompt Gambar": "Buatkan gambar suasana pagi hari dengan matahari terbit dan jam menunjukkan pukul 06.00",
        "Pilihan Jawaban": {
          "option 1": "Lunch",
          "option 2": "Dinner",
          "option 3": "Breakfast",
          "option 4": "Supper"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "We eat in the afternoon. It is called ...",
          "Prompt Gambar": "Buatkan gambar suasana siang hari terik dengan jam menunjukkan pukul 12.00",
          "Jawaban": "Lunch"
        }
      },
      {
        "Nomor": 2,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. Joshua has ... for breakfast.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki makan roti panggang dan susu",
        "Pilihan Jawaban": {
          "option 1": "Noodle",
          "option 2": "Bread",
          "option 3": "Rice",
          "option 4": "Pizza"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Look at the picture. Cici has ... for breakfast.",
          "Prompt Gambar": "Buatkan gambar anak perempuan makan nasi goreng",
          "Jawaban": "Fried Rice"
        }
      },
      {
        "Nomor": 3,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "It is 07.00 PM (Night). It is time for ...",
        "Prompt Gambar": "Buatkan gambar jam dinding menunjukkan pukul 7 malam dan jendela gelap ada bulan",
        "Pilihan Jawaban": {
          "option 1": "Breakfast",
          "option 2": "Lunch",
          "option 3": "Dinner",
          "option 4": "School"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "It is 06.00 AM (Morning). It is time for ...",
          "Prompt Gambar": "Buatkan gambar jam dinding menunjukkan pukul 6 pagi dan matahari terbit",
          "Jawaban": "Breakfast"
        }
      },
      {
        "Nomor": 4,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "I ... fried chicken for lunch.",
        "Prompt Gambar": "Buatkan gambar piring berisi ayam goreng",
        "Pilihan Jawaban": {
          "option 1": "has",
          "option 2": "have",
          "option 3": "is",
          "option 4": "are"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "She ... fried fish for dinner.",
          "Prompt Gambar": "Buatkan gambar anak perempuan makan ikan goreng",
          "Jawaban": "has"
        }
      },
      {
        "Nomor": 5,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Mr. Arga has ... for dinner. (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar bapak-bapak sedang makan bistik (steak) daging",
        "Pilihan Jawaban": {
          "option 1": "Steak",
          "option 2": "Bread",
          "option 3": "Candy",
          "option 4": "Cake"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Mrs. Ani has ... for lunch. (Look at the picture)",
          "Prompt Gambar": "Buatkan gambar ibu-ibu sedang makan soto",
          "Jawaban": "Soto"
        }
      },
      {
        "Nomor": 6,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What do you have for breakfast?",
        "Prompt Gambar": "Buatkan gambar semangkuk bubur ayam",
        "Pilihan Jawaban": {
          "option 1": "I have Porridge",
          "option 2": "I have Pizza",
          "option 3": "I have Burger",
          "option 4": "I have Spaghetti"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "What do you have for lunch?",
          "Prompt Gambar": "Buatkan gambar piring berisi mi goreng",
          "Jawaban": "I have Fried Noodle"
        }
      },
      {
        "Nomor": 7,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Translate to Indonesian: 'Dinner'",
        "Prompt Gambar": "Buatkan gambar suasana makan bersama keluarga di malam hari",
        "Pilihan Jawaban": {
          "option 1": "Sarapan",
          "option 2": "Makan Siang",
          "option 3": "Makan Malam",
          "option 4": "Jajan"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Translate to Indonesian: 'Lunch'",
          "Prompt Gambar": "Buatkan gambar suasana makan di siang hari",
          "Jawaban": "Makan Siang"
        }
      },
      {
        "Nomor": 8,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Which one is a healthy breakfast?",
        "Prompt Gambar": "Buatkan 4 gambar: A (Permen), B (Soda), C (Nasi & Telur), D (Es Krim)",
        "Pilihan Jawaban": {
          "option 1": "Candy",
          "option 2": "Soda",
          "option 3": "Rice and Egg",
          "option 4": "Ice Cream"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "Which one is good for lunch?",
          "Prompt Gambar": "Buatkan 4 gambar: A (Cokelat), B (Ikan & Sayur), C (Kue), D (Keripik)",
          "Jawaban": "Fish and Vegetables"
        }
      },
      {
        "Nomor": 9,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "We usually have lunch in the ...",
        "Prompt Gambar": "Buatkan gambar matahari tepat di atas kepala (siang hari)",
        "Pilihan Jawaban": {
          "option 1": "Morning",
          "option 2": "Afternoon",
          "option 3": "Evening",
          "option 4": "Night"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "We usually have breakfast in the ...",
          "Prompt Gambar": "Buatkan gambar matahari baru terbit",
          "Jawaban": "Morning"
        }
      },
      {
        "Nomor": 10,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Look at the picture. Made eats ...",
        "Prompt Gambar": "Buatkan gambar Made makan mi ayam",
        "Pilihan Jawaban": {
          "option 1": "Chicken Noodle",
          "option 2": "Fried Rice",
          "option 3": "Boiled Egg",
          "option 4": "Toast"
        },
        "Jawaban": "option 1",
        "proxy": {
          "Pertanyaan": "Look at the picture. Aisyah eats ...",
          "Prompt Gambar": "Buatkan gambar Aisyah makan sup ayam",
          "Jawaban": "Chicken Soup"
        }
      },
      {
        "Nomor": 11,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Arrange the words: have - I - bread - breakfast - for",
        "Prompt Gambar": "Buatkan gambar roti di piring sarapan",
        "Pilihan Jawaban": {
          "option 1": "I bread have for breakfast",
          "option 2": "I have bread for breakfast",
          "option 3": "Breakfast have I for bread",
          "option 4": "For breakfast bread I have"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Arrange the words: has - She - milk - dinner - for",
          "Prompt Gambar": "Buatkan gambar segelas susu di meja makan malam",
          "Jawaban": "She has milk for dinner"
        }
      },
      {
        "Nomor": 12,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "Does he have burger for lunch? Yes, he ...",
        "Prompt Gambar": "Buatkan gambar anak laki-laki makan burger sambil tersenyum",
        "Pilihan Jawaban": {
          "option 1": "do",
          "option 2": "does",
          "option 3": "don't",
          "option 4": "doesn't"
        },
        "Jawaban": "option 2",
        "proxy": {
          "Pertanyaan": "Do you have rice for dinner? No, I ...",
          "Prompt Gambar": "Buatkan gambar anak menolak nasi",
          "Jawaban": "don't"
        }
      },
      {
        "Nomor": 13,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "'Makan Pagi' in English is ...",
        "Prompt Gambar": "Buatkan gambar suasana makan pagi",
        "Pilihan Jawaban": {
          "option 1": "Lunch",
          "option 2": "Dinner",
          "option 3": "Breakfast",
          "option 4": "Snack"
        },
        "Jawaban": "option 3",
        "proxy": {
          "Pertanyaan": "'Makan Malam' in English is ...",
          "Prompt Gambar": "Buatkan gambar suasana makan malam",
          "Jawaban": "Dinner"
        }
      },
      {
        "Nomor": 14,
        "Jenis": "Pilihan Ganda",
        "Pertanyaan": "What does Cici drink for breakfast? (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar Cici minum susu",
        "Pilihan Jawaban": {
          "option 1": "Tea",
          "option 2": "Coffee",
          "option 3": "Milk",
          "option 4": "Soda"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "What does Father drink for breakfast? (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar Ayah minum kopi",
        "Jawaban": "Coffee"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Before going to school, I have ...",
      "Prompt Gambar": "Buatkan gambar anak berseragam sekolah sedang makan",
      "Pilihan Jawaban": {
        "option 1": "Dinner",
        "option 2": "Lunch",
        "option 3": "Breakfast",
        "option 4": "Supper"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "After coming home from school (1 PM), I have ...",
        "Prompt Gambar": "Buatkan gambar anak pulang sekolah ganti baju lalu makan",
        "Jawaban": "Lunch"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "The family eats together at night. They are having ...",
      "Prompt Gambar": "Buatkan gambar keluarga makan bersama di malam hari",
      "Pilihan Jawaban": {
        "option 1": "Breakfast",
        "option 2": "Lunch",
        "option 3": "Dinner",
        "option 4": "Break time"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "Students eat at school during break time (12 PM). They are having ...",
        "Prompt Gambar": "Buatkan gambar siswa makan di kantin sekolah siang hari",
        "Jawaban": "Lunch"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. What is on the plate?",
      "Prompt Gambar": "Buatkan gambar piring berisi telur dadar (omelet)",
      "Pilihan Jawaban": {
        "option 1": "Fried Chicken",
        "option 2": "Fried Egg / Omelet",
        "option 3": "Fried Rice",
        "option 4": "Fried Fish"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Look at the picture. What is on the plate?",
        "Prompt Gambar": "Buatkan gambar piring berisi sosis bakar",
        "Jawaban": "Sausage"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "My mother cooks ... for dinner.",
      "Prompt Gambar": "Buatkan gambar ibu memasak sup sayur di panci",
      "Pilihan Jawaban": {
        "option 1": "Ice Cream",
        "option 2": "Candy",
        "option 3": "Soup",
        "option 4": "Juice"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "My father buys ... for lunch.",
        "Prompt Gambar": "Buatkan gambar ayah membawa bungkus sate",
        "Jawaban": "Satay"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which sentence is correct?",
      "Prompt Gambar": "Buatkan gambar anak perempuan makan nasi",
      "Pilihan Jawaban": {
        "option 1": "She have rice.",
        "option 2": "She has rice.",
        "option 3": "She eat rice.",
        "option 4": "She eating rice."
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Which sentence is correct?",
        "Prompt Gambar": "Buatkan gambar saya (sudut pandang orang pertama) makan roti",
        "Jawaban": "I have bread."
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "L - U - N - C - H. How do you read it?",
      "Prompt Gambar": "Buatkan gambar tulisan LUNCH",
      "Pilihan Jawaban": {
        "option 1": "Lunc",
        "option 2": "Lanch",
        "option 3": "Lunch",
        "option 4": "Luns"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "D - I - N - N - E - R. How do you read it?",
        "Prompt Gambar": "Buatkan gambar tulisan DINNER",
        "Jawaban": "Diner"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Do you have milk for breakfast? No, ...",
      "Prompt Gambar": "Buatkan gambar anak menggelengkan kepala saat ditawari susu",
      "Pilihan Jawaban": {
        "option 1": "I don't",
        "option 2": "I doesn't",
        "option 3": "I do",
        "option 4": "I am not"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Does she have tea for lunch? No, ...",
        "Prompt Gambar": "Buatkan gambar anak perempuan menolak teh",
        "Jawaban": "She doesn't"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Breakfast is important because it gives us ...",
      "Prompt Gambar": "Buatkan gambar anak berotot/kuat dan bersemangat",
      "Pilihan Jawaban": {
        "option 1": "Sleep",
        "option 2": "Energy",
        "option 3": "Toys",
        "option 4": "Homework"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "We eat food to get ...",
        "Prompt Gambar": "Buatkan gambar baterai terisi penuh (metafora energi)",
        "Jawaban": "Energy"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. This is 'Tempeh'. In Indonesia, we call it ...",
      "Prompt Gambar": "Buatkan gambar tempe goreng",
      "Pilihan Jawaban": {
        "option 1": "Tahu",
        "option 2": "Tempe",
        "option 3": "Telur",
        "option 4": "Terong"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Look at the picture. This is 'Tofu'. In Indonesia, we call it ...",
        "Prompt Gambar": "Buatkan gambar tahu goreng",
        "Jawaban": "Tahu"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What time do you usually have breakfast?",
      "Prompt Gambar": "Buatkan gambar jam menunjukkan pukul 06.30 pagi",
      "Pilihan Jawaban": {
        "option 1": "06.00 PM",
        "option 2": "01.00 PM",
        "option 3": "06.30 AM",
        "option 4": "08.00 PM"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "What time do you usually have dinner?",
        "Prompt Gambar": "Buatkan gambar jam menunjukkan pukul 07.00 malam",
        "Jawaban": "07.00 PM"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "I have ... and ... for breakfast.",
      "Prompt Gambar": "Buatkan gambar roti dan susu di meja",
      "Pilihan Jawaban": {
        "option 1": "Rice and Tea",
        "option 2": "Bread and Milk",
        "option 3": "Noodle and Water",
        "option 4": "Pizza and Soda"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "She has ... and ... for lunch.",
        "Prompt Gambar": "Buatkan gambar nasi goreng dan teh es",
        "Jawaban": "Fried rice and Iced tea"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "My brother has ... for breakfast.",
      "Prompt Gambar": "Buatkan gambar semangkuk sereal",
      "Pilihan Jawaban": {
        "option 1": "Cereal",
        "option 2": "Soup",
        "option 3": "Satay",
        "option 4": "Meatball"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "My sister has ... for breakfast.",
        "Prompt Gambar": "Buatkan gambar pancake/panekuk",
        "Jawaban": "Pancake"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which activity do you do BEFORE breakfast?",
      "Prompt Gambar": "Buatkan gambar anak bangun tidur",
      "Pilihan Jawaban": {
        "option 1": "Sleep",
        "option 2": "Wake up and take a bath",
        "option 3": "Go to school",
        "option 4": "Play football"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Which activity do you do AFTER dinner?",
        "Prompt Gambar": "Buatkan gambar anak gosok gigi lalu tidur",
        "Jawaban": "Brush teeth and Sleep"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Joshua: What do you have for lunch? Made: ...",
      "Prompt Gambar": "Buatkan gambar Made memegang piring berisi gado-gado",
      "Pilihan Jawaban": {
        "option 1": "I have Gado-gado",
        "option 2": "I have Pizza",
        "option 3": "I have Burger",
        "option 4": "I have Cereal"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Cici: What do you have for dinner? Aisyah: ...",
        "Prompt Gambar": "Buatkan gambar Aisyah memegang piring berisi sate",
        "Jawaban": "I have Satay"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "B - R - E - A - D. How do you say it?",
      "Prompt Gambar": "Buatkan gambar roti",
      "Pilihan Jawaban": {
        "option 1": "Bred",
        "option 2": "Brid",
        "option 3": "Brad",
        "option 4": "Brood"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "J - U - I - C - E. How do you say it?",
        "Prompt Gambar": "Buatkan gambar jus",
        "Jawaban": "Jus (pronunciation like 'Joos')"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. Is it healthy?",
      "Prompt Gambar": "Buatkan gambar buah-buahan dan sayuran segar",
      "Pilihan Jawaban": {
        "option 1": "Yes, it is",
        "option 2": "No, it is not",
        "option 3": "I don't know",
        "option 4": "Maybe"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Look at the picture. Is it healthy to eat this every day?",
        "Prompt Gambar": "Buatkan gambar permen dan cokelat yang banyak",
        "Jawaban": "No, it is not"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "We eat Breakfast in the evening.",
      "Prompt Gambar": "Buatkan gambar bulan di langit malam",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "We eat Breakfast in the morning.",
        "Prompt Gambar": "Buatkan gambar matahari terbit",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Lunch is 'Makan Siang'.",
      "Prompt Gambar": "Buatkan gambar jam 12 siang",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Dinner is 'Makan Siang'.",
        "Prompt Gambar": "Buatkan gambar jam 7 malam",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Joshua has pizza for breakfast. (Look at the picture)",
      "Prompt Gambar": "Buatkan gambar Joshua makan bubur ayam",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "Joshua has porridge for breakfast. (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar Joshua makan bubur ayam",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "We use 'He has' for a boy.",
      "Prompt Gambar": "Buatkan gambar anak laki-laki",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "We use 'She have' for a girl.",
        "Prompt Gambar": "Buatkan gambar anak perempuan",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Fried chicken is a food.",
      "Prompt Gambar": "Buatkan gambar ayam goreng",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Milk is a food.",
        "Prompt Gambar": "Buatkan gambar susu",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "It is 01.00 PM. It is time for Dinner.",
      "Prompt Gambar": "Buatkan gambar jam 1 siang",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "It is 01.00 PM. It is time for Lunch.",
        "Prompt Gambar": "Buatkan gambar jam 1 siang",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Look at the picture. Cici has water.",
      "Prompt Gambar": "Buatkan gambar Cici memegang botol air",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Look at the picture. Cici has juice.",
        "Prompt Gambar": "Buatkan gambar Cici memegang botol air mineral bening",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "'I have' means 'Saya mempunyai/makan'.",
      "Prompt Gambar": "Buatkan gambar orang menunjuk dirinya sendiri dan makanannya",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "'You has' is correct grammar.",
        "Prompt Gambar": "Buatkan gambar tanda silang merah pada teks 'You has'",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Noodle is 'Roti' in Indonesian.",
      "Prompt Gambar": "Buatkan gambar mi",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "Noodle is 'Mi' in Indonesian.",
        "Prompt Gambar": "Buatkan gambar mi",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Dinner happens at night.",
      "Prompt Gambar": "Buatkan gambar bulan dan bintang",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Breakfast happens at night.",
        "Prompt Gambar": "Buatkan gambar bulan dan bintang",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Translate to English: 'Saya sarapan roti'.",
      "Prompt Gambar": "Buatkan gambar anak makan roti di pagi hari",
      "Jawaban": "I have bread for breakfast",
      "proxy": {
        "Pertanyaan": "Translate to English: 'Saya makan siang nasi goreng'.",
        "Prompt Gambar": "Buatkan gambar anak makan nasi goreng di siang hari",
        "Jawaban": "I have fried rice for lunch"
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What do you have for dinner? (Answer with: I have ...)",
      "Prompt Gambar": "Buatkan gambar meja makan malam dengan berbagai menu",
      "Jawaban": "I have ... (Jawaban siswa bervariasi, misal: I have soup)",
      "proxy": {
        "Pertanyaan": "What do you have for breakfast? (Answer with: I have ...)",
        "Prompt Gambar": "Buatkan gambar meja sarapan dengan berbagai menu",
        "Jawaban": "I have ... (Jawaban siswa bervariasi)"
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Complete the sentence: She ... (makan) fried chicken.",
      "Prompt Gambar": "Buatkan gambar anak perempuan makan ayam goreng",
      "Jawaban": "has / eats",
      "proxy": {
        "Pertanyaan": "Complete the sentence: He ... (makan) fried noodle.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki makan mi goreng",
        "Jawaban": "has / eats"
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Arrange the words: lunch - for - soup - We - have",
      "Prompt Gambar": "Buatkan gambar keluarga makan sup bersama",
      "Jawaban": "We have soup for lunch",
      "proxy": {
        "Pertanyaan": "Arrange the words: breakfast - for - milk - I - have",
        "Prompt Gambar": "Buatkan gambar anak minum susu",
        "Jawaban": "I have milk for breakfast"
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Mention 2 foods for breakfast!",
      "Prompt Gambar": "Buatkan gambar roti, nasi goreng, bubur, sereal",
      "Jawaban": "Bread, Fried Rice, Porridge, Cereal (Pilih 2)",
      "proxy": {
        "Pertanyaan": "Mention 2 drinks for breakfast!",
        "Prompt Gambar": "Buatkan gambar susu, teh, air, jus",
        "Jawaban": "Milk, Tea, Water, Juice (Pilih 2)"
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What is 'Makan Siang' in English?",
      "Prompt Gambar": "Buatkan gambar suasana siang hari",
      "Jawaban": "Lunch",
      "proxy": {
        "Pertanyaan": "What is 'Sarapan' in English?",
        "Prompt Gambar": "Buatkan gambar suasana pagi hari",
        "Jawaban": "Breakfast"
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Look at the picture. Write the sentence. (Subject: I)",
      "Prompt Gambar": "Buatkan gambar tangan memegang pizza",
      "Jawaban": "I have pizza",
      "proxy": {
        "Pertanyaan": "Look at the picture. Write the sentence. (Subject: He)",
        "Prompt Gambar": "Buatkan gambar anak laki-laki memegang burger",
        "Jawaban": "He has burger"
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Translate to Indonesian: 'I have water'.",
      "Prompt Gambar": "Buatkan gambar gelas air",
      "Jawaban": "Saya minum air / Saya mempunyai air",
      "proxy": {
        "Pertanyaan": "Translate to Indonesian: 'I have tea'.",
        "Prompt Gambar": "Buatkan gambar cangkir teh",
        "Jawaban": "Saya minum teh / Saya mempunyai teh"
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Fill in the blank: Joshua ... (have/has) milk.",
      "Prompt Gambar": "Buatkan gambar Joshua minum susu",
      "Jawaban": "has",
      "proxy": {
        "Pertanyaan": "Fill in the blank: They ... (have/has) pizza.",
        "Prompt Gambar": "Buatkan gambar sekelompok anak makan pizza",
        "Jawaban": "have"
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Unscramble: r - e - n - n - i - d (Time to eat at night)",
      "Prompt Gambar": "Buatkan gambar bulan di jendela saat makan",
      "Jawaban": "Dinner",
      "proxy": {
        "Pertanyaan": "Unscramble: c - h - n - u - l (Time to eat in the afternoon)",
        "Prompt Gambar": "Buatkan gambar matahari terik saat makan",
        "Jawaban": "Lunch"
      }
    }
  ]
},
  {
  "Chapter": 4,
  "Topic": "Do You Like Swimming? (Hobbies)",
  "Total_Questions": 50,
  "Questions": [
    {
      "Nomor": 1,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. What is his hobby?",
      "Prompt Gambar": "Buatkan gambar anak laki-laki sedang berenang di kolam renang",
      "Pilihan Jawaban": {
        "option 1": "Swimming",
        "option 2": "Running",
        "option 3": "Reading",
        "option 4": "Cooking"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "What is her hobby? (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar anak perempuan sedang menari balet",
        "Jawaban": "Dancing"
      }
    },
    {
      "Nomor": 2,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Made likes ... in the field.",
      "Prompt Gambar": "Buatkan gambar Made sedang bermain sepak bola di lapangan",
      "Pilihan Jawaban": {
        "option 1": "Singing",
        "option 2": "Playing football",
        "option 3": "Swimming",
        "option 4": "Reading"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Joshua likes ... in the park.",
        "Prompt Gambar": "Buatkan gambar Joshua sedang bermain layang-layang",
        "Jawaban": "Playing kite"
      }
    },
    {
      "Nomor": 3,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Do you like ...? (Look at the picture)",
      "Prompt Gambar": "Buatkan gambar anak sedang bernyanyi dengan mikrofon",
      "Pilihan Jawaban": {
        "option 1": "Dancing",
        "option 2": "Singing",
        "option 3": "Cooking",
        "option 4": "Fishing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Do you like ...? (Look at the picture)",
        "Prompt Gambar": "Buatkan gambar anak sedang melukis di kanvas",
        "Jawaban": "Painting"
      }
    },
    {
      "Nomor": 4,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Cici likes reading ... in the library.",
      "Prompt Gambar": "Buatkan gambar Cici sedang membaca buku di perpustakaan",
      "Pilihan Jawaban": {
        "option 1": "Ball",
        "option 2": "Bike",
        "option 3": "Book",
        "option 4": "Kite"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "Aisyah likes playing ... in the room.",
        "Prompt Gambar": "Buatkan gambar Aisyah sedang bermain boneka",
        "Jawaban": "Doll"
      }
    },
    {
      "Nomor": 5,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Translate to Indonesian: 'My hobby is cooking'.",
      "Prompt Gambar": "Buatkan gambar anak sedang memasak di dapur",
      "Pilihan Jawaban": {
        "option 1": "Hobi saya makan",
        "option 2": "Hobi saya memasak",
        "option 3": "Hobi saya membaca",
        "option 4": "Hobi saya menyanyi"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Translate to Indonesian: 'My hobby is fishing'.",
        "Prompt Gambar": "Buatkan gambar anak sedang memancing ikan",
        "Jawaban": "Hobi saya memancing"
      }
    },
    {
      "Nomor": 6,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Joshua: Do you like swimming? Made: Yes, ...",
      "Prompt Gambar": "Buatkan gambar Made tersenyum dan mengacungkan jempol di kolam renang",
      "Pilihan Jawaban": {
        "option 1": "I don't",
        "option 2": "I do",
        "option 3": "I am",
        "option 4": "I not"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Cici: Do you like dancing? Aisyah: No, ...",
        "Prompt Gambar": "Buatkan gambar Aisyah menggelengkan kepala saat diajak menari",
        "Jawaban": "I don't"
      }
    },
    {
      "Nomor": 7,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which picture shows 'Cycling'?",
      "Prompt Gambar": "Buatkan 4 gambar: A (Bersepeda), B (Lari), C (Berenang), D (Tidur)",
      "Pilihan Jawaban": {
        "option 1": "Picture A",
        "option 2": "Picture B",
        "option 3": "Picture C",
        "option 4": "Picture D"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Which picture shows 'Gardening'?",
        "Prompt Gambar": "Buatkan 4 gambar: A (Memasak), B (Menyiram tanaman), C (Menyanyi), D (Menari)",
        "Jawaban": "Picture B"
      }
    },
    {
      "Nomor": 8,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Arrange the letters: D - A - N - C - I - N - G",
      "Prompt Gambar": "Buatkan gambar penari balet",
      "Pilihan Jawaban": {
        "option 1": "Singing",
        "option 2": "Dancing",
        "option 3": "Reading",
        "option 4": "Fishing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Arrange the letters: R - E - A - D - I - N - G",
        "Prompt Gambar": "Buatkan gambar anak membaca buku",
        "Jawaban": "Reading"
      }
    },
    {
      "Nomor": 9,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "He likes ... (bermain) guitar.",
      "Prompt Gambar": "Buatkan gambar anak laki-laki bermain gitar",
      "Pilihan Jawaban": {
        "option 1": "Buying",
        "option 2": "Cooking",
        "option 3": "Playing",
        "option 4": "Sleeping"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "She likes ... (menonton) TV.",
        "Prompt Gambar": "Buatkan gambar anak perempuan menonton TV",
        "Jawaban": "Watching"
      }
    },
    {
      "Nomor": 10,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What do you need for 'Painting'?",
      "Prompt Gambar": "Buatkan gambar peralatan melukis (kuas dan cat)",
      "Pilihan Jawaban": {
        "option 1": "Ball",
        "option 2": "Bicycle",
        "option 3": "Brush and Paint",
        "option 4": "Book"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "What do you need for 'Fishing'?",
        "Prompt Gambar": "Buatkan gambar alat pancing",
        "Jawaban": "Fishing rod"
      }
    },
    {
      "Nomor": 11,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "My hobby is ... (berkebun).",
      "Prompt Gambar": "Buatkan gambar anak sedang menanam bunga",
      "Pilihan Jawaban": {
        "option 1": "Gardening",
        "option 2": "Cooking",
        "option 3": "Fishing",
        "option 4": "Cycling"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "My hobby is ... (berkemah).",
        "Prompt Gambar": "Buatkan gambar tenda kemah di alam",
        "Jawaban": "Camping"
      }
    },
    {
      "Nomor": 12,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Does Aisyah like singing? Yes, she ...",
      "Prompt Gambar": "Buatkan gambar Aisyah bernyanyi dengan gembira",
      "Pilihan Jawaban": {
        "option 1": "do",
        "option 2": "does",
        "option 3": "don't",
        "option 4": "doesn't"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Does Made like cooking? No, he ...",
        "Prompt Gambar": "Buatkan gambar Made bingung di dapur",
        "Jawaban": "doesn't"
      }
    },
    {
      "Nomor": 13,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. They are ...",
      "Prompt Gambar": "Buatkan gambar sekelompok anak sedang berlari",
      "Pilihan Jawaban": {
        "option 1": "Swimming",
        "option 2": "Sleeping",
        "option 3": "Running",
        "option 4": "Sitting"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "Look at the picture. They are ...",
        "Prompt Gambar": "Buatkan gambar sekelompok anak sedang menari",
        "Jawaban": "Dancing"
      }
    },
    {
      "Nomor": 14,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "B - I - K - E. We use this for ...",
      "Prompt Gambar": "Buatkan gambar sepeda",
      "Pilihan Jawaban": {
        "option 1": "Swimming",
        "option 2": "Cycling",
        "option 3": "Running",
        "option 4": "Reading"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "B - O - O - K. We use this for ...",
        "Prompt Gambar": "Buatkan gambar buku",
        "Jawaban": "Reading"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Translate: 'Saya suka bermain layang-layang'.",
      "Prompt Gambar": "Buatkan gambar anak bermain layangan di lapangan",
      "Pilihan Jawaban": {
        "option 1": "I like playing football",
        "option 2": "I like playing kite",
        "option 3": "I like playing doll",
        "option 4": "I like playing marbles"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Translate: 'Saya suka bermain kelereng'.",
        "Prompt Gambar": "Buatkan gambar anak bermain kelereng",
        "Jawaban": "I like playing marbles"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "S - W - I - M - M - I - N - G. How do you say it?",
      "Prompt Gambar": "Buatkan gambar kolam renang",
      "Pilihan Jawaban": {
        "option 1": "Swiming",
        "option 2": "Sweming",
        "option 3": "Swimming",
        "option 4": "Swimeng"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "C - O - O - K - I - N - G. How do you say it?",
        "Prompt Gambar": "Buatkan gambar alat masak",
        "Jawaban": "Cooking"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "A place for 'Reading books' is ...",
      "Prompt Gambar": "Buatkan gambar perpustakaan penuh buku",
      "Pilihan Jawaban": {
        "option 1": "Canteen",
        "option 2": "Library",
        "option 3": "Field",
        "option 4": "Pool"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "A place for 'Swimming' is ...",
        "Prompt Gambar": "Buatkan gambar kolam renang",
        "Jawaban": "Swimming pool"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Joshua likes playing ... (bola basket).",
      "Prompt Gambar": "Buatkan gambar bola basket dan ring",
      "Pilihan Jawaban": {
        "option 1": "Basketball",
        "option 2": "Volleyball",
        "option 3": "Football",
        "option 4": "Tennis"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Made likes playing ... (sepak bola).",
        "Prompt Gambar": "Buatkan gambar bola sepak",
        "Jawaban": "Football"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What is 'Menyanyi' in English?",
      "Prompt Gambar": "Buatkan gambar not balok musik",
      "Pilihan Jawaban": {
        "option 1": "Dancing",
        "option 2": "Singing",
        "option 3": "Reading",
        "option 4": "Writing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "What is 'Menari' in English?",
        "Prompt Gambar": "Buatkan gambar sepatu tari",
        "Jawaban": "Dancing"
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Arrange the words: likes - She - comics - reading",
      "Prompt Gambar": "Buatkan gambar anak perempuan membaca komik",
      "Pilihan Jawaban": {
        "option 1": "She reading likes comics",
        "option 2": "She likes reading comics",
        "option 3": "Reading comics likes She",
        "option 4": "Comics reading she likes"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Arrange the words: likes - He - football - playing",
        "Prompt Gambar": "Buatkan gambar anak laki-laki bermain bola",
        "Jawaban": "He likes playing football"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Do you like playing doll? No, I like ...",
      "Prompt Gambar": "Buatkan gambar anak perempuan bermain lompat tali",
      "Pilihan Jawaban": {
        "option 1": "Playing rope skipping",
        "option 2": "Playing football",
        "option 3": "Sleeping",
        "option 4": "Eating"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Do you like playing kite? No, I like ...",
        "Prompt Gambar": "Buatkan gambar anak laki-laki bermain mobil-mobilan",
        "Jawaban": "Playing toy cars"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which one is an outdoor (di luar ruangan) hobby?",
      "Prompt Gambar": "Buatkan gambar taman bermain",
      "Pilihan Jawaban": {
        "option 1": "Watching TV",
        "option 2": "Playing Football",
        "option 3": "Sleeping",
        "option 4": "Cooking"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Which one is an indoor (di dalam ruangan) hobby?",
        "Prompt Gambar": "Buatkan gambar ruang keluarga",
        "Jawaban": "Watching TV"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "I use a camera for my hobby. My hobby is ...",
      "Prompt Gambar": "Buatkan gambar kamera foto",
      "Pilihan Jawaban": {
        "option 1": "Cooking",
        "option 2": "Photography",
        "option 3": "Fishing",
        "option 4": "Dancing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "I use a bicycle for my hobby. My hobby is ...",
        "Prompt Gambar": "Buatkan gambar sepeda",
        "Jawaban": "Cycling"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. Cici and friends are ...",
      "Prompt Gambar": "Buatkan gambar Cici dan teman-teman sedang bermain petak umpet",
      "Pilihan Jawaban": {
        "option 1": "Playing Hide and Seek",
        "option 2": "Playing Football",
        "option 3": "Swimming",
        "option 4": "Reading"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Look at the picture. They are ...",
        "Prompt Gambar": "Buatkan gambar anak-anak sedang bermain ular naga",
        "Jawaban": "Playing Snake and Ladder (atau permainan tradisional serupa)"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What is your hobby?",
      "Prompt Gambar": "Buatkan gambar anak sedang menulis cerita",
      "Pilihan Jawaban": {
        "option 1": "My hobby is Writing",
        "option 2": "My hobby is Running",
        "option 3": "My hobby is Eating",
        "option 4": "My hobby is Sleeping"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "What is your hobby?",
        "Prompt Gambar": "Buatkan gambar anak sedang mendengarkan musik",
        "Jawaban": "My hobby is Listening to music"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "He likes to draw pictures. His hobby is ...",
      "Prompt Gambar": "Buatkan gambar anak sedang menggambar pemandangan",
      "Pilihan Jawaban": {
        "option 1": "Singing",
        "option 2": "Drawing",
        "option 3": "Dancing",
        "option 4": "Cooking"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "She likes to make cakes. Her hobby is ...",
        "Prompt Gambar": "Buatkan gambar anak membuat kue",
        "Jawaban": "Cooking / Baking"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which one is NOT a hobby?",
      "Prompt Gambar": "Buatkan 4 gambar: A (Berenang), B (Menyanyi), C (Menangis), D (Membaca)",
      "Pilihan Jawaban": {
        "option 1": "Swimming",
        "option 2": "Singing",
        "option 3": "Crying",
        "option 4": "Reading"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "Which one is NOT a hobby?",
        "Prompt Gambar": "Buatkan 4 gambar: A (Sakit), B (Berlari), C (Menari), D (Memancing)",
        "Jawaban": "Being sick"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the picture. They are playing ...",
      "Prompt Gambar": "Buatkan gambar anak-anak bermain badminton",
      "Pilihan Jawaban": {
        "option 1": "Basketball",
        "option 2": "Badminton",
        "option 3": "Football",
        "option 4": "Tennis"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Look at the picture. They are playing ...",
        "Prompt Gambar": "Buatkan gambar anak-anak bermain bola voli",
        "Jawaban": "Volleyball"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Where do you usually go swimming?",
      "Prompt Gambar": "Buatkan gambar kolam renang umum",
      "Pilihan Jawaban": {
        "option 1": "In the kitchen",
        "option 2": "In the swimming pool",
        "option 3": "In the classroom",
        "option 4": "In the library"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Where do you usually play football?",
        "Prompt Gambar": "Buatkan gambar lapangan sepak bola",
        "Jawaban": "In the field"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "My father likes ... newspaper.",
      "Prompt Gambar": "Buatkan gambar ayah duduk membaca koran",
      "Pilihan Jawaban": {
        "option 1": "Writing",
        "option 2": "Reading",
        "option 3": "Eating",
        "option 4": "Singing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "My mother likes ... magazines.",
        "Prompt Gambar": "Buatkan gambar ibu membaca majalah",
        "Jawaban": "Reading"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Look at the picture. Her hobby is Singing.",
      "Prompt Gambar": "Buatkan gambar anak perempuan memegang mikrofon dan bernyanyi",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Look at the picture. His hobby is Singing.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki sedang bermain bola",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Swimming means 'Berenang'.",
      "Prompt Gambar": "Buatkan gambar orang berenang",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Cooking means 'Berenang'.",
        "Prompt Gambar": "Buatkan gambar orang memasak",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "We play football in the library.",
      "Prompt Gambar": "Buatkan gambar perpustakaan yang tenang dengan tanda 'Harap Tenang'",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "We read books in the library.",
        "Prompt Gambar": "Buatkan gambar anak membaca di perpustakaan",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Look at the picture. He likes playing guitar.",
      "Prompt Gambar": "Buatkan gambar anak laki-laki memegang gitar",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Look at the picture. He likes playing piano.",
        "Prompt Gambar": "Buatkan gambar anak laki-laki memegang gitar (bukan piano)",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Gardening is a hobby about planting flowers.",
      "Prompt Gambar": "Buatkan gambar kebun bunga yang indah",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Gardening is a hobby about flying kites.",
        "Prompt Gambar": "Buatkan gambar layang-layang di langit",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "'Do you like cooking?' is asking about hobby.",
      "Prompt Gambar": "Buatkan gambar tanda tanya besar di atas peralatan masak",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "'What is your name?' is asking about hobby.",
        "Prompt Gambar": "Buatkan gambar tanda pengenal nama",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Look at the picture. They like cycling.",
      "Prompt Gambar": "Buatkan gambar dua anak bersepeda bersama",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Look at the picture. They like swimming.",
        "Prompt Gambar": "Buatkan gambar dua anak bersepeda (bukan berenang)",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Fishing needs a ball.",
      "Prompt Gambar": "Buatkan gambar alat pancing dan bola",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "Football needs a ball.",
        "Prompt Gambar": "Buatkan gambar bola sepak",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "She likes watching TV.",
      "Prompt Gambar": "Buatkan gambar anak perempuan duduk di depan TV",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "She likes sleeping.",
        "Prompt Gambar": "Buatkan gambar anak perempuan sedang lari",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "My hobby is painting. I need a brush.",
      "Prompt Gambar": "Buatkan gambar kuas lukis",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "My hobby is reading. I need a brush.",
        "Prompt Gambar": "Buatkan gambar buku",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Translate to English: 'Hobi saya berenang'.",
      "Prompt Gambar": "Buatkan gambar anak berenang",
      "Jawaban": "My hobby is swimming",
      "proxy": {
        "Pertanyaan": "Translate to English: 'Hobi saya menyanyi'.",
        "Prompt Gambar": "Buatkan gambar anak menyanyi",
        "Jawaban": "My hobby is singing"
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Arrange the words: likes - Joshua - football - playing",
      "Prompt Gambar": "Buatkan gambar Joshua bermain bola",
      "Jawaban": "Joshua likes playing football",
      "proxy": {
        "Pertanyaan": "Arrange the words: likes - Cici - cooking",
        "Prompt Gambar": "Buatkan gambar Cici memasak",
        "Jawaban": "Cici likes cooking"
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What do you need to play kite?",
      "Prompt Gambar": "Buatkan gambar layang-layang",
      "Jawaban": "Kite / String (Benang)",
      "proxy": {
        "Pertanyaan": "What do you need to play football?",
        "Prompt Gambar": "Buatkan gambar bola sepak",
        "Jawaban": "Ball"
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Mention 2 hobbies!",
      "Prompt Gambar": "Buatkan gambar berbagai ikon hobi",
      "Jawaban": "Swimming, Reading, Singing, Dancing (Pilih 2)",
      "proxy": {
        "Pertanyaan": "Mention 2 sports!",
        "Prompt Gambar": "Buatkan gambar berbagai ikon olahraga",
        "Jawaban": "Football, Badminton, Basketball, Tennis (Pilih 2)"
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What is 'Membaca' in English?",
      "Prompt Gambar": "Buatkan gambar buku terbuka",
      "Jawaban": "Reading",
      "proxy": {
        "Pertanyaan": "What is 'Menulis' in English?",
        "Prompt Gambar": "Buatkan gambar pensil dan kertas",
        "Jawaban": "Writing"
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Do you like dancing? (Answer with Yes or No)",
      "Prompt Gambar": "Buatkan gambar sepatu tari",
      "Jawaban": "Yes, I do / No, I don't",
      "proxy": {
        "Pertanyaan": "Do you like singing? (Answer with Yes or No)",
        "Prompt Gambar": "Buatkan gambar mikrofon",
        "Jawaban": "Yes, I do / No, I don't"
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Look at the picture. What is he doing?",
      "Prompt Gambar": "Buatkan gambar anak sedang memancing di sungai",
      "Jawaban": "Fishing",
      "proxy": {
        "Pertanyaan": "Look at the picture. What is she doing?",
        "Prompt Gambar": "Buatkan gambar anak sedang memasak di dapur",
        "Jawaban": "Cooking"
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Fill in the blank: I like ... music.",
      "Prompt Gambar": "Buatkan gambar headphone dan not balok",
      "Jawaban": "listening to",
      "proxy": {
        "Pertanyaan": "Fill in the blank: She likes ... a movie.",
        "Prompt Gambar": "Buatkan gambar layar bioskop/TV",
        "Jawaban": "watching"
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Unscramble: g - n - i - c - n - a - d",
      "Prompt Gambar": "Buatkan gambar orang menari",
      "Jawaban": "Dancing",
      "proxy": {
        "Pertanyaan": "Unscramble: g - n - i - k - o - o - c",
        "Prompt Gambar": "Buatkan gambar panci masak",
        "Jawaban": "Cooking"
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What is your hobby? (Answer in full sentence)",
      "Prompt Gambar": "Buatkan gambar tanda tanya besar yang dikelilingi ikon hobi",
      "Jawaban": "My hobby is ... (Jawaban siswa bervariasi)",
      "proxy": {
        "Pertanyaan": "What is your friend's hobby? (Answer in full sentence)",
        "Prompt Gambar": "Buatkan gambar dua teman sedang mengobrol",
        "Jawaban": "His/Her hobby is ... (Jawaban siswa bervariasi)"
      }
    }
  ]
},
  {
  "Chapter": 5,
  "Topic": "I Like Riding a Bike on Sunday (Days of the Week)",
  "Total_Questions": 50,
  "Questions": [
    {
      "Nomor": 1,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "How many days are there in a week?",
      "Prompt Gambar": "Buatkan gambar kalender satu minggu penuh",
      "Pilihan Jawaban": {
        "option 1": "Six days",
        "option 2": "Seven days",
        "option 3": "Five days",
        "option 4": "Eight days"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "How many months are there in a year?",
        "Prompt Gambar": "Buatkan gambar kalender satu tahun penuh",
        "Jawaban": "Twelve months"
      }
    },
    {
      "Nomor": 2,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What is the first day of the week?",
      "Prompt Gambar": "Buatkan gambar kalender dengan hari Minggu dilingkari merah",
      "Pilihan Jawaban": {
        "option 1": "Monday",
        "option 2": "Friday",
        "option 3": "Sunday",
        "option 4": "Saturday"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "What is the day after Sunday?",
        "Prompt Gambar": "Buatkan gambar kalender dengan hari Senin dilingkari",
        "Jawaban": "Monday"
      }
    },
    {
      "Nomor": 3,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "We have a flag ceremony at school on ...",
      "Prompt Gambar": "Buatkan gambar upacara bendera di sekolah",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Monday",
        "option 3": "Tuesday",
        "option 4": "Friday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "We usually have a holiday/weekend on ...",
        "Prompt Gambar": "Buatkan gambar keluarga berlibur",
        "Jawaban": "Sunday"
      }
    },
    {
      "Nomor": 4,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What day comes AFTER Monday?",
      "Prompt Gambar": "Buatkan gambar urutan hari: Monday -> ?",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Wednesday",
        "option 3": "Tuesday",
        "option 4": "Thursday"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "What day comes AFTER Tuesday?",
        "Prompt Gambar": "Buatkan gambar urutan hari: Tuesday -> ?",
        "Jawaban": "Wednesday"
      }
    },
    {
      "Nomor": 5,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What day comes BEFORE Friday?",
      "Prompt Gambar": "Buatkan gambar urutan hari: ? -> Friday",
      "Pilihan Jawaban": {
        "option 1": "Thursday",
        "option 2": "Saturday",
        "option 3": "Wednesday",
        "option 4": "Tuesday"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "What day comes BEFORE Sunday?",
        "Prompt Gambar": "Buatkan gambar urutan hari: ? -> Sunday",
        "Jawaban": "Saturday"
      }
    },
    {
      "Nomor": 6,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "The day between Tuesday and Thursday is ...",
      "Prompt Gambar": "Buatkan gambar kalender: Selasa - ? - Kamis",
      "Pilihan Jawaban": {
        "option 1": "Monday",
        "option 2": "Friday",
        "option 3": "Wednesday",
        "option 4": "Saturday"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "The day between Friday and Sunday is ...",
        "Prompt Gambar": "Buatkan gambar kalender: Jumat - ? - Minggu",
        "Jawaban": "Saturday"
      }
    },
    {
      "Nomor": 7,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Translate to English: 'Jumat'.",
      "Prompt Gambar": "Buatkan gambar orang pergi sholat Jumat",
      "Pilihan Jawaban": {
        "option 1": "Friday",
        "option 2": "Saturday",
        "option 3": "Thursday",
        "option 4": "Monday"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Translate to English: 'Sabtu'.",
        "Prompt Gambar": "Buatkan gambar anak bermain di hari Sabtu",
        "Jawaban": "Saturday"
      }
    },
    {
      "Nomor": 8,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Translate to Indonesian: 'Wednesday'.",
      "Prompt Gambar": "Buatkan gambar jadwal pelajaran hari Rabu",
      "Pilihan Jawaban": {
        "option 1": "Selasa",
        "option 2": "Rabu",
        "option 3": "Kamis",
        "option 4": "Jumat"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Translate to Indonesian: 'Thursday'.",
        "Prompt Gambar": "Buatkan gambar jadwal pelajaran hari Kamis",
        "Jawaban": "Kamis"
      }
    },
    {
      "Nomor": 9,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Joshua likes ... on Sunday.",
      "Prompt Gambar": "Buatkan gambar Joshua sedang bersepeda di taman pada hari Minggu",
      "Pilihan Jawaban": {
        "option 1": "Studying",
        "option 2": "Cycling",
        "option 3": "Cooking",
        "option 4": "Sleeping"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Made likes ... on Sunday.",
        "Prompt Gambar": "Buatkan gambar Made sedang berenang pada hari Minggu",
        "Jawaban": "Swimming"
      }
    },
    {
      "Nomor": 10,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Today is Monday. Tomorrow (besok) is ...",
      "Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Senin",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Tuesday",
        "option 3": "Wednesday",
        "option 4": "Saturday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Today is Saturday. Tomorrow is ...",
        "Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Sabtu",
        "Jawaban": "Sunday"
      }
    },
    {
      "Nomor": 11,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Today is Friday. Yesterday (kemarin) was ...",
      "Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Jumat",
      "Pilihan Jawaban": {
        "option 1": "Thursday",
        "option 2": "Wednesday",
        "option 3": "Saturday",
        "option 4": "Sunday"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Today is Wednesday. Yesterday was ...",
        "Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Rabu",
        "Jawaban": "Tuesday"
      }
    },
    {
      "Nomor": 12,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Arrange the letters: S - U - N - D - Y - A",
      "Prompt Gambar": "Buatkan gambar matahari cerah di hari libur",
      "Pilihan Jawaban": {
        "option 1": "Sanduy",
        "option 2": "Sunday",
        "option 3": "Syudan",
        "option 4": "Dansuy"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Arrange the letters: M - O - N - D - A - Y",
        "Prompt Gambar": "Buatkan gambar anak sekolah upacara",
        "Jawaban": "Monday"
      }
    },
    {
      "Nomor": 13,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "I like swimming on ... (Sabtu).",
      "Prompt Gambar": "Buatkan gambar anak berenang dan kalender bertuliskan 'Sabtu'",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Saturday",
        "option 3": "Monday",
        "option 4": "Friday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "I like reading on ... (Minggu).",
        "Prompt Gambar": "Buatkan gambar anak membaca buku dan kalender bertuliskan 'Minggu'",
        "Jawaban": "Sunday"
      }
    },
    {
      "Nomor": 14,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Which day starts with letter 'T'?",
      "Prompt Gambar": "Buatkan gambar huruf T besar",
      "Pilihan Jawaban": {
        "option 1": "Monday and Sunday",
        "option 2": "Tuesday and Thursday",
        "option 3": "Wednesday and Friday",
        "option 4": "Saturday and Sunday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Which day starts with letter 'S'?",
        "Prompt Gambar": "Buatkan gambar huruf S besar",
        "Jawaban": "Saturday and Sunday"
      }
    },
    {
      "Nomor": 15,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "We don't go to school on ...",
      "Prompt Gambar": "Buatkan gambar sekolah yang tutup/gerbang dikunci",
      "Pilihan Jawaban": {
        "option 1": "Monday",
        "option 2": "Wednesday",
        "option 3": "Friday",
        "option 4": "Sunday"
      },
      "Jawaban": "option 4",
      "proxy": {
        "Pertanyaan": "We study at school from ... to ...",
        "Prompt Gambar": "Buatkan gambar anak belajar di kelas",
        "Jawaban": "Monday to Friday (or Saturday)"
      }
    },
    {
      "Nomor": 16,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Cici: What is your hobby on Sunday? Aisyah: ...",
      "Prompt Gambar": "Buatkan gambar Aisyah sedang memasak",
      "Pilihan Jawaban": {
        "option 1": "I like cooking",
        "option 2": "I like sleeping",
        "option 3": "I like studying",
        "option 4": "I like crying"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "Made: What do you do on Saturday? Joshua: ...",
        "Prompt Gambar": "Buatkan gambar Joshua sedang menonton TV",
        "Jawaban": "I watch TV"
      }
    },
    {
      "Nomor": 17,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "F - R - I - D - ... - Y. Complete the word.",
      "Prompt Gambar": "Buatkan gambar masjid (asosiasi Jumat)",
      "Pilihan Jawaban": {
        "option 1": "A",
        "option 2": "E",
        "option 3": "I",
        "option 4": "O"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "T - U - E - ... - D - A - Y. Complete the word.",
        "Prompt Gambar": "Buatkan gambar kalender hari Selasa",
        "Jawaban": "S"
      }
    },
    {
      "Nomor": 18,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Mirna has a dancing course on ... (Senin).",
      "Prompt Gambar": "Buatkan gambar Mirna menari dan kalender Senin",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Monday",
        "option 3": "Tuesday",
        "option 4": "Wednesday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Mirna has a swimming course on ... (Selasa).",
        "Prompt Gambar": "Buatkan gambar Mirna berenang dan kalender Selasa",
        "Jawaban": "Tuesday"
      }
    },
    {
      "Nomor": 19,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Arrange the sentence: likes - He - fishing - Sunday - on",
      "Prompt Gambar": "Buatkan gambar anak memancing di hari Minggu",
      "Pilihan Jawaban": {
        "option 1": "He fishing likes on Sunday",
        "option 2": "He likes fishing on Sunday",
        "option 3": "Sunday likes fishing on He",
        "option 4": "On Sunday fishing he likes"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Arrange the sentence: cycling - We - like - Friday - on",
        "Prompt Gambar": "Buatkan gambar anak-anak bersepeda di hari Jumat",
        "Jawaban": "We like cycling on Friday"
      }
    },
    {
      "Nomor": 20,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Look at the schedule. What does she do on Saturday?",
      "Prompt Gambar": "Buatkan tabel jadwal: Saturday - Rollerblade",
      "Pilihan Jawaban": {
        "option 1": "Swimming",
        "option 2": "Rollerblade",
        "option 3": "Karate",
        "option 4": "Dancing"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Look at the schedule. What does she do on Friday?",
        "Prompt Gambar": "Buatkan tabel jadwal: Friday - Karate",
        "Jawaban": "Karate"
      }
    },
    {
      "Nomor": 21,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Is today Sunday? No, today is ... (Sabtu)",
      "Prompt Gambar": "Buatkan gambar kalender bertuliskan 'Sabtu'",
      "Pilihan Jawaban": {
        "option 1": "Sunday",
        "option 2": "Monday",
        "option 3": "Saturday",
        "option 4": "Friday"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "Is tomorrow Friday? No, tomorrow is ... (Kamis)",
        "Prompt Gambar": "Buatkan gambar kalender bertuliskan 'Kamis'",
        "Jawaban": "Thursday"
      }
    },
    {
      "Nomor": 22,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "My favorite day is ... because no school.",
      "Prompt Gambar": "Buatkan gambar anak bersantai di rumah",
      "Pilihan Jawaban": {
        "option 1": "Monday",
        "option 2": "Tuesday",
        "option 3": "Wednesday",
        "option 4": "Sunday"
      },
      "Jawaban": "option 4",
      "proxy": {
        "Pertanyaan": "I like ... because I can play all day.",
        "Prompt Gambar": "Buatkan gambar anak bermain seharian",
        "Jawaban": "Sunday / Holiday"
      }
    },
    {
      "Nomor": 23,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "T - H - U - ... - S - D - A - Y. What is the missing letter?",
      "Prompt Gambar": "Buatkan gambar kalender Kamis",
      "Pilihan Jawaban": {
        "option 1": "R",
        "option 2": "E",
        "option 3": "A",
        "option 4": "U"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "W - E - D - N - E - ... - D - A - Y. What is the missing letter?",
        "Prompt Gambar": "Buatkan gambar kalender Rabu",
        "Jawaban": "S"
      }
    },
    {
      "Nomor": 24,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "Do you go to school on Sunday?",
      "Prompt Gambar": "Buatkan gambar sekolah yang sepi di hari Minggu",
      "Pilihan Jawaban": {
        "option 1": "Yes, I do",
        "option 2": "No, I don't",
        "option 3": "Yes, I am",
        "option 4": "No, I am not"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Do you go to school on Monday?",
        "Prompt Gambar": "Buatkan gambar anak berangkat sekolah di hari Senin",
        "Jawaban": "Yes, I do"
      }
    },
    {
      "Nomor": 25,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "We perform Sholat Jumat on ...",
      "Prompt Gambar": "Buatkan gambar orang di masjid",
      "Pilihan Jawaban": {
        "option 1": "Thursday",
        "option 2": "Friday",
        "option 3": "Saturday",
        "option 4": "Sunday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Christians go to church on ...",
        "Prompt Gambar": "Buatkan gambar orang di gereja",
        "Jawaban": "Sunday"
      }
    },
    {
      "Nomor": 26,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "How do you spell 'Rabu' in English?",
      "Prompt Gambar": "Buatkan gambar tulisan WEDNESDAY",
      "Pilihan Jawaban": {
        "option 1": "W-e-n-e-s-d-a-y",
        "option 2": "W-e-d-n-e-s-d-a-y",
        "option 3": "W-e-d-n-e-s-d-e-y",
        "option 4": "W-e-d-n-e-s-d-a-i"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "How do you spell 'Kamis' in English?",
        "Prompt Gambar": "Buatkan gambar tulisan THURSDAY",
        "Jawaban": "T-h-u-r-s-d-a-y"
      }
    },
    {
      "Nomor": 27,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "After Tuesday is Wednesday. After Wednesday is ...",
      "Prompt Gambar": "Buatkan gambar urutan hari: Selasa -> Rabu -> ?",
      "Pilihan Jawaban": {
        "option 1": "Monday",
        "option 2": "Thursday",
        "option 3": "Friday",
        "option 4": "Saturday"
      },
      "Jawaban": "option 2",
      "proxy": {
        "Pertanyaan": "Before Wednesday is Tuesday. Before Tuesday is ...",
        "Prompt Gambar": "Buatkan gambar urutan hari: ? <- Selasa <- Rabu",
        "Jawaban": "Monday"
      }
    },
    {
      "Nomor": 28,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "They play ... on Saturday afternoon.",
      "Prompt Gambar": "Buatkan gambar anak-anak bermain kelereng",
      "Pilihan Jawaban": {
        "option 1": "Marbles",
        "option 2": "Doll",
        "option 3": "Kite",
        "option 4": "Bike"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "They play ... on Sunday morning.",
        "Prompt Gambar": "Buatkan gambar anak-anak bermain sepak bola",
        "Jawaban": "Football"
      }
    },
    {
      "Nomor": 29,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "There are ... days in two weeks.",
      "Prompt Gambar": "Buatkan gambar dua lembar kalender minggu",
      "Pilihan Jawaban": {
        "option 1": "Seven",
        "option 2": "Ten",
        "option 3": "Fourteen",
        "option 4": "Twenty"
      },
      "Jawaban": "option 3",
      "proxy": {
        "Pertanyaan": "There are ... days in a week.",
        "Prompt Gambar": "Buatkan gambar satu lembar kalender minggu",
        "Jawaban": "Seven"
      }
    },
    {
      "Nomor": 30,
      "Jenis": "Pilihan Ganda",
      "Pertanyaan": "What do you do on Sunday?",
      "Prompt Gambar": "Buatkan gambar anak sedang membantu ibu menyapu",
      "Pilihan Jawaban": {
        "option 1": "I help my mother",
        "option 2": "I go to school",
        "option 3": "I study math",
        "option 4": "I wear uniform"
      },
      "Jawaban": "option 1",
      "proxy": {
        "Pertanyaan": "What do you do on Monday?",
        "Prompt Gambar": "Buatkan gambar anak sedang belajar di kelas",
        "Jawaban": "I study at school"
      }
    },
    {
      "Nomor": 31,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Monday is the day after Sunday.",
      "Prompt Gambar": "Buatkan gambar urutan hari Minggu -> Senin",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Monday is the day before Sunday.",
        "Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 32,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Friday comes before Thursday.",
      "Prompt Gambar": "Buatkan gambar urutan hari Kamis -> Jumat",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "Thursday comes before Friday.",
        "Prompt Gambar": "Buatkan gambar urutan hari Kamis -> Jumat",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 33,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "We usually have a flag ceremony on Tuesday.",
      "Prompt Gambar": "Buatkan gambar upacara bendera",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "We usually have a flag ceremony on Monday.",
        "Prompt Gambar": "Buatkan gambar upacara bendera",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 34,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "There are 7 days in a week.",
      "Prompt Gambar": "Buatkan gambar angka 7",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "There are 6 days in a week.",
        "Prompt Gambar": "Buatkan gambar angka 6",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 35,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "'Rabu' in English is Wednesday.",
      "Prompt Gambar": "Buatkan gambar kalender Rabu",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "'Rabu' in English is Tuesday.",
        "Prompt Gambar": "Buatkan gambar kalender Selasa",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 36,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Look at the picture. He likes reading on Saturday.",
      "Prompt Gambar": "Buatkan gambar anak membaca buku dengan kalender Sabtu di dinding",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Look at the picture. He likes swimming on Saturday.",
        "Prompt Gambar": "Buatkan gambar anak membaca buku (bukan berenang) dengan kalender Sabtu",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 37,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "The day between Friday and Sunday is Monday.",
      "Prompt Gambar": "Buatkan gambar kalender Jumat - Sabtu - Minggu",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "The day between Friday and Sunday is Saturday.",
        "Prompt Gambar": "Buatkan gambar kalender Jumat - Sabtu - Minggu",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 38,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "Sunday is a holiday.",
      "Prompt Gambar": "Buatkan gambar kalender dengan hari Minggu berwarna merah",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "Monday is a holiday.",
        "Prompt Gambar": "Buatkan gambar suasana sekolah yang sibuk",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 39,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "After Saturday is Sunday.",
      "Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu",
      "Jawaban": "Benar",
      "proxy": {
        "Pertanyaan": "After Saturday is Monday.",
        "Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu -> Senin",
        "Jawaban": "Salah"
      }
    },
    {
      "Nomor": 40,
      "Jenis": "Pertanyaan Benar atau Salah",
      "Pertanyaan": "I ride a bike in the swimming pool.",
      "Prompt Gambar": "Buatkan gambar anak bersepeda masuk kolam renang (lucu/salah)",
      "Jawaban": "Salah",
      "proxy": {
        "Pertanyaan": "I swim in the swimming pool.",
        "Prompt Gambar": "Buatkan gambar anak berenang",
        "Jawaban": "Benar"
      }
    },
    {
      "Nomor": 41,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What is the day after Monday?",
      "Prompt Gambar": "Buatkan gambar urutan hari Senin -> ?",
      "Jawaban": "Tuesday",
      "proxy": {
        "Pertanyaan": "What is the day before Friday?",
        "Prompt Gambar": "Buatkan gambar urutan hari ? -> Jumat",
        "Jawaban": "Thursday"
      }
    },
    {
      "Nomor": 42,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Mention 3 days in a week!",
      "Prompt Gambar": "Buatkan gambar 3 lembar kalender acak",
      "Jawaban": "Monday, Tuesday, Wednesday (Jawaban siswa bisa bervariasi asalkan nama hari)",
      "proxy": {
        "Pertanyaan": "Mention 2 days of the weekend!",
        "Prompt Gambar": "Buatkan gambar kalender Sabtu dan Minggu",
        "Jawaban": "Saturday, Sunday"
      }
    },
    {
      "Nomor": 43,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Translate to English: 'Saya suka berenang pada hari Minggu'.",
      "Prompt Gambar": "Buatkan gambar anak berenang di hari Minggu",
      "Jawaban": "I like swimming on Sunday",
      "proxy": {
        "Pertanyaan": "Translate to English: 'Saya suka membaca pada hari Sabtu'.",
        "Prompt Gambar": "Buatkan gambar anak membaca di hari Sabtu",
        "Jawaban": "I like reading on Saturday"
      }
    },
    {
      "Nomor": 44,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Arrange the letters: M - O - N - D - A - Y",
      "Prompt Gambar": "Buatkan gambar hari Senin",
      "Jawaban": "Monday",
      "proxy": {
        "Pertanyaan": "Arrange the letters: F - R - I - D - A - Y",
        "Prompt Gambar": "Buatkan gambar hari Jumat",
        "Jawaban": "Friday"
      }
    },
    {
      "Nomor": 45,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "What do you do on Sunday? (Write one activity)",
      "Prompt Gambar": "Buatkan gambar berbagai aktivitas liburan",
      "Jawaban": "Cycling / Swimming / Playing / Watching TV (Jawaban siswa bervariasi)",
      "proxy": {
        "Pertanyaan": "What do you do on Monday? (Write one activity)",
        "Prompt Gambar": "Buatkan gambar aktivitas sekolah",
        "Jawaban": "Studying / Going to school"
      }
    },
    {
      "Nomor": 46,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Translate to Indonesian: 'Thursday'.",
      "Prompt Gambar": "Buatkan gambar kalender Kamis",
      "Jawaban": "Kamis",
      "proxy": {
        "Pertanyaan": "Translate to Indonesian: 'Tuesday'.",
        "Prompt Gambar": "Buatkan gambar kalender Selasa",
        "Jawaban": "Selasa"
      }
    },
    {
      "Nomor": 47,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Today is Wednesday. Tomorrow is ...",
      "Prompt Gambar": "Buatkan gambar kalender hari Rabu dan tanda panah ke hari berikutnya",
      "Jawaban": "Thursday",
      "proxy": {
        "Pertanyaan": "Today is Monday. Yesterday was ...",
        "Prompt Gambar": "Buatkan gambar kalender hari Senin dan tanda panah ke hari sebelumnya",
        "Jawaban": "Sunday"
      }
    },
    {
      "Nomor": 48,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Arrange the sentence: Sunday - on - I - football - play",
      "Prompt Gambar": "Buatkan gambar anak main bola di hari Minggu",
      "Jawaban": "I play football on Sunday",
      "proxy": {
        "Pertanyaan": "Arrange the sentence: Monday - on - school - to - go - I",
        "Prompt Gambar": "Buatkan gambar anak pergi ke sekolah",
        "Jawaban": "I go to school on Monday"
      }
    },
    {
      "Nomor": 49,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "Complete the word: S_t_rd_y",
      "Prompt Gambar": "Buatkan gambar kalender Sabtu",
      "Jawaban": "Saturday",
      "proxy": {
        "Pertanyaan": "Complete the word: T_u_sd_y",
        "Prompt Gambar": "Buatkan gambar kalender Kamis",
        "Jawaban": "Thursday"
      }
    },
    {
      "Nomor": 50,
      "Jenis": "Pertanyaan Esai",
      "Pertanyaan": "How many days do you go to school in a week?",
      "Prompt Gambar": "Buatkan gambar anak sekolah dari Senin sampai Jumat/Sabtu",
      "Jawaban": "5 days / 6 days (Tergantung kebijakan sekolah siswa)",
      "proxy": {
        "Pertanyaan": "Name the days you go to school!",
        "Prompt Gambar": "Buatkan gambar jadwal pelajaran",
        "Jawaban": "Monday, Tuesday, Wednesday, Thursday, Friday, (Saturday)"
      }
    }
  ]
  },
  {
"Chapter": 3,
"Topic": "I Have Fried Chicken for Breakfast (Meal Times)",
"Total_Questions": 50,
"Questions": [
{
"Nomor": 1,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "We eat in the morning. It is called ...",
"Prompt Gambar": "Buatkan gambar suasana pagi hari dengan matahari terbit dan jam menunjukkan pukul 06.00",
"Pilihan Jawaban": {
"option 1": "Lunch",
"option 2": "Dinner",
"option 3": "Breakfast",
"option 4": "Supper"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "We eat in the afternoon. It is called ...",
"Prompt Gambar": "Buatkan gambar suasana siang hari terik dengan jam menunjukkan pukul 12.00",
"Jawaban": "Lunch"
}
},
{
"Nomor": 2,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. Joshua has ... for breakfast.",
"Prompt Gambar": "Buatkan gambar anak laki-laki makan roti panggang dan susu",
"Pilihan Jawaban": {
"option 1": "Noodle",
"option 2": "Bread",
"option 3": "Rice",
"option 4": "Pizza"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Look at the picture. Cici has ... for breakfast.",
"Prompt Gambar": "Buatkan gambar anak perempuan makan nasi goreng",
"Jawaban": "Fried Rice"
}
},
{
"Nomor": 3,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "It is 07.00 PM (Night). It is time for ...",
"Prompt Gambar": "Buatkan gambar jam dinding menunjukkan pukul 7 malam dan jendela gelap ada bulan",
"Pilihan Jawaban": {
"option 1": "Breakfast",
"option 2": "Lunch",
"option 3": "Dinner",
"option 4": "School"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "It is 06.00 AM (Morning). It is time for ...",
"Prompt Gambar": "Buatkan gambar jam dinding menunjukkan pukul 6 pagi dan matahari terbit",
"Jawaban": "Breakfast"
}
},
{
"Nomor": 4,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "I ... fried chicken for lunch.",
"Prompt Gambar": "Buatkan gambar piring berisi ayam goreng",
"Pilihan Jawaban": {
"option 1": "has",
"option 2": "have",
"option 3": "is",
"option 4": "are"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "She ... fried fish for dinner.",
"Prompt Gambar": "Buatkan gambar anak perempuan makan ikan goreng",
"Jawaban": "has"
}
},
{
"Nomor": 5,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Mr. Arga has ... for dinner. (Look at the picture)",
"Prompt Gambar": "Buatkan gambar bapak-bapak sedang makan bistik (steak) daging",
"Pilihan Jawaban": {
"option 1": "Steak",
"option 2": "Bread",
"option 3": "Candy",
"option 4": "Cake"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Mrs. Ani has ... for lunch. (Look at the picture)",
"Prompt Gambar": "Buatkan gambar ibu-ibu sedang makan soto",
"Jawaban": "Soto"
}
},
{
"Nomor": 6,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What do you have for breakfast?",
"Prompt Gambar": "Buatkan gambar semangkuk bubur ayam",
"Pilihan Jawaban": {
"option 1": "I have Porridge",
"option 2": "I have Pizza",
"option 3": "I have Burger",
"option 4": "I have Spaghetti"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "What do you have for lunch?",
"Prompt Gambar": "Buatkan gambar piring berisi mi goreng",
"Jawaban": "I have Fried Noodle"
}
},
{
"Nomor": 7,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Translate to Indonesian: 'Dinner'",
"Prompt Gambar": "Buatkan gambar suasana makan bersama keluarga di malam hari",
"Pilihan Jawaban": {
"option 1": "Sarapan",
"option 2": "Makan Siang",
"option 3": "Makan Malam",
"option 4": "Jajan"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Translate to Indonesian: 'Lunch'",
"Prompt Gambar": "Buatkan gambar suasana makan di siang hari",
"Jawaban": "Makan Siang"
}
},
{
"Nomor": 8,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which one is a healthy breakfast?",
"Prompt Gambar": "Buatkan 4 gambar: A (Permen), B (Soda), C (Nasi & Telur), D (Es Krim)",
"Pilihan Jawaban": {
"option 1": "Candy",
"option 2": "Soda",
"option 3": "Rice and Egg",
"option 4": "Ice Cream"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Which one is good for lunch?",
"Prompt Gambar": "Buatkan 4 gambar: A (Cokelat), B (Ikan & Sayur), C (Kue), D (Keripik)",
"Jawaban": "Fish and Vegetables"
}
},
{
"Nomor": 9,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "We usually have lunch in the ...",
"Prompt Gambar": "Buatkan gambar matahari tepat di atas kepala (siang hari)",
"Pilihan Jawaban": {
"option 1": "Morning",
"option 2": "Afternoon",
"option 3": "Evening",
"option 4": "Night"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "We usually have breakfast in the ...",
"Prompt Gambar": "Buatkan gambar matahari baru terbit",
"Jawaban": "Morning"
}
},
{
"Nomor": 10,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. Made eats ...",
"Prompt Gambar": "Buatkan gambar Made makan mi ayam",
"Pilihan Jawaban": {
"option 1": "Chicken Noodle",
"option 2": "Fried Rice",
"option 3": "Boiled Egg",
"option 4": "Toast"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Look at the picture. Aisyah eats ...",
"Prompt Gambar": "Buatkan gambar Aisyah makan sup ayam",
"Jawaban": "Chicken Soup"
}
},
{
"Nomor": 11,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Arrange the words: have - I - bread - breakfast - for",
"Prompt Gambar": "Buatkan gambar roti di piring sarapan",
"Pilihan Jawaban": {
"option 1": "I bread have for breakfast",
"option 2": "I have bread for breakfast",
"option 3": "Breakfast have I for bread",
"option 4": "For breakfast bread I have"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Arrange the words: has - She - milk - dinner - for",
"Prompt Gambar": "Buatkan gambar segelas susu di meja makan malam",
"Jawaban": "She has milk for dinner"
}
},
{
"Nomor": 12,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Does he have burger for lunch? Yes, he ...",
"Prompt Gambar": "Buatkan gambar anak laki-laki makan burger sambil tersenyum",
"Pilihan Jawaban": {
"option 1": "do",
"option 2": "does",
"option 3": "don't",
"option 4": "doesn't"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Do you have rice for dinner? No, I ...",
"Prompt Gambar": "Buatkan gambar anak menolak nasi",
"Jawaban": "don't"
}
},
{
"Nomor": 13,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "'Makan Pagi' in English is ...",
"Prompt Gambar": "Buatkan gambar suasana makan pagi",
"Pilihan Jawaban": {
"option 1": "Lunch",
"option 2": "Dinner",
"option 3": "Breakfast",
"option 4": "Snack"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "'Makan Malam' in English is ...",
"Prompt Gambar": "Buatkan gambar suasana makan malam",
"Jawaban": "Dinner"
}
},
{
"Nomor": 14,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What does Cici drink for breakfast? (Look at the picture)",
"Prompt Gambar": "Buatkan gambar Cici minum susu",
"Pilihan Jawaban": {
"option 1": "Tea",
"option 2": "Coffee",
"option 3": "Milk",
"option 4": "Soda"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "What does Father drink for breakfast? (Look at the picture)",
"Prompt Gambar": "Buatkan gambar Ayah minum kopi",
"Jawaban": "Coffee"
}
},
{
"Nomor": 15,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Before going to school, I have ...",
"Prompt Gambar": "Buatkan gambar anak berseragam sekolah sedang makan",
"Pilihan Jawaban": {
"option 1": "Dinner",
"option 2": "Lunch",
"option 3": "Breakfast",
"option 4": "Supper"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "After coming home from school (1 PM), I have ...",
"Prompt Gambar": "Buatkan gambar anak pulang sekolah ganti baju lalu makan",
"Jawaban": "Lunch"
}
},
{
"Nomor": 16,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "The family eats together at night. They are having ...",
"Prompt Gambar": "Buatkan gambar keluarga makan bersama di malam hari",
"Pilihan Jawaban": {
"option 1": "Breakfast",
"option 2": "Lunch",
"option 3": "Dinner",
"option 4": "Break time"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Students eat at school during break time (12 PM). They are having ...",
"Prompt Gambar": "Buatkan gambar siswa makan di kantin sekolah siang hari",
"Jawaban": "Lunch"
}
},
{
"Nomor": 17,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. What is on the plate?",
"Prompt Gambar": "Buatkan gambar piring berisi telur dadar (omelet)",
"Pilihan Jawaban": {
"option 1": "Fried Chicken",
"option 2": "Fried Egg / Omelet",
"option 3": "Fried Rice",
"option 4": "Fried Fish"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Look at the picture. What is on the plate?",
"Prompt Gambar": "Buatkan gambar piring berisi sosis bakar",
"Jawaban": "Sausage"
}
},
{
"Nomor": 18,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "My mother cooks ... for dinner.",
"Prompt Gambar": "Buatkan gambar ibu memasak sup sayur di panci",
"Pilihan Jawaban": {
"option 1": "Ice Cream",
"option 2": "Candy",
"option 3": "Soup",
"option 4": "Juice"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "My father buys ... for lunch.",
"Prompt Gambar": "Buatkan gambar ayah membawa bungkus sate",
"Jawaban": "Satay"
}
},
{
"Nomor": 19,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which sentence is correct?",
"Prompt Gambar": "Buatkan gambar anak perempuan makan nasi",
"Pilihan Jawaban": {
"option 1": "She have rice.",
"option 2": "She has rice.",
"option 3": "She eat rice.",
"option 4": "She eating rice."
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Which sentence is correct?",
"Prompt Gambar": "Buatkan gambar saya (sudut pandang orang pertama) makan roti",
"Jawaban": "I have bread."
}
},
{
"Nomor": 20,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "L - U - N - C - H. How do you read it?",
"Prompt Gambar": "Buatkan gambar tulisan LUNCH",
"Pilihan Jawaban": {
"option 1": "Lunc",
"option 2": "Lanch",
"option 3": "Lunch",
"option 4": "Luns"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "D - I - N - N - E - R. How do you read it?",
"Prompt Gambar": "Buatkan gambar tulisan DINNER",
"Jawaban": "Diner"
}
},
{
"Nomor": 21,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Do you have milk for breakfast? No, ...",
"Prompt Gambar": "Buatkan gambar anak menggelengkan kepala saat ditawari susu",
"Pilihan Jawaban": {
"option 1": "I don't",
"option 2": "I doesn't",
"option 3": "I do",
"option 4": "I am not"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Does she have tea for lunch? No, ...",
"Prompt Gambar": "Buatkan gambar anak perempuan menolak teh",
"Jawaban": "She doesn't"
}
},
{
"Nomor": 22,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Breakfast is important because it gives us ...",
"Prompt Gambar": "Buatkan gambar anak berotot/kuat dan bersemangat",
"Pilihan Jawaban": {
"option 1": "Sleep",
"option 2": "Energy",
"option 3": "Toys",
"option 4": "Homework"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "We eat food to get ...",
"Prompt Gambar": "Buatkan gambar baterai terisi penuh (metafora energi)",
"Jawaban": "Energy"
}
},
{
"Nomor": 23,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. This is 'Tempeh'. In Indonesia, we call it ...",
"Prompt Gambar": "Buatkan gambar tempe goreng",
"Pilihan Jawaban": {
"option 1": "Tahu",
"option 2": "Tempe",
"option 3": "Telur",
"option 4": "Terong"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Look at the picture. This is 'Tofu'. In Indonesia, we call it ...",
"Prompt Gambar": "Buatkan gambar tahu goreng",
"Jawaban": "Tahu"
}
},
{
"Nomor": 24,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What time do you usually have breakfast?",
"Prompt Gambar": "Buatkan gambar jam menunjukkan pukul 06.30 pagi",
"Pilihan Jawaban": {
"option 1": "06.00 PM",
"option 2": "01.00 PM",
"option 3": "06.30 AM",
"option 4": "08.00 PM"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "What time do you usually have dinner?",
"Prompt Gambar": "Buatkan gambar jam menunjukkan pukul 07.00 malam",
"Jawaban": "07.00 PM"
}
},
{
"Nomor": 25,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "I have ... and ... for breakfast.",
"Prompt Gambar": "Buatkan gambar roti dan susu di meja",
"Pilihan Jawaban": {
"option 1": "Rice and Tea",
"option 2": "Bread and Milk",
"option 3": "Noodle and Water",
"option 4": "Pizza and Soda"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "She has ... and ... for lunch.",
"Prompt Gambar": "Buatkan gambar nasi goreng dan teh es",
"Jawaban": "Fried rice and Iced tea"
}
},
{
"Nomor": 26,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "My brother has ... for breakfast.",
"Prompt Gambar": "Buatkan gambar semangkuk sereal",
"Pilihan Jawaban": {
"option 1": "Cereal",
"option 2": "Soup",
"option 3": "Satay",
"option 4": "Meatball"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "My sister has ... for breakfast.",
"Prompt Gambar": "Buatkan gambar pancake/panekuk",
"Jawaban": "Pancake"
}
},
{
"Nomor": 27,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which activity do you do BEFORE breakfast?",
"Prompt Gambar": "Buatkan gambar anak bangun tidur",
"Pilihan Jawaban": {
"option 1": "Sleep",
"option 2": "Wake up and take a bath",
"option 3": "Go to school",
"option 4": "Play football"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Which activity do you do AFTER dinner?",
"Prompt Gambar": "Buatkan gambar anak gosok gigi lalu tidur",
"Jawaban": "Brush teeth and Sleep"
}
},
{
"Nomor": 28,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Joshua: What do you have for lunch? Made: ...",
"Prompt Gambar": "Buatkan gambar Made memegang piring berisi gado-gado",
"Pilihan Jawaban": {
"option 1": "I have Gado-gado",
"option 2": "I have Pizza",
"option 3": "I have Burger",
"option 4": "I have Cereal"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Cici: What do you have for dinner? Aisyah: ...",
"Prompt Gambar": "Buatkan gambar Aisyah memegang piring berisi sate",
"Jawaban": "I have Satay"
}
},
{
"Nomor": 29,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "B - R - E - A - D. How do you say it?",
"Prompt Gambar": "Buatkan gambar roti",
"Pilihan Jawaban": {
"option 1": "Bred",
"option 2": "Brid",
"option 3": "Brad",
"option 4": "Brood"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "J - U - I - C - E. How do you say it?",
"Prompt Gambar": "Buatkan gambar jus",
"Jawaban": "Jus (pronunciation like 'Joos')"
}
},
{
"Nomor": 30,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. Is it healthy?",
"Prompt Gambar": "Buatkan gambar buah-buahan dan sayuran segar",
"Pilihan Jawaban": {
"option 1": "Yes, it is",
"option 2": "No, it is not",
"option 3": "I don't know",
"option 4": "Maybe"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Look at the picture. Is it healthy to eat this every day?",
"Prompt Gambar": "Buatkan gambar permen dan cokelat yang banyak",
"Jawaban": "No, it is not"
}
},
{
"Nomor": 31,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "We eat Breakfast in the evening.",
"Prompt Gambar": "Buatkan gambar bulan di langit malam",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "We eat Breakfast in the morning.",
"Prompt Gambar": "Buatkan gambar matahari terbit",
"Jawaban": "Benar"
}
},
{
"Nomor": 32,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Lunch is 'Makan Siang'.",
"Prompt Gambar": "Buatkan gambar jam 12 siang",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Dinner is 'Makan Siang'.",
"Prompt Gambar": "Buatkan gambar jam 7 malam",
"Jawaban": "Salah"
}
},
{
"Nomor": 33,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Joshua has pizza for breakfast. (Look at the picture)",
"Prompt Gambar": "Buatkan gambar Joshua makan bubur ayam",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "Joshua has porridge for breakfast. (Look at the picture)",
"Prompt Gambar": "Buatkan gambar Joshua makan bubur ayam",
"Jawaban": "Benar"
}
},
{
"Nomor": 34,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "We use 'He has' for a boy.",
"Prompt Gambar": "Buatkan gambar anak laki-laki",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "We use 'She have' for a girl.",
"Prompt Gambar": "Buatkan gambar anak perempuan",
"Jawaban": "Salah"
}
},
{
"Nomor": 35,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Fried chicken is a food.",
"Prompt Gambar": "Buatkan gambar ayam goreng",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Milk is a food.",
"Prompt Gambar": "Buatkan gambar susu",
"Jawaban": "Salah"
}
},
{
"Nomor": 36,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "It is 01.00 PM. It is time for Dinner.",
"Prompt Gambar": "Buatkan gambar jam 1 siang",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "It is 01.00 PM. It is time for Lunch.",
"Prompt Gambar": "Buatkan gambar jam 1 siang",
"Jawaban": "Benar"
}
},
{
"Nomor": 37,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Look at the picture. Cici has water.",
"Prompt Gambar": "Buatkan gambar Cici memegang botol air",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Look at the picture. Cici has juice.",
"Prompt Gambar": "Buatkan gambar Cici memegang botol air mineral bening",
"Jawaban": "Salah"
}
},
{
"Nomor": 38,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "'I have' means 'Saya mempunyai/makan'.",
"Prompt Gambar": "Buatkan gambar orang menunjuk dirinya sendiri dan makanannya",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "'You has' is correct grammar.",
"Prompt Gambar": "Buatkan gambar tanda silang merah pada teks 'You has'",
"Jawaban": "Salah"
}
},
{
"Nomor": 39,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Noodle is 'Roti' in Indonesian.",
"Prompt Gambar": "Buatkan gambar mi",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "Noodle is 'Mi' in Indonesian.",
"Prompt Gambar": "Buatkan gambar mi",
"Jawaban": "Benar"
}
},
{
"Nomor": 40,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Dinner happens at night.",
"Prompt Gambar": "Buatkan gambar bulan dan bintang",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Breakfast happens at night.",
"Prompt Gambar": "Buatkan gambar bulan dan bintang",
"Jawaban": "Salah"
}
},
{
"Nomor": 41,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Translate to English: 'Saya sarapan roti'.",
"Prompt Gambar": "Buatkan gambar anak makan roti di pagi hari",
"Jawaban": "I have bread for breakfast",
"proxy": {
"Pertanyaan": "Translate to English: 'Saya makan siang nasi goreng'.",
"Prompt Gambar": "Buatkan gambar anak makan nasi goreng di siang hari",
"Jawaban": "I have fried rice for lunch"
}
},
{
"Nomor": 42,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What do you have for dinner? (Answer with: I have ...)",
"Prompt Gambar": "Buatkan gambar meja makan malam dengan berbagai menu",
"Jawaban": "I have ... (Jawaban siswa bervariasi, misal: I have soup)",
"proxy": {
"Pertanyaan": "What do you have for breakfast? (Answer with: I have ...)",
"Prompt Gambar": "Buatkan gambar meja sarapan dengan berbagai menu",
"Jawaban": "I have ... (Jawaban siswa bervariasi)"
}
},
{
"Nomor": 43,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Complete the sentence: She ... (makan) fried chicken.",
"Prompt Gambar": "Buatkan gambar anak perempuan makan ayam goreng",
"Jawaban": "has / eats",
"proxy": {
"Pertanyaan": "Complete the sentence: He ... (makan) fried noodle.",
"Prompt Gambar": "Buatkan gambar anak laki-laki makan mi goreng",
"Jawaban": "has / eats"
}
},
{
"Nomor": 44,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Arrange the words: lunch - for - soup - We - have",
"Prompt Gambar": "Buatkan gambar keluarga makan sup bersama",
"Jawaban": "We have soup for lunch",
"proxy": {
"Pertanyaan": "Arrange the words: breakfast - for - milk - I - have",
"Prompt Gambar": "Buatkan gambar anak minum susu",
"Jawaban": "I have milk for breakfast"
}
},
{
"Nomor": 45,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Mention 2 foods for breakfast!",
"Prompt Gambar": "Buatkan gambar roti, nasi goreng, bubur, sereal",
"Jawaban": "Bread, Fried Rice, Porridge, Cereal (Pilih 2)",
"proxy": {
"Pertanyaan": "Mention 2 drinks for breakfast!",
"Prompt Gambar": "Buatkan gambar susu, teh, air, jus",
"Jawaban": "Milk, Tea, Water, Juice (Pilih 2)"
}
},
{
"Nomor": 46,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What is 'Makan Siang' in English?",
"Prompt Gambar": "Buatkan gambar suasana siang hari",
"Jawaban": "Lunch",
"proxy": {
"Pertanyaan": "What is 'Sarapan' in English?",
"Prompt Gambar": "Buatkan gambar suasana pagi hari",
"Jawaban": "Breakfast"
}
},
{
"Nomor": 47,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Look at the picture. Write the sentence. (Subject: I)",
"Prompt Gambar": "Buatkan gambar tangan memegang pizza",
"Jawaban": "I have pizza",
"proxy": {
"Pertanyaan": "Look at the picture. Write the sentence. (Subject: He)",
"Prompt Gambar": "Buatkan gambar anak laki-laki memegang burger",
"Jawaban": "He has burger"
}
},
{
"Nomor": 48,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Translate to Indonesian: 'I have water'.",
"Prompt Gambar": "Buatkan gambar gelas air",
"Jawaban": "Saya minum air / Saya mempunyai air",
"proxy": {
"Pertanyaan": "Translate to Indonesian: 'I have tea'.",
"Prompt Gambar": "Buatkan gambar cangkir teh",
"Jawaban": "Saya minum teh / Saya mempunyai teh"
}
},
{
"Nomor": 49,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Fill in the blank: Joshua ... (have/has) milk.",
"Prompt Gambar": "Buatkan gambar Joshua minum susu",
"Jawaban": "has",
"proxy": {
"Pertanyaan": "Fill in the blank: They ... (have/has) pizza.",
"Prompt Gambar": "Buatkan gambar sekelompok anak makan pizza",
"Jawaban": "have"
}
},
{
"Nomor": 50,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Unscramble: r - e - n - n - i - d (Time to eat at night)",
"Prompt Gambar": "Buatkan gambar bulan di jendela saat makan",
"Jawaban": "Dinner",
"proxy": {
"Pertanyaan": "Unscramble: c - h - n - u - l (Time to eat in the afternoon)",
"Prompt Gambar": "Buatkan gambar matahari terik saat makan",
"Jawaban": "Lunch"
}
}
]
},
{
"Chapter": 4,
"Topic": "Do You Like Swimming? (Hobbies)",
"Total_Questions": 50,
"Questions": [
{
"Nomor": 1,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. What is his hobby?",
"Prompt Gambar": "Buatkan gambar anak laki-laki sedang berenang di kolam renang",
"Pilihan Jawaban": {
"option 1": "Swimming",
"option 2": "Running",
"option 3": "Reading",
"option 4": "Cooking"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "What is her hobby? (Look at the picture)",
"Prompt Gambar": "Buatkan gambar anak perempuan sedang menari balet",
"Jawaban": "Dancing"
}
},
{
"Nomor": 2,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Made likes ... in the field.",
"Prompt Gambar": "Buatkan gambar Made sedang bermain sepak bola di lapangan",
"Pilihan Jawaban": {
"option 1": "Singing",
"option 2": "Playing football",
"option 3": "Swimming",
"option 4": "Reading"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Joshua likes ... in the park.",
"Prompt Gambar": "Buatkan gambar Joshua sedang bermain layang-layang",
"Jawaban": "Playing kite"
}
},
{
"Nomor": 3,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Do you like ...? (Look at the picture)",
"Prompt Gambar": "Buatkan gambar anak sedang bernyanyi dengan mikrofon",
"Pilihan Jawaban": {
"option 1": "Dancing",
"option 2": "Singing",
"option 3": "Cooking",
"option 4": "Fishing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Do you like ...? (Look at the picture)",
"Prompt Gambar": "Buatkan gambar anak sedang melukis di kanvas",
"Jawaban": "Painting"
}
},
{
"Nomor": 4,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Cici likes reading ... in the library.",
"Prompt Gambar": "Buatkan gambar Cici sedang membaca buku di perpustakaan",
"Pilihan Jawaban": {
"option 1": "Ball",
"option 2": "Bike",
"option 3": "Book",
"option 4": "Kite"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Aisyah likes playing ... in the room.",
"Prompt Gambar": "Buatkan gambar Aisyah sedang bermain boneka",
"Jawaban": "Doll"
}
},
{
"Nomor": 5,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Translate to Indonesian: 'My hobby is cooking'.",
"Prompt Gambar": "Buatkan gambar anak sedang memasak di dapur",
"Pilihan Jawaban": {
"option 1": "Hobi saya makan",
"option 2": "Hobi saya memasak",
"option 3": "Hobi saya membaca",
"option 4": "Hobi saya menyanyi"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Translate to Indonesian: 'My hobby is fishing'.",
"Prompt Gambar": "Buatkan gambar anak sedang memancing ikan",
"Jawaban": "Hobi saya memancing"
}
},
{
"Nomor": 6,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Joshua: Do you like swimming? Made: Yes, ...",
"Prompt Gambar": "Buatkan gambar Made tersenyum dan mengacungkan jempol di kolam renang",
"Pilihan Jawaban": {
"option 1": "I don't",
"option 2": "I do",
"option 3": "I am",
"option 4": "I not"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Cici: Do you like dancing? Aisyah: No, ...",
"Prompt Gambar": "Buatkan gambar Aisyah menggelengkan kepala saat diajak menari",
"Jawaban": "I don't"
}
},
{
"Nomor": 7,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which picture shows 'Cycling'?",
"Prompt Gambar": "Buatkan 4 gambar: A (Bersepeda), B (Lari), C (Berenang), D (Tidur)",
"Pilihan Jawaban": {
"option 1": "Picture A",
"option 2": "Picture B",
"option 3": "Picture C",
"option 4": "Picture D"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Which picture shows 'Gardening'?",
"Prompt Gambar": "Buatkan 4 gambar: A (Memasak), B (Menyiram tanaman), C (Menyanyi), D (Menari)",
"Jawaban": "Picture B"
}
},
{
"Nomor": 8,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Arrange the letters: D - A - N - C - I - N - G",
"Prompt Gambar": "Buatkan gambar penari balet",
"Pilihan Jawaban": {
"option 1": "Singing",
"option 2": "Dancing",
"option 3": "Reading",
"option 4": "Fishing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Arrange the letters: R - E - A - D - I - N - G",
"Prompt Gambar": "Buatkan gambar anak membaca buku",
"Jawaban": "Reading"
}
},
{
"Nomor": 9,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "He likes ... (bermain) guitar.",
"Prompt Gambar": "Buatkan gambar anak laki-laki bermain gitar",
"Pilihan Jawaban": {
"option 1": "Buying",
"option 2": "Cooking",
"option 3": "Playing",
"option 4": "Sleeping"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "She likes ... (menonton) TV.",
"Prompt Gambar": "Buatkan gambar anak perempuan menonton TV",
"Jawaban": "Watching"
}
},
{
"Nomor": 10,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What do you need for 'Painting'?",
"Prompt Gambar": "Buatkan gambar peralatan melukis (kuas dan cat)",
"Pilihan Jawaban": {
"option 1": "Ball",
"option 2": "Bicycle",
"option 3": "Brush and Paint",
"option 4": "Book"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "What do you need for 'Fishing'?",
"Prompt Gambar": "Buatkan gambar alat pancing",
"Jawaban": "Fishing rod"
}
},
{
"Nomor": 11,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "My hobby is ... (berkebun).",
"Prompt Gambar": "Buatkan gambar anak sedang menanam bunga",
"Pilihan Jawaban": {
"option 1": "Gardening",
"option 2": "Cooking",
"option 3": "Fishing",
"option 4": "Cycling"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "My hobby is ... (berkemah).",
"Prompt Gambar": "Buatkan gambar tenda kemah di alam",
"Jawaban": "Camping"
}
},
{
"Nomor": 12,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Does Aisyah like singing? Yes, she ...",
"Prompt Gambar": "Buatkan gambar Aisyah bernyanyi dengan gembira",
"Pilihan Jawaban": {
"option 1": "do",
"option 2": "does",
"option 3": "don't",
"option 4": "doesn't"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Does Made like cooking? No, he ...",
"Prompt Gambar": "Buatkan gambar Made bingung di dapur",
"Jawaban": "doesn't"
}
},
{
"Nomor": 13,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. They are ...",
"Prompt Gambar": "Buatkan gambar sekelompok anak sedang berlari",
"Pilihan Jawaban": {
"option 1": "Swimming",
"option 2": "Sleeping",
"option 3": "Running",
"option 4": "Sitting"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Look at the picture. They are ...",
"Prompt Gambar": "Buatkan gambar sekelompok anak sedang menari",
"Jawaban": "Dancing"
}
},
{
"Nomor": 14,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "B - I - K - E. We use this for ...",
"Prompt Gambar": "Buatkan gambar sepeda",
"Pilihan Jawaban": {
"option 1": "Swimming",
"option 2": "Cycling",
"option 3": "Running",
"option 4": "Reading"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "B - O - O - K. We use this for ...",
"Prompt Gambar": "Buatkan gambar buku",
"Jawaban": "Reading"
}
},
{
"Nomor": 15,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Translate: 'Saya suka bermain layang-layang'.",
"Prompt Gambar": "Buatkan gambar anak bermain layangan di lapangan",
"Pilihan Jawaban": {
"option 1": "I like playing football",
"option 2": "I like playing kite",
"option 3": "I like playing doll",
"option 4": "I like playing marbles"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Translate: 'Saya suka bermain kelereng'.",
"Prompt Gambar": "Buatkan gambar anak bermain kelereng",
"Jawaban": "I like playing marbles"
}
},
{
"Nomor": 16,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "S - W - I - M - M - I - N - G. How do you say it?",
"Prompt Gambar": "Buatkan gambar kolam renang",
"Pilihan Jawaban": {
"option 1": "Swiming",
"option 2": "Sweming",
"option 3": "Swimming",
"option 4": "Swimeng"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "C - O - O - K - I - N - G. How do you say it?",
"Prompt Gambar": "Buatkan gambar alat masak",
"Jawaban": "Cooking"
}
},
{
"Nomor": 17,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "A place for 'Reading books' is ...",
"Prompt Gambar": "Buatkan gambar perpustakaan penuh buku",
"Pilihan Jawaban": {
"option 1": "Canteen",
"option 2": "Library",
"option 3": "Field",
"option 4": "Pool"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "A place for 'Swimming' is ...",
"Prompt Gambar": "Buatkan gambar kolam renang",
"Jawaban": "Swimming pool"
}
},
{
"Nomor": 18,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Joshua likes playing ... (bola basket).",
"Prompt Gambar": "Buatkan gambar bola basket dan ring",
"Pilihan Jawaban": {
"option 1": "Basketball",
"option 2": "Volleyball",
"option 3": "Football",
"option 4": "Tennis"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Made likes playing ... (sepak bola).",
"Prompt Gambar": "Buatkan gambar bola sepak",
"Jawaban": "Football"
}
},
{
"Nomor": 19,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What is 'Menyanyi' in English?",
"Prompt Gambar": "Buatkan gambar not balok musik",
"Pilihan Jawaban": {
"option 1": "Dancing",
"option 2": "Singing",
"option 3": "Reading",
"option 4": "Writing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "What is 'Menari' in English?",
"Prompt Gambar": "Buatkan gambar sepatu tari",
"Jawaban": "Dancing"
}
},
{
"Nomor": 20,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Arrange the words: likes - She - comics - reading",
"Prompt Gambar": "Buatkan gambar anak perempuan membaca komik",
"Pilihan Jawaban": {
"option 1": "She reading likes comics",
"option 2": "She likes reading comics",
"option 3": "Reading comics likes She",
"option 4": "Comics reading she likes"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Arrange the words: likes - He - football - playing",
"Prompt Gambar": "Buatkan gambar anak laki-laki bermain bola",
"Jawaban": "He likes playing football"
}
},
{
"Nomor": 21,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Do you like playing doll? No, I like ...",
"Prompt Gambar": "Buatkan gambar anak perempuan bermain lompat tali",
"Pilihan Jawaban": {
"option 1": "Playing rope skipping",
"option 2": "Playing football",
"option 3": "Sleeping",
"option 4": "Eating"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Do you like playing kite? No, I like ...",
"Prompt Gambar": "Buatkan gambar anak laki-laki bermain mobil-mobilan",
"Jawaban": "Playing toy cars"
}
},
{
"Nomor": 22,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which one is an outdoor (di luar ruangan) hobby?",
"Prompt Gambar": "Buatkan gambar taman bermain",
"Pilihan Jawaban": {
"option 1": "Watching TV",
"option 2": "Playing Football",
"option 3": "Sleeping",
"option 4": "Cooking"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Which one is an indoor (di dalam ruangan) hobby?",
"Prompt Gambar": "Buatkan gambar ruang keluarga",
"Jawaban": "Watching TV"
}
},
{
"Nomor": 23,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "I use a camera for my hobby. My hobby is ...",
"Prompt Gambar": "Buatkan gambar kamera foto",
"Pilihan Jawaban": {
"option 1": "Cooking",
"option 2": "Photography",
"option 3": "Fishing",
"option 4": "Dancing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "I use a bicycle for my hobby. My hobby is ...",
"Prompt Gambar": "Buatkan gambar sepeda",
"Jawaban": "Cycling"
}
},
{
"Nomor": 24,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. Cici and friends are ...",
"Prompt Gambar": "Buatkan gambar Cici dan teman-teman sedang bermain petak umpet",
"Pilihan Jawaban": {
"option 1": "Playing Hide and Seek",
"option 2": "Playing Football",
"option 3": "Swimming",
"option 4": "Reading"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Look at the picture. They are ...",
"Prompt Gambar": "Buatkan gambar anak-anak sedang bermain ular naga",
"Jawaban": "Playing Snake and Ladder (atau permainan tradisional serupa)"
}
},
{
"Nomor": 25,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What is your hobby?",
"Prompt Gambar": "Buatkan gambar anak sedang menulis cerita",
"Pilihan Jawaban": {
"option 1": "My hobby is Writing",
"option 2": "My hobby is Running",
"option 3": "My hobby is Eating",
"option 4": "My hobby is Sleeping"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "What is your hobby?",
"Prompt Gambar": "Buatkan gambar anak sedang mendengarkan musik",
"Jawaban": "My hobby is Listening to music"
}
},
{
"Nomor": 26,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "He likes to draw pictures. His hobby is ...",
"Prompt Gambar": "Buatkan gambar anak sedang menggambar pemandangan",
"Pilihan Jawaban": {
"option 1": "Singing",
"option 2": "Drawing",
"option 3": "Dancing",
"option 4": "Cooking"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "She likes to make cakes. Her hobby is ...",
"Prompt Gambar": "Buatkan gambar anak membuat kue",
"Jawaban": "Cooking / Baking"
}
},
{
"Nomor": 27,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which one is NOT a hobby?",
"Prompt Gambar": "Buatkan 4 gambar: A (Berenang), B (Menyanyi), C (Menangis), D (Membaca)",
"Pilihan Jawaban": {
"option 1": "Swimming",
"option 2": "Singing",
"option 3": "Crying",
"option 4": "Reading"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Which one is NOT a hobby?",
"Prompt Gambar": "Buatkan 4 gambar: A (Sakit), B (Berlari), C (Menari), D (Memancing)",
"Jawaban": "Being sick"
}
},
{
"Nomor": 28,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the picture. They are playing ...",
"Prompt Gambar": "Buatkan gambar anak-anak bermain badminton",
"Pilihan Jawaban": {
"option 1": "Basketball",
"option 2": "Badminton",
"option 3": "Football",
"option 4": "Tennis"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Look at the picture. They are playing ...",
"Prompt Gambar": "Buatkan gambar anak-anak bermain bola voli",
"Jawaban": "Volleyball"
}
},
{
"Nomor": 29,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Where do you usually go swimming?",
"Prompt Gambar": "Buatkan gambar kolam renang umum",
"Pilihan Jawaban": {
"option 1": "In the kitchen",
"option 2": "In the swimming pool",
"option 3": "In the classroom",
"option 4": "In the library"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Where do you usually play football?",
"Prompt Gambar": "Buatkan gambar lapangan sepak bola",
"Jawaban": "In the field"
}
},
{
"Nomor": 30,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "My father likes ... newspaper.",
"Prompt Gambar": "Buatkan gambar ayah duduk membaca koran",
"Pilihan Jawaban": {
"option 1": "Writing",
"option 2": "Reading",
"option 3": "Eating",
"option 4": "Singing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "My mother likes ... magazines.",
"Prompt Gambar": "Buatkan gambar ibu membaca majalah",
"Jawaban": "Reading"
}
},
{
"Nomor": 31,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Look at the picture. Her hobby is Singing.",
"Prompt Gambar": "Buatkan gambar anak perempuan memegang mikrofon dan bernyanyi",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Look at the picture. His hobby is Singing.",
"Prompt Gambar": "Buatkan gambar anak laki-laki sedang bermain bola",
"Jawaban": "Salah"
}
},
{
"Nomor": 32,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Swimming means 'Berenang'.",
"Prompt Gambar": "Buatkan gambar orang berenang",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Cooking means 'Berenang'.",
"Prompt Gambar": "Buatkan gambar orang memasak",
"Jawaban": "Salah"
}
},
{
"Nomor": 33,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "We play football in the library.",
"Prompt Gambar": "Buatkan gambar perpustakaan yang tenang dengan tanda 'Harap Tenang'",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "We read books in the library.",
"Prompt Gambar": "Buatkan gambar anak membaca di perpustakaan",
"Jawaban": "Benar"
}
},
{
"Nomor": 34,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Look at the picture. He likes playing guitar.",
"Prompt Gambar": "Buatkan gambar anak laki-laki memegang gitar",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Look at the picture. He likes playing piano.",
"Prompt Gambar": "Buatkan gambar anak laki-laki memegang gitar (bukan piano)",
"Jawaban": "Salah"
}
},
{
"Nomor": 35,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Gardening is a hobby about planting flowers.",
"Prompt Gambar": "Buatkan gambar kebun bunga yang indah",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Gardening is a hobby about flying kites.",
"Prompt Gambar": "Buatkan gambar layang-layang di langit",
"Jawaban": "Salah"
}
},
{
"Nomor": 36,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "'Do you like cooking?' is asking about hobby.",
"Prompt Gambar": "Buatkan gambar tanda tanya besar di atas peralatan masak",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "'What is your name?' is asking about hobby.",
"Prompt Gambar": "Buatkan gambar tanda pengenal nama",
"Jawaban": "Salah"
}
},
{
"Nomor": 37,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Look at the picture. They like cycling.",
"Prompt Gambar": "Buatkan gambar dua anak bersepeda bersama",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Look at the picture. They like swimming.",
"Prompt Gambar": "Buatkan gambar dua anak bersepeda (bukan berenang)",
"Jawaban": "Salah"
}
},
{
"Nomor": 38,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Fishing needs a ball.",
"Prompt Gambar": "Buatkan gambar alat pancing dan bola",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "Football needs a ball.",
"Prompt Gambar": "Buatkan gambar bola sepak",
"Jawaban": "Benar"
}
},
{
"Nomor": 39,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "She likes watching TV.",
"Prompt Gambar": "Buatkan gambar anak perempuan duduk di depan TV",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "She likes sleeping.",
"Prompt Gambar": "Buatkan gambar anak perempuan sedang lari",
"Jawaban": "Salah"
}
},
{
"Nomor": 40,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "My hobby is painting. I need a brush.",
"Prompt Gambar": "Buatkan gambar kuas lukis",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "My hobby is reading. I need a brush.",
"Prompt Gambar": "Buatkan gambar buku",
"Jawaban": "Salah"
}
},
{
"Nomor": 41,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Translate to English: 'Hobi saya berenang'.",
"Prompt Gambar": "Buatkan gambar anak berenang",
"Jawaban": "My hobby is swimming",
"proxy": {
"Pertanyaan": "Translate to English: 'Hobi saya menyanyi'.",
"Prompt Gambar": "Buatkan gambar anak menyanyi",
"Jawaban": "My hobby is singing"
}
},
{
"Nomor": 42,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Arrange the words: likes - Joshua - football - playing",
"Prompt Gambar": "Buatkan gambar Joshua bermain bola",
"Jawaban": "Joshua likes playing football",
"proxy": {
"Pertanyaan": "Arrange the words: likes - Cici - cooking",
"Prompt Gambar": "Buatkan gambar Cici memasak",
"Jawaban": "Cici likes cooking"
}
},
{
"Nomor": 43,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What do you need to play kite?",
"Prompt Gambar": "Buatkan gambar layang-layang",
"Jawaban": "Kite / String (Benang)",
"proxy": {
"Pertanyaan": "What do you need to play football?",
"Prompt Gambar": "Buatkan gambar bola sepak",
"Jawaban": "Ball"
}
},
{
"Nomor": 44,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Mention 2 hobbies!",
"Prompt Gambar": "Buatkan gambar berbagai ikon hobi",
"Jawaban": "Swimming, Reading, Singing, Dancing (Pilih 2)",
"proxy": {
"Pertanyaan": "Mention 2 sports!",
"Prompt Gambar": "Buatkan gambar berbagai ikon olahraga",
"Jawaban": "Football, Badminton, Basketball, Tennis (Pilih 2)"
}
},
{
"Nomor": 45,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What is 'Membaca' in English?",
"Prompt Gambar": "Buatkan gambar buku terbuka",
"Jawaban": "Reading",
"proxy": {
"Pertanyaan": "What is 'Menulis' in English?",
"Prompt Gambar": "Buatkan gambar pensil dan kertas",
"Jawaban": "Writing"
}
},
{
"Nomor": 46,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Do you like dancing? (Answer with Yes or No)",
"Prompt Gambar": "Buatkan gambar sepatu tari",
"Jawaban": "Yes, I do / No, I don't",
"proxy": {
"Pertanyaan": "Do you like singing? (Answer with Yes or No)",
"Prompt Gambar": "Buatkan gambar mikrofon",
"Jawaban": "Yes, I do / No, I don't"
}
},
{
"Nomor": 47,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Look at the picture. What is he doing?",
"Prompt Gambar": "Buatkan gambar anak sedang memancing di sungai",
"Jawaban": "Fishing",
"proxy": {
"Pertanyaan": "Look at the picture. What is she doing?",
"Prompt Gambar": "Buatkan gambar anak sedang memasak di dapur",
"Jawaban": "Cooking"
}
},
{
"Nomor": 48,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Fill in the blank: I like ... music.",
"Prompt Gambar": "Buatkan gambar headphone dan not balok",
"Jawaban": "listening to",
"proxy": {
"Pertanyaan": "Fill in the blank: She likes ... a movie.",
"Prompt Gambar": "Buatkan gambar layar bioskop/TV",
"Jawaban": "watching"
}
},
{
"Nomor": 49,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Unscramble: g - n - i - c - n - a - d",
"Prompt Gambar": "Buatkan gambar orang menari",
"Jawaban": "Dancing",
"proxy": {
"Pertanyaan": "Unscramble: g - n - i - k - o - o - c",
"Prompt Gambar": "Buatkan gambar panci masak",
"Jawaban": "Cooking"
}
},
{
"Nomor": 50,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What is your hobby? (Answer in full sentence)",
"Prompt Gambar": "Buatkan gambar tanda tanya besar yang dikelilingi ikon hobi",
"Jawaban": "My hobby is ... (Jawaban siswa bervariasi)",
"proxy": {
"Pertanyaan": "What is your friend's hobby? (Answer in full sentence)",
"Prompt Gambar": "Buatkan gambar dua teman sedang mengobrol",
"Jawaban": "His/Her hobby is ... (Jawaban siswa bervariasi)"
}
}
]
},
{
"Chapter": 5,
"Topic": "I Like Riding a Bike on Sunday (Days of the Week)",
"Total_Questions": 50,
"Questions": [
{
"Nomor": 1,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "How many days are there in a week?",
"Prompt Gambar": "Buatkan gambar kalender satu minggu penuh",
"Pilihan Jawaban": {
"option 1": "Six days",
"option 2": "Seven days",
"option 3": "Five days",
"option 4": "Eight days"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "How many months are there in a year?",
"Prompt Gambar": "Buatkan gambar kalender satu tahun penuh",
"Jawaban": "Twelve months"
}
},
{
"Nomor": 2,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What is the first day of the week?",
"Prompt Gambar": "Buatkan gambar kalender dengan hari Minggu dilingkari merah",
"Pilihan Jawaban": {
"option 1": "Monday",
"option 2": "Friday",
"option 3": "Sunday",
"option 4": "Saturday"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "What is the day after Sunday?",
"Prompt Gambar": "Buatkan gambar kalender dengan hari Senin dilingkari",
"Jawaban": "Monday"
}
},
{
"Nomor": 3,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "We have a flag ceremony at school on ...",
"Prompt Gambar": "Buatkan gambar upacara bendera di sekolah",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Monday",
"option 3": "Tuesday",
"option 4": "Friday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "We usually have a holiday/weekend on ...",
"Prompt Gambar": "Buatkan gambar keluarga berlibur",
"Jawaban": "Sunday"
}
},
{
"Nomor": 4,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What day comes AFTER Monday?",
"Prompt Gambar": "Buatkan gambar urutan hari: Monday -> ?",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Wednesday",
"option 3": "Tuesday",
"option 4": "Thursday"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "What day comes AFTER Tuesday?",
"Prompt Gambar": "Buatkan gambar urutan hari: Tuesday -> ?",
"Jawaban": "Wednesday"
}
},
{
"Nomor": 5,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What day comes BEFORE Friday?",
"Prompt Gambar": "Buatkan gambar urutan hari: ? -> Friday",
"Pilihan Jawaban": {
"option 1": "Thursday",
"option 2": "Saturday",
"option 3": "Wednesday",
"option 4": "Tuesday"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "What day comes BEFORE Sunday?",
"Prompt Gambar": "Buatkan gambar urutan hari: ? -> Sunday",
"Jawaban": "Saturday"
}
},
{
"Nomor": 6,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "The day between Tuesday and Thursday is ...",
"Prompt Gambar": "Buatkan gambar kalender: Selasa - ? - Kamis",
"Pilihan Jawaban": {
"option 1": "Monday",
"option 2": "Friday",
"option 3": "Wednesday",
"option 4": "Saturday"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "The day between Friday and Sunday is ...",
"Prompt Gambar": "Buatkan gambar kalender: Jumat - ? - Minggu",
"Jawaban": "Saturday"
}
},
{
"Nomor": 7,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Translate to English: 'Jumat'.",
"Prompt Gambar": "Buatkan gambar orang pergi sholat Jumat",
"Pilihan Jawaban": {
"option 1": "Friday",
"option 2": "Saturday",
"option 3": "Thursday",
"option 4": "Monday"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Translate to English: 'Sabtu'.",
"Prompt Gambar": "Buatkan gambar anak bermain di hari Sabtu",
"Jawaban": "Saturday"
}
},
{
"Nomor": 8,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Translate to Indonesian: 'Wednesday'.",
"Prompt Gambar": "Buatkan gambar jadwal pelajaran hari Rabu",
"Pilihan Jawaban": {
"option 1": "Selasa",
"option 2": "Rabu",
"option 3": "Kamis",
"option 4": "Jumat"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Translate to Indonesian: 'Thursday'.",
"Prompt Gambar": "Buatkan gambar jadwal pelajaran hari Kamis",
"Jawaban": "Kamis"
}
},
{
"Nomor": 9,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Joshua likes ... on Sunday.",
"Prompt Gambar": "Buatkan gambar Joshua sedang bersepeda di taman pada hari Minggu",
"Pilihan Jawaban": {
"option 1": "Studying",
"option 2": "Cycling",
"option 3": "Cooking",
"option 4": "Sleeping"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Made likes ... on Sunday.",
"Prompt Gambar": "Buatkan gambar Made sedang berenang pada hari Minggu",
"Jawaban": "Swimming"
}
},
{
"Nomor": 10,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Today is Monday. Tomorrow (besok) is ...",
"Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Senin",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Tuesday",
"option 3": "Wednesday",
"option 4": "Saturday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Today is Saturday. Tomorrow is ...",
"Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Sabtu",
"Jawaban": "Sunday"
}
},
{
"Nomor": 11,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Today is Friday. Yesterday (kemarin) was ...",
"Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Jumat",
"Pilihan Jawaban": {
"option 1": "Thursday",
"option 2": "Wednesday",
"option 3": "Saturday",
"option 4": "Sunday"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Today is Wednesday. Yesterday was ...",
"Prompt Gambar": "Buatkan gambar kalender sobek yang menunjukkan hari ini Rabu",
"Jawaban": "Tuesday"
}
},
{
"Nomor": 12,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Arrange the letters: S - U - N - D - Y - A",
"Prompt Gambar": "Buatkan gambar matahari cerah di hari libur",
"Pilihan Jawaban": {
"option 1": "Sanduy",
"option 2": "Sunday",
"option 3": "Syudan",
"option 4": "Dansuy"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Arrange the letters: M - O - N - D - A - Y",
"Prompt Gambar": "Buatkan gambar anak sekolah upacara",
"Jawaban": "Monday"
}
},
{
"Nomor": 13,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "I like swimming on ... (Sabtu).",
"Prompt Gambar": "Buatkan gambar anak berenang dan kalender bertuliskan 'Sabtu'",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Saturday",
"option 3": "Monday",
"option 4": "Friday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "I like reading on ... (Minggu).",
"Prompt Gambar": "Buatkan gambar anak membaca buku dan kalender bertuliskan 'Minggu'",
"Jawaban": "Sunday"
}
},
{
"Nomor": 14,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Which day starts with letter 'T'?",
"Prompt Gambar": "Buatkan gambar huruf T besar",
"Pilihan Jawaban": {
"option 1": "Monday and Sunday",
"option 2": "Tuesday and Thursday",
"option 3": "Wednesday and Friday",
"option 4": "Saturday and Sunday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Which day starts with letter 'S'?",
"Prompt Gambar": "Buatkan gambar huruf S besar",
"Jawaban": "Saturday and Sunday"
}
},
{
"Nomor": 15,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "We don't go to school on ...",
"Prompt Gambar": "Buatkan gambar sekolah yang tutup/gerbang dikunci",
"Pilihan Jawaban": {
"option 1": "Monday",
"option 2": "Wednesday",
"option 3": "Friday",
"option 4": "Sunday"
},
"Jawaban": "option 4",
"proxy": {
"Pertanyaan": "We study at school from ... to ...",
"Prompt Gambar": "Buatkan gambar anak belajar di kelas",
"Jawaban": "Monday to Friday (or Saturday)"
}
},
{
"Nomor": 16,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Cici: What is your hobby on Sunday? Aisyah: ...",
"Prompt Gambar": "Buatkan gambar Aisyah sedang memasak",
"Pilihan Jawaban": {
"option 1": "I like cooking",
"option 2": "I like sleeping",
"option 3": "I like studying",
"option 4": "I like crying"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "Made: What do you do on Saturday? Joshua: ...",
"Prompt Gambar": "Buatkan gambar Joshua sedang menonton TV",
"Jawaban": "I watch TV"
}
},
{
"Nomor": 17,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "F - R - I - D - ... - Y. Complete the word.",
"Prompt Gambar": "Buatkan gambar masjid (asosiasi Jumat)",
"Pilihan Jawaban": {
"option 1": "A",
"option 2": "E",
"option 3": "I",
"option 4": "O"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "T - U - E - ... - D - A - Y. Complete the word.",
"Prompt Gambar": "Buatkan gambar kalender hari Selasa",
"Jawaban": "S"
}
},
{
"Nomor": 18,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Mirna has a dancing course on ... (Senin).",
"Prompt Gambar": "Buatkan gambar Mirna menari dan kalender Senin",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Monday",
"option 3": "Tuesday",
"option 4": "Wednesday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Mirna has a swimming course on ... (Selasa).",
"Prompt Gambar": "Buatkan gambar Mirna berenang dan kalender Selasa",
"Jawaban": "Tuesday"
}
},
{
"Nomor": 19,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Arrange the sentence: likes - He - fishing - Sunday - on",
"Prompt Gambar": "Buatkan gambar anak memancing di hari Minggu",
"Pilihan Jawaban": {
"option 1": "He fishing likes on Sunday",
"option 2": "He likes fishing on Sunday",
"option 3": "Sunday likes fishing on He",
"option 4": "On Sunday fishing he likes"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Arrange the sentence: cycling - We - like - Friday - on",
"Prompt Gambar": "Buatkan gambar anak-anak bersepeda di hari Jumat",
"Jawaban": "We like cycling on Friday"
}
},
{
"Nomor": 20,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Look at the schedule. What does she do on Saturday?",
"Prompt Gambar": "Buatkan tabel jadwal: Saturday - Rollerblade",
"Pilihan Jawaban": {
"option 1": "Swimming",
"option 2": "Rollerblade",
"option 3": "Karate",
"option 4": "Dancing"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Look at the schedule. What does she do on Friday?",
"Prompt Gambar": "Buatkan tabel jadwal: Friday - Karate",
"Jawaban": "Karate"
}
},
{
"Nomor": 21,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Is today Sunday? No, today is ... (Sabtu)",
"Prompt Gambar": "Buatkan gambar kalender bertuliskan 'Sabtu'",
"Pilihan Jawaban": {
"option 1": "Sunday",
"option 2": "Monday",
"option 3": "Saturday",
"option 4": "Friday"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "Is tomorrow Friday? No, tomorrow is ... (Kamis)",
"Prompt Gambar": "Buatkan gambar kalender bertuliskan 'Kamis'",
"Jawaban": "Thursday"
}
},
{
"Nomor": 22,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "My favorite day is ... because no school.",
"Prompt Gambar": "Buatkan gambar anak bersantai di rumah",
"Pilihan Jawaban": {
"option 1": "Monday",
"option 2": "Tuesday",
"option 3": "Wednesday",
"option 4": "Sunday"
},
"Jawaban": "option 4",
"proxy": {
"Pertanyaan": "I like ... because I can play all day.",
"Prompt Gambar": "Buatkan gambar anak bermain seharian",
"Jawaban": "Sunday / Holiday"
}
},
{
"Nomor": 23,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "T - H - U - ... - S - D - A - Y. What is the missing letter?",
"Prompt Gambar": "Buatkan gambar kalender Kamis",
"Pilihan Jawaban": {
"option 1": "R",
"option 2": "E",
"option 3": "A",
"option 4": "U"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "W - E - D - N - E - ... - D - A - Y. What is the missing letter?",
"Prompt Gambar": "Buatkan gambar kalender Rabu",
"Jawaban": "S"
}
},
{
"Nomor": 24,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "Do you go to school on Sunday?",
"Prompt Gambar": "Buatkan gambar sekolah yang sepi di hari Minggu",
"Pilihan Jawaban": {
"option 1": "Yes, I do",
"option 2": "No, I don't",
"option 3": "Yes, I am",
"option 4": "No, I am not"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Do you go to school on Monday?",
"Prompt Gambar": "Buatkan gambar anak berangkat sekolah di hari Senin",
"Jawaban": "Yes, I do"
}
},
{
"Nomor": 25,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "We perform Sholat Jumat on ...",
"Prompt Gambar": "Buatkan gambar orang di masjid",
"Pilihan Jawaban": {
"option 1": "Thursday",
"option 2": "Friday",
"option 3": "Saturday",
"option 4": "Sunday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Christians go to church on ...",
"Prompt Gambar": "Buatkan gambar orang di gereja",
"Jawaban": "Sunday"
}
},
{
"Nomor": 26,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "How do you spell 'Rabu' in English?",
"Prompt Gambar": "Buatkan gambar tulisan WEDNESDAY",
"Pilihan Jawaban": {
"option 1": "W-e-n-e-s-d-a-y",
"option 2": "W-e-d-n-e-s-d-a-y",
"option 3": "W-e-d-n-e-s-d-e-y",
"option 4": "W-e-d-n-e-s-d-a-i"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "How do you spell 'Kamis' in English?",
"Prompt Gambar": "Buatkan gambar tulisan THURSDAY",
"Jawaban": "T-h-u-r-s-d-a-y"
}
},
{
"Nomor": 27,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "After Tuesday is Wednesday. After Wednesday is ...",
"Prompt Gambar": "Buatkan gambar urutan hari: Selasa -> Rabu -> ?",
"Pilihan Jawaban": {
"option 1": "Monday",
"option 2": "Thursday",
"option 3": "Friday",
"option 4": "Saturday"
},
"Jawaban": "option 2",
"proxy": {
"Pertanyaan": "Before Wednesday is Tuesday. Before Tuesday is ...",
"Prompt Gambar": "Buatkan gambar urutan hari: ? <- Selasa <- Rabu",
"Jawaban": "Monday"
}
},
{
"Nomor": 28,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "They play ... on Saturday afternoon.",
"Prompt Gambar": "Buatkan gambar anak-anak bermain kelereng",
"Pilihan Jawaban": {
"option 1": "Marbles",
"option 2": "Doll",
"option 3": "Kite",
"option 4": "Bike"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "They play ... on Sunday morning.",
"Prompt Gambar": "Buatkan gambar anak-anak bermain sepak bola",
"Jawaban": "Football"
}
},
{
"Nomor": 29,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "There are ... days in two weeks.",
"Prompt Gambar": "Buatkan gambar dua lembar kalender minggu",
"Pilihan Jawaban": {
"option 1": "Seven",
"option 2": "Ten",
"option 3": "Fourteen",
"option 4": "Twenty"
},
"Jawaban": "option 3",
"proxy": {
"Pertanyaan": "There are ... days in a week.",
"Prompt Gambar": "Buatkan gambar satu lembar kalender minggu",
"Jawaban": "Seven"
}
},
{
"Nomor": 30,
"Jenis": "Pilihan Ganda",
"Pertanyaan": "What do you do on Sunday?",
"Prompt Gambar": "Buatkan gambar anak sedang membantu ibu menyapu",
"Pilihan Jawaban": {
"option 1": "I help my mother",
"option 2": "I go to school",
"option 3": "I study math",
"option 4": "I wear uniform"
},
"Jawaban": "option 1",
"proxy": {
"Pertanyaan": "What do you do on Monday?",
"Prompt Gambar": "Buatkan gambar anak sedang belajar di kelas",
"Jawaban": "I study at school"
}
},
{
"Nomor": 31,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Monday is the day after Sunday.",
"Prompt Gambar": "Buatkan gambar urutan hari Minggu -> Senin",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Monday is the day before Sunday.",
"Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu",
"Jawaban": "Salah"
}
},
{
"Nomor": 32,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Friday comes before Thursday.",
"Prompt Gambar": "Buatkan gambar urutan hari Kamis -> Jumat",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "Thursday comes before Friday.",
"Prompt Gambar": "Buatkan gambar urutan hari Kamis -> Jumat",
"Jawaban": "Benar"
}
},
{
"Nomor": 33,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "We usually have a flag ceremony on Tuesday.",
"Prompt Gambar": "Buatkan gambar upacara bendera",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "We usually have a flag ceremony on Monday.",
"Prompt Gambar": "Buatkan gambar upacara bendera",
"Jawaban": "Benar"
}
},
{
"Nomor": 34,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "There are 7 days in a week.",
"Prompt Gambar": "Buatkan gambar angka 7",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "There are 6 days in a week.",
"Prompt Gambar": "Buatkan gambar angka 6",
"Jawaban": "Salah"
}
},
{
"Nomor": 35,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "'Rabu' in English is Wednesday.",
"Prompt Gambar": "Buatkan gambar kalender Rabu",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "'Rabu' in English is Tuesday.",
"Prompt Gambar": "Buatkan gambar kalender Selasa",
"Jawaban": "Salah"
}
},
{
"Nomor": 36,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Look at the picture. He likes reading on Saturday.",
"Prompt Gambar": "Buatkan gambar anak membaca buku dengan kalender Sabtu di dinding",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Look at the picture. He likes swimming on Saturday.",
"Prompt Gambar": "Buatkan gambar anak membaca buku (bukan berenang) dengan kalender Sabtu",
"Jawaban": "Salah"
}
},
{
"Nomor": 37,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "The day between Friday and Sunday is Monday.",
"Prompt Gambar": "Buatkan gambar kalender Jumat - Sabtu - Minggu",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "The day between Friday and Sunday is Saturday.",
"Prompt Gambar": "Buatkan gambar kalender Jumat - Sabtu - Minggu",
"Jawaban": "Benar"
}
},
{
"Nomor": 38,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "Sunday is a holiday.",
"Prompt Gambar": "Buatkan gambar kalender dengan hari Minggu berwarna merah",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "Monday is a holiday.",
"Prompt Gambar": "Buatkan gambar suasana sekolah yang sibuk",
"Jawaban": "Salah"
}
},
{
"Nomor": 39,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "After Saturday is Sunday.",
"Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu",
"Jawaban": "Benar",
"proxy": {
"Pertanyaan": "After Saturday is Monday.",
"Prompt Gambar": "Buatkan gambar urutan hari Sabtu -> Minggu -> Senin",
"Jawaban": "Salah"
}
},
{
"Nomor": 40,
"Jenis": "Pertanyaan Benar atau Salah",
"Pertanyaan": "I ride a bike in the swimming pool.",
"Prompt Gambar": "Buatkan gambar anak bersepeda masuk kolam renang (lucu/salah)",
"Jawaban": "Salah",
"proxy": {
"Pertanyaan": "I swim in the swimming pool.",
"Prompt Gambar": "Buatkan gambar anak berenang",
"Jawaban": "Benar"
}
},
{
"Nomor": 41,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What is the day after Monday?",
"Prompt Gambar": "Buatkan gambar urutan hari Senin -> ?",
"Jawaban": "Tuesday",
"proxy": {
"Pertanyaan": "What is the day before Friday?",
"Prompt Gambar": "Buatkan gambar urutan hari ? -> Jumat",
"Jawaban": "Thursday"
}
},
{
"Nomor": 42,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Mention 3 days in a week!",
"Prompt Gambar": "Buatkan gambar 3 lembar kalender acak",
"Jawaban": "Monday, Tuesday, Wednesday (Jawaban siswa bisa bervariasi asalkan nama hari)",
"proxy": {
"Pertanyaan": "Mention 2 days of the weekend!",
"Prompt Gambar": "Buatkan gambar kalender Sabtu dan Minggu",
"Jawaban": "Saturday, Sunday"
}
},
{
"Nomor": 43,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Translate to English: 'Saya suka berenang pada hari Minggu'.",
"Prompt Gambar": "Buatkan gambar anak berenang di hari Minggu",
"Jawaban": "I like swimming on Sunday",
"proxy": {
"Pertanyaan": "Translate to English: 'Saya suka membaca pada hari Sabtu'.",
"Prompt Gambar": "Buatkan gambar anak membaca di hari Sabtu",
"Jawaban": "I like reading on Saturday"
}
},
{
"Nomor": 44,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Arrange the letters: M - O - N - D - A - Y",
"Prompt Gambar": "Buatkan gambar hari Senin",
"Jawaban": "Monday",
"proxy": {
"Pertanyaan": "Arrange the letters: F - R - I - D - A - Y",
"Prompt Gambar": "Buatkan gambar hari Jumat",
"Jawaban": "Friday"
}
},
{
"Nomor": 45,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "What do you do on Sunday? (Write one activity)",
"Prompt Gambar": "Buatkan gambar berbagai aktivitas liburan",
"Jawaban": "Cycling / Swimming / Playing / Watching TV (Jawaban siswa bervariasi)",
"proxy": {
"Pertanyaan": "What do you do on Monday? (Write one activity)",
"Prompt Gambar": "Buatkan gambar aktivitas sekolah",
"Jawaban": "Studying / Going to school"
}
},
{
"Nomor": 46,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Translate to Indonesian: 'Thursday'.",
"Prompt Gambar": "Buatkan gambar kalender Kamis",
"Jawaban": "Kamis",
"proxy": {
"Pertanyaan": "Translate to Indonesian: 'Tuesday'.",
"Prompt Gambar": "Buatkan gambar kalender Selasa",
"Jawaban": "Selasa"
}
},
{
"Nomor": 47,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Today is Wednesday. Tomorrow is ...",
"Prompt Gambar": "Buatkan gambar kalender hari Rabu dan tanda panah ke hari berikutnya",
"Jawaban": "Thursday",
"proxy": {
"Pertanyaan": "Today is Monday. Yesterday was ...",
"Prompt Gambar": "Buatkan gambar kalender hari Senin dan tanda panah ke hari sebelumnya",
"Jawaban": "Sunday"
}
},
{
"Nomor": 48,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Arrange the sentence: Sunday - on - I - football - play",
"Prompt Gambar": "Buatkan gambar anak main bola di hari Minggu",
"Jawaban": "I play football on Sunday",
"proxy": {
"Pertanyaan": "Arrange the sentence: Monday - on - school - to - go - I",
"Prompt Gambar": "Buatkan gambar anak pergi ke sekolah",
"Jawaban": "I go to school on Monday"
}
},
{
"Nomor": 49,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "Complete the word: S_t_rd_y",
"Prompt Gambar": "Buatkan gambar kalender Sabtu",
"Jawaban": "Saturday",
"proxy": {
"Pertanyaan": "Complete the word: T_u_sd_y",
"Prompt Gambar": "Buatkan gambar kalender Kamis",
"Jawaban": "Thursday"
}
},
{
"Nomor": 50,
"Jenis": "Pertanyaan Esai",
"Pertanyaan": "How many days do you go to school in a week?",
"Prompt Gambar": "Buatkan gambar anak sekolah dari Senin sampai Jumat/Sabtu",
"Jawaban": "5 days / 6 days (Tergantung kebijakan sekolah siswa)",
"proxy": {
"Pertanyaan": "Name the days you go to school!",
"Prompt Gambar": "Buatkan gambar jadwal pelajaran",
"Jawaban": "Monday, Tuesday, Wednesday, Thursday, Friday, (Saturday)"
}
}
]
}
];

const normalizeData = (chapters: RawChapter[]): QuestionData[] => {
  const normalized: QuestionData[] = [];

  chapters.forEach(chapter => {
    let subject = "";
    let chapterNum = 0;
    let rawQuestions: RawQuestion[] = [];

    // Detect Schema Type
    if (chapter.Bab) {
      // IPAS Schema
      subject = "IPAS";
      const chapterMatch = chapter.Bab.match(/^(\d+)/);
      chapterNum = chapterMatch ? parseInt(chapterMatch[0]) : 0;
      rawQuestions = chapter.Daftar_Soal || [];
    } else if (chapter.Chapter) {
      // English Schema
      subject = "Bahasa Inggris";
      chapterNum = chapter.Chapter;
      rawQuestions = chapter.Questions || [];
    }

    const semester = chapterNum <= 4 ? 1 : 2;

    rawQuestions.forEach((q, index) => {
       // Determine Type
       const typeMap: Record<string, 'multiple_choice' | 'true_false' | 'essay'> = {
         "Pilihan Ganda": 'multiple_choice',
         "Pertanyaan Benar atau Salah": 'true_false',
         "Esai": 'essay',
         "Pertanyaan Esai": 'essay'
       };
       
       const qType = typeMap[q.Jenis] || 'multiple_choice';

       // Normalize Options
       const processOptions = (rawOpts: any): Option[] => {
         if (!rawOpts) return [];
         
         if (Array.isArray(rawOpts)) {
           // IPAS Array format
           return rawOpts.map((o: any) => ({
             text: o.teks,
             image_prompt: o["prompt gambar"]
           }));
         } else if (typeof rawOpts === 'object') {
           // English Object format (option 1: "Text")
           return Object.keys(rawOpts).map(key => ({
             text: rawOpts[key],
             image_prompt: null // English data provided didn't have specific option images in the object map usually
           }));
         }
         return [];
       };

       // Normalize Correct Answer for English (maps "option 1" to actual text)
       let correctAnswer = q.Jawaban;
       if (qType === 'multiple_choice' && typeof q["Pilihan Jawaban"] === 'object' && !Array.isArray(q["Pilihan Jawaban"])) {
          if (q["Pilihan Jawaban"][correctAnswer]) {
             correctAnswer = q["Pilihan Jawaban"][correctAnswer];
          }
       }

       const processProxy = (p?: any, parentId?: string): QuestionData | undefined => {
          if (!p) return undefined;
          
          // English Proxy sometimes lacks 'Jenis', assume parent type
          const proxyType = p.Jenis ? (typeMap[p.Jenis] || 'essay') : qType;
          
          // Handle English Proxy Answers which might just be the string "Meatball" instead of "option 2"
          // If it matches an option key, resolve it, otherwise keep it.
          let proxyCorrect = p.Jawaban;
          
          return {
             id: parentId ? `${parentId}_proxy` : `proxy_${Math.random()}`,
             subject,
             semester,
             chapter: chapterNum,
             type: proxyType,
             question: p.Pertanyaan,
             image_prompt: p["Prompt Gambar"],
             options: processOptions(p["Pilihan Jawaban"]), // Proxy might not have options in simplified English structure
             correct_answer: proxyCorrect,
             proxy: processProxy(p.proxy)
          };
       };

       // Main Question Object
       normalized.push({
         id: `${subject}_${semester}_${chapterNum}_${q.Nomor || index + 1}`,
         subject,
         semester,
         chapter: chapterNum,
         type: qType,
         question: q.Pertanyaan,
         image_prompt: q["Prompt Gambar"],
         options: processOptions(q["Pilihan Jawaban"]),
         correct_answer: correctAnswer,
         proxy: processProxy(q.proxy, `${subject}_${semester}_${chapterNum}_${q.Nomor || index + 1}`)
       });
    });
  });

  return normalized;
};

export const QUESTIONS_DB = normalizeData(rawData);

export const getSubjects = () => Array.from(new Set(QUESTIONS_DB.map(q => q.subject)));

export const getChapters = (sub: string, sem: number) => {
  return Array.from(new Set(QUESTIONS_DB.filter(q => q.subject === sub && q.semester === sem).map(q => q.chapter))).sort((a,b)=>a-b);
};
