import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./ApplyNow.css";

const ApplyNow = () => {
  const navigate = useNavigate();

  return (
    <div className="trust-safety-section">
      <strong>Trust and safety are our top priorities at SHEWORKS!</strong>
      <p>
        Our team is carefully selected to ensure only the most reliable and skilled professionals are available for you.
        We are committed to creating a supportive and secure environment where you can thrive, feel confident, and
        achieve personal growth. Join us today and let us support you on this empowering journey!
      </p>
      <button onClick={() =>navigate('/info') }>Apply Now</button>
    </div>
  );
};

export default ApplyNow;