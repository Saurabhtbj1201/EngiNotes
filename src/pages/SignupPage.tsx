import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';

const SignupPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sign Up | EngiNotes';
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="md:flex gap-12 items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Join the Engineering Community
          </h1>
          <p className="text-lg text-neutral-600">
            Create an account to download notes, save your favorites, and get access to exclusive engineering resources.
          </p>
          
          <div className="mt-8 bg-primary-50 p-6 rounded-lg border border-primary-100">
            <h3 className="text-lg font-semibold text-primary-900 mb-3">Why sign up?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Download high-quality study materials</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Save notes for quick access later</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Get personalized note recommendations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <AuthForm type="signup" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;