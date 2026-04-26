import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter,
  SectionTitle,
  BgOrbs,
  staggerContainer,
  staggerItem,
} from "../SlideWrapper";
import AnimatedCounter from "../AnimatedCounter";
import { researchData } from "../../data/researchData";

export default function Slide11Research() {
  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />

      <div className="relative z-10 flex flex-col h-screen px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-hidden">

        {/* ── Header — mirrors Internships exactly ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-5 flex-shrink-0"
        >
          <motion.p variants={staggerItem} className="slide-tag">
            Slide 13
          </motion.p>

          <SectionTitle>{researchData.title}</SectionTitle>

          <motion.p
            variants={staggerItem}
            className="text-white text-base mt-1"
          >
            {researchData.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scroll pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* ══════════════════ LEFT COLUMN ══════════════════ */}
            <div className="flex flex-col gap-4">

              {/* 3 animated stat counters */}
              <div className="grid grid-cols-3 gap-2">
                {researchData.stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-3 sm:p-4 text-center"
                  >
                    <div className="text-2xl mb-1">{s.icon}</div>

                    {/* Counter */}
                    <div
                      className="text-2xl sm:text-3xl font-black text-cyan-400"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      <AnimatedCounter
                        value={s.value}
                        suffix={s.suffix}
                        duration={2}
                      />
                    </div>

                    <p className="text-white text-xs sm:text-sm mt-1 leading-tight">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Featured paper cards */}
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-white text-lg sm:text-sm uppercase tracking-widest font-semibold">
                  Best Research Papers
                </h3>

                {researchData.papers.map((paper, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card overflow-hidden flex hover-lift group"
                  >
                    {/* Side image */}
                    <div className="w-28 sm:w-32 flex-shrink-0 overflow-hidden">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-full object-cover min-h-[90px] transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>

                    {/* Text */}
                    <div className="p-3 sm:p-4 flex flex-col justify-center flex-1 min-w-0">
                      {/* Type chip + tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          className={`chip border text-xs py-0 px-2 text-white/75 border-opacity-40 ${paper.typeColor}`}
                        >
                          {paper.type}
                        </span>
                        <span className="text-cyan-300/80 text-xs">{paper.tag}</span>
                      </div>

                      <p
                        className="text-white/90 font-semibold text-sm sm:text-base leading-snug mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {paper.title}
                      </p>

                      <p className="text-white/45 text-xs sm:text-sm truncate">
                        Authors: {paper.authors}
                      </p>
                      <p className="text-white/45 text-xs sm:text-sm truncate">
                        DOI: {paper.DOI}
                      </p>
                      <button
                        onClick={() => window.open(paper.link, "_blank")}
                        className="mt-2 self-start text-sm text-cyan-300/80 hover:text-cyan-400 transition-colors "
                      >
                        Read Paper
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══════════════════ RIGHT COLUMN ══════════════════ */}
            <div className="flex flex-col gap-3">

              <h3 className="text-white text-lg sm:text-sm uppercase tracking-widest font-semibold">
                Research Focus Areas
              </h3>

              {/* Highlight cards — identical pattern to Internships */}
              {researchData.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-4 sm:p-5 border-l-4 hover-lift flex-1 ${h.color}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">{h.icon}</span>
                    <div>
                      <h4
                        className="text-white font-semibold text-base sm:text-lg mb-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {h.title}
                      </h4>
                      <p className="text-white text-sm sm:text-base leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Publication process strip — mirrors Internship Process */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-4 sm:p-5 border border-amber-500/25"
              >
                <p className="text-amber-300 text-sm sm:text-base font-semibold mb-3">
                  📋 Publication Process
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  {researchData.process.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm px-2.5 py-1 rounded-full bg-white/8 border border-white/15 text-white">
                        {step}
                      </span>
                      {i < researchData.process.length - 1 && (
                        <span className="text-white text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideWrapper>
  );
}
