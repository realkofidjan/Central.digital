import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const getAcceptingStatus = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    const year = now.getFullYear();
    const isClosed = (month === 11 && day >= 15) || (month === 0 && day < 15);
    if (isClosed) return "SYSTEM_OFFLINE // REOPENING_JAN_15";
    const quarter = Math.floor(month / 3) + 1;
    return `${t("hero.status").split("//")[0]} // Q${quarter}_${year}_CAPACITY_AVAILABLE`;
  };

  const titleLines = [
    t("hero.title_1"),
    t("hero.title_2"),
    t("hero.title_3")
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 overflow-hidden grid-bg">
      <div className="scanline" />
      
      <div className="max-w-[1800px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Title */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-ink" />
              <span className="mono-label text-ink opacity-100 font-bold">
                {getAcceptingStatus()}
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {titleLines.map((line, i) => (
                <motion.div key={i} variants={lineVariants} className="overflow-hidden">
                  <h1 className={`text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-display font-bold leading-[0.85] tracking-tighter uppercase ${
                    i === 1 ? "italic-serif font-light opacity-30" : "text-ink"
                  }`}>
                    {line}
                  </h1>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Description & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="border-l-4 border-accent pl-8 space-y-8"
            >
              <p className="text-xl md:text-2xl text-ink/70 font-medium leading-tight">
                <span className="text-ink font-bold">CENTRAL_STUDIO</span> {t("hero.subtitle")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/start-project" className="bg-ink text-bg px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-all flex items-center justify-between group">
                  {t("nav.initialize")}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border border-ink px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-ink hover:text-bg transition-all flex items-center justify-between group">
                  Showreel
                  <Play className="w-5 h-5 fill-current" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-line">
                <div>
                  <span className="mono-label">Location</span>
                  <p className="font-bold uppercase">Accra // GH</p>
                </div>
                <div>
                  <span className="mono-label">Est.</span>
                  <p className="font-bold uppercase">MMXXIV</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-6 flex items-center gap-4"
      >
        <div className="w-10 h-10 border border-line flex items-center justify-center animate-bounce">
          <ChevronDown className="w-5 h-5 text-accent" />
        </div>
        <span className="mono-label">Scroll_To_Explore</span>
      </motion.div>
    </section>
  );
}
