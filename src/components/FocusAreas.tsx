import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const focusAreas = [
  {
    icon: GraduationCap,
    title: "Education, Digital Literacy & Skill Development",
    color: "bg-blue-500",
    objectives: [
      "Promote formal and informal education for children, youth, and adults in rural and urban areas.",
      "Establish, support, and run schools, learning centers, libraries, reading rooms, and digital classrooms.",
      "Provide digital literacy programs including computer education, internet usage, and technology awareness.",
      "Conduct vocational training, skill-development courses, certification programs, and capacity-building workshops.",
      "Support education through scholarships, study materials, uniforms, and learning aids for deserving students.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare, Sanitation & Disability Support",
    color: "bg-teal-500",
    objectives: [
      "Organize medical camps, health check-ups, blood donation camps, and preventive healthcare programs.",
      "Promote sanitation, hygiene awareness, clean drinking water initiatives, and public health education.",
      "Support persons with disabilities through assistive devices, rehabilitation services, therapy, and inclusion programs.",
      "Promote organ-donation awareness, counselling, registration facilitation, and public education initiatives.",
      "Support maternal health, child health, nutrition programs, and geriatric healthcare.",
    ],
  },
  {
    icon: Users2,
    title: "Women Empowerment & Gender Equality",
    color: "bg-rose-500",
    objectives: [
      "Empower women through livelihood programs, self-employment, entrepreneurship, and micro-enterprise support.",
      "Conduct training in financial literacy, digital skills, leadership, and entrepreneurship for women.",
      "Promote women's safety through awareness programs, legal literacy, and support mechanisms.",
      "Support self-help groups (SHGs), women collectives, and cooperative initiatives.",
      "Work towards gender equality, dignity, and social inclusion.",
    ],
  },
  {
    icon: Trophy,
    title: "Youth Development, Sports & Career Guidance",
    color: "bg-amber-500",
    objectives: [
      "Support youth through sports promotion, physical fitness programs, and talent development.",
      "Provide career guidance, counselling, mentorship, and competitive exam preparation support.",
      "Conduct personality development, leadership training, and soft-skills programs.",
      "Facilitate internships, apprenticeships, and employability programs for youth.",
      "Encourage innovation, creativity, and entrepreneurship among young individuals.",
    ],
  },
  {
    icon: Leaf,
    title: "Environmental Protection & Sustainability",
    color: "bg-green-500",
    objectives: [
      "Implement tree plantation, afforestation, and biodiversity conservation programs.",
      "Promote waste management, recycling, plastic-free initiatives, and cleanliness drives.",
      "Support water conservation, rainwater harvesting, and watershed management programs.",
      "Create environmental awareness on climate change, renewable energy, and sustainable living.",
      "Promote eco-friendly practices in communities and institutions.",
    ],
  },
  {
    icon: Shield,
    title: "Welfare of Marginalized & Vulnerable Groups",
    color: "bg-purple-500",
    objectives: [
      "Assist senior citizens through care, support services, and welfare programs.",
      "Support destitute women, orphaned children, street children, and economically weaker sections.",
      "Provide food, shelter, clothing, healthcare, and basic necessities to the needy.",
      "Promote social inclusion of disadvantaged and marginalized communities.",
      "Support rehabilitation and reintegration initiatives.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disaster Relief & Emergency Assistance",
    color: "bg-red-500",
    objectives: [
      "Provide relief during natural or man-made disasters including floods, cyclones, earthquakes, pandemics, and fires.",
      "Distribute food, medicines, clothing, shelter materials, and essential supplies during emergencies.",
      "Support rehabilitation, reconstruction, and recovery programs post-disaster.",
      "Collaborate with authorities and agencies during emergency response operations.",
    ],
  },
  {
    icon: Building2,
    title: "Rural & Community Development",
    color: "bg-orange-500",
    objectives: [
      "Promote rural development through infrastructure, sanitation, drinking water, and housing support.",
      "Support community welfare projects including roads, schools, healthcare centers, and public facilities.",
      "Promote livelihood enhancement and income-generation activities in rural areas.",
      "Encourage sustainable agriculture, animal husbandry, and allied rural activities.",
    ],
  },
  {
    icon: Handshake,
    title: "Collaboration & Partnerships",
    color: "bg-indigo-500",
    objectives: [
      "Collaborate with Central and State Governments, local bodies, NGOs, trusts, and institutions.",
      "Partner with CSR organizations, corporates, public sector undertakings, and foundations.",
      "Work with national and international agencies for social development programs.",
      "Implement joint projects, pilot initiatives, and large-scale welfare programs.",
    ],
  },
  {
    icon: Heart,
    title: "Fundraising, Donations & CSR Support",
    color: "bg-pink-500",
    objectives: [
      "Receive and utilize donations, grants, gifts, subscriptions, CSR contributions, and endowments.",
      "Accept foreign contributions only in compliance with the Foreign Contribution (Regulation) Act, 2010.",
      "Ensure transparent and lawful utilization of all funds solely for charitable purposes.",
      "Maintain proper records, disclosures, and reporting as per law.",
    ],
  },
  {
    icon: Brain,
    title: "Mental Health & Psychological Well-Being",
    color: "bg-cyan-500",
    objectives: [
      "Promote mental health awareness, emotional well-being, and stress management programs.",
      "Provide counselling services, support groups, and referral assistance.",
      "Conduct workshops on mental health, suicide prevention, and emotional resilience.",
      "Address mental health issues among children, youth, women, and senior citizens.",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment, Livelihood & Digital Inclusion",
    color: "bg-slate-500",
    objectives: [
      "Support skill development and job-oriented training for unemployed and underemployed individuals.",
      "Facilitate employment linkages, placements, and self-employment opportunities.",
      "Promote digital inclusion through technology access and training.",
      "Encourage entrepreneurship, start-ups, and small business development.",
    ],
  },
  {
    icon: Sparkles,
    title: "Other Charitable & Social Activities",
    color: "bg-violet-500",
    objectives: [
      "Undertake any other charitable, welfare, or community-development activities.",
      "Carry out activities permitted under Section 2(15) of the Income Tax Act, 1961.",
      "Implement programs covered under CSR Schedule VII of the Companies Act, 2013.",
      "Undertake lawful activities permitted under FCRA regulations and other applicable laws.",
    ],
  },
];

const FocusAreaCard = ({
  area,
  index,
  isInView,
}: {
  area: (typeof focusAreas)[0];
  index: number;
  isInView: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 rounded-xl ${area.color} flex items-center justify-center flex-shrink-0`}
          >
            <area.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">
              {area.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {area.objectives.length} objectives
            </p>
          </div>
        </div>

        <div className={`space-y-2 ${isExpanded ? "block" : "hidden"}`}>
          {area.objectives.map((objective, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {objective}
              </p>
            </div>
          ))}
        </div>

        {!isExpanded && (
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {area.objectives[0]}
          </p>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-primary text-sm font-medium hover:underline"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              View all objectives
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

const FocusAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="focus-areas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Objectives
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            13 Pillars of Social Impact
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We work across multiple sectors to address the diverse needs of
            communities, creating holistic and sustainable change through our
            comprehensive focus areas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <FocusAreaCard
              key={area.title}
              area={area}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
