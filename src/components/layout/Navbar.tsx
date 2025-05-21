import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark, Menu, X, Search, GraduationCap, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/notes?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-primary-900">EngiNotes</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="mx-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search notes..."
                  className="w-64 pl-10 pr-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
              </form>
            </div>
            
            <div className="ml-6 flex space-x-4">
              <Link to="/notes" className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Notes
              </Link>
              <Link to="/categories" className="text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                Categories
              </Link>
              
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                    {user?.fullName?.split(' ')[0]}
                  </button>
                  <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-neutral-200 divide-y divide-neutral-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="py-1">
                      <button
                        onClick={() => logout()}
                        className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/login" className="flex items-center text-neutral-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                    <LogIn className="h-4 w-4 mr-1" />
                    Log in
                  </Link>
                  <Link to="/signup" className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Sign up
                  </Link>
                </>
              )}
            </div>
          </div>
          
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400" />
          </form>
          
          <Link 
            to="/notes" 
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
            onClick={() => setIsOpen(false)}
          >
            Notes
          </Link>
          <Link 
            to="/categories" 
            className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
            onClick={() => setIsOpen(false)}
          >
            Categories
          </Link>
          
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
            >
              Sign out
            </button>
          ) : (
            <>
              <Link 
                to="/login" 
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Log in
              </Link>
              <Link 
                to="/signup" 
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;