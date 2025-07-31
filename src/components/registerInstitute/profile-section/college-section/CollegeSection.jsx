// src/profile-section/college-section/CollegeSection.jsx
import React from "react";
import "./CollegeSection.css";

const CollegeSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="college-section">
      <div className="section-heading">College</div>

      <label>Ownership:</label>
      <div className="radio-group">
        {["Govt", "Private", "Autonomous"].map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="collegeOwnership"
              value={type}
              checked={formData.collegeOwnership === type}
              onChange={handleChange}
            />
            {type}
          </label>
        ))}
      </div>

      <label>Ownership type:</label>
      <div className="ownership-types">
        {["2(f)", "2(f) and 12(b)", "Autonomous"].map((type) => (
          <span key={type} className="ownership-type-item">
            {type}
          </span>
        ))}
      </div>

      <label>Total no of teaching staff:</label>
      <input
        type="text"
        name="collegeTeachingStaff"
        value={formData.collegeTeachingStaff || ""}
        onChange={handleChange}
        className="text-input"
      />

      <label>Total no of non teaching staff:</label>
      <input
        type="text"
        name="collegeNonTeachingStaff"
        value={formData.collegeNonTeachingStaff || ""}
        onChange={handleChange}
        className="text-input"
      />

      <div className="form-buttons">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CollegeSection;
