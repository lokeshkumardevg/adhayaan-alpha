// src/profile-section/university-section/UniversitySection.jsx
import React from "react";
import "./UniversitySection.css";

const UniversitySection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="university-section">
      <div className="section-heading">University</div>

      <label>Ownership:</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="ownership"
            value="Govt"
            checked={formData.ownership === "Govt"}
            onChange={handleChange}
          />
          Govt
        </label>
        <label>
          <input
            type="radio"
            name="ownership"
            value="Private"
            checked={formData.ownership === "Private"}
            onChange={handleChange}
          />
          Private
        </label>
      </div>

      <label>Ownership Type:</label>
      <div className="ownership-types">
        {[
          "Central University",
          "State University",
          "Private University",
          "Deemed University",
        ].map((type, index) => (
          <span key={index} className="ownership-type-item">
            {type}
          </span>
        ))}
      </div>

      <label>Total no of approved colleges:</label>
      <input
        type="text"
        name="approvedColleges"
        value={formData.approvedColleges || ""}
        onChange={handleChange}
        className="text-input"
      />

      <label>Name of approved institution:</label>
      <input
        type="text"
        name="approvedInstitution"
        value={formData.approvedInstitution || ""}
        onChange={handleChange}
        className="text-input"
      />

      <label>Total no of teaching staff:</label>
      <input
        type="text"
        name="teachingStaff"
        value={formData.teachingStaff || ""}
        onChange={handleChange}
        className="text-input"
      />

      <label>Total no of non teaching staff:</label>
      <input
        type="text"
        name="nonTeachingStaff"
        value={formData.nonTeachingStaff || ""}
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

export default UniversitySection;
