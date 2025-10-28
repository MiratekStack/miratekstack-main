import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router-dom
import { User, Mail, Lock, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'; // Assuming lucide-react for icons
import logo from '../../assets/miratekLogo.jpeg'; 



const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // Can be used for success state after signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form validation and submission logic here
    console.log('Signup Attempt:', { fullName, email, password, confirmPassword, agreeTerms });
  };

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
      {/* Background Decorative Elements - Reusing the aesthetic */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header Section */}
        <Link to="/">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
                {/*  */}
                <img src={logo} className="w-full h-full" alt="Miratek Logo" />
              </div>
              <h1 className="text-2xl font-bold text-text-primary">Miratek</h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              Create Your Account
            </h2>
            <p className="text-text-secondary text-lg">
              Start managing your smart home in seconds.
            </p>
          </div>
        </Link>

        {/* Success Message (Optional) */}
        {showSuccess && (
          <div className="mb-6 bg-success/10 border border-success/30 rounded-xl p-4 flex items-center gap-3 animate-pulse">
            <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
            <p className="text-success text-sm">Account created successfully! Redirecting...</p>
          </div>
        )}

        {/* Sign Up Card */}
        <div className="bg-card-light/30 backdrop-blur-lg border border-divider rounded-2xl p-8 shadow-card hover:border-orange-primary/30 transition-all duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name Field */}
            <div>
              <label htmlFor="fullName" className="block text-text-primary font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full bg-bg-secondary border ${
                    errors.fullName ? 'border-danger' : 'border-divider'
                  } rounded-xl pl-12 pr-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-danger" />
                  <p className="text-danger text-sm">{errors.fullName}</p>
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-bg-secondary border ${
                    errors.email ? 'border-danger' : 'border-divider'
                  } rounded-xl pl-12 pr-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-danger" />
                  <p className="text-danger text-sm">{errors.email}</p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-text-primary font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-bg-secondary border ${
                    errors.password ? 'border-danger' : 'border-divider'
                  } rounded-xl pl-12 pr-12 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-orange-primary transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-danger" />
                  <p className="text-danger text-sm">{errors.password}</p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-text-primary font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
                <input
                  id="confirmPassword"
                  type={showPassword ? 'text' : 'password'} // Reusing showPassword state for both
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`w-full bg-bg-secondary border ${
                    errors.confirmPassword ? 'border-danger' : 'border-divider'
                  } rounded-xl pl-12 pr-12 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300`}
                  placeholder="Repeat your password"
                />
                {/* Omitted the eye button here, as the one on the previous field is sufficient
                    for UX, but you could add a second one if preferred. */}
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-danger" />
                  <p className="text-danger text-sm">{errors.confirmPassword}</p>
                </div>
              )}
            </div>

            {/* Terms & Privacy Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-5 h-5 rounded border-divider bg-bg-secondary text-orange-primary accent-orange-primary cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-text-secondary cursor-pointer">
                I agree to the{' '}
                <a
                  href="#"
                  className="font-medium text-orange-primary brightness-75 hover:text-orange-glow transition-colors"
                >
                  Terms &amp; Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !agreeTerms}
              className="w-full bg-orange-secondary hover:bg-gradient-orange text-text-primary font-semibold py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className='text-white text-lg'>Creating Account...</span>
                </div>
              ) : (
                <span className="relative z-10 text-white text-lg">Create Account</span>
              )}
              <div className="absolute inset-0 bg-gradient-orange-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>

        {/* Sign In Link */}
        <p className="text-center mt-6 text-text-secondary">
          Already have an account?{' '}
          <a
            href="#"
            className="text-orange-primary brightness-75 hover:text-orange-glow font-medium transition-colors"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;