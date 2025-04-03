import React from "react";
import Header from "../components/Header";
import "../styles/Catalog.css";

const Catalog = () => {
  return (
    <>
      <Header />
      <main className="catalog-main">
        <h1>POBIERZ NASZ NOWY KATALOG NA ROK 2025 JUŻ TERAZ!</h1>
        <div className="catalog-container">
          <div className="catalog-image">
            <img src="images/gazetka.png" alt="catalog first page" />
          </div>
          <a href="catalog/catalog.pdf" download className="download-btn">
            KLIKNIJ TUTAJ I POBIERZ KATALOG
          </a>
        </div>
      </main>
    </>
  );
};

export default Catalog;
