import React from 'react'
import light from '../assets/light.png'

const Heater = ({ heater, setHeater }) => {

  const toggle = () => {
    setHeater(heater => !heater);
    
  }

  return (
    <div className={` h-full  flex flex-col items-center justify-center p-2
  relative overflow-hidden
  aspect-square w-full max-w-sm mx-auto
  ${heater ? ' bg-black/80' : 'bg-black/50'}
  backdrop-blur-xl backdrop-brightness-30
  rounded-3xl shadow-xl
  transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl
`} onClick={() => {toggle()}}>
  

      {/* HR Icon Container */}
      <div className="flex items-center justify-center">
        <div className={`
          relative w-[118px] h-[118px] md:w-[160px] md:h-[160px]
          transition-all duration-300
          ${heater ? 'drop-shadow-lg' : 'opacity-60'}
        `}>
          <img 
            src={light} 
            className="w-full h-full object-cover" 
            alt="Light" 
          />
          {/* Glow effect when active */}
          {heater && (
            <div className="absolute inset-0 bg-orange-400/10 rounded-lg blur-xl -z-10" />
          )}
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full bottom-0 left-0 right-0 p-4">
        <h1 className={`
          text-xl font-semibold tracking-wide text-start
          ${heater ? 'text-white' : 'text-gray-300'}
          transition-colors duration-300
        `}>
          Light
        </h1>
        <p className={`
          text-sm mt-1 font-medium text-start
          ${heater ? 'text-orange-200' : 'text-gray-400'}
          transition-colors duration-300
        `}>
          {heater ? 'Online' : 'Offline'}
        </p>
      </div>


    </div>
  )
}

export default Heater