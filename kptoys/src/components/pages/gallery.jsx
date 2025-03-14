import React from "react";

const images = import.meta.glob("/src/assets/pictures/*", { eager: true });

const Gallery = () => {
  const imageList = Object.values(images);

  return (
    <div className="container mx-auto px-4 py-8 mt-8">
      <h2 className="text-xl font-semibold text-center mb-2 pt-18 mb-8">Gallery of Kondapalli Toys & Related Images</h2>
      <div className="max-w-6xl mx-auto mb-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8">
        {imageList.map((img, index) => (
          <img
            key={index}
            src={img.default}
            alt={`Gallery ${index + 1}`}
            className="w-full mb-8 rounded-lg border border-gray-400/50"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
