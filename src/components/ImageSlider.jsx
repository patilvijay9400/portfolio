import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, onClose, selectedImageIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

  useEffect(() => {
    setCurrentIndex(selectedImageIndex);
  }, [selectedImageIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-slider hidden md:flex flex-col gap-3 relative">
      <div className="slider-image-container">
        <img
          src={images[currentIndex].src}
          alt={`project ${currentIndex + 1}`}
          className="h-[80vh]"
        />
        <a href={images[currentIndex].url} target="_blank" rel="noreferrer" className="absolute right-4 bottom-4 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-900 text-lg">View Project</a>
      </div>
      <div className="slider-navigation absolute top-1/2 transfrom -translate-y-1/2 flex w-full justify-between px-5">
        <button
          className="text-white text-xl font-extrabold px-3 py-2 rounded-full hover:opacity-30 hover:bg-slate-300 hover:text-slate-50 "
          onClick={handlePrev}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button
          className="text-white text-xl font-extrabold px-3 py-2 rounded-full hover:opacity-30 hover:bg-slate-300 hover:text-slate-50 "
          onClick={handleNext}
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <button
        className="close-button absolute -top-[2rem] right-0 md:-top-12 md:-right-40 text-white"
        onClick={onClose}
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default ImageSlider;
