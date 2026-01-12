import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Community coming together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              Empowering Communities Across India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-foreground leading-tight mb-6"
          >
            Building a Future Where{" "}
            <span className="text-primary">Every Life</span> Has{" "}
            <span className="text-gold">Dignity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-navy-foreground/80 mb-8 leading-relaxed"
          >
            Padmini Social Impact Foundation works across Tamil Nadu and India
            to uplift communities through education, healthcare, women
            empowerment, and sustainable development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="gap-2 text-base px-8 py-6">
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 text-base px-8 py-6 bg-transparent border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-navy-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-navy-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;