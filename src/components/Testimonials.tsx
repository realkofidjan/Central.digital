import { motion } from "motion/react";
import { Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Founder, Kente Heritage",
    quote: "Central transformed our digital presence. Their ability to blend traditional Ghanaian aesthetics with modern tech is unmatched.",
    image: "https://picsum.photos/seed/kwame/100/100",
  },
  {
    name: "Ama Serwaa",
    role: "Director, Accra Living",
    quote: "The team at Central is incredibly talented. They delivered a high-performance real estate portal that has scaled our operations.",
    image: "https://picsum.photos/seed/ama/100/100",
  },
  {
    name: "Kofi Boateng",
    role: "CTO, Oware Digital",
    quote: "Working with Central was a game-changer for our mobile game. Their design and development process is world-class.",
    image: "https://picsum.photos/seed/kofi/100/100",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-t border-line bg-bg overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="px-6 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="mono-label text-accent opacity-100 font-bold">Client_Feedback</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-none tracking-tighter"
            >
              TRUSTED BY <span className="italic-serif font-light opacity-30">INDUSTRY</span> <br />
              LEADERS.
            </motion.h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-ink/50 text-xl leading-tight"
            >
              WE PRIDE OURSELVES ON DELIVERING EXCEPTIONAL VALUE AND BUILDING LONG-LASTING PARTNERSHIPS.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-line">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-12 border-b border-line ${index < 2 ? "lg:border-r" : ""} hover:bg-accent transition-colors duration-300`}
            >
              <div className="flex items-center gap-1 mb-8">
                <Quote className="w-8 h-8 text-accent group-hover:text-bg transition-colors" />
              </div>
              
              <p className="text-xl font-medium text-ink/80 group-hover:text-bg transition-colors mb-12 leading-relaxed italic-serif">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-8 border-t border-line group-hover:border-bg/20">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-line group-hover:border-bg">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h4 className="font-bold uppercase group-hover:text-bg">{testimonial.name}</h4>
                  <p className="text-xs mono-label group-hover:text-bg/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-24 bg-ink text-bg text-center relative overflow-hidden">
          <div className="grid-bg opacity-10 absolute inset-0" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-12 tracking-tighter uppercase">
              READY TO <span className="italic-serif font-light opacity-30">INITIALIZE</span>?
            </h2>
            <Link to="/start-project" className="inline-flex items-center gap-4 bg-accent text-bg px-12 py-6 text-xl font-bold uppercase tracking-widest hover:bg-bg hover:text-accent transition-all group">
              Start Project
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
