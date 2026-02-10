import { PiggyBank, HandCoins, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: PiggyBank,
    title: "Simpanan",
    desc: "Tabungan aman dan menguntungkan untuk masa depan Anda.",
    items: ["Tabungan Harian", "Simpanan Berjangka", "Simpanan Sukarela"],
  },
  {
    icon: HandCoins,
    title: "Pinjaman",
    desc: "Pinjaman mudah dengan bunga kompetitif untuk berbagai kebutuhan.",
    items: ["Pinjaman Modal Usaha", "Pinjaman Konsumtif", "Pinjaman Pendidikan"],
  },
  {
    icon: TrendingUp,
    title: "Investasi",
    desc: "Rencanakan masa depan dengan program investasi terpercaya.",
    items: ["Dana Pendidikan", "Dana Pensiun", "Dana Darurat"],
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="layanan" className="py-24 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Layanan Kami</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kami menyediakan beragam layanan keuangan yang dirancang untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-2xl border border-border p-8 hover:border-secondary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
