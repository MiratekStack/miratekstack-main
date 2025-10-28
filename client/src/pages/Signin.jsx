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
   <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
  {/* Background Decorative Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/10 rounded-full blur-3xl"></div>

  {/* Main Content */}
  <div className="w-full max-w-md relative z-10">
    {/* Logo Section */}
    <Link to="/">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-gradient-orange rounded-lg flex items-center justify-center">
            <img src={logo} className="w-full h-full" alt="" />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Miratek</h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
          Welcome Back
        </h2>
        <p className="text-text-secondary text-lg">
          Sign in to manage your smart home
        </p>
      </div>
    </Link>

    {/* Success Message */}
    {showSuccess && (
      <div className="mb-6 bg-success/10 border border-success/30 rounded-xl p-4 flex items-center gap-3 animate-pulse">
        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
        <p className="text-success text-sm">Successfully signed in! Redirecting...</p>
      </div>
    )}

    {/* Sign In Card */}
    <div className="card-darker-light-darker-light border border-divider rounded-2xl p-8 shadow-card hover:border-orange-primary/30 transition-all duration-300">
      <div className="space-y-6">
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
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors({ ...errors, email: '' });
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors({ ...errors, password: '' });
              }}
              className={`w-full bg-bg-secondary border ${
                errors.password ? 'border-danger' : 'border-divider'
              } rounded-xl pl-12 pr-12 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300`}
              placeholder="••••••••"
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSubmit(e);
              }}
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-5 h-5 rounded border-divider bg-bg-secondary text-orange-primary accent-orange-primary cursor-pointer"
            />
            <span className="text-text-secondary group-hover:text-text-primary transition-colors">
              Remember me
            </span>
          </label>
          <a
            href="#"
            className="text-orange-primary hover:text-orange-glow transition-colors text-sm font-medium"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-orange hover:bg-gradient-orange-glow text-text-primary font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-orange-glow hover:shadow-orange-glow-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            <span className="relative z-10">Sign In</span>
          )}
          <div className="absolute inset-0 bg-gradient-orange-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>

    {/* Sign Up Link */}
    <p className="text-center mt-6 text-text-secondary">
      Don't have an account?{' '}
      <a href="#" className="text-orange-primary hover:text-orange-glow font-medium transition-colors">
        Sign up for free
      </a>
    </p>
  </div>
</div>

  );
}

export default MiratekSignIn;