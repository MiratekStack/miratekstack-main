import { Home, ArrowLeft, Search, AlertTriangle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

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

      <div className="relative max-w-4xl mx-auto px-8 sm:px-10 lg:px-14 text-center">
        {/* Error illustration */}
        <div className="">
          <div className="relative mx-auto  animate-pulse flex items-center justify-center">
         
              <div className="text-[16rem] lg:text-[18rem] font-bold text-orange-primary">
                404
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
            The page you are looking for seems to have wandered off into the void. 
            
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
            className="group btn-glass text-white px-8 py-4 rounded-xl font-semibold hover:text-orange-primary transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3"
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