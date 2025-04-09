"use client";
import { useEffect, useState } from "react";
import ArrowUp from "./icons/ArrowUp";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(true);
  const handleScroll = () => {
    // Show button when scrolled 100px down
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showButton && (
        <div
          id="icon-box"  
          className={` z-50 bg-blue-500 text-white p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed bottom-2 right-6 lg:flex justify-center items-center transition-all duration-500 transform ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          onClick={handleScrollToTop}
        >
          <ArrowUp />
        </div>
      )}
    </>
  );
};

export default BackToTop;
