// Slide14WhyChoose.jsx
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { whyChooseReasons } from "../../data/achievementsData";

export default function Slide14WhyChoose() {
  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 29</motion.p>
          <SectionTitle>Why Choose Us?</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-sm mt-1">
            6 compelling reasons to join KDK's Department of Computer Applications
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-h-0">
          {whyChooseReasons.map((reason, i) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-5 hover-lift group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {reason.icon}
                </div>
                <div>
                  <span className="text-white text-xl font-mono">{reason.num}</span>
                  <h3 className="text-white font-bold text-base leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {reason.title}
                  </h3>
                </div>
              </div>
              <p className="text-white text-sm leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
