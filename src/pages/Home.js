import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import LogoAnimation from "../components/LogoAnimation";

const Home = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("seenAnimation");

    if (!hasSeenAnimation) {
      setShowAnimation(true);
    } else {
      setShowHeader(true); // Skip animation and show header immediately
    }
  }, []);

  const handleAnimationEnd = () => {
    sessionStorage.setItem("seenAnimation", "true"); // Mark animation as seen
    setShowHeader(true);
    setShowAnimation(false);
  };

  return (
    <>
      {showAnimation && <LogoAnimation onAnimationEnd={handleAnimationEnd} />}
      {showHeader && <Header />}
      <main>
        <h1>TANIO - SZYBKO - ANDZRZEJ</h1>
        <Slideshow />
        <h2>ZAPRASZAMY DO POBIERANIA NASZEGO NOWEGO KATALOGU!</h2>
      </main>
    </>
  );
};

export default Home;
