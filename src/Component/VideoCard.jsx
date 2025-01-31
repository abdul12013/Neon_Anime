import React from 'react';
import { saveAs } from 'file-saver';
const VideoCard = (props) => {
    console.log(props.trailer)
     if (!props.trailer ) {
      return (
        <div className="text-center mt-32 mb-20">
          <p className="text-2xl font-poppins font-bold text-red-600">No trailer availabel</p>
        </div>
      );
    }
  return (
    <>
    <div className="h-[100%] w-80 sm:h-[90%] sm:w-[30%]  p-2 rounded-xl">
  <iframe
    className="w-full mt-1 h-[300px] sm:h-64  sm:pl-6 sm:mt-2 rounded-xl"
    src={props.trailer} // The embed URL (e.g., YouTube embed link)
    allowFullScreen
    title="Video"
  />
 
</div>

  </>
  
  );
};

export default VideoCard;
