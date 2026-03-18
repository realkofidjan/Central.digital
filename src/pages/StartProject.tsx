import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "motion/react";
import { Send, ArrowRight, Asterisk } from "lucide-react";

export default function StartProject() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen"
    >
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8"
              >
                <Asterisk className="text-bg w-10 h-10 stroke-[3]" />
              </motion.div>
              <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter uppercase mb-8">
                Let's build <span className="text-accent">together</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/50 max-w-lg leading-relaxed mb-12">
                Have a project in mind? We're ready to help you bring it to life. Tell us about your vision.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-display font-bold text-lg mb-4 uppercase tracking-widest text-white/30">Email</h4>
                  <a href="mailto:hello@central.digital" className="text-2xl font-medium hover:text-accent transition-colors">hello@central.digital</a>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-4 uppercase tracking-widest text-white/30">Office</h4>
                  <p className="text-2xl font-medium text-white/50">East Legon, Accra, Ghana</p>
                </div>
              </div>
            </div>

            <div className="glass p-10 md:p-16 rounded-[3rem] border border-white/5">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/30 ml-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-white/30 ml-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/30 ml-2">Service</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                    <option className="bg-bg">Web Development</option>
                    <option className="bg-bg">Mobile Apps</option>
                    <option className="bg-bg">UI/UX Design</option>
                    <option className="bg-bg">Branding</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/30 ml-2">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  />
                </div>

                <button className="w-full bg-white text-bg py-6 rounded-2xl text-xl font-bold hover:bg-accent transition-all flex items-center justify-center gap-3 group">
                  Send Message
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
