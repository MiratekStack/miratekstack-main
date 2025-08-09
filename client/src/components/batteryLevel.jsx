import React from "react";
import { Battery } from 'lucide-react';

const BatteryLevel = ({ batteryLevel = 85, isDay }) => {
    let max = 100, min = 0;

    const fillHeight = Math.round(
        max === min ? 0 : ((batteryLevel - min) / (max - min)) * 100
    );

    return (
        <div
            className={`
      relative overflow-hidden
      w-full h-full
      bg-black/50
      backdrop-blur-xl backdrop-brightness-30
      rounded-3xl shadow-xl
      transition-all duration-300 ease-out
      hover:scale-[1.02] hover:shadow-2xl
      p-6 flex flex-col justify-between 
    `}
        >
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <Battery size={24} strokeWidth={0.75} />
                    </div>
                    <h2 className="text-lg font-semibold text-white/90 tracking-wide">
                        Battery Level
                    </h2>
                </div>
            </div>


            <div className="flex items-center justify-center absolute bottom-0 left-0 rounded-2xl overflow-hidden w-full h-full my-4">
                <div className="rounded-2xl w-full h-full flex items-end justify-center">
                    <div
                        className={` w-[80%] rounded-2xl ${isDay
                            ? "bg-gradient-to-br from-orange-700/20 to-orange-800/30 border-orange-300/30"
                            : "bg-gradient-to-br from-indigo-500/20 to-purple-600/30 border-indigo-400/30"
                            }`}
                        style={{ height: `${fillHeight}%` }}
                    ></div>

                </div>

            </div>

            {/* Battery Display */}
            <div className="flex items-center justify-center absolute bottom-0 left-0 rounded-2xl overflow-hidden w-full h-full">


             

                <span className="inline-block mr-1 text-3xl md:text-4xl font-bold text-white z-10 leading-none">
                    {batteryLevel}
                   
                </span>

                <div className="flex flex-col justify-end pb-2">
          <span className="text-sm font-medium text-white/80">%</span>
        </div>
            </div>


        </div>
    );
};

export default BatteryLevel;
