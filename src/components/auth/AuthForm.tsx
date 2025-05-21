import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Eye, EyeOff, Calendar } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface AuthFormProps {
  type: 'login' | 'signup' | 'forgot-password';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';
  
  const { login, signup, forgotPassword } = useAuth();
  
  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Form validators
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const validatePhone = (phone: string) => {
    return /^\d{10}$/.test(phone);
  };
  
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };
  
  const validatePasswordMatch = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      setLoading(true);
      
      if (type === 'signup') {
        // Validation for signup
        if (!fullName) return setError('Full name is required');
        if (!validateEmail(email)) return setError('Please enter a valid email');
        if (!validatePhone(phone)) return setError('Please enter a valid 10-digit phone number');
        if (!dob) return setError('Date of birth is required');
        if (!validatePassword(password)) return setError('Password must be at least 8 characters');
        if (!validatePasswordMatch(password, confirmPassword)) return setError('Passwords do not match');
        
        const success = await signup({
          fullName,
          email,
          phone,
          dob,
        });
        
        if (success) {
          navigate(from);
        } else {
          setError('Failed to create account. Please try again.');
        }
      } else if (type === 'login') {
        // Validation for login
        if (!email) return setError('Email or phone is required');
        if (!password) return setError('Password is required');
        
        const success = await login(email, password);
        
        if (success) {
          navigate(from);
        } else {
          setError('Invalid email/phone or password');
        }
      } else if (type === 'forgot-password') {
        // Validation for forgot password
        if (!fullName) return setError('Full name is required');
        if (!email) return setError('Email or phone is required');
        if (!dob) return setError('Date of birth is required');
        
        const success = await forgotPassword(fullName, email, dob);
        
        if (success) {
          setSuccess('Password reset instructions sent to your email');
          // Clear form fields after successful submission
          setFullName('');
          setEmail('');
          setDob('');
        } else {
          setError('Account not found. Please check your details.');
        }
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center text-neutral-900">
        {type === 'login' ? 'Log In' : type === 'signup' ? 'Create Account' : 'Recover Password'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-error-50 text-error-500 rounded-md text-sm">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-success-50 text-success-500 rounded-md text-sm">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name Field for signup and forgot password */}
        {(type === 'signup' || type === 'forgot-password') && (
          <div>
            <label htmlFor="fullName" className="label">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="input"
              placeholder="John Doe"
            />
          </div>
        )}
        
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="label">
            {type === 'login' ? 'Email / Phone' : 'Email'}
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            placeholder={type === 'login' ? "email@example.com or 1234567890" : "email@example.com"}
          />
        </div>
        
        {/* Phone Field for signup */}
        {type === 'signup' && (
          <div>
            <label htmlFor="phone" className="label">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input"
              placeholder="1234567890"
            />
          </div>
        )}
        
        {/* Date of Birth Field for signup and forgot password */}
        {(type === 'signup' || type === 'forgot-password') && (
          <div>
            <label htmlFor="dob" className="label">
              Date of Birth
            </label>
            <div className="relative">
              <input
                id="dob"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="input"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-neutral-400" />
            </div>
          </div>
        )}
        
        {/* Password Field for login and signup */}
        {(type === 'login' || type === 'signup') && (
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-neutral-400" />
                ) : (
                  <Eye className="h-5 w-5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        )}
        
        {/* Confirm Password Field for signup */}
        {type === 'signup' && (
          <div>
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-neutral-400" />
                ) : (
                  <Eye className="h-5 w-5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        )}
        
        {/* Forgot Password Link for login */}
        {type === 'login' && (
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
              Forgot your password?
            </Link>
          </div>
        )}
        
        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={loading}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            type === 'login' ? 'Log In' : type === 'signup' ? 'Sign Up' : 'Reset Password'
          )}
        </button>
        
        {/* Alternative Action Links */}
        <div className="text-center mt-4">
          {type === 'login' ? (
            <p className="text-sm text-neutral-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
                Sign up
              </Link>
            </p>
          ) : type === 'signup' ? (
            <p className="text-sm text-neutral-600">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Log in
              </Link>
            </p>
          ) : (
            <p className="text-sm text-neutral-600">
              Remember your password?{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                Log in
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;