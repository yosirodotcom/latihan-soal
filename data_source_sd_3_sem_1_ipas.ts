import { RawDataBlock, opts } from './data_types';

export const DATA_SD_3_SEM_1_IPAS: RawDataBlock[] = [
  {
    Grade: 3,
    Semester: 1,
    Subject: "IPAS",
    Bab: 1,
    JudulBab: "Mari Kenali Hewan di Sekitar Kita",
    Daftar_Soal: [
      {
        Nomor: 1,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Perhatikan hewan pada gambar. Hewan tersebut memiliki tulang belakang. Hewan yang memiliki tulang belakang disebut hewan ...",
        "Prompt Gambar": "Buatkan gambar ilustrasi tulang belakang manusia atau hewan vertebrata yang jelas.",
        "Pilihan Jawaban": [
          { "teks": "Vertebrata", "prompt gambar": "Buatkan gambar kerangka kucing atau hewan bertulang belakang." },
          { "teks": "Invertebrata", "prompt gambar": "Buatkan gambar cacing tanah atau ubur-ubur." },
          { "teks": "Melata", "prompt gambar": "Buatkan gambar ular sedang melata." },
          { "teks": "Buas", "prompt gambar": "Buatkan gambar singa sedang mengaum." }
        ],
        Jawaban: "Vertebrata",
        proxy: {
            Nomor: 1,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Kucing dan Ayam memiliki tulang punggung di tubuhnya. Kelompok hewan ini disebut apa?",
            "Prompt Gambar": "Buatkan gambar kucing dan ayam berdampingan.",
            "Pilihan Jawaban": [
                { "teks": "Invertebrata", "prompt gambar": "Buatkan gambar siput." },
                { "teks": "Vertebrata", "prompt gambar": "Buatkan gambar kerangka ikan." },
                { "teks": "Herbivora", "prompt gambar": "Buatkan gambar sapi makan rumput." },
                { "teks": "Karnivora", "prompt gambar": "Buatkan gambar harimau makan daging." }
            ],
            Jawaban: "Vertebrata"
        }
      },
      {
        Nomor: 2,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Cacing tanah dan ubur-ubur tidak memiliki tulang belakang. Mereka termasuk kelompok hewan ...",
        "Prompt Gambar": "Buatkan gambar cacing tanah dan ubur-ubur di laut.",
        "Pilihan Jawaban": [
          { "teks": "Mamalia", "prompt gambar": "Buatkan gambar sapi menyusui anaknya." },
          { "teks": "Vertebrata", "prompt gambar": "Buatkan gambar kerangka burung." },
          { "teks": "Invertebrata", "prompt gambar": "Buatkan gambar bintang laut dan siput." },
          { "teks": "Unggas", "prompt gambar": "Buatkan gambar ayam dan bebek." }
        ],
        Jawaban: "Invertebrata",
        proxy: {
            Nomor: 2,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Hewan manakah di bawah ini yang tubuhnya lunak dan TIDAK punya tulang belakang?",
            "Prompt Gambar": "Buatkan gambar koleksi hewan: Kucing, Ayam, Gurita, Kambing.",
            "Pilihan Jawaban": [
                { "teks": "Kucing", "prompt gambar": "Buatkan gambar kucing." },
                { "teks": "Ayam", "prompt gambar": "Buatkan gambar ayam." },
                { "teks": "Gurita", "prompt gambar": "Buatkan gambar gurita." },
                { "teks": "Kambing", "prompt gambar": "Buatkan gambar kambing." }
            ],
            Jawaban: "Gurita"
        }
      },
      {
        Nomor: 3,
        Jenis: "Pilihan Ganda",
        Pertanyaan: "Ikan bergerak di dalam air menggunakan organ tubuh yang ditunjuk panah. Apa nama organ tersebut?",
        "Prompt Gambar": "Buatkan gambar ikan sedang berenang, berikan tanda panah menunjuk ke arah siripnya.",
        "Pilihan Jawaban": [
          { "teks": "Sayap", "prompt gambar": "Buatkan gambar sayap burung." },
          { "teks": "Kaki", "prompt gambar": "Buatkan gambar kaki ayam." },
          { "teks": "Sirip", "prompt gambar": "Buatkan gambar sirip ikan." },
          { "teks": "Ekor saja", "prompt gambar": "Buatkan gambar ekor kucing." }
        ],
        Jawaban: "Sirip",
        proxy: {
            Nomor: 3,
            Jenis: "Pilihan Ganda",
            Pertanyaan: "Agar bisa berenang lincah di air, ikan mas menggunakan bantuan alat gerak berupa ...",
            "Prompt Gambar": "Buatkan gambar ikan mas koki yang cantik.",
            "Pilihan Jawaban": [
                { "teks": "Kaki selaput", "prompt gambar": "Buatkan gambar kaki bebek." },
                { "teks": "Sirip", "prompt gambar": "Buatkan gambar sirip hiu." },
                { "teks": "Sayap", "prompt gambar": "Buatkan gambar sayap kupu-kupu." },
                { "teks": "Perut", "prompt gambar": "Buatkan gambar ular melata." }
            ],
            Jawaban: "Sirip"
        }
      },
      {
        Nomor: 4,
        Jenis: "Pertanyaan Benar atau Salah",
        Pertanyaan: "Kambing adalah hewan karnivora karena memakan daging.",
        "Prompt Gambar": "Buatkan gambar kambing sedang makan rumput.",
        Jawaban: "Salah",
        proxy: {
            Nomor: 4,
            Jenis: "Pertanyaan Benar atau Salah",
            Pertanyaan: "Harimau disebut hewan karnivora karena makanannya berupa daging.",
            "Prompt Gambar": "Buatkan gambar harimau sedang makan daging.",
            Jawaban: "Benar"
        }
      },
      {
        Nomor: 5,
        Jenis: "Esai",
        Pertanyaan: "Sebutkan satu ciri utama makhluk hidup yang membedakannya dengan benda mati!",
        "Prompt Gambar": "Buatkan gambar perbandingan antara kucing yang sedang melompat dan batu diam.",
        Jawaban: "Bernapas",
        proxy: {
            Nomor: 5,
            Jenis: "Esai",
            Pertanyaan: "Mengapa mobil tidak disebut makhluk hidup meskipun bisa bergerak?",
            "Prompt Gambar": "Buatkan gambar mobil sedang melaju.",
            Jawaban: "Tidak bernapas"
        }
      }
    ]
  }
];