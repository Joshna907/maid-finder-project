import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BasicInfoForm.css';

const BasicInfoForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formDataState, setFormDataState] = useState({
    fullName: "",
    phone: "",
    email: "",
    photo: null,
    gender: "",
    serviceType: "",
    location: "",
    workingHours: "",
    experience: "",
    workHistory: "",
    languages: "",
    availabilityDate: "",
    availabilityTime: "",
    budgetMin: "",
    budgetMax: "",
    idProof: null,
    references: "",
    status: "",
    extraNotes: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormDataState(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (const key in formDataState) {
      payload.append(key, formDataState[key]);
    }

    try {
      const res = await fetch('http://localhost:2002/api/save', {
        method: 'POST',
        body: payload,
      });
      if (res.ok) {
        alert('Form submitted successfully!');
        navigate('/');
      } else {
        alert('Submission failed.');
      }
    } catch (error) {
      console.error('Submit error', error);
      alert('Something went wrong. Check console.');
    }
  };

  return (
    <div className="maid-form-container">
      <form onSubmit={handleSubmit} className="multi-step-form">
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Basic Information</h2>

            <label>Full Name</label>
            <input name="fullName" placeholder="Full Name" required onChange={handleChange} />

            <label>Phone Number</label>
            <input name="phone" placeholder="Phone Number" required onChange={handleChange} />

            <label>Email</label>
            <input name="email" placeholder="Email Address" required onChange={handleChange} />

            <label>Gender</label>
            <select name="gender" required onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="photo">Upload Profile Picture (JPG, PNG)</label>
            <input type="file" name="photo" id="photo" accept="image/*" onChange={handleChange} />
            <span className="file-note">Choose a clear headshot image.</span>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Job Preferences</h2>

            <label>Service Type</label>
            <select name="serviceType" required onChange={handleChange}>
              <option value="">Select Service</option>
              <option value="house_cleaning">House Cleaning</option>
              <option value="child_care">Child Care</option>
              <option value="cooking">Cooking</option>
              <option value="elderly_care">Elderly Care</option>
            </select>

            <label>Location</label>
            <input name="location" placeholder="Location / ZIP" required onChange={handleChange} />

            <label>Experience (Years)</label>
            <input name="experience" placeholder="Experience in Years" onChange={handleChange} />
             

              <label>Upload ID Proof (e.g., Aadhaar, PAN, etc.)</label>
              <input
                type="file"
                name="idProof"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleChange}
              />

            <label>Past Work History</label>
            <input name="workHistory" placeholder="Details of past work" onChange={handleChange} />

            <label>Languages Known</label>
            <input name="languages" placeholder="e.g., Hindi, English" onChange={handleChange} />
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Additional Details</h2>

            <label>Availability Date</label>
            <input type="date" name="availabilityDate" required onChange={handleChange} />

            <label>Preferred Working Hours</label>
            <select name="workingHours" required value={formDataState.workingHours} onChange={handleChange}>
              <option value="">Select Hours</option>
              <option value="morning">Morning (8AM–12PM)</option>
              <option value="afternoon">Afternoon (12PM–4PM)</option>
              <option value="evening">Evening (4PM–8PM)</option>
              <option value="full">Full Day</option>
            </select>

            <label>Budget Range</label>
            <input name="budgetMin" type="number" placeholder="Min Budget" required onChange={handleChange} />
            <input name="budgetMax" type="number" placeholder="Max Budget" required onChange={handleChange} />

            <label htmlFor="idProof">Upload ID Proof (PDF, JPG)</label>
            <input type="file" name="idProof" id="idProof" accept=".pdf,image/*" onChange={handleChange} />
            <span className="file-note">Upload Aadhaar / PAN / any valid ID.</span>

            <label>Reference</label>
            <input name="references" placeholder="Reference Name & Contact" onChange={handleChange} />

            <label>Status</label>
            <select name="status" required onChange={handleChange}>
              <option value="">Select Status</option>
              <option value="Free">Free</option>
              <option value="Allocated">Allocated</option>
            </select>

            <label>Extra Notes</label>
            <textarea name="extraNotes" placeholder="Any extra notes..." onChange={handleChange} />
          </div>
        )}

        <div className="form-buttons">
          {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
          {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
          {step === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default BasicInfoForm;
