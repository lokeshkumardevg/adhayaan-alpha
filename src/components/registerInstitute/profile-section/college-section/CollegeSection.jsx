// src/profile-section/college-section/CollegeSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CollegeSection.css";

// API URL constants
const API_BASE = "http://localhost/admin/index.php/Api";
const GET_COLLEGE_URL = `${API_BASE}/get_college_data`;
const SAVE_COLLEGE_URL = `${API_BASE}/save_college_data`;
const GET_COLLEGE_LIST_URL = `${API_BASE}/get_all_colleges`;

const CollegeSection = ({ formData, setFormData }) => {
   const userId = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
  const [collegeList, setCollegeList] = useState([]);

  // API functions
  const fetchCollegeData = async () => {
    try {
      const res = await axios.get(GET_COLLEGE_URL, { params: { user_id: userId } });
      if (res.data.status === "200") {
        setFormData(res.data.data || {});
      }
    } catch (err) {
      console.error("Fetch college error:", err);
    }
  };

  const saveCollegeData = async () => {
    try {
      const payload = { user_id: userId, ...formData };
      const res = await axios.post(SAVE_COLLEGE_URL, payload);

      if (res.data.status === "200") {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: res.data.msg || "College data saved successfully",
          timer: 2000,
          showConfirmButton: false
        });
        loadCollegeList();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: res.data.msg || "Unable to save college data"
        });
      }
    } catch (err) {
      console.error("Save college error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error while saving"
      });
    }
  };

  const loadCollegeList = async () => {
    try {
      const res = await axios.get(GET_COLLEGE_LIST_URL);
      if (res.data.status === "200") {
        setCollegeList(res.data.data || []);
      }
    } catch (err) {
      console.error("Fetch list error:", err);
    }
  };

  useEffect(() => {
    fetchCollegeData();
    loadCollegeList();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="college-section">
      <div className="navbar">
        {[
           "Collage"
        ].map((tab) => (
          <span key={tab} className={tab === "Collage" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

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
        <button className="save-btn" onClick={saveCollegeData}>
          Save
        </button>
        <button className="cancel-btn" onClick={fetchCollegeData}>
          Cancel
        </button>
      </div>

      {collegeList.length > 0 && (
        <div className="college-table">
          <h4>Saved Colleges</h4>
          <table>
            <thead>
              <tr>
                <th>Ownership</th>
                <th>Teaching Staff</th>
                <th>Non-Teaching Staff</th>
              </tr>
            </thead>
            <tbody>
              {collegeList.map((college, idx) => (
                <tr key={idx}>
                  <td>{college.collegeOwnership}</td>
                  <td>{college.collegeTeachingStaff}</td>
                  <td>{college.collegeNonTeachingStaff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CollegeSection;
