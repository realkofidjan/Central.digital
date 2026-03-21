import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Asterisk, Languages, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleLanguage = () => {
    const langs = ["en", "fr", "ak"];
    const currentIndex = langs.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % langs.length;
    i18n.changeLanguage(langs[nextIndex]);
  };

  const navLinks = [
    { name: t("nav.services"), href: "/#services", id: "01" },
    { name: t("nav.portfolio"), href: "/#portfolio", id: "02" },
    { name: t("nav.about"), href: "/about", id: "03" },
    { name: t("nav.process"), href: "/#process", id: "04" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-ink flex items-center justify-center transition-transform group-hover:rotate-90">
            <Asterisk className="text-accent w-7 h-7 stroke-[3]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tighter uppercase leading-none">Central</span>
            <span className="mono-label leading-none mt-1">Digital.Systems</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <div key={link.id} className="flex items-center h-full border-l border-line px-8 group cursor-pointer relative overflow-hidden">
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <div className="relative z-10 flex flex-col">
                <span className="mono-label group-hover:text-bg transition-colors">{link.id}</span>
                {link.href.startsWith("/#") ? (
                  <a
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-tight group-hover:text-bg transition-colors"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-bold uppercase tracking-tight transition-colors ${
                      location.pathname === link.href ? "text-accent" : "group-hover:text-bg"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            </div>
          ))}
          
          <div className="flex items-center gap-4 border-l border-line px-8">
            <button 
              onClick={toggleLanguage}
              className="p-2 hover:bg-accent hover:text-bg transition-colors rounded-full flex items-center gap-2 mono-label opacity-100"
            >
              <Languages className="w-4 h-4" />
              {i18n.language.toUpperCase()}
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 hover:bg-accent hover:text-bg transition-colors rounded-full"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <Link to="/start-project" className="bg-ink text-bg px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-all flex items-center gap-2 ml-4">
            {t("nav.initialize")}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 border border-line">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="text-ink p-2 border border-line" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg border-b border-line p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-line pb-4">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 mono-label opacity-100"
                >
                  <Languages className="w-4 h-4" />
                  {i18n.language.toUpperCase()}
                </button>
              </div>
              {navLinks.map((link) => (
                <div key={link.id} className="flex flex-col">
                  <span className="mono-label">{link.id}</span>
                  {link.href.startsWith("/#") ? (
                    <a
                      href={link.href}
                      className="text-2xl font-display font-bold uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-2xl font-display font-bold uppercase"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/start-project" 
                className="bg-ink text-bg w-full py-4 font-bold text-center uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.initialize_project")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
