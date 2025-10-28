import React from 'react';
import { Mail } from "lucide-react";

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
            {/* Background Decorative Elements - Retained for aesthetic consistency */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Main Content Area for the card */}
            <div class="w-full max-w-md rounded-2xl bg-card-light/30  shadow-md backdrop-blur-lg p-8 ">
                <div class="layout-content-container flex flex-col w-full">
                    <div class="text-center">
                        <h1 class="text-text-primary dark:text-text-primary-dark tracking-tight text-3xl font-bold leading-tight">Forgot Your Password?</h1>
                        <p class="text-text-secondary dark:text-text-secondary-dark text-base font-normal leading-normal mt-3">
                            No problem. Enter the email address associated with your account and we'll send you a link to reset your password.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4 mt-8">
                        <label class="flex flex-col w-full">
                            <p class="text-text-primary-light dark:text-text-primary-dark text-sm font-medium leading-normal pb-2">Email Address</p>
                            <div class="relative flex items-center">
                                <Mail className="absolute stroke-[0.75] left-4 text-text-secondary-light dark:text-text-secondary-dark" />
                                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-primary-light dark:text-text-primary-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-white/50 dark:bg-black/20 h-14 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-3 pl-12 text-base font-normal leading-normal transition-colors" placeholder="Enter your email" value="" />
                            </div>
                        </label>
                    </div>
                    <div class="flex mt-8">
                        <button class="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-orange text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/40">
                            <span class="truncate">Send Reset Link</span>
                        </button>
                    </div>
                    <div class="text-center mt-6">
                        <a class="text-primary text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded" href="#">
                            Back to Sign In
                        </a>
                    </div>
                </div>
                <div class="hidden flex flex-col items-center justify-center w-full mt-8 bg-success/10 text-success p-4 rounded-lg border border-success/20">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-xl">task_alt</span>
                        <p class="text-sm font-medium">Success! If an account with that email exists, a password reset link has been sent.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;