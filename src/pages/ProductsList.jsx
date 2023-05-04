import React from 'react'
import ProductCard from '../components/ProductCard'


const ProductsList = ({productsList}) => {
    
  if (!productsList) return null
  return (<div className='m-4 flex gap-y-8 gap-x-8 justify-center flex-wrap mt-8 xl:w-[1200px] lg:mx-auto'>
  

    {productsList.map(product=>(
        <div key={product._id} className='w-8/12 md:w-3/12'>
            <ProductCard product={product}/>

        </div>

    ))}
  </div>
  )
}

export default ProductsList