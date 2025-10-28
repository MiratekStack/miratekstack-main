import React from 'react';
import { UserCheck } from 'lucide-react'

const SignOut = ({ onConfirmSignOut, onCancel }) => {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
      {/* Background Decorative Elements - Retained for aesthetic consistency */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content Area for the card */}
      <div class="flex w-full max-w-md flex-col items-center gap-6 rounded-2xl bg-card-light/30  shadow-md backdrop-blur-lg p-8">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-primary/10 text-orange-primary">
          <UserCheck className="w-8 h-8 text-orange-primary" />
        </div>
        <div class="flex flex-col items-center gap-2 text-center">
          <h1 class="text-2xl font-bold tracking-tight text-text-primary dark:text-dark-text-primary sm:text-3xl">Email Verified Successfully</h1>
          <p class="text-base text-text-secondary dark:text-dark-text-secondary">Your email has been verified. You can now access your smart home dashboard.</p>
        </div>
        <div class="w-full pt-2">
          <button class="flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-orange-primary text-base font-bold text-white shadow-lg shadow-orange-glow transition-transform duration-200 ease-in-out hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark">
            <span class="truncate">Go to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignOut;