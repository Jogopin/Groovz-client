import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonText from "../../components/ButtonText";

const HeroBanner = ({ heroProduct }) => {
  const navigate = useNavigate();
  if (!heroProduct) {
    return <p>"Loading"</p>;
  }
  return (
    <section className="flex w-full flex-col  space-y-5 rounded-lg  bg-zinc-300 md:flex-row-reverse md:items-center md:justify-center">
      {/* IMAGE */}
      <div className="flex flex-col items-center ">
        <img src={heroProduct.images[0]} alt="headphones" className="mr-0" />
        <p className="-mt-5 mb-8 hidden  font-bold text-blueGray sm:block">
          the best headphones in the market
        </p>
      </div>

      {/* TEXT */}
      <div className="pb-10 pl-10 ">
        <span className="text-xl font-bold uppercase tracking-tight text-red-700">
          lorem ipsum
        </span>
        <h1 className="-ml-1 mb-2 break-words text-7xl font-bold tracking-tight">
          {heroProduct.name}
        </h1>
        <h2 className="text-2xl font-bold tracking-wide">Luctus sit amet</h2>
       
          <ButtonText
            text={"Shop"}
            handleClick={() => {
              navigate(`/store/${heroProduct._id}`);
            }}
          />
        
      </div>
    </section>
  );
};

export default HeroBanner;
