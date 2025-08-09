import React, { useState, useEffect } from 'react'
import { Sun, Moon, Home, User } from 'lucide-react'
import dayImage from '../assets/day.svg' // Your first image
import nightImage from '../assets/night.svg' // Your second image
import {Link} from 'react-router-dom'
const Welcome = ({connectionStatus, setIsDay, isDay}) => {
  
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      const now = new Date()
      setCurrentTime(now)
      
      // Determine if it's day or night based on actual time
      const hour = now.getHours()
      setIsDay(hour >= 6 && hour < 18)
    }, 60000)

    // Set initial time
    const now = new Date()
    const hour = now.getHours()
    setIsDay(hour >= 6 && hour < 18)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString([], { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric'
    })
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  return (
    <div className={`
      relative overflow-hidden
      w-full h-full min-h-[270px]
      ${isDay 
        ? 'bg-gradient-to-br from-orange-700/20 to-orange-800/30 border-orange-300/30' 
        : 'bg-gradient-to-br from-indigo-500/20 to-purple-600/30 border-indigo-400/30'
      }
      backdrop-blur-xl backdrop-brightness-30
      rounded-3xl shadow-xl
      transition-all duration-500 ease-in-out
      hover:scale-[1.01] hover:shadow-2xl
      p-6
    `}>
      
      {/* Background Image */}
      <div className="absolute opacity-30 w-[300px] h-[300px] right-0 bottom-0">
        <img 
          src={isDay ? dayImage : nightImage}
          alt={isDay ? "Day scene" : "Night scene"}
          className="w-full h-full object-cover rounded-3xl transition-opacity duration-500"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`
              p-2 rounded-full backdrop-blur-md
              ${isDay ? 'bg-orange-400/20' : 'bg-indigo-400/20'}
              transition-colors duration-500
            `}>
              <Home className={`
                w-5 h-5
                ${isDay ? 'text-orange-200' : 'text-indigo-200'}
              `} strokeWidth={0.75} />
            </div>
            <span className={`
              text-sm font-medium
              ${isDay ? 'text-orange-100' : 'text-indigo-100'}
            `}>
               <Link to="/">Smart Home </Link>
            </span>
          </div>
          
          {/* Day/Night Toggle */}
          <button 
            onClick={() => setIsDay(!isDay)}
            className={`
              p-2 rounded-full backdrop-blur-md
              ${isDay ? 'bg-orange-400/20 text-yellow-200' : 'bg-blue-400/20 text-blue-200'}
              hover:scale-110 transition-all duration-300
            `}
          >
            {isDay ? <Sun className="w-5 h-5" strokeWidth={0.75}/> : <Moon className="w-5 h-5" strokeWidth={0.75}/>}
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="space-y-2">
            <h1 className={`
              text-2xl md:text-3xl lg:text-4xl font-bold
              ${isDay ? 'text-white' : 'text-white'}
              drop-shadow-lg
            `}>
              {getGreeting()}
            </h1>
            
            <p className={`
              text-lg md:text-xl font-medium
              ${isDay ? 'text-orange-100' : 'text-indigo-100'}
              drop-shadow-md
            `}>
             {isDay ?  'Have a great day' : 'Welcome back home' }
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className={`
              text-2xl md:text-3xl font-bold
              ${isDay ? 'text-white' : 'text-white'}
              drop-shadow-lg
            `}>
              {formatTime(currentTime)}
            </p>
            <p className={`
              text-sm font-medium
              ${isDay ? 'text-orange-200' : 'text-indigo-200'}
            `}>
              {formatDate(currentTime)}
            </p>
          </div>
        
        </div>
      </div>

      {/* Ambient Light Effect */}
      <div className={`
        absolute inset-0 pointer-events-none
        ${isDay 
          ? 'bg-gradient-to-t from-transparent via-orange-400/5 to-orange-300/10' 
          : 'bg-gradient-to-t from-transparent via-indigo-500/5 to-purple-400/10'
        }
        transition-all duration-500
      `} />
     <div className='w-fit py-2 absolute bottom-0 right-2 md:bottom-5 md:right-5'>
        {/* Connection Status Indicator */}  
        <div className={`
             w-full flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md
             bg-orange-800/30
              transition-all duration-300
            `}>
              <div className={`
                w-2 h-2 rounded-full
                ${connectionStatus === 'connected' ? 'bg-orange-300' : 'bg-orange-700'}
                ${connectionStatus === 'connected' ? 'animate-pulse' : ''}
              `} />
              <span className={`
                text-xs font-medium
                ${connectionStatus === 'connected' ? 'text-green-200' : 'text-red-200'}
              `}>
                {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
              </span>
            </div>
     </div>
    </div>
    
  )
}

export default Welcome
