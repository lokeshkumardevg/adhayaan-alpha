import React from "react";
import "./ManagementSection.css";

const managementFields = [
  "Chancellor",
  "Vice Chancellor",
  "Pro-Vice Chancellor",
  "Chairman",
  "Vice Chairman",
  "Registrar",
  "Director",
  "Principle",
  "Training & Placement Officer (TPO)"
];

const ManagementSection = () => {
  const tabs = [
    "About", "University", "Collage", "ITI/Vocational", "Courses",
    "Coaching Center", "Tutor", "Consultants", "Social Media", "Photos",
    "Accolades", "Management", "Contact"
  ];

  return (
    <div className="management-container">
      {/* Red Navbar */}
      <div className="navbar">
        {tabs.map((tab) => (
          <span key={tab} className={tab === "Management" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      {/* Section Header */}
      <h3 className="section-heading">Management</h3>

      {/* Input Fields */}
      <div className="management-grid">
        {managementFields.map((title, index) => (
          <div className="management-row" key={index}>
            <label>{title}:</label>
            <input type="text" placeholder={`Enter name`} />
            <label>Email:</label>
            <input type="email" placeholder="Enter email" />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="btn-row">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default ManagementSection;
