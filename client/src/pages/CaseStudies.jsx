import { ArrowRight, Home, Building, Hotel, School, Store } from 'lucide-react';

import casestudy0 from '../assets/casestudy-hero.png';
import casestudy1 from '../assets/casestudy-1.png';
import casestudy2 from '../assets/casestudy-2.png';
import casestudy3 from '../assets/casestudy-3.png';
import casestudy4 from '../assets/casestudy-4.png';
import { useNavigate } from 'react-router-dom';


const CaseStudies = () => {
  const navigate = useNavigate();
  return (
    <div className="font-display pt-20 bg-bg-primary-light dark:bg-bg-primary-dark text-text-primary dark:text-text-primary-dark">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">

        <main className="flex-grow">

          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-5">
            <div
              className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-lg"
              data-alt="Abstract image showing interconnected smart home devices in a modern living room setting."
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${casestudy0}")`,
              }}
            >
              <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">Transforming Homes and Workspaces with Intelligent Living.</h1>
                <h2 className="text-white/90 text-base font-normal leading-normal sm:text-lg">Explore how Miratek delivers comfort, security, and energy efficiency in real-world spaces.</h2>
              </div>
            </div>
          </div>

        

          <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <h2 className="text-text-primary dark:text-text-primary-dark text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center md:text-left">Featured Case Study</h2>
              <div className="flex flex-col items-center gap-8 rounded-xl bg-card-light dark:bg-bg-primary-dark/50 p-8 shadow-sm md:flex-row md:gap-12">
                <div className="w-full flex-shrink-0 md:w-1/2">
                  <div
                    className="w-full aspect-video rounded-lg bg-cover bg-center bg-no-repeat"
                    data-alt="Exterior of a modern luxury villa"
                    // Image replacement: casestudy1
                    style={{ backgroundImage: `url("${casestudy1}")` }}
                  ></div>
                </div>
                <div className="flex w-full flex-col gap-6 md:w-1/2">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-orange-primary">Abuja, Nigeria</p>
                    <p className="text-2xl font-bold leading-tight text-text-primary dark:text-text-primary-dark">The Eze Family Smart Villa</p>
                    <p className="text-base font-normal leading-relaxed text-text-secondary dark:text-text-secondary-dark">
                      From manual lighting to full automation — discover how the Miratek system transformed a luxury villa into an intelligent, energy-efficient home.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 sm:flex-row">
                    <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg border border-border-light dark:border-border-dark p-4">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Energy Saved</p>
                      <p className="text-3xl font-bold leading-tight text-text-primary dark:text-text-primary-dark">40%</p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg border border-border-light dark:border-border-dark p-4">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Lighting Automation</p>
                      <p className="text-3xl font-bold leading-tight text-text-primary dark:text-text-primary-dark">100%</p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-1 rounded-lg border border-border-light dark:border-border-dark p-4">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Remote Monitoring</p>
                      <p className="text-3xl font-bold leading-tight text-text-primary dark:text-text-primary-dark">24/7</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-card-light dark:bg-bg-primary-dark/50">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-primary dark:text-text-primary-dark">Every Home, Every Story</h2>
                <p className="mt-4 text-text-secondary dark:text-text-secondary-dark">Discover the versatility of Miratek through a collection of our most impactful projects.</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                <div className="flex flex-col overflow-hidden rounded-xl bg-bg-primary-light dark:bg-bg-primary-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="w-full aspect-video bg-cover bg-center bg-no-repeat"
                    data-alt="Modern apartment interior with city view"
                    // Image replacement: casestudy2
                    style={{ backgroundImage: `url("${casestudy2}")` }}
                  ></div>
                  <div className="flex flex-grow flex-col gap-4 p-6">
                    <div className="flex flex-grow flex-col gap-1">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Lekki, Nigeria</p>
                      <p className="text-lg font-bold leading-tight text-text-primary dark:text-text-primary-dark">Luxury Apartment</p>
                      <p className="text-sm font-normal text-text-secondary dark:text-text-secondary-dark">Smart lighting and energy analytics for modern urban living.</p>
                    </div>

                  </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-xl bg-bg-primary-light dark:bg-bg-primary-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="w-full aspect-video bg-cover bg-center bg-no-repeat"
                    data-alt="A modern office conference room"
                    // Image replacement: casestudy3
                    style={{ backgroundImage: `url("${casestudy3}")` }}
                  ></div>
                  <div className="flex flex-grow flex-col gap-4 p-6">
                    <div className="flex flex-grow flex-col gap-1">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Lagos, Nigeria</p>
                      <p className="text-lg font-bold leading-tight text-text-primary dark:text-text-primary-dark">Corporate Headquarters</p>
                      <p className="text-sm font-normal text-text-secondary dark:text-text-secondary-dark">Automated climate control and intelligent meeting room solutions.</p>
                    </div>

                  </div>
                </div>

                <div className="flex flex-col overflow-hidden rounded-xl bg-bg-primary-light dark:bg-bg-primary-dark shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="w-full aspect-video bg-cover bg-center bg-no-repeat"
                    data-alt="Lobby of a luxury hotel"
                    // Image replacement: casestudy4
                    style={{ backgroundImage: `url("${casestudy4}")` }}
                  ></div>
                  <div className="flex flex-grow flex-col gap-4 p-6">
                    <div className="flex flex-grow flex-col gap-1">
                      <p className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Victoria Island, Nigeria</p>
                      <p className="text-lg font-bold leading-tight text-text-primary dark:text-text-primary-dark">Boutique Hotel</p>
                      <p className="text-sm font-normal text-text-secondary dark:text-text-secondary-dark">Enhancing guest experiences with personalized room automation.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-primary dark:text-text-primary-dark">Trusted Across Spaces</h2>
                <p className="mt-4 text-text-secondary dark:text-text-secondary-dark">Our intelligent systems adapt to every kind of environment, delivering tailored solutions for unique needs.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-3 lg:grid-cols-5">
                {/* 1. Smart Homes (home -> Home) */}
                <div className="flex flex-col items-center gap-4 rounded-xl p-6 transition-colors hover:bg-card-light dark:hover:bg-bg-primary-dark/50">
                  <div className="flex size-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary dark:bg-orange-primary/20">
                    <Home className="!h-8 !w-8 stroke-[0.75]" />
                  </div>
                  <p className="font-bold text-text-primary dark:text-text-primary-dark">Smart Homes</p>
                </div>
                {/* 2. Offices (apartment -> Building) */}
                <div className="flex flex-col items-center gap-4 rounded-xl p-6 transition-colors hover:bg-card-light dark:hover:bg-bg-primary-dark/50">
                  <div className="flex size-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary dark:bg-orange-primary/20">
                    <Building className="!h-8 !w-8 stroke-[0.75]" />
                  </div>
                  <p className="font-bold text-text-primary dark:text-text-primary-dark">Offices</p>
                </div>
                {/* 3. Hospitality (hotel -> Hotel) */}
                <div className="flex flex-col items-center gap-4 rounded-xl p-6 transition-colors hover:bg-card-light dark:hover:bg-bg-primary-dark/50">
                  <div className="flex size-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary dark:bg-orange-primary/20">
                    <Hotel className="!h-8 !w-8 stroke-[0.75]" />
                  </div>
                  <p className="font-bold text-text-primary dark:text-text-primary-dark">Hospitality</p>
                </div>
                {/* 4. Education (school -> School) */}
                <div className="flex flex-col items-center gap-4 rounded-xl p-6 transition-colors hover:bg-card-light dark:hover:bg-bg-primary-dark/50">
                  <div className="flex size-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary dark:bg-orange-primary/20">
                    <School className="!h-8 !w-8 stroke-[0.75]" />
                  </div>
                  <p className="font-bold text-text-primary dark:text-text-primary-dark">Education</p>
                </div>
                {/* 5. Commercial (storefront -> Store) */}
                <div className="col-span-2 flex flex-col items-center gap-4 rounded-xl p-6 transition-colors hover:bg-card-light dark:hover:bg-bg-primary-dark/50 md:col-span-1">
                  <div className="flex size-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary dark:bg-orange-primary/20">
                    <Store className="!h-8 !w-8 stroke-[0.75]" />
                  </div>
                  <p className="font-bold text-text-primary dark:text-text-primary-dark">Commercial</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-xl bg-card-light dark:bg-bg-primary-dark/50 p-8 text-center shadow-sm md:p-16">
                <div className="absolute -right-10 -top-10 -z-0 h-40 w-40 rounded-full bg-orange-primary/10"></div>
                <div className="absolute -bottom-16 -left-16 -z-0 h-52 w-52 rounded-full bg-orange-primary/10"></div>
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-text-primary dark:text-text-primary-dark">Your Project Could Be Next</h2>
                <p className="text-lg text-text-secondary dark:text-text-secondary-dark">
                  Let’s bring intelligent automation to your space. Start your Miratek journey today and discover the potential of smart living.
                </p>
                <button onClick={() => navigate("/contact")} className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-orange-primary text-text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity shadow-orange-glow">
                  <span className="truncate">Start Your Project</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CaseStudies;