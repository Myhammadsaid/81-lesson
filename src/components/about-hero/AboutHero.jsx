import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-style">
            <div className="about-hero-content">
              <h3 className="about-hero-title">Our mision</h3>
              <h2 className="about-hero-text">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="about-hero-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="about-hero-content">
              <h3 className="about-hero-title">Our Vision</h3>
              <h2 className="about-hero-text">
                A platform that empowers individuals to improve
              </h2>
              <p className="about-hero-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
