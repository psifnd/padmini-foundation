import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: Heart,
    title: "Donate",
    description: "Your contribution directly impacts lives. Every rupee counts.",
    buttonText: "Give Now",
    variant: "default" as const,
    href: "mailto:psifnd@gmail.com?subject=Donation%20Inquiry&body=Hello%2C%0A%0AI%20would%20like%20to%20make%20a%20donation%20to%20Padmini%20Social%20Impact%20Foundation.%0A%0APlease%20share%20the%20details%20for%20contributing.%0A%0AThank%20you.",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Join our team of dedicated volunteers making a difference.",
    buttonText: "Join Us",
    variant: "default" as const,
    href: "mailto:psifnd@gmail.com?subject=Volunteer%20Registration&body=Hello%2C%0A%0AI%20am%20interested%20in%20volunteering%20with%20Padmini%20Social%20Impact%20Foundation.%0A%0AName%3A%20%0APhone%3A%20%0ACity%3A%20%0AArea%20of%20Interest%3A%20%0A%0AThank%20you.",
  },
];

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
            society. There are many ways you can contribute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-navy-foreground/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-navy-foreground/20 hover:bg-navy-foreground/15 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <action.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">
                {action.title}
              </h3>
              <p className="text-navy-foreground/70 mb-6">{action.description}</p>
              <Button
                variant={action.variant}
                size="lg"
                asChild
              >
                <a href={action.href}>{action.buttonText}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;