// Slide04Courses.jsx — Courses Offered
import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter,
  SectionTitle,
  BgOrbs,
  staggerContainer,
  staggerItem,
} from "../SlideWrapper";
import { courses } from "../../data/coursesData";

export default function Slide04Courses() {
  return (
    <SlideWrapper>
      <BgOrbs />
      {/* <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 md:px-16 pt-10 pb-16 overflow-y-auto"> */}
      <div className="relative z-10 flex flex-col h-screen px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-6 flex-shrink-0"
        >
          <motion.p variants={staggerItem} className="slide-tag">
            Slide 04
          </motion.p>
          <SectionTitle>Courses Offered</SectionTitle>
        </motion.div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0"> */}
        <div className="flex-1 min-h-0 overflow-y-auto custom-scroll pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card flex flex-col overflow-hidden hover-lift"
              >
                {/* Course image */}
                <div className="h-28 sm:h-36 overflow-hidden relative flex-shrink-0">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-40`}
                  />
                  <div className="absolute bottom-4 left-4 flex items-end gap-3">
                    <span
                      className="text-4xl font-black text-white"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {course.name}
                    </span>
                    <span className="text-white text-base mb-1">
                      {course.fullName}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Duration", value: course.duration, icon: "⏱️" },
                      { label: "Intake", value: course.intake, icon: "👥" },
                      {
                        label: "Eligibility",
                        value: course.eligibility,
                        icon: "📋",
                      },
                      { label: "Fees", value: course.fees, icon: "💰" },
                    ].map((m) => (
                      <div key={m.label} className="glass-card p-2 sm:p-3">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-sm">{m.icon}</span>
                          <p className="text-white text-sm">{m.label}</p>
                        </div>
                        <p className="text-white/90 text-lg sm:text-lg font-semibold leading-tight">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Scholarship */}
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm">🎓</span>
                    <span className="text-white text-sm">Scholarship:</span>
                    <span className="text-white text-sm font-medium">
                      {course.scholarship}
                    </span>
                  </div>

                  {/* Highlights */}
                  {/* <div className="flex-1">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-2 font-semibold">
                      Subjects Include
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {course.highlights.slice(0, 4).map((h, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/8 border border-white/10 text-white/65 leading-5"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div> */}
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
