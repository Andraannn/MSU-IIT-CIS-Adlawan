import React from 'react';

const Lightbox = ({ isOpen, onClose, imageUrl }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="fixed z-10">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex justify-center items-center h-screen">
            <img
              src={imageUrl}
              alt="Lightbox"
              className="max-h-full max-w-full"
            />
          </div>
        </div>
      </div>
      <button
            className="absolute top-0 right-0 m-4 text-white hover:text-gray-300"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
    </div>
  );
};

export default Lightbox;