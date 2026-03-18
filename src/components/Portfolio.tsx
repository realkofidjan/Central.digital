import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Velo Finance",
    category: "SaaS Product",
    image: "https://picsum.photos/seed/velo/1200/800",
    accent: "bg-indigo-500",
  },
  {
    title: "Skyline Real Estate",
    category: "Website Design",
    image: "https://picsum.photos/seed/skyline/1200/800",
    accent: "bg-emerald-500",
  },
  {
    title: "EcoFlow App",
    category: "Mobile App",
    image: "https://picsum.photos/seed/ecoflow/1200/800",
    accent: "bg-orange-500",
  },
  {
    title: "Lumina Studio",
    category: "Branding",
    image: "https://picsum.photos/seed/lumina/1200/800",
    accent: "bg-purple-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-bg">
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
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Selected Works</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              CRAFTING <span className="italic font-light text-white/50">ICONIC</span> <br />
              DIGITAL EXPERIENCES.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/50 max-w-sm text-lg"
          >
            A curated selection of our most impactful projects across various industries.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white text-bg flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className={`w-2 h-2 rounded-full ${project.accent}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button className="text-lg font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
