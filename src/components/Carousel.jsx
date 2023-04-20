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
    <div className="group relative m-auto  h-[780px] max-w-[1400px] border-2 px-4 py-4">
      <div
        style={{ backgroundImage: `url(${imagesList[currentIndex]})` }}
        className="h-full w-full rounded-lg border-2 bg-contain bg-center bg-no-repeat duration-500"
      ></div>
      {/* left arrow */}
      <div
        onClick={prevSlide}
        className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <img className="h-8 w-8" src={lessThanIcon} />
      </div>
      {/* right arrow */}
      <div
        onClick={nextSlide}
        className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block"
      >
        <img className="h-8 w-8" src={moreThanIcon} />
      </div>
      <div className="top-4 flex justify-center border-2 py-2">
        {imagesList.map((img, imgIndex) => (
          <div className="border-2 cursor-pointer" key={imgIndex} onClick={()=>{goToImage(imgIndex)}}>
            <img className="w-20" src={img} />
          </div>
        ))}
      </div>
      Carousel
    </div>
  );
};

export default Carousel;
