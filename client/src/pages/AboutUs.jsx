import React from 'react'
import {
  Target,
  Eye,
  SlidersHorizontal,
  Shield,
  Palette,
  Leaf
} from 'lucide-react';
import { Link } from 'react-router-dom';

import hero from '../assets/aboutHero.png';
import aboutus1 from '../assets/aboutus-1.jpeg';

const AboutUs = () => {
    return (
      <div className="font-display pt-20 bg-bg-primary-light dark:bg-bg-primary-dark text-text-primary dark:text-text-secondary">
    <div className="relative flex h-auto min-h-screen max-w-6xl mx-auto flex-col overflow-x-hidden px-4 sm:px-8 py-10">
      <main className="flex-grow">
        {/* Hero Section */}
  

          <div className="w-full">
                <div
                  className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center shadow-lg"
                  data-alt="Abstract image showing interconnected smart home devices in a modern living room setting."
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("${hero}")`,
                  }}
                >
                  <div className="flex flex-col gap-4 max-w-3xl">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl md:text-6xl">Intelligent living made effortless.</h1>
                    <h2 className="text-white/90 text-base font-normal leading-normal sm:text-lg"> Miratek is redefining modern living through the seamless integration of technology and design, creating homes that are intuitive, responsive, and beautifully connected.
           </h2>
                  </div>
                </div>
              </div>

        {/* Mission & Vision Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-8">
                <div className="flex items-center gap-3">
                  <Target className="text-orange-primary text-3xl stroke-[0.75]" size={30} /> {/* Replaces track_changes */}
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-text-primary">Our Mission</h2>
                </div>
                <p className="text-text-secondary dark:text-text-secondary-dark text-base leading-relaxed">
                  To redefine modern living through intelligent automation by seamlessly connecting people, spaces, and technology. The Miratek Web App empowers homeowners to control, monitor, and personalize their environment—lighting, security, entertainment, and energy—anytime, anywhere, with one intuitive platform.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-8">
                <div className="flex items-center gap-3">
                  <Eye className="text-orange-primary text-3xl stroke-[0.75]" size={30} /> {/* Replaces visibility */}
                  <h2 className="text-2xl font-bold tracking-tight text-text-primary dark:text-text-primary">Our Vision</h2>
                </div>
                <p className="text-text-secondary dark:text-text-secondary text-base leading-relaxed">
                  To create a world where every home is intelligent, responsive, and effortlessly connected—transforming ordinary spaces into personalized experiences that inspire comfort, security, and sustainable living.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visionary Section */}
        <section className="bg-card-light dark:bg-card-dark py-16 sm:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-1 flex justify-center">
                <div
                  className="h-80 w-64 rounded-xl bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-full"
                  data-alt="Professional portrait of Miracle Sunday Israel, Founder & Visionary of Miratek."
                  style={{ backgroundImage:  `url(${aboutus1})` }}
                ></div>
              </div>
              <div className="lg:col-span-2 flex flex-col gap-4">
                <h3 className="text-base font-semibold tracking-wider text-primary">THE VISIONARY</h3>
                <p className="text-2xl font-bold text-text-primary dark:text-text-primary md:text-3xl">Miracle Sunday Israel</p>
                <p className="text-lg font-medium text-text-secondary/80 dark:text-text-secondary/80">Founder & Visionary, Miratek Intelligent Home</p>
                <blockquote className="mt-4 border-l-4 border-primary pl-6 dark:border-primary-glow">
                  <p className="text-lg italic leading-relaxed text-text-secondary dark:text-text-secondary">
                    "True luxury is not about excess — it’s about ease, comfort, and the quiet intelligence that understands you. Miratek was designed for those who value refined living and effortless control. Every detail reflects harmony between design and technology, creating spaces that respond to your presence and elevate everyday moments. With Miratek, home becomes more than a place — it becomes an experience, a reflection of your mood, rhythm, and lifestyle. This is intelligent living, beautifully crafted for you."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section (The 4 Pillars) */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-text-primary md:text-4xl">The Miratek Philosophy</h2>
              <p className="text-lg leading-relaxed text-text-secondary dark:text-text-secondary/90">
                Our philosophy is built on human-centered innovation. We believe in connecting people and spaces by seamlessly blending beautiful design with intelligent automation. Technology should adapt to you — not the other way around.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Pillar 1: Simplicity (tune -> SlidersHorizontal) */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <SlidersHorizontal className="text-orange-primary stroke-[0.75] text-4xl" size={40} />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Simplicity</h3>
                <p className="text-text-secondary dark:text-text-secondary">Effortless control and intuitive interfaces designed for everyone.</p>
              </div>
              {/* Pillar 2: Security (shield -> Shield) */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <Shield className="text-orange-primary stroke-[0.75] text-4xl" size={40} />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Security</h3>
                <p className="text-text-secondary dark:text-text-secondary">Peace of mind with robust, reliable systems that protect what matters most.</p>
              </div>
              {/* Pillar 3: Personalization (palette -> Palette) */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <Palette className="text-orange-primary stroke-[0.75] text-4xl" size={40} />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Personalization</h3>
                <p className="text-text-secondary dark:text-text-secondary">A home that learns your routines and adapts to your lifestyle.</p>
              </div>
              {/* Pillar 4: Sustainability (eco -> Leaf) */}
              <div className="flex flex-col items-center gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6">
                <Leaf className="text-orange-primary stroke-[0.75] text-4xl" size={40} />
                <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary">Sustainability</h3>
                <p className="text-text-secondary dark:text-text-secondary">Smart energy management that promotes efficiency and reduces waste.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card-light dark:bg-card-dark py-16 sm:py-24">
          <div className="container mx-auto px-6 text-center">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-text-primary dark:text-text-primary md:text-4xl">Experience the Future of Home</h2>
              <p className="text-lg leading-relaxed text-text-secondary/80 dark:text-text-secondary/80">
                Discover how Miratek transforms your living space into an intelligent, responsive, and personal sanctuary. Explore our solutions and see real-world examples of smart living in action.
              </p>
              <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  className="w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-6 border border-orange-primary border-1 hover:border-2 text-text-primary text-base font-bold tracking-wide hover:opacity-90 transition-opacity"
                  to="/solution"
                >
                  Explore Our Solutions
                </Link>
                <Link
                  className="w-full sm:w-auto flex items-center justify-center rounded-lg h-12 px-6 bg-orange-primary dark:bg-orange-primary text-white dark:text-white text-base font-bold tracking-wide hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors"
                  to="/casestudies"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
    )
}

export default AboutUs