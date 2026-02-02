import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className={`nav-bar ${open ? "open" : ""}`}>
        <Link to="/">
          <img
            src="images/rud_logo2.jpg"
            alt="RUDNAR Logo"
            className="logo-img"
          />
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger" />
        </button>

        <div className="nav-links" onClick={() => setOpen(false)}>
          <Link className="nav-tags" to="/">
            STRONA GŁÓWNA
          </Link>
          <Link className="nav-tags" to="/about">
            O NAS
          </Link>
          <Link className="nav-tags" to="/catalog">
            KATALOG
          </Link>
          <Link className="nav-tags" to="/contact">
            KONTAKT
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
