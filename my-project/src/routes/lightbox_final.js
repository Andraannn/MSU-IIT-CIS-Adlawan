import React, { useState } from 'react';
import Lightbox from './lightbox';

const Lightbox_Final = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen">
        <button className='text-blue-500 hover:underline hover:text-blue-600' onClick={() => openLightbox('https://www.gadgetdetail.com/wp-content/uploads/2018/09/poco-f1-screenshots-8.jpeg')}>View</button>
      {/* Add more images with onClick handlers for each */}
      <Lightbox
        isOpen={isOpen}
        onClose={closeLightbox}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default Lightbox_Final;