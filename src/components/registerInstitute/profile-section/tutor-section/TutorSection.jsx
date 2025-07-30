import React from "react";
import "./TutorSection.css";

const TutorSection = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      tutor: {
        ...prev.tutor,
        [name]: value,
      },
    }));
  };

  return (
    <div className="section-wrapper">
      <h3 className="section-title">Tutor Details</h3>
      <div className="tutor-grid">
        <div className="form-group">
          <label>Tutor Name*</label>
          <input
            type="text"
            name="name"
            value={formData?.tutor?.name || ""}
            onChange={handleChange}
            placeholder="Enter tutor's name"
          />
        </div>

        <div className="form-group">
          <label>Qualification*</label>
          <input
            type="text"
            name="qualification"
            value={formData?.tutor?.qualification || ""}
            onChange={handleChange}
            placeholder="e.g. B.Ed, M.Sc"
          />
        </div>

        <div className="form-group full-width">
          <label>Specialization</label>
          <input
            type="text"
            name="specialization"
            value={formData?.tutor?.specialization || ""}
            onChange={handleChange}
            placeholder="e.g. Physics, Mathematics"
          />
        </div>

        <div className="form-group">
          <label>Experience (in years)</label>
          <input
            type="number"
            name="experience"
            value={formData?.tutor?.experience || ""}
            onChange={handleChange}
            placeholder="e.g. 5"
          />
        </div>

        <div className="form-group">
          <label>Available Timings</label>
          <input
            type="text"
            name="timings"
            value={formData?.tutor?.timings || ""}
            onChange={handleChange}
            placeholder="e.g. 10 AM - 2 PM"
          />
        </div>
      </div>
    </div>
  );
};

export default TutorSection;
