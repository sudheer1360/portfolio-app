export interface Profile {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Skill {
  key: string;
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  contributions: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
}
