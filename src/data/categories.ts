import { Branch, Subject } from '../types';

export const branches: Branch[] = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    description: 'Study of computers, programming, algorithms, and computational systems.',
    iconName: 'Monitor',
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    description: 'Design, analysis, and manufacturing of mechanical systems.',
    iconName: 'Cog',
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'ee',
    name: 'Electrical Engineering',
    description: 'Study of electricity, electronics, and electromagnetism.',
    iconName: 'Zap',
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    description: 'Design and construction of physical and naturally built environment.',
    iconName: 'Building2',
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 'ece',
    name: 'Electronics Engineering',
    description: 'Study of electronic circuits, devices, and systems.',
    iconName: 'Cpu',
    semesters: [1, 2, 3, 4, 5, 6, 7, 8],
  },
];

export const subjects: Subject[] = [
  // Computer Science Engineering Subjects
  // Semester 1
  {
    id: 'cse-math1',
    name: 'Engineering Mathematics-I',
    description: 'Fundamental mathematical concepts for engineering applications.',
    branchId: 'cse',
    semester: 1,
    iconName: 'Calculator',
  },
  {
    id: 'cse-physics',
    name: 'Engineering Physics',
    description: 'Basic physics principles for engineering applications.',
    branchId: 'cse',
    semester: 1,
    iconName: 'Atom',
  },
  {
    id: 'cse-bee',
    name: 'Basics of Electrical & Electronics Engineering',
    description: 'Introduction to electrical and electronic principles.',
    branchId: 'cse',
    semester: 1,
    iconName: 'Zap',
  },
  {
    id: 'cse-mechanics',
    name: 'Engineering Mechanics',
    description: 'Study of forces and their effects on engineering systems.',
    branchId: 'cse',
    semester: 1,
    iconName: 'Cog',
  },
  {
    id: 'cse-c',
    name: 'Programming in C',
    description: 'Introduction to programming using C language.',
    branchId: 'cse',
    semester: 1,
    iconName: 'Code',
  },
  {
    id: 'cse-comm',
    name: 'Communication Skills',
    description: 'Development of professional communication abilities.',
    branchId: 'cse',
    semester: 1,
    iconName: 'MessageSquare',
  },
  {
    id: 'cse-graphics',
    name: 'Engineering Graphics',
    description: 'Technical drawing and design visualization.',
    branchId: 'cse',
    semester: 1,
    iconName: 'PenTool',
  },

  // Semester 2
  {
    id: 'cse-math2',
    name: 'Engineering Mathematics-II',
    description: 'Advanced mathematical concepts for engineering.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Calculator',
  },
  {
    id: 'cse-chemistry',
    name: 'Engineering Chemistry',
    description: 'Chemical principles and their engineering applications.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Flask',
  },
  {
    id: 'cse-ds',
    name: 'Data Structures',
    description: 'Organization and management of data for efficient access.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Database',
  },
  {
    id: 'cse-cpp',
    name: 'Object Oriented Programming in C++',
    description: 'Programming using object-oriented principles in C++.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Code2',
  },
  {
    id: 'cse-dld',
    name: 'Digital Logic Design',
    description: 'Design of digital circuits and systems.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Cpu',
  },
  {
    id: 'cse-envsc',
    name: 'Environmental Science',
    description: 'Study of environmental systems and sustainability.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Leaf',
  },
  {
    id: 'cse-workshop',
    name: 'Workshop Practices',
    description: 'Hands-on training in engineering workshop.',
    branchId: 'cse',
    semester: 2,
    iconName: 'Tool',
  },

  // Semester 3
  {
    id: 'cse-discrete',
    name: 'Discrete Mathematics',
    description: 'Mathematical structures for computer science.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Hash',
  },
  {
    id: 'cse-coa',
    name: 'Computer Organization and Architecture',
    description: 'Study of computer hardware organization and design.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Cpu',
  },
  {
    id: 'cse-os',
    name: 'Operating Systems',
    description: 'Management of computer hardware and software resources.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Settings2',
  },
  {
    id: 'cse-dbms',
    name: 'Database Management Systems',
    description: 'Design and management of databases.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Database',
  },
  {
    id: 'cse-dc',
    name: 'Data Communication',
    description: 'Principles of data transmission and networking.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Network',
  },
  {
    id: 'cse-python',
    name: 'Python Programming',
    description: 'Programming using Python language.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Code',
  },

  // Semester 4
  {
    id: 'cse-algo',
    name: 'Design and Analysis of Algorithms',
    description: 'Study of algorithmic solutions to problems.',
    branchId: 'cse',
    semester: 4,
    iconName: 'GitBranch',
  },
  {
    id: 'cse-se',
    name: 'Software Engineering',
    description: 'Principles of software development and management.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Settings',
  },
  {
    id: 'cse-mp',
    name: 'Microprocessors and Microcontrollers',
    description: 'Study of microprocessor architecture and programming.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Cpu',
  },
  {
    id: 'cse-cn',
    name: 'Computer Networks',
    description: 'Design and implementation of computer networks.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Network',
  },
  {
    id: 'cse-web',
    name: 'Web Technologies',
    description: 'Development of web applications.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Globe',
  },
  {
    id: 'cse-techcomm',
    name: 'Technical Presentation & Communication',
    description: 'Professional communication skills for engineers.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Presentation',
  },

  // Semester 5
  {
    id: 'cse-toc',
    name: 'Theory of Computation',
    description: 'Study of computational models and their capabilities.',
    branchId: 'cse',
    semester: 5,
    iconName: 'Binary',
  },
  {
    id: 'cse-ai',
    name: 'Artificial Intelligence',
    description: 'Introduction to AI concepts and applications.',
    branchId: 'cse',
    semester: 5,
    iconName: 'Brain',
  },
  {
    id: 'cse-ml',
    name: 'Machine Learning',
    description: 'Algorithms and techniques for machine learning.',
    branchId: 'cse',
    semester: 5,
    iconName: 'TreePine',
  },
  {
    id: 'cse-compiler',
    name: 'Compiler Design',
    description: 'Principles of programming language implementation.',
    branchId: 'cse',
    semester: 5,
    iconName: 'Code2',
  },
  {
    id: 'cse-cloud',
    name: 'Cloud Computing',
    description: 'Distributed computing using cloud services.',
    branchId: 'cse',
    semester: 5,
    iconName: 'Cloud',
  },
  {
    id: 'cse-mini',
    name: 'Mini Project',
    description: 'Small-scale software development project.',
    branchId: 'cse',
    semester: 5,
    iconName: 'Package',
  },

  // Semester 6
  {
    id: 'cse-dwh',
    name: 'Data Mining and Data Warehousing',
    description: 'Techniques for data analysis and storage.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Database',
  },
  {
    id: 'cse-iot',
    name: 'Internet of Things (IoT)',
    description: 'Connected devices and their applications.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Wifi',
  },
  {
    id: 'cse-mad',
    name: 'Mobile Application Development',
    description: 'Development of mobile applications.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Smartphone',
  },
  {
    id: 'cse-security',
    name: 'Cyber Security',
    description: 'Computer and network security principles.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Shield',
  },
  {
    id: 'cse-nlp',
    name: 'Natural Language Processing',
    description: 'Processing and understanding human language.',
    branchId: 'cse',
    semester: 6,
    iconName: 'MessageSquare',
  },
  {
    id: 'cse-minor',
    name: 'Minor Project',
    description: 'Medium-scale software development project.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Package',
  },

  // Semester 7
  {
    id: 'cse-bigdata',
    name: 'Big Data Analytics',
    description: 'Analysis of large-scale data sets.',
    branchId: 'cse',
    semester: 7,
    iconName: 'BarChart',
  },
  {
    id: 'cse-devops',
    name: 'DevOps',
    description: 'Development and operations integration.',
    branchId: 'cse',
    semester: 7,
    iconName: 'GitMerge',
  },
  {
    id: 'cse-dl',
    name: 'Deep Learning',
    description: 'Advanced neural network architectures.',
    branchId: 'cse',
    semester: 7,
    iconName: 'Brain',
  },
  {
    id: 'cse-training',
    name: 'Industrial Training / Internship',
    description: 'Practical industry experience.',
    branchId: 'cse',
    semester: 7,
    iconName: 'Briefcase',
  },
  {
    id: 'cse-project1',
    name: 'Project Phase I',
    description: 'First phase of major project.',
    branchId: 'cse',
    semester: 7,
    iconName: 'Package',
  },

  // Semester 8
  {
    id: 'cse-ethical',
    name: 'Ethical Hacking & Network Security',
    description: 'Security testing and network protection.',
    branchId: 'cse',
    semester: 8,
    iconName: 'Shield',
  },
  {
    id: 'cse-arvr',
    name: 'Augmented and Virtual Reality',
    description: 'Development of AR/VR applications.',
    branchId: 'cse',
    semester: 8,
    iconName: 'Glasses',
  },
  {
    id: 'cse-viva',
    name: 'Comprehensive Viva',
    description: 'Final oral examination.',
    branchId: 'cse',
    semester: 8,
    iconName: 'MessageCircle',
  },
  {
    id: 'cse-project2',
    name: 'Project Phase II',
    description: 'Final phase of major project.',
    branchId: 'cse',
    semester: 8,
    iconName: 'Package',
  },

  // Mechanical Engineering Subjects
  // Semester 1
  {
    id: 'me-math1',
    name: 'Engineering Mathematics-I',
    description: 'Fundamental mathematical concepts for mechanical engineering.',
    branchId: 'me',
    semester: 1,
    iconName: 'Calculator',
  },
  {
    id: 'me-physics',
    name: 'Engineering Physics',
    description: 'Physics principles for mechanical engineering.',
    branchId: 'me',
    semester: 1,
    iconName: 'Atom',
  },
  {
    id: 'me-mechanics',
    name: 'Engineering Mechanics',
    description: 'Study of forces and motion in mechanical systems.',
    branchId: 'me',
    semester: 1,
    iconName: 'Cog',
  },
  {
    id: 'me-graphics',
    name: 'Engineering Graphics',
    description: 'Technical drawing for mechanical design.',
    branchId: 'me',
    semester: 1,
    iconName: 'PenTool',
  },
  {
    id: 'me-workshop',
    name: 'Workshop Practice',
    description: 'Hands-on mechanical workshop training.',
    branchId: 'me',
    semester: 1,
    iconName: 'Tool',
  },

  // Add remaining subjects for other branches and semesters...
  // The pattern continues similarly for all branches and semesters
];

export const getBranchById = (id: string): Branch | undefined => {
  return branches.find(branch => branch.id === id);
};

export const getSubjectById = (id: string): Subject | undefined => {
  return subjects.find(subject => subject.id === id);
};

export const getSubjectsByBranch = (branchId: string): Subject[] => {
  return subjects.filter(subject => subject.branchId === branchId);
};

export const getSubjectsBySemester = (semester: number): Subject[] => {
  return subjects.filter(subject => subject.semester === semester);
};

export const getSubjectsByBranchAndSemester = (branchId: string, semester: number): Subject[] => {
  return subjects.filter(subject => subject.branchId === branchId && subject.semester === semester);
};

export const getAllSemesters = (): number[] => {
  return [1, 2, 3, 4, 5, 6, 7, 8];
};