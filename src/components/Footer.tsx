import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";


export default function Footer() {
  return (
    <footer id="kontak" className="gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-5">KSP Rakyat Jaya Sentosa</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              KSP Rakyat Jaya Sentosa adalah koperasi simpan pinjam yang berkomitmen memberikan layanan keuangan terbaik untuk kesejahteraan anggota dan masyarakat.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">Kontak Kami</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                Kavling Commercial International School II Nomor 8 BSD City, Jalan Foresta, Kelurahan Lengkong Kulon, Kecamatan Pagedangan, Kabupaten Tangerang, Banten
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                (022) 1234-5678
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                rakjatjayasentosa@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-accent shrink-0" />
                Senin - Jumat: 08.00 - 16.00 WIB
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-5">Ikuti Kami</h3>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: MessageCircle, label: "WhatsApp" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/50 mt-6">
              Hubungi kami melalui media sosial untuk informasi terbaru dan promo menarik.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/40">
          © 2026 KSP Rakyat Jaya Sentosa. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
