import { GitHub } from "@material-ui/icons";
import React from "react";
import "../../styles/UI/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>built with ❤️ by</p>
      <GitHub className="footer__icon" />
      <a className="footer__gh--link" href="https://github.com/m1ch3l99">
        m1ch3l99
      </a>
    </footer>
  );
};

export default Footer;
