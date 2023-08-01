import React, { useState } from "react";
import generateStarsArray from "../../utils/generateStarsArray";
import Star from "../../components/RatingDisplay/Star";
import { postReview } from "../../services/api";


const RatingReviewInput = ({productId,user,isLoggedIn,updateReviews}) => {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
 

  const starsArray = generateStarsArray(rating);

  const handleSubmit = async (e)=>{
    e.preventDefault()
    if(!isLoggedIn){
      console.log("Error, only users can post reviews")
      return
    }
    if( rating===0 ) {
      console.log("Error, please select a rating 1-5")
      return
    }
    
    const reviewData = {
      user:user._id,
      product:productId,
      rating,
      reviewText
    }
    try{
      await postReview(reviewData)
      updateReviews()
    }catch(error){
      console.log("error in postReview",error)
    }
    
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 m-auto items-center border-2 rounded-md w-96 p-4">

      {/* reviewText input */}
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

    {/* rating input */}
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

      <button className="h-14 w-2/4 md:w-1/4 lg:w-[10rem] btn-primary">Submit</button>
    </form>
  );
};

export default RatingReviewInput;
