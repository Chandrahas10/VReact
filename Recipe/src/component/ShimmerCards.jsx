import React from "react";

const ShimmerCards = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-10 w-300">
      {Array(24).fill(0) .map((_, index) => (
          <div
            key={index}
               className="bg-[#cecdcd] shadow rounded-lg overflow-hidden "
          >
            {/* Image Placeholder */}
            <div   className="w-full h-48 object-cover"></div>

            {/* Text Placeholder */}
            <div className="p-4 space-y-3">
              <div className="h-4 bg-[#ffffff] rounded w-3/4"></div>
              <div className="h-3 bg-[#ffffff] rounded w-1/2"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerCards;
