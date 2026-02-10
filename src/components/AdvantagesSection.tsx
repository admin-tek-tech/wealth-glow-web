import { Percent, Zap, ShieldCheck, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const advantages = [
  { icon: Percent, title: "Bunga Kompetitif", desc: "Suku bunga simpanan tinggi dan pinjaman ringan untuk kesejahteraan anggota." },
  { icon: Zap, title: "Proses Cepat & Mudah", desc: "Pengajuan simpanan dan pinjaman dapat diproses dalam hitungan hari." },
  { icon: ShieldCheck, title: "Terpercaya & Berizin", desc: "Beroperasi sesuai regulasi pemerintah dengan pengawasan ketat." },
  { icon: Heart, title: "Pelayanan Ramah", desc: "Tim profesional yang siap membantu dengan sepenuh hati." },
];

export default function AdvantagesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="keunggulan" className="py-24 bg-muted">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Keunggulan yang membuat kami menjadi mitra keuangan terbaik Anda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <div
              key={a.title}
              className={`bg-card rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-green flex items-center justify-center mx-auto mb-5">
                <a.icon className="text-primary-foreground" size={30} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
