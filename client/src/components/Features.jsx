import { Lightbulb, Shield, Zap, Smartphone, Thermometer, Lock, Wifi, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8" strokeWidth={1} />,
      title: 'Smart Lighting',
      description: 'Intelligent lighting that adapts to your daily routine and preferences automatically.',
      bgGradient: 'from-orange-primary to-orange-secondary',
      glowColor: 'shadow-orange-glow'
    },
    {
      icon: <Thermometer className="w-8 h-8" strokeWidth={1} />,
      title: 'Climate Control',
      description: 'Advanced temperature management with AI-powered optimization for maximum comfort.',
      bgGradient: 'from-success to-emerald-600',
      glowColor: 'shadow-green-500/30'
    },
    {
      icon: <Shield className="w-8 h-8" strokeWidth={1} />,
      title: 'Security System',
      description: 'Comprehensive home security with smart sensors, and real-time monitoring.',
      bgGradient: 'from-danger to-red-600',
      glowColor: 'shadow-red-500/30'
    },
    {
      icon: <Smartphone className="w-8 h-8" strokeWidth={1} />,
      title: 'Mobile Control',
      description: 'Complete control of your smart home from anywhere with our intuitive mobile app.',
      bgGradient: 'from-blue-500 to-blue-700',
      glowColor: 'shadow-blue-500/30'
    },
    {
      icon: <Wifi className="w-8 h-8" strokeWidth={1} />,
      title: 'IoT Integration',
      description: 'Seamlessly connect and manage all your smart devices in one unified ecosystem.',
      bgGradient: 'from-purple-500 to-purple-700',
      glowColor: 'shadow-purple-500/30'
    },
    {
      icon: <BarChart3 className="w-8 h-8" strokeWidth={1} />,
      title: 'Energy Analytics',
      description: 'Detailed insights and analytics to optimize energy consumption and reduce costs.',
      bgGradient: 'from-teal-500 to-teal-700',
      glowColor: 'shadow-teal-500/30'
    },
    {
      icon: <Zap className="w-8 h-8" strokeWidth={1} />,
      title: 'Automation',
      description: 'Create custom automation rules that make your home respond intelligently.',
      bgGradient: 'from-yellow-500 to-orange-500',
      glowColor: 'shadow-yellow-500/30'
    },
    {
      icon: <Lock className="w-8 h-8" strokeWidth={1} />,
      title: 'Smart Locks',
      description: 'Keyed authentication and remote access control.',
      bgGradient: 'from-indigo-500 to-indigo-700',
      glowColor: 'shadow-indigo-500/30'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-primary relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
            <Zap className="w-5 h-5 text-orange-primary" />
            <span className="text-text-secondary font-medium">Advanced Features</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6">
            Smart Home Features
            <span className="block text-3xl lg:text-4xl bg-gradient-orange bg-clip-text text-transparent mt-2">
              that make the difference
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of intelligent features designed to transform your home into a connected, efficient, and secure living space.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass glass-hover rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.bgGradient} rounded-2xl flex items-center justify-center mb-6 ${feature.glowColor} group-hover:shadow-lg transition-all duration-500 group-hover:scale-110`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-orange-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed group-hover:text-text-primary/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-orange-primary/30 transition-all duration-500" />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Features;