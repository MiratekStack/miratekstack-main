import React from 'react';
// Import necessary Lucide React icons - Corrected icon names: WbSunny -> Sun, Thermostat/Thermometer -> Gauge
import { Sun, Gauge, Coffee, Shield, Lock, BellRing, Video } from 'lucide-react';

import living1 from '../assets/living-1.png'; 
import living2 from '../assets/living-2.png';
import living3 from '../assets/living-3.png';

const PLACEHOLDER_IMG_URL = "https://placehold.co/1280x720/FBBF24/374151?text=Smart+Home+Feature";

import { useNavigate } from 'react-router-dom';

const Living = () => {
    // Shared classes for icons for easy customization
    const iconClass = "text-primary size-6 stroke-[0.75]"; 

    const navigate = useNavigate();

    return (
        <div className="">
           
            <div className="bg-bg-primary-light dark:bg-bg-primary-dark font-display text-text-primary dark:text-text-primary-dark">
                <div className="relative w-full overflow-x-hidden">

                    {/* 1. Hero Section */}
                    <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center  px-8 py-20 text-center md:px-24 md:min-h-screen">
                        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
                            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-text-primary dark:text-text-primary-dark sm:text-5xl md:text-6xl">
                                A Smarter Way to Live Every Day
                            </h1>
                            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                Your home anticipates your needs, learns your habits, and enhances every moment — from sunrise to bedtime.
                            </p>
                            <button className="mt-4 flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-orange px-8 text-base font-semibold text-white shadow-lg transition-transform duration-300 ease-out hover:scale-105">
                                <span className="truncate">See How It Works</span>
                            </button>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
                              {/* Updated primary color classes */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-primary/10 via-transparent to-transparent dark:from-orange-primary/20"></div>
                        <div className="absolute left-1/4 top-1/4 size-96 animate-float rounded-full bg-orange-primary/10 blur-3xl filter"></div>
                        <div className="absolute bottom-1/4 right-1/4 size-80 animate-float animation-delay-3000 rounded-full bg-orange-primary/5 blur-3xl filter"></div>

                    </section>

                    {/* 2. Morning Routine Section */}
                    <section className="px-8 py-20 md:px-24">
                        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <div
                                className="relative order-2 h-96 w-full rounded-2xl bg-cover bg-center shadow-card lg:order-1 lg:h-[32rem]"
                                data-alt="Sunlight streaming into a modern bedroom with automated blinds opening."
                                // Replaced hardcoded URL with living1 import
                                style={{ backgroundImage: `url('${living1}')` }}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary-glow/20 to-transparent"></div>
                            </div>
                            <div className="order-1 flex flex-col gap-6 lg:order-2">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your Day Begins Smarter</h2>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                    Wake up gently as Miratek opens blinds, adjusts temperature, and brews your coffee — all before you get out of bed.
                                </p>
                                <div className="mt-4 flex flex-col gap-4 text-text-secondary-light dark:text-text-secondary-dark sm:flex-row sm:gap-6">
                                    <div className="flex items-center gap-2">
                                        {/* Corrected: WbSunny -> Sun */}
                                        <Sun className={iconClass} />
                                        <span className="font-medium">Smart Blinds</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Corrected: Thermometer -> Gauge */}
                                        <Gauge className={iconClass} />
                                        <span className="font-medium">Climate Sync</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* Coffee icon remains correct */}
                                        <Coffee className={iconClass} />
                                        <span className="font-medium">Appliance Control</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Daytime Efficiency Section */}
                    <section className="px-8 py-20 md:px-24">
                        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Seamless Control, Wherever You Are</h2>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                    Monitor and adjust everything remotely — lighting, locks, energy use — all from one dashboard.
                                </p>
                            </div>
                            <div
                                className="relative h-96 w-full rounded-2xl bg-cover bg-center shadow-card lg:h-[32rem]"
                                data-alt="A person outdoors using a smartphone to control their smart home app."
                                // Replaced hardcoded URL with living2 import
                                style={{ backgroundImage: `url('${living2}')` }}
                            >
                                <div className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 glass-card rounded-2xl shadow-glass"></div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Evening Comfort Section */}
                    <section className="relative px-8 py-20 md:px-24">
                        <div className="absolute inset-0 "></div>
                        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <div
                                className="order-2 h-96 w-full rounded-2xl bg-cover bg-center shadow-card lg:order-1 lg:h-[32rem]"
                                data-alt="A cozy living room with ambient lighting, set up for a movie night."
                                // Replaced hardcoded URL with living3 import
                                style={{ backgroundImage: `url('${living3}')` }}
                            ></div>
                            <div className="order-1 flex flex-col gap-6 lg:order-2">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Set the Perfect Scene</h2>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                    One tap transforms your living room into a cinema. Miratek synchronizes lights, audio, and temperature to match your mood.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. Security & Peace Section */}
                    <section className="px-8 py-20 md:px-24">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Always Aware. Always Secure.</h2>
                            <p className="mt-4 text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                From motion alerts to smart locks, Miratek ensures your home is protected — whether you’re inside or miles away.
                            </p>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="flex flex-col gap-4 rounded-2xl bg-surface-light dark:bg-surface-dark p-6 text-center shadow-card transition-all duration-300 ease-out hover:scale-105 hover:shadow-orange-glow">
                                {/* Shield icon remains correct */}
                                <Shield className={`${iconClass} mx-auto text-4xl`} />
                                <h3 className="text-lg font-semibold">Security</h3>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Comprehensive protection.</p>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl bg-surface-light dark:bg-surface-dark p-6 text-center shadow-card transition-all duration-300 ease-out hover:scale-105 hover:shadow-orange-glow">
                                {/* Lock icon remains correct */}
                                <Lock className={`${iconClass} mx-auto text-4xl`} />
                                <h3 className="text-lg font-semibold">Access</h3>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Control who enters.</p>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl bg-surface-light dark:bg-surface-dark p-6 text-center shadow-card transition-all duration-300 ease-out hover:scale-105 hover:shadow-orange-glow">
                                {/* BellRing icon remains correct */}
                                <BellRing className={`${iconClass} mx-auto text-4xl`} />
                                <h3 className="text-lg font-semibold">Alerts</h3>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">Instant notifications.</p>
                            </div>
                            <div className="flex flex-col gap-4 rounded-2xl bg-surface-light dark:bg-surface-dark p-6 text-center shadow-card transition-all duration-300 ease-out hover:scale-105 hover:shadow-orange-glow">
                                {/* Video icon remains correct */}
                                <Video className={`${iconClass} mx-auto text-4xl`} />
                                <h3 className="text-lg font-semibold">Monitoring</h3>
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">24/7 peace of mind.</p>
                            </div>
                        </div>
                    </section>

                    {/* 6. Energy & Insights Section */}
                    <section className="bg-surface-light dark:bg-surface-dark px-8 py-20 md:px-24">
                        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Smarter Living, Greener Tomorrow</h2>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                                    Miratek analyzes your usage patterns, helping you save energy without sacrificing comfort.
                                </p>
                                {/* <button className="mt-4 flex h-12 w-fit min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-primary px-8 text-base font-semibold text-primary transition-colors duration-300 ease-out hover:bg-primary hover:text-white">
                                    <span className="truncate">View Energy Dashboard</span>
                                </button> */}
                            </div>
                            <div className="h-96 w-full rounded-2xl bg-card-light dark:bg-card-dark p-6 shadow-card" data-alt="A clean and modern UI of an energy analytics dashboard showing savings and usage patterns.">
                                <div className="h-full w-full rounded-xl border border-dashed border-text-secondary-light/30 dark:border-text-secondary-dark/30 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark">
                                    Analytics Dashboard Mockup
                                </div>
                            </div>
                        </div>
                    </section>

          
                    {/* 8. CTA Section */}
                    <section className="bg-surface-light dark:bg-surface-dark px-8 py-20 md:px-24">
                        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-orange p-8 text-center text-white shadow-xl md:p-12">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Your Life, Reimagined with Miratek</h2>
                            <p className="mt-4 text-lg text-white/90">
                                Bring the Miratek experience into your daily routine. Discover what living intelligently feels like.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <button onClick={() => {navigate("/signin")}} className="flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white px-8 text-base font-semibold text-text-primary shadow-lg transition-transform duration-300 ease-out hover:scale-105 sm:w-auto">
                                    <span className="truncate">Get Started</span>
                                </button>
                                <button onClick={() => {navigate("/contact")}} className="group relative flex h-12 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-white px-8 text-base font-semibold text-white transition-colors duration-300 ease-out hover:bg-white/10 sm:w-auto">
                                    <span className="truncate">Request a Demo</span>
                                    <div className="absolute inset-0 rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.4)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Living;
