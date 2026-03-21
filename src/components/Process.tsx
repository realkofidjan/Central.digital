import { motion } from "motion/react";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Process() {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("process.phase_01"),
      icon: Search,
      description: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success.",
    },
    {
      number: "02",
      title: t("process.phase_02"),
      icon: PenTool,
      description: "Our designers craft intuitive, high-fidelity prototypes that bring your vision to life and ensure a seamless user experience.",
    },
    {
      number: "03",
      title: t("process.phase_03"),
      icon: Code,
      description: "Our engineers build robust, scalable solutions using the latest technologies, with rigorous testing at every stage.",
    },
    {
      number: "04",
      title: t("process.phase_04"),
      icon: Rocket,
      description: "We handle the full deployment process and provide ongoing support and optimization to ensure long-term success.",
    },
  ];

  return (
    <section id="process" className="py-24 border-t border-line bg-bg overflow-hidden">
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
              <span className="mono-label text-accent opacity-100 font-bold">{t("process.label")}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter"
            >
              SYSTEM <span className="italic-serif font-light opacity-30">DEVELOPMENT</span> <br />
              LIFE CYCLE.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/50 text-xl leading-tight"
            >
              {t("process.title")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-line">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-12 border-b border-line ${index < 3 ? "lg:border-r" : ""} hover:bg-accent transition-colors duration-300`}
            >
              <div className="flex items-center justify-between mb-12">
                <span className="mono-label group-hover:text-bg">Phase_0{index + 1}</span>
                <div className="w-12 h-12 border border-line flex items-center justify-center group-hover:bg-bg group-hover:border-bg transition-all">
                  <step.icon className="w-6 h-6 group-hover:text-accent" />
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-6 group-hover:text-bg transition-colors">
                {step.title}
              </h3>
              
              <p className="text-ink/50 group-hover:text-bg/70 transition-colors leading-relaxed uppercase text-sm font-medium">
                {step.description}
              </p>

              <div className="mt-12 pt-8 border-t border-line group-hover:border-bg/20">
                <ul className="space-y-2">
                  {['Requirement Analysis', 'Architecture Design', 'System Integration'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs mono-label group-hover:text-bg/50">
                      <div className="w-1 h-1 bg-accent group-hover:bg-bg" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
