import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";

const images = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt="Slideshow"
        className="slideshow-img"
      />
    </div>
  );
};

export default Slideshow;
