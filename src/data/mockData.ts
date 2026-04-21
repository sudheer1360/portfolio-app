import type { Profile, SkillCategory, ExperienceItem, ProjectItem } from '../types';

export const profileData: Profile = {
  name: 'Sudheer Thadikonda',
  role: 'Full Stack Developer',
  tagline: 'Results-driven Full Stack Developer with 3+ years of experience building scalable enterprise applications using Java Spring Boot, React.js, and Python.',
  summary: 'Results-driven Full Stack Developer with 3+ years of experience building scalable enterprise applications using Java Spring Boot, React.js, Python (Flask), REST APIs, and Microservices architecture. Hands-on experience with cloud platforms (AWS, GCP), database design (MySQL, MongoDB), and AI integration. Proven ability to deliver end-to-end solutions across frontend, backend, and deployment. Passionate about adopting GenAI tools, clean code practices, and continuous learning in multi-cloud and DevOps environments.',
  email: 'sudheerthadikonda0605@gmail.com',
  github: 'https://github.com/sudheer1360',
  linkedin: 'https://linkedin.com/in/sudheer-thadikonda',
};

export const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { key: 'java', name: 'Java', level: 90 },
      { key: 'python', name: 'Python', level: 85 },
      { key: 'ts-js', name: 'JavaScript / TypeScript', level: 85 },
      { key: 'sql', name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Frontend Development',
    skills: [
      { key: 'react', name: 'React.js', level: 90 },
      { key: 'tailwind', name: 'Tailwind CSS', level: 85 },
      { key: 'bootstrap', name: 'Bootstrap', level: 85 },
      { key: 'thymeleaf', name: 'Thymeleaf', level: 75 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { key: 'springboot', name: 'Spring Boot', level: 90 },
      { key: 'flask', name: 'Flask', level: 80 },
      { key: 'mysql', name: 'MySQL', level: 85 },
      { key: 'mongo', name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { key: 'aws', name: 'AWS (EC2, S3, IoT Core)', level: 80 },
      { key: 'gcp', name: 'GCP', level: 75 },
      { key: 'docker', name: 'Docker', level: 70 },
      { key: 'cicd', name: 'GitHub Actions (CI/CD)', level: 75 },
    ],
  },
  {
    category: 'Architecture & Patterns',
    skills: [
      { key: 'microservices', name: 'Microservices', level: 85 },
      { key: 'rest', name: 'REST APIs', level: 95 },
      { key: 'mvc', name: 'MVC Pattern', level: 90 },
      { key: 'rbac', name: 'Role-Based Access Control', level: 85 },
    ],
  },
  {
    category: 'AI/ML & Emerging Tech',
    skills: [
      { key: 'ai-integration', name: 'GenAI & LLM API Integration', level: 80 },
      { key: 'cv', name: 'OpenCV & Computer Vision', level: 75 },
      { key: 'blockchain', name: 'Blockchain (Smart Contracts, Web3)', level: 70 },
    ],
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp1',
    company: 'M. R. Soft Solutions',
    role: 'Junior Software Engineer',
    duration: 'Aug 2025 – Present • Hyderabad',
    contributions: [
      'Developed and maintained scalable full-stack features using React.js, Java Spring Boot, and Microservices.',
      'Built and integrated REST APIs for enterprise applications, enabling seamless frontend-backend communication with optimized response handling.',
      'Implemented component-based UI architecture in React.js with reusable, maintainable code across multiple enterprise modules.',
      'Designed and optimized relational database schemas in MySQL.',
      'Participated in code reviews, production support cycles, and feature delivery aligned with agile sprint planning.',
      'Collaborated with cross-functional teams to translate business requirements into scalable technical implementations.'
    ],
    techStack: ['React.js', 'Java Spring Boot', 'Microservices', 'REST APIs', 'MySQL'],
  },
  {
    id: 'exp2',
    company: 'Makeskilled',
    role: 'IoT Developer & Technical Trainer',
    duration: 'Jun 2023 – Jul 2025 • Hyderabad',
    contributions: [
      'Designed and deployed end-to-end web applications using Python (Flask), HTML, CSS, MySQL, and MongoDB.',
      'Mentored 50+ students and project teams on full-stack development, Git/GitHub version control, and cloud deployment pipelines (AWS, GCP).',
      'Integrated AI/ML features and LLM APIs.',
      'Delivered technical sessions on AI integration, blockchain (Smart Contracts, Web3), and security-first deployment best practices — simulating a lead developer role.',
      'Implemented blockchain concepts including smart contracts and decentralized applications into demo development.',
      'Introduced CI/CD concepts and containerization basics using Docker.'
    ],
    techStack: ['Python', 'Flask', 'MySQL', 'MongoDB', 'AWS', 'GCP', 'Docker', 'AI/ML', 'Blockchain'],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'FYNDYNE Admin — Restaurant Management Platform',
    description: 'Built a multi-role admin platform (Super Admin, Vendor, Waiter, Chef) with role-based access control supporting 10+ core modules including POS, kitchen ops, billing, and audit logs. Integrated REST APIs using a modular frontend service architecture with efficient client/server state management via Zustand and TanStack Query.',
    techStack: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'REST APIs'],
    githubUrl: 'https://github.com/sudheer1360',
  },
  {
    id: 'proj2',
    title: 'News Portal Web Application',
    description: 'Developed a dynamic, role-based news portal with user/employee/admin dashboards, news publishing, job application workflows, and automated email notifications via JavaMail. Structured using MVC architecture with layered controllers, services, and repository layers over a MySQL backend.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap', 'JavaMail', 'MVC Architecture'],
    githubUrl: 'https://github.com/sudheer1360',
  },
  {
    id: 'proj3',
    title: 'Farm Tools Rental & Marketplace',
    description: 'Built a full-stack marketplace connecting farmers to rent/sell agricultural tools with secure auth, responsive UI, search/filter, and email alerts — deployed with environment-based configuration.',
    techStack: ['Python', 'Flask', 'SQLite', 'Bootstrap', 'JavaScript', 'Flask-Mail'],
    githubUrl: 'https://github.com/sudheer1360',
  },
];
