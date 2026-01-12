import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, HeartPulse, Users2, Leaf } from "lucide-react";
import educationImg from "@/assets/focus-education.jpg";
import healthcareImg from "@/assets/focus-healthcare.jpg";
import womenImg from "@/assets/focus-women.jpg";
import environmentImg from "@/assets/focus-environment.jpg";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education & Digital Literacy",
    description:
      "Promoting formal and informal education through schools, learning centres, digital classrooms, and skill development programs.",
    image: educationImg,
    stats: "500+ students supported",
    color: "bg-blue-500",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Disability Support",
    description:
      "Organizing medical camps, health check-ups, and providing assistive devices and rehabilitation services for persons with disabilities.",
    image: healthcareImg,
    stats: "20+ health camps conducted",
    color: "bg-teal-500",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description:
      "Empowering women through livelihood programs, self-help groups, entrepreneurship training, and financial literacy initiatives.",
    image: womenImg,
    stats: "30+ SHGs supported",
    color: "bg-orange-500",
  },
  {
    icon: Leaf,
    title: "Environment & Sustainability",
    description:
      "Implementing tree plantation, waste management, water conservation, and creating environmental awareness programs.",
    image: environmentImg,
    stats: "1000+ trees planted",
    color: "bg-green-500",
  },
];

const FocusAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="focus-areas" className="py-20 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Focus Areas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where We Create Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work across multiple sectors to address the diverse needs of
            communities and create holistic, sustainable change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-card/90 text-foreground text-sm font-medium">
                    {area.stats}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${area.color} flex items-center justify-center`}
                  >
                    <area.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;