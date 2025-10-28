import React from 'react';
import { Lock, RotateCcw } from "lucide-react";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
      {/* Background Decorative Elements - Retained for aesthetic consistency */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content Area for the card */}
      <div class="w-full max-w-md rounded-2xl bg-card-light/30  shadow-md backdrop-blur-lg p-8">
        <div class="flex flex-col items-center text-center">
          <div class="mb-4 text-primary dark:text-primary rounded-full bg-primary/20 p-3">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-primary/10 border-2 border-orange-primary/30">
              <RotateCcw className="w-8 h-8 text-orange-primary" />
            </div>
          </div>
          <h1 class="text-text-primary dark:text-text-primary-dark  tracking-tight text-3xl font-bold leading-tight pb-2">Reset Your Password</h1>
          <p class="text-text-secondary dark:text-text-secondary-dark  text-base font-normal leading-normal pb-8">Create a new, strong password for your account.</p>
          <form class="w-full space-y-6">
            <div class="flex flex-col text-left">
              <label class="block text-text-primary text-sm font-medium leading-normal pb-2" for="new-password">New Password</label>
              <div class="relative flex w-full bg-card-light items-center">
                <Lock className="absolute left-4 text-text-muted" />
                <input class="form-input flex w-full flex-1 rounded-lg text-text-primary  focus:outline-none focus:ring-2 focus:ring-orange-primary/50 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal" id="new-password" placeholder="Enter your new password" type="password" />
              </div>
            </div>
            <div class="flex flex-col text-left">
              <label class="text-text-primary text-sm font-medium leading-normal pb-2" for="confirm-password">Confirm Password</label>
              <div class="relative flex w-full bg-card-light items-center">
                <Lock className="absolute left-4 text-gray-400 dark:text-gray-500" />
                <input class="form-input flex w-full flex-1 rounded-lg text-text-primary  focus:outline-none focus:ring-2 focus:ring-orange-primary/50 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-12 pr-4 text-base font-normal leading-normal" id="confirm-password" placeholder="Confirm your new password" type="password" />
              </div>
            </div>

            <button class="w-full bg-orange-primary hover:bg-opacity-90 text-white font-bold py-4 px-4 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark" type="submit">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;