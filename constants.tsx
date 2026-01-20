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
    subheadline: 'A mood-based event discovery platform for Singapore - built by a team of 4.',
    shortDescription: "A web application that helps users discover events in Singapore through an interactive mood quiz. Features include personalized recommendations, integrated booking, Google Maps routing, and an AI chatbot.",
    description: "Eventurer is a web application that helps users discover and attend events in Singapore based on their current mood. Developed as a 4-person team project for SMU's Web Application Development II course, I led the frontend development while collaborating closely with teammates on backend systems and API integrations. The platform features an interactive mood quiz that recommends personalized events, integrated booking with Stripe payments, Google Maps routing, event forums, and an AI-powered FAQ chatbot. The project earned an A grade.",
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Blender', 'Google Maps API', 'Gemini API', 'UX Design'],
    contributions: [
      'Built user-facing interfaces with React and TypeScript, refining the UI/UX for the mood quiz, event browsing and filtering, and event detail pages.',
      'Designed and implemented a 3D landing page using Three.js and assets created in Blender, with a non-3D fallback for performance and accessibility.',
      'Integrated Google Maps API to provide route planning and navigation features, helping users find directions to events.',
      'Built an AI-powered FAQ chatbot using Gemini API to provide contextual help and reduce user friction.',
      'Designed interactive event discovery flows with Framer Motion, refining hover states, transitions, and micro-interactions to create an engaging user experience.',
      'Worked closely with 3 teammates who handled backend (Firebase, Express.js) and integrations (Stripe for payments, Eventbrite for event data), connecting frontend features to their systems.',
      'Coordinated with the team to ensure seamless integration between frontend UI and backend services throughout the development process.'
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
    link: 'https://limyubing.eventurer.vercel.app',
    video: 'https://www.youtube.com/embed/m4lyZS70TMc',
    githubRepo: 'https://github.com/amandaseah/Eventurer'
  }
];

export const MY_DEFAULTS: DefaultItem[] = [
  { label: 'how i work', value: 'building to understand / learning through iteration' },
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
    type: 'education',
    details: {
      leadership: [
        'Marketing Executive - SMU Product Club AY25/26',
        'Programmes Executive - SMU Sports Fiesta 2025',
        'Marketing Executive - SMU Sports Appreciation Night 2025',
        'Facilitator - SMU Freshmen Orientation 2025'
      ],
      coursework: {
        exemplary: [
          'Computational Thinking and Fundamentals (A-)',
          'Web Application Development II (A-)',
          'Introduction to Statistics (A-)'
        ],
        relevant: [
          'Web Application Development I',
          'Data Management',
          'Interaction Design and Prototyping',
          'Business Process Analysis & Solutioning',
          'Introduction to Computing Fundamentals',
          'Modelling and Data Analytics'
        ]
      }
    }
  },
  {
    institution: 'Nanyang Junior College',
    degree: 'GCE A-Levels',
    period: '2022 - 2023',
    type: 'education',
    details: {
      score: '85/90 RP',
      leadership: [
        'NYJC Basketball EXCO AY22/23',
        'Facilitator - Civics Tutorial Orientation 2023'
      ],
      subjects: [
        'H2 Math, Chemistry, Biology and H1 Economics'
      ],
      communityService: [
        'House Decluttering For Elderly @Fei Yue Community Services (2022 & 2023)',
        'Braddell Heights Family Fair Event Crew (2023)',
        'Project Aster Partnering With SCS - Student Volunteer (2023)'
      ]
    }
  },
  {
    institution: 'Chung Cheng High School (Main)',
    degree: 'GCE O-Levels',
    period: '2018 - 2021',
    type: 'education',
    details: {
      score: 'Raw score of 9',
      leadership: [
        'Netball Committee Member'
      ],
      scholarships: [
        'Chinese Language Elective Scholarship (CLES) - Ministry of Education (2020-2021)',
        'Education Merit Award - South East Community Development Council (2019)',
        'Edusave Certificate of Academic Achievement - Ministry of Education (2019)',
        'Edusave Good Progress Award - Ministry of Education (2018)'
      ],
      achievements: [
        'Represented School in NSG Netball Championships C Division 2019',
        'Represented School in NSG Netball Championships B Division East Zone 2020-2021'
      ]
    }
  }
];