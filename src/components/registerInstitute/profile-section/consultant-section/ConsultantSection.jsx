import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./ConsultantSection.css";

// ✅ API URLs
const API_BASE = "http://localhost/admin/index.php/Api";
const GET_CONSULTANT_URL = `${API_BASE}/getConsultantData`;
const SAVE_CONSULTANT_URL = `${API_BASE}/saveConsultantData`;

const ConsultantSection = ({ userId = 1 }) => {
  const allServices = [
    "Course selection", "Application assistance", "Admission assistance", "Visa services",
    "Finance & Scholarship", "Pre-departure event & kit", "Course recommendation", "Scholarship assistance",
    "Admission support", "Visa support", "University selection", "Financial guidance",
    "Pre-departure checklist", "Application tracking", "Profiling", "Course and university selection",
    "Application editing & review", "Finance and scholarship assistance", "Personal consultation",
    "Application creation", "Personal statement construction", "Guaranteed offer",
    "Abroad career counselling", "Visa & forex assistance", "Pre-departure guidance",
    "Abroad counselling", "Course selection & application",
    "Scholarship guidance & assistance in essays", "Internship guidance",
    "Loan assistance", "Visa processing & mock interviews", "Abroad Counselling",
    "Free visa help", "Students essentials– health cover, accommodation, banking",
    "Accommodation", "Health services", "Forex", "Remittance",
    "IELTS", "GRE", "GMAT", "TOEFL", "SAT", "ACT", "PTE", "CELPIP", "CAEL", "DET",
    "Health cover", "Free counselling", "Flight bookings",
    "Consultation", "University recommendation", "Review of personal statement, documentation",
    "Scholarship advice", "International banking", "Travel Assistance",
    "Guardianship and welfare service for under 18 years students"
  ];

  const [selectedServices, setSelectedServices] = useState([]);

  // ✅ Fetch existing consultant services
  const fetchData = async () => {
    try {
      const res = await axios.get(`${GET_CONSULTANT_URL}`, {
        params: { user_id: userId }
      });
      if (res.data.status === "200") {
        setSelectedServices(res.data.data || []);
      }
    } catch (err) {
      console.error("Error fetching consultant data:", err);
    }
  };

  // ✅ Save selected services
  const handleSave = async () => {
    try {
      const payload = { user_id: userId, services: selectedServices };
      const res = await axios.post(SAVE_CONSULTANT_URL, payload);

      if (res.data.status === "200") {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: res.data.msg || "Consultant services saved successfully",
          timer: 2000,
          showConfirmButton: false,
        });
        fetchData();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: res.data.msg || "Unable to save consultant services",
        });
      }
    } catch (err) {
      console.error("Save error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error while saving",
      });
    }
  };

  // ✅ Handle checkbox toggle
  const handleCheckbox = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="consultant-section">
      {/* 🟥 Navbar */}
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses", "Coaching Center",
          "Tutor", "Consultants", "Social Media", "Photos", "Accolades", "Management", "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Consultants" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <h3>Consultants</h3>
      <p>Select the services you provide:</p>

      {/* Services List */}
      <div className="checkbox-grid">
        {allServices.map((service, idx) => (
          <label key={idx}>
            <input
              type="checkbox"
              checked={selectedServices.includes(service)}
              onChange={() => handleCheckbox(service)}
            />
            {service}
          </label>
        ))}
      </div>

      {/* Buttons */}
      <div className="btn-row">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={fetchData}>Cancel</button>
      </div>

      {/* Optional Saved Table */}
      {selectedServices.length > 0 && (
        <div className="saved-table">
          <h4>Saved Services</h4>
          <table>
            <thead>
              <tr>
                <th>Service Name</th>
              </tr>
            </thead>
            <tbody>
              {selectedServices.map((service, idx) => (
                <tr key={idx}>
                  <td>{service}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ConsultantSection;
