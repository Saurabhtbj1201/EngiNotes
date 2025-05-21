import { Note } from '../types';

export const notes: Note[] = [
  {
    id: '1',
    title: 'Introduction to Algorithms and Data Structures',
    subject: 'Data Structures',
    description: 'Comprehensive notes covering basic algorithms, time complexity analysis, and fundamental data structures including arrays, linked lists, stacks, and queues.',
    tags: ['algorithms', 'data structures', 'complexity analysis', 'beginner'],
    branch: 'Computer Science',
    semester: 3,
    dateUploaded: '2023-10-15',
    filePath: '/files/intro-to-algorithms.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    title: 'Advanced Calculus for Engineers',
    subject: 'Mathematics',
    description: 'Detailed notes on multivariable calculus, vector calculus, differential equations and their applications in engineering problems.',
    tags: ['calculus', 'mathematics', 'differential equations', 'engineering math'],
    branch: 'Mechanical Engineering',
    semester: 2,
    dateUploaded: '2023-09-22',
    filePath: '/files/advanced-calculus.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    title: 'Electric Circuit Theory and Analysis',
    subject: 'Circuit Theory',
    description: 'Comprehensive study material covering Ohm\'s law, Kirchhoff\'s laws, network theorems, and circuit analysis techniques with practical examples.',
    tags: ['circuits', 'electrical', 'network analysis', 'theorems'],
    branch: 'Electrical Engineering',
    semester: 3,
    dateUploaded: '2023-11-05',
    filePath: '/files/circuit-theory.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/2834393/pexels-photo-2834393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    title: 'Fundamentals of Database Management Systems',
    subject: 'Database Systems',
    description: 'Notes on relational database concepts, normalization, SQL, transaction management, and database design principles.',
    tags: ['database', 'SQL', 'DBMS', 'normalization'],
    branch: 'Computer Science',
    semester: 4,
    dateUploaded: '2023-08-30',
    filePath: '/files/dbms-notes.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    title: 'Strength of Materials and Structural Analysis',
    subject: 'Mechanics of Materials',
    description: 'Complete notes on stress, strain, deformation, beam analysis, and structural design principles for civil engineering students.',
    tags: ['structural analysis', 'mechanics', 'civil engineering', 'strength'],
    branch: 'Civil Engineering',
    semester: 4,
    dateUploaded: '2023-07-12',
    filePath: '/files/strength-of-materials.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    title: 'Principles of Object-Oriented Programming',
    subject: 'Programming',
    description: 'Detailed notes on OOP concepts including classes, objects, inheritance, polymorphism, encapsulation and design patterns.',
    tags: ['OOP', 'programming', 'Java', 'design patterns'],
    branch: 'Computer Science',
    semester: 3,
    dateUploaded: '2023-10-28',
    filePath: '/files/oop-principles.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7',
    title: 'Thermodynamics and Heat Transfer',
    subject: 'Thermodynamics',
    description: 'Comprehensive notes on laws of thermodynamics, entropy, enthalpy, heat engines, refrigeration cycles, and heat transfer mechanisms.',
    tags: ['thermodynamics', 'heat transfer', 'mechanical', 'energy'],
    branch: 'Mechanical Engineering',
    semester: 4,
    dateUploaded: '2023-09-15',
    filePath: '/files/thermodynamics.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '8',
    title: 'Digital Signal Processing Fundamentals',
    subject: 'Signal Processing',
    description: 'Study notes covering signals and systems, Fourier analysis, sampling theory, filter design, and digital processing techniques.',
    tags: ['DSP', 'signals', 'Fourier', 'filter design'],
    branch: 'Electronics Engineering',
    semester: 5,
    dateUploaded: '2023-11-18',
    filePath: '/files/digital-signal-processing.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '9',
    title: 'Introduction to Machine Learning for Engineers',
    subject: 'Machine Learning',
    description: 'Introductory notes on machine learning algorithms, feature engineering, model evaluation, and practical applications in engineering.',
    tags: ['ML', 'AI', 'algorithms', 'data science'],
    branch: 'Computer Science',
    semester: 6,
    dateUploaded: '2023-10-05',
    filePath: '/files/intro-to-ml.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '10',
    title: 'Structural Design of Concrete Buildings',
    subject: 'Structural Engineering',
    description: 'Detailed notes on concrete properties, reinforcement design, column and beam analysis, and building code requirements.',
    tags: ['concrete', 'structures', 'civil engineering', 'design'],
    branch: 'Civil Engineering',
    semester: 6,
    dateUploaded: '2023-08-20',
    filePath: '/files/concrete-structures.pdf',
    thumbnailUrl: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

export const getRecentNotes = (limit = 6): Note[] => {
  return [...notes]
    .sort((a, b) => new Date(b.dateUploaded).getTime() - new Date(a.dateUploaded).getTime())
    .slice(0, limit);
};

export const getPopularNotes = (limit = 6): Note[] => {
  // In a real app, this would be based on download/view counts
  // For demo, we'll just return some random notes
  return [...notes]
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getNoteById = (id: string): Note | undefined => {
  return notes.find(note => note.id === id);
};

export const filterNotes = (options: {
  branch?: string;
  semester?: number;
  subject?: string;
  searchQuery?: string;
  tags?: string[];
}): Note[] => {
  return notes.filter(note => {
    if (options.branch && note.branch !== options.branch) return false;
    if (options.semester && note.semester !== options.semester) return false;
    if (options.subject && note.subject !== options.subject) return false;
    
    if (options.searchQuery) {
      const query = options.searchQuery.toLowerCase();
      const matchesTitle = note.title.toLowerCase().includes(query);
      const matchesDescription = note.description.toLowerCase().includes(query);
      const matchesTags = note.tags.some(tag => tag.toLowerCase().includes(query));
      
      if (!matchesTitle && !matchesDescription && !matchesTags) return false;
    }
    
    if (options.tags && options.tags.length > 0) {
      const hasAllTags = options.tags.every(tag => 
        note.tags.some(noteTag => noteTag.toLowerCase().includes(tag.toLowerCase()))
      );
      if (!hasAllTags) return false;
    }
    
    return true;
  });
};

export const getAllTags = (): string[] => {
  const tagsSet = new Set<string>();
  notes.forEach(note => note.tags.forEach(tag => tagsSet.add(tag)));
  return Array.from(tagsSet).sort();
};