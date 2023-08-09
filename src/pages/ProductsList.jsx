import React from "react";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductsList = ({ productsList,isLoading }) => {
  if (isLoading) return <LoadingSpinner/>;
  return (
    <div className="m-4 mt-8 flex flex-wrap justify-center gap-x-8 gap-y-8 lg:mx-auto xl:w-[1200px]">
      {productsList.map((product) => (
        <div key={product._id} className="w-8/12 md:w-3/12">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
