import React, { useState, useMemo } from "react";
import ProductDetails from "./ProductDetails";
import RatingReviewInput from "./RatingReviewInput";
import ReviewsDisplay from "./ReviewsDisplay";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useProductData } from "../../hooks/useProductData";
import LoadingSpinner from "../../components/LoadingSpinner";
import NotFoundPage from "../NotFoundPage";

export default function ProductPage(){
  const { productId } = useParams();
  const { productData, reviewsList, updateReviewsList, errorMessage,isLoading } = useProductData(productId);
  const { isLoggedIn, authUser } = useAuth();
  const [numOfReviewsDisplayed, setNumOfReviewsDisplayed] = useState(3);

  const reviewsDisplayed = reviewsList ? reviewsList.slice(0, numOfReviewsDisplayed) : null;
  const canShowMore = reviewsList && reviewsList.length > numOfReviewsDisplayed;

  const handleShowMore = () => setNumOfReviewsDisplayed(prev => prev + 3);

  const rating = useMemo(
    () => reviewsList?.reduce((acc, curr) => acc + curr.rating, 0) / reviewsList?.length,
    [reviewsList]
  );

  if (errorMessage) {
    return <NotFoundPage errorMessage={errorMessage}/>;
  }
  if(isLoading){
    return <LoadingSpinner/>
  }

  return (
    <>
      <ProductDetails productData={productData} rating={rating} />
      <div className="mx-auto mt-16 flex flex-col justify-center gap-10 lg:max-w-5xl ">
        <ReviewsDisplay
          reviewsList={reviewsDisplayed}
          showMoreReviews={handleShowMore}
          canShowMore={canShowMore}
        />
        <RatingReviewInput
          productId={productId}
          user={authUser}
          isLoggedIn={isLoggedIn}
          updateReviewsList={updateReviewsList}
        />
      </div>
    </>
  );
};

