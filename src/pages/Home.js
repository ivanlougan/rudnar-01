import React, { useEffect, useState } from "react";
import Header from "../components/Header";
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
      <main></main>
    </>
  );
};

export default Home;
