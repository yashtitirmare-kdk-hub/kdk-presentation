// EventSlide.jsx — Reusable full-screen event slide component
// Used by all 5 individual event slides (Guest Lecture, VAC, Industrial Visit, etc.)
// Layout: Left = text content | Right = image carousel/grid
// Mobile: stacked (text top, images bottom)

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideWrapper, {
  SlideFooter,
  BgOrbs,
  staggerContainer,
  staggerItem,
} from "./SlideWrapper";

// ── Tiny internal image carousel ─────────────────────────────────────────────
function ImageCarousel({ images, accentColor }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1=next, -1=prev
  const timerRef = useRef(null);

  // Auto-advance every 3 s
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % images.length);
    }, 3200);
    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const goTo = (idx) => {
    setDirection(idx > active ? 1 : -1);
    setActive(idx);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setActive((p) => (p + 1) % images.length);
    }, 3200);
  };

  const variants = {
    enter:  (d) => ({ opacity: 0, x: d > 0 ? 60 : -60, scale: 0.97 }),
    center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
    exit:   (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, scale: 0.97, transition: { duration: 0.35 } }),
  };

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Main large image */}
      <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[180px] bg-black/20">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.img
            key={active}
            src={images[active]}
            alt={`Event image ${active + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        {/* Prev / Next arrows */}
        <button
          onClick={() => { setDirection(-1); setActive((p) => (p - 1 + images.length) % images.length); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all z-10 text-sm"
        >
          ‹
        </button>
        <button
          onClick={() => { setDirection(1); setActive((p) => (p + 1) % images.length); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all z-10 text-sm"
        >
          ›
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white/60 text-xs font-mono z-10">
          {active + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="flex gap-2 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`flex-1 rounded-xl overflow-hidden h-14 sm:h-16 transition-all duration-300 border-2 ${
              i === active
                ? "border-opacity-100 scale-105 shadow-lg"
                : "border-white/10 opacity-60 hover:opacity-85"
            }`}
            style={{ borderColor: i === active ? accentColor : undefined }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Main EventSlide component ─────────────────────────────────────────────────
export default function EventSlide({ event, slideNumber }) {
  const {
    title, tagline, date, icon, description,
    highlights, outcome,
    accentColor, gradientFrom, gradientTo, borderColor, iconBg,
    images,
  } = event;

  return (
    <SlideWrapper>
      {/* Subtle background orbs tinted with accent */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ background: `radial-gradient(circle, ${accentColor}18 0%, transparent 70%)` }}
      />
      <div
        className="absolute bottom-0 -left-20 w-[320px] h-[320px] rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: `radial-gradient(circle, ${accentColor}12 0%, transparent 70%)` }}
      />

      {/* ── Accent left border strip ── */}
      <div
        className="absolute top-0 left-0 w-1 h-full"
        style={{ background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}44, transparent)` }}
      />

      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-14 pt-9 pb-14">

        {/* ── Top header bar ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex-shrink-0 flex items-center justify-between mb-5 flex-wrap gap-3"
        >
          <div className="flex items-center gap-3 mt-4">
            <motion.div
              variants={staggerItem}
              className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center text-xl border`}
              style={{ borderColor: accentColor + "40" }}
            >
              {icon}
            </motion.div>
            <div>
              <motion.p variants={staggerItem} className="slide-tag" style={{ color: accentColor }}>
                Slide {String(slideNumber).padStart(2, "0")}
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight "
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </motion.h2>
            </div>
          </div>

          {/* Date chip */}
          {date && (
            <motion.span
              variants={staggerItem}
              className="chip border text-xs"
              style={{ borderColor: accentColor + "40", color: accentColor, background: accentColor + "15" }}
            >
              📅 {date}
            </motion.span>
          )}
        </motion.div>

        {/* ── Main two-column layout ── */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* ── LEFT COLUMN — text content ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 overflow-y-auto custom-scroll min-h-0 pr-1"
          >
            {/* Tagline */}
            <p
              className="text-base sm:text-lg font-semibold italic"
              style={{ color: accentColor, fontFamily: "'Playfair Display', serif" }}
            >
              "{tagline}"
            </p>

            {/* Description card */}
            <div
              className={`glass-card p-4 sm:p-5 border-l-4 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
              style={{ borderLeftColor: accentColor }}
            >
              <h4 className="text-white text-lg uppercase tracking-widest font-semibold mb-2">
                About the Event
              </h4>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            {/* Highlights */}
            {highlights?.length > 0 && (
              <div className="glass-card p-4 sm:p-5">
                <h4 className="text-white text-lg uppercase tracking-widest font-semibold mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-2.5">
                  {highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                        style={{ background: accentColor + "25", color: accentColor }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-white text-sm sm:text-base leading-relaxed">{h}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcome */}
            {outcome && (
              <div
                className="glass-card p-4 sm:p-5 border"
                style={{ borderColor: accentColor + "30" }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <h4 className="text-white text-lg uppercase tracking-widest font-semibold mb-1">
                      Learning Outcome
                    </h4>
                    <p className="text-white text-sm sm:text-base leading-relaxed">{outcome}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* ── RIGHT COLUMN — image carousel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-h-0 flex flex-col"
          >
            <h4 className="text-white text-lg uppercase tracking-widest font-semibold mb-3 flex-shrink-0">
              Event Photos
            </h4>
            <div className="flex-1 min-h-[280px] lg:min-h-0">
              <ImageCarousel images={images} accentColor={accentColor} />
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </SlideWrapper>
  );
}
