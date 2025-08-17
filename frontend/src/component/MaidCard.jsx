import React, { useState } from 'react';
import axios from 'axios';
import './MaidCard.css';

const MaidCard = ({ maid, refreshData }) => {
  const [status, setStatus] = useState(maid.status);

  const handleBooking = async () => {
    try {
      const response = await axios.patch(`http://localhost:2002/api/maids/${maid._id}`, {
        status: 'Booked'
      });

      if (response.status === 200) {
        alert('Maid booked successfully!');
        setStatus('Booked');
        if (refreshData) refreshData(); // Refresh list if parent uses this
      }
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to book maid. Try again.');
    }
  };

  return (
    <div className="maid-card">
      <img
        src={maid.photo ? `http://localhost:2002/uploads/${maid.photo}` : '/default-maid.jpg'}
        alt="maid-profile"
        className="maid-card-image"
      />
      <div className="maid-info">
        <h3>{maid.fullName}</h3>
        <p><strong>Service:</strong> {maid.serviceType.replace(/_/g, ' ')}</p>
        <p><strong>Location:</strong> {maid.location} | <strong>Status:</strong> {status}</p>
        <p><strong>Lang:</strong> {maid.languages} | <strong>Exp:</strong> {maid.experience} yrs</p>
        <p><strong>Budget:</strong> ₹{maid.budgetMin} – ₹{maid.budgetMax}</p>
        <p><strong>Available:</strong> {new Date(maid.availabilityDate).toLocaleDateString()}</p>
        <button
          className="book-button"
          onClick={handleBooking}
          disabled={status === 'Booked'}
          style={{ backgroundColor: status === 'Booked' ? 'SkyBlue' : 'crimson' }}
        >
          {status === 'Booked' ? 'Already Booked' : 'Book Maid'}
        </button>
      </div>
    </div>
  );
};

export default MaidCard;
