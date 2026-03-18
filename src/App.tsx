import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ChatBotIcon from "./components/ChatBotIcon";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
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
        <Testimonials />
        <Footer />
        <ChatBotIcon />
      </motion.main>
    </AnimatePresence>
  );
}
