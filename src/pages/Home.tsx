import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Portfolio from "../components/Portfolio";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { motion } from "motion/react";

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
      <Services />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <Footer />
    </motion.main>
  );
}
