import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart } from "lucide-react";
import DonateDialog from "@/components/DonateDialog";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 gradient-navy text-navy-foreground">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-navy-foreground/80 max-w-2xl mx-auto">
            Join us in our mission to create a more equitable and compassionate
            society. Your contribution directly impacts lives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg mx-auto bg-navy-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-navy-foreground/20 hover:bg-navy-foreground/15 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-serif text-2xl font-semibold mb-3">
            Donate
          </h3>
          <p className="text-navy-foreground/70 mb-6">
            Your contribution directly impacts lives. Every rupee counts.
          </p>
          <DonateDialog variant="cta" />
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;