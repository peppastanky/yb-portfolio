
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  subheadline?: string;
  contributions?: string[];
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
}
