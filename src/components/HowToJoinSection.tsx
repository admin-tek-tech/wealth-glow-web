import { ClipboardList, FileText, CheckCircle, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { icon: ClipboardList, title: "Isi Formulir Pendaftaran", desc: "Lengkapi data diri melalui formulir online atau datang langsung." },
  { icon: FileText, title: "Lengkapi Dokumen", desc: "Siapkan KTP, KK, dan dokumen pendukung lainnya." },
  { icon: CheckCircle, title: "Verifikasi & Persetujuan", desc: "Tim kami akan memverifikasi data dalam 1-3 hari kerja." },
  { icon: Rocket, title: "Mulai Bertransaksi", desc: "Selamat! Anda resmi menjadi anggota dan siap bertransaksi." },
];

export default function HowToJoinSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cara-bergabung" className="py-24 bg-card">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">Cara Bergabung</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Bergabung bersama kami hanya dalam 4 langkah mudah.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`relative text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Connector line (hidden on first item and mobile) */}
              {i > 0 && (
                <div className="hidden lg:block absolute top-8 -left-4 w-8 h-0.5 bg-secondary/30" />
              )}
              <div className="w-16 h-16 rounded-full gradient-green flex items-center justify-center mx-auto mb-5 text-primary-foreground font-bold text-xl relative">
                {i + 1}
                <s.icon className="absolute -bottom-1 -right-1 w-6 h-6 bg-card rounded-full p-0.5 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
