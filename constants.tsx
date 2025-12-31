
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
    subheadline: 'A student-built web app for discovering events and forming teams.',
    description: "Eventurer helps students find events and connect with others based on shared interests and availability. I focused on the frontend—building user-facing interfaces, designing interaction flows, and integrating client-side APIs to make the experience feel clear and responsive.",
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Blender', 'Google Maps API', 'Gemini API', 'UX Design'],
    contributions: [
      'Built user-facing interfaces with React and TypeScript, focusing on component structure and smooth user flows.',
      'Designed and implemented a 3D landing page using Three.js and assets created in Blender, with a non-3D fallback for performance and accessibility.',
      'Integrated Google Maps API to add a "How to get there" feature, giving users location and navigation context.',
      'Built an FAQ chatbot using Gemini API to reduce friction and provide quick, contextual help.',
      'Designed event discovery flows with Framer Motion, refining interaction details like hover states and transitions to guide attention.',
      'Worked closely with teammates who handled backend (Firebase, Express.js) and integrations (Stripe, Eventbrite), connecting frontend features to their systems.'
    ],
    techStack: {
      frontend: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Firebase', 'Express.js'],
      database: ['Cloud Firestore'],
      apis: ['Stripe', 'Gemini API', 'Google Maps API', 'Eventbrite'],
      deployment: ['Vercel', 'Vite'],
      additional: ['Three.js', 'Blender']
    },
    image: '/eventurer-preview.jpg',
    link: '#',
    video: '/eventurerdemo.mp4'
  }
];

export const MY_DEFAULTS: DefaultItem[] = [
  { label: 'default mode', value: 'i build things to learn how they work / build first refine later' },
  { label: 'i care about', value: 'clean ux and thoughtful details' },
  { label: 'i enjoy', value: 'problem solving and making things work' },
  { label: 'currently learning', value: 'React, TypeScript, and modern frontend patterns.' },
  { label: 'strength', value: 'explaining ideas clearly and collaborating' }
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
