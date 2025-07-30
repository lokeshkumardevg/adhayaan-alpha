import React from "react";
import "./ManagementSection.css";

const ManagementSection = ({ formData, setFormData }) => {
  return (
    <div className="section">
      <h3>Management Contact</h3>
      <label>Principal/Head Name</label>
      <input
        type="text"
        name="headName"
        value={formData.headName || ""}
        onChange={(e) => setFormData({ ...formData, headName: e.target.value })}
      />

      <label>Designation</label>
      <input
        type="text"
        name="designation"
        value={formData.designation || ""}
        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
      />
    </div>
  );
};

export default ManagementSection;
