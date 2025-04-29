import React from "react";
import Image from "next/image";

interface GalleryProps {
  photos: string[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  return (
    <div className="mx-3 lg:mx-6 py-8">
      <h2 className="text-3xl font-bold text-center my-6 lg:my-16">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
        {photos.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/2] lg:aspect-[4/2] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
