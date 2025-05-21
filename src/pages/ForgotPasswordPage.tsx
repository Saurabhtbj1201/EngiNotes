import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';

const ForgotPasswordPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Forgot Password | EngiNotes';
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="md:flex gap-12 items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Recover Your Password
          </h1>
          <p className="text-lg text-neutral-600">
            Don't worry, it happens to the best of us. Enter your information below and we'll help you recover your account.
          </p>
          
          <div className="mt-8 bg-secondary-50 p-6 rounded-lg border border-secondary-100">
            <h3 className="text-lg font-semibold text-secondary-900 mb-3">Account Recovery</h3>
            <p className="text-secondary-700">
              To recover your account, we'll need the following information:
            </p>
            <ul className="mt-3 space-y-2 text-secondary-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Your full name</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email address or phone number</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Date of birth</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <AuthForm type="forgot-password" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;