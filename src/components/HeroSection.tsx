import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-illustration.png";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden gradient-primary">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/20 text-accent mb-6">
            Koperasi Simpan Pinjam Terpercaya
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            Solusi Keuangan Terpercaya untuk{" "}
            <span className="gradient-green-text">Masa Depan Cerah</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            Koperasi Cerdas Waluyo — Simpan Pinjam yang Aman, Mudah, dan Menguntungkan untuk seluruh anggota keluarga.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="cta" size="lg" onClick={() => scrollTo("#kontak")}>
              Daftar Sekarang
            </Button>
            <Button variant="cta-outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10" onClick={() => scrollTo("#layanan")}>
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        <div className="flex justify-center animate-float">
          <img
            src={heroImg}
            alt="Ilustrasi keuangan keluarga"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
