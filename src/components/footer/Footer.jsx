import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/assets/Social.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-style">
            <p className="footer-title">
              Finstreet 118 2561 Fintown <br /> Hello@finsweet.com 020 7993 2905
            </p>
            <Image src={logo} width={144} height={16} alt="footer-title" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
