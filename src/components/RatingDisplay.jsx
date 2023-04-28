import React from "react";
import Star from "./Star";
import generateStarsArray from "../utils/generateStarsArray";



const RatingDisplay = ({starAverage=2.5}) => {

  
  const starArr = generateStarsArray(starAverage)

  return (
    <div className="flex gap-0.5">
      {starArr.map((starValue, i) => (
        <Star key={i} starValue={starValue}/>
      ))}
      <span className="ml-2 font-semibold">{starAverage}</span>
    </div>
  );
};

export default RatingDisplay;
