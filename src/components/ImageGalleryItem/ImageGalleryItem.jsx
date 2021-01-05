import React from "react";

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick, query }) => {
  return (
    <img
      className="ImageGalleryItem-image"
      src={webformatURL}
      alt={query}
      onClick={onClick}
      data-src={largeImageURL}
    />
  );
};

export default ImageGalleryItem;
