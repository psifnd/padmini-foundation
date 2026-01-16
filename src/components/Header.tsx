import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import padminiLogo from "@/assets/padmini-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#focus-areas" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo - top left, clickable to home */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img 
              src={padminiLogo} 
              alt="Padmini Social Impact Foundation" 
              className="h-16 sm:h-20 w-auto object-contain"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Donate Button - top right, clearly visible */}
          <div className="hidden lg:flex items-center">
            <Button 
              variant="default" 
              size="default" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md" 
              asChild
            >
              <a href="mailto:psifnd@gmail.com?subject=Donation%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20make%20a%20donation%20to%20Padmini%20Social%20Impact%20Foundation.%0A%0APlease%20share%20the%20details%20for%20contributing.%0A%0AThank%20you.">
                <Heart className="w-4 h-4" />
                Donate
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="default" className="mt-4 gap-2 w-full" asChild>
                <a href="mailto:psifnd@gmail.com?subject=Donation%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20make%20a%20donation%20to%20Padmini%20Social%20Impact%20Foundation.%0A%0APlease%20share%20the%20details%20for%20contributing.%0A%0AThank%20you.">
                  <Heart className="w-4 h-4" />
                  Donate
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;