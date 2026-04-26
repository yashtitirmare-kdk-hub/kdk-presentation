// ──────────────────────────────────────────────────────────
// achievementsData.js  — Faculty, labs, achievements, placements
// ──────────────────────────────────────────────────────────
import { internshipImages } from "./galleryData";


export const internshipData = {
  title: "Internships",
  subtitle: "Real-world experience that bridges academia & industry",

  stats: [
    {
      value: 85,
      suffix: "+",
      label: "Students Completed Internships",
      icon: "🏆",
    },
    {
      value: 30,
      suffix: "+",
      label: "Partner Companies",
      icon: "🤝",
    },
    {
      value: 100,
      suffix: "%",
      label: "Final Year Coverage",
      icon: "🎓",
    },
  ],

  highlights: [
    {
      icon: "💼",
      title: "Industry Internships",
      desc: "6–8 week internships at IT companies during final semester",
      color: "border-cyan-400",
    },
    {
      icon: "🏛️",
      title: "Government Internships",
      desc: "Students placed in govt. tech departments & PSUs",
      color: "border-amber-400",
    },
    {
      icon: "🚀",
      title: "Startup Internships",
      desc: "Hands-on experience at local startups & tech firms",
      color: "border-purple-400",
    },
    {
      icon: "📜",
      title: "Certifications Earned",
      desc: "AWS, Google Cloud, Oracle & other recognized certifications",
      color: "border-green-400",
    },
  ],

  process: ["Register", "Interview", "On-board", "Project", "Certification"],

  images: internshipImages,
};

export const faculty = [
  {
    name: "Dr. / Prof. Anup Bhange",
    role: "Head of Department",
    qualification: "Ph.D. | M.Tech | MCA",
    experience: "15 yrs",
    avatar: "AB",
    color: "from-gold-400 to-amber-500",
    isHOD: true,
  },
  {
    name: "Prof. Minal Solanki",
    role: "Assistant Professor",
    qualification: "M.Tech / MCA",
    experience: "__ yrs",
    avatar: "MS",
    color: "from-cyan-400 to-blue-500",
    isHOD: false,
  },
  {
    name: "Prof. Ashwini Wakodikar",
    role: "Assistant Professor",
    qualification: "M.Tech / MCA",
    experience: "__ yrs",
    avatar: "AW",
    color: "from-purple-400 to-indigo-500",
    isHOD: false,
  },
  {
    name: "Prof. Kunal Chimurkar",
    role: "Assistant Professor",
    qualification: "M.Tech / MCA",
    experience: "__ yrs",
    avatar: "KC",
    color: "from-green-400 to-teal-500",
    isHOD: false,
  },
  {
    name: "Prof. Leena Raut",
    role: "Assistant Professor",
    qualification: "M.Tech / MCA",
    experience: "__ yrs",
    avatar: "LR",
    color: "from-rose-400 to-pink-500",
    isHOD: false,
  },
];

export const labs = [
  {
    icon: "💻",
    title: "Computer Labs",
    points: ["100+ modern systems", "High-speed processors & latest OS", "Dedicated lab for each batch"],
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/30",
  },
  {
    icon: "🎓",
    title: "Smart Classrooms",
    points: ["Projectors & interactive boards", "Digital learning environment", "AC-equipped rooms"],
    color: "from-gold-400/20 to-amber-600/10",
    border: "border-yellow-500/30",
  },
  {
    icon: "📚",
    title: "Central Library",
    points: ["1000+ technical books", "Online journal & e-library access", "Quiet reading spaces"],
    color: "from-purple-500/20 to-indigo-600/10",
    border: "border-purple-500/30",
  },
  {
    icon: "🌐",
    title: "Internet & WiFi",
    points: ["High-speed broadband campus-wide", "24×7 internet for students", "Secured student network"],
    color: "from-green-500/20 to-teal-600/10",
    border: "border-green-500/30",
  },
  {
    icon: "☁️",
    title: "Cloud & Server Lab",
    points: ["Dedicated project/research servers", "Cloud computing practice env.", "Virtualization tools available"],
    color: "from-blue-500/20 to-sky-600/10",
    border: "border-blue-500/30",
  },
  {
    icon: "🚀",
    title: "Innovation Lab",
    points: ["Open coding & project workspace", "Hackathon-ready environment", "Pre-installed software & tools"],
    color: "from-rose-500/20 to-pink-600/10",
    border: "border-rose-500/30",
  },
];

export const achievements = [
  {
    category: "Hackathons & Coding",
    icon: "⚡",
    items: [
      "State/national level hackathon participation",
      "Winners & finalists at tech competitions",
      "Regular presence in coding contests",
    ],
    color: "from-yellow-400 to-orange-500",
  },
  {
    category: "Academic Excellence",
    icon: "🏅",
    items: [
      "University rank holders (BCA/MCA)",
      "Gold medalists & merit scholars",
      "Best student awards by department",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    category: "Projects & Research",
    icon: "🔬",
    items: [
      "Award-winning final year projects",
      "Research paper presentations",
      "Published in college & university journals",
    ],
    color: "from-purple-400 to-indigo-500",
  },
  {
    category: "App & Tech Development",
    icon: "📱",
    items: [
      "Live apps developed by students",
      "Open-source project contributions",
      "Industry-accepted student products",
    ],
    color: "from-green-400 to-teal-500",
  },
];

export const toppers = [
  { rank: 1, name: "[Topper Name]", course: "MCA", year: "[Year]", achievement: "University Rank #__" },
  { rank: 2, name: "[Topper Name]", course: "BCA", year: "[Year]", achievement: "University Rank #__" },
  { rank: 3, name: "[Topper Name]", course: "MCA", year: "[Year]", achievement: "University Rank #__" },
];

export const placementStats = [
  { value: "85%+", label: "Target Placement" },
  { value: "50+", label: "Recruiting Partners" },
  { value: "100%", label: "Internship Support" },
];

export const companies = [
  "TCS", "Infosys", "Wipro", "HCL", "Cognizant", "Tech Mahindra",
  "Accenture", "Capgemini", "IBM", "Oracle",
];

export const placementSupport = [
  { icon: "📋", text: "Internship assistance in final semesters" },
  { icon: "📝", text: "Resume building & mock interviews" },
  { icon: "🗣️", text: "Soft skills & communication training" },
  { icon: "🏅", text: "Certifications: AWS, Google, Oracle" },
];

export const events = [
  {
    type: "Technical Fests",
    icon: "⚡",
    items: [
      "Annual TechFest with competitions",
      "Workshops on latest tech trends",
      "Project showcase and demonstrations",
    ],
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/30",
  },
  {
    type: "Workshops & Training",
    icon: "🔧",
    items: [
      "Hands-on coding bootcamps",
      "Industry-led skill training sessions",
      "One-day & two-day intensive workshops",
    ],
    color: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/30",
  },
  {
    type: "Guest Lectures & Seminars",
    icon: "🎤",
    items: [
      "Industry experts & alumni speakers",
      "Career guidance seminars",
      "Technology trends & awareness sessions",
    ],
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
  },
  {
    type: "Student Clubs & Events",
    icon: "🎯",
    items: [
      "Coding club & quiz competitions",
      "Group discussions & debates",
      "Cultural & national day celebrations",
    ],
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/30",
  },
];

export const futureGoals = [
  {
    num: "01",
    title: "Research Programs",
    desc: "Establish AI, data science & IoT research lab. Encourage faculty & student publications.",
    icon: "🔬",
    color: "from-cyan-500 to-blue-600",
  },
  {
    num: "02",
    title: "Industry Collaborations",
    desc: "Form MoUs with IT companies for training, internships, and campus placement drives.",
    icon: "🤝",
    color: "from-gold-400 to-amber-500",
  },
  {
    num: "03",
    title: "Skill-Based Learning",
    desc: "Launch certificate programs in Cloud, AI/ML, Cybersecurity & Full Stack Development.",
    icon: "📜",
    color: "from-purple-500 to-indigo-600",
  },
  {
    num: "04",
    title: "Placement Enhancement",
    desc: "Target 90%+ placement via more company tie-ups, alumni network & career counseling.",
    icon: "💼",
    color: "from-green-500 to-teal-600",
  },
  {
    num: "05",
    title: "Startup & Innovation Cell",
    desc: "Launch incubation cell to nurture entrepreneurial ideas and student-built products.",
    icon: "🚀",
    color: "from-rose-500 to-pink-600",
  },
];

export const whyChooseReasons = [
  {
    num: "01",
    title: "Practical Learning",
    desc: "Hands-on labs, real projects, live coding and capstone projects from day one.",
    icon: "🧪",
    color: "from-cyan-400 to-blue-500",
  },
  {
    num: "02",
    title: "Industry Exposure",
    desc: "Guest lectures, industrial visits, internships, certifications from Google & AWS.",
    icon: "🌍",
    color: "from-gold-400 to-amber-500",
  },
  {
    num: "03",
    title: "Placement Support",
    desc: "Dedicated cell, pre-placement training, mock interviews and company tie-ups.",
    icon: "💼",
    color: "from-purple-400 to-indigo-500",
  },
  {
    num: "04",
    title: "Modern Infrastructure",
    desc: "Equipped labs, smart classrooms, high-speed internet and research facilities.",
    icon: "🏛️",
    color: "from-green-400 to-teal-500",
  },
  {
    num: "05",
    title: "Supportive Faculty",
    desc: "Experienced mentors who guide in academics, research, and personal growth.",
    icon: "👨‍🏫",
    color: "from-rose-400 to-pink-500",
  },
  {
    num: "06",
    title: "Bright Career Ahead",
    desc: "Graduates work as developers, analysts, managers and successful entrepreneurs.",
    icon: "⭐",
    color: "from-yellow-400 to-orange-500",
  },
];

export const admissionData = [
  {
    course: "BCA",
    fullName: "Bachelor of Computer Applications",
    duration: "3 Years",
    intake: "120 Seats",
    eligibility: "Any Stream HSC",
    admission: "MAH-BCA CET / Merit Based",
    fee: "As per norms",
    scholarship: "Government available",
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/40",
    icon: "🎓",
    badge: "Undergraduate",
    badgeColor: "bg-cyan-500/20 text-cyan-300",
  },
  {
    course: "MCA",
    fullName: "Master of Computer Applications",
    duration: "2 Years",
    intake: "240 Seats",
    eligibility: "Any Graduate",
    admission: "MAH-MCA CET / Merit Based",
    fee: "As per norms",
    scholarship: "Government available",
    color: "from-gold-400/20 to-amber-600/10",
    border: "border-yellow-500/40",
    icon: "🏆",
    badge: "Postgraduate",
    badgeColor: "bg-yellow-500/20 text-yellow-300",
  },
];

export const departmentGoals = [
  "Deliver quality education aligned with industry needs",
  "Foster innovation, research & problem-solving mindset",
  "Develop technically skilled & job-ready graduates",
  "Build strong industry-academia partnerships",
];

export const magazineHighlights = [
  {
    title: "Department Magazine",
    icon: "📖",
    desc: "Annual magazine showcasing student work, achievements, and campus life.",
    color: "from-gold-400/20 to-amber-500/10",
    border: "border-yellow-500/30",
  },
  {
    title: "Media Coverage",
    icon: "📰",
    desc: "Department activities featured in local newspapers and digital media platforms.",
    color: "from-cyan-400/20 to-blue-500/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Student Development",
    icon: "🌟",
    desc: "Personality development, leadership training, and mentorship programs.",
    color: "from-purple-400/20 to-indigo-500/10",
    border: "border-purple-500/30",
  },
  {
    title: "Alumni Network",
    icon: "🤝",
    desc: "Strong alumni community providing guidance, referrals, and industry connections.",
    color: "from-green-400/20 to-teal-500/10",
    border: "border-green-500/30",
  },
];
