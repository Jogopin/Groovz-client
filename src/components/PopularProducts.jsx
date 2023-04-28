import React from 'react'
import ProductCard from './ProductCard'

const PopularProducts = ({productsList}) => {

  return (
    <div className="flex flex-col items-center">
        <h2 className="my-10 text-3xl font-bold text-red-700 ">Popular Now</h2>
        <div className="mb-10 flex w-3/4 md:w-full md:gap-8 flex-col gap-y-8 md:flex-row px-8 lg:gap-x-16 md:justify-center lg:w-3/4 xl:w-[1200px]">
          {productsList.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </div>
  )
}

export default PopularProducts