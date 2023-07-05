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
      <div className="mx-auto mt-16  flex flex-col justify-center gap-4 lg:max-w-5xl lg:flex-row">
        <RatingReviewInput
          productId={productId}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        <ReviewsDisplay reviewsList={reviewsList} />
      </div>
    </>
  );
};

export default Product;
