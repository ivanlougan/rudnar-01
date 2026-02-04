import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import LogoAnimation from "../components/LogoAnimation";
import "../styles/Home.css";

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
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-titles">
              <h1>NARZĘDZIA</h1>
              <h2>RUDNAR</h2>
              <ul className="categories">
                <li>ELEKTRONARZĘDZIA</li>
                <li>TECHNIKA DIAMENTOWA</li>
                <li>NARZĘDZIA AKUMULATOROWE</li>
                <li>NARZĘDZIA RĘCZNE</li>
                <li>ARTYKUŁY BHP</li>
              </ul>
            </div>
            <div className="hero-description">
              <p><strong>
                RUDNAR oferuje narzędzia ręczne, elektronarzędzia oraz artykuły BHP dla klientów hurtowych i detalicznych w branży narzędziowej oraz budowlanej.
              </strong></p>
              <p><strong>Jesteśmy dystrybutorem takich marek jak:</strong></p>
              <ul className="brands">
                <li>Milwaukee</li>
                <li>Waryński</li>
                <li>Kris</li>
                <li>AKU Tools</li>
                <li>Baumajster</li>
                <li>Teger</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <p>Systematycznie wprowadzamy produkty marki własnej - narzędzia Rudnar</p>
        </section>

        <section className="slideshow-section">
          <Slideshow />
        </section>

        <section className="battery-tools-section">
          <div className="battery-tools-content">
            <div className="battery-tools-text">
              <h2>Zestawy narzędzi akumulatorowych</h2>
              <p>
                Poszukujesz niezawodnych zestawów narzędzi i elektronarzędzi? Zapraszamy do skorzystania z oferty firmy Rudnar! Odkryj nasze unikatowe i praktyczne zestawy narzędzi akumulatorowych, dostępne w naszym aktualnym katalogu. Zaprezentujemy Ci szeroką gamę sprzętu wiodących marek, takich jak Milwaukee PowerPack, standardowe zestawy Milwaukee i wiele innych. Aby ułatwić Ci wybór, przygotowaliśmy promocyjny zestaw HIT, zawierający wiertarko-wkrętarkę udarową m18 cblpd, komplet wierteł do betonu, zestaw bitów 32 el., drewnianą miarę składaną 2m, okulary ochronne i dwie latarki akumulatorowe. Ofertę dopełniają wysokiej jakości elektronarzędzia takie jak szlifierki kątowe, młotowiertarki sds plus, wiertarki czy młoty sds max. Wszystko to dostępne w jednym miejscu - w katalogu Rudnar! Zobacz już teraz i znajdź idealny zestaw elektronarzędzi dla siebie!
              </p>
            </div>
            <div className="battery-tools-image">
              <img src="/images/electr.png" alt="Elektronarzędzia Rudnar" />
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <h2>ZAPRASZAMY DO POBIERANIA NASZEGO NOWEGO KATALOGU!</h2>
        </section>
      </main>
    </>
  );
};

export default Home;
