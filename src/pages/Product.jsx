import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import RatingReviewInput from "../components/RatingReviewInput";
import ReviewsDisplay from "../components/ReviewsDisplay";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviewsList, setReviewsList] = useState(null);
  const [numOfReviewsDisplayed, setNumOfReviewsDisplayed]= useState(3)

  const { isLoggedIn, user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      .then((response) => setProductData(response.data))
      .catch((error) => {
        console.log(`Error getting the product "${productId}", `, error);
      });

    axios
      .get(`${import.meta.env.VITE_API_URL}/reviews/${productId}`)
      .then((response) => {
        setReviewsList(response.data);
      })
      .catch((error) => {
        console.log("Error: getting the list of reviews", error);
      });
  }, [productId]);
  
  const reviewsDisplayed = reviewsList? reviewsList.slice(0, numOfReviewsDisplayed) : null
  const canShowMore = reviewsList && reviewsList.length > numOfReviewsDisplayed
  const handleShowMore = () => { 
    setNumOfReviewsDisplayed(prev => prev + 3);
  };

  const rating = useMemo(
    () =>
      reviewsList && reviewsList.length > 0
        ? reviewsList.reduce((acc, curr) => acc + curr.rating, 0) /
          reviewsList.length
        : null,
    [reviewsList]
  );

  

  return (
    <>
      <ProductDetails productData={productData} rating={rating} />

      <div className="mx-auto mt-16  flex flex-col justify-center gap-4 lg:max-w-5xl lg:flex-rowd">
        
        <ReviewsDisplay 
          reviewsList={reviewsDisplayed} 
          showMoreReviews={handleShowMore} 
          canShowMore={canShowMore}
        />
        <RatingReviewInput
          productId={productId}
          user={user}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </>
  );
};

export default Product;
