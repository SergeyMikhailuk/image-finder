import React from "react";
import "../index.css";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({images}) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({id,webformatURL,largeImageURL}) => (
          <li className='ImageGalleryItem' key={id}>
            <ImageGalleryItem webformatURL={webformatURL} largeImageURL={largeImageURL}/>
          </li>
        ))

        }
      </ul>
    </div>
  );
};

export default ImageGallery;
