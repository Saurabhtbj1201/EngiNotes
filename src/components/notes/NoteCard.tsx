import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Download } from 'lucide-react';
import { Note } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

interface NoteCardProps {
  note: Note;
  isCompact?: boolean;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, isCompact = false }) => {
  const { isAuthenticated } = useAuth();
  const { id, title, subject, description, branch, semester, tags, dateUploaded, thumbnailUrl } = note;
  
  const formattedDate = new Date(dateUploaded).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  
  if (isCompact) {
    return (
      <div className="card overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300">
        <div className="h-32 overflow-hidden bg-neutral-200">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-primary-100">
              <FileText className="h-12 w-12 text-primary-300" />
            </div>
          )}
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <p className="text-sm text-neutral-500 mt-1">{subject}</p>
          <div className="mt-3 flex items-center justify-between">
            <Link
              to={`/notes/${id}`}
              className="text-primary-600 text-sm hover:text-primary-700 font-medium"
            >
              View Details
            </Link>
            <span className="text-xs text-neutral-500 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {formattedDate}
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="card overflow-hidden hover:scale-[1.01] transition-transform duration-300">
      <div className="md:flex">
        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover md:h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-primary-100">
              <FileText className="h-16 w-16 text-primary-300" />
            </div>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="tag-primary">{branch}</span>
            <span className="tag-secondary">Semester {semester}</span>
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="tag bg-neutral-100 text-neutral-600">
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="tag bg-neutral-50 text-neutral-500">
                +{tags.length - 2} more
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary-600 font-medium mt-1">{subject}</p>
          
          <p className="text-neutral-600 mt-3 line-clamp-2">{description}</p>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center text-neutral-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
            
            <div className="flex space-x-3">
              <Link
                to={`/notes/${id}`}
                className="btn-outline text-sm py-1.5"
              >
                View Details
              </Link>
              
              {isAuthenticated ? (
                <Link
                  to={`/download/${id}`}
                  className="btn-primary text-sm py-1.5"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="btn-primary text-sm py-1.5"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Sign in to Download
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;