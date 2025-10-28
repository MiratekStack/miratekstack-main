import React from 'react'
import {
  Settings,     
  Smartphone, 
  CreditCard,   
  Home,        
  Shield,       
  BarChart3,
  ChevronDown   
} from 'lucide-react';

import hero from '../assets/supportHero.png';

const Support = () => {
    return (
        <div className="bg-bg-primary dark:bg-bg-primary pt-20 font-display text-text-primary dark:text-text-primary-dark">
            <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <main className="flex-1">

                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
                                <div className="@container">
                                    <div className="@[480px]:p-4">
                                        <div className="flex min-h-[520px] flex-col rounded-md gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center text-center px-4 py-10 @[480px]:px-10" data-alt="Abstract gradient with glowing orange orbs representing smart home connectivity" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(${hero})` }}>
                                            <div className="flex flex-col gap-4 max-w-3xl">
                                                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-black">
                                                    We are Here to Help.
                                                </h1>
                                                <h2 className="text-white/80 text-base font-normal leading-normal @[480px]:text-lg">
                                                    Get the support you need to make the most of your Miratek experience. From setup and troubleshooting to advanced automation guidance.
                                                </h2>
                                            </div>
                                            {/* <div className="flex-wrap justify-center items-center gap-4 flex">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-primary text-white/80 text-base font-bold leading-normal tracking-[0.015em] transition-all hover:bg-primary-hover hover:shadow-primary-glow">
                                                    <span className="truncate">Submit a Ticket</span>
                                                </button>
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 @[480px]:h-14 @[480px]:px-8 bg-white/10 backdrop-blur-sm text-white/80 text-base font-bold leading-normal tracking-[0.015em] border border-white/20 transition-all hover:bg-white/20">
                                                    <span className="truncate">Visit Help Center</span>
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                                    {/* 1. Device Setup (devices -> Settings) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <Settings className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Device Setup</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Get started with your new device</p>
                                        </div>
                                    </div>

                                    {/* 2. App Troubleshooting (phone_iphone -> Smartphone) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <Smartphone className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">App Troubleshooting</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Resolve common app issues</p>
                                        </div>
                                    </div>

                                    {/* 3. Account & Billing (credit_card -> CreditCard) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <CreditCard className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Account &amp; Billing</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Manage your subscription</p>
                                        </div>
                                    </div>

                                    {/* 4. Smart Home Integration (home_iot_device -> Home) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <Home className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Smart Home Integration</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Connect with other smart devices</p>
                                        </div>
                                    </div>

                                    {/* 5. Security & Privacy (security -> Shield) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <Shield className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Security &amp; Privacy</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Keep your home and data safe</p>
                                        </div>
                                    </div>

                                    {/* 6. Energy Insights (insights -> BarChart3) */}
                                    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-6 transition-transform duration-300 hover:-translate-y-2 glass">
                                        <BarChart3 className="text-primary text-4xl stroke-[0.75]" size={35} />
                                        <div className="flex flex-col gap-1">
                                            <h2 className="text-text-primary dark:text-text-primary-dark text-lg font-bold leading-tight">Energy Insights</h2>
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-normal">Understand your energy usage</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-3xl py-12 md:py-20">
                                <div className="mb-12 text-center">
                                    <h2 className="text-text-primary dark:text-text-primary-dark text-3xl font-bold tracking-tight sm:text-4xl">Popular Questions</h2>
                                </div>
                                <div className="flex flex-col gap-3">

                                    {/* FAQ Item 1 */}
                                    <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-2" open>
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
                                            <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">How do I reset my Miratek Hub?</p>
                                            {/* Replaced material-symbols-outlined with Lucide's ChevronDown */}
                                            <ChevronDown className="h-6 w-6 text-text-secondary dark:text-text-secondary-dark transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-4 pb-4">
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                To reset your Miratek Hub, press and hold the reset button on the back of the device for 10 seconds until the front light flashes amber. Please note this will erase all your current settings.
                                            </p>
                                        </div>
                                    </details>

                                    {/* FAQ Item 2 */}
                                    <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-2">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
                                            <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">What should I do if my app can't connect?</p>
                                            {/* Replaced material-symbols-outlined with Lucide's ChevronDown */}
                                            <ChevronDown className="h-6 w-6 text-text-secondary dark:text-text-secondary-dark transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-4 pb-4">
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                First, ensure your phone's Wi-Fi and Bluetooth are enabled. Then, check that your Miratek Hub is powered on and connected to your home network. Try restarting the app and your hub. If the issue persists, consult the troubleshooting section in our help center.
                                            </p>
                                        </div>
                                    </details>

                                    {/* FAQ Item 3 */}
                                    <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-2">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
                                            <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">Can I use my devices if the internet is down?</p>
                                            {/* Replaced material-symbols-outlined with Lucide's ChevronDown */}
                                            <ChevronDown className="h-6 w-6 text-text-secondary dark:text-text-secondary-dark transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-4 pb-4">
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                Yes, some core functionalities and local automations will continue to work without an internet connection. However, remote access, cloud services, and voice assistant integrations will be unavailable until connectivity is restored.
                                            </p>
                                        </div>
                                    </details>

                                    {/* FAQ Item 4 */}
                                    <details className="group flex flex-col rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark p-2">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-4">
                                            <p className="text-text-primary dark:text-text-primary-dark text-base font-medium leading-normal">How do I create an automation routine?</p>
                                            {/* Replaced material-symbols-outlined with Lucide's ChevronDown */}
                                            <ChevronDown className="h-6 w-6 text-text-secondary dark:text-text-secondary-dark transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="px-4 pb-4">
                                            <p className="text-text-secondary dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                                                In the Miratek app, navigate to the 'Automations' tab. Tap the '+' icon to create a new routine. You can then set triggers (like time of day or sensor activity) and corresponding actions for your smart devices.
                                            </p>
                                        </div>
                                    </details>

                                </div>
                            </div>
                        </div>

                        <div className="px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto max-w-4xl py-12 md:py-20">
                                <div className="text-center">
                                    <h2 className="text-text-primary dark:text-text-primary-dark text-3xl font-bold tracking-tight sm:text-4xl">Need Extra Help?</h2>
                                    <p className="mt-4 text-lg leading-8 text-text-secondary dark:text-text-secondary-dark">Can’t find what you’re looking for? Our support specialists are ready to assist you.</p>
                                </div>
                                <div className="mt-16 p-8 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark glass">
                                    <form action="#" className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2" method="POST">
                                        <div>
                                            <label className="block text-sm font-semibold leading-6 text-text-primary dark:text-text-primary-dark" for="full-name">Full Name</label>
                                            <div className="mt-2.5">
                                                <input autocomplete="name" className="block w-full rounded-md border-none outline-none  px-3.5 py-2 appearance-none bg-bg-primary-light/50 dark:bg-bg-primary-dark/50 text-text-primary dark:text-text-primary-dark shadow-sm  placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark  focus:ring-1 focus:ring-inset focus:ring-orange-primary sm:text-sm sm:leading-6" id="full-name" name="full-name" type="text" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold leading-6 text-text-primary dark:text-text-primary-dark" for="email">Email Address</label>
                                            <div className="mt-2.5">
                                                <input autocomplete="email" className="block w-full rounded-md border-none outline-none  px-3.5 py-2 appearance-none bg-bg-primary-light/50 dark:bg-bg-primary-dark/50 text-text-primary dark:text-text-primary-dark shadow-sm  placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark  focus:ring-1 focus:ring-inset focus:ring-orange-primary sm:text-sm sm:leading-6" id="email" name="email" type="email" />
                                            </div>
                                        </div>
 
                                        <div className="sm:col-span-2">
                                            <label className="block text-sm font-semibold leading-6 text-text-primary dark:text-text-primary-dark" for="message">Message</label>
                                            <div className="mt-2.5">
                                                <textarea className="block w-full rounded-md border-none outline-none resize-none px-3.5 py-2 appearance-none bg-bg-primary-light/50 dark:bg-bg-primary-dark/50 text-text-primary dark:text-text-primary-dark shadow-sm bg-bg-primary-dark placeholder:text-text-secondary dark:placeholder:text-text-secondary-dark focus:ring-2 focus:ring-inset focus:ring-orange-primary sm:text-sm sm:leading-6" id="message" name="message" rows="4"></textarea>
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 mt-4">
                                            <button className="block w-full rounded-full bg-orange-primary px-3.5 py-3.5 text-center text-base font-semibold text-white/95 shadow-md hover:bg-orange-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:shadow-primary-glow" type="submit">Send Message</button>
                                        </div>
                                    </form>
                                    <div className="mt-10 pt-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-center">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">mail</span>
                                            <a className="text-sm text-text-secondary dark:text-text-secondary-dark hover:text-primary" href="mailto:support@alphaahome.com">support@alphaahome.com</a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">call</span>
                                            <span className="text-sm text-text-secondary dark:text-text-secondary-dark">+234-XXX-XXX-XXXX</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">location_on</span>
                                            <span className="text-sm text-text-secondary dark:text-text-secondary-dark">Lagos, Nigeria</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Support