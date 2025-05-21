import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen, HelpCircle } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | EngiNotes';
  }, []);
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-neutral-900">Page Not Found</h2>
        <p className="mt-4 text-lg text-neutral-600 max-w-lg mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary flex items-center justify-center">
            <Home className="h-5 w-5 mr-2" />
            Go to Homepage
          </Link>
          <Link to="/notes" className="btn-outline flex items-center justify-center">
            <BookOpen className="h-5 w-5 mr-2" />
            Browse Notes
          </Link>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
              <Search className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Search for Notes</h3>
            <p className="mt-2 text-neutral-600">
              Try searching for the content you're looking for.
            </p>
            <Link to="/notes" className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium">
              Search Notes →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Browse Categories</h3>
            <p className="mt-2 text-neutral-600">
              Explore our collection of engineering categories.
            </p>
            <Link to="/categories" className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium">
              View Categories →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-primary-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Need Help?</h3>
            <p className="mt-2 text-neutral-600">
              Contact us if you can't find what you're looking for.
            </p>
            <a href="mailto:support@enginotes.com" className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-medium">
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;