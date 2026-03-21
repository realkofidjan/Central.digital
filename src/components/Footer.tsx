import { motion } from "motion/react";
import { Instagram, Twitter, Linkedin, Github, Asterisk } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-bg border-t border-line">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-line">
          {/* Brand Section */}
          <div className="lg:col-span-4 p-12 border-b lg:border-b-0 lg:border-r border-line">
            <Link to="/" className="text-3xl font-display font-bold tracking-tighter uppercase mb-8 block">
              Central<span className="text-accent">.</span>
            </Link>
            <p className="text-ink/50 text-lg leading-tight uppercase font-medium mb-12">
              ARCHITECTING THE FUTURE OF DIGITAL SYSTEMS THROUGH PRECISION ENGINEERING AND ICONIC DESIGN.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 border border-line flex items-center justify-center hover:bg-accent hover:border-accent hover:text-bg transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4">
            <div className="p-12 border-r border-line">
              <span className="mono-label mb-8 block">Navigation</span>
              <ul className="space-y-4">
                {['Services', 'Portfolio', 'Process', 'Pricing'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="font-bold uppercase hover:text-accent transition-colors">
                      {t(`nav.${item.toLowerCase()}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-12 border-r border-line">
              <span className="mono-label mb-8 block">Company</span>
              <ul className="space-y-4">
                {['About', 'Careers', 'Contact', 'Legal'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="font-bold uppercase hover:text-accent transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 border-r border-line col-span-2">
              <span className="mono-label mb-8 block">{t("footer.newsletter")}</span>
              <p className="text-sm text-ink/50 uppercase font-medium mb-8">
                JOIN OUR NETWORK FOR THE LATEST UPDATES IN DIGITAL ENGINEERING.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder={t("footer.placeholder")} 
                  className="bg-transparent border border-line border-r-0 px-6 py-4 w-full focus:outline-none focus:border-accent mono-label"
                />
                <button className="bg-ink text-bg px-8 py-4 font-bold uppercase tracking-widest hover:bg-accent transition-all">
                  {t("footer.subscribe")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 p-8 text-xs mono-label text-ink/50">
          <div className="lg:col-span-4 mb-4 lg:mb-0">
            © {currentYear} CENTRAL_STUDIO // {t("footer.rights")}
          </div>
          <div className="lg:col-span-4 text-center mb-4 lg:mb-0">
            {t("footer.location")}
          </div>
          <div className="lg:col-span-4 flex justify-end gap-8">
            <a href="#" className="hover:text-accent transition-colors">PRIVACY_POLICY</a>
            <a href="#" className="hover:text-accent transition-colors">TERMS_OF_SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
