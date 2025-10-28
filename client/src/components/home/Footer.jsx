import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/miratekLogo.jpeg'; 

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', path: '/aboutus' },
      { name: 'Case Studies', path: '/casestudies' },
      { name: 'Contact', path: '/contact' },
    ],
    products: [
      { name: 'Experience', path: '/experience' },
      { name: 'Solutions', path: '/solution' },
      { name: 'Living', path: '/living' },
    ],
    support: [
      { name: 'Support Center', path: '/support' },
      { name: 'Contact Us', path: '/contact' },
    ],
  };

  return (
    <footer className="bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center overflow-hidden">
                <img src={logo} className="w-full h-full object-cover" alt="Miratek Logo" />
              </div>
              <span className="text-2xl font-bold text-text-primary group-hover:text-orange-primary transition-colors duration-300">
                Miratek
              </span>
            </Link>
            
            <p className="text-text-secondary max-w-md leading-relaxed">
              Transform your home into an intelligent ecosystem with our cutting-edge smart home automation platform. Experience the future of connected living today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a 
                href="mailto:support@Miratek.com"
                className="flex items-center space-x-3 text-text-secondary hover:text-orange-primary transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:text-orange-primary" />
                <span>support@Miratek.com</span>
              </a>
              <a 
                href="tel:+234234234"
                className="flex items-center space-x-3 text-text-secondary hover:text-orange-primary transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:text-orange-primary" />
                <span>+234-234-234</span>
              </a>
              <div className="flex items-center space-x-3 text-text-secondary group">
                <MapPin className="w-5 h-5" />
                <span>Nigeria</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-orange-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-orange-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-text-secondary hover:text-orange-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Bottom bar */}
        <div className="mt-16 pt-8 ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © 2025 Miratek Smart Home. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;