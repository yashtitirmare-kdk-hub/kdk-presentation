// Slide02About.jsx — About KDK College
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { college, collegeVision, collegeMission, aboutData } from "../../data/collegeData";

export default function Slide02About() {
  return (
    <SlideWrapper>
      <BgOrbs variant="warm" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mt-4 mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 02</motion.p>
          <SectionTitle>About {college.shortName}</SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white text-lg leading-relaxed mb-6">
              {aboutData.description}
            </p>

            <ul className="space-y-4">
              {aboutData.highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </span>

                  <div>
                    <div className="font-semibold text-yellow-400">
                      {item.title}
                    </div>
                    <div className="text-white text-sm">
                      {item.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={aboutData.image}
              alt="College"
              className="rounded-3xl w-full object-cover shadow-2xl"
              style={{ height: "520px" }}
            />

            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-white rounded-2xl p-4 shadow-xl">
              <div className="font-black text-2xl">
                {aboutData.stats.years}
              </div>
              <div className="text-xs font-medium">
                {aboutData.stats.label}
              </div>
            </div>
          </motion.div>

        </div>

        
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
