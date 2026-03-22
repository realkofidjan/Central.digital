import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Send, ArrowRight, Asterisk, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

const services = [
  "Web Engineering",
  "Fintech & Mobile Money",
  "Experience Design",
  "Brand Strategy",
  "Digital Production",
  "SaaS & Enterprise"
];

export default function StartProject() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("service", selectedService);
    
    // Convert FormData to a plain object for JSON submission
    const data = Object.fromEntries(formData.entries());

    try {
      // Use the user-provided Formspree ID from environment or fallback
      let formspreeId = (import.meta as any).env.VITE_FORMSPREE_ID || 
                        "mpqyejvr";
      
      // If the ID is a full URL, extract just the ID part
      if (formspreeId.includes('formspree.io/f/')) {
        formspreeId = formspreeId.split('formspree.io/f/').pop() || formspreeId;
      }
      
      // Remove any leading/trailing slashes or whitespace
      formspreeId = formspreeId.replace(/^\/+|\/+$/g, '').trim();
      
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: 'cors'
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        console.error("This might be due to an ad-blocker or network issue. Please check if formspree.io is accessible.");
      }
      setStatus("error");
    }
  };

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
              <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tighter uppercase mb-8">
                Let's build <span className="text-accent">together</span>
              </h1>
              <p className="text-xl md:text-2xl text-ink/50 max-w-lg leading-relaxed mb-12">
                Whether you're a local startup or an international enterprise, we're ready to help you scale. Tell us about your vision.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-display font-bold text-lg mb-4 uppercase tracking-widest text-ink/30">Email</h4>
                  <a href="mailto:hello@central.digital" className="text-2xl font-medium hover:text-accent transition-colors underline underline-offset-8 decoration-ink/10">hello@central.digital</a>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-4 uppercase tracking-widest text-ink/30">Studio</h4>
                  <p className="text-2xl font-medium text-ink/50">East Legon, Accra, Ghana</p>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg mb-4 uppercase tracking-widest text-ink/30">WhatsApp</h4>
                  <a href="https://wa.me/233000000000" className="text-2xl font-medium hover:text-accent transition-colors">+233 (0) 00 000 0000</a>
                </div>
              </div>
            </div>

            <div className="glass p-10 md:p-16 rounded-[3rem] border border-ink/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">Message Received</h2>
                    <p className="text-lg text-ink/50 max-w-xs mx-auto mb-8">
                      Thanks for reaching out! We'll review your inquiry and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="text-accent font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Honeypot field for spam protection */}
                      <input type="text" name="_gotcha" style={{ display: "none" }} />
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-ink/30 ml-2">Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-ink/30 ml-2">Email</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-sm font-bold uppercase tracking-widest text-ink/30 ml-2">Service</label>
                      <div 
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-lg cursor-pointer flex items-center justify-between hover:border-accent/50 transition-colors"
                      >
                        <span className={selectedService ? "text-ink" : "text-ink/30"}>
                          {selectedService || "Select a service"}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                      </div>

                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-50 top-full left-0 w-full mt-2 bg-bg border border-ink/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
                          >
                            {services.map((service) => (
                              <div
                                key={service}
                                onClick={() => {
                                  setSelectedService(service);
                                  setIsDropdownOpen(false);
                                }}
                                className="px-6 py-4 hover:bg-ink/5 cursor-pointer transition-colors text-lg border-b border-ink/5 last:border-0"
                              >
                                {service}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-ink/30 ml-2">Message</label>
                      <textarea 
                        required
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-500/5 p-4 rounded-xl border border-red-500/10"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Something went wrong. Please try again or email us directly.
                      </motion.div>
                    )}

                    <button 
                      disabled={status === "submitting"}
                      className="w-full bg-ink text-bg py-6 rounded-2xl text-xl font-bold hover:bg-accent hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3 group"
                    >
                      {status === "submitting" ? (
                        <>
                          Sending...
                          <Loader2 className="w-6 h-6 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
