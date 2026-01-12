import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Heart, MapPin, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Across Tamil Nadu",
  },
  {
    icon: Heart,
    value: 50,
    suffix: "+",
    label: "Programs Running",
    description: "Education to Healthcare",
  },
  {
    icon: MapPin,
    value: 25,
    suffix: "+",
    label: "Districts Covered",
    description: "Across India",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "Volunteers",
    description: "Dedicated Team",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creating Lasting Change
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every number represents a life touched, a community strengthened, and
            hope restored.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 text-center shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;