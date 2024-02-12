import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const UndefinedPage = () => {
  return (
    <div className="app flex flex-col ">
      <Navbar />
      <div
        className="px-4 sm:px-8 py-4 bg-bg-secondary-clr-light
    dark:bg-bg-secondary-clr-dark bg-bg-clr-light flex-1 flex justify-center items-center"
      >
        <p className="text-center text-sm sm:text-[1rem] text-black dark:text-text-clr-primary">
          Oops! The page you're trying to access is not available 🫥
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default UndefinedPage;
