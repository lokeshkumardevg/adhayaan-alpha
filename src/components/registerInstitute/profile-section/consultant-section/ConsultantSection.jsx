import React from "react";
import "./ConsultantSection.css";

const ConsultantSection = ({ formData, setFormData }) => {
  return (
    <div className="section">
      <h3>Consultant Information</h3>
      <label>Expertise Area</label>
      <input
        type="text"
        value={formData.expertise || ""}
        onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
      />

      <label>Years of Experience</label>
      <input
        type="number"
        value={formData.years || ""}
        onChange={(e) => setFormData({ ...formData, years: e.target.value })}
      />
    </div>
  );
};

export default ConsultantSection;
