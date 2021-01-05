import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, query, onClick }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <li className="ImageGalleryItem" key={id}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              query={query}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
