import { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/miratekLogo.jpeg'; 

const mainEmail = "miratekstack@gmail.com";
const mainPassword = "12345678"

function MiratekSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    } else if (email !== mainEmail) {
      newErrors.email = 'Email not found';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (password !== mainPassword) {
      newErrors.password = 'Incorrect password';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }, 1500);

      localStorage.setItem('authToken', '1234567900976543221');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF7E39]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7E39]/10 rounded-full blur-3xl"></div>
      
      {/* Main Content */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        
       <Link to="/"><div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF7E39] to-[#B84F27] rounded-lg flex items-center justify-center">
               <img src={logo} className='w-full h-full' alt=""/>
            </div>
            <h1 className="text-2xl font-bold text-white">Miratek</h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-[#B0B0B0] text-lg">
            Sign in to manage your smart home
          </p>
        </div></Link>
        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 bg-[#4CAF50]/10 border border-[#4CAF50]/30 rounded-xl p-4 flex items-center gap-3 animate-pulse">
            <CheckCircle className="w-5 h-5 text-[#4CAF50] flex-shrink-0" />
            <p className="text-[#4CAF50] text-sm">Successfully signed in! Redirecting...</p>
          </div>
        )}

        {/* Sign In Card */}
        <div className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#FF7E39]/30 transition-all duration-300">
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#808080]" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full bg-[#1a1a1a] border ${
                    errors.email ? 'border-[#FF5722]' : 'border-[#2a2a2a]'
                  } rounded-xl pl-12 pr-4 py-3 text-white placeholder-[#808080] focus:outline-none focus:border-[#FF7E39] focus:ring-2 focus:ring-[#FF7E39]/20 transition-all duration-300`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-[#FF5722]" />
                  <p className="text-[#FF5722] text-sm">{errors.email}</p>
                </div>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-white font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#808080]" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({ ...errors, password: '' });
                  }}
                  className={`w-full bg-[#1a1a1a] border ${
                    errors.password ? 'border-[#FF5722]' : 'border-[#2a2a2a]'
                  } rounded-xl pl-12 pr-12 py-3 text-white placeholder-[#808080] focus:outline-none focus:border-[#FF7E39] focus:ring-2 focus:ring-[#FF7E39]/20 transition-all duration-300`}
                  placeholder="••••••••"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#808080] hover:text-[#FF7E39] transition-colors"
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
                  <AlertCircle className="w-4 h-4 text-[#FF5722]" />
                  <p className="text-[#FF5722] text-sm">{errors.password}</p>
                </div>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded border-[#2a2a2a] bg-[#1a1a1a] text-[#FF7E39] accent-[#FF7E39] cursor-pointer"
                />
                <span className="text-[#B0B0B0] group-hover:text-white transition-colors">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-[#FF7E39] hover:text-[#FFA56B] transition-colors text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#FF7E39] to-[#B84F27] hover:from-[#FFA56B] hover:to-[#FF7E39] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,126,57,0.3)] hover:shadow-[0_0_40px_rgba(255,126,57,0.5)] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <span className="relative z-10">Sign In</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFA56B] to-[#FF7E39] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Divider */}
          {/* <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#2a2a2a]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#121212] text-[#808080]">Or continue with</span>
            </div>
          </div> */}

          {/* Social Sign In */}
          {/* <div className="grid grid-cols-2 gap-4">
            <button 
              type="button"
              className="bg-[#1a1a1a] hover:bg-[#1c1c1c] border border-[#2a2a2a] hover:border-[#FF7E39]/30 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-white transition-all duration-300 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button 
              type="button"
              className="bg-[#1a1a1a] hover:bg-[#1c1c1c] border border-[#2a2a2a] hover:border-[#FF7E39]/30 rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-white transition-all duration-300 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              <span>Facebook</span>
            </button>
          </div> */}
        </div>

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-[#B0B0B0]">
          Don't have an account?{' '}
          <a href="#" className="text-[#FF7E39] hover:text-[#FFA56B] font-medium transition-colors">
            Sign up for free
          </a>
        </p>

     
      </div>
    </div>
  );
}

export default MiratekSignIn;