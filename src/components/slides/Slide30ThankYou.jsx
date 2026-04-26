// Slide14ThankYou.jsx — Thank You / Closing slide
import { motion } from "framer-motion";
import SlideWrapper, { fadeUp, fadeIn } from "../SlideWrapper";
import { college, department } from "../../data/collegeData";

export default function Slide14ThankYou() {
  const contacts = [
    { icon: "📞", label: "Phone", value: college.phone },
    { icon: "✉️", label: "Email", value: college.email },
    { icon: "🌐", label: "Web", value: college.website },
    { icon: "📍", label: "Address", value: college.location },
  ];
const socialLinks = {
  instagram: "https://www.instagram.com/mshiv_kdkce?igsh=ZHh2M3hoaWdmbGNn",
  linkedin: "https://www.linkedin.com/in/kdkce-dca",
};
  return (
    <SlideWrapper>
      {/* Full-screen decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[800px] h-[800px] rounded-full border border-gold-400/6 absolute animate-spin-slow" />
        <div
          className="w-[600px] h-[600px] rounded-full border border-cyan-400/8 absolute"
          style={{ animationDelay: "-10s" }}
        />
        <div className="w-[400px] h-[400px] rounded-full border border-white/5 absolute" />
      </div>

      {/* Top glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-gold-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        {/* Main thank you */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-4"
        >
          <span className="font-body text-white/30 text-xs font-semibold tracking-[0.4em] uppercase">
            End of Presentation
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="font-display text-6xl md:text-8xl font-black gold-text mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-display italic text-white/60 text-xl md:text-2xl mb-12 max-w-2xl"
        >
          "{college.tagline}"
        </motion.p>

        {/* Q&A badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="glass-card-light px-8 py-4 mb-12 border border-cyan-400/30"
        >
          <p className="font-display text-xl font-bold text-cyan-300">
            🙋 Q & A Session
          </p>
          <p className="font-body text-sm text-white/50 mt-1">
            We invite your questions!
          </p>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-6 mb-12"
        >
          {/* Instagram */}
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 transition"
          >
            <span className="text-xl">📸</span>
            <span className="text-white/70 text-sm font-medium">Instagram</span>
          </a>

          {/* LinkedIn */}
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 transition"
          >
            <span className="text-xl">💼</span>
            <span className="text-white/70 text-sm font-medium">LinkedIn</span>
          </a>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.08 }}
              className="glass-card p-3 hover-lift text-center"
            >
              <span className="text-2xl">{c.icon}</span>
              <p className="font-body text-xs text-white uppercase tracking-wider mt-2">
                {c.label}
              </p>
              <p className="font-body text-xs text-cyan-400 font-medium mt-1 leading-tight">
                {c.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Department name */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="absolute bottom-16 font-body text-white/25 text-xs tracking-widest uppercase"
        >
          {college.name} · {department.name} · Nagpur
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
