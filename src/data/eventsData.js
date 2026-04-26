const guestImages = Object.values(
  import.meta.glob("../assets/events/guestLecture/*.jpeg", { eager: true }),
).map((img) => img.default);

const valueAddedCourseImages = Object.values(
  import.meta.glob("../assets/events/valueAddedCourse/*.jpeg", { eager: true }),
).map((img) => img.default);

const industrialVisitImages = Object.values(
  import.meta.glob("../assets/events/industrialVisit/*.jpeg", { eager: true }),
).map((img) => img.default);

const sportsMeetImages = Object.values(
  import.meta.glob("../assets/events/sportsMeet/*.jpeg", { eager: true }),
).map((img) => img.default);

const internationalImages = Object.values(
  import.meta.glob("../assets/events/internationalConference/*.jpeg", {
    eager: true,
  }),
).map((img) => img.default);

const codingBootcampImages = Object.values(
  import.meta.glob("../assets/events/codingBootcamp/*.jpeg", { eager: true }),
).map((img) => img.default);

const outreachImages = Object.values(
  import.meta.glob("../assets/events/outReachActivity/*.jpeg", { eager: true }),
).map((img) => img.default);

const annualTechFestImages = Object.values(
  import.meta.glob("../assets/events/annualTechFest/*.jpeg", { eager: true }),
).map((img) => img.default);

const mediaCoverageImages = Object.values(
  import.meta.glob("../assets/events/mediaCoverage/*.jpg", { eager: true }),
).map((img) => img.default);

const crtProgramImages = Object.values(
  import.meta.glob("../assets/events/crtProgram/*.jpeg", { eager: true }),
).map((img) => img.default);

const cetProgramImages = Object.values(
  import.meta.glob("../assets/events/cetProgram/*.jpeg", { eager: true }),
).map((img) => img.default);

const extensionProgramImages = Object.values(
  import.meta.glob("../assets/events/extensionActivity/*.jpeg", { eager: true }),
).map((img) => img.default);

const yaadeinEventImages = Object.values(
  import.meta.glob("../assets/events/yaadeinEvent/*.jpeg", { eager: true }),
).map((img) => img.default);

export const eventsSlides = [
  {
    id: 1,
    slideId: "guest-lecture",
    title: "Guest Lecture",
    tagline: "Industry Experts. Real Insights.",
    date: "Academic Year 2024–25",
    accentColor: "#22d3ee", // cyan
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-blue-600/10",
    borderColor: "border-cyan-500/35",
    iconBg: "bg-cyan-500/20",
    icon: "🎤",
    description:
      "Eminent industry professionals and academicians are regularly invited to deliver expert talks, sharing their hands-on experience in software development, AI, cloud computing, and emerging technologies.",
    highlights: [
      "Topics: AI/ML, Cloud Computing, Cybersecurity & Full Stack",
      "Speakers from TCS, Infosys, CDAC & leading startups",
      "Interactive Q&A sessions with live demonstrations",
      "Students gain real-world perspective beyond textbooks",
    ],
    outcome:
      "Students develop industry awareness, communication skills, and clarity about career paths.",
    images: guestImages,
  },
  {
    id: 2,
    slideId: "value-added-course",
    title: "Value Added Course",
    tagline: "Beyond Syllabus. Beyond Limits.",
    date: "Every Semester",
    accentColor: "#f5c842", // gold
    gradientFrom: "from-amber-400/20",
    gradientTo: "to-orange-600/10",
    borderColor: "border-amber-400/35",
    iconBg: "bg-amber-400/20",
    icon: "📜",
    description:
      "Short-term certification and skill-enhancement programs run alongside regular curriculum, focusing on industry-relevant tools and technologies to make students job-ready from day one.",
    highlights: [
      "Courses: Cybersecurity, Web Development, Green Computing with Data Analytics, Expert Lectures, and more",
      "Duration: 20–40 hours per course, certificate on completion",
      "Conducted by expert faculty & industry trainers",
      "Hands-on projects and practical assessments included",
    ],
    outcome:
      "Students earn industry-recognized certificates and gain practical skills valued by recruiters.",
    images: valueAddedCourseImages,
  },
  {
    id: 3,
    slideId: "industrial-visit",
    title: "Industrial Visit",
    tagline: "See the Industry. Feel the Work Culture.",
    date: "Annual — Odd Semester",
    accentColor: "#a78bfa", // violet
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-indigo-600/10",
    borderColor: "border-violet-500/35",
    iconBg: "bg-violet-500/20",
    icon: "🏭",
    description:
      "Students are taken on organized visits to IT companies, data centers, and tech parks to witness real-world software development environments and understand how large-scale systems operate.",
    highlights: [
      "Visits to: IT Network, Eduvercity, Nagpur & Pune",
      "Formal MOU signed with Eduvercity for academic collaboration",
      "Students observe live project workflows & agile sprints",
      "Interaction with working professionals & HR teams",
      "Exposure to DevOps labs, testing floors & server rooms",
    ],
    outcome:
      "Students gain clarity on workplace culture, professional expectations, and industry practices.",
    images: industrialVisitImages,
  },
  {
    id: 4,
    slideId: "sports-meet",
    title: "Sports Meet",
    tagline: "Play Hard. Stay Sharp.",
    date: "Annual — Even Semester",
    accentColor: "#34d399", // emerald
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-teal-600/10",
    borderColor: "border-emerald-500/35",
    iconBg: "bg-emerald-500/20",
    icon: "🏆",
    description:
      "The annual sports meet brings together BCA & MCA students to compete in indoor and outdoor sporting events, building team spirit, physical fitness, and a healthy competitive mindset.",
    highlights: [
      "Events: Cricket, Badminton, Chess, Carrom, Table Tennis",
      "Inter-batch tournaments & prize distribution ceremony",
      "Encourages teamwork, leadership, and sportsmanship",
      "Faculty & students compete together in friendly matches",
    ],
    outcome:
      "Students build physical fitness, mental resilience, teamwork, and leadership qualities.",
    images: sportsMeetImages,
  },
  {
    id: 5,
    slideId: "international-paper-presentation",
    title: "International Conference",
    tagline: "Think Globally. Publish Locally.",
    date: "2023–24 & 2024–25",
    accentColor: "#f472b6", // pink
    gradientFrom: "from-pink-500/20",
    gradientTo: "to-rose-600/10",
    borderColor: "border-pink-500/35",
    iconBg: "bg-pink-500/20",
    icon: "🔬",
    description:
      "Faculty and students actively participate in national and international conferences, presenting original research in AI, blockchain, cloud computing, and software engineering.",
    highlights: [
      "Papers presented at International conferences by ETRCEE-2026",
      "Topics: Deep Learning, IoT Security, Smart Systems, NLP",
      "Joint publications by faculty–student research teams",
      "Department hosts annual in-house paper presentation contest",
    ],
    outcome:
      "Students gain research skills, global exposure, and published credentials for higher studies and careers.",
    images: internationalImages,
  },
  {
    id: 6,
    slideId: "coding-bootcamp",
    title: "Coding Bootcamp",
    tagline: "Code. Compile. Conquer.",
    date: "2023–24 & 2024–25",
    accentColor: "#22d3ee", // cyan
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-blue-600/10",
    borderColor: "border-cyan-500/35",
    iconBg: "bg-cyan-500/20",
    icon: "💻",
    description:
      "Intensive coding bootcamps are conducted to prepare students for competitive programming contests, hackathons, and real-world software development challenges.",
    highlights: [
      "Focus on algorithms, data structures, and problem-solving skills",
      "Preparation for coding competitions like ACM ICPC, Google Code Jam",
      "Hands-on coding sessions with real-time feedback from mentors",
      "Encourages logical thinking, creativity, and coding efficiency",
    ],
    outcome:
      "Students develop strong coding skills, competitive programming experience, and confidence to tackle complex software challenges.",
    images: codingBootcampImages,
  },
  {
    id: 7,
    slideId: "annual-techfest",
    title: "Annual TechFest",
    tagline: "Innovate. Compete. Celebrate.",
    date: "2023–24 & 2024–25",
    accentColor: "#8b5cf6", // violet
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-purple-600/10",
    borderColor: "border-violet-500/35",
    iconBg: "bg-violet-500/20",
    icon: "🚀",
    description:
      "The Annual TechFest is a flagship event that showcases the technical prowess of our students through coding competitions, hackathons, project exhibitions, and workshops led by industry experts.",
    highlights: [
      "Coding contests, hackathons, and project exhibitions",
      "Workshops on AI, Cloud, Cybersecurity by industry leaders",
      "Participation from multiple colleges in the region",
      "Platform for students to innovate and network with peers",
    ],
    outcome:
      "Students gain hands-on experience, industry exposure, and opportunities to collaborate on innovative projects.",
    images: annualTechFestImages,
  },
  {
    id: 8,
    slideId: "outreach-activity",
    title: "Outreach Activity",
    tagline: "Tech for All. Community First.",
    date: "2023–24 & 2024–25",
    accentColor: "#10b981", // emerald
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-green-600/10",
    borderColor: "border-emerald-500/35",
    iconBg: "bg-emerald-500/20",
    icon: "🌍",
    description:
      "Our department's outreach activities aim to bring technology to underprivileged communities, fostering digital inclusion and empowering individuals through education and training.",
    highlights: [
      "Tech workshops for local schools and community centers",
      "Digital literacy programs for senior citizens and rural populations",
      "Collaboration with NGOs for social impact projects",
      "Student-led initiatives to bridge the digital divide in Nagpur",
    ],
    outcome:
      "Outreach activities create a positive social impact, enhance our department's community engagement, and provide students with opportunities to apply their skills for the greater good.",
    images: outreachImages,
  },
  {
    id: 9,
    slideId: "extension-activity",
    title: "Extension Activity",
    tagline: "Tech for All. Community First.",
    date: "2024–25 & 2025–26",
    accentColor: "#3b82f6", // blue
    gradientFrom: "from-blue-400/20",
    gradientTo: "to-indigo-600/10",
    borderColor: "border-blue-500/35",
    iconBg: "bg-blue-500/20",
    icon: "🌍",
    description:
      "Our department actively conducts extension activities in schools to enhance students' knowledge, promote practical learning, and create awareness about technology and education beyond the classroom environment.",
    highlights: [
      "Interactive sessions on basic computer knowledge for school students",
    "Awareness programs on digital safety and cyber security",
    "Career guidance sessions for higher education opportunities",
    "Hands-on activities and demonstrations to spark interest in technology",
    ],
    outcome:
      "Extension activities strengthen school-community relationships, improve students' learning exposure, and inspire young minds to explore future opportunities in education and technology.",
    images: extensionProgramImages,
  },
  {
    id: 10,
    slideId: "crt-program",
    title: "CRT Program",
    tagline: "7 Days of Intensive Placement Training",
    date: "2024–25 & 2025–26",
    accentColor: "#3b82f6", // blue
    gradientFrom: "from-blue-400/20",
    gradientTo: "to-indigo-600/10",
    borderColor: "border-blue-500/35",
    iconBg: "bg-blue-500/20",
    icon: "🎯",
    description:
      "The 7-day Campus Recruitment Training (CRT) Program was designed to enhance students' employability skills through focused sessions on aptitude, technical knowledge, communication, and interview preparation.",
    highlights: [
      "7 days of structured training covering Quantitative Aptitude, Logical Reasoning, and Verbal Ability",
      "Hands-on sessions on technical concepts including programming and core subjects",
      "Mock interviews, group discussions, and resume-building workshops",
      "Expert guidance from industry professionals and placement trainers",
    ],
    outcome:
      "The CRT program enhances students' placement prospects and strengthens our department's reputation in the academic and local community.",
    images: crtProgramImages,
  },
  {
    id: 11,
    slideId: "cet-program",
    title: "CET Program (BCA & MCA)",
    tagline: "Seamless Execution of Entrance Examination",
    date: "2025–26",
    accentColor: "#10b981", // green
    gradientFrom: "from-green-400/20",
    gradientTo: "to-emerald-600/10",
    borderColor: "border-green-500/35",
    iconBg: "bg-green-500/20",
    icon: "📝",
    description:
      "The Common Entrance Test (CET) for BCA and MCA programs was successfully conducted at our institute, ensuring a smooth, transparent, and well-organized examination process for aspiring students.",
    highlights: [
      "Efficient planning and execution of CET for BCA and MCA aspirants",
      "Strict adherence to examination guidelines and security protocols",
      "Well-equipped computer labs and infrastructure for online examination",
      "Dedicated support from faculty and staff for candidate assistance",
    ],
    outcome:
      "The successful conduct of CET strengthened the institute’s credibility as a reliable examination center and contributed to attracting quality students for BCA and MCA programs.",
    images: cetProgramImages,
  },
  {
    id: 12,
    slideId: "media-coverage",
    title: "Media Coverage",
    tagline: "Local Impact. Regional Recognition.",
    date: "2024–25 & 2025–26",
    accentColor: "#f59e0b", // yellow
    gradientFrom: "from-yellow-400/20",
    gradientTo: "to-amber-600/10",
    borderColor: "border-yellow-500/35",
    iconBg: "bg-yellow-500/20",
    icon: "📰",
    description:
      "Our department's achievements and events regularly receive coverage in local newspapers, regional news channels, and online media platforms, highlighting our impact on the community and the tech ecosystem.",
    highlights: [
      "Regular features in Nagpur Times, Dainik Bhaskar, Lokmat, Nagpur Post and regional news outlets",
      "Coverage of major events like TechFest, research publications, and student achievements",
      "Interviews with faculty and student leaders on educational initiatives",
      "Showcasing our department's role in shaping the future of tech education",
    ],
    outcome:
      "Media coverage enhances our department's visibility, attracts prospective students, and strengthens our reputation in the academic and local community.",
    images: mediaCoverageImages,
  },
  {
  id: 12,
  slideId: "yaadein-2-event",
  title: "Yaadein 2.0 Farewell & New Beginnings",
  tagline: "Celebrating Memories, Leadership & Creativity",
  date: "2026–27",
  accentColor: "#ec4899",
  gradientFrom: "from-pink-400/20",
  gradientTo: "to-purple-600/10",
  borderColor: "border-pink-500/35",
  iconBg: "bg-pink-500/20",
  icon: "🎓",
  description:
    "The Department of Computer Application at K.D.K. College of Engineering, Nagpur successfully organized 'Yaadein 2.0', a memorable event blending farewell emotions with new beginnings, including the inauguration of the departmental magazine and formation of new student committees and clubs.",
  highlights: [
    "Inauguration of 'Creative Master 3.0' magazine for session 2026–2027",
    "Establishment of new M-SHIV forum committee and CodeMatrix Coding Club",
    "Launch of Cultural Club and Content Club to enhance student engagement",
    "Graced by Hon’ble Chief Guest Rajendra Bhausaheb Mulak (Ex. Minister, Maharashtra)",
    "Presence of esteemed dignitaries including Principal, Vice Principal, HOD, and faculty members",
    "Recognition of newly elected M-SHIV President Miss Aditi Mishra"
  ],
  outcome:
    "The event marked a successful transition by honoring outgoing students while empowering new leadership, fostering creativity, and strengthening student communities for the upcoming academic session.",
  images: yaadeinEventImages
},
];
