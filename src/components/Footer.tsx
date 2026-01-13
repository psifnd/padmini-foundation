import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg">Padmini Social</h3>
                <p className="text-xs text-background/60">Impact Foundation</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              A Public Charitable Trust committed to transforming lives through
              education, healthcare, and community development across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About Us", "Our Work", "Impact", "Donate", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-background/70 hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {[
                "Education & Literacy",
                "Healthcare Services",
                "Women Empowerment",
                "Youth Development",
                "Environment",
              ].map((area) => (
                <li key={area}>
                  <span className="text-background/70 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  2/394/1 Akalsindhu Villa, Chinna Vadakarai, Tirumagalam - 625706,
                  Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919962901122" className="text-background/70 text-sm hover:text-primary transition-colors">+91 99629 01122</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-background/70 text-sm">
                  info@padminifoundation.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Padmini Social Impact Foundation. All
            rights reserved.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary" /> for a better
            tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;