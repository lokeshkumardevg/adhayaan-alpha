import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ManagementSection.css";

const MySwal = withReactContent(Swal);

// API constants
const API_BASE = "http://localhost/admin/index.php/Api";
const SAVE_MANAGEMENT_URL = `${API_BASE}/save_management_details`;

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
   const userId = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
  const tabs = [ "Management"]

  // State for management data
  const [managementData, setManagementData] = useState(
    managementFields.map(() => ({ name: "", email: "" }))
  );

  // Handle name/email change
  const handleChange = (index, field, value) => {
    const updatedData = [...managementData];
    updatedData[index][field] = value;
    setManagementData(updatedData);
  };

  // Save data
  const handleSave = async () => {
    try {
      const payload = {
        user_id: userId || 1,
        management: managementFields.map((role, idx) => ({
          role,
          name: managementData[idx].name,
          email: managementData[idx].email
        }))
      };

      const res = await axios.post(SAVE_MANAGEMENT_URL, payload);

      if (res.data.status === "200") {
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "Management details have been updated.",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: res.data.msg || "Could not save management details."
        });
      }
    } catch (err) {
      console.error("Save Error:", err);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later."
      });
    }
  };

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
            <input
              type="text"
              placeholder="Enter name"
              value={managementData[index].name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={managementData[index].email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="btn-row">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
      </div>
    </div>
  );
};

export default ManagementSection;
