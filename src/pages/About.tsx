import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import { Asterisk, Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8"
            >
              <Asterisk className="text-bg w-10 h-10 stroke-[3]" />
            </motion.div>
            <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase mb-8">
              We are <span className="text-accent">Central</span>
            </h1>
            <p className="text-xl md:text-2xl text-ink/50 max-w-3xl leading-relaxed">
              Based in Accra, we are a collective of designers, engineers, and strategists dedicated to building high-performance digital products that blend West African creativity with global technical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Local Soul",
                description: "We are deeply rooted in the Ghanaian tech ecosystem, drawing from the rich cultural tapestry of Accra."
              },
              {
                icon: <Target className="w-8 h-8 text-accent" />,
                title: "Global Reach",
                description: "Our solutions are built to international standards, serving clients from London to New York and beyond."
              },
              {
                icon: <Rocket className="w-8 h-8 text-accent" />,
                title: "Future Ready",
                description: "We are at the forefront of the African digital renaissance, building the tools for tomorrow's leaders."
              }
            ].map((item, index) => (
              <div key={index} className="glass p-10 rounded-3xl border border-ink/5">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-lg text-ink/50 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glass p-12 md:p-24 rounded-[3rem] border border-ink/5 text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter mb-8">
              Based in the heart of <span className="text-accent">Accra</span>
            </h2>
            <p className="text-xl text-ink/50 max-w-2xl mx-auto mb-12">
              We draw inspiration from the vibrant energy of Ghana to create digital experiences that resonate globally.
            </p>
            <div className="aspect-video w-full rounded-3xl overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?auto=format&fit=crop&q=80&w=2000" 
                alt="Accra Skyline" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
