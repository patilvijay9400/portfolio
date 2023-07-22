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
    <div className="image-slider flex flex-col gap-3">
      <div className="slider-image-container">
        <img
          src={images[currentIndex].src}
          alt={`project ${currentIndex + 1}`}
          className="h-[80vh]"
        />
      </div>
      <div className="slider-navigation">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ImageSlider;
