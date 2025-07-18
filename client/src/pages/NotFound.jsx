import { Home, ArrowLeft, Search, AlertTriangle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Features', href: '/#features', icon: <Zap className="w-5 h-5" /> },
    { name: 'Products', href: '/#products', icon: <Search className="w-5 h-5" /> },
    { name: 'Pricing', href: '/#pricing', icon: <AlertTriangle className="w-5 h-5" /> },
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-10 right-10 w-3 h-3 bg-orange-primary rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-orange-glow rounded-full animate-bounce-slow opacity-40" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Error illustration */}
        <div className="mb-12">
          <div className="relative mx-auto w-80 h-80 glass rounded-3xl shadow-glass animate-float flex items-center justify-center">
            {/* 404 Display */}
            <div className="text-center">
              <div className="text-8xl lg:text-9xl font-bold bg-gradient-orange bg-clip-text text-transparent mb-4">
                404
              </div>
              <div className="w-16 h-16 mx-auto bg-gradient-orange rounded-2xl flex items-center justify-center shadow-orange-glow mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 glass rounded-2xl shadow-glass animate-bounce-slow opacity-80 flex items-center justify-center">
              <Search className="w-6 h-6 text-orange-primary" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 glass rounded-2xl shadow-glass animate-pulse-slow opacity-80 flex items-center justify-center">
              <Home className="w-5 h-5 text-success" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 mb-12">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3">
            <AlertTriangle className="w-5 h-5 text-orange-primary" />
            <span className="text-text-secondary font-medium">Page Not Found</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            Oops! Page Not Found
          </h1>
          
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off into the smart home void. 
            Don't worry, our AI assistant is already working to bring it back online.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleGoHome}
            className="group btn-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-orange-glow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </button>
          <button 
            onClick={handleGoBack}
            className="group btn-glass text-text-primary px-8 py-4 rounded-xl font-semibold hover:text-orange-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </div>

   
      </div>
    </div>
  );
};

export default ErrorPage;