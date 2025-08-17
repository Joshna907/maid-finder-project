import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css' 
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">How It Works</Link>
        <Link to="/contactus">Contact Us</Link>
      </div>

      <div className="footer-section popular-services">
        <h3>Popular Services</h3>
        <p>Child Care</p>
        <p>Housekeeping</p>
        <p>Baby Care</p>
        <p>Senior Care</p>
      </div>

      <div className="footer-section contact-info">
        <h3>Contact</h3>
        <p>Pune, Maharashtra</p>
        <p>Phone: +91 9876543210</p>
        <p>Email: maid29service@gmail.com</p>
      </div>

      <div className="footer-section social-media">
        <h3>Follow Us</h3>
        <div className="icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
