import React, { useState } from "react";
import { lessThanIcon, moreThanIcon } from "../assets/icons";

const Carousel = ({ imagesList }) => {
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

  const goToImage = (imgIndex)=>{
    setCurrentIndex(imgIndex)
  }

  return (
    <div className="group relative h-96 w-full  m-auto aspect-square">
      <div
        style={{ backgroundImage: `url(${imagesList[currentIndex]})` }}
        className="h-full w-full rounded-lg bg-zinc-300  bg-contain bg-center bg-no-repeat duration-500"
      ></div>
      {/* left arrow */}
      <div
        onClick={prevSlide}
        className="absolute left-5 top-[50%] lg:hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-zinc-400 p-2 text-2xl lg:group-hover:block"
      >
        <img className="h-8 w-8" src={lessThanIcon} />
      </div>
      {/* right arrow */}
      <div
        onClick={nextSlide}
        className="absolute right-5 top-[50%] lg:hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl lg:group-hover:block"
      >
        <img className="h-8 w-8" src={moreThanIcon} />
      </div>
      {/* small imgs */}
      <div className="top-4 hidden md:flex justify-center  py-2">
        {imagesList.map((img, imgIndex) => (
          <div  className={`${imgIndex===currentIndex ? `bg-red-700`: `bg-zinc-300`} m-2 cursor-pointer rounded-md `} key={imgIndex} onClick={()=>{goToImage(imgIndex)}}>
            <img className="w-20" src={img} />
          </div>
        ))}
      </div>
      Carousel
    </div>
  );
};

export default Carousel;
