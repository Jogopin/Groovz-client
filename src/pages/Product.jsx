import React, { useContext, useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import RatingReviewInput from '../components/RatingReviewInput'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth.context'
import ReviewsDisplay from '../components/ReviewsDisplay'

const Product = () => {
  const {productId} = useParams()
  const [productData, setProductData] = useState(null)
  const {isLoggedIn,user}=useContext(AuthContext)

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      .then(response=>setProductData(response.data))
      .catch((error)=>{
        console.log(`Error getting the product "${productId}", `,error)
      })
  },[productId])

  return (
    <>
      <ProductDetails productData={productData} />
      <div className='mx-auto flex  flex-col lg:flex-row justify-center lg:max-w-5xl mt-16 gap-4' >
        <RatingReviewInput
          productId={productId}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        <ReviewsDisplay productId={productId} />
      </div>
    </>
  );
}

export default Product