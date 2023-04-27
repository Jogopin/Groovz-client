import React from 'react'
import Carousel from './Carousel'
import defImg from "../assets/imgs/defImg.webp"
import defImgRed from "../assets/imgs/defImgRed.png"
import { addCartIcon } from '../assets/icons'
import RatingDisplay from './RatingDisplay'

const imagesList = [defImg,defImgRed]

const ProductDetails = () => {

  return (
    <div className="flex flex-col lg:flex-row lg:max-w-5xl mx-auto  mt-16">
      {/* Left */}
      <Carousel imagesList={imagesList} />
      {/* Right */}
      <div className="p-4 text-zinc-800 flex flex-col gap-2">
        <h2 className="py-2 text-3xl font-semibold">Product name</h2>
        {/* rating */}
        <RatingDisplay starAverage={3.7}/>

        <h4 className="text-xl font-semibold">Details</h4>
        <p>
          product description Lorem ipsum product description Lorem ipsum
          product description Lorem ipsum product description Lorem ipsumproduct
          description Lorem ipsum product description Lorem ipsum
        </p>
        <h2 className="text-3xl my-2 md:my-8 font-bold text-right text-red-700">€99.00</h2>
        <div className="flex flex-col md:flex-row gap-4 w-3/4 my-2 items-center self-center lg:mt-8">
          <div className="flex h-14 w-3/4 items-center justify-around rounded-md bg-zinc-300 text-center">
            <button className="w-14 h-full text-lg font-bold text-red-700 hover:bg-zinc-400 hover:rounded-l-md">-</button>
            <span className="text-md w-14 font-bold">0</span>
            <button className="w-14 h-full text-lg font-bold text-red-700 hover:bg-zinc-400 hover:rounded-r-md">+</button>
          </div>
          <button className="flex h-14 w-3/4 items-center justify-evenly rounded-md bg-red-700 font-semibold text-white">
            <img src={addCartIcon} className="w-8 invert" />
            Add to the cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails