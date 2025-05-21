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
  // Computer Science subjects
  {
    id: 'ds',
    name: 'Data Structures',
    description: 'Organization, management, and storage of data for efficient access and modification.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Database',
  },
  {
    id: 'algo',
    name: 'Algorithms',
    description: 'Study of methods for solving problems and their computational complexity.',
    branchId: 'cse',
    semester: 4,
    iconName: 'GitBranch',
  },
  {
    id: 'dbms',
    name: 'Database Systems',
    description: 'Organization, storage, and retrieval of structured data.',
    branchId: 'cse',
    semester: 4,
    iconName: 'Database',
  },
  {
    id: 'oop',
    name: 'Object-Oriented Programming',
    description: 'Programming paradigm based on the concept of objects and classes.',
    branchId: 'cse',
    semester: 3,
    iconName: 'Code',
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    description: 'Study of algorithms that improve automatically through experience.',
    branchId: 'cse',
    semester: 6,
    iconName: 'Brain',
  },

  // Mechanical Engineering subjects
  {
    id: 'thermo',
    name: 'Thermodynamics',
    description: 'Study of heat, work, and energy, and their relation to temperature, entropy, and energy transfers.',
    branchId: 'me',
    semester: 4,
    iconName: 'Thermometer',
  },
  {
    id: 'mechanics',
    name: 'Engineering Mechanics',
    description: 'Application of mechanics to solve engineering problems.',
    branchId: 'me',
    semester: 2,
    iconName: 'MoveHorizontal',
  },
  {
    id: 'fluid',
    name: 'Fluid Mechanics',
    description: 'Physics of fluids and the forces on them.',
    branchId: 'me',
    semester: 3,
    iconName: 'Droplets',
  },

  // Electrical Engineering subjects
  {
    id: 'circuit',
    name: 'Circuit Theory',
    description: 'Analysis of electrical circuits using principles and theorems.',
    branchId: 'ee',
    semester: 3,
    iconName: 'Circuit',
  },
  {
    id: 'power',
    name: 'Power Systems',
    description: 'Generation, transmission, and distribution of electric power.',
    branchId: 'ee',
    semester: 5,
    iconName: 'Lightbulb',
  },

  // Civil Engineering subjects
  {
    id: 'structure',
    name: 'Structural Engineering',
    description: 'Analysis and design of structures that support or resist loads.',
    branchId: 'ce',
    semester: 6,
    iconName: 'Building',
  },
  {
    id: 'material',
    name: 'Mechanics of Materials',
    description: 'Study of the behavior of solid objects subject to stresses and strains.',
    branchId: 'ce',
    semester: 4,
    iconName: 'Boxes',
  },

  // Electronics Engineering subjects
  {
    id: 'signal',
    name: 'Signal Processing',
    description: 'Analysis, modification, and synthesis of signals such as sound, images, and scientific measurements.',
    branchId: 'ece',
    semester: 5,
    iconName: 'WaveformIcon',
  },
  {
    id: 'comm',
    name: 'Communication Systems',
    description: 'Study of transmission, reception, and processing of information.',
    branchId: 'ece',
    semester: 6,
    iconName: 'Radio',
  },

  // Common subjects for all branches
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Applied mathematics for engineering applications.',
    branchId: 'me',
    semester: 2,
    iconName: 'PieChart',
  },
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