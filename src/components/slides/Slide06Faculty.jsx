// Slide06Faculty.jsx — Faculty with images, scrollable grid
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { faculty } from "../../data/facultyData";

export default function Slide06Faculty() {
  const hod = faculty.find(f => f.isHOD);
  const rest = faculty.filter(f => !f.isHOD);

  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-5 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 06</motion.p>
          <SectionTitle>Our Faculty</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-sm mt-1">
            {faculty.length} dedicated educators shaping the next generation
          </motion.p>
        </motion.div>

        {/* HOD — featured card */}
        {hod && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4 flex items-center gap-5 mb-5 border border-amber-500/30 flex-shrink-0"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-amber-400/50 flex-shrink-0">
              <img src={hod.image} alt={hod.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="chip bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs">
                  Head of Department
                </span>
              </div>
              <p className="text-amber-300 font-bold text-base sm:text-lg leading-tight truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                {hod.name}
              </p>
              <p className="text-cyan-400/80 text-xs mt-0.5">{hod.qualification} · {hod.experience} experience</p>
              <p className="text-white text-xs">{hod.subject}</p>
            </div>
          </motion.div>
        )}

        {/* Scrollable faculty grid */}
        <div
          className="overflow-y-auto flex-1 pr-1 custom-scroll"
          style={{ minHeight: 0 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 pb-2">
            {rest.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-3 flex flex-col items-center text-center hover-lift group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden mb-3 flex-shrink-0 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/90 text-xs font-semibold leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {f.name}
                </p>
                <p className="text-cyan-400/80 text-xs">{f.role}</p>
                <p className="text-white text-xs mt-0.5 leading-tight">{f.subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
