import React, { useEffect, useState } from "react";
import "../styles/LogoAnimation.css";

const LogoAnimation = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);
    const showHeaderTimer = setTimeout(() => {
      onAnimationEnd();
    }, 3000);
    const removeAnimationTimer = setTimeout(() => {
      setFadeOut(false);
    }, 4000);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(showHeaderTimer);
      clearTimeout(removeAnimationTimer);
    };
  }, [onAnimationEnd]);

  return (
    <div className={`logo ${fadeOut ? "fade-out" : ""}`}>
      <div className="spanner">
        <img src="images/logo.png" alt="spanner with a bolt" />
      </div>
      <div className="company-name">RUDNAR</div>
    </div>
  );
};

export default LogoAnimation;
