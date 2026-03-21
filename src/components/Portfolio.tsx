import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Kente Heritage",
      category: "E-commerce Platform",
      image: "https://picsum.photos/seed/kente/1200/800",
      accent: "bg-yellow-500",
    },
    {
      title: "Accra Living",
      category: "Real Estate Portal",
      image: "https://picsum.photos/seed/accra/1200/800",
      accent: "bg-emerald-500",
    },
    {
      title: "Oware Digital",
      category: "Mobile Game",
      image: "https://picsum.photos/seed/oware/1200/800",
      accent: "bg-orange-500",
    },
    {
      title: "Ghana Tech Summit",
      category: "Event Experience",
      image: "https://picsum.photos/seed/summit/1200/800",
      accent: "bg-purple-500",
    },
  ];

  return (
    <section id="portfolio" className="py-24 border-t border-line bg-bg">
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
              <span className="mono-label text-accent opacity-100 font-bold">{t("portfolio.label")}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter"
            >
              SELECTED <span className="italic-serif font-light opacity-30">WORKS</span> <br />
              MMXXIV // MMXXV
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/50 text-xl leading-tight"
            >
              {t("portfolio.title")}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-line">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative border-b border-line ${index % 2 === 0 ? "md:border-r" : ""} overflow-hidden cursor-pointer`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col justify-between bg-bg group-hover:bg-accent transition-colors duration-300">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="mono-label group-hover:text-bg">Category</span>
                    <span className="font-bold uppercase group-hover:text-bg">{project.category}</span>
                  </div>
                  <div className="w-12 h-12 border border-line flex items-center justify-center group-hover:bg-bg group-hover:border-bg transition-all">
                    <ArrowUpRight className="w-6 h-6 group-hover:text-accent" />
                  </div>
                </div>
                
                <div className="flex items-end justify-between">
                  <h3 className="text-4xl font-display font-bold group-hover:text-bg transition-colors">
                    {project.title}
                  </h3>
                  <span className="mono-label group-hover:text-bg">0{index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-12 border-b border-line flex justify-center">
          <button className="bg-ink text-bg px-12 py-6 text-xl font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-all flex items-center gap-4 group">
            {t("portfolio.view")}
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
