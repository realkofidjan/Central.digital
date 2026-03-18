import { motion } from "motion/react";
import { 
  Palette, 
  Camera, 
  Globe, 
  Layout, 
  Smartphone, 
  Layers 
} from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description: "Visual identities that resonate. From logo systems to full brand guidelines, we create the visual language of your brand.",
    icon: Palette,
    accent: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Photography & Videography",
    description: "Cinematic storytelling that captures the essence of your product. High-end production for social, web, and TV.",
    icon: Camera,
    accent: "bg-red-500/20 text-red-400",
  },
  {
    title: "Website Development",
    description: "High-performance, SEO-optimized websites built with modern stacks like React, Next.js, and Tailwind CSS.",
    icon: Globe,
    accent: "bg-green-500/20 text-green-400",
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces that convert. We focus on accessibility, usability, and aesthetic excellence.",
    icon: Layout,
    accent: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps that provide seamless experiences on iOS and Android.",
    icon: Smartphone,
    accent: "bg-orange-500/20 text-orange-400",
  },
  {
    title: "SaaS Product Development",
    description: "End-to-end product strategy and development for scalable SaaS platforms. From MVP to enterprise scale.",
    icon: Layers,
    accent: "bg-indigo-500/20 text-indigo-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-bg">
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
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              WE SOLVE <span className="italic font-light">COMPLEX</span> <br />
              DIGITAL CHALLENGES.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-lg"
          >
            A full-service digital agency delivering high-end solutions across the entire digital landscape.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.5)",
                borderColor: "rgba(255, 255, 255, 0.1)"
              }}
              className="group p-8 rounded-3xl glass transition-colors duration-500 cursor-pointer border border-white/5"
            >
              <motion.div 
                whileHover={{ rotate: 15, y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.accent}`}
              >
                <service.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
