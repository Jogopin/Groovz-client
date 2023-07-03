import React, { useState } from "react";
import { lessThanIcon, moreThanIcon } from "../assets/icons";

const Carousel = ({ imagesList=[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imagesList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === imagesList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (imgIndex) => {
    setCurrentIndex(imgIndex);
  };

  return (
    <div className="group  m-auto  w-full lg:flex lg:max-h-fit lg:flex-col ">
      <div
        style={{ backgroundImage: `url(${imagesList[currentIndex]})` }}
        className="h-96 aspect-square relative w-full rounded-lg bg-zinc-300 bg-contain  bg-center bg-no-repeat duration-500 lg:aspect-square"
      >
        {/* left arrow */}
        <div
          onClick={prevSlide}
          className="absolute  left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-zinc-400 p-2 lg:hidden lg:group-hover:block"
        >
          <img className="h-8 w-8" src={lessThanIcon} />
        </div>
        {/* right arrow */}
        <div
          onClick={nextSlide}
          className="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 lg:hidden  lg:group-hover:block"
        >
          <img className="h-8 w-8" src={moreThanIcon} />
        </div>
      </div>
      {/* small imgs */}
      <div className="mx-4 hidden py-2 md:flex   md:justify-center">
        {imagesList.map((img, imgIndex) => (
          <div
            className={`${
              imgIndex === currentIndex ? `bg-red-700` : `bg-zinc-300`
            } m-2 cursor-pointer rounded-md `}
            key={imgIndex}
            onClick={() => {
              goToImage(imgIndex);
            }}
          >
            <img className="w-20" src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
