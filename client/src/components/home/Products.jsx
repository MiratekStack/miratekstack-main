import { ArrowRight, Smartphone, Tablet, Monitor, Watch } from 'lucide-react';
import miratek from '../../assets/miratek.svg'; 
const Products = () => {
  const devices = [
    { icon: <Smartphone className="w-6 h-6" />, name: 'Mobile', status: 'Connected', color: 'bg-success' },
    { icon: <Tablet className="w-6 h-6" />, name: 'Tablet', status: 'Active', color: 'bg-orange-primary' },
    { icon: <Monitor className="w-6 h-6" />, name: 'Desktop', status: 'Standby', color: 'bg-text-secondary' },
    { icon: <Watch className="w-6 h-6" />, name: 'Watch', status: 'Synced', color: 'bg-blue-500' },
  ];

  const rooms = [
    { name: 'Living Room', devices: 8, status: 'active', temp: '72°F', energy: '85%' },
    { name: 'Bedroom', devices: 5, status: 'sleep', temp: '68°F', energy: '92%' },
    { name: 'Kitchen', devices: 6, status: 'active', temp: '70°F', energy: '78%' },
    { name: 'Office', devices: 4, status: 'standby', temp: '71°F', energy: '95%' },
  ];

  return (
    <section id="products" className="py-24 bg-bg-secondary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3">
                <Monitor className="w-5 h-5 text-orange-primary" />
                <span className="text-text-secondary font-medium">Control Center</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Effortlessly control your
                <span className="block bg-gradient-orange bg-clip-text text-transparent mt-2">
                  Smart Device System
                </span>
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed">
                Transform your living space into an intelligent environment that responds to your needs, preferences, and daily routines with unprecedented precision and reliability.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-orange-primary rounded-full mt-3 flex-shrink-0 group-hover:shadow-orange-glow transition-all duration-300" />
                <div>
                  <h4 className="text-text-primary font-bold mb-2 text-lg group-hover:text-orange-primary transition-colors duration-300">Intelligent Automation</h4>
                  <p className="text-text-secondary group-hover:text-text-primary/80 transition-colors duration-300">Advanced AI learns your patterns and optimizes your home automatically for maximum comfort and efficiency.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-success rounded-full mt-3 flex-shrink-0 group-hover:shadow-green-500/50 transition-all duration-300" />
                <div>
                  <h4 className="text-text-primary font-bold mb-2 text-lg group-hover:text-success transition-colors duration-300">Energy Efficiency</h4>
                  <p className="text-text-secondary group-hover:text-text-primary/80 transition-colors duration-300">Reduce energy consumption by up to 40% with smart optimization and real-time monitoring capabilities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="w-3 h-3 bg-danger rounded-full mt-3 flex-shrink-0 group-hover:shadow-red-500/50 transition-all duration-300" />
                <div>
                  <h4 className="text-text-primary font-bold mb-2 text-lg group-hover:text-danger transition-colors duration-300">Security Integration</h4>
                  <p className="text-text-secondary group-hover:text-text-primary/80 transition-colors duration-300">Complete home security with smart locks, sensors, and 24/7 monitoring systems.</p>
                </div>
              </div>
            </div>

            {/* <button className="group btn-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-orange-glow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}
          </div>

          {/* Interactive Demo */}
          <div className="relative">
            <div className="relative glass rounded-3xl p-8 shadow-glass">
             <img src={miratek} alt="" className='h-full w-full' />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-orange rounded-2xl shadow-orange-glow animate-bounce-slow opacity-80 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-success rounded-2xl shadow-green-500/50 animate-pulse-slow opacity-80 flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;