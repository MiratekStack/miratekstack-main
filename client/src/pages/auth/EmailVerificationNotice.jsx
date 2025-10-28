import React from 'react';
import { Mail } from 'lucide-react';

const EmailVerificationNotice = () => {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
      {/* Background Decorative Elements - Retained for aesthetic consistency */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content Area for the card */}
      <div class="relative w-full max-w-md rounded-2xl border  p-8 text-center  bg-card-light/30  shadow-md backdrop-blur-lg">
        <div class="mb-6 flex justify-center">
          <div class="relative flex h-20 w-20 items-center justify-center rounded-full bg-orange-primary/20">
            <Mail className="text-orange-primary w-10 h-10 z-10" />
          </div>
        </div>
        <h1 class="text-text-primary dark:text-text-primary-dark tracking-tight text-3xl font-bold leading-tight pb-2">Verify Your Email</h1>
        <p class="text-text-secondary dark:text-text-secondary-dark text-base font-normal leading-relaxed pb-8">
          We've sent a verification link to your email address. Please check your inbox.
        </p>
        <div class="flex flex-col gap-4">
          <button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-orange-primary text-white text-base font-bold leading-normal tracking-wide transition-transform duration-200 hover:scale-105 active:scale-100">
            <span class="truncate">Resend Email</span>
          </button>
          <a class="text-sm font-medium text-primary hover:underline" href="#">Back to Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationNotice;