import React from "react";

const Shimmer = () => {
  return (
    <div className="dark:bg-primary-color-dark bg-[#f8f8f8] rounded-md overflow-hidden shadow-xl">
      <div className="h-[200px] bg-gray-400 dark:bg-gray-500"></div>
      <div className="px-5 py-4 flex flex-col gap-6">
        <div className="w-[80%] bg-gray-400 dark:bg-gray-500 px-2 py-2"></div>

        <div className="flex flex-col gap-3">
          <div className="w-[50%] bg-gray-400 dark:bg-gray-500 px-2 py-2"></div>
          <div className="w-[50%] bg-gray-400 dark:bg-gray-500 px-2 py-2"></div>
          <div className="w-[50%] bg-gray-400 dark:bg-gray-500 px-2 py-2"></div>
        </div>
        <div className="flex gap-4">
          <div className="w-[25%] bg-gray-400 rounded-md dark:bg-gray-500 px-2 py-4"></div>
          <div className="w-[25%] bg-gray-400 rounded-md dark:bg-gray-500 px-2 py-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
