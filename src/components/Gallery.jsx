import React from "react";

const Gallery = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div className="relative group">
            <img
              key={index}
              src={image.source}
              alt={`Image ${index}`}
              onClick={() => openModal(index)}
              className="cursor-pointer w-full rounded-3xl border border-slate-400"
            />
            <div className="flex gap-3 absolute bottom-5 left-5">
              <a
                href="#"
                className="rounded-xl px-2 py-1 bg-white group-hover:bg-slate-950 group-hover:text-white"
              >
                Figma
              </a>
              <a
                href="#"
                className="rounded-xl px-2 py-1 bg-white group-hover:bg-slate-950 group-hover:text-white"
              >
                Figma
              </a>
              <a
                href="#"
                className="rounded-xl px-2 py-1 bg-white group-hover:bg-slate-950 group-hover:text-white"
              >
                Figma
              </a>
            </div>
          </div>
        ))}
      </div>

      <ModalGateway>
        {modalIsOpen && (
          <Modal onClose={closeModal}>
            <Carousel views={images} currentIndex={selectedImageIndex} />
          </Modal>
        )}
      </ModalGateway> */}
    </div>
  );
};

export default Gallery;
