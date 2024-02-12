import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ img }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return inView ? (
    <div className="w-full h-full relative">
      {!loaded && (
        <span className="image-loader absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
      )}
      <img
        style={loaded ? { opacity: 1 } : { opacity: 0 }}
        onLoad={() => setLoaded(true)}
        ref={ref}
        src={img}
        className="w-full h-full object-cover transition duration-500 ease-in-out"
        alt=""
      />
    </div>
  ) : (
    <div
      ref={ref}
      className="h-[12rem] sm:h-[18rem] md:h-[20rem] bg-white"
    ></div>
  );
};

export default LazyImage;
