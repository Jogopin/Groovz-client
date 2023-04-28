import React from "react";

const Star = ({starValue}) => {
   
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-md text-xl text-white"
      
      style={{
        background: `linear-gradient(90deg, #B91C1C ${
          starValue * 100
        }%, #CBD5E1 ${starValue * 100}%)`,
      }}
    >
      ★
    </div>
    
  );
};

export default Star;
