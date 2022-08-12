import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container d-md-flex py-4">
        <strong>&copy;Betterdegree.Designed by Tsvetelina Gabrovska</strong>
      </div>
      <div className="credits"></div>
    </div>
  );
}

export default Footer;
