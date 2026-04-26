import project1 from "../assets/projects/image-1.jpg"
import project2 from "../assets/projects/image-2.jpg"
import project3 from "../assets/projects/image-3.jpg"
import project4 from "../assets/projects/image-4.jpg"
import project5 from "../assets/projects/image-5.jpg"
import project6 from "../assets/projects/image-6.jpg"

export const studentProjects = [
  {
    id: 1,
    name: "UniConnect",
    type: "Android App",
    batch: "MCA 2023",
    tech: ["Java", "Firebase", "Android Studio"],
    description: "A student connection platform enabling campus communication, event updates & alumni networking.",
    image: project1,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    name: "Payment Gateway Web App",
    type: "Web Application",
    batch: "MCA 2024",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Secure online payment gateway with multi-currency support, transaction history & fraud detection features.",
    image: project2,
    color: "from-amber-400 to-orange-600",
  },
  {
    id: 3,
    name: "E-Learning Web Application",
    type: "Web Application",
    batch: "MCA 2024",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Interactive online learning platform with course management, progress tracking & certification.",
    image: project3,
    color: "from-green-400 to-teal-600",
  },
  {
    id: 4,
    name: "AI Powered Mock Interview Platform",
    type: "AI Tool",
    batch: "MCA 2024",
    tech: ["Python", "TensorFlow", "Natural Language Processing"],
    description: "AI-driven mock interview platform providing real-time feedback on answers, body language & confidence.",
    image: project4,
    color: "from-purple-400 to-indigo-600",
  },
  {
    id: 5,
    name: "Decoding Spatial Intelligrence:  Extraction And Analysis From Google Maps",
    type: "Data Analysis",
    batch: "MCA 2024",
    tech: ["Python", "Pandas", "Matplotlib"],
    description: "Analyzing spatial data from Google Maps to identify patterns in urban development, traffic flow & demographic distribution.",
    image: project5,
    color: "from-rose-400 to-pink-600",
  },
  {
    id: 6,
    name: "Cardio-Matrix Patient Monitoring and Predictive Response System",
    type: "Machine Learning",
    batch: "MCA 2023",
    tech: ["Python", "Scikit-learn", "Keras", "MYSQL", "KNN Algorithm"],
    description: "A machine learning-based system for real-time patient monitoring and predictive response in cardiac care, utilizing KNN algorithm for accurate health predictions.",
    image: project6,
    color: "from-sky-400 to-blue-600",
  },
];

export const researchPapers = [
  {
    title: "AI-Based Crop Disease Detection Using CNN",
    authors: "Prof. Minal Solanki et al.",
    conference: "National Conference on AI & ML, 2024",
    type: "Research Paper",
    image: "https://images.unsplash.com/photo-1532094349884-543559196d87?w=600&q=80",
  },
  {
    title: "Blockchain for Secure Academic Records",
    authors: "Prof. Kunal Chimurkar, Students MCA 2024",
    conference: "Int. Journal of Computer Science, 2024",
    type: "Journal Publication",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
  },
  {
    title: "Smart Campus Management using IoT",
    authors: "Prof. Ashwini Wakodikar et al.",
    conference: "State Level Seminar, RTMNU 2023",
    type: "Seminar Paper",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
];
