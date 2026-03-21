import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

export default function Services() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayIndex, setDisplayIndex] = useState("01");

  const services = [
    {
      id: "01",
      title: t("services.brand"),
      description: "Visual identities that resonate globally while staying rooted in Ghanaian heritage. From logo systems to full brand guidelines.",
    },
    {
      id: "02",
      title: t("services.production"),
      description: "Cinematic storytelling that captures the essence of West African innovation. High-end production for social, web, and TV.",
    },
    {
      id: "03",
      title: t("services.web"),
      description: "High-performance, SEO-optimized websites built for both local connectivity and global speed using modern tech stacks.",
    },
    {
      id: "04",
      title: t("services.experience"),
      description: "User-centric interfaces that convert. We focus on accessibility, usability, and aesthetic excellence for diverse markets.",
    },
    {
      id: "05",
      title: t("services.fintech"),
      description: "Native and cross-platform mobile apps optimized for the West African digital economy and mobile money ecosystems.",
    },
    {
      id: "06",
      title: t("services.saas"),
      description: "End-to-end product strategy and development for scalable platforms. From Accra to the world, we build for scale.",
    },
  ];
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const activeIndex = useTransform(scrollYProgress, [0, 1], [1, services.length]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const activeIndexDisplay = useTransform(activeIndex, (v) => Math.round(v).toString().padStart(2, '0'));

  useMotionValueEvent(activeIndexDisplay, "change", (latest) => {
    setDisplayIndex(latest);
  });

  return (
    <section id="services" ref={containerRef} className="relative bg-bg border-t border-line">
      {/* Sticky Header Section */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Scroll Indicator (Reference Image Style) */}
          <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative">
            <div className="w-64 h-64 rounded-full border border-line/30 flex items-center justify-center relative">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="127"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-accent"
                  style={{
                    pathLength: scrollYProgress,
                    strokeDasharray: "1 0"
                  }}
                />
              </svg>
              <div className="flex flex-col items-center gap-2">
                <span className="mono-label text-accent">SCROLL</span>
                <div className="flex items-center gap-2">
                  <span className="mono-label">[{displayIndex}]</span>
                  <div className="w-8 h-px bg-line" />
                  <span className="mono-label opacity-30">/[06]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Active Content Reveal (Vertical List Style) */}
          <div className="lg:col-span-8 relative h-[600px] flex items-center">
            <div className="w-full">
              {services.map((service, index) => {
                const step = 1 / services.length;
                const center = (index + 0.5) * step;
                
                // Clamp ranges to [0, 1] to avoid Web Animations API errors
                const mainRange = [
                  Math.max(0, center - step),
                  center,
                  Math.min(1, center + step)
                ];

                const descRange = [
                  Math.max(0, center - step * 0.2),
                  center,
                  Math.min(1, center + step * 0.2)
                ];
                
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(
                  scrollYProgress,
                  mainRange,
                  [0.1, 1, 0.1]
                );
                
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scale = useTransform(
                  scrollYProgress,
                  mainRange,
                  [0.5, 1, 0.5]
                );

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const yOffset = useTransform(
                  scrollYProgress,
                  mainRange,
                  [100, 0, -100]
                );

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const descOpacity = useTransform(
                  scrollYProgress,
                  descRange,
                  [0, 1, 0]
                );

                return (
                  <motion.div
                    key={service.id}
                    style={{ 
                      opacity, 
                      scale,
                      y: yOffset,
                      position: index === 0 ? "relative" : "absolute",
                      top: index === 0 ? 0 : "50%",
                      marginTop: index === 0 ? 0 : "-1em",
                      width: "100%"
                    }}
                    className="flex flex-col justify-center origin-left"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <span className="mono-label text-accent">[{service.id}]</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-none">
                      {service.title}
                    </h2>
                    <motion.div style={{ opacity: descOpacity }} className="mt-8 overflow-hidden">
                      <p className="text-lg md:text-xl text-ink/50 max-w-xl uppercase font-medium leading-tight">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom List (Reference Image Style) */}
        <div className="absolute bottom-12 left-0 w-full border-t border-line/10">
          <div className="max-w-[1800px] mx-auto px-6 py-8 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="mono-label mb-2">GUIDING PRINCIPLES</span>
              <h3 className="text-4xl font-display font-bold uppercase tracking-tighter">
                OUR DESIGNATION
              </h3>
            </div>
            <div className="hidden md:flex gap-12">
              {services.slice(0, 3).map((s) => (
                <div key={s.id} className="flex items-center gap-4 opacity-30">
                  <span className="mono-label">[{s.id}]</span>
                  <span className="text-sm font-bold uppercase">{s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-[400vh]" />
    </section>
  );
}
