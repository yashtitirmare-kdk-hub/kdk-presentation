// SlideWrapper.jsx — Common wrapper & shared animation primitives
import { motion } from "framer-motion";

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};
export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({ opacity: 1, transition: { duration: 0.6, delay } }),
};
export const fadeLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: "easeOut" } }),
};
export const fadeRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: (delay = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: "easeOut" } }),
};
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: "easeOut" } }),
};
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
export const staggerItem = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function SlideFooter() {
  return (
    <div className="slide-footer flex justify-center items-center gap-4 text-sm">
      <span>KDK College of Engineering</span>
      <span>|</span>
      <span>Department of Computer Applications</span>
      <span>|</span>
      <span>
        Created & Maintained by{" "}
        <a
          href="https://www.linkedin.com/in/yashtitirmare" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline font-medium cursor-pointer"
        >
          Prof. Yash Titirmare
        </a>
      </span>
    </div>
  );
}

export function SectionTitle({ children, center = false, className = "" }) {
  return (
    <motion.h2
      variants={staggerItem}
      className={`section-title ${center ? "text-center [&::after]:mx-auto" : ""} ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function SlideTag({ num }) {
  return (
    <motion.p variants={staggerItem} className="slide-tag">
      Slide {String(num).padStart(2, "0")}
    </motion.p>
  );
}

export function BgOrbs({ variant = "default" }) {
  const configs = {
    default: [
      { cls: "absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none", style: { background: "var(--orb-cyan)" } },
      { cls: "absolute bottom-16 -left-12 w-64 h-64 rounded-full blur-3xl pointer-events-none", style: { background: "var(--orb-gold)" } },
    ],
    warm: [
      { cls: "absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl pointer-events-none", style: { background: "var(--orb-gold)" } },
      { cls: "absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none", style: { background: "var(--orb-cyan)" } },
    ],
    cool: [
      { cls: "absolute top-10 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none", style: { background: "var(--orb-cyan)" } },
      { cls: "absolute bottom-20 left-10 w-64 h-64 rounded-full blur-3xl pointer-events-none", style: { background: "rgba(99,102,241,0.06)" } },
    ],
  };
  return (
    <>
      {(configs[variant] || configs.default).map((o, i) => (
        <div key={i} className={o.cls} style={o.style} />
      ))}
    </>
  );
}

export function OrbitalRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="spin-cw-slow absolute rounded-full"
        style={{ width: 680, height: 680, border: "1px solid rgba(34,211,238,0.07)" }} />
      <div className="spin-ccw-slow absolute rounded-full"
        style={{ width: 480, height: 480, border: "1px solid rgba(245,200,66,0.09)" }} />
      <div className="absolute rounded-full"
        style={{ width: 300, height: 300, border: "1px solid rgba(255,255,255,0.04)" }} />
    </div>
  );
}

export default function SlideWrapper({ children, className = "" }) {
  return (
    <div className={`relative w-full h-full bg-slide dot-grid overflow-hidden flex flex-col ${className}`}>
      {children}
    </div>
  );
}
