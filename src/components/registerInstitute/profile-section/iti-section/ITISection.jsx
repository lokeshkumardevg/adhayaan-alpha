import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ITISection.css";

const ITISection = ({ formData, setFormData }) => {
  const [message, setMessage] = useState("");
 const userId = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
  const apiBase = "http://localhost/admin/index.php/Api";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Save API
  const handleSave = async () => {
    try {
      const payload = {
        user_id: userId,
        itiOwnership: formData.itiOwnership,
        itiTeachingStaff: formData.itiTeachingStaff,
        itiNonTeachingStaff: formData.itiNonTeachingStaff
      };

      const res = await axios.post(`${apiBase}/save_iti_data`, payload);
      if (res.data.status === "200") {
        setMessage("✅ ITI data saved successfully.");
      } else {
        setMessage("❌ Failed to save ITI data.");
      }
    } catch (err) {
      console.error("Save error", err);
      setMessage("❌ Server error while saving.");
    }
  };

  // ✅ Fetch on mount
  useEffect(() => {
    const fetchITIData = async () => {
      try {
        const res = await axios.get(`${apiBase}/get_iti_data`, {
          params: { user_id: userId }
        });

        if (res.data.status === "200") {
          const data = res.data.data;
          setFormData((prev) => ({
            ...prev,
            itiOwnership: data.itiOwnership || "",
            itiTeachingStaff: data.itiTeachingStaff || "",
            itiNonTeachingStaff: data.itiNonTeachingStaff || ""
          }));
        }
      } catch (err) {
        console.error("Fetch error", err);
      }
    };

    if (userId) fetchITIData();
  }, [setFormData, userId]);

  return (
    <div className="iti-section">
       <div className="navbar">
        {[
          "ITI/Vocational"
        ].map((tab) => (
          <span key={tab} className={tab === "ITI/Vocational" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>
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

      {message && <p className="success-message">{message}</p>}

      <div className="form-buttons">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
      </div>
    </div>
  );
};

export default ITISection;
