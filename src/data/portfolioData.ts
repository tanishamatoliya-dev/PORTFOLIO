import { EducationItem, ProjectItem, HackathonItem, SkillCategory, NavTab } from '../types';

export const personalInfo = {
  name: 'Tanisha Matoliya',
  role: 'Computer Science Engineering Undergraduate',
  institution: 'Prestige Institute of Engineering Management and Research, Indore',
  location: 'Indore, Madhya Pradesh, India',
  email: 'tanishamatoliya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tanisha-matoliya/',
  github: 'https://github.com/tanishamatoliya',
  avatar: '/profile.jpg',
  copyrightYear: '2026',
};

export const homeData = {
  welcomeGreeting: 'Welcome to my portfolio😊',
  welcomeText: [
    'I am Tanisha Matoliya, a Computer Science Engineering undergraduate at Prestige Institute of Engineering Management and Research, Indore. I am passionate about software development, Artificial Intelligence, Machine Learning, and web technologies.',
    'I enjoy turning ideas into practical solutions through programming, problem-solving, and rapid prototyping. My interests include building intelligent applications, exploring AI/ML concepts, and developing clean and user-friendly web interfaces.'
  ],
  areasOfInterest: [
    'Programming',
    'Web Development',
    'Software Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Web Technologies'
  ],
  careerGoal:
    'My goal is to become a skilled software developer and build practical, scalable, and user-friendly solutions. I want to continuously improve my programming and AI/ML skills while gaining experience through real-world projects and technical challenges.',
  learningPhilosophy:
    'I believe in learning by building. I regularly practice programming, work on projects, participate in hackathons, and explore new technologies to strengthen my technical and problem-solving abilities.'
};

export const aboutData = {
  bio: [
    "Hello! I'm Tanisha Matoliya, a Computer Science Engineering undergraduate at Prestige Institute of Engineering Management and Research, Indore. I am passionate about technology, software development, Artificial Intelligence, and Machine Learning.",
    'I enjoy exploring new technologies and applying my knowledge through practical projects. My learning journey has given me experience in programming, web development, AI/ML concepts, data analysis, and problem-solving.',
    'I believe that the best way to learn technology is by experimenting and building. Therefore, I actively work on personal projects, participate in hackathons, and explore different areas of Computer Science.'
  ],
  education: [
    {
      institution: 'Prestige Institute of Engineering Management and Research (PIEMR)',
      degree: 'Bachelor of Technology (B.Tech) - Computer Science & Engineering',
      period: '2025 - 2029 (Expected)',
      description:
        'My academic coursework includes Object-Oriented Programming, Python Programming, Data Structures & Algorithms, Discrete Mathematics, Linear Algebra, Probability, and Statistics.'
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Kalukheda',
      degree: 'Senior Secondary Education - CBSE',
      period: '2024 - 2025'
    },
    {
      institution: 'Jawahar Navodaya Vidyalaya, Kalukheda',
      degree: 'Secondary School Certificate - CBSE',
      period: '2022 - 2023'
    }
  ] as EducationItem[],
  interests: [
    'Artificial Intelligence & Machine Learning',
    'Software Development',
    'Web Development',
    'Generative AI',
    'Natural Language Processing (NLP)',
    'Data Analytics',
    'Problem Solving',
    'Entrepreneurship & Innovation'
  ],
  learningJourney: [
    'During my learning journey, I have worked on projects related to smart agriculture, healthcare, generative AI, and web development. These experiences have helped me understand how technical concepts can be converted into practical solutions.',
    'I have also participated in technical events and hackathons such as Smart India Hackathon, AI Manthan Hackathon, and HackXcelerate - Google Cloud College Hackathon. These experiences have improved my teamwork, communication, presentation, and problem-solving abilities.'
  ],
  strengths: [
    'Analytical Problem Solving',
    'Creative Thinking',
    'Team Collaboration',
    'Rapid Technological Adaptability',
    'Communication',
    'Continuous Learning',
    'Leadership & Event Coordination'
  ],
  futureGoals: [
    'My goal is to become a skilled software developer with strong expertise in Artificial Intelligence and Machine Learning. I want to gain real-world experience and work on innovative projects that can create meaningful solutions.',
    'In the future, I aim to continuously expand my technical knowledge, work with talented teams, and build applications that are useful, scalable, and user-friendly.'
  ]
};

export const skillsData = {
  intro:
    'I am continuously developing my technical skills through academic learning, personal projects, hackathons, and hands-on experimentation.',
  categories: [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'C++', 'JavaScript - Basics']
    },
    {
      title: 'Web Technologies 🌐',
      skills: ['HTML5', 'CSS3', 'Modern UI Layouts', 'DOM Manipulation', 'Responsive Web Design']
    },
    {
      title: 'AI & Machine Learning 🤖',
      skills: [
        'Machine Learning Fundamentals',
        'Data Analysis',
        'Prompt Engineering',
        'Generative AI',
        'Natural Language Processing (NLP)',
        'Supervised Learning Concepts',
        'Feature Extraction',
        'Model Evaluation'
      ]
    },
    {
      title: 'Developer Tools & IDEs',
      skills: ['Visual Studio Code', 'Git', 'GitHub', 'Google Colab', 'MATLAB Workbench']
    },
    {
      title: 'Core Computer Science',
      skills: [
        'Object-Oriented Programming',
        'Data Structures & Algorithms - Basics',
        'Discrete Mathematics',
        'Linear Algebra',
        'Probability & Statistics',
        'Software Design Principles'
      ]
    },
    {
      title: 'Personal Strengths ⭐',
      skills: [
        'Analytical Problem Solving',
        'Creative Logic Design',
        'Team Collaboration',
        'Rapid Technological Adaptability',
        'Communication',
        'Continuous Learning'
      ]
    }
  ] as SkillCategory[]
};

export const projectsData = {
  intro: [
    'Projects are an important part of my learning journey. They allow me to apply theoretical knowledge to practical problems and understand how different technologies work together.',
    'Here are some of the projects I have worked on in the areas of Artificial Intelligence, Machine Learning, healthcare, agriculture, and web development.'
  ],
  projects: [
    {
      id: 'agreesense',
      title: 'AgreeSense - Smart Agricultural Intelligence System',
      subtitle: 'Smart Agriculture & Predictive Analysis',
      description: [
        'AgreeSense is an intelligent agricultural solution designed to help farmers make better decisions related to crop yield and soil treatment based on environmental parameters.',
        'The project explores predictive data analysis using Python to evaluate factors such as soil pH, moisture levels, and climatic indicators.'
      ],
      highlights: [
        'Designed an intelligent agriculture-focused solution.',
        'Worked with environmental and agricultural parameters.',
        'Explored predictive data models using Python.',
        'Focused on soil, moisture, and climatic indicators.',
        'Explored IoT sensor data integration concepts.'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analytics', 'IoT']
    },
    {
      id: 'doctorai',
      title: 'DoctorAI - Intelligent Healthcare Diagnostic & Assistive Platform',
      subtitle: 'Healthcare Diagnostic Assistant',
      description: [
        'DoctorAI is an intelligent healthcare assistant concept designed to evaluate preliminary user symptom inputs and provide general healthcare guidance.',
        'The project explores prompt engineering and structured NLP workflows to provide safe, contextual, and informative preliminary health insights.'
      ],
      highlights: [
        'Designed an interactive healthcare assistant concept.',
        'Worked with structured symptom inputs.',
        'Explored prompt engineering techniques.',
        'Used rule-based NLP workflow concepts.',
        'Created a multi-page web interface.',
        'Focused on ethical and privacy-conscious AI usage.'
      ],
      technologies: ['Python', 'Medical Datasets', 'Prompt Engineering', 'HTML5', 'CSS3']
    },
    {
      id: 'sahayni',
      title: 'Sahayni.AI - Creative Natural Language Generation Engine',
      subtitle: 'Bilingual Generative AI Engine',
      description: [
        'Sahayni.AI was developed as part of an AI Manthan Hackathon. The project focused on creating a domain-specific generative AI platform capable of producing creative text in Hindi and English.'
      ],
      highlights: [
        'Worked as part of a multidisciplinary team.',
        'Developed a domain-specific generative AI concept.',
        'Explored prompt engineering techniques.',
        'Worked with Hindi and English text generation.',
        'Used Git and GitHub for code integration.',
        'Presented a working prototype to the evaluation jury.'
      ],
      technologies: ['Python', 'Generative AI', 'NLP', 'Git', 'GitHub']
    },
    {
      id: 'portfolio',
      title: 'Personal Web Development Portfolio',
      subtitle: 'Responsive Web Development',
      description: [
        'I have created personal web development projects to strengthen my understanding of frontend development, responsive layouts, and interactive web interfaces.'
      ],
      highlights: [
        'Created responsive web pages.',
        'Practiced CSS Grid and Flexbox layouts.',
        'Developed interactive UI components.',
        'Practiced DOM manipulation.',
        'Worked on mobile-friendly designs.',
        'Used Git and GitHub for project management.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub']
    }
  ] as ProjectItem[],
  hackathons: [
    {
      name: 'Smart India Hackathon (SIH)',
      year: '2023-2024',
      description: 'Participated in a national-level innovation competition focused on real-world software solutions.'
    },
    {
      name: 'AI Manthan Hackathon',
      year: '2024',
      description: 'Worked on the Sahayni.AI generative AI project.'
    },
    {
      name: 'HackXcelerate - Google Cloud College Hackathon',
      year: '2024',
      description: 'Explored Google Cloud Platform, cloud-hosted APIs, and scalable application architecture.'
    }
  ] as HackathonItem[]
};

export const contactData = {
  intro: [
    'Thank you for visiting my portfolio! I am always interested in connecting with people who share an interest in technology, Artificial Intelligence, software development, and innovation.',
    'Feel free to reach out if you would like to discuss a project, collaborate on an idea, or simply connect and share knowledge.'
  ],
  name: 'Tanisha Matoliya',
  location: 'Indore, Madhya Pradesh, India',
  email: 'tanishamatoliya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tanisha-matoliya/',
  github: 'https://github.com/tanishamatoliya',
  languages: [
    { name: 'English', level: 'Full Professional Proficiency' },
    { name: 'Hindi', level: 'Native / Bilingual Proficiency' }
  ],
  thankYouMessage: [
    'Thank you for taking the time to explore my portfolio. I hope this website gives you a better understanding of my skills, projects, interests, and learning journey.',
    'I look forward to connecting with you and exploring potential opportunities for collaboration, learning, and growth.',
    'Learning, building, and sharing knowledge is a continuous journey, and I am excited to be part of the ever-evolving world of technology.'
  ]
};

export const pageThemes: Record<NavTab, { bg: string; title: string }> = {
  home: { bg: '#cfaac7', title: 'My Portfolio😊' },
  about: { bg: '#d6bae7', title: 'About | Tanisha Matoliya' },
  skills: { bg: '#bdc0d8', title: 'Skills | Tanisha Matoliya' },
  projects: { bg: '#bcd5db', title: 'Projects | Tanisha Matoliya' },
  contact: { bg: '#acc5b3', title: 'Contact | Tanisha Matoliya' }
};
