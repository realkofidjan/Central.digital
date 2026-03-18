import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Github, Asterisk } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-muted/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Asterisk className="text-bg w-7 h-7 stroke-[3]" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase">Central</span>
            </div>
            <p className="text-xl text-white/50 max-w-sm mb-12">
              We build high-performance digital products for the next generation of tech leaders, based in Accra, Ghana.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/30 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <div className="relative group">
                <a href="#" className="text-white/30 hover:text-accent transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-bg text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Soon</span>
              </div>
              <div className="relative group">
                <a href="#" className="text-white/30 hover:text-accent transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-bg text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Soon</span>
              </div>
              <a href="#" className="text-white/30 hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/30">Company</h4>
            <div className="flex flex-col gap-4">
              <Link to="/about" className="text-lg font-medium hover:text-accent transition-colors">About</Link>
              <a href="/#services" className="text-lg font-medium hover:text-accent transition-colors">Services</a>
              <a href="/#portfolio" className="text-lg font-medium hover:text-accent transition-colors">Portfolio</a>
              <a href="/#process" className="text-lg font-medium hover:text-accent transition-colors">Process</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-8 uppercase tracking-widest text-white/30">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@central.digital" className="text-lg font-medium hover:text-accent transition-colors">hello@central.digital</a>
              <a href="tel:+233240000000" className="text-lg font-medium hover:text-accent transition-colors">+233 (24) 000-0000</a>
              <p className="text-lg font-medium text-white/50">East Legon, Accra, Ghana</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-white/30 text-sm font-medium">
            © {currentYear} Central Digital Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
