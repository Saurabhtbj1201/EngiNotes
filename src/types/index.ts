export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  dob: string; // Format: YYYY-MM-DD
}

export interface Note {
  id: string;
  title: string;
  subject: string;
  description: string;
  tags: string[];
  branch: string;
  semester: number;
  dateUploaded: string; // Format: YYYY-MM-DD
  filePath: string;
  thumbnailUrl?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  type: 'branch' | 'subject';
  parentId?: string; // For subjects, reference to their branch
  iconName?: string;
}

export interface Branch {
  id: string;
  name: string;
  description: string;
  iconName?: string;
  semesters: number[]; // Available semesters for this branch
}

export interface Subject {
  id: string;
  name: string;
  description: string;
  branchId: string;
  semester: number;
  iconName?: string;
}

export interface FilterOptions {
  branch?: string;
  semester?: number;
  subject?: string;
  searchQuery?: string;
  tags?: string[];
}