// src/components/About.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import "./About.css";


const About = () => {
    const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About <span className="highlight">SHE</span>Works</h1>
        <p>Empowering Women, Supporting Homes</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          SHEWorks is dedicated to creating work opportunities for women while helping homes
          find trustworthy, skilled, and verified female professionals for daily tasks.
        </p>
      </div>

      <div className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li> House Cleaning</li>
          <li> Cooking Help</li>
          <li>Babysitting</li>
          <li> Elderly Care</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Why Choose SHEWorks?</h2>
        <p>
          ✔️ Verified and trusted workers<br />
          ✔️ Easy search based on your location<br />
          ✔️ Women-centric platform<br />
          ✔️ Secure, respectful, and supportive for both users and workers
        </p>
      </div>

      <div className="about-cta">
        <h3>Ready to make a difference?</h3>
         <button className="cta-button" onClick={() => navigate("/signup")}>
         Join Now
       </button>
      </div>
    </div>
  );
};

export default About;
