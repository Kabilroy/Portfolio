import { Certificate, PersonalDetails, Project, Skill, Tool } from '../types';

export const personalData: PersonalDetails = {
  name: "Kabilan",
  dob: "01 May 2005",
  location: "Ariyalur, Tamil Nadu, India",
  email: "kabilroyitofficial@gmail.com",
  languagesKnown: ["Java", "C#"],
  college: "V.S.B. Engineering College, Karur, Tamil Nadu",
  degree: "B.Tech Information Technology (Final year)",
  status: "Actively seeking Software Development & Full-Stack Opportunities",
  phone: "+91 8072236596",
  whatsappUrl: "https://wa.me/918072236596?text=Hi%20Kabilan,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.",
  github: "https://github.com/Kabilroy",
  linkedin: "https://www.linkedin.com/in/kabilan-p-89a786306/",
};

export const skillsData: Skill[] = [
  // Frontend
  {
    id: "html",
    name: "HTML5",
    category: "Frontend",
    percentage: 90,
    iconClass: "fa-brands fa-html5",
    color: "#f97316"
  },
  {
    id: "css",
    name: "CSS3",
    category: "Frontend",
    percentage: 85,
    iconClass: "fa-brands fa-css3-alt",
    color: "#ea580c"
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    percentage: 80,
    iconClass: "fa-brands fa-js",
    color: "#f97316"
  },
  // Backend & Database
  {
    id: "mysql",
    name: "MySQL",
    category: "Backend / Database",
    percentage: 85,
    iconClass: "fa-solid fa-database",
    color: "#ea580c"
  },
  {
    id: "springboot",
    name: "Spring Boot",
    category: "Backend / Database",
    percentage: 80,
    iconClass: "fa-solid fa-leaf",
    color: "#f97316"
  },
  // Programming Languages
  {
    id: "java",
    name: "Java",
    category: "Programming Languages",
    percentage: 85,
    iconClass: "fa-brands fa-java",
    color: "#dc2626"
  },
  {
    id: "csharp",
    name: "C#",
    category: "Programming Languages",
    percentage: 75,
    iconClass: "fa-solid fa-code",
    color: "#ea580c"
  }
];

export const toolsData: Tool[] = [
  {
    id: "vscode",
    name: "VS Code",
    category: "Code Editor",
    description: "Primary environment for front-end scripting, TypeScript, and modern web application development.",
    iconClass: "fa-solid fa-code"
  },
  {
    id: "intellij",
    name: "IntelliJ IDEA",
    category: "Java IDE",
    description: "Enterprise IDE used for core Java development, Spring Boot microservices, and backend architectures.",
    iconClass: "fa-solid fa-laptop-code"
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control",
    description: "Distributed version control system for robust branch management, commits, and collaborative workflows.",
    iconClass: "fa-brands fa-git-alt"
  },
  {
    id: "github",
    name: "GitHub",
    category: "Cloud Repository",
    description: "Cloud repository hosting for open-source repositories, team collaboration, and CI/CD pipelines.",
    iconClass: "fa-brands fa-github"
  },
  {
    id: "mysql-workbench",
    name: "MySQL Workbench",
    category: "Database Administration",
    description: "Visual database design, query optimization, schema modeling, and SQL database management.",
    iconClass: "fa-solid fa-server"
  },
  {
    id: "docker",
    name: "Docker",
    category: "Containerization",
    description: "Containerization platform for packaging applications, isolating dependencies, and orchestrating microservice containers.",
    iconClass: "fa-brands fa-docker"
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "software-testing-nptel",
    title: "Software Testing",
    issuer: "NPTEL (Ministry of Education, Govt. of India)",
    issueDate: "Government of India Verified",
    iconClass: "fa-solid fa-vial-circle-check"
  },
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "Ministry of Education / NPTEL",
    issueDate: "Government of India Verified",
    iconClass: "fa-solid fa-certificate"
  },
  {
    id: "java-foundation",
    title: "Java Foundation Certification",
    issuer: "Infosys Springboard",
    issueDate: "Issued 2025",
    iconClass: "fa-solid fa-award"
  },
  {
    id: "mysql-cert",
    title: "MySQL Database Certification",
    issuer: "Database & SQL Systems",
    issueDate: "Verified Skill Credential",
    iconClass: "fa-solid fa-database"
  },
  {
    id: "docker-cert",
    title: "Docker Containerization Certification",
    issuer: "DevOps & Cloud Technologies",
    issueDate: "Verified Skill Credential",
    iconClass: "fa-brands fa-docker"
  }
];

export const projectsData: Project[] = [
  {
    id: "budget-tracker",
    title: "AI-Powered Budget Tracker",
    subtitle: "Full-Stack Personal Finance & Analytics Application",
    description: "A comprehensive full-stack personal finance management application engineered to track income, categorize expenses, monitor monthly budgets, and analyze financial transactions.",
    highlights: [
      "Implemented secure JWT-based authentication and authorization with RESTful APIs using Spring Boot & Spring Security.",
      "Integrated AI-powered financial insights and smart data import features for expense prediction.",
      "Designed modular architecture with Spring Boot backend, MySQL database, and responsive interface."
    ],
    techStack: ["Spring Boot", "MySQL", "JWT", "REST APIs", "JavaScript", "Tailwind CSS"],
    imagePlaceholderText: "Budget Tracker UI",
    projectUrl: "https://github.com/Kabilroy/Budget_tracker",
    githubUrl: "https://github.com/Kabilroy/Budget_tracker"
  },
  {
    id: "medisum",
    title: "Medisum",
    subtitle: "Healthcare & Intelligent Medical Summary Platform",
    description: "A streamlined healthcare and clinical records summarization platform designed to organize patient diagnostic history, lab records, prescription summaries, and medical trends in a secure interface.",
    highlights: [
      "Engineered automated medical data aggregation, timeline views, and structured health metric cards.",
      "Built clean RESTful service endpoints with input validation, patient privacy protection, and fast lookup.",
      "Developed an intuitive dashboard for quick access to vital summaries and doctor consultation notes."
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "CSS3", "JavaScript"],
    imagePlaceholderText: "Medisum Health Portal",
    projectUrl: "https://github.com/Kabilroy/MedSumAi",
    githubUrl: "https://github.com/Kabilroy/MedSumAi"
  },
  {
    id: "admission-lead-management",
    title: "Admission Lead Management",
    subtitle: "Educational Institution CRM & Student Inquiry Tracking",
    description: "A dedicated institutional admission management system built to capture prospective student inquiries, monitor multi-stage counseling workflows, and automate student application progression.",
    highlights: [
      "Structured database schemas for multi-department inquiries, status pipelines, and counselor assignments.",
      "Implemented real-time conversion statistics, lead filtering by course/merit, and automated status notifications.",
      "Delivered responsive administration and counselor control panels with exportable reports."
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "HTML5", "Bootstrap / Tailwind"],
    imagePlaceholderText: "Admission CRM Dashboard",
    projectUrl: "https://github.com/Kabilroy/admission-lead-management-system",
    githubUrl: "https://github.com/Kabilroy/admission-lead-management-system"
  }
];
