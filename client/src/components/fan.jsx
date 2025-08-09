import React from 'react'
import fanImage from '../assets/fan.svg'

const Fan = ({ fan, setFan }) => {
   const toggle = () => {
    setFan(fan => !fan);
    
  }
  return (
    <div className={` h-full  flex flex-col items-center justify-center p-2
  relative overflow-hidden
  aspect-square w-full max-w-sm mx-auto
  ${fan ? ' bg-black/80' : 'bg-black/50'}
  backdrop-blur-xl backdrop-brightness-30
  rounded-3xl shadow-xl
  transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl
`}onClick={() => {toggle()}}>
   

      {/* TV Icon Container */}
      <div className="flex items-center justify-center">
        <div className={`
          relative w-full h-full max-w-[170px] max-h-[170px]
          transition-all duration-300
          ${fan ? 'drop-shadow-lg' : 'opacity-60'}
        `}>
          <img 
            src={fanImage} 
            className="w-full h-full object-cover" 
            alt="Fan" 
          />
          {/* Glow effect when active */}
          {fan && (
            <div className="absolute inset-0 bg-orange-400/10 rounded-lg blur-xl -z-10" />
          )}
        </div>
      </div>

      {/* Title Section */}
      <div className=" w-full p-4">
        <h1 className={`
          text-xl font-semibold tracking-wide text-start
          ${fan ? 'text-white' : 'text-gray-300'}
          transition-colors duration-300
        `}>
          Fan
        </h1>
        <p className={`
          text-sm mt-1 font-medium text-start
          ${fan ? 'text-orange-200' : 'text-gray-400'}
          transition-colors duration-300
        `}>
          {fan ? 'Online' : 'Offline'}
        </p>
      </div>

      
    </div>
  )
}

export default Fan