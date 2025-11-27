
export interface RawOption {
  teks: string;
  "prompt gambar"?: string | null;
}

export interface RawQuestion {
  Nomor: number;
  Jenis: "Pilihan Ganda" | "Pertanyaan Benar atau Salah" | "Esai";
  Pertanyaan: string;
  "Prompt Gambar"?: string;
  "Pilihan Jawaban"?: RawOption[];
  Jawaban: string;
  proxy?: RawQuestion;
}

export interface RawDataBlock {
  Grade: number;
  Semester: number;
  Bab: number;
  JudulBab: string;
  Subject: string;
  // Total_Soal removed. Count is derived from Daftar_Soal.length
  Daftar_Soal: RawQuestion[];
}

// Helper to create options easily
export const opts = (a: string, b: string, c: string, d?: string) => {
    const res = [
        { teks: a, "prompt gambar": null },
        { teks: b, "prompt gambar": null },
        { teks: c, "prompt gambar": null }
    ];
    if (d) res.push({ teks: d, "prompt gambar": null });
    return res;
};
