import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const revealVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 0.9, 
    rotateX: -15,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a smoother, more futuristic feel
      staggerChildren: 0.2
    }
  }
};

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-150px" }}
    variants={revealVariants}
    className="perspective-1000"
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <Navbar />
      <Hero />
      
      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <Portfolio />
      </SectionWrapper>

      <SectionWrapper>
        <Process />
      </SectionWrapper>

      <SectionWrapper>
        <Pricing />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <Footer />
      </SectionWrapper>
    </motion.main>
  );
}
