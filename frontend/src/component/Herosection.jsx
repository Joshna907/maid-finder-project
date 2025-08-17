import React from 'react';
import { Link } from 'react-router-dom';

import './Herosection.css';

const HeroSection = () => {
  return (
    <div className="hero-split">
      <div className="text-side">
        <div className="hero-text-content">
  <h1>Book Verified & Trusted Maids in Your City</h1>
  <p>
    Need a helping hand at home? Find experienced and background-verified maids for 
    <strong> cleaning, cooking, childcare, elderly care</strong> and more — all at your convenience.
  </p>
  <p>
    Browse profiles, compare skills, view availability, and book instantly. Trusted by families across cities.
  </p>
<Link to="/searchmaid">
  <button>Find Your Maid Now</button>
</Link>
</div>

      </div>
      <div className="image-side">
        <img src="/images/background.png" alt="maid" />
      </div>
    </div>
  );
};

export default HeroSection;
