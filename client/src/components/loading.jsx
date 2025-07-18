import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)' }}>
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(5px);
          }
          50% {
            transform: translateY(-65px);
          }
        }
        
        @keyframes tilt {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }
        
        .loader-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .loader-container::before {
          content: "";
          background: rgba(18, 18, 18, 0.8);
          backdrop-filter: blur(8px);
          position: absolute;
          width: 140px;
          height: 55px;
          z-index: 20;
          border-radius: 0 0 10px 10px;
          border: 1px solid rgba(255, 126, 57, 0.3);
          border-top: none;
          box-shadow: 0 15px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(255, 126, 57, 0.1);
          animation: tilt 2s infinite;
        }
        
        .loader-dot {
          background: linear-gradient(135deg, #FF7E39 0%, #FFA56B 50%, #B84F27 100%);
          border-radius: 50%;
          width: 25px;
          height: 25px;
          z-index: 10;
          animation: bounce 2s infinite linear;
          transform: translateY(5px);
          margin: 0.2em;
          box-shadow: 0 4px 15px rgba(255, 126, 57, 0.3), 0 0 20px rgba(255, 126, 57, 0.2);
        }
        
        .loader-dot:nth-child(1) {
          animation-delay: -0.3s;
        }
        
        .loader-dot:nth-child(2) {
          animation-delay: -0.6s;
        }
        
        .loader-dot:nth-child(3) {
          animation-delay: -0.9s;
        }
        
        .loader-dot:nth-child(4) {
          animation-delay: -1.2s;
        }
      `}</style>
      
      <div className="loader-container">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
  );
};

export default Loading;