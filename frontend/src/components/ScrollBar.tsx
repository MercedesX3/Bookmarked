import React from "react";

const ScrollBar = ({ data }) => {
  return (
    <div className="h-48 overflow-x-auto flex flex-row gap-4 mt-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="min-w-[150px] bg-gray-800 text-white rounded-md p-4"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollBar;
