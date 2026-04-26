// Slide01Hero.jsx — Welcome / Hero slide
import { motion } from "framer-motion";
import SlideWrapper, { fadeUp, fadeIn } from "../SlideWrapper";
import { college, department } from "../../data/collegeData";

export default function Slide01Hero() {
  return (
    <SlideWrapper>
  
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] rounded-full border border-cyan-400/8 absolute animate-spin-slow" />
        <div className="w-[600px] h-[600px] rounded-full border border-gold-400/10 absolute" style={{ animationDuration: "30s" }} />
        <div className="w-[300px] h-[300px] rounded-full border border-white/5 absolute" />
      </div>

      {/* Top glow blob */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        {/* College badge */}
        

        {/* College name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-2xl md:text-5xl font-black text-cyan-300 leading-none mb-4"
        >
          {college.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-white"> {college.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="chip bg-white/8 border border-white/15 text-white/70 mb-6"
        >
          🎓 Est. {college.established} · Affiliated RTMNU · Autonomous Institute
        </motion.div>

        {/* Department title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-5xl md:text-7xl font-black gold-text leading-none mb-4"
        >
          {department.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="text-white">of {department.name.split(" ").slice(2).join(" ")}</span>
        </motion.h1>

        {/* Course pills */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="flex items-center gap-4 mt-6 mb-8"
        >
          {department.courses.map((course) => (
            <div
              key={course}
              className="glass-card-light px-6 py-3 flex items-center gap-2"
            >
              <span className="text-2xl">🎓</span>
              <span className="font-display text-xl font-bold text-white">{course}</span>
            </div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="font-body text-white/60 text-lg md:text-xl italic mb-6 max-w-xl"
        >
          "{college.tagline}"
        </motion.p>

        {/* CTA button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        >
          <a
            href={`https://${college.website}`}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-body font-semibold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25"
          >
            Explore Admission →
          </a>
          <span className="font-body text-blue-400 text-sm">
            {college.website}
          </span>
        </motion.div>

        {/* Bottom badges */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="absolute bottom-16 left-0 right-0 flex justify-center gap-6 flex-wrap px-8"
        >
          {college.approvals.map((badge) => (
            <span key={badge} className="chip bg-white/5 border border-white/10 text-white/50 text-xs">
              ✦ {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 border-t border-white/5 flex items-center justify-center">
        <span className="font-body text-white/25 text-xs tracking-widest uppercase">
          📍 {college.location}
        </span>
      </div>
    </SlideWrapper>
  );
}
