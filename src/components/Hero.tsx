import { motion } from "motion/react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const getAcceptingStatus = () => {
    const now = new Date();
    const month = now.getMonth(); // 0-11
    const day = now.getDate();
    const year = now.getFullYear();

    // Closed from Dec 15 to Jan 15
    const isClosed = (month === 11 && day >= 15) || (month === 0 && day < 15);

    if (isClosed) {
      return "Bookings closed — Reopening Jan 15";
    }

    // Calculate current quarter
    const quarter = Math.floor(month / 3) + 1;
    return `Now accepting projects for Q${quarter} ${year}`;
  };

  const titleLines = [
    "ACCRA'S",
    "DIGITAL",
    "REVOLUTION."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-ink/60">
            {getAcceptingStatus()}
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="perspective-1000"
        >
          {titleLines.map((line, i) => (
            <motion.h1
              key={i}
              variants={lineVariants}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter uppercase ${
                i === 1 ? "italic font-light text-ink/20" : "text-gradient"
              }`}
            >
              {line}
            </motion.h1>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-ink/50 mt-12 mb-12"
        >
          Central is a boutique digital agency based in Ghana, crafting high-performance websites, 
          SaaS products, and mobile experiences for the next generation of tech leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <Link to="/start-project" className="bg-ink text-bg px-8 py-4 rounded-2xl text-lg font-bold hover:bg-accent hover:text-white transition-colors flex items-center gap-2 group">
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <button className="flex items-center gap-3 text-lg font-medium hover:text-accent transition-colors group">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-5 h-5 fill-current" />
            </div>
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 2, 
          duration: 1,
          y: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center glass">
          <ChevronDown className="w-6 h-6 text-accent" />
        </div>
      </motion.div>
    </section>
  );
}
