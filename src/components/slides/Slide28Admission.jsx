// Slide15Admission.jsx — Admission Information
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { admissionData } from "../../data/achievementsData";
import { college } from "../../data/collegeData";

const admissionSteps = [
  { step: "01", title: "Check Eligibility", desc: "BCA: 10+2 any stream · MCA: Any Graduate", icon: "📋" },
  { step: "02", title: "Fill Application", desc: "Online form at kdkce.edu.in", icon: "📝" },
  { step: "03", title: "CET / Merit List", desc: "MAH-BCA/MCA CET or merit-based selection", icon: "📊" },
  { step: "04", title: "Document Verification", desc: "Submit originals at the department office", icon: "✅" },
  { step: "05", title: "Fee Payment", desc: "As per university norms + govt. scholarship available", icon: "💳" },
  { step: "06", title: "Enrolment Confirmed", desc: "Welcome to KDK Dept. of Computer Applications!", icon: "🎓" },
];

export default function Slide15Admission() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-y-auto">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-6 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 28</motion.p>
          <SectionTitle>Admission Information</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1 min-h-0">
          {/* Left — course admission cards */}
          <div className="flex flex-col gap-4">
            {admissionData.map((ad, i) => (
              <motion.div
                key={ad.course}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card p-5 border hover-lift flex-1 bg-gradient-to-br ${ad.color} ${ad.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{ad.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{ad.course}</span>
                      <span className={`chip text-xs ${ad.badgeColor}`}>{ad.badge}</span>
                    </div>
                    <p className="text-white text-base">{ad.fullName}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Duration", value: ad.duration },
                    { label: "Intake", value: ad.intake },
                    { label: "Eligibility", value: ad.eligibility },
                    { label: "Fees", value: ad.fee },
                    { label: "Scholarship", value: ad.scholarship, full: true },
                  ].map((m) => (
                    <div key={m.label} className={`glass-card p-2 ${m.full ? "col-span-2" : ""}`}>
                      <p className="text-white text-base">{m.label}</p>
                      <p className="text-cyan-400 text-sm font-semibold mt-0.5 leading-tight">{m.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — steps + contact */}
          <div className="flex flex-col gap-4">
            <div className="glass-card p-4 flex-1">
              <p className="text-white text-lg uppercase tracking-widest font-semibold mb-4">Admission Process</p>
              <div className="space-y-3">
                {admissionSteps.map((s, i) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-bold text-black flex-shrink-0 mt-0.5">
                      {s.step}
                    </div>
                    <div>
                      <p className="text-white text-base font-semibold">{s.title}</p>
                      <p className="text-cyan-400 text-sm mt-0.5">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-card p-4 border border-amber-500/25">
              <p className="text-amber-300 text-lg font-semibold mb-3">📞 Contact Us</p>
              <div className="space-y-2 text-base">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>🌐</span><span>{college.website}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>📧</span><span>{college.email}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>📍</span><span>{college.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SlideFooter />
    </SlideWrapper>
  );
}
