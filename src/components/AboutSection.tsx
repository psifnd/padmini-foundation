import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Every action is guided by our commitment to social upliftment.",
  },
  {
    icon: Eye,
    title: "Transparent",
    description: "Complete accountability in how we utilize every contribution.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Empowering communities to lead their own transformation.",
  },
  {
    icon: Shield,
    title: "Sustainable Impact",
    description: "Creating lasting change that endures for generations.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 gradient-warm">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transforming Lives Through Compassion & Action
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Padmini Social Impact Foundation is a Public Charitable Trust
              established in December 2025, headquartered in Tirumagalam, Madurai.
              We are committed to uplifting communities across Tamil Nadu and India
              through comprehensive development programs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From education and healthcare to women empowerment and environmental
              sustainability, our holistic approach addresses the root causes of
              poverty and inequality, creating pathways for dignified living.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Our Vision
                </h4>
                <p className="text-sm text-muted-foreground">
                  A world where every individual has access to opportunities for a
                  dignified life.
                </p>
              </div>
              <div className="bg-card rounded-xl p-4 shadow-soft">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-1">
                  Our Mission
                </h4>
                <p className="text-sm text-muted-foreground">
                  Empowering communities through education, healthcare, and
                  sustainable development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;