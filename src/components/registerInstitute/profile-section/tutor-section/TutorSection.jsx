import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TutorSection.css";

const TutorSection = ({ formData, setFormData }) => {
  const userId = localStorage.getItem("userId");
  const apiBase = "http://localhost:8081/admin/index.php/Api";
  const [message, setMessage] = useState("");

  const studyModes = ["Student House", "Tutor House", "Online"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (mode) => {
    const updated = [...(formData.studyModes || [])];
    if (updated.includes(mode)) {
      setFormData((prev) => ({
        ...prev,
        studyModes: updated.filter((m) => m !== mode),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        studyModes: [...updated, mode],
      }));
    }
  };

  const handleLanguageChange = (idx, val) => {
    const updated = [...(formData.languages || ["", "", ""])];
    updated[idx] = val;
    setFormData({ ...formData, languages: updated });
  };

  const handleSave = async () => {
    try {
      const payload = { user_id: 1, ...formData };
      const res = await axios.post(`${apiBase}/save_tutor_data`, payload);
      if (res.data.status === "200") {
        setMessage("✅ Tutor data saved successfully.");
      } else {
        setMessage("❌ Failed to save data.");
      }
    } catch (err) {
      console.error("Save error:", err);
      setMessage("❌ Server error while saving.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiBase}/get_tutor_data`, {
          params: { user_id: 1 },
        });
        if (res.data.status === "200") {
          setFormData(res.data.data || {});
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    if (userId) fetchData();
  }, [setFormData, userId]);

  return (
    <div className="tutor-section">
       <div className="navbar">
        {["About", "University", "Collage", "ITI/Vocational", "Courses", "Coaching Center", "Tutor", "Consultants", "Social Media", "Photos", "Accolades", "Management", "Contact"].map((tab) => (
          <span key={tab} className={tab === "Tutor" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>
      <h3>Tutor (Individual)</h3>

      <div className="row">
        <label>Study Mode :</label>
        <div className="options">
          {studyModes.map((mode) => (
            <label key={mode}>
              <input
                type="checkbox"
                checked={formData.studyModes?.includes(mode)}
                onChange={() => handleCheckbox(mode)}
              />
              {mode}
            </label>
          ))}
        </div>
      </div>

      <div className="row">
        <label>Do You Give Demo Classes :</label>
        <input
          type="text"
          name="demoClass"
          value={formData.demoClass || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Do You Charge For Demo Classes :</label>
        <input
          type="text"
          name="chargeDemo"
          value={formData.chargeDemo || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>No of Tuition in a Month :</label>
        <input
          type="text"
          name="tuitionCount"
          value={formData.tuitionCount || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Preferred Location :</label>
        <input
          type="text"
          name="location"
          value={formData.location || ""}
          onChange={handleChange}
        />
        <label>Pin Code :</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Max Distance Willing To Travel (Kilometers) :</label>
        <input
          type="text"
          name="maxDistance"
          value={formData.maxDistance || ""}
          onChange={handleChange}
        />
        <span className="hint">(Please enter between 1KM to 50KM)</span>
      </div>

      <div className="row full">
        <label>Brief your experience (max 200 words):</label>
        <textarea
          name="experience"
          value={formData.experience || ""}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="row">
        <label>Languages you can Speak :</label>
        {[0, 1, 2].map((idx) => (
          <input
            key={idx}
            type="text"
            value={formData.languages?.[idx] || ""}
            onChange={(e) => handleLanguageChange(idx, e.target.value)}
          />
        ))}
      </div>

      <div className="row">
        <label>You are a :</label>
        <input
          type="text"
          name="tutorType"
          value={formData.tutorType || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Stream :</label>
        <input
          type="text"
          name="stream"
          value={formData.stream || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Charges :</label>
        <input
          type="text"
          name="charge"
          value={formData.charge || ""}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <label>Charges Type :</label>
        <input
          type="text"
          name="chargeType"
          value={formData.chargeType || ""}
          onChange={handleChange}
        />
      </div>

      {message && <p className="success-message">{message}</p>}

      <div className="btns">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={() => window.location.reload()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TutorSection;
