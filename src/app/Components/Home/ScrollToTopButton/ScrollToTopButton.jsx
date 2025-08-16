"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    // If isVisible is false, trigger the slide-out animation
    if (!isVisible) {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Duration matches animation time
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isAnimating && (
        <button
          onClick={scrollToTop}
          className={`bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 focus:outline-none 
          ${isVisible ? "slide-in-up" : "slide-out-down"}`}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
