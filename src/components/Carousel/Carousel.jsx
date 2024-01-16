import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: carouselData }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? carouselData.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === carouselData.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {carouselData}
      </div>
      <div className="p-4 absolute inset-0 flex items-center justify-between">
        <button
          onClick={prev}
          className="p-1 w-7 md:w-10 rounded-full shadow bg-white opacity-70 text-gray-800 hover:opacity-100"
        >
          <ChevronLeft className="w-full h-full" />
        </button>
        <button
          onClick={next}
          className="p-1 w-7 md:w-10 rounded-full shadow bg-white opacity-70 text-gray-800 hover:opacity-100"
        >
          <ChevronRight className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
