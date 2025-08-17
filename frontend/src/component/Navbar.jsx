import React, { useState, useEffect, useRef } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { connectWallet } from "./WalletConnect"; // 👈 import from Wallet.jsx

const Navbar = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // 🟢 When "Connect Wallet" button is clicked
  const handleWalletClick = async () => {
    const result = await connectWallet();
    if (result) {
      setAccount(result.account);
    }
  };

  // 🔄 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <p>
            <span className="first-word">SHE</span>
            <span className="second-word">Works</span>
          </p>
        </div>

        <div className="right-section">
          <div className="btn-group">
            <button className="nav-btn" onClick={() => navigate('/login')}>Login</button>
            <button className="nav-btn" onClick={() => navigate('/signup')}>Signup</button>

            {/* 👇 Connect Wallet button */}
            <button className="wallet-btn" onClick={handleWalletClick}>
              {account ? `Connected: ${account.slice(0, 6)}...` : "Connect Wallet"}
            </button>
            
           {/* contract interaction button */}
           <button
              className="nav-btn"
              onClick={() => navigate('/agreement')}
            >
              Contract Interaction
            </button>

          </div>



          <div className="profile-section">
            <img
              src="/images/userprofile.png"
              alt="User"
              className="profile-image"
              onClick={() => navigate("/Profile")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
