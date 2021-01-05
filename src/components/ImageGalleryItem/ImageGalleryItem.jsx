import React from "react";
import '../../index.css';

const ImageGalleryItem = ({webformatURL,largeImageURL}) => {
 return (
   <img
   className="ImageGalleryItem-image"
   src={webformatURL}
   alt={largeImageURL}/>
 )
}

export default ImageGalleryItem;
