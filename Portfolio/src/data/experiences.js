import resume from '../assets/Daniel Jeremiah Baguio.pdf';
import aws_certificate from '../assets/AWS Cloud Practitioner Essentials.pdf';
import chatgpt_certificate from '../assets/ChatGpt Certification.jpg';

export const experiences = [
  {
    id: "amdocs",
    slug: "amdocs_philippines",
    title: "Software Engineer",
    company: "Amdocs Philippines Inc",
    type: "full-time",
    location: "Pasig City",
    startDate: "June 2024",
    endDate: "February 2026",
    overview: "While working on an existing web-based system used in daily operations, I focused on improving both usability and system reliability. I developed and integrated new features that streamlined internal workflows, ultimately improving user productivity by 15%. To ensure these changes worked reliably in real-world scenarios,",
    description: `Enhanced an existing web-based system by implementing new features, improving user productivity by 15% and streamlining daily operations. Built and tested 5 features in simulated virtual machine environments to replicate production data scenarios, improving testing reliability. Collaborated with cross-functional teams, across 4 different projects, to deploy new system features and updates in production environments. Contributed to system stability and performance through structured testing and debugging reducing discrepancies and downtime by 9%.`,
    tech: "C#, .NET Framework, SQL Server, JavaScript, HTML/CSS",
    role: "Software Engineer",
    impact: "Improved user experience, productivity, and system performance",
    achievements: [
      "Delivered end-to-end full-stack development enhancement owning architecture, development, testing, and development, resulting in a 15% increase in user productivity and streamlined operations ",
      "Designed and implemented backend processes using .NET, C#, SQL, and JavaScript, continuously refining technical implementations to match evolving business requirements. ",
      "Executed 5 production deployments throughout 2025 which included post deployment support for critical releases, and supports that lasted 6 months due to scale and impact.  ",
      " Improved system stability and performance by reducing discrepancies and downtime by 9% through structured testing, debugging, and validation in simulated VM environments, while collaborating across 4 cross-functional project teams. "
    ]
  },
  {
    id: "shopify",
    slug: "shopify_developer",
    title: "Shopify Developer",
    company: "Able Phils Retail Corporation",
    type: "freelancer",
    location: "Remote",
    startDate: "August 2025",
    endDate: "February 2026",
    overview: "I worked closely with design mockups and translated them into fully functional Shopify storefronts using Liquid, HTML, CSS, and JavaScript. My focus was on creating responsive and consistent user experiences across devices while building reusable UI components and custom store features.",
    description: `Translated design mockups into fully responsive Shopify themes using Liquid, HTML, CSS, and JavaScript, ensuring cross-device compatibility and consistent UI implementation. Developed custom Shopify features and reusable UI components that enhanced store usability and increased conversion rates by 20%. Optimized site performance by 20% and implemented app integrations to streamline client operations. Tested and evaluated third-party Shopify applications (e.g., Bundler, Microsoft Clarity) and implemented inventory, merchandising, and marketing workflows to extend store functionality and support data-driven optimization.`,
    tech: "Liquid, HTML/CSS, JavaScript, Shopify Theme Development",
    role: "Shopify Developer",
    impact: "Enhanced store usability and increased conversion rates by 20%",
    achievements: [
      "Translated design mockups into fully responsive Shopify themes using Liquid, HTML, CSS, and JavaScript, ensuring cross-device compatibility",
      "Developed custom Shopify features and reusable UI components that enhanced store usability and increased conversion rates by 20%",
      "Optimized site performance by 20% and implemented app integrations to streamline client operations",
      "Tested and evaluated third-party Shopify applications and implemented inventory, merchandising, and marketing workflows"
    ]
  },
  {
    id: "ibridge",
    slug: "web_developer_ibridge",
    title: "Web Developer",
    company: "I-Bridge Systems Philippines Inc.",
    type: "internship",
    location: "Pasig City",
    startDate: "August 2022",
    endDate: "November 2022",
    overview: "As part of a team maintaining legacy systems, I helped improve the structure and readability of both the user interface and backend code. My work focused on applying coding best practices to make the system easier to maintain and extend over time.",
    description: `Assisted in modernizing legacy systems by improving UI structure and backend code readability. Applied coding best practices to improve maintainability of existing systems. Authored technical documentation to improve knowledge transfer and codebase understanding making onboarding and knowledge transfer more efficient.`,
    tech: "JavaScript, HTML/CSS, Legacy Systems",
    role: "Web Developer",
    impact: "Improved code maintainability and documentation",
    achievements: [
      "Assisted in modernizing legacy systems by improving UI structure and backend code readability",
      "Applied coding best practices to improve maintainability of existing systems",
      "Authored technical documentation to improve knowledge transfer and codebase understanding",
      "Enhanced onboarding efficiency and knowledge transfer processes"
    ]
  }
];

export const personalInfo = {
  name: "Daniel Jeremiah Baguio",
  title: "Software Engineer",
  bio: "I am a Software Engineer with experience in full-stack web application development, system enhancement, and e-commerce platforms. Strong background in building scalable features, optimizing performance, and delivering end-to-end solutions from architecture to deployment. Experienced in .NET, C#, SQL, JavaScript, Shopify (Liquid), and modern frontend development.",
  email: "work.danielbaguio@gmail.com",
  linkedin: "https://www.linkedin.com/in/daniel-jeremiah-baguio/",
  github: "https://github.com/BaguioDaniel",
  resume: resume
};

export const projects = [
  {
    title: "Tracker Management System",
    description: "A web-based application for managing and tracking projects and tasks efficiently.",
    link: "https://github.com/BaguioDaniel/TrackerManager"
  }
];

export const techStack = {
  frontend: ["JavaScript", "React", "HTML/CSS"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Postman", "C#"],
  tools: ["Git", "Generative AI", "AWS", "Zapier"]
};

export const certifications = {
  name: ["AWS Cloud Practitioner Essentials", "ChatGPT Complete Guide: Learn Midjourney, ChatGPT 4 & More"],
  link: [aws_certificate, chatgpt_certificate]
};