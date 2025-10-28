import React from 'react'
import { Droplets, Cloud, CloudRain, Waves } from 'lucide-react'

const Humidity = ({ humidity = 0 }) => {
  // Determine color scheme based on humidity

  const getHumidityIcon = (humid) => {
    if (humid <= 30) return <Waves className="text-white/90" size={24} strokeWidth={0.75} />
    if (humid <= 50) return <Cloud className="text-white/90" size={24} strokeWidth={0.75} />
    if (humid <= 70) return <Droplets className="text-white/90" size={24} strokeWidth={0.75} />
    return <CloudRain className="text-white/90" size={24} strokeWidth={0.75} />
  }

  const icon = getHumidityIcon(humidity)

  return (
    <div className={`
      relative overflow-hidden
      w-full h-full
     bg-black/50
      backdrop-blur-xl backdrop-brightness-30
      rounded-3xl shadow-xl
      transition-all duration-300 ease-out
      hover:scale-[1.02] hover:shadow-2xl
      p-6 flex flex-col justify-between
    `}>
 { /* bg-gradient-to-br */ }   
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            {icon}
          </div>
          <h2 className="text-lg font-semibold text-white/90 tracking-wide">
            Humidity
          </h2>
        </div>
        
        {/* Status Indicator */}
        {/* <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" /> */}
      </div>

      {/* Humidity Display */}
      <div className="flex items-end gap-2 mt-4">
        <span className="text-3xl md:text-4xl font-bold text-white leading-none">
          {humidity}
        </span>
        <div className="flex flex-col justify-end pb-2">
          <span className="text-sm font-medium text-white/80">%</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
        <span className="text-sm text-white/70 font-medium">
          {humidity <= 30 ? 'Very Dry' : humidity <= 50 ? 'Dry' : humidity <= 70 ? 'Comfortable' : 'Humid'}
        </span>
      
      </div>

  
    </div>
  )
}

export default Humidity