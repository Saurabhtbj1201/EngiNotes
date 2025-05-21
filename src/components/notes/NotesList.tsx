import React from 'react';
import { FilterOptions, Note } from '../../types';
import NoteCard from './NoteCard';
import NotesFilter from './NotesFilter';

interface NotesListProps {
  notes: Note[];
  isLoading?: boolean;
  isCompact?: boolean;
  showFilters?: boolean;
  onFilterChange?: (options: FilterOptions) => void;
  currentFilters?: FilterOptions;
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  isLoading = false,
  isCompact = false,
  showFilters = false,
  onFilterChange,
  currentFilters
}) => {
  if (isLoading) {
    return (
      <div className="py-10 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary-300 border-current border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-neutral-600">Loading notes...</p>
      </div>
    );
  }

  if (notes.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-neutral-500 text-lg">No notes found matching your criteria.</p>
        <p className="text-neutral-400 mt-2">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div>
      {showFilters && onFilterChange && (
        <div className="mb-8">
          <NotesFilter currentFilters={currentFilters || {}} onFilterChange={onFilterChange} />
        </div>
      )}
      
      <div className={isCompact 
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        : "space-y-6"
      }>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} isCompact={isCompact} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;