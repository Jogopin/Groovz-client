import { useState } from "react";
import RatingDisplay from "../../components/RatingDisplay/RatingDisplay";

const ReviewDetails = ({ review, closeReview }) =>
  review && (
    <>
      <div
        className="fixed inset-0 z-20 bg-zinc-800/50"
        onClick={closeReview}
      ></div>
      <div
        className="absolute z-30 flex flex-col items-center gap-4 border-2 bg-white p-10 px-2 md:w-3/4"
        key={review._id}
      >
        <span className="text-lg font-semibold">{review.user.username}</span>
        <RatingDisplay rating={review.rating} />
        <p className="w-3/5 text-center text-zinc-500">{review.reviewText}</p>
      </div>
    </>
  );

const ReviewItem = ({ review, onClick }) => (
  <div
    onClick={onClick}
    className="flex flex-col items-center gap-4 px-2 md:w-1/4"
  >
    <span className="text-lg font-semibold">{review.user.username}</span>
    <RatingDisplay rating={review.rating} />
    <p className="line-clamp-4 text-center text-zinc-500">
      {review.reviewText}
    </p>
  </div>
);

export default function ReviewsDisplay({
  reviewsList,
  showMoreReviews,
  canShowMore,
}) {
  const [reviewDisplayed, setReviewDisplayed] = useState(null);

  const closeReview = () => setReviewDisplayed(null);

  if (!reviewsList) {
    return <>Loading</>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mx-auto mt-16 flex flex-col flex-wrap justify-center gap-5 sm:flex-row lg:max-w-5xl">
        {reviewsList.length > 0 ? (
          reviewsList.map((review) => (
            <ReviewItem
              key={review._id}
              review={review}
              onClick={() => setReviewDisplayed(review)}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      {canShowMore && (
        <button
          className="m-2 rounded-md border-2 p-2"
          onClick={showMoreReviews}
        >
          Show more reviews
        </button>
      )}
      <ReviewDetails review={reviewDisplayed} closeReview={closeReview} />
    </div>
  );
}
