import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold text-white">EngiNotes</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-400">
              A platform dedicated to helping engineering students access quality study materials across multiple branches and subjects.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://github.com/saurabhtbj1201" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/saurabhtbj1201" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/Saurabhtbj1201" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:Saurabhtbj143@gmail.com" className="text-neutral-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white text-sm">Home</Link>
              </li>
              <li>
                <Link to="/notes" className="text-neutral-400 hover:text-white text-sm">Notes</Link>
              </li>
              <li>
                <Link to="/categories" className="text-neutral-400 hover:text-white text-sm">Categories</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-neutral-400 hover:text-white text-sm">Log in</Link>
              </li>
              <li>
                <Link to="/signup" className="text-neutral-400 hover:text-white text-sm">Sign up</Link>
              </li>
              <li>
                <Link to="/forgot-password" className="text-neutral-400 hover:text-white text-sm">Forgot Password</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-neutral-400 hover:text-white text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-400 hover:text-white text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-neutral-400 hover:text-white text-sm">Copyright</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <p className="text-center text-neutral-400 text-sm">
            © 2025 EngiNotes. All rights reserved Saurabh Kumar. <a href="https://linkedin.com/in/Saurabhtbj1201" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Connect on LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;