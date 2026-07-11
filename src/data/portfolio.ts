export const profile = {
  initials: "KS",
  name: "Kaustubh Sen",
  shortName: "Kaustubh",
  role: "AI/ML Developer",
  secondaryRole: "Backend Builder",
  location: "Jabalpur, M.P., India",
  email: "kaustubhsen2707@gmail.com",
  phone: "+91 7999842820",
  linkedin: "https://www.linkedin.com/in/kaustubhsenwrks/",
  github: "https://github.com/kstbh07",
  leetcode: "https://leetcode.com/kstbh07/",
  codeforces: "https://codeforces.com/profile/kausubh027",
  leethandle: "kstbh07",
  handle: "kausubh027",
  resume: "/Kaustubh_Sen_Resume.pdf",
  summary:
    "B.Tech student specializing in Artificial Intelligence and Machine Learning with hands-on experience in software development, backend systems, and AI applications. Passionate about building scalable and practical solutions through projects, internships, open-source work, and hackathons.",
};

export const education = [
  {
    title: "B.Tech in Computer Science",
    place: "Gyan Ganga Institute of Technology & Sciences (RGPV)",
    period: "Sep 2024 - Sep 2028",
    details: "Specialization in Artificial Intelligence and Machine Learning. CGPA: 7.82",
  },
  {
    title: "Senior School (XII)",
    place: "Maharishi Vidya Mandir, Narmada Road, Jabalpur",
    period: "2024",
    details: "Central Board of Secondary Education. Percentage: 80%",
  },
  {
    title: "Secondary School (X)",
    place: "Maharishi Vidya Mandir, Narmada Road, Jabalpur",
    period: "2022",
    details: "Central Board of Secondary Education. Percentage: 70.6%",
  },
];

export const experience = [
  {
    role: "AI/ML Developer Intern",
    company: "Cerope",
    period: "Feb 2026 - Apr 2026",
    location: "Remote",
    summary:
      "Worked on backend features for AI-based applications including chatbot integration and analysis modules. Explored different model/API approaches and built working implementations based on project requirements.",
  },
  {
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code, Open Source Connect India",
    period: "Jul 2025 - Nov 2025",
    location: "Remote",
    summary:
      "Contributed to open-source projects, majorly including aeroplane-simulator, with practical feature work and collaborative development across public repositories.",
  },
  {
    role: "B.Tech in CSE-AIML",
    company: "GGITS, RGPV",
    period: "2024 - 2028",
    location: "Jabalpur",
    summary:
      "Currently Pursuing Building a foundation in DSA, operating systems, computer networks, databases, and AI/ML while shipping projects and participating in national-level hackathons.",
  },

];

export const projects = [
  {
    title: "Open Pulse",
    category: "AI-Powered GitHub Dependency Explorer",
    tools: "FastAPI, React, react-three-fiber, Render, Vercel",
    description:
      "An interactive AI 3D dependency-graph explorer for public GitHub repositories. Users enter a repo in owner/name format, the backend fetches package.json data, and the browser renders packages as a navigable 3D graph optimized for 50+ nodes at smooth frame rates.",
    image: "/images/openpulse.png",
    link: "https://open-pulse.onrender.com",
  },
  {
    title: "AlgoVisualizer",
    category: "Sorting and Pathfinding Visualizer",
    tools: "HTML, CSS, JavaScript, Python, Django, MySQL",
    description:
      "A web-based algorithm visualizer for sorting and pathfinding algorithms with interactive controls and real-time execution visualization. Worked across backend integration and deployment.",
    image: "/images/algovisualizer.png",
    link: "https://algovisualizer.pythonanywhere.com/",
  },
  {
    title: "VoteX",
    category: "Blockchain-based Voting System",
    tools: "Next.js · Firebase · Node.js · Blockchain",
    description:
      "A decentralized voting system leveraging blockchain technology for secure and transparent elections. A secure, full-stack voting platform built for small-to-medium scale elections. Features preloaded voter data, admin controls for authentication and election setup, OTP-based identity verification, role-based session control to ensure only authorized users vote, and an extensible admin panel for adding parties and candidates.",
    image: "/images/votex.png",
    link: "https://github.com/kstbh07",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "Java", "SQL"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Django", "Flask", "Git", "GitHub"],
  },
  {
    title: "AI/ML",
    items: ["NLP", "Machine Learning", "spaCy"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Core Subjects",
    items: ["DSA", "Operating Systems", "Computer Networks"],
  },
];

export const achievements = [
  {
    title: "Genethon - 24hrs National Level Hackathon",
    result: "1st Runner-up",
    date: "1st semester",
    location: "GGITS Jabalpur",
    project: "AlgoVisualizer",
    description:
      "Earned 1st Runner-up in my very first national-level hackathon during the first semester.",
    tags: ["Hackathon", "Algorithms", "Teamwork"],
    image: "/images/genethon.jpeg",
  },
  {
    title: "FOSS Hack localhost:Jabalpur 2026",
    result: "2nd Runner-up",
    date: "2026",
    location: "Jabalpur",
    project: "Open Pulse",
    description:
      "Placed 2nd Runner-up at a national-level open-source hackathon organized under India's largest FOSS hackathon initiative.",
    tags: ["Open Source", "FOSS", "National"],
    image: "/images/fosshack.jpeg",
  },
  {
    title: "Pears Global Hackathon",
    result: "Prize Winner",
    date: "2024",
    location: "Virtual",
    project: "SkillSync",
    description:
      "Gained hands-on teamwork experience, built under time pressure, and won exclusive prizes.",
    tags: ["Hackathon", "Product", "Collaboration"],
    image: "/images/placeholder.webp",
  },
  {
    title: "The Archive of Unwritten Futures",
    result: "Published Author",
    date: "2026",
    location: "Speculative fiction",
    project: "ISBN 979-8285537793",
    description:
      "Published a speculative fiction novel, pairing technical curiosity with worldbuilding and long-form creative writing.",
    tags: ["Author", "Fiction", "Creativity"],
    image: "/images/book.jpg",
  },
];

export const certifications = [
  {
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
  },
  {
    title: "C, C++, Python (Advanced)",
    issuer: "Cisco",
  },
  {
    title: "SQL (Advanced)",
    issuer: "HackerRank",
  },
  {
    title: "Mastering GitHub",
    issuer: "Microsoft",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
  },
  {
    title: "AWS Educate Machine Learning Foundations",
    issuer: "AWS",
  },
];
