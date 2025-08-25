// src/profile-section/university-section/UniversitySection.jsx
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./UniversitySection.css";

const MySwal = withReactContent(Swal);

const API_URL = "http://localhost/admin/index.php/Api/save_university_section";

const UniversitySection = ({ formData, setFormData }) => {
  const userdat = JSON.parse(localStorage.getItem("AdhyayanAuth"));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Attach user_id
  formData.user_id = userdat?.user_id?.id || "";

  const handleSave = async () => {
    try {
      const res = await axios.post(API_URL, formData);

      if (res.data.status === 200) {
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "University section has been updated.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: "Could not save data. Please try again.",
        });
      }
    } catch (err) {
      console.error("Save Error:", err);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="university-section">
      <div className="navbar">
        {[
          "About",
          "University",
          
        ].map((tab) => (
          <span
            key={tab}
            className={tab === "University" ? "tab active" : "tab"}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="section-heading">University</div>

      <label>Ownership:</label>
      <select
        name="ownership"
        value={formData.ownership || ""}
        onChange={handleChange}
        className="text-input"
      >
        <option value="">-- Select Ownership --</option>
        <option value="Govt">Govt</option>
        <option value="Private">Private</option>
      </select>

      <label>Ownership Type:</label>
      <select
        name="ownershipType"
        value={formData.ownershipType || ""}
        onChange={handleChange}
        className="text-input"
      >
        <option value="">-- Select Ownership Type --</option>
        <option value="Central University">Central University</option>
        <option value="State University">State University</option>
        <option value="Private University">Private University</option>
        <option value="Deemed University">Deemed University</option>
      </select>

      <div className="three-column-grid">
        <div>
          <label>Total no of approved colleges:</label>
          <input
            type="number"
            name="approvedColleges"
            value={formData.approvedColleges || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>

        <div>
          <label>Total no of teaching staff:</label>
          <input
            type="number"
            name="teachingStaff"
            value={formData.teachingStaff || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>

        <div>
          <label>Total no of non teaching staff:</label>
          <input
            type="number"
            name="nonTeachingStaff"
            value={formData.nonTeachingStaff || ""}
            onChange={handleChange}
            className="text-input"
          />
        </div>
      </div>

      <label>Name of approved institution:</label>
      <input
        type="text"
        name="approvedInstitution"
        value={formData.approvedInstitution || ""}
        onChange={handleChange}
        className="text-input"
      />

      <div className="form-buttons">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default UniversitySection;
