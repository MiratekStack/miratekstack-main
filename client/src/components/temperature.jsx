import React from 'react'
import { Thermometer, Snowflake, Sun, Flame } from 'lucide-react'

const Temperature = ({ temperature = 0 }) => {
  // Determine color scheme based on temperature

  const getTemperatureIcon = (temp) => {
    if (temp <= 10) return <Snowflake className="text-white/90" size={24} strokeWidth={0.75}  />
    if (temp <= 20) return <Thermometer className="text-white/90 "  size={24} strokeWidth={0.75}  />
    if (temp <= 30) return <Sun className="text-white/90" size={24} strokeWidth={0.75}  />
    return <Flame className="text-white/90" size={24} strokeWidth={0.75}  />
  }


  const icon = getTemperatureIcon(temperature)

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
      
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            {icon}
          </div>
          <h2 className="text-lg font-semibold text-white/90 tracking-wide">
            Temperature
          </h2>
        </div>
      </div>

      {/* Temperature Display */}
      <div className="flex items-end gap-2 mt-4">
        <span className="text-3xl md:text-4xl font-bold text-white leading-none">
          {temperature}
        </span>
        <div className="flex flex-col justify-end pb-2">
          <span className="text-sm font-medium text-white/80">°C</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
        <span className="text-sm text-white/70 font-medium">
          {temperature <= 15 ? 'Cool' : temperature <= 25 ? 'Comfortable' : temperature <= 30 ? 'Warm' : 'Hot'}
        </span>
      
      </div>

    </div>
  )
}

export default Temperature