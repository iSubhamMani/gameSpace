import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ img }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

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
    <img ref={ref} src={img} className="w-full h-full object-cover" alt="" />
  ) : (
    <img ref={ref} className="w-full h-full object-cover" alt="" />
  );
};

export default LazyImage;
