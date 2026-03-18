import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, Asterisk } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/#process" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Asterisk className="text-bg w-6 h-6 stroke-[3]" />
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">Central</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link to="/start-project" className="bg-white text-bg px-5 py-2 rounded-xl text-sm font-bold hover:bg-accent transition-colors flex items-center gap-2 group">
            Start Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-24 left-6 right-6 glass rounded-2xl p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <Link 
              to="/start-project" 
              className="bg-accent text-bg w-full py-3 rounded-xl font-bold text-center"
              onClick={() => setIsOpen(false)}
            >
              Start Project
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
