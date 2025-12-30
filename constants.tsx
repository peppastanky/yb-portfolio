
import React from 'react';
import { Project, DefaultItem, SkillCategory, ExperienceItem } from './types';

export const COLORS = {
  primary: '#CA79FC',
  background: '#0A0A0A',
};

export const CONTACT = {
  primaryEmail: 'yubing.lim.2024@computing.smu.edu.sg',
  secondaryEmail: 'yyubingg@gmail.com',
  phone: '+65 93700757',
  phoneValue: '+6593700757',
  linkedin: 'https://www.linkedin.com/in/limyubing',
  github: 'https://github.com/peppastanky',
};

export const PROJECTS: Project[] = [
  {
    id: 'eventurer',
    title: 'Eventurer',
    description: 'A platform designed to simplify event discovery and planning. Focused on clean interactions and a frictionless user journey.',
    tags: ['React', 'Next.js', 'UI/UX Design'],
    link: '#'
  },
  {
    id: 'iteration-lab',
    title: 'Learning Experiments',
    description: 'A collection of ongoing explorations in modern frontend patterns, focusing on TypeScript and performance optimization.',
    tags: ['TypeScript', 'Design Systems', 'React'],
    link: '#'
  }
];

export const MY_DEFAULTS: DefaultItem[] = [
  { label: 'How I Work', value: 'I build a simple version first, then improve it from there.' },
  { label: 'What I Care About', value: 'Making things that are easy and straightforward to use.' },
  { label: 'My Strength', value: "I'm good at explaining ideas and getting everyone on the same page." }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming & Web',
    items: ['Python', 'JavaScript', 'React.js', 'TypeScript', 'Vue.js', 'HTML', 'CSS', 'SQL']
  },
  {
    category: 'Frameworks & Tools',
    items: ['Tailwind CSS', 'Bootstrap', 'Git', 'Firebase', 'Vercel']
  },
  {
    category: 'Data & Analytics',
    items: ['Microsoft Excel', 'Tableau']
  },
  {
    category: 'Design',
    items: ['Figma', 'Canva', 'Capcut', 'Blender']
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    institution: 'The Logic Coders',
    degree: 'Python Tutor',
    period: 'Mar 2025 - Present',
    type: 'work',
    description: [
      'Instructed students aged 6-16 in Python programming, enabling beginners to progress from basic syntax to solving algorithmic problems',
      'Strengthened students\' computational and mathematical reasoning through structured coding challenges and real-world examples',
      'Mentored students on debugging strategies and code optimisation, improving accuracy and efficiency in solutions'
    ]
  },
  {
    institution: 'M1 Limited',
    degree: 'Digital Ambassador',
    period: 'Jan 2024 - Jun 2024',
    type: 'work',
    description: [
      'Guided customers through digital self-service journeys, enabling efficient and independent transactions',
      'Served as first point of contact, handling diverse customer inquiries while ensuring a smooth user experience',
      'Translated complex digital processes into clear, user-friendly explanations, resolving friction with strong problem-solving skills'
    ]
  },
  {
    institution: 'Singapore Management University',
    degree: 'Bachelor of Science (Information Systems)',
    period: '2024 - Present',
    type: 'education'
  },
  {
    institution: 'Nanyang Junior College',
    degree: 'GCE A-Levels',
    period: '2022 - 2023',
    type: 'education'
  },
  {
    institution: 'Chung Cheng High School (Main)',
    degree: 'GCE O-Levels',
    period: '2018 - 2021',
    type: 'education'
  }
];
