import { ArrowRight, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className="relative pt-8 min-h-screen bg-gradient-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-3 h-3 bg-orange-primary rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-orange-glow rounded-full animate-bounce-slow opacity-40" />
        <div className="absolute bottom-40 left-20 w-2.5 h-2.5 bg-orange-secondary rounded-full animate-pulse-slow opacity-50" />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-orange-primary rounded-full animate-bounce-slow opacity-60" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-orange-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-orange-primary" />
                <span className="text-text-secondary text-sm font-medium">Smart Home Revolution</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-text-primary leading-tight">
                Manage your
                <span className="block bg-gradient-orange bg-clip-text text-transparent">
                  Smart Home
                </span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed max-w-lg">
                Experience effortless control of your intelligent home ecosystem with our advanced automation platform that learns and adapts to your lifestyle.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-primary mb-2">23%</div>
                <div className="text-sm text-text-secondary font-medium">Energy Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-primary mb-2">39%</div>
                <div className="text-sm text-text-secondary font-medium">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-primary mb-2">24/7</div>
                <div className="text-sm text-text-secondary font-medium">Monitoring</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" onClick={() => navigate('/dashboard')}>
              <button className="group btn-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-orange-glow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-8" >
                <span>View Our Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1}/>
              </button>
            
            </div>
          </div>

          {/* 3D Mockup */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main device mockup */}
              <div className="relative mx-auto w-80 h-96 glass rounded-3xl shadow-glass animate-float">
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-card rounded-2xl overflow-hidden border border-divider">
                  {/* Status bar */}
                  <div className="h-8 bg-gradient-to-r from-orange-primary/20 to-orange-secondary/20 flex items-center px-4 border-b border-divider">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <div className="w-2 h-2 bg-orange-primary rounded-full" />
                      <div className="w-2 h-2 bg-text-secondary/40 rounded-full" />
                    </div>
                    <div className="ml-auto text-text-secondary text-xs font-medium">Smart Home</div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gradient-orange rounded-2xl flex items-center justify-center mb-4 shadow-orange-glow">
                        <Shield className="w-8 h-8 text-white" strokeWidth={1}/>
                      </div>
                      <div className="text-text-primary text-lg font-semibold mb-1">Living Room</div>
                      <div className="text-text-secondary text-sm">All systems active</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 glass-hover rounded-xl">
                        <span className="text-text-primary text-sm">Temperature</span>
                        <span className="text-orange-primary font-semibold">72°F</span>
                      </div>
                      <div className="flex items-center justify-between p-3 glass-hover rounded-xl">
                        <span className="text-text-primary text-sm">Lighting</span>
                        <div className="w-8 h-4 bg-orange-primary rounded-full relative">
                          <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 glass-hover rounded-xl">
                        <span className="text-text-primary text-sm">Security</span>
                        <span className="text-success font-semibold text-sm">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-text-secondary/40 rounded-full" />
              </div>

              {/* Floating cards */}
              <div className="absolute -top-8 -right-8 w-24 h-24 glass rounded-2xl shadow-glass animate-bounce-slow opacity-80 flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-orange rounded-lg" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 glass rounded-2xl shadow-glass animate-float opacity-80 flex items-center justify-center" style={{ animationDelay: '1s' }}>
                <div className="w-6 h-6 bg-success rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;