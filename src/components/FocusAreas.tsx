import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

// Import focus area images
import focusEducation from "@/assets/focus-education.jpg";
import focusHealthcare from "@/assets/focus-healthcare.jpg";
import focusWomen from "@/assets/focus-women.jpg";
import focusYouthSports from "@/assets/focus-youth-sports.jpg";
import focusSustainable from "@/assets/focus-sustainable.jpg";
import focusMarginalized from "@/assets/focus-marginalized.jpg";
import focusDisaster from "@/assets/focus-disaster.jpg";
import focusRural from "@/assets/focus-rural.jpg";
import focusPartnerships from "@/assets/focus-partnerships.jpg";
import focusFundraising from "@/assets/focus-fundraising.jpg";
import focusMentalHealth from "@/assets/focus-mental-health.jpg";
import focusEmployment from "@/assets/focus-employment.jpg";
import focusCharity from "@/assets/focus-charity.jpg";

const focusImages = [
  { src: focusEducation, title: "Education & Digital Literacy", description: "Empowering minds through quality education" },
  { src: focusHealthcare, title: "Healthcare & Sanitation", description: "Promoting community health and wellness" },
  { src: focusWomen, title: "Women Empowerment", description: "Building self-reliant women leaders" },
  { src: focusYouthSports, title: "Youth & Sports", description: "Nurturing young talent through sports and mentorship" },
  { src: focusSustainable, title: "Environment & Sustainability", description: "Creating a greener future for all" },
  { src: focusMarginalized, title: "Marginalized Communities", description: "Supporting vulnerable groups with care and dignity" },
  { src: focusDisaster, title: "Disaster Relief", description: "Rapid response and rehabilitation during emergencies" },
  { src: focusRural, title: "Rural Development", description: "Transforming villages through infrastructure" },
  { src: focusPartnerships, title: "Partnerships", description: "Collaborating for greater collective impact" },
  { src: focusFundraising, title: "Fundraising & CSR", description: "Mobilizing resources with full transparency" },
  { src: focusMentalHealth, title: "Mental Health", description: "Promoting emotional wellness and support" },
  { src: focusEmployment, title: "Employment & Livelihoods", description: "Creating opportunities through skill training" },
  { src: focusCharity, title: "Other Charitable Activities", description: "Diverse welfare programs for social good" },
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % focusImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="focus-areas" className="py-24 bg-gradient-to-b from-cream to-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-elevated"
        >
          <div className="relative aspect-[16/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={focusImages[currentImageIndex].src}
                  alt={focusImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay with text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-2xl md:text-3xl font-bold mb-2"
                  >
                    {focusImages[currentImageIndex].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/90 text-lg"
                  >
                    {focusImages[currentImageIndex].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-4 right-8 flex gap-2 z-10">
              {focusImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
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
