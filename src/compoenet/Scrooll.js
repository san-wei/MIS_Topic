import React from "react";
import Top from '../icon/Top'
import { useEffect, useState } from "react";
import '../css/home.css';

const Scroll = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <Top/>
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
};

export default Scroll;