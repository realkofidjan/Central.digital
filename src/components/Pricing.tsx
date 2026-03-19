import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Brand Identity",
    price: "1,500",
    description: "Perfect for startups looking for a professional visual foundation.",
    features: [
      "Logo System & Variations",
      "Color Palette & Typography",
      "Brand Guidelines (PDF)",
      "Social Media Assets",
      "2 Rounds of Revisions"
    ],
    accent: "border-blue-500/20"
  },
  {
    name: "Web Experience",
    price: "3,500",
    description: "High-performance websites designed to convert and scale.",
    features: [
      "Custom UI/UX Design",
      "Responsive Development",
      "SEO Optimization",
      "CMS Integration",
      "3 Months Support"
    ],
    accent: "border-accent",
    popular: true
  },
  {
    name: "Product MVP",
    price: "8,000",
    description: "End-to-end development for your SaaS or mobile application.",
    features: [
      "Product Strategy",
      "Full Stack Development",
      "User Authentication",
      "Database Integration",
      "Launch Assistance"
    ],
    accent: "border-purple-500/20"
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Investment</span>
            <div className="w-8 h-px bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tighter"
          >
            Transparent <span className="text-accent">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-xl mx-auto mt-6 text-lg"
          >
            Starting rates for our most common engagement models. Every project is unique, so let's talk about yours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass p-10 rounded-[2.5rem] border ${plan.accent} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-bg text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-white/50 text-lg font-medium">$</span>
                  <span className="text-5xl font-display font-bold">{plan.price}</span>
                  <span className="text-white/30 text-sm font-medium uppercase tracking-widest ml-1">Starting</span>
                </div>
              </div>
              <p className="text-white/50 mb-8 leading-relaxed">
                {plan.description}
              </p>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-white/70">{feature}</span>
                  </div>
                ))}
              </div>
              <Link 
                to="/start-project"
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group transition-all ${
                  plan.popular ? "bg-white text-bg hover:bg-accent" : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
