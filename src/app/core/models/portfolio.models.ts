export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: 'Full-Stack' | 'AI & Agents' | 'Developer Tools' | 'Developer Tools & AI' | 'AI & Microservices' | 'Full-Stack & Event-Driven' | 'AI & Systems' | 'DevOps & Cloud' | 'Blockchain & Web3';
  year: string;
  status: 'In Progress' | 'Personal Project' | 'Production Ready' | 'Active Development';
  featured: boolean;
  bentoSpan?: 'col-span-2' | 'col-span-1';
  summary: string;
  problem: string;
  approach: string;
  architectureDiagramSvg: string;
  keyFeatures: string[];
  stack: string[];
  learned: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  focus: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level?: string;
    projectIds: string[]; // link skill directly to relevant case studies
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year?: string;
}
