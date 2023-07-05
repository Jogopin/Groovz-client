import React from 'react'
import Carousel from './Carousel'
import { addCartIcon } from '../assets/icons'
import RatingDisplay from './RatingDisplay'




const ProductDetails = ({productData,rating}) => {


  if(productData===null){
    console.log("loading productData")
    return "loading"
  }
  return (
    <div className="flex flex-col lg:flex-row lg:max-w-5xl mx-auto  mt-16">
      {/* Left */}
      <Carousel imagesList={productData.images} />
      {/* Right */}
      <div className="p-4 text-zinc-800 flex flex-col gap-2">
        <h2 className="py-2 text-3xl font-semibold">{productData.name}</h2>
        {/* rating */}
        <RatingDisplay rating={rating}/>

        <h4 className="text-xl font-semibold">Details</h4>
        <p>{productData.description}</p>
        <h2 className="text-3xl my-2 md:my-8 font-bold text-right text-red-700">{productData.price}€</h2>
        <div className="flex flex-col md:flex-row gap-4 w-3/4 my-2 items-center self-center lg:mt-8">
          <div className="flex h-14 w-3/4 items-center justify-around rounded-md bg-zinc-300 text-center">
            <button className="w-14 h-full text-lg font-bold text-red-700 hover:bg-zinc-400 hover:rounded-l-md">-</button>
            <span className="text-md w-14 font-bold">0</span>
            <button className="w-14 h-full text-lg font-bold text-red-700 hover:bg-zinc-400 hover:rounded-r-md">+</button>
          </div>
          <button className="flex h-14 w-3/4 items-center justify-evenly btn-primary">
            <img src={addCartIcon} className="w-8 invert" />
            Add to the cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails