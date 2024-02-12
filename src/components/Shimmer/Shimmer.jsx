import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Shimmer = () => {
  const { theme } = useSelector((store) => store.app);

  const shimmerRef = useRef();

  useEffect(() => {
    if (theme === "dark") {
      shimmerRef.current.classList.remove("shimmer");
      shimmerRef.current.classList.add("shimmer-dark");
    } else {
      shimmerRef.current.classList.add("shimmer");
      shimmerRef.current.classList.remove("shimmer-dark");
    }
  }, [theme]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <div
        ref={shimmerRef}
        className="h-[12rem] sm:h-[18rem] md:h-[20rem]"
      ></div>
    </div>
  );
};

export default Shimmer;
