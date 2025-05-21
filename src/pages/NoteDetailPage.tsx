import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, FileText, Download, ChevronLeft, Tag, BookOpen, Bookmark } from 'lucide-react';
import { getNoteById } from '../data/notes';
import { Note } from '../types';
import { useAuth } from '../contexts/AuthContext';

interface NoteDetailPageProps {
  download?: boolean;
}

const NoteDetailPage: React.FC<NoteDetailPageProps> = ({ download = false }) => {
  const { noteId } = useParams<{ noteId: string }>();
  const [note, setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloadStarted, setDownloadStarted] = useState(false);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!noteId) {
      setError('Note ID is required');
      setLoading(false);
      return;
    }
    
    const fetchedNote = getNoteById(noteId);
    
    if (fetchedNote) {
      setNote(fetchedNote);
      document.title = `${fetchedNote.title} | EngiNotes`;
      
      if (download && isAuthenticated) {
        // Simulate download after a short delay
        setTimeout(() => {
          setDownloadStarted(true);
        }, 1500);
      }
    } else {
      setError('Note not found');
    }
    
    setLoading(false);
  }, [noteId, download, isAuthenticated]);
  
  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-primary-300 border-current border-r-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-4 text-neutral-600">Loading note details...</p>
      </div>
    );
  }
  
  if (error || !note) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <FileText className="h-16 w-16 text-neutral-300 mx-auto" />
          <h2 className="mt-4 text-2xl font-semibold text-neutral-700">{error || 'Note not found'}</h2>
          <p className="mt-2 text-neutral-500">The note you're looking for doesn't exist or has been removed.</p>
          <Link to="/notes" className="mt-6 inline-block btn-primary">
            <ChevronLeft className="h-4 w-4 mr-1 inline" />
            Back to Notes
          </Link>
        </div>
      </div>
    );
  }
  
  // Simulating download behavior
  if (download) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          {downloadStarted ? (
            <>
              <div className="text-success-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-800">Download Started!</h2>
              <p className="mt-2 text-neutral-600">
                Your download should begin automatically. If it doesn't, 
                <a href="#" className="text-primary-600 hover:text-primary-700 font-medium"> click here</a> to try again.
              </p>
              <div className="mt-8">
                <Link to={`/notes/${note.id}`} className="btn-primary">
                  View Note Details
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="animate-pulse">
                <Download className="h-16 w-16 text-primary-500 mx-auto" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-neutral-800">Preparing Download</h2>
              <p className="mt-2 text-neutral-600">Please wait while we prepare your download...</p>
              <div className="mt-6">
                <div className="w-48 h-2 mx-auto bg-primary-100 rounded-full">
                  <div className="h-full bg-primary-500 rounded-full animate-[width] w-2/3"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
  
  const formattedDate = new Date(note.dateUploaded).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link to="/notes" className="flex items-center text-primary-600 hover:text-primary-700">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Notes
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-2/5 h-64 md:h-auto relative">
            {note.thumbnailUrl ? (
              <img
                src={note.thumbnailUrl}
                alt={note.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-primary-100">
                <FileText className="h-24 w-24 text-primary-300" />
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:hidden">
              <h1 className="text-white text-xl font-bold line-clamp-2">{note.title}</h1>
            </div>
          </div>
          
          <div className="p-6 md:w-3/5">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag-primary">{note.branch}</span>
              <span className="tag-secondary">Semester {note.semester}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 hidden md:block">{note.title}</h1>
            
            <div className="flex items-center mt-4 text-primary-700">
              <BookOpen className="h-5 w-5 mr-2" />
              <span className="font-medium">{note.subject}</span>
            </div>
            
            <div className="flex items-center mt-3 text-neutral-500 text-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Uploaded on {formattedDate}</span>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-neutral-700 leading-relaxed">{note.description}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span key={tag} className="tag bg-neutral-100 text-neutral-700 flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Link to={`/download/${note.id}`} className="btn-primary flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download Note
                </Link>
              ) : (
                <Link to="/login" className="btn-primary flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Sign in to Download
                </Link>
              )}
              
              <button className="btn-outline flex items-center justify-center">
                <Bookmark className="h-5 w-5 mr-2" />
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Notes Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Notes</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-neutral-100 rounded-lg p-6 animate-pulse">
              <div className="h-32 bg-neutral-200 rounded-md mb-4"></div>
              <div className="h-6 bg-neutral-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;