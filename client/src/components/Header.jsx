import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/miratekLogo.jpeg'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Products', href: '#products' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(18, 18, 18, 0.8)] backdrop-blur-glass py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10e rounded-xl flex items-center justify-center">
             <img src={logo} className='w-full h-full' alt=""/>
            </div>
            <span className="text-2xl font-bold text-text-primary">Miratek</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary text-xl hover:text-orange-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="btn-primary text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-orange-glow-lg transition-all duration-300 transform hover:scale-105" onClick={() => navigate('/dashboard')}>
             View Our Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-secondary hover:text-orange-primary transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-hover rounded-2xl mt-2 mb-4 overflow-hidden">
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-md text-text-secondary hover:text-orange-primary hover:bg-bg-card-hover rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <button className="w-full mt-4 btn-primary text-white px-6 py-3 rounded-xl font-semibold block" onClick={() => navigate('/dashboard')}>
               View Our Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;