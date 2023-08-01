import RatingDisplay from "../../components/RatingDisplay/RatingDisplay";

export default function ReviewsDisplay ({reviewsList, showMoreReviews, canShowMore}){

    
    
    
    if(!reviewsList){
        return <>Loading</>
    }else if (reviewsList.length===0){
        return <></>
    }

    return (
      <div className="flex flex-col items-center">
        <div className="mx-auto mt-16 flex flex-col flex-wrap justify-center  gap-5  sm:flex-row lg:max-w-5xl">
          {reviewsList.map((review) => (
            <div
              className="flex flex-col items-center gap-4   px-2 md:w-1/4"
              key={review._id}
            >
              <span className="text-lg font-semibold">
                {review.user.username}
              </span>
              <RatingDisplay rating={review.rating} />
              <p className="line-clamp-4 text-center text-zinc-500">
                {review.reviewText}
              </p>
            </div>
          ))}
        </div>
        {canShowMore && ( 
          <button className="border-2  m-2 p-2 rounded-md" onClick={showMoreReviews}>
            Show more reviews
          </button>
        )}
      </div>
    );
}