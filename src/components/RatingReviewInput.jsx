import React, { useState } from "react";
import generateStarsArray from "../utils/generateStarsArray";
import Star from "./Star";

const RatingReviewInput = () => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const starsArray = generateStarsArray(rating);
  return (
    <form className="flex flex-col gap-8 m-4 items-center">
      <div className="flex gap-0.5">
        {starsArray.map((star, i) => (
          <label
            key={i}
            onMouseEnter={() => setHover(i + 1)}
            onMouseLeave={() => setHover(0)}
            className="h-auto  w-auto cursor-pointer duration-300 ease-in-out hover:scale-110 "
          >
            <Star starValue={hover >= i + 1 ? 1 : star} />
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={i + 1}
              onClick={() => setRating(i + 1)}
            />
          </label>
        ))}
        {/* <span className="ml-2 font-semibold">{rating ? rating : null}</span> */}
      </div>
      <label>
        <textarea
          placeholder="Enter your review"
          rows="4"
          cols="40"
          className="rounded-md border-2 p-2"
          value={reviewText}
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
        />
      </label>
      <button className="h-14 w-2/4 md:w-1/4 lg:w-[10rem] btn-primary">Submit</button>
    </form>
  );
};

export default RatingReviewInput;
