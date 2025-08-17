import React from "react";
import AgreementActions from '../component/AgreementActions ';
import "./AgreementPage.css";
import { FaRegEdit ,FaPhoneAlt, FaEnvelope, FaUserShield } from "react-icons/fa";

const AgreementPage = () => {
  return (
    <div className="agreement-page">
     <h1>
        <FaRegEdit style={{ color: 'crimson', marginRight: '10px' }} />
        Maid Job Smart Contract
    </h1>
      <p className="subheading">
        Empowering trust & security with blockchain technology
      </p>

      <AgreementActions />

      <div className="contact-icons">
        <h3>Need Help?</h3>
        <div className="icon-row">
          <FaPhoneAlt className="contact-icon" title="Call Us" />
          <FaEnvelope className="contact-icon" title="Email Us" />
          <FaUserShield className="contact-icon" title="Support" />
        </div>
      </div>
    </div>
  );
};

export default AgreementPage;
