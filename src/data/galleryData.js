import computerLabImage from "../assets/labs/IMG_1480.jpg";
import smartClassroomImage from "../assets/labs/IMG_1483.jpg";

//
import GuestLectureImage from "../assets/events/GuestLecture-1.jpeg";
import ValueAddedCourseImage from "../assets/events/ValueAddedCourse-1.jpeg";
import IndustryVisitImage from "../assets/events/IndustrialVisit-1.jpeg";
import SportsMeetImage from "../assets/events/sportsMeet-0.jpeg";
import InternationalPaperPresentationImage from "../assets/events/internationalConference-0.jpeg";
import CodingBootcampImage from "../assets/events/codingBootcamp-1.jpeg";
import AnnualTechFestImage from "../assets/events/annualTechFest.jpeg";
import OutreachActivityImage from "../assets/events/outReach-1.jpeg";
import MediaCoverageImage from "../assets/events/mediaCoverage-1.jpg";

const internshipDataImages = Object.values(
  import.meta.glob("../assets/events/internship/*.jpeg", { eager: true })
).map((img) => img.default);

export const labImages = [
  {
    title: "Computer Lab",
    desc: "100+ modern workstations with the latest hardware, software, and OS for all practicals.",
    points: [
      "100+ Dell / HP workstations",
      "High-speed processors & SSDs",
      "Dedicated batch-wise lab sessions",
    ],
    image: computerLabImage,
    icon: "💻",
    color: "from-cyan-500/20 to-blue-600/10",
    border: "border-cyan-500/30",
  },
  {
    title: "Smart Classrooms",
    desc: "Interactive digital boards, projectors, and AC-equipped rooms for an engaging learning environment.",
    points: [
      "80-inch interactive smart boards",
      "Projector & audio system",
      "AC-equipped, 60-seat capacity",
    ],
    image: smartClassroomImage,
    icon: "🎓",
    color: "from-amber-400/20 to-orange-600/10",
    border: "border-amber-500/30",
  },
  {
    title: "Central Library",
    desc: "1000+ technical books, digital journals, and a quiet reading space for focused study.",
    points: [
      "1000+ technical reference books",
      "DELNET & e-journal access",
      "Quiet reading & research zone",
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    icon: "📚",
    color: "from-purple-500/20 to-indigo-600/10",
    border: "border-purple-500/30",
  },
  {
    title: "High-Speed Internet & Wi-Fi",
    desc: "Campus-wide broadband and secured Wi-Fi available 24×7 for students and faculty.",
    points: [
      "100 Mbps broadband campus-wide",
      "Secured student Wi-Fi network",
      "24×7 connectivity guaranteed",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    icon: "🌐",
    color: "from-green-500/20 to-teal-600/10",
    border: "border-green-500/30",
  },
  // {
  //   title: "Server & Cloud Lab",
  //   desc: "Dedicated research servers with virtualization tools and cloud computing practice environments.",
  //   points: [
  //     "VMware & VirtualBox setup",
  //     "AWS & Azure sandbox access",
  //     "Project & research server space",
  //   ],
  //   image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
  //   icon: "☁️",
  //   color: "from-blue-500/20 to-sky-600/10",
  //   border: "border-blue-500/30",
  // },
  // {
  //   title: "Innovation Hub",
  //   desc: "Open collaborative workspace built for hackathons, group projects, and startup ideation sessions.",
  //   points: [
  //     "Open coding & collaboration zone",
  //     "Hackathon-ready environment",
  //     "Pre-installed IDE & dev tools",
  //   ],
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  //   icon: "🚀",
  //   color: "from-rose-500/20 to-pink-600/10",
  //   border: "border-rose-500/30",
  // },
];



// ── Achievements ─────────────────────────────────────────────────────────────
export const achievementImages = [
  {
    year: "2023–24",
    title: "University Rank Holders",
    desc: "Students secured top ranks in RTMNU examinations",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80",
    medals: "Gold & Silver Medals",
  },
  {
    year: "2024–25",
    title: "State Level Hackathon",
    desc: "Team secured 1st position in State-Level Hackathon",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    medals: "1st Place",
  },
  {
    year: "2024–25",
    title: "Research Paper Presentations",
    desc: "Faculty & students presented research at national conferences",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    medals: "Best Paper Award",
  },
];

// ── Internships ───────────────────────────────────────────────────────────────
export const internshipImages = internshipDataImages;

// ── Events ────────────────────────────────────────────────────────────────────
export const eventImages = [
  { title: "Guest Lecture",     image: GuestLectureImage, category: "Seminar", slideId: "guest-lecture" },
  { title: "Value Added Course",   image: ValueAddedCourseImage, category: "Workshop", slideId: "value-added-course" },
  { title: "Industry Visit",    image: IndustryVisitImage, category: "Industrial", slideId: "industrial-visit" },
  { title: "Sports Meet",    image: SportsMeetImage, category: "Industrial", slideId: "sports-meet" },
  { title: "International Paper Presentation",    image: InternationalPaperPresentationImage, category: "Media", slideId: "international-paper-presentation" },
  { title: "Coding Bootcamp",   image: CodingBootcampImage, category: "Workshop", slideId: "coding-bootcamp" },
  { title: "Annual TechFest",   image: AnnualTechFestImage, category: "Technical", slideId: "annual-techfest" },
  { title: "Outreach Activity", image: OutreachActivityImage, category: "Social", slideId: "outreach-activity" },
  { title: "Media Coverage",    image: MediaCoverageImage, category: "Media", slideId: "media-coverage" },
];

// ── Research ──────────────────────────────────────────────────────────────────
export const researchImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  "https://images.unsplash.com/photo-1532094349884-543559196d87?w=600&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
];
