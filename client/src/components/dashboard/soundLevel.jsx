import React from 'react'
import { Volume, Volume1, Volume2, VolumeX } from 'lucide-react'

const SoundLevel = ({ soundLevel = 0 }) => {
  // Determine color scheme based on sound level (dB)
  const getSoundIcon = (sound) => {
    if (sound <= 20) return <VolumeX className="text-white/90" size={24} strokeWidth={0.75} />
    if (sound <= 40) return <Volume className="text-white/90" size={24} strokeWidth={0.75} />
    if (sound <= 60) return <Volume1 className="text-white/90" size={24} strokeWidth={0.75} />
    return <Volume2 className="text-white/90" size={24} strokeWidth={0.75} />
  }

  const icon = getSoundIcon(soundLevel)

  return (
    <div className={`
      relative overflow-hidden
      w-full h-full min-h-[120px]
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
            Sound Level
          </h2>
        </div>
        
        {/* Status Indicator */}
        {/* <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" /> */}
      </div>

      {/* Sound Level Display */}
      <div className="flex items-end gap-1 mt-2">
        <span className="text-3xl md:text-4xl font-bold text-white leading-none">
          {soundLevel}
        </span>
        <div className="flex flex-col justify-end pb-1">
          <span className="text-sm font-medium text-white/80">dB</span>
        </div>
      </div>

      {/* Additional Info */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10">
        <span className="text-xs text-white/70 font-medium">
          {soundLevel <= 30 ? 'Quiet' : soundLevel <= 50 ? 'Normal' : soundLevel <= 70 ? 'Loud' : 'Very Loud'}
        </span>
      
      </div>

 
    </div>
  )
}

export default SoundLevel