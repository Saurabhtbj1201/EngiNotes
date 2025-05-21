import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterNotes } from '../data/notes';
import { FilterOptions } from '../types';
import NotesList from '../components/notes/NotesList';

const NotesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: searchParams.get('q') || undefined,
    branch: searchParams.get('branch') || undefined,
    semester: searchParams.get('semester') ? parseInt(searchParams.get('semester')!) : undefined,
    subject: searchParams.get('subject') || undefined,
    tags: searchParams.get('tags') ? searchParams.get('tags')!.split(',') : undefined,
  });
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (filters.searchQuery) params.set('q', filters.searchQuery);
    if (filters.branch) params.set('branch', filters.branch);
    if (filters.semester) params.set('semester', filters.semester.toString());
    if (filters.subject) params.set('subject', filters.subject);
    if (filters.tags && filters.tags.length > 0) params.set('tags', filters.tags.join(','));
    
    setSearchParams(params);
    
    // Update page title
    document.title = filters.searchQuery
      ? `Search: ${filters.searchQuery} | EngiNotes`
      : 'Browse Notes | EngiNotes';
  }, [filters, setSearchParams]);
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  const filteredNotes = filterNotes(filters);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">
          {filters.searchQuery
            ? `Search Results: "${filters.searchQuery}"`
            : 'Browse All Notes'}
        </h1>
        {filteredNotes.length > 0 && (
          <p className="mt-2 text-neutral-600">
            Showing {filteredNotes.length} {filteredNotes.length === 1 ? 'note' : 'notes'}
          </p>
        )}
      </div>
      
      <NotesList
        notes={filteredNotes}
        showFilters={true}
        onFilterChange={handleFilterChange}
        currentFilters={filters}
      />
    </div>
  );
};

export default NotesPage;