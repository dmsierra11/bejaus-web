import React from "react";

interface Image {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
