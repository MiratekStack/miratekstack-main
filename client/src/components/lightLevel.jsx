import React from 'react'
import { Sun, Moon, Lightbulb, Zap } from 'lucide-react'

const LightLevel = ({ lightLevel = 0 }) => {
  // Determine color scheme based on light level (lux)
  const getLightIcon = (light) => {
    if (light <= 10) return <Moon className="text-white/90" size={24} strokeWidth={0.75} />
    if (light <= 100) return <Lightbulb className="text-white/90" size={24} strokeWidth={0.75} />
    if (light <= 1000) return <Sun className="text-white/90" size={24} strokeWidth={0.75} />
    return <Zap className="text-white/90" size={24} strokeWidth={0.75} />
  }
  const icon = getLightIcon(lightLevel)

  return (
    <div className={`
      relative overflow-hidden
      w-full h-full 
     bg-black/50
      backdrop-blur-xl backdrop-brightness-30
      rounded-3xl shadow-xl
      transition-all duration-300 ease-out
      hover:scale-[1.02] hover:shadow-2xl
      p-4 flex flex-col justify-between
    `}>
           
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            {icon}
          </div>
          <h2 className="text-sm md:text-base font-semibold text-white/90 tracking-wide">
            Light Level
          </h2>
        </div>
                
        {/* Status Indicator */}
        {/* <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" /> */}
      </div>

      {/* Light Level Display */}
      <div className="flex items-end gap-1 mt-2">
        <span className="text-3xl md:text-4xl font-bold text-white leading-none">
          {lightLevel}
        </span>
        <div className="flex flex-col justify-end pb-1">
          <span className="text-sm font-medium text-white/80">lux</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
        <span className="text-xs text-white/70 font-medium">
          {lightLevel <= 10 ? 'Dark' : lightLevel <= 100 ? 'Dim' : lightLevel <= 1000 ? 'Bright' : 'Very Bright'}
        </span>
      
      </div>

  
    </div>
  )
}

export default LightLevel