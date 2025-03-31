import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="nav-bar">
        <Link to="/">
          <img
            src="images/rud_logo2.jpg"
            alt="RUDNAR Logo"
            className="logo-img"
          />
        </Link>
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
      </nav>
    </header>
  );
};

export default Header;
