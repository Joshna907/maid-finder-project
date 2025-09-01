// src/components/Profile.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import '../component/Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState('/images/avatar.svg');
  const [userData, setUserData] = useState(null);
  const [maidData, setMaidData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
      fetchProfileData(parsedUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const fetchProfileData = async (user) => {
    try {
      let response;
      if (user.role === 'maid') {
        response = await fetch(`https://maidfinder-backend.onrender.com/maids/by-email/${user.email}`);
      } else {
        response = await fetch(`https://maidfinder-backend.onrender.com/api/users/profile/${user._id}`);
      }
      const data = await response.json();
      console.log("Fetched profile data:", data);

      if (user.role === 'maid') {
        setMaidData(data);
        if (data.photo) {
          setProfileImage(`https://maidfinder-backend.onrender.com/${data.photo}`);
        }
      } else {
        setUserData(data);
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div className="profile-wrapper">
      <aside className="sidebar">
        <div className="nav-icons">
          <IoHome onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </div>
      </aside>

      <div className="profile-main">
        <header className="profile-header">
          <IoIosNotifications />
        </header>

        <div className="profile-card">
          <div className="profile-left">
            <div className="avatar">
              <img src={profileImage} alt="Profile" />
              <span className="camera-icon" onClick={() => fileInputRef.current.click()}>
                📷
              </span>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleProfilePicUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>

          <div className="profile-right">
            <p><strong>Name:</strong> {userData.fullName}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Role:</strong> {userData.role}</p>

            {userData.role === 'maid' && maidData && (
              <>
                <p><strong>Phone:</strong> {maidData.phone}</p>
                <p><strong>Service Type:</strong> {maidData.serviceType}</p>
                <p><strong>Location:</strong> {maidData.location}</p>
                <p><strong>Experience:</strong> {maidData.experience}</p>
                <p><strong>Working Hours:</strong> {maidData.workingHours}</p>
                <p><strong>Languages:</strong> {maidData.languages}</p>
              </>
            )}

            <button className="edit-button" onClick={() => navigate('/edit-profile')}>
              ✏️ Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
