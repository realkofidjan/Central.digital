import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and market landscape to define a clear roadmap for success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Our designers craft intuitive, high-fidelity prototypes that bring your vision to life and ensure a seamless user experience.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description: "Our engineers build robust, scalable solutions using the latest technologies, with rigorous testing at every stage.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description: "We handle the full deployment process and provide ongoing support and optimization to ensure long-term success.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Process</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold"
            >
              HOW WE <span className="italic font-light">DELIVER</span> <br />
              EXCELLENCE.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-lg"
          >
            A systematic approach to building high-performance digital products.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="text-8xl font-display font-bold text-white/5 mb-8 absolute -top-12 -left-4 -z-10">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
