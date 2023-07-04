import axios from "axios";
import { useEffect, useState } from "react";
import RatingDisplay from "./RatingDisplay";

export default function ReviewsDisplay ({productId}){

    const [ reviewsList, setReviewsList ]=useState(null)

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/reviews/${productId}`)
        .then(response=>{
            setReviewsList(response.data)
            
        })
        .catch(error=>{
            console.log("Error: getting the list of reviews",error)
        })

    },[productId])
    console.log(reviewsList)
    
    if(!reviewsList){
        return "Loading"
    }

    return(
        
        <div>
            {reviewsList.map(review=>(
                <div key={review._id}>
                    <p>{review.reviewText}</p>
                    <RatingDisplay rating={review.rating}/>
                    <span>{review.user.username}</span>
                </div>
            ))}
        </div>
    )
}