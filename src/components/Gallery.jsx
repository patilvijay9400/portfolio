import React, { useState } from "react";
import ImageSlider from "./ImageSlider"; // Assuming ImageSlider component is in a separate file

const ImageGallery = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      src: "/img/project-5.jpeg",
      langs: ["MERN Stack"],
      url: "https://social-media-app-vijays-projects-65858986.vercel.app",
    },
    {
      src: "/img/project-1.svg",
      langs: ["HTML", "CSS", "Bootstrap"],
      url: "http://portfolios.ecti.co.in/VijayP/Project/iGuru/index.html",
    },
    {
      src: "/img/project-2.svg",
      langs: ["HTML", "CSS", "Bootstrap"],
      url: "http://portfolios.ecti.co.in/VijayP/Project/Mirora-Watch_&_Luxury_Store/index.html",
    },
    {
      src: "/img/project-3.svg",
      langs: ["Adobe XD"],
      url: "https://xd.adobe.com/view/f627a53e-d4f5-4045-bacd-e4237b15df7f-a374/",
    },
    {
      src: "/img/project-4.svg",
      langs: ["JavaScript", "HTML", "CSS"],
      url: "https://github.com/patilvijay9400/JS_to-do-list",
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
    <div className="image-gallery grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
      {images.map((image, index) => (
        <div key={index} className="relative group">
          <img
            src={process.env.PUBLIC_URL + image.src}
            alt={`project ${index + 1}`}
            onClick={() => openSlider(index)}
            className="rounded-lg cursor-pointer"
          />
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out">
            {image.langs.map((lang, langIndex) => (
              <div
                key={langIndex}
                className="bg-slate-300 rounded-xl px-2 py-1 text-xs md:text-sm"
              >
                {lang}
              </div>
            ))}
            <a href={image.url} target="_blank" rel="noreferrer" className="bg-blue-700 text-white py-1 px-2 rounded-md hover:bg-blue-900 text-xs md:text-sm">View Project</a>
          </div>
        </div>
      ))}
      {showSlider && (
        <div className="hidden md:flex modal-overlay fixed w-full h-full p-3 md:p-10 bg-slate-400 bg-opacity-50 top-0 left-0 bottom-0 items-center justify-center">
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
