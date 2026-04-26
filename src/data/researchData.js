import paymentGatewayImage from "../assets/research/paymentGatewayImage.jpg";
import aiPowerMockInterviewImage from "../assets/research/aiPowerMockInterview.jpg";
import paper3Image from "../assets/research/paper3Image.jpg";
import paper4Image from "../assets/research/paper4Image.jpg";

export const researchData = {
  title: "Research & Publications",
  subtitle: "Advancing knowledge through impactful faculty & student research",

  // ── 3 animated counter stats (no Patents) ─────────────────────────────────
  stats: [
    { value: 100, suffix: "+", label: "Total Publications", icon: "📄" },
    { value: 80, suffix: "+", label: "Journal Articles",   icon: "📚" },
    { value: 35, suffix: "+", label: "Conference Papers",  icon: "🎓" },
  ],

  // ── Research area highlight cards (left-border colour = Internship pattern) ─
  highlights: [
    {
      icon: "🤖",
      title: "Artificial Intelligence & ML",
      desc: "14 publications in deep learning, computer vision, NLP & predictive analytics",
      color: "border-cyan-400",
    },
    {
      icon: "🔗",
      title: "Blockchain Technology",
      desc: "8 journal articles on decentralised systems, smart contracts & data security",
      color: "border-amber-400",
    },
    {
      icon: "☁️",
      title: "Cloud Computing & IoT",
      desc: "12 conference papers on smart systems, edge computing & wireless networks",
      color: "border-purple-400",
    },
    {
      icon: "📊",
      title: "Data Science & Analytics",
      desc: "13 research works in big data, statistical modelling & business intelligence",
      color: "border-green-400",
    },
  ],

  // ── Publication process steps ─────────────────────────────────────────────
  process: ["Identify Topic", "Literature Review", "Paper Writing", "Peer Review", "Publication"],

  // ── Best / Featured papers ────────────────────────────────────────────────
  papers: [
    {
      tag: "IJARSCT · 2025",
      title: "Design and Development to secure payment transaction over the network using Hybrid Cryptography",
      authors: "Dr. Anup Bhange | Yash Titirmare | Gaurav Kapse",
      type: "Journal Publication",
      DOI: "10.48175/IJARSCT-26039",
      typeColor: "border-cyan-400",
      image: paymentGatewayImage,
      link: "https://ijarsct.co.in/Paper26039.pdf",
    },
    {
      tag: "IJARSCT · 2025",
      title: "AI-Powered Platform for Real-Time Mock Interviews and Personalized Feedback",
      authors: "Dr. Anup Bhange | Prajwal R. Bobade  | Saurabh V . Shewalkar",
      type: "Journal Publication",
      DOI: "10.48175/IJARSCT-25883",
      typeColor: "border-cyan-400",
      image: aiPowerMockInterviewImage,
      link: "https://ijarsct.co.in/Paper25883.pdf",
    },
    {
      tag: "IJARSCT · 2025",
      title: "Decoding Spatial Intelligrence:  Extraction And Analysis From Google Maps",
      authors: "Prof. Ahwini Wakodikar | Yash Baksare  | Ganak Zurmure",
      type: "Journal Publication",
      DOI: "10.48175/IJARSCT-25842",
      typeColor: "border-cyan-400",
      image: paper3Image,
      link: "https://ijarsct.co.in/Paper25883.pdf",
    },
    {
      tag: "IJARSCT · 2025",
      title: "FakeDetector:- A Review of Image Forgery DetectionTechniques using Deep Learning",
      authors: "Prof. Minal Solanki | Ajay Barve  | Sandip Gawali",
      type: "Journal Publication",
      DOI: "10.48175/IJARSCT-25858",
      typeColor: "border-cyan-400",
      image: paper4Image,
      link: "https://ijarsct.co.in/A25858.pdf",
    },
    
  ],
};

// Legacy named exports kept for any other slide still importing them
export const researchStats  = researchData.stats;
export const researchAreas  = researchData.highlights;
export const researchPapers = researchData.papers;
