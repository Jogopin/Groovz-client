import React from 'react'
import Product from './Product'

const PopularProducts = ({productsList}) => {

  return (
    <div className="flex flex-col items-center">
        <h2 className="my-10 text-3xl font-bold text-red-600 ">Popular Now</h2>
        <div className="mb-10 flex w-3/4 md:w-full md:gap-8 flex-col gap-y-8 md:flex-row px-8 md:justify-center">
          {productsList.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      </div>
  )
}

export default PopularProducts