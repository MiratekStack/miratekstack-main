import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimony = [
  {
    testimony: "To be honest, I didn't think the Miratek Stack would have such an impact. I no longer have to run around the house to monitor things, and our energy expenditures have decreased. It simply functions.",
    name: "Chioma",
    location: "Lagos"
  },
  {
    testimony: "I adore the Miratek Stack Web App. I can monitor how much energy we're utilising and make adjustments in real time. It's as if the home listens to you. It has completely revolutionised the way we manage our home.",
    name: "Amina T.",
    location: "Abuja"
  },
  {
    testimony: "Setup was simpler than I expected. I can now control lights, air conditioning, and even security via the web app. The peace of mind is invaluable.",
    name: "Funke S.",
    location: "Lagos"
  },
  {
    testimony: "I have tried several smart home systems, but none felt as simple. Miratek Stack is uncomplicated, simple to operate, and makes a considerable impact in energy use.",
    name: "Tosin A.",
    location: "Ibadan"
  },
  {
    testimony: "I enjoy having complete control over my surroundings, especially at work. Lighting, air conditioning, and even the security system. It has saved me a lot of time and stress.",
    name: "Nkechi I.",
    location: "Lagos"
  },
  {
    testimony: "It's astonishing how easy it is to use the Miratek Stack Web App. Energy tracking is quite useful, and you don't need to be tech savvy to figure it out. It gives you a sense of intelligence for conserving money without exerting too much effort.",
    name: "Bamidele F.",
    location: "Abuja"
  },
  {
    testimony: "I had no idea that portable smart technology could be so practical. Anywhere you plug it in and launch the app, everything functions.",
    name: "Sara S.",
    location: "Lagos"
  },
  {
    testimony: "Moving the devices didn't require me to call a technician. Anywhere in my house, I can effectively regulate energy thanks to portability.",
    name: "Bamidele F.",
    location: "Abuja"
  },
  {
    testimony: "It seems as though I am living in the future. Everything runs smoothly with the Miratek Stack, from daily convenience to energy savings.",
    name: "Olumide K.",
    location: "Port Harcourt"
  },
  {
    testimony: "It's been incredible to see the Miratek Stack expand since 2023. It never ceases to amaze me with new features, improved app interfaces, and advancements in portable hardware.",
    name: "Ifeoma J.",
    location: "Enugu"
  },
  {
    testimony: "I used to constantly worry about my mother, who lives alone. I can use my phone to check the security, lights and air conditioning using the Miratek Stack. Even while I'm away, I can rest easy knowing she's protected.",
    name: "Esther",
    location: "Port Harcourt"
  },
  {
    testimony: "Knowing I can keep an eye on and manage the house from a distance makes me feel safer. My mother also enjoys the convenience.",
    name: "Vera C.",
    location: "Lagos"
  }
];

export default function MiratekTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimony.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimony.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimony.length) % testimony.length);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our <span className="text-[#FF7E39]">Users Say</span>
          </h2>
          <p className="text-[#B0B0B0] text-lg md:text-xl max-w-2xl mx-auto">
            Real experiences from real people transforming their homes with Miratek Stack
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:border-[#FF7E39]/30 hover:shadow-[0_0_40px_rgba(255,126,57,0.2)]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7E39]/5 rounded-full blur-3xl"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <Quote className="w-12 h-12 md:w-16 md:h-16 text-[#FF7E39]/20" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 pt-12 md:pt-16">
              <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-2 min-h-[180px] md:min-h-[180px]">
                "{testimony[currentIndex].testimony}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF7E39] to-[#B84F27] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimony[currentIndex].name[0]}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    {testimony[currentIndex].name}
                  </h4>
                  <p className="text-[#B0B0B0] text-sm">
                    {testimony[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-[#1a1a1a] hover:bg-[#FF7E39] border border-[#2a2a2a] hover:border-[#FF7E39] rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,126,57,0.4)] group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#B0B0B0] group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-[#1a1a1a] hover:bg-[#FF7E39] border border-[#2a2a2a] hover:border-[#FF7E39] rounded-full p-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,126,57,0.4)] group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#B0B0B0] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-16">
          {testimony.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-[#FF7E39] shadow-[0_0_10px_rgba(255,126,57,0.5)]'
                  : 'w-2 h-2 bg-[#2a2a2a] hover:bg-[#FF7E39]/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-6 text-center hover:border-[#FF7E39]/30 transition-all duration-300">
            <div className="text-4xl font-bold text-[#FF7E39] mb-2">3000+</div>
            <div className="text-[#B0B0B0]">Happy Customers</div>
          </div>
          <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-6 text-center hover:border-[#FF7E39]/30 transition-all duration-300">
            <div className="text-4xl font-bold text-[#FF7E39] mb-2">4.8★</div>
            <div className="text-[#B0B0B0]">Average Rating</div>
          </div>
          <div className="bg-[#121212] border border-[#2a2a2a] rounded-xl p-6 text-center hover:border-[#FF7E39]/30 transition-all duration-300">
            <div className="text-4xl font-bold text-[#FF7E39] mb-2">98%</div>
            <div className="text-[#B0B0B0]">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}