// src/profile-section/iti-section/ITISection.jsx
import React from "react";
import "./ITISection.css";

const ITISection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="iti-section">
      <div className="section-heading">ITI/Vocational</div>

      <label>Ownership:</label>
      <div className="radio-group">
        {["Govt", "Private", "Autonomous"].map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="itiOwnership"
              value={type}
              checked={formData.itiOwnership === type}
              onChange={handleChange}
            />
            {type}
          </label>
        ))}
      </div>

      <label>Total no of teaching staff:</label>
      <input
        type="text"
        name="itiTeachingStaff"
        value={formData.itiTeachingStaff || ""}
        onChange={handleChange}
        className="text-input"
      />

      <label>Total no of non teaching staff:</label>
      <input
        type="text"
        name="itiNonTeachingStaff"
        value={formData.itiNonTeachingStaff || ""}
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

export default ITISection;
