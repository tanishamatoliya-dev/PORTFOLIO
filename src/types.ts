export type NavTab = 'home' | 'about' | 'skills' | 'projects' | 'contact';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  highlights: string[];
  technologies: string[];
}

export interface HackathonItem {
  name: string;
  year: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon?: string;
  skills: string[];
}
