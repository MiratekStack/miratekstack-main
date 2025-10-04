import {Mail, Phone, MapPin} from 'lucide-react';
import logo from '../assets/miratekLogo.jpeg'; 


const Footer = () => {
 
  return (
    <footer className="bg-bg-secondary  relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center">
              <img src={logo} className='w-full h-full' alt=""/>
              </div>
              <span className="text-2xl font-bold text-text-primary">Miratek</span>
            </div>
            <p className="text-text-secondary max-w-md leading-relaxed">
              Transform your home into an intelligent ecosystem with our cutting-edge smart home automation platform. Experience the future of connected living today.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-text-secondary hover:text-orange-primary transition-colors duration-300 group">
                <Mail className="w-5 h-5 group-hover:text-orange-primary" />
                <span>support@Miratek.com</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary hover:text-orange-primary transition-colors duration-300 group">
                <Phone className="w-5 h-5 group-hover:text-orange-primary" />
                <span>+234-234-234</span>
              </div>
              <div className="flex items-center space-x-3 text-text-secondary hover:text-orange-primary transition-colors duration-300 group">
                <MapPin className="w-5 h-5 group-hover:text-orange-primary" />
                <span>Nigeria</span>
              </div>
            </div>

        
          </div>

     
        </div>

  

        {/* Bottom bar */}
        <div className=" mt-16 pt-8">
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