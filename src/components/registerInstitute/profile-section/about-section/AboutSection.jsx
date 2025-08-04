import React from "react";
import "./AboutSection.css";
import axios from "axios";

const AboutSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckboxChange = (mode) => {
    const updatedModes = [...(formData.studyModes || [])];
    if (updatedModes.includes(mode)) {
      setFormData((prev) => ({
        ...prev,
        studyModes: updatedModes.filter((m) => m !== mode),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        studyModes: [...updatedModes, mode],
      }));
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/admin/index.php/Api/save_about_section",
        {
          institution_id: localStorage.getItem("userId"),
          about: formData.about,
          year: formData.year,
          institutionType: formData.institutionType,
          studyModes: formData.studyModes || [],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.status === "200") {
        alert("✅ About section saved successfully!");
      } else {
        alert("❌ Failed to save about section!");
      }
    } catch (error) {
      console.error("Save Error:", error);
      alert("🚨 Server error. Please try again.");
    }
  };

  return (
    <div className="about-section">
      <div className="about-header">
        <h2>
          Name of Institution / Tutor / Consultant / Or whatever{" "}
          <span className="inst-name">(JNICSR Foundation)</span>
        </h2>
        <p className="sub-heading">
          University | College | ITI / Vocational | Coaching Centre | Tutor |
          Consultant | Other
        </p>
      </div>

      <div className="about-tabs">
        {[
          "About",
          "University",
          "Collage",
          "ITI/Vocational",
          "Courses",
          "Coaching Center",
          "Tutor",
          "Consultants",
          "Social Media",
          "Photos",
          "Accolades",
          "Management",
          "Contact",
        ].map((tab, idx) => (
         <span key={tab} className={tab === "About" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>
     
      <div className="about-form">
        <label>About Institution / Tutor / Consultant:</label>
        <textarea
          name="about"
          value={formData.about || ""}
          onChange={handleChange}
          className="about-textarea"
        />

        <label>Year of Establishment:</label>
        <input
          type="text"
          name="year"
          value={formData.year || ""}
          onChange={handleChange}
          className="text-input"
        />

        <label>Institution Type:</label>
        <input
          type="text"
          name="institutionType"
          value={formData.institutionType || ""}
          onChange={handleChange}
          className="text-input"
        />

        <label>Study Mode:</label>
        <div className="checkbox-group">
          {["Regular", "Online", "Distance / Correspondence"].map((mode) => (
            <label key={mode}>
              <input
                type="checkbox"
                checked={formData.studyModes?.includes(mode)}
                onChange={() => handleCheckboxChange(mode)}
              />
              {mode}
            </label>
          ))}
        </div>

        <div className="form-buttons">
          <button type="button" className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
