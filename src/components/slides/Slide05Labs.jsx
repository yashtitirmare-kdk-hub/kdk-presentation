// Slide05Labs.jsx — Labs & Facilities with images
// Cards are larger with rich content; section scrolls if overflow on small screens
import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter,
  SectionTitle,
  BgOrbs,
  staggerContainer,
  staggerItem,
} from "../SlideWrapper";
import { labImages } from "../../data/galleryData";

export default function Slide05Labs() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />

      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16">
        {/* ── Header — fixed height, never scrolls ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex-shrink-0 mb-5"
        >
          <motion.p variants={staggerItem} className="slide-tag">
            Slide 05
          </motion.p>
          <SectionTitle>Labs &amp; Facilities</SectionTitle>
          <motion.p
            variants={staggerItem}
            className="text-white text-sm mt-2"
          >
            State-of-the-art infrastructure for practical learning
          </motion.p>
        </motion.div>

        {/* ── Scrollable card grid ── */}
        <div
          className="flex-1 overflow-y-auto custom-scroll min-h-0 pr-2"
        >
          <div
            className="
              grid gap-5
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {labImages.map((lab, i) => (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card overflow-hidden hover-lift group flex flex-col"
              >
                {/* ── Image — taller than before ── */}
                <div className="h-44 sm:h-48 lg:h-52 flex-shrink-0 overflow-hidden relative">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${lab.color} opacity-25`}
                  />

                  {/* Icon badge top-left */}
                  <span className="absolute top-3 left-3 text-3xl drop-shadow-lg">
                    {lab.icon}
                  </span>

                  {/* Title overlaid at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3
                      className="text-white font-bold text-lg sm:text-xl leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {lab.title}
                    </h3>
                  </div>
                </div>

                {/* ── Content body ── */}
                <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
                  {/* Description */}
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {lab.desc}
                  </p>

                  {/* Feature bullet points — pulled from lab.points if present */}
                  {lab.points && lab.points.length > 0 && (
                    <ul className="space-y-1.5 mt-1">
                      {lab.points.map((pt, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-white text-xs sm:text-sm"
                        >
                          <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                            ›
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Color-coded badge strip at bottom */}
                  <div className="mt-auto pt-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-gradient-to-r ${lab.color} bg-opacity-20 border ${lab.border ?? "border-white/10"} text-white/70`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                      Available for Students
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideWrapper>
  );
}
