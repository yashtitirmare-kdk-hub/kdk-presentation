# KDK College — Department of Computer Applications
## PPT-Style Presentation Website (React + Vite)

---

### 🚀 Quick Start

```bash
# 1. Unzip the project folder
# 2. Install dependencies
npm install

# 3. Run development server  (opens at http://localhost:5173)
npm run dev

# 4. Build for production
npm run build
npm run preview   # preview the production build
```

---

### 🎮 Controls

| Action | Control |
|---|---|
| Next / Previous slide | `← →` Arrow keys or on-screen buttons |
| Jump to slide | `M` or ☰ Menu → click any slide |
| Thumbnail strip | `T` key or grid icon |
| Toggle auto-play | `Space` or ⏸ play button |
| Dark / Light mode | `D` or ☀️/🌙 button |
| Fullscreen | `F` key or ⛶ button |
| Close overlays | `Esc` |

---

### 📁 Project Structure

```
kdk-presentation/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                    ← React entry point
    ├── App.jsx                     ← Swiper shell + all HUD controls
    ├── index.css                   ← Global styles, CSS variables, dark/light mode
    │
    ├── data/                       ← ALL content lives here (never hardcoded)
    │   ├── slidesData.js           ← Slide IDs, titles, total count
    │   ├── collegeData.js          ← College name, vision, mission, contact
    │   ├── coursesData.js          ← BCA & MCA course details
    │   └── achievementsData.js     ← Faculty, labs, toppers, placements, events, goals
    │
    └── components/
        ├── SlideWrapper.jsx        ← Shared layout, animation variants, BgOrbs, OrbitalRings
        ├── AnimatedCounter.jsx     ← Count-up number animation component
        └── slides/
            ├── Slide01Hero.jsx
            ├── Slide02About.jsx
            ├── Slide03Department.jsx
            ├── Slide04Courses.jsx
            ├── Slide05Labs.jsx
            ├── Slide06Faculty.jsx
            ├── Slide07Achievements.jsx
            ├── Slide08Placements.jsx   ← Uses AnimatedCounter
            ├── Slide09Events.jsx
            ├── Slide10Magazine.jsx
            ├── Slide11Future.jsx
            ├── Slide12WhyChoose.jsx
            ├── Slide13Admission.jsx
            └── Slide14ThankYou.jsx
```

---

### ✏️ Customizing Content

**All content is data-driven — edit only the `/src/data/` files:**

| File | What to edit |
|---|---|
| `collegeData.js` | College name, location, phone, email, vision, mission |
| `coursesData.js` | BCA/MCA duration, eligibility, curriculum items |
| `achievementsData.js` | Faculty names, labs, toppers, companies, events, future goals |
| `slidesData.js` | Slide order, slide titles shown in menu |

**To add a new slide:**
1. Create `Slide15NewTopic.jsx` in `components/slides/`
2. Import it in `App.jsx` and add to the `SLIDES` array
3. Add its entry to `SLIDE_IDS` and `SLIDE_TITLES` in `slidesData.js`

---

### ✨ Features

| Feature | Detail |
|---|---|
| 14 full-screen slides | Horizontal PPT-style layout |
| Swiper.js | EffectCreative transitions (3D slide) |
| Auto-play | Every 6 seconds, pauses on hover/touch |
| Progress bar | Shimmer gradient across the top |
| Slide counter | `01 / 14` in top-right corner |
| Pagination dots | Expandable active dot at bottom |
| Slide menu | Full slide list with keyboard shortcut reference |
| Thumbnail strip | Compact visual slide navigator |
| Dark / Light mode | CSS variable-driven, instant toggle |
| Fullscreen | Native browser fullscreen API |
| Animated counters | Count-up animation for stats (Slide 8) |
| Framer Motion | Stagger / fade-up animations on every slide |
| Keyboard navigation | Full keyboard shortcut support |
| Glassmorphism | Backdrop-blur cards throughout |
| CSS Variables | Entire theme adapts to dark/light via `:root` |

---

### 🎨 Design System

- **Background**: Deep navy `#0a0f2e` (dark) / Lavender `#eef2ff` (light)
- **Gold accent**: `#f5c842` — headlines, stats, active indicators
- **Cyan accent**: `#22d3ee` — labels, slide tags, links
- **Glass cards**: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(16px)`
- **Typography**: Playfair Display (headings) · DM Sans (body) · JetBrains Mono (numbers)

---

### 🛠 Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Swiper.js 11
- Framer Motion 11
- Lucide React (icons)
- Google Fonts

---

*KDK College of Engineering · Department of Computer Applications · Nagpur*
