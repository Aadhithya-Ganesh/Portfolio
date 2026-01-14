import { BADGES } from "./badges";

export const projects = [
  {
    title: "SplitEase – Smart Bill Splitting App",
    description:
      "A personal full-stack application for tracking shared expenses and simplifying bill settlements.",
    longDescription:
      "SplitEase is a personal full-stack application designed to streamline shared expense tracking and bill splitting. The application allows users to create groups, add shared expenses, and automatically calculate balances to determine who owes whom. The project was developed independently, covering both frontend and backend development, with a strong focus on clean architecture, intuitive user experience, and reliable state management. The backend exposes secure APIs that integrate seamlessly with a modern React-based frontend, enabling a smooth and responsive user experience.",
    tags: ["React", "Java", "FastAPI", "Tailwind CSS", "Postgres", "GitHub"],
    badges: [BADGES.PERSONAL],
    date: "2026",
    github: "https://github.com/Aadhithya-Ganesh/SplitEase",
    featured: true,
  },

  {
    title: "Pick Me Up – Distributed Car Pooling Application",
    description:
      "A distributed car pooling platform built using a microservices-based architecture.",
    longDescription:
      "Pick Me Up is a distributed car pooling application developed collaboratively by a three-member team. The system was architected using three independent microservices to enable modular development and scalable deployment. One of the backend microservices was implemented using FastAPI, supporting both synchronous REST APIs and asynchronous communication through RabbitMQ. The application was containerized using Docker and deployed with Kubernetes, ensuring scalability, reliability, and ease of deployment. Version control and team collaboration were managed using GitHub, while the frontend was built with React and Tailwind CSS.",
    tags: [
      "FastAPI",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "React",
      "Tailwind",
      "Postgres",
      "GitHub",
    ],
    github: "https://github.com/Aadhithya-Ganesh/Pick-Me-Up",
    badges: [BADGES.ACADEMIC, BADGES.TEAM],
    date: "2025",
    featured: true,
  },

  {
    title: "Forkcast – Smart Restaurant Recommender",
    description:
      "A smart restaurant recommendation platform powered by machine learning.",
    longDescription:
      "Forkcast is a restaurant recommendation platform developed by a six-member team, where I served as the Frontend Lead. I was responsible for the end-to-end development of the frontend and worked closely with the Customer Lead to translate design mockups into responsive and accessible user interfaces. The frontend was built using React and Tailwind CSS based on designs prototyped in Figma. The application integrates with backend APIs developed using Flask, which leverage machine learning models built with Scikit-learn to deliver personalized restaurant recommendations.",
    tags: [
      "React",
      "Tailwind CSS",
      "Figma",
      "Flask",
      "Scikit-learn",
      "Postgres",
      "GitHub",
    ],
    github:
      "https://github.com/Aadhithya-Ganesh/Forkcast-Smart-Restaurant-Recommender",
    badges: [BADGES.ACADEMIC, BADGES.TEAM],
    date: "2025",
    featured: true,
  },

  {
    title: "Dublin Bikes – Bike Sharing Analytics Tool",
    description:
      "A real-time analytics platform for monitoring bike station availability.",
    longDescription:
      "Dublin Bikes is a data-driven web application that provides real-time monitoring of bike station occupancy using live DublinBikes data. The project involved designing backend services to collect, process, and serve live station data to the frontend. The application was deployed on AWS to ensure public accessibility and reliable performance. The frontend was implemented using standard web technologies, while backend services were built with Flask and integrated with a Postgres database for data storage.",
    tags: ["JavaScript", "HTML", "CSS", "Flask", "AWS", "Postgres", "GitHub"],
    github:
      "https://github.com/Aadhithya-Ganesh/COMP30830-Software-Engineering-Bicycle-Project",
    badges: [BADGES.ACADEMIC, BADGES.TEAM],
    date: "2025",
    featured: true,
  },
  {
    title: "Academic Projects & Coursework",
    description:
      "A collection of academic projects and technical assignments completed across core computer science modules.",
    longDescription:
      "This body of work represents a wide range of academic projects and coursework completed as part of my computer science curriculum. The projects span multiple domains, including Software Engineering, Operating Systems, Web Application Development, Database Management Systems, Computer Networks, Data Analytics, and Computer Architecture. Through these assignments, I gained hands-on experience in designing and implementing software systems, working with low-level and high-level abstractions, analyzing data, and understanding how modern computer systems operate end to end. These academic projects formed a strong theoretical and practical foundation that directly supports my full-stack and backend development work.",
    tags: [
      "Software Engineering",
      "Operating Systems",
      "Web Development",
      "Databases",
      "Networking",
      "Data Analytics",
      "Computer Architecture",
    ],
    badges: [BADGES.ACADEMIC],
    date: "2024 - 2025",
    featured: false,
  },
  {
    title: "HNM – Application Modernization",
    description:
      "Modernization of a legacy enterprise application into a scalable web platform.",
    longDescription:
      "This enterprise-focused project involved modernizing a legacy JSP and C++ web application into a scalable architecture built with React and Spring Boot. I was responsible for developing approximately eighty percent of the backend services using Java and Spring Boot, implementing RESTful APIs to support the new frontend. Maven was used for build automation, and the project was developed collaboratively using GitLab. The modernization effort significantly improved maintainability, scalability, and long-term extensibility of the system.",
    tags: ["Java", "Spring Boot", "Maven", "React", "GitLab", "Postgres"],
    badges: [BADGES.ENTERPRISE, BADGES.TEAM],
    date: "2023",
    featured: false,
  },
  {
    title: "Smart Inventory Management System",
    description:
      "A full-stack inventory management system developed as a capstone project.",
    longDescription:
      "The Smart Inventory Management System is a full-stack capstone project designed to efficiently manage and track inventory. Backend services were implemented using Spring Boot and integrated with a React-based frontend to provide a responsive user experience. The project emphasized clean API design, proper separation of concerns, and effective version control practices. Development and collaboration workflows were managed using GitHub, enabling structured teamwork and iterative development throughout the project lifecycle.",
    tags: ["Java", "Spring Boot", "Maven", "React", "GitHub", "Postgres"],
    github: "https://github.com/Aadhithya-Ganesh/smart-inventory-management",
    badges: [BADGES.ENTERPRISE, BADGES.TEAM],
    date: "2023",
    featured: false,
  },
  {
    title: "Frontend Mentor Challenges",
    description:
      "A collection of static frontend projects that marked the beginning of my web development journey.",
    longDescription:
      "This project represents my early hands-on experience with frontend development through solving real-world UI challenges from Frontend Mentor. Using vanilla HTML, CSS, and JavaScript, I focused on building responsive layouts, translating designs into clean markup, and writing maintainable styles without frameworks. These projects laid the foundation for my understanding of web fundamentals, UI structure, and browser behavior, and served as the starting point for my transition into full-stack development.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
    github: "https://github.com/Aadhithya-Ganesh/Web-pages",
    badges: [BADGES.PERSONAL],
    date: "2021",
    featured: false,
  },
];
