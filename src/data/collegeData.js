// collegeData.js — Core college & department information
import images from "../assets/kdk-images.jpg";
import hod from "../assets/faculty/Anup.jpeg";
import clgImage from "../assets/images.jpg";

export const college = {
  name: "KDK College of Engineering",
  shortName: "KDKCE",
  established: "1984",
  tagline: "Empowering Minds. Building Digital Futures.",
  location: "Nandanvan, Nagpur - 440009, Maharashtra",
  website: "www.kdkce.edu.in",
  phone: "+91 80550 21617",
  email: "info@kdkce.edu.in",
  affiliated: "RTMNU, Nagpur",
  autonomousYear: "2024",
  approvals: ["AICTE Approved", "Affiliated to RTMNU", "Autonomous Institute"],
  heroImage: images,
  aboutImage: images,
};

export const aboutData = {
  title: "About the Department",
  subtitle: "Shaping tomorrow's technology leaders since 1984.",

  description:
    "The Department of Computer Science & Application at KDK College of Engineering has been a center of academic excellence, producing skilled professionals who lead in technology, research, and entrepreneurship.",

  highlights: [
    {
      title: "RTMNU Affiliated",
      desc: "Rashtrasant Tukadoji Maharaj Nagpur University",
    },
    {
      title: "NAAC Accredited",
      desc: "Quality assured curriculum and infrastructure",
    },
    {
      title: "NBA Accredited",
      desc: "Industry-relevant programs with strong outcomes",
    },
    {
      title: "Grade A By Govt. of Maharashtra",
      desc: "Recognized for excellence in education and infrastructure",
    },
    {
      title: "Industry Partnerships",
      desc: "50+ industry collaborations for placements & internships",
    },
    {
      title: "Research Active",
      desc: "87+ publications in IEEE, Springer, Elsevier journals",
    },
  ],

  stats: {
    years: "40+",
    label: "Years of Trust",
  },

  image: clgImage,
};

export const department = {
  name: "Department of Computer Applications",
  hod: {
    name: "Dr. / Prof. Anup Bhange",
    qualification: "Ph.D. | M.Tech | MCA",
    experience: "15 Years",
    specialization: "Computer Science & Applications",
    image: hod,
  },
  courses: ["BCA", "MCA"],
  established: "2023",
  autonomousYear: "2024",
};

export const collegeVision =
  "To be a premier institution nurturing innovative, skilled, and ethical technology leaders for society and industry.";

export const collegeMission = [
  "Quality technical & professional education",
  "Industry-ready graduates with strong values",
  "Research, innovation & lifelong learning",
  "Holistic development of every student",
];

export const campusHighlights = [
  { icon: "🏛️", label: "Modern Campus", desc: "Spacious modern campus infrastructure" },
  { icon: "💻", label: "Computer Labs", desc: "Well-equipped computer labs" },
  { icon: "📚", label: "Central Library", desc: "Digital resources & journals" },
  { icon: "⚽", label: "Sports Facilities", desc: "Sports & extracurricular facilities" },
];
