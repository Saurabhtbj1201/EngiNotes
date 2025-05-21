import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Download, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-br from-primary-900 to-primary-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 w-full h-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Quality Study Materials for Engineering Students
            </h1>
            <p className="mt-6 text-lg text-primary-100 leading-relaxed">
              Access comprehensive notes, study materials, and resources across various engineering disciplines. Enhance your learning experience with well-organized and carefully curated content.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/notes" className="btn bg-white text-primary-800 hover:bg-primary-50">
                <Search className="h-5 w-5 mr-2" />
                Browse Notes
              </Link>
              <Link to="/categories" className="btn bg-primary-800 text-white hover:bg-primary-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Explore Categories
              </Link>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary-400 rounded-lg transform rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-400 rounded-lg transform -rotate-6 opacity-20 animate-pulse delay-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Engineering students studying" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-primary-900">Ready to excel in your studies?</h3>
                  <p className="mt-2 text-neutral-600">Access notes from top engineering courses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats/Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <div className="bg-white/10 p-3 rounded-full">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Comprehensive Notes</h3>
              <p className="mt-1 text-primary-100">Well-organized materials for all subjects</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-3 rounded-full">
              <Download className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Easy Downloads</h3>
              <p className="mt-1 text-primary-100">Download notes for offline study</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-3 rounded-full">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Engineering Community</h3>
              <p className="mt-1 text-primary-100">Join thousands of engineering students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;