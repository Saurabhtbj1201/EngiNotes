import React, { useEffect } from 'react';
import AuthForm from '../components/auth/AuthForm';

const LoginPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Log In | EngiNotes';
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="md:flex gap-12 items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Welcome Back!
          </h1>
          <p className="text-lg text-neutral-600">
            Log in to access your account and continue your engineering education journey with premium study materials.
          </p>
          
          <div className="mt-8">
            <img 
              src="https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Students studying" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="md:w-1/2">
          <AuthForm type="login" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;