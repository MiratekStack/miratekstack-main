import React from 'react';
// Assuming your images are in a folder like './assets'
import experienceHero from '../assets/experienceHero.png';
import experience1 from '../assets/experience-1.png';
import experience2 from '../assets/experience-2.png';
import experience3 from '../assets/experience-3.png';
import experience4 from '../assets/experience-4.png';
import experience5 from '../assets/experience-5.png';
import experience6 from '../assets/experience-6.png';
import experience7 from '../assets/experience-7.png';
import experience8 from '../assets/experience-8.png';
import experience9 from '../assets/experience-9.png';
import experience10 from '../assets/experience-10.png';
import experience11 from '../assets/experience-11.png';
import experience12 from '../assets/experience-12.png';
import experience13 from '../assets/experience-13.png';
import experience14 from '../assets/experience-14.png';
import experience15 from '../assets/experience-15.png';
import experience16 from '../assets/experience-16.png';

import { useNavigate } from 'react-router-dom';
const Experience = () => {
    const navigate = useNavigate();
    return (
        <div className="font-display bg-bg-primary dark:bg-bg-dark text-text-primary dark:text-dark-primary">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">

                            <main className="flex flex-col gap-12 sm:gap-20 ">
                                <div className="container mt-10 sm:mt-20  ">
                                    <div className="flex flex-col gap-6 px-4 py-10">
                                        <div className="flex flex-col gap-6 text-center items-center">
                                            <div className="flex flex-col gap-2">
                                                <h1 className="text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-7xl">
                                                    Experience Intelligent Living
                                                </h1>
                                                <h2 className="text-base font-normal leading-normal @[480px]:text-lg max-w-2xl text-text-secondary dark:text-dark-secondary">
                                                    Discover how Miratek transforms your space with adaptive lighting, seamless comfort, advanced security, and energy optimization.
                                                </h2>
                                            </div>
                                            {/* <a className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-bg-primary text-bg-dark text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base hover:opacity-90 transition-opacity" href="#lighting">
                                                <span className="truncate">Explore the Features</span>
                                            </a> */}
                                        </div>
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl mt-8"
                                            style={{ backgroundImage: `url("${experienceHero}")` }} // Replaced image 0
                                            aria-label="Animated mockup of a smart home dashboard showing various control tiles for lighting, climate, and security.">
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 px-4 py-10 @container bg-card-light dark:bg-card-dark rounded-xl shadow-lg" id="lighting">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-4">
                                            <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                                Sculpt the Perfect Atmosphere
                                            </h1>
                                            <p className="text-base font-normal leading-normal max-w-[720px] text-text-secondary dark:text-dark-secondary">
                                                From sunrise calm to dinner-party brilliance, Miratek tailors lighting to your mood, schedule, and activity.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-items-center gap-4">
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience1}")` }} // Replaced image 1
                                                aria-label="A living room transitioning between warm and cool lighting scenes.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Dynamic Lighting Scenes</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Instantly change the look and feel of any room.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience2}")` }} // Replaced image 2
                                                aria-label="A hallway light turning on automatically as a person walks by.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Motion & Mood Automation</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Lights that respond to your presence and preferences.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience3}")` }} // Replaced image 3
                                                aria-label="A cozy room with warm, amber-colored lighting that mimics a sunset.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Adaptive Color Temperature</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Mimic natural daylight cycles for enhanced well-being.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience4}")` }} // Replaced image 4
                                                aria-label="A smartphone screen showing a lighting control app.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Remote & Scheduled Control</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Full control over your home's lighting from anywhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 px-4 py-10 @container bg-card-light dark:bg-card-dark rounded-xl shadow-lg" id="climate">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-4">
                                            <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                                Comfort That Anticipates You
                                            </h1>
                                            <p className="text-base font-normal leading-normal max-w-[720px] text-text-secondary dark:text-dark-secondary">
                                                AI-driven climate control that balances temperature, humidity, and natural light to create effortless comfort.
                                            </p>
                                        </div>
                                       
                                    </div>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-items-center gap-4">
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience5}")` }} // Replaced image 5
                                                aria-label="A smart thermostat displaying the current weather and indoor temperature.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Weather-Integrated Automation</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">System adjusts automatically based on local weather forecasts.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience6}")` }} // Replaced image 6
                                                aria-label="A house floor plan showing different temperature zones for each room.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Room Zoning</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Set unique temperatures for different rooms or zones.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience7}")` }} // Replaced image 7
                                                aria-label="Sunlight filtering through automated window shades in a modern living room.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Smart Shades</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Automated shades that optimize natural light and privacy.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience8}")` }} // Replaced image 8
                                                aria-label="A chart showing energy savings over time from an efficiency dashboard.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Predictive Energy Efficiency</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Learns your habits to reduce energy consumption without sacrificing comfort.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 px-4 py-10 @container bg-card-light dark:bg-card-dark rounded-xl shadow-lg" id="security">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-4">
                                            <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                                See Everything. Secure Everything.
                                            </h1>
                                            <p className="text-base font-normal leading-normal max-w-[720px] text-text-secondary dark:text-dark-secondary">
                                                24/7 AI-powered security with real-time alerts, smart locks, and instant access control.
                                            </p>
                                        </div>
                                     
                                    </div>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-items-center gap-4">
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience9}")` }} // Replaced image 9
                                                aria-label="A security camera feed with a highlighted box around a person detected in the driveway.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Motion Recognition & AI Alerts</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Get instant notifications for unusual activity.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience10}")` }} // Replaced image 10
                                                aria-label="A user interface showing a recognized family member's face with a 'welcome home' message.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Facial Identification</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Recognize family and friends, and get alerts for strangers.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience11}")` }} // Replaced image 11
                                                aria-label="A smartphone screen with a large red panic button on display.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Panic & Emergency Mode</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">One-touch activation for immediate security response.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience12}")` }} // Replaced image 12
                                                aria-label="A close-up of a video doorbell next to a modern front door.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Integrated Door Intercom</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">See and speak to visitors from anywhere in the world.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 px-4 py-10 @container bg-card-light dark:bg-card-dark rounded-xl shadow-lg" id="energy">
                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-col gap-4">
                                            <h1 className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                                                Power with Purpose
                                            </h1>
                                            <p className="text-base font-normal leading-normal max-w-[720px] text-text-secondary dark:text-dark-secondary">
                                                Miratek intelligently balances power usage, reduces waste, and enhances sustainability with live energy analytics.
                                            </p>
                                        </div>
                                      
                                    </div>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] place-items-center gap-4">
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience13}")` }} // Replaced image 13
                                                aria-label="A dashboard on a tablet showing real-time energy consumption graphs.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Live Consumption Insights</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Track your energy usage in real-time to make smarter decisions.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience14}")` }} // Replaced image 14
                                                aria-label="An icon of a clock with a dollar sign, representing saving money during off-peak hours.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Off-Peak Automation</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Automatically run high-energy tasks when electricity is cheapest.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience15}")` }} // Replaced image 15
                                                aria-label="A home battery storage unit installed neatly in a modern garage.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Backup Priority Systems</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Ensure essential systems stay online during power outages.</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 pb-3">
                                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                                style={{ backgroundImage: `url("${experience16}")` }} // Replaced image 16
                                                aria-label="Solar panels on a residential roof with a clear blue sky.">
                                            </div>
                                            <div>
                                                <p className="text-base font-medium leading-normal">Solar & Battery Integration</p>
                                                <p className="text-sm font-normal leading-normal text-text-secondary dark:text-dark-secondary">Seamlessly manage your solar generation and battery storage.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full py-20">
                                    <div className="relative flex flex-col items-center justify-center gap-8 text-center bg-card-light dark:bg-card-dark rounded-xl shadow-lg p-8 sm:p-12 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-transparent dark:from-orange-primary/20 dark:to-transparent opacity-50"></div>
                                        <div className="relative z-10 flex flex-col items-center gap-6">
                                        
                                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-xl">Bring intelligent living into your home today.</h2>
                                            <button onClick={() => {navigate("/signin")}} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-gradient-to-r from-orange-primary to-orange-glow text-bg-dark text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/40">
                                                <span className="truncate">Get Started with Miratek</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;