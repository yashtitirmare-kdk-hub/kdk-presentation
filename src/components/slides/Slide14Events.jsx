// Slide12Events.jsx — Events overview with category badges
import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem,
} from "../SlideWrapper";
import { eventImages } from "../../data/galleryData";
import { eventsSlides } from "../../data/eventsData";

// Category badge colours
const categoryMeta = {
  "Guest Lecture":          { color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",     icon: "🎤" },
  "Value Added Course":     { color: "bg-amber-400/20 text-amber-300 border-amber-400/40",  icon: "📜" },
  "Industrial Visit":       { color: "bg-violet-500/20 text-violet-300 border-violet-500/40", icon: "🏭" },
  "Sports Meet":            { color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40", icon: "🏆" },
  "Research Paper Presentation":         { color: "bg-pink-500/20 text-pink-300 border-pink-500/40",     icon: "🔬" },
  "Coding Bootcamp": {
    color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    icon: "💻",
  },
  "Annual TechFest": {
    color: "bg-violet-500/20 text-violet-300 border-violet-500/40",
    icon: "🚀",
  },
  "Outreach Activity": {
    color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    icon: "🌍",
  },
  "Media Coverage": {
    color: "bg-yellow-400/20 text-yellow-300 border-yellow-400/40",
    icon: "📰",
  },
  
};
const handleRedirect = (slideId) => {
  const el = document.getElementById(slideId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Slide12Events() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={staggerContainer} className="flex-shrink-0 mb-5"
        >
          <motion.p variants={staggerItem} className="slide-tag">Slide 14</motion.p>
          <SectionTitle>Events &amp; Activities</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-base mt-1">
            Click any category below for the full event slide
          </motion.p>
        </motion.div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto custom-scroll min-h-0 pr-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-2">

            {/* Left — event category cards with badges */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-lg uppercase tracking-widest font-semibold mb-1">
                Event Categories
              </h3>
              {eventsSlides.map((ev, i) => {
                const meta = categoryMeta[ev.title] || { color: "bg-white/10 text-white border-white/20", icon: "📌" };
                return (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card p-4 sm:p-5 hover-lift flex items-start gap-4"
                    style={{ borderLeft: `4px solid ${ev.accentColor}` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: ev.accentColor + "20" }}
                    >
                      {ev.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`chip border text-xs ${meta.color}`}
                        >
                          {meta.icon} {ev.title}
                        </span>
                        <span className="text-cyan-300/80 text-xs">{ev.date}</span>
                      </div>
                      <p className="text-white text-sm sm:text-base leading-relaxed line-clamp-2">
                        {ev.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right — photo grid + outreach */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg uppercase tracking-widest font-semibold mb-1">
                Event Gallery
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {eventImages.map((ev, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => handleRedirect(ev.slideId)}
                    className="rounded-xl overflow-hidden hover-lift group relative cursor-pointer"
                  >
                    <div className="h-24 sm:h-28 overflow-hidden">
                      <img
                        src={ev.image} alt={ev.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-semibold truncate">{ev.title}</p>
                      {/* Category badge on image */}
                      <span className="text-white/50 text-xs">{ev.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Outreach */}
              {/* <div className="glass-card p-4 sm:p-5 border border-cyan-500/20 flex-1">
                <p className="text-cyan-300 text-sm sm:text-base font-semibold mb-3">
                  🌍 Outreach &amp; Extension Activities
                </p>
                <ul className="space-y-2">
                  {[
                    "Digital literacy camps in rural areas",
                    "School-level coding awareness programs",
                    "Community technology workshops",
                    "NSS & social responsibility initiatives",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
