import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();

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

  return (
    <section id="pricing" className="py-24 border-t border-line bg-bg">
      <div className="max-w-[1800px] mx-auto">
        <div className="px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="mono-label text-accent opacity-100 font-bold">{t("pricing.label")}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter"
            >
              TRANSPARENT <span className="italic-serif font-light opacity-30">PRICING</span> <br />
              FOR ELITE RESULTS.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/50 text-xl leading-tight"
            >
              {t("pricing.title")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-12 border-b border-line ${index < 2 ? "md:border-r" : ""} hover:bg-accent transition-colors duration-300`}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="mono-label group-hover:text-bg">Tier_0{index + 1}</span>
                {plan.popular && (
                  <span className="bg-ink text-bg px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Recommended</span>
                )}
              </div>
              
              <h3 className="text-4xl font-display font-bold mb-2 group-hover:text-bg transition-colors">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold group-hover:text-bg">$</span>
                <span className="text-6xl font-display font-bold group-hover:text-bg">{plan.price}</span>
                <span className="text-ink/50 group-hover:text-bg/50 font-medium">/project</span>
              </div>
              
              <p className="text-ink/50 group-hover:text-bg/70 transition-colors mb-12 uppercase text-sm font-medium">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium group-hover:text-bg transition-colors">
                    <Check className="w-5 h-5 text-accent group-hover:text-bg" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                to="/start-project"
                className={`w-full py-6 text-lg font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${
                  plan.popular 
                  ? "bg-ink text-bg group-hover:bg-bg group-hover:text-accent" 
                  : "border border-ink group-hover:border-bg group-hover:text-bg"
                }`}
              >
                {t("pricing.initialize")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
