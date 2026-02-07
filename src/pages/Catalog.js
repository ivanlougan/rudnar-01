import React from "react";
import Header from "../components/Header";
import "../styles/Catalog.css";

const Catalog = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'catalog/catalog.pdf';
    link.download = true;
    link.click();
  };

  return (
    <>
      <Header />
      <main className="catalog-main">
        <div className="catalog-header">
          <h1><button onClick={handleDownload} className="download-word">POBIERZ</button> NASZ NOWY KATALOG JUŻ TERAZ!</h1>
          <p className="catalog-subtitle">Kompletna oferta produktów w jednym miejscu — zawsze pod ręką</p>
        </div>
        <div className="catalog-container">
          <div className="catalog-image">
            <img src="images/gazetka.png" alt="catalog first page" />
          </div>
          <div className="catalog-features">
            <ul>
              <li>Pełna oferta produktów</li>
              <li>Zdjęcia i opisy</li>
              <li>Format PDF — gotowy do pobrania</li>
              <li>Aktualizacja 2026</li>
            </ul>
            <a href="catalog/catalog.pdf" download className="download-btn">
              KLIKNIJ TUTAJ I POBIERZ KATALOG
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Catalog;
