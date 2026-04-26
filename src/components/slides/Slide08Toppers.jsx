// SlideToppers.jsx — MCA RTMNU Top 7 Toppers
import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem,
} from "../SlideWrapper";
import { toppers } from "../../data/toppersData";

export default function SlideToppers() {
  const top3  = toppers.filter(t => t.rank <= 3);
  const rest4 = toppers.filter(t => t.rank > 3);

  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />
      {/* Gold shimmer top glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={staggerContainer} className="flex-shrink-0 mb-5"
        >
          <motion.p variants={staggerItem} className="slide-tag">Slide 08</motion.p>
          <SectionTitle>MCA RTMNU Top 7 Gold Medalist</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-base mt-1">
            Top 7 rank holders — KDK Dept. of Computer Applications
          </motion.p>
        </motion.div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto custom-scroll min-h-0 pr-1">
          <div className="flex flex-col gap-5 pb-2">

            {/* ── Top 3 podium cards ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {top3.map((topper, i) => (
                <motion.div
                  key={topper.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
                  className={`glass-card overflow-hidden hover-lift group flex flex-col border ${topper.borderColor}/40 ${i === 0 ? "ring-2 ring-yellow-400/40" : ""}`}
                >
                  {/* Image */}
                  <div className="h-44 sm:h-52 overflow-hidden relative flex-shrink-0">
                    <img
                      src={topper.image} alt={topper.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Rank badge */}
                    <div className="absolute top-3 left-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg shadow-lg ${
                          topper.rank === 1 ? "rank-badge-1" :
                          topper.rank === 2 ? "rank-badge-2" : "rank-badge-3"
                        } bg-gradient-to-r ${topper.color}`}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {topper.rank}
                      </div>
                    </div>

                    {/* Medal top-right */}
                    <div className="absolute top-3 right-3 text-2xl">{topper.medal}</div>

                    {/* Name + score overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-base sm:text-lg leading-tight"
                         style={{ fontFamily: "'Playfair Display', serif" }}>
                        {topper.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-sm sm:text-base font-black"
                          style={{ color: topper.rank === 1 ? "#f5c842" : topper.rank === 2 ? "#c0c0c0" : "#cd7f32" }}
                        >
                          {topper.score}
                        </span>
                        <span className="text-white/50 text-xs">·</span>
                        <span className="text-white/60 text-xs">{topper.percentage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-3 sm:p-4 flex flex-col gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      <span className={`chip border text-xs bg-gradient-to-r ${topper.color} bg-opacity-20 text-white/80 border-white/15`}>
                        {topper.specialization}
                      </span>
                    </div>
                    <p className="text-white/50 text-xs sm:text-sm">{topper.batch}</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-yellow-400 text-sm">🏅</span>
                      <span className="text-white text-xs sm:text-sm">{topper.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Rank 4–7 compact list ── */}
            <div>
              <h3 className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-3">
                Rank 4–7
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rest4.map((topper, i) => (
                  <motion.div
                    key={topper.id}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`glass-card p-3 sm:p-4 flex items-center gap-4 hover-lift border ${topper.borderColor}/25`}
                  >
                    {/* Photo */}
                    <div
                      className={`w-14 h-14 rounded-xl overflow-hidden border-2 flex-shrink-0`}
                      style={{ borderColor: topper.borderColor.replace("border-", "") }}
                    >
                      <img
                        src={topper.image} alt={topper.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div
                          className={`w-6 h-6 rounded-full ${topper.rankBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                        >
                          {topper.rank}
                        </div>
                        <p className="text-white/90 font-semibold text-sm truncate"
                           style={{ fontFamily: "'Playfair Display', serif" }}>
                          {topper.name}
                        </p>
                      </div>
                      <p className="text-cyan-400/80 text-xs truncate">{topper.specialization}</p>
                      <p className="text-white text-xs truncate">{topper.achievement}</p>
                      <p className="text-white/60 text-xs">{topper.batch}</p>
                    </div>

                    {/* Score */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-black text-white" style={{ color: topper.borderColor.replace("border-", "").replace("/25",""), fontFamily: "'Playfair Display', serif" }}>
                        {topper.score}
                      </p>
                      <p className="text-white/35 text-xs">{topper.percentage}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
