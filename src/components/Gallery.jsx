import React, { useState } from "react";
import ImageSlider from "./ImageSlider"; // Assuming ImageSlider component is in a separate file

const ImageGallery = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      src: "https://drake-react.vercel.app/assets/images/portfolio1.jpg",
      langs: ["figma", "html"],
    },
    {
      src: "https://drake-react.vercel.app/assets/images/portfolio2.jpg",
      langs: ["HTML", "javascript"],
    },
    {
      src: "https://drake-react.vercel.app/assets/images/portfolio3.jpg",
      langs: ["React"],
    },
  ];

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setShowSlider(true);
  };

  const closeSlider = () => {
    setShowSlider(false);
  };

  return (
    <div className="image-gallery grid grid-cols-2 gap-5">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={image.src}
            alt={`project ${index + 1}`}
            onClick={() => openSlider(index)}
            className="rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
            {image.langs.map((lang, langIndex) => (
              <div
                key={langIndex}
                className="bg-slate-300 rounded-xl px-2 py-1"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>
      ))}
      {showSlider && (
        <div className="modal-overlay fixed w-full h-full p-3 md:p-10 bg-slate-400 bg-opacity-50 top-0 left-0 bottom-0 flex items-center justify-center">
          <ImageSlider
            images={images}
            onClose={closeSlider}
            selectedImageIndex={selectedImageIndex} // Pass the selectedImageIndex
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
