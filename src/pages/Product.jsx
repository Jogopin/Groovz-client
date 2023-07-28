import React, { useEffect, useMemo, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import RatingReviewInput from "../components/RatingReviewInput";
import ReviewsDisplay from "../components/ReviewsDisplay";
import { useParams } from "react-router-dom";

import { getProductData, getReviewsFromProduct } from "../services/api";
import { useAuth } from "../hooks/useAuth";

const Product = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [reviewsList, setReviewsList] = useState(null);
  const [numOfReviewsDisplayed, setNumOfReviewsDisplayed]= useState(3)

  const { isLoggedIn, authUser } = useAuth()
  
  const updateReviewsList = async () =>{
    try{
      const reviewsArray = await getReviewsFromProduct(productId)
        setReviewsList(reviewsArray)
    }catch(error){
      console.error("Error updating the reviews")
    }
  }
  
  useEffect(() => {
    (async ()=>{
      try{
        const productObj = await getProductData(productId)
        setProductData(productObj)

        await updateReviewsList()    

      }catch(error){
        
        console.log(`Error getting the product "${productId}", `, error);
      }
    })()
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
          user={authUser}
          isLoggedIn={isLoggedIn}
          updateReviewsList={updateReviewsList}
        />
      </div>
    </>
  );
};

export default Product;
