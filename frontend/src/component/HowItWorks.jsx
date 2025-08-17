// HowItWorks.jsx
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h1 className="main-heading">How <span>SHE</span>Works</h1>

      <section className="section">
        <h2 className="role-heading">👨‍👩‍👧 For Homeowners</h2>
        <ul className="step-list">
          <li><strong>Search:</strong> Use filters to find maids by location, service, and time.</li>
          <li><strong>Compare:</strong> View profiles, availability, and experience.</li>
          <li><strong>Book:</strong> One-click to connect & confirm your trusted maid.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="role-heading">👩 For Maid Workers</h2>
        <ul className="step-list">
          <li><strong>Sign Up:</strong> Fill details, upload ID & choose your service type.</li>
          <li><strong>Get Verified:</strong> We ensure your safety and trust.</li>
          <li><strong>Start Working:</strong> Accept jobs, get paid easily & build your profile!</li>
        </ul>
      </section>
    </div>
  );
};

export default HowItWorks;
