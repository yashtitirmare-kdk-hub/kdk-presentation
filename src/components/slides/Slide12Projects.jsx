// Slide10Projects.jsx — NEW SLIDE: Student Projects
import { motion } from "framer-motion";
import SlideWrapper, { SlideFooter, SectionTitle, BgOrbs, staggerContainer, staggerItem } from "../SlideWrapper";
import { studentProjects } from "../../data/projectsData";

export default function Slide10Projects() {
  return (
    <SlideWrapper>
      <BgOrbs />
      <div className="relative z-10 flex flex-col h-full px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16">

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-5 flex-shrink-0">
          <motion.p variants={staggerItem} className="slide-tag">Slide 12</motion.p>
          <SectionTitle>Student Projects</SectionTitle>
          <motion.p variants={staggerItem} className="text-white text-sm mt-1">
            Innovative solutions built by our talented students
          </motion.p>
        </motion.div>

        {/* Scrollable grid */}
        <div className="overflow-y-auto flex-1 min-h-0 pr-1 custom-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-2">
            {studentProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card overflow-hidden hover-lift group"
              >
                {/* Project image */}
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-25`} />
                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="chip bg-black/50 text-white border border-white/20 text-xs backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs">{project.batch}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {project.name}
                  </h3>
                  <p className="text-white text-sm leading-relaxed mb-3">{project.description}</p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-white/8 border border-white/12 text-cyan-300/80">
                        {t}
                      </span>
                    ))}
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
