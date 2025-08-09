import React from 'react'
import ac from '../assets/ac.svg'

const Ac = ({ airConditioner, setAirConditioner }) => {
  const toggle = () => {
    setAirConditioner(airConditioner => !airConditioner);
    
  }

  //'bg-gradient-to-br from-orange-500/20 to-red-600/20 border-orange-400/30'

  return (
    <div className={` h-full flex flex-col items-center justify-center p-2
  relative overflow-hidden
  aspect-square w-full max-w-sm mx-auto
  ${airConditioner ?  ' bg-black/80' : 'bg-black/50'}
  backdrop-blur-xl backdrop-brightness-70
  rounded-3xl shadow-xlgradient-to-br from
  transition-all duration-300 ease-out
  hover:scale-105 hover:shadow-2xl
`} onClick={() => {toggle()}}>
      {/* Status indicator
      <div className="absolute top-4 right-4 z-20">
        <div className={`
          w-3 h-3 rounded-full
          ${airConditioner ? 'bg-green-400 shadow-lg shadow-green-400/50' : 'bg-gray-400'}
          transition-all duration-300
        `} />
      </div> */}

      {/* TV Icon Container */}
      <div className="flex items-center justify-center ">
        <div className={`
          relative w-full max-w-[170px] max-h-[170px]
          transition-all duration-300
          ${airConditioner ? 'drop-shadow-lg' : 'opacity-60'}
        `}>
          <img 
            src={ac} 
            className="w-full h-full object-cover" 
            alt="Ac" 
          />
          {/* Glow effect when active */}
          {airConditioner && (
            <div className="absolute inset-0 bg-orange-400/10 rounded-lg blur-xl -z-10" />
          )}
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full p-4">
        <h1 className={`
          text-xl font-semibold tracking-wide text-start
          ${airConditioner ? 'text-white' : 'text-gray-300'}
          transition-colors duration-300
        `}>
          Ac
        </h1>
        <p className={`
          text-sm mt-1 font-medium text-start
          ${airConditioner ? 'text-orange-200' : 'text-gray-400'}
          transition-colors duration-300
        `}>
          {airConditioner ? 'Online' : 'Offline'}
        </p>
      </div>

     
    </div>
  )
}

export default Ac