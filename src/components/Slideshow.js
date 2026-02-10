import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";

const images = [
  "/images/image1.webp",
  "/images/image2.webp",
  "/images/image3.webp",
  "/images/image4.webp",
  "/images/image5.webp",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

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
