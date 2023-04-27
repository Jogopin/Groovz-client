import React from "react";



const RatingDisplay = ({starAverage=2.5}) => {
  const fullStars = Math.floor(starAverage);
  const starArr = [];

  for (let i = 1; i <= fullStars; i++) {
    starArr.push(1);
  }
  if (starAverage < 5) {
    const partialStar = starAverage - fullStars;
    starArr.push(partialStar);
    const emptyStars = 5 - starArr.length;
    for (let i = 1; i <= emptyStars; i++) {
      starArr.push(0);
    }
  }

  return (
    <div className="flex gap-0.5">
      {starArr.map((val, i) => (
        <div
          className="w-6 h-6  rounded-md text-xl text-white flex items-center justify-center cursor-default"
          key={i}
          style={{
            background: `linear-gradient(90deg, #B91C1C ${
              val * 100
            }%, #CBD5E1 ${val * 100}%)`,
          }}
        >
          ★
        </div>
      ))}
      <span className="ml-2 font-semibold">{starAverage}</span>
    </div>
  );
};

export default RatingDisplay;
