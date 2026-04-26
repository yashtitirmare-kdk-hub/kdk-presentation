// Slide07Achievements.jsx — Achievements with images
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { achievementImages } from "../../data/galleryData";
import { achievements } from "../../data/achievementsData";

export default function Slide07Achievements() {
  return (
    <SlideWrapper>
      <BgOrbs />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 07</motion.p>
          <SectionTitle>Achievements</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-base mt-1">
            Medal achievements, rank holders & competition wins
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
          {/* Achievement image cards — 2023-24 & 2024-25 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg uppercase tracking-widest font-semibold">Medal Achievements</h3>
            <div className="flex flex-col gap-3 flex-1">
              {achievementImages.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="glass-card overflow-hidden flex hover-lift group"
                >
                  <div className="w-28 sm:w-36 h-24 overflow-hidden flex-shrink-0 relative">
                    <img src={ach.image} alt={ach.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  </div>
                  <div className="p-3 flex flex-col justify-center flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-400 text-base font-bold">{ach.year}</span>
                      <span className="chip bg-amber-500/15 text-amber-300 border border-amber-500/25 text-base py-0 px-2">{ach.medals}</span>
                    </div>
                    <p className="text-white font-semibold text-sm leading-tight">{ach.title}</p>
                    <p className="text-white text-xs mt-1 leading-tight">{ach.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievement categories */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-lg uppercase tracking-widest font-semibold">Achievement Categories</h3>
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.category}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-4 hover-lift"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center text-lg flex-shrink-0`}>
                    {ach.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base">{ach.category}</h4>
                </div>
                <ul className="space-y-1 pl-12">
                  {ach.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-white text-sm">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
