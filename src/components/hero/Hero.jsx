import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <h3 className="hero-title">Posted on startup</h3>
            <h1 className="hero-text">
              Step-by-step guide to choosing great font pairs
            </h1>
            <p className="hero-date">
              By <span className="hero-date-span">James West</span> | May 23,
              2022{" "}
            </p>
            <p className="hero-par">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <button className="hero-btn">Read More &gt;</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
