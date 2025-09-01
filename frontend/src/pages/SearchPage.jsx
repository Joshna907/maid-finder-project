import React, { useState, useEffect } from 'react';
import '../component/SearchPage.css';
import MaidCard from '../component/MaidCard';

const SearchPage = () => {
  const [maids, setMaids] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    serviceType: '',
    workingHours: '',
    availabilityDate: '',
    budgetRange: '',
    language: '',
    status: '',
    gender: '',
  });

  

   useEffect(() => {
  const fetchMaids = async () => {
    try {
      const res = await fetch('https://maidfinder-backend.onrender.com/api/maids');
      const data = await res.json();
      setMaids(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching maids:', err);
      setMaids([]); // fallback to empty array on error
    }
  };

  fetchMaids();
}, []);


  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // 🔍 Filter Logic Applied Here
  const filteredMaids = maids.filter((maid) => {
    const {
      location,
      serviceType,
      workingHours,
      availabilityDate,
      budgetRange,
      language,
      status,
      gender,
    } = filters;

    const matchLocation = !location || maid.location.toLowerCase().includes(location.toLowerCase());
    const matchService = !serviceType || maid.serviceType === serviceType;
    const matchHours = !workingHours || maid.workingHours === workingHours;
    const matchDate =
      !availabilityDate ||
      new Date(maid.availabilityDate).toISOString().split('T')[0] === availabilityDate;

    const [minBudget, maxBudget] = budgetRange.split('–').map((b) => parseInt(b));
    const matchBudget =
      !budgetRange ||
      (maid.budgetMin >= (minBudget || 0) && maid.budgetMax <= (maxBudget || Infinity));

    const matchLanguage =
      !language || maid.languages.toLowerCase().includes(language.toLowerCase());
    const matchStatus = !status || maid.status === status;
    const matchGender =
      !gender || !maid.gender || gender === 'any' || maid.gender === gender;

    return (
      matchLocation &&
      matchService &&
      matchHours &&
      matchDate &&
      matchBudget &&
      matchLanguage &&
      matchStatus &&
      matchGender
    );
  });

  return (
    <div className="search-container">
      <h2 className="search-heading">Find Trusted Maids Near You</h2>

      <div className="search-bar-wrapper">
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Location / City / ZIP"
          className="search-input"
        />

        <select
          name="serviceType"
          value={filters.serviceType}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Service Type</option>
          <option value="house_cleaning">House Cleaning</option>
          <option value="child_care">Child Care</option>
          <option value="cooking">Cooking</option>
          <option value="elderly_care">Elderly Care</option>
        </select>

        <select
          name="workingHours"
          value={filters.workingHours}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Working Hours</option>
          <option value="morning">Morning (8AM–12PM)</option>
          <option value="afternoon">Afternoon (12PM–4PM)</option>
          <option value="evening">Evening (4PM–8PM)</option>
          <option value="full">Full Day</option>
        </select>

        <input
          type="date"
          name="availabilityDate"
          value={filters.availabilityDate}
          onChange={handleChange}
          className="search-input"
        />

        <input
          type="text"
          name="budgetRange"
          value={filters.budgetRange}
          onChange={handleChange}
          placeholder="Budget Range (e.g., 3000–7000)"
          className="search-input"
        />

        <select
          name="language"
          value={filters.language}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Language</option>
          <option value="hindi">Hindi</option>
          <option value="marathi">Marathi</option>
          <option value="english">English</option>
        </select>

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Status</option>
          <option value="Free">Free</option>
          <option value="Allocated">Currently Booked</option>
        </select>

        <select
          name="gender"
          value={filters.gender}
          onChange={handleChange}
          className="search-select"
        >
          <option value="">Gender Preference</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="any">Any</option>
        </select>
        
        <button className="search-button">
          Search
        </button>

      </div>


      <div className="maid-cards-container">
        {filteredMaids.length > 0 ? (
          filteredMaids.map((maid, index) => <MaidCard key={index} maid={maid} />)
        ) : (
          <p>No maids found. Try adjusting filters.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
