import React from 'react';
import { Lightbulb, Lock, LineChart, Smartphone, X } from 'lucide-react';
import heroImage from '../assets/solutionHero.png';
import solution1 from '../assets/solution-1.png';
import solution2 from '../assets/solution-2.png';
import solution3 from '../assets/solution-3.png';
import solution4 from '../assets/solution-4.png';

const heroImageUrl = heroImage;
const solution1Url = solution1;
const solution2Url = solution2;
const solution3Url = solution3;
const solution4Url = solution4;

const Solution = () => {

  return (
    <div className="bg-bg-primary-light pt-20 dark:bg-bg-primary-dark font-inter min-h-screen">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
      
          <main className="flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-6xl flex-1 px-4 sm:px-8">
              {/* HeroSection */}
              <div className="w-full">
                <div
                  className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-lg"
                  data-alt="Abstract image showing interconnected smart home devices in a modern living room setting."
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${heroImageUrl}")`,
                  }}
                >
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">Solutions Tailored to Your Space.</h1>
                    <h2 className="text-white/90 text-base font-normal leading-normal sm:text-lg">Whether it’s a cozy apartment or a grand villa, Miratek unifies your home experience through seamless automation.</h2>
                  </div>
                  {/* <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-orange-primary text-text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mt-4 shadow-orange-glow hover:shadow-orange-glow-lg">
                    <span className="truncate">Explore by Space</span>
                  </button> */}
                </div>
              </div>
              {/* Solutions Overview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-16">
                {[
                  { title: "Smart Apartments", desc: "Compact control for modern living — automate lights, locks, and temperature in one unified app.", url: solution1Url },
                  { title: "Smart Villas & Homes", desc: "From lighting moods to multi-zone audio and full-house security — Miratek brings total home intelligence.", url: solution2Url },
                  { title: "Offices & Workspaces", desc: "Create productive, energy-smart workplaces with integrated lighting, climate, and meeting controls.", url: solution3Url },
                  { title: "Hotels & Hospitality", desc: "Deliver guest comfort and operational efficiency through centralized smart control.", url: solution4Url },
                ].map((solution, index) => (
                  <div
                    key={index}
                    className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-6 aspect-[3/4] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-2xl shadow-card hover:shadow-card-hover"
                    data-alt={solution.title}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(28, 19, 13, 0.7) 0%, rgba(28, 19, 13, 0) 100%), url("${solution.url}")`,
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-xl font-bold leading-tight">{solution.title}</h3>
                      <p className="text-white/80 text-sm">{solution.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* FeatureSection: Smart Apartments */}
              <section className="flex flex-col gap-10 p-6 md:p-10 my-8 rounded-xl bg-card-light dark:bg-card-dark border border-orange-primary/20 dark:border-orange-primary/10 shadow-card">
                <div className="flex flex-col gap-4">
                  <h2 className="text-orange-primary text-sm font-bold tracking-widest uppercase">SMART APARTMENTS</h2>
                  <h3 className="text-text-primary text-3xl font-bold leading-tight tracking-tight max-w-2xl">Compact control for modern living.</h3>
                  <p className="text-text-secondary text-base font-normal leading-normal max-w-2xl">Automate lights, locks, and temperature in one unified app for the ultimate convenience in urban spaces.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { Icon: Lightbulb, title: "Voice-activated lighting", desc: "Create the perfect ambiance with simple voice commands." },
                    { Icon: Lock, title: "Smart locks & sensors", desc: "Secure your home and get alerts on your phone." },
                    { Icon: LineChart, title: "Energy monitoring", desc: "Track your energy usage and save on bills." },
                    { Icon: Smartphone, title: "Remote access", desc: "Control your home from anywhere in the world." },
                  ].map(({ Icon, title, desc }, index) => (
                    <div
                      key={index}
                      className="flex flex-1 gap-4 rounded-lg border border-orange-primary/20 dark:border-orange-primary/10  p-4 flex-col shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
                    >
                      <Icon className="text-orange-primary stroke-[0.75] text-3xl" size={32} />
                      <div className="flex flex-col gap-1">
                        <h4 className="text-text-primary dark:text-text-primary-dark text-base font-bold leading-tight">{title}</h4>
                        <p className="text-text-secondary/80 dark:text-text-secondary-dark/80 text-sm font-normal leading-normal">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              {/* Integration Ecosystem Section */}
              {/* <section className="flex flex-col items-center text-center gap-8 py-16">
                <div className="flex flex-col gap-4 max-w-3xl">
                  <h2 className="text-text-primary text-3xl md:text-4xl font-bold leading-tight tracking-tight">Seamless Integration with the Devices You Love.</h2>
                  <p className="text-text-secondary text-base md:text-lg leading-normal">Miratek connects with your favorite smart home brands — from voice assistants to energy meters and entertainment systems.</p>
                </div>
               
              </section> */}
        
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Solution;
