import React, { useState } from 'react';
import { Carousel } from "flowbite-react";
import { MdOutlineFileDownload } from "react-icons/md";
import { saveAs } from 'file-saver'
const CartIcon = ({ images }) => {
  // Use a state to manage the images per page
  const imagesPerPage = 10; // Number of images per carousel slide
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate the total pages
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  // Function to slice the images for the current page
  const getImagesForCurrentPage = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return images.slice(startIndex, endIndex);
  };

  // Handle Next and Previous page navigation
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };


  if (images.length === 0) {
    return (
      <div className="text-center mt-32 mb-20">
        <p className="text-xl font-semibold text-gray-500">No images of any character</p>
      </div>
    );
  }


  return (
    <div className="relative  mt-32 mb-20">
      <Carousel slide={false}>
        {getImagesForCurrentPage().map((e, index) => (
          <div key={index} className="relative w-72  rounded-2xl sm:w-96 h-96">
            {/* Image */}
            <img 
              src={e.character.images.webp.image_url} 
              alt={`Slide ${index + 1}`} 
              className="w-72 h-[100%] sm:w-96 sm:h-96 rounded-2xl object-cover" 
            />
            {/* Download button */}
            <button
              className="absolute inset-0 flex justify-center items-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-md"
              onClick={() =>  saveAs(e.character.images.webp.image_url,"wallify.jpg")}
            >
              <MdOutlineFileDownload size={40} />
            </button>
          </div>
        ))}
      </Carousel>

      {/* Pagination Controls */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-between items-center w-72 sm:96 px-4 py-2 bg-black bg-opacity-50 text-white">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-600 disabled:bg-gray-500"
        >
          Prev
        </button>
        <span className="text-lg">{currentPage} / {totalPages}</span>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-800 rounded-md hover:bg-gray-600 disabled:bg-gray-500"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CartIcon;
