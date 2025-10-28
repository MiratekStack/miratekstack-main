import React from 'react';
import { LogOut } from 'lucide-react'; 

const SignOut = ({ onConfirmSignOut, onCancel }) => {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4 py-12 relative overflow-hidden font-inter">
      {/* Background Decorative Elements - Retained for aesthetic consistency */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Main Content Area for the card */}
      <div className="w-full max-w-md relative z-10">
        {/* Sign Out Card - Applying the modern card styling */}
        <div className="bg-card-light/30 backdrop-blur-lg border border-divider rounded-2xl p-8 shadow-card transition-all duration-300">
          <div className="flex flex-col items-center p-4">
            
            {/* Icon Section - Styled with the orange accent border/fill */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-primary/10 border-2 border-orange-primary/30">
              <LogOut className="w-8 h-8 text-orange-primary" />
            </div>
            
            {/* Header Text */}
            <h1 className="text-text-primary tracking-tight text-[28px] font-bold leading-tight text-center pb-2">
              Sign Out of Miratek?
            </h1>
            
            {/* Subtext */}
            <p className="text-text-secondary text-base font-normal leading-normal text-center pb-8">
              You can always sign back in anytime.
            </p>
            
            {/* Action Buttons */}
            <div className="flex w-full flex-col items-stretch gap-3">
              
              {/* Cancel Button - Styled as the secondary/ghost button */}
              <button
                type="button"
                onClick={onCancel}
                className="flex min-w-[84px] items-center justify-center rounded-xl h-12 px-5 bg-bg-secondary text-text-primary text-base font-semibold leading-normal transition-colors shadow-md hover:bg-bg-secondary/70 border border-transparent border-divider hover:border-orange-primary/90"
              >
                <span className="truncate">Cancel</span>
              </button>

              {/* Sign Out Button - High-impact, destructive action styled with a red/danger color */}
              <button
                type="button"
                onClick={onConfirmSignOut}
                className="w-full bg-orange-primary hover:bg-orange-secondary text-white font-semibold py-3 px-6 rounded-xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 text-lg">Sign Out</span>
                {/* Subtle hover effect for visual appeal */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Optional: Add a link back to the sign-in page if not handled by the sign-out action */}
        <p className="text-center mt-6 text-text-secondary">
          Decided to stay?{' '}
          <a onClick={onCancel} className="text-orange-primary brightness-75 hover:text-orange-glow font-medium transition-colors cursor-pointer">
            Go back
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignOut;