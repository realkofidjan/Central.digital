import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.brand"),
      description: "Visual identities that resonate globally while staying rooted in Ghanaian heritage. From logo systems to full brand guidelines.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      accent: "bg-blue-500/20 text-blue-400",
    },
    {
      title: t("services.production"),
      description: "Cinematic storytelling that captures the essence of West African innovation. High-end production for social, web, and TV.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      accent: "bg-red-500/20 text-red-400",
    },
    {
      title: t("services.web"),
      description: "High-performance, SEO-optimized websites built for both local connectivity and global speed using modern tech stacks.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      accent: "bg-green-500/20 text-green-400",
    },
    {
      title: t("services.experience"),
      description: "User-centric interfaces that convert. We focus on accessibility, usability, and aesthetic excellence for diverse markets.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800&auto=format&fit=crop",
      accent: "bg-purple-500/20 text-purple-400",
    },
    {
      title: t("services.fintech"),
      description: "Native and cross-platform mobile apps optimized for the West African digital economy and mobile money ecosystems.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      accent: "bg-orange-500/20 text-orange-400",
    },
    {
      title: t("services.saas"),
      description: "End-to-end product strategy and development for scalable platforms. From Accra to the world, we build for scale.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      accent: "bg-indigo-500/20 text-indigo-400",
    },
  ];

  return (
    <section id="services" className="py-24 border-t border-line bg-bg">
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
              <span className="mono-label text-accent opacity-100 font-bold">{t("services.matrix")}</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter"
            >
              {t("services.title_1")} <span className="italic-serif font-light opacity-30">{t("services.title_2")}</span> <br />
              {t("services.title_3")}
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/50 text-xl leading-tight"
            >
              {t("services.subtitle")}
            </motion.p>
          </div>
        </div>

        <div className="border-t border-line">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 border-b border-line hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <div className="lg:col-span-1 border-r border-line p-8 flex items-center justify-center">
                <span className="mono-label group-hover:text-bg">0{index + 1}</span>
              </div>
              <div className="lg:col-span-2 border-r border-line overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="lg:col-span-6 border-r border-line p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold group-hover:text-bg transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="lg:col-span-3 p-8 flex items-center">
                <p className="text-sm font-medium text-ink/50 group-hover:text-bg/70 transition-colors uppercase tracking-tight">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
