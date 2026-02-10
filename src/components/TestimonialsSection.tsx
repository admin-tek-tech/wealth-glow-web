import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pedagang",
    text: "Berkat pinjaman modal dari KSP Rakyat Jaya Sentosa, usaha saya bisa berkembang pesat. Prosesnya mudah dan bunganya sangat ringan.",
  },
  {
    name: "Siti Rahayu",
    role: "Guru",
    text: "Simpanan berjangka di sini memberikan bunga yang sangat kompetitif. Pelayanannya ramah dan saya merasa dana saya aman.",
  },
  {
    name: "Ahmad Hidayat",
    role: "Karyawan Swasta",
    text: "Proses pengajuan pinjaman sangat cepat, hanya 2 hari sudah cair. Sangat membantu untuk kebutuhan pendidikan anak saya.",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border-2 border-secondary" />
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full border border-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Apa Kata Anggota Kami?</h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Kepercayaan anggota adalah kebanggaan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="text-secondary/30 mb-4" size={32} />
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-accent fill-accent" size={16} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-primary">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
