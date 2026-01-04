
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  subheadline?: string;
  contributions?: string[];
  image?: string;
  video?: string;
  githubRepo?: string;
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    apis?: string[];
    deployment?: string[];
    additional?: string[];
  };
}

export interface DefaultItem {
  label: string;
  value: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  institution: string;
  degree: string;
  period: string;
  type: 'education' | 'work';
  description?: string[];
  details?: {
    leadership?: string[];
    coursework?: {
      exemplary?: string[];
      relevant?: string[];
    };
    subjects?: string[];
    scholarships?: string[];
    achievements?: string[];
    communityService?: string[];
    score?: string;
  };
}
