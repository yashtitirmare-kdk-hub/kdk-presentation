// Slide09Internships.jsx — NEW SLIDE: Internships
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import AnimatedCounter from "../AnimatedCounter";
import { internshipData } from "../../data/achievementsData";

export default function Slide09Internships() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />
      
      <div className="relative z-10 flex flex-col h-screen px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-hidden">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-5 flex-shrink-0"
        >
          <motion.p variants={staggerItem} className="slide-tag">
            Slide 11
          </motion.p>

          <SectionTitle>{internshipData.title}</SectionTitle>

          <motion.p
            variants={staggerItem}
            className="text-white text-base mt-1"
          >
            {internshipData.subtitle}
          </motion.p>
        </motion.div>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scroll pr-2">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-4">

              <div className="grid grid-cols-3 gap-2">
                {internshipData.stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-3 text-center"
                  >
                    <div className="text-2xl mb-1">{s.icon}</div>

                    <div className="text-xl sm:text-2xl font-black text-cyan-400">
                      <AnimatedCounter
                        value={s.value}
                        suffix={s.suffix}
                        duration={1.8}
                      />
                    </div>

                    <p className="text-white text-sm mt-1 leading-tight">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Images */}
              <div className="grid grid-cols-2 gap-2">
                {internshipData.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden hover-lift group relative"
                  >
                    <img
                      src={img}
                      alt="Internship activity"
                      className="w-full h-full object-cover min-h-[100px] transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col gap-3">

              <h3 className="text-white text-lg uppercase tracking-widest font-semibold">
                Internship Program Highlights
              </h3>

              {internshipData.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-4 border-l-4 hover-lift flex-1 ${h.color}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{h.icon}</span>
                    <div>
                      <h4 className="text-white/90 font-semibold text-base mb-1">
                        {h.title}
                      </h4>
                      <p className="text-white text-sm">{h.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Process */}
              <motion.div className="glass-card p-4 border border-amber-500/25">
                <p className="text-amber-300 text-base font-semibold mb-2">
                  📋 Internship Process
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  {internshipData.process.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="text-sm px-2.5 py-1 rounded-full bg-white/8 border border-white/15 text-white">
                        {step}
                      </span>
                      {i < internshipData.process.length - 1 && (
                        <span className="text-white/20 text-xs">→</span>
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
