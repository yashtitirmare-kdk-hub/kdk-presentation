// Slide03Department.jsx — Department Introduction
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { department } from "../../data/collegeData";

const timeline = [
  { year: "2023", label: "MCA Program Started", desc: "Affiliated to RTMNU, Nagpur", color: "bg-cyan-500" },
  { year: "2024", label: "BCA & MCA (Autonomous)", desc: "Autonomous Status Achieved", color: "bg-amber-400" },
];

const goals = [
  "Deliver quality education aligned with industry needs",
  "Foster innovation, research & problem-solving mindset",
  "Develop technically skilled & job-ready graduates",
  "Build strong industry-academia partnerships",
  "Encourage holistic development & lifelong learning",
  "Promote ethical values, teamwork & leadership skills",
];

export default function Slide03Department() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-4 mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 03</motion.p>
          <SectionTitle>Department Introduction</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1 min-h-0">
          {/* Timeline */}
          <div className="glass-card p-5">
            <h3 className="text-white text-xl uppercase tracking-widest font-semibold mb-5">Journey</h3>
            <div className="relative pl-5 space-y-6">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500 via-amber-400 to-transparent" />
              {timeline.map((t, i) => (
                <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
                  <div className={`absolute -left-[5px] w-3 h-3 rounded-full ${t.color} border-2 border-slate-900`} style={{ top: `${i * 100 + 4}px` }} />
                  <div className="glass-card p-4">
                    <span className="text-2xl font-black text-amber-400 block" style={{ fontFamily: "'Playfair Display', serif" }}>{t.year}</span>
                    <p className="text-white font-semibold text-sm mt-1">{t.label}</p>
                    <p className="text-white/50 text-xs mt-1">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goals + HOD */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="glass-card p-5 flex-1">
              <h3 className="text-white text-xl uppercase tracking-widest font-semibold mb-4">Department Goals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((goal, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-4 hover-lift"
                  >
                    <div className="flex items-start gap-3">
                      <div className="step-num flex-shrink-0">{String(i + 1).padStart(2, "0")}</div>
                      <p className="text-white text-base leading-relaxed">{goal}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* HOD card */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 flex items-center gap-4 border border-amber-500/20"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400/50 flex-shrink-0">
                <img
                  src={department.hod.image}
                  alt="HOD"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-amber-300 font-bold text-base truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {department.hod.name}
                </p>
                <p className="text-white/50 text-sm mt-0.5">{department.hod.qualification} · {department.hod.experience}</p>
              </div>
              <span className="chip bg-amber-500/15 text-amber-300 border border-amber-500/30 flex-shrink-0 text-base">
                HOD
              </span>
            </motion.div> */}
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
