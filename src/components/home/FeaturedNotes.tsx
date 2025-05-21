import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import NotesList from '../notes/NotesList';
import { getRecentNotes } from '../../data/notes';

const FeaturedNotes: React.FC = () => {
  const recentNotes = getRecentNotes(6);
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-neutral-900">Recent Notes</h2>
          <Link 
            to="/notes" 
            className="flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View All
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <NotesList notes={recentNotes} isCompact={true} />
      </div>
    </section>
  );
};

export default FeaturedNotes;