import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (userData: Omit<User, 'id'>) => Promise<boolean>;
  logout: () => void;
  forgotPassword: (fullName: string, emailOrPhone: string, dob: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // In a real app, we would call an API here
      // For demo purposes, we'll simulate a successful login if the email contains "test"
      if (email.includes('test')) {
        const mockUser: User = {
          id: '1',
          fullName: 'Test User',
          email,
          phone: '1234567890',
          dob: '2000-01-01',
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(mockUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const signup = async (userData: Omit<User, 'id'>): Promise<boolean> => {
    try {
      // In a real app, we would call an API here
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        ...userData,
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (
    fullName: string, 
    emailOrPhone: string, 
    dob: string
  ): Promise<boolean> => {
    try {
      // In a real app, we would verify these details against the DB
      // and send a password reset email
      // For demo, we'll simulate success if name includes "test"
      return fullName.toLowerCase().includes('test');
    } catch (error) {
      console.error('Forgot password error:', error);
      return false;
    }
  };

  const value = {
    user,
    isAuthenticated,
    login,
    signup,
    logout,
    forgotPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};