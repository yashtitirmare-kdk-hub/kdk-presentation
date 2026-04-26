// Slide08Placements.jsx — Placement stats with animated counters
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import AnimatedCounter from "../AnimatedCounter";
import { placementStats, companies, placementSupport, placementImages } from "../../data/placementData";

export default function Slide08Placements() {
  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 10</motion.p>
          <SectionTitle>Placements</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-base mt-1">
            Building careers through industry connections & training
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
          {/* Left — counters + images */}
          <div className="flex flex-col gap-4">
            {/* Placement % cards */}
            <div className="grid grid-cols-2 gap-3">
              {placementStats.map((stat, i) => (
                <motion.div
                  key={stat.year}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  className="glass-card p-5 flex flex-col items-center text-center border"
                  style={{ borderColor: stat.color + "40" }}
                >
                  <AnimatedCounter
                    value={stat.percent}
                    suffix="%"
                    duration={2}
                    className="text-4xl sm:text-5xl text-[#f5c842] font-bold"
                    style={{ color: stat.color, fontFamily: "'Playfair Display', serif" }}
                  />
                  <p className="text-white text-xl mt-2 font-medium">{stat.year}</p>
                  <p className="text-white text-base">Placement Ratio</p>
                </motion.div>
              ))}
            </div>

            {/* Image carousel row */}
            <div className="grid grid-cols-3 gap-2 flex-1">
              {placementImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl overflow-hidden h-24 sm:h-32 hover-lift"
                >
                  <img src={img} alt="Placement activity" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              ))}
            </div>

            {/* Companies */}
            <div className="glass-card p-4">
              <p className="text-white text-lg uppercase tracking-widest font-semibold mb-3">Recruiting Partners</p>
              <div className="flex flex-wrap gap-2">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="text-base px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white hover:bg-white/10 transition-colors"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — support + visual */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-5 flex-1">
              <p className="text-white text-lg uppercase tracking-widest font-semibold mb-4">Placement Support</p>
              <div className="space-y-3">
                {placementSupport.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/4 hover:bg-white/8 transition-colors"
                  >
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <span className="text-white text-base leading-relaxed">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Target bar */}
            <div className="glass-card p-5">
              <p className="text-white text-lg uppercase tracking-widest font-semibold mb-4">Year-on-Year Progress</p>
              {placementStats.map((stat) => (
                <div key={stat.year} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white text-base">{stat.year}</span>
                    <AnimatedCounter value={stat.percent} suffix="%" className="text-base font-bold text-[#f5c842]" style={{ color: stat.color }} />
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${stat.color}, ${stat.color}88)` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/8 text-center">
                <p className="text-white/30 text-xs">🎯 Target: 75%+ by 2026–27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
