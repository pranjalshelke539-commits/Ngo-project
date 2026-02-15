
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About us</h2>
        <p>
          Our bakery and handcrafted pastries are of the highest quality. 
          Come and enjoy our organic bakery items.
        </p>
      </div>

      <div className="about-image">
        <img src={breadImg} alt="Bread" />
      </div>

      <div className="bakery-section">
        <img src={bakeryImg} alt="Bakery" className="bakery-img" />
        <div className="bakery-text">
          <h3>Visit our premium bakery</h3>
          <p>
            Pastries are of the highest quality. Come and enjoy our organic bakery items.
            Our bakery and handcrafted pastries are of the highest quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;