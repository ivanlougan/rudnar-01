import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} RUDNAR | Created by Robert Zdeb</p>
    </footer>
  );
};

export default Footer;
