// App.jsx — KDK Presentation Shell — 21 Slides
import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "./index.css";

// ── Core slides ──────────────────────────────────────────────────────────────
import Slide01Hero         from "./components/slides/Slide01Hero";
import Slide02About        from "./components/slides/Slide02About";
import Slide03Department   from "./components/slides/Slide03Department";
import Slide04Courses      from "./components/slides/Slide04Courses";
import Slide05Labs         from "./components/slides/Slide05Labs";
import Slide06Faculty      from "./components/slides/Slide06Faculty";
import Slide07Achievements from "./components/slides/Slide07Achievements";
import Slide08Toppers      from "./components/slides/Slide08Toppers";
import Slide09Magazine     from "./components/slides/Slide09Magazine";
import Slide10Placements   from "./components/slides/Slide10Placements";
import Slide11Internships  from "./components/slides/Slide11Internships";
import Slide12Projects     from "./components/slides/Slide12Projects";
import Slide13Research     from "./components/slides/Slide13Research";
import Slide14Events       from "./components/slides/Slide14Events";

// ── Individual event slides ──────────────────────────────────────────────────
import Slide15EventGuestLecture                       from "./components/slides/Slide15EventGuestLecture";
import Slide16EventValueAddedCourse                   from "./components/slides/Slide16EventValueAddedCourse";
import Slide17EventIndustrialVisit                    from "./components/slides/Slide17EventIndustrialVisit";
import Slide18EventSportsMeet                         from "./components/slides/Slide18EventSportsMeet";
import Slide19EventInternationalPaperPresentation     from "./components/slides/Slide19EventInternationalPaperPresentation";
import Slide20EventCodingBootcamp                     from "./components/slides/Slide20EventCodingBootcamp";
import Slide21EventAnnualTechFest                     from "./components/slides/Slide21EventAnnualTechFest";
import Slide22EventOutreachActivity                   from "./components/slides/Slide22EventOutreachActivity";
import Slide23EventExtensionActivity                   from "./components/slides/Slide23EventExtensionActivity";
import Slide24EventCRT                                from "./components/slides/Slide24EventCRT";
import Slide25EventCET                                from "./components/slides/Slide25EventCET";
import Slide26EventMediaCoverage                      from "./components/slides/Slide26EventMediaCoverage";


// ── Closing slides ───────────────────────────────────────────────────────────

// import Slide27Future   from "./components/slides/Slide27Future";
import Slide28Admission   from "./components/slides/Slide28Admission";
import Slide29WhyChoose   from "./components/slides/Slide29WhyChoose";
import Slide30ThankYou    from "./components/slides/Slide30ThankYou";
import Slide31YaadeinEvent    from "./components/slides/Slide31YaadeinEvent";

import { SLIDE_TITLES, TOTAL_SLIDES } from "./data/slidesData";

const SLIDES = [
  Slide01Hero, Slide02About, Slide03Department, Slide04Courses,
  Slide05Labs, Slide06Faculty, Slide07Achievements, Slide08Toppers, Slide09Magazine, Slide10Placements,
  Slide11Internships, Slide12Projects, Slide13Research, Slide14Events,
  Slide15EventGuestLecture, Slide16EventValueAddedCourse,
  Slide17EventIndustrialVisit, Slide18EventSportsMeet, Slide19EventInternationalPaperPresentation, Slide20EventCodingBootcamp, Slide21EventAnnualTechFest, Slide22EventOutreachActivity, Slide23EventExtensionActivity, Slide24EventCRT, Slide25EventCET, Slide26EventMediaCoverage, Slide31YaadeinEvent,
  // Slide27Future,
  Slide28Admission, Slide29WhyChoose, Slide30ThankYou,
];

const SLIDE_NAMES = Object.values(SLIDE_TITLES);
const AUTOPLAY_DELAY = 6000;

// ── Icons ────────────────────────────────────────────────────────────────────
const IconMenu       = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="17" y2="6"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="14" x2="17" y2="14"/></svg>);
const IconPlay       = () => (<svg viewBox="0 0 20 20" fill="currentColor"><path d="M6 4l12 6-12 6V4z"/></svg>);
const IconPause      = () => (<svg viewBox="0 0 20 20" fill="currentColor"><rect x="4" y="3" width="4" height="14" rx="1"/><rect x="12" y="3" width="4" height="14" rx="1"/></svg>);
const IconSun        = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="10" cy="10" r="3.5"/><line x1="10" y1="1" x2="10" y2="3"/><line x1="10" y1="17" x2="10" y2="19"/><line x1="1" y1="10" x2="3" y2="10"/><line x1="17" y1="10" x2="19" y2="10"/><line x1="3.5" y1="3.5" x2="5" y2="5"/><line x1="15" y1="15" x2="16.5" y2="16.5"/><line x1="3.5" y1="16.5" x2="5" y2="15"/><line x1="15" y1="5" x2="16.5" y2="3.5"/></svg>);
const IconMoon       = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 13A7 7 0 1 1 7 3a5.5 5.5 0 0 0 10 10z"/></svg>);
const IconGrid       = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="12" y="2" width="6" height="6" rx="1"/><rect x="2" y="12" width="6" height="6" rx="1"/><rect x="12" y="12" width="6" height="6" rx="1"/></svg>);
const IconFullscreen = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4"/></svg>);
const IconClose      = () => (<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="4" x2="16" y2="16"/><line x1="16" y1="4" x2="4" y2="16"/></svg>);

// ── Toast ────────────────────────────────────────────────────────────────────
function Toast({ message, visible }) {
  return <div className={`toast ${visible ? "show" : ""}`} role="status">{message}</div>;
}

// ── Category label helper for menu ───────────────────────────────────────────
const EVENT_SLIDE_IDS = [
  "event-guest-lecture","event-value-added-course",
  "event-industrial-visit","event-sports-meet","event-research-paper",
];

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const swiperRef     = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying,   setIsPlaying]   = useState(true);
  const [darkMode,    setDarkMode]    = useState(true);
  const [showMenu,    setShowMenu]    = useState(false);
  const [showThumb,   setShowThumb]   = useState(false);
  const [toast,       setToast]       = useState({ msg: "", show: false });

  const progress = ((activeIndex + 1) / TOTAL_SLIDES) * 100;

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  const showToast = useCallback((msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast({ msg: "", show: false }), 2200);
  }, []);

  const pausePlay  = useCallback(() => { swiperRef.current?.autoplay?.stop();  setIsPlaying(false); }, []);
  const resumePlay = useCallback(() => { swiperRef.current?.autoplay?.start(); setIsPlaying(true);  }, []);
  const togglePlay = useCallback(() => {
    if (isPlaying) { pausePlay();  showToast("⏸ Auto-play paused"); }
    else           { resumePlay(); showToast("▶ Auto-play resumed"); }
  }, [isPlaying, pausePlay, resumePlay, showToast]);

  const toggleDark = useCallback(() => {
    setDarkMode(d => { showToast(!d ? "🌙 Dark mode" : "☀️ Light mode"); return !d; });
  }, [showToast]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) { document.documentElement.requestFullscreen?.(); showToast("⛶ Fullscreen — Esc to exit"); }
    else document.exitFullscreen?.();
  }, [showToast]);

  const goToSlide = useCallback((index) => {
    swiperRef.current?.slideTo(index);
    setShowMenu(false); setShowThumb(false); pausePlay();
  }, [pausePlay]);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Escape")                    { setShowMenu(false); setShowThumb(false); }
      if (e.key === " ")                         { e.preventDefault(); togglePlay(); }
      if (e.key === "f" || e.key === "F")        toggleFullscreen();
      if (e.key === "d" || e.key === "D")        toggleDark();
      if (e.key === "m" || e.key === "M")        setShowMenu(v => !v);
      if (e.key === "t" || e.key === "T")        setShowThumb(v => !v);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [togglePlay, toggleFullscreen, toggleDark]);

  const slideIds   = Object.keys(SLIDE_TITLES);
  const slideNames = Object.values(SLIDE_TITLES);

  return (
    <>
      {/* ── Progress bar ── */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* ── Slide counter ── */}
      <div className="slide-counter">
        {String(activeIndex + 1).padStart(2, "0")} / {String(TOTAL_SLIDES).padStart(2, "0")}
      </div>

      {/* ── HUD buttons ── */}
      <div style={{ position: "fixed", top: 12, left: 16, zIndex: 9999, display: "flex", gap: 8 }}>
        <button className="hud-btn" onClick={() => setShowMenu(v => !v)}   title="Menu (M)"><IconMenu /></button>
        <button className="hud-btn" onClick={() => setShowThumb(v => !v)} title="Thumbnails (T)"><IconGrid /></button>
        <button className="hud-btn" onClick={togglePlay}        title={isPlaying ? "Pause (Space)" : "Play (Space)"}>{isPlaying ? <IconPause /> : <IconPlay />}</button>
        <button className="hud-btn" onClick={toggleDark}        title={darkMode ? "Light mode (D)" : "Dark mode (D)"}>{darkMode ? <IconSun /> : <IconMoon />}</button>
        <button className="hud-btn" onClick={toggleFullscreen}  title="Fullscreen (F)"><IconFullscreen /></button>
      </div>

      {/* ── Thumbnail strip ── */}
      {showThumb && (
        <div className="thumb-strip" role="navigation">
          {slideNames.map((name, i) => (
            <button
              key={i}
              className={`thumb-item ${i === activeIndex ? "active" : ""} ${EVENT_SLIDE_IDS.includes(slideIds[i]) ? "thumb-event" : ""}`}
              onClick={() => goToSlide(i)}
              title={name}
            >
              <span className="thumb-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="thumb-label">{name}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Menu overlay ── */}
      {showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)} role="dialog" aria-modal="true">
          <div className="glass-card-light menu-panel" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 18, fontWeight: 700, color: "var(--text-primary)" }}>
                Slides
              </p>
              <button className="hud-btn" onClick={() => setShowMenu(false)}><IconClose /></button>
            </div>

            {slideNames.map((name, i) => {
              const isEvent = EVENT_SLIDE_IDS.includes(slideIds[i]);
              return (
                <button
                  key={i}
                  className={`menu-item ${i === activeIndex ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  style={isEvent ? { paddingLeft: 28 } : {}}
                >
                  {isEvent && (
                    <span style={{ fontSize: 8, color: "#f5c842", marginRight: 4, opacity: 0.6 }}>●</span>
                  )}
                  <span className="menu-num">{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: isEvent ? 12 : 13 }}>{name}</span>
                  {i === activeIndex && (
                    <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "#f5c842", flexShrink: 0 }} />
                  )}
                </button>
              );
            })}

            {/* Keyboard shortcuts */}
            <div style={{ marginTop: 16, padding: "12px 14px", borderRadius: 10, background: "var(--row-bg)", borderTop: "1px solid var(--glass-border)" }}>
              <p style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                Keyboard Shortcuts
              </p>
              {[["← →","Navigate"],["Space","Play / Pause"],["M","Menu"],["T","Thumbnails"],["D","Dark / Light"],["F","Fullscreen"],["Esc","Close"]].map(([key, desc]) => (
                <div key={key} style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, color: "#f5c842", background: "rgba(245,200,66,0.1)", padding: "1px 7px", borderRadius: 4 }}>{key}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Toast message={toast.msg} visible={toast.show} />

      {/* ── Swiper ── */}
      <Swiper
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: ["-18%", 0, -400], opacity: 0 },
          next: { translate: ["100%", 0, 0], opacity: 0 },
        }}
        speed={750}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: AUTOPLAY_DELAY, disableOnInteraction: false, pauseOnMouseEnter: true }}
        onSwiper={sw => { swiperRef.current = sw; }}
        onSlideChange={sw => setActiveIndex(sw.activeIndex)}
        onTouchStart={pausePlay}
        className="w-full h-full"
      >
        {SLIDES.map((Slide, i) => (
          <SwiperSlide key={i}>
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
