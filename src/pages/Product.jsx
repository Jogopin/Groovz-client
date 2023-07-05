import React, { useContext, useEffect, useMemo, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import RatingReviewInput from '../components/RatingReviewInput'
import ReviewsDisplay from '../components/ReviewsDisplay'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth.context'

const Product = () => {
  const {productId} = useParams()
  const [productData, setProductData] = useState(null)
  const [ reviewsList, setReviewsList ]=useState(null)

  const {isLoggedIn,user}=useContext(AuthContext)

  useEffect(()=>{

    axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      .then(response=>setProductData(response.data))
      .catch((error)=>{
        console.log(`Error getting the product "${productId}", `,error)
      })

    axios.get(`${import.meta.env.VITE_API_URL}/reviews/${productId}`)
      .then(response=>{
          setReviewsList(response.data)
          
      })
      .catch(error=>{
          console.log("Error: getting the list of reviews",error)
      })
  },[productId])


  const rating = useMemo(() => reviewsList ? (reviewsList.reduce((acc,curr)=>(acc+curr.rating),0) / reviewsList.length) : null,[reviewsList])
 
  return (
    <>
      <ProductDetails productData={productData} rating={rating}/>
      <div className='mx-auto flex  flex-col lg:flex-row justify-center lg:max-w-5xl mt-16 gap-4' >
        <RatingReviewInput
          productId={productId}
          user={user}
          isLoggedIn={isLoggedIn}
        />
        <ReviewsDisplay reviewsList={reviewsList} />
      </div>
    </>
  );
}

export default Product