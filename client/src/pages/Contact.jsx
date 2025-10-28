import React from 'react';
import { Mail, Phone, MapPin, Zap, Quote } from 'lucide-react';



const Contact = () => {
    return (
        <section className="font-display bg-bg-primary-light dark:bg-bg-primary-dark text-text-primary dark:text-text-primary-dark">
            <div className="relative w-full overflow-x-hidden">


                <main>
                    {/* Hero Section */}
                    <section className="relative py-32 sm:py-32 min-h-screen flex flex-col items-center justify-center px-8 text-center md:px-24">
                        {/* Updated primary color classes */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-primary/10 via-transparent to-transparent dark:from-orange-primary/20"></div>
                        <div className="absolute left-1/4 top-1/4 size-96 animate-float rounded-full bg-orange-primary/10 blur-3xl filter"></div>
                        <div className="absolute bottom-1/4 right-1/4 size-80 animate-float animation-delay-3000 rounded-full bg-orange-primary/5 blur-3xl filter"></div>

                        <div className="container mx-auto px-4">
                            <div className="relative z-10 mx-auto max-w-4xl text-center">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-text-primary dark:text-text-primary-dark">Let’s Build Your Intelligent Home.</h1>
                                <p className="mt-6 text-base font-normal leading-normal text-text-primary/80 dark:text-text-primary-dark/80 sm:text-lg">
                                    We are here to help you bring intelligent living to life. Tell us a little about your home or project, and our team will reach out to craft your personalized automation experience.
                                </p>
                                <div className="mt-10 flex flex-wrap justify-center gap-4">
                                    <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-orange-primary px-5 text-base font-bold leading-normal tracking-[0.015em] text-white shadow-lg shadow-orange-primary/30 transition-all hover:scale-105 hover:shadow-orange-glow-lg">
                                        <span className="truncate">Get Started</span>
                                    </button>
                                    <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-bg-primary-light/50 px-5 text-base font-bold leading-normal tracking-[0.015em] text-text-primary backdrop-blur-sm dark:bg-bg-primary-dark/50 dark:text-text-primary-dark transition-transform hover:scale-105">
                                        <span className="truncate">Book a Demo</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Details & Form Section */}
                    <section className="py-20 sm:py-24" id="contact-form">
                        <div className="max-w-6xl lg:max-w-7xl mx-auto px-12 lg:px-16">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                                {/* Contact Info */}
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">We’d love to hear from you</h2>
                                    <p className="mt-4 text-base font-normal leading-normal text-text-primary/80 dark:text-text-primary-dark/80">
                                        Whether you’re planning a new home, upgrading an existing one, or exploring automation possibilities, Miratek experts are here to guide you.
                                    </p>
                                    <div className="mt-10 space-y-6">
                                        {/* Email */}
                                        <div className="group flex items-center gap-4">
                                            {/* Replaced mail icon */}
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-orange-primary/10 text-orange-primary transition-colors group-hover:bg-orange-primary group-hover:text-white dark:bg-orange-primary/20">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <p className="text-base font-medium leading-normal">support@miratek.com</p>
                                        </div>
                                        {/* Phone */}
                                        <div className="group flex items-center gap-4">
                                            {/* Replaced call icon */}
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-orange-primary/10 text-orange-primary transition-colors group-hover:bg-orange-primary group-hover:text-white dark:bg-orange-primary/20">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <p className="text-base font-medium leading-normal">+234-XXX-XXX-XXXX</p>
                                        </div>
                                        {/* Location */}
                                        <div className="group flex items-center gap-4">
                                            {/* Replaced location_on icon */}
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-orange-primary/10 text-orange-primary transition-colors group-hover:bg-orange-primary group-hover:text-white dark:bg-orange-primary/20">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <p className="text-base font-medium leading-normal">Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="relative rounded-2xl bg-card-light p-10 shadow-3xl shadow-orange-primary/10 backdrop-blur-xl dark:bg-card-dark dark:shadow-orange-primary/15">
                                    <form action="#" className="space-y-8" method="POST">
                                        {/* Full Name Input */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-primary dark:text-text-primary-dark" htmlFor="full-name">
                                                Full Name
                                            </label>
                                            <input
                                                className="block w-full appearance-none outline-none rounded-xl border-2 border-orange-primary/15 bg-bg-primary-light/50 p-3.5 text-base transition-all placeholder:text-gray-400 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary dark:bg-bg-primary-dark/50 dark:border-orange-primary/20 dark:focus:border-orange-primary"
                                                id="full-name"
                                                name="full-name"
                                                type="text"
                                                placeholder="Jane Doe"
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-primary dark:text-text-primary-dark" htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                className="block w-full appearance-none outline-none rounded-xl border-2 border-orange-primary/15 bg-bg-primary-light/50 p-3.5 text-base transition-all placeholder:text-gray-400 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary dark:bg-bg-primary-dark/50 dark:border-orange-primary/20 dark:focus:border-orange-primary"
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="jane.doe@example.com"
                                            />
                                        </div>

                                        {/* Phone Input (Optional) */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-primary dark:text-text-primary-dark" htmlFor="phone">
                                                Phone Number <span className="text-sm font-normal text-text-primary/50 dark:text-text-primary-dark/50">(Optional)</span>
                                            </label>
                                            <input
                                                className="block w-full appearance-none outline-none rounded-xl border-2 border-orange-primary/15 bg-bg-primary-light/50 p-3.5 text-base transition-all placeholder:text-gray-400 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary dark:bg-bg-primary-dark/50 dark:border-orange-primary/20 dark:focus:border-orange-primary"
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="(555) 555-5555"
                                            />
                                        </div>

                                        {/* Subject Select */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-primary dark:text-text-primary-dark" htmlFor="subject">
                                                Subject
                                            </label>
                                            <select
                                                className="block w-full appearance-none outline-none rounded-xl border-2 border-orange-primary/15 bg-bg-primary-light/50 p-3.5 text-base transition-all focus:border-orange-primary focus:ring-1 focus:ring-orange-primary dark:bg-bg-primary-dark/50 dark:border-orange-primary/20 dark:focus:border-orange-primary"
                                                id="subject"
                                                name="subject"
                                            >
                                                <option>General Inquiry</option>
                                                <option>Schedule a Demo</option>
                                                <option>Technical Support</option>
                                                <option>Partnership</option>
                                            </select>
                                        </div>

                                        {/* Message Textarea */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-text-primary dark:text-text-primary-dark" htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                className="block w-full rounded-xl border-2 appearance-none outline-none resize-none border-orange-primary/15 bg-bg-primary-light/50 p-3.5 text-base transition-all placeholder:text-gray-400 focus:border-orange-primary focus:ring-1 focus:ring-orange-primary dark:bg-bg-primary-dark/50 dark:border-orange-primary/20 dark:focus:border-orange-primary"
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us a little about your needs..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div>
                                            <button
                                                className="flex h-14 w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-orange-primary px-6 text-lg font-bold leading-normal tracking-[0.015em] text-white shadow-xl shadow-orange-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-glow-lg"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Demo CTA Section */}
                    <section className="py-20 sm:py-24">
                        <div className="container mx-auto px-4">
                            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-primary/80 to-orange-primary p-12 text-center text-white shadow-orange-glow-lg dark:from-orange-primary/90 dark:to-orange-primary/90">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')] opacity-10"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] sm:text-4xl">Prefer a Live Demo?</h2>
                                    <p className="mx-auto mt-4 max-w-2xl text-base font-normal leading-normal text-white/90">
                                        Experience Miratek Intelligent Home in action — explore lighting, security, entertainment, and climate automation in real time.
                                    </p>
                                    <div className="mt-8 grid place-content-center">
                                        <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white px-5 text-base font-bold leading-normal tracking-[0.015em] text-orange-primary transition-transform hover:scale-105">
                                            <span className="truncate">View Our Demo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </main>


            </div>
        </section>
    );
};

export default Contact;
