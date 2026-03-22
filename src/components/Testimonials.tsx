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
    <section id="testimonials" className="py-24 px-6 bg-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-px bg-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Testimonials</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold"
            >
              WHAT OUR <span className="italic font-light">CLIENTS</span> <br />
              SAY ABOUT US.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ink/50 max-w-sm text-lg"
          >
            A few words from the companies we've worked with.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="p-8 rounded-3xl glass border-ink/5"
            >
              <Quote className="w-10 h-10 text-accent mb-8" />
              <p className="text-xl font-medium mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-ink/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 rounded-[40px] bg-accent text-bg flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-white/10 to-transparent" />
          <h2 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-12 tracking-tighter">
            READY TO <br />
            START YOUR <br />
            NEXT PROJECT?
          </h2>
          <Link to="/start-project" className="relative z-10 bg-bg text-ink px-12 py-6 rounded-3xl text-xl font-bold hover:bg-ink hover:text-white transition-all flex items-center gap-3 group">
            Get in Touch
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
