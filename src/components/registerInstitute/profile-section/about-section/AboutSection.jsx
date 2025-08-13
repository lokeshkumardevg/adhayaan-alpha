import React, { useState } from "react";
import "./AboutSection.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AboutSection = ({ formData, setFormData }) => {
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost/admin/index.php/Api/save_about_section",
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
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "About section has been updated.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: "Could not save about section. Please try again.",
        });
      }
    } catch (error) {
      console.error("Save Error:", error);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later.",
      });
    }
    setLoading(false);
  };

  const handleCancel = () => {
    MySwal.fire({
      title: "Discard changes?",
      text: "Any unsaved changes will be lost.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, discard",
      cancelButtonText: "No, keep editing",
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({});
      }
    });
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
        ].map((tab) => (
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
          type="number"
          name="year"
          placeholder="e.g. 2005"
          min="1900"
          max={new Date().getFullYear()}
          value={formData.year || ""}
          onChange={handleChange}
          className="text-input"
        />

        <label>Institution Type:</label>
        <select
          name="institutionType"
          value={formData.institutionType || ""}
          onChange={handleChange}
          className="text-input"
        >
          <option value="">Select Type</option>
          <option value="College">College</option>
          <option value="University">University</option>
          <option value="Tutor">Tutor</option>
          <option value="Consultant">Consultant</option>
          <option value="Coaching Center">Coaching Center</option>
        </select>

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
          <button
            type="button"
            className="save-btn"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
