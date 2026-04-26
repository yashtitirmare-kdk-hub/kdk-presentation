// Slide11Future.jsx — Future Goals
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { futureGoals } from "../../data/achievementsData";

export default function Slide11Future() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />
      <div className="relative z-10 flex flex-col h-full px-10 md:px-16 pt-12 pb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-8">
          <motion.p variants={staggerItem} className="font-body text-cyan-400 text-xs font-semibold tracking-[0.3em] uppercase mb-2">Slide 25</motion.p>
          <SectionTitle>Future Goals</SectionTitle>
          <motion.p variants={staggerItem} className="font-body text-white/50 text-sm mt-3">Our roadmap for excellence & growth</motion.p>
        </motion.div>
        <div className="flex-1 overflow-y-auto custom-scroll pr-2 min-h-0">
        <div className="space-y-4 pb-2">
          {futureGoals.map((goal, i) => (
            <motion.div
              key={goal.num}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="glass-card p-5 hover-lift flex items-center gap-5"
            >
              {/* Step indicator */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                {goal.icon}
              </div>
              {/* Number */}
              <span className="font-mono text-3xl font-black text-white/10 flex-shrink-0 w-10">{goal.num}</span>
              {/* Text */}
              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-white">{goal.title}</h3>
                <p className="font-body text-sm text-white/55 mt-1 leading-relaxed">{goal.desc}</p>
              </div>
              {/* Right accent bar */}
              <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${goal.color} flex-shrink-0`} />
            </motion.div>
          ))}
        </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
