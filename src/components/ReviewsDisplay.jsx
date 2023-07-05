import axios from "axios";
import { useEffect, useState } from "react";
import RatingDisplay from "./RatingDisplay";

export default function ReviewsDisplay ({reviewsList}){

    
    
    
    if(!reviewsList){
        return "Loading"
    }

    return(
        
        <div className="mx-auto flex flex-col sm:flex-row justify-center flex-wrap  lg:max-w-5xl mt-16 gap-5">
            {reviewsList.map(review=>(
                <div className="md:w-1/4 px-2 flex flex-col   items-center gap-4" key={review._id}>
                    <span className="font-semibold text-lg">{review.user.username}</span>
                    <RatingDisplay rating={review.rating}/>
                    <p className="line-clamp-4 text-zinc-500 text-center">{review.reviewText}</p>
                </div>
            ))}
        </div>
    )
}