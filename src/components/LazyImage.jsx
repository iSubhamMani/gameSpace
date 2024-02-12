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
    <img
      style={loaded ? { opacity: 1 } : { opacity: 0 }}
      onLoad={() => setLoaded(true)}
      ref={ref}
      src={img}
      className="bg-bg-primary-clr-light dark:bg-bg-primary-clr-dark w-full h-full object-cover transition duration-500 ease-in-out"
      alt=""
    />
  ) : (
    <div
      ref={ref}
      className="h-[12rem] sm:h-[18rem] md:h-[20rem] bg-[#cbcbd4] dark:bg-[#3e3e45]"
    ></div>
  );
};

export default LazyImage;
