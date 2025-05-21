import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, Folder } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { 
  getBranchById, 
  getSubjectById, 
  getSubjectsByBranch
} from '../data/categories';
import { filterNotes } from '../data/notes';
import NotesList from '../components/notes/NotesList';
import CategoryCard from '../components/categories/CategoryCard';

const CategoryDetailPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const branch = categoryId ? getBranchById(categoryId) : undefined;
  const subject = categoryId ? getSubjectById(categoryId) : undefined;
  
  const relatedSubjects = branch ? getSubjectsByBranch(branch.id) : [];
  
  const filteredNotes = categoryId
    ? filterNotes({
        branch: branch?.id,
        subject: subject?.id,
      })
    : [];
  
  useEffect(() => {
    if (!categoryId) {
      setError('Category ID is required');
      setLoading(false);
      return;
    }
    
    if (!branch && !subject) {
      setError('Category not found');
    }
    
    setLoading(false);
    
    // Update page title
    document.title = branch 
      ? `${branch.name} | EngiNotes` 
      : subject 
        ? `${subject.name} | EngiNotes` 
        : 'Category | EngiNotes';
  }, [categoryId, branch, subject]);
  
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-primary-300 border-current border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-neutral-600">Loading category details...</p>
      </div>
    );
  }
  
  if (error || (!branch && !subject)) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Folder className="h-16 w-16 text-neutral-300 mx-auto" />
          <h2 className="mt-4 text-2xl font-semibold text-neutral-700">{error || 'Category not found'}</h2>
          <p className="mt-2 text-neutral-500">The category you're looking for doesn't exist or has been removed.</p>
          <Link to="/categories" className="mt-6 inline-block btn-primary">
            <ChevronLeft className="h-4 w-4 mr-1 inline" />
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }
  
  const renderBranchDetail = () => {
    if (!branch) return null;
    
    const BranchIcon = branch.iconName ? LucideIcons[branch.iconName as keyof typeof LucideIcons] : LucideIcons.Folder;
    
    return (
      <>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="md:flex items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="h-32 w-32 rounded-full bg-primary-100 flex items-center justify-center">
                <BranchIcon className="h-16 w-16 text-primary-600" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold text-neutral-900">{branch.name}</h1>
              <p className="mt-2 text-lg text-neutral-700">{branch.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {branch.semesters.map((semester) => (
                  <span key={semester} className="tag-secondary">
                    Semester {semester}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {relatedSubjects.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Subjects in {branch.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSubjects.map((subject) => (
                <CategoryCard key={subject.id} item={subject} type="subject" />
              ))}
            </div>
          </div>
        )}
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Notes from {branch.name}</h2>
          <NotesList notes={filteredNotes} />
        </div>
      </>
    );
  };
  
  const renderSubjectDetail = () => {
    if (!subject) return null;
    
    const SubjectIcon = subject.iconName ? LucideIcons[subject.iconName as keyof typeof LucideIcons] : LucideIcons.BookOpen;
    const subjectBranch = getBranchById(subject.branchId);
    
    return (
      <>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10">
          <div className="md:flex items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="h-32 w-32 rounded-full bg-secondary-100 flex items-center justify-center">
                <SubjectIcon className="h-16 w-16 text-secondary-500" />
              </div>
            </div>
            <div className="md:w-3/4">
              <div className="flex items-center mb-2">
                {subjectBranch && (
                  <Link to={`/categories/${subjectBranch.id}`} className="text-primary-600 hover:text-primary-700">
                    {subjectBranch.name}
                  </Link>
                )}
                <span className="mx-2 text-neutral-400">/</span>
                <span className="tag-secondary">Semester {subject.semester}</span>
              </div>
              <h1 className="text-3xl font-bold text-neutral-900">{subject.name}</h1>
              <p className="mt-2 text-lg text-neutral-700">{subject.description}</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-6">Notes for {subject.name}</h2>
          <NotesList notes={filteredNotes} />
        </div>
      </>
    );
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link to="/categories" className="flex items-center text-primary-600 hover:text-primary-700">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Categories
        </Link>
      </div>
      
      {branch ? renderBranchDetail() : renderSubjectDetail()}
    </div>
  );
};

export default CategoryDetailPage;