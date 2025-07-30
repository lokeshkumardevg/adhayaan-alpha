import React from "react";
import "./AboutSection.css";

const AboutSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      about: {
        ...prev.about,
        [name]: value,
      },
    }));
  };

  return (
    <div className="section-wrapper">
      <h3 className="section-title">About Institution</h3>
      <div className="about-grid">
        <div className="form-group">
          <label>Institution Name*</label>
          <input
            type="text"
            name="institutionName"
            value={formData?.about?.institutionName || ""}
            onChange={handleChange}
            placeholder="Enter your institution name"
          />
        </div>

        <div className="form-group">
          <label>Institution Category*</label>
          <select
            name="institutionCategory"
            value={formData?.about?.institutionCategory || ""}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="University">University</option>
            <option value="College">College</option>
            <option value="Tutor">Tutor</option>
            <option value="Consultant">Consultant</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Institution Description</label>
          <textarea
            name="description"
            value={formData?.about?.description || ""}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your institution..."
          />
        </div>

        <div className="form-group">
          <label>Established Year</label>
          <input
            type="text"
            name="establishedYear"
            value={formData?.about?.establishedYear || ""}
            onChange={handleChange}
            placeholder="e.g. 1998"
          />
        </div>

        <div className="form-group">
          <label>Website</label>
          <input
            type="text"
            name="website"
            value={formData?.about?.website || ""}
            onChange={handleChange}
            placeholder="https://example.com"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
