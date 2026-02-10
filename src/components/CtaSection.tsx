import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function CtaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 gradient-green relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-card" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-card" />
      </div>

      <div
        ref={ref}
        className={`container mx-auto px-4 text-center relative z-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-6 max-w-2xl mx-auto leading-tight">
          Bergabung Sekarang dan Wujudkan Impian Finansial Anda!
        </h2>
        <p className="text-primary-foreground/80 mb-10 max-w-lg mx-auto">
          Ribuan anggota telah merasakan manfaatnya. Giliran Anda sekarang.
        </p>
        <Button
          variant="hero-white"
          size="xl"
          onClick={() => {
            const el = document.querySelector("#kontak");
            if (el) {
              const top = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top, behavior: "smooth" });
            }
          }}
        >
          Hubungi Kami
        </Button>
      </div>
    </section>
  );
}
