import React, { useState } from 'react';
import { connectWallet } from './WalletConnect';
import { FaCheckCircle, FaTimesCircle, FaFileContract } from "react-icons/fa";
import "./AgreementActions.css";

const AgreementActions = () => {
  const [details, setDetails] = useState(null);
  const [status, setStatus] = useState('');

 const handleConfirmJob = async () => {
  const { contract, account } = await connectWallet();
  try {
    await contract.methods.confirmJobCompletion().send({ from: account });
    alert("✅ Job confirmed! Payment sent to maid.");
  } catch (err) {
    console.error("❌ Error confirming job:", err);
    alert("⚠️ You must be the householder, and the job must not be already paid, cancelled, or past the deadline.");
  }
};


 const handleCancelJob = async () => {
  const { contract, account } = await connectWallet();
  try {
    await contract.methods.cancelJob().send({ from: account });
    alert("❌ Job cancelled! Refund returned to householder.");
  } catch (err) {
    console.error("❌ Error cancelling job:", err);
    alert("⚠️ You must be the maid, and the job must not be already confirmed, cancelled, or past the deadline.");
  }
};

  const handleViewDetails = async () => {
    const { contract } = await connectWallet();
    try {
      const raw = await contract.methods.getAgreementDetails().call();
      const agreement = {
        householder: raw[0],
        maid: raw[1],
        jobDescription: raw[2],
        amount: (Number(raw[3]) / 1e18).toFixed(4) + " ETH",
        deadline: new Date(Number(raw[4]) * 1000).toLocaleString(),
        isJobConfirmed: raw[5],
        isPaid: raw[6],
        isCancelled: raw[7],
      };
      setDetails(agreement);
    } catch (err) {
      console.error("Error fetching agreement:", err);
      setStatus("❌ Error fetching agreement.");
    }
  };

  return (
    <div className="smart-actions-container">
      <h2><FaFileContract /> Smart Maid Agreement</h2>
      <div className="button-group">
        <button onClick={handleConfirmJob}><FaCheckCircle /> Confirm Job</button>
        <button onClick={handleCancelJob}><FaTimesCircle /> Cancel Job</button>
        <button onClick={handleViewDetails}><FaFileContract /> View Agreement</button>
      </div>

      {status && <p className="status-message">{status}</p>}

      {details && (
        <div className="agreement-card">
          <h3>📜 Agreement Details</h3>
          <p><strong>Householder:</strong> {details.householder}</p>
          <p><strong>Maid:</strong> {details.maid}</p>
          <p><strong>Job Description:</strong> {details.jobDescription}</p>
          <p><strong>Amount:</strong> {details.amount}</p>
          <p><strong>Deadline:</strong> {details.deadline}</p>
          <p><strong>Status:</strong>
            {details.isCancelled ? (
              <span className="badge cancelled">Cancelled</span>
            ) : details.isPaid ? (
              <span className="badge paid">Paid</span>
            ) : (
              <span className="badge pending">Pending</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default AgreementActions;
