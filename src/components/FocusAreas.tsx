import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  HeartPulse,
  Users2,
  Leaf,
  Trophy,
  Shield,
  AlertTriangle,
  Building2,
  Handshake,
  Heart,
  Brain,
  Briefcase,
  Sparkles,
} from "lucide-react";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education & Digital Literacy",
    description: "Empowering minds through quality education, digital skills, and vocational training for all ages.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Sanitation",
    description: "Promoting community health through medical camps, hygiene awareness, disability support, and organ-donation awareness with counselling and registration facilitation.",
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: Users2,
    title: "Women Empowerment",
    description: "Building self-reliant women through livelihood programs, entrepreneurship, and leadership.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Trophy,
    title: "Youth & Sports",
    description: "Nurturing young talent through sports, career guidance, mentorship, and skill programs.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Leaf,
    title: "Environment & Sustainability",
    description: "Creating a greener future through conservation, waste management, and eco-awareness.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Marginalized Communities",
    description: "Supporting senior citizens, orphans, and vulnerable groups with care, shelter, and dignity.",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: AlertTriangle,
    title: "Disaster Relief",
    description: "Providing rapid response and rehabilitation during natural and man-made emergencies.",
    gradient: "from-red-500 to-rose-600",
  },
  {
    icon: Building2,
    title: "Rural Development",
    description: "Transforming villages through infrastructure, sanitation, and sustainable agriculture.",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Collaborating with governments, NGOs, and corporates for greater collective impact.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Heart,
    title: "Fundraising & CSR",
    description: "Mobilizing resources through donations, grants, and CSR with full transparency.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Brain,
    title: "Mental Health",
    description: "Promoting emotional wellness through counselling, awareness, and community support.",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Employment & Livelihoods",
    description: "Creating opportunities through skill training, job placements, and entrepreneurship.",
    gradient: "from-slate-500 to-gray-600",
  },
  {
    icon: Sparkles,
    title: "Other Charitable Activities",
    description: "Diverse welfare programs aligned with legal and regulatory frameworks for social good.",
    gradient: "from-violet-500 to-purple-600",
  },
];

const FocusAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="focus-areas" className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral font-semibold text-sm uppercase tracking-wider">
            Our Pillars of Impact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-3 mb-6">
            13 Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs addressing the most pressing needs of our communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif font-bold text-foreground mb-2 group-hover:text-coral transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
