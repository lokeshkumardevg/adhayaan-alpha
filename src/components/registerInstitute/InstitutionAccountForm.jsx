import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InstitutionAccountForm.css";

const InstitutionAccountForm = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [formData, setFormData] = useState({
    universityName: "",
    collegeName: "",
    itiName: "",
    coachingName: "",
    tutorName: "",
    consultantName: "",
    otherType: "",
    otherTypeName: "",

    address: "",
    country: "",
    city: "",
    district: "",
    pincode: "",
    isdCode: "+91",
    mobile: "",
    privacyPreferences: [],
  });

  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  const handleTypeChange = (type) => {
    const updated = [...selectedTypes];
    if (updated.includes(type)) {
      setSelectedTypes(updated.filter((t) => t !== type));
    } else {
      updated.push(type);
      setSelectedTypes(updated);
    }
  };

  const handlePrivacyChange = (text) => {
    const updated = [...formData.privacyPreferences];
    if (updated.includes(text)) {
      setFormData((prev) => ({
        ...prev,
        privacyPreferences: updated.filter((item) => item !== text),
      }));
    } else {
      updated.push(text);
      setFormData((prev) => ({
        ...prev,
        privacyPreferences: updated,
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError("");

    try {
      const response = await axios.post(
        "http://localhost/admin/index.php/Api/create_institute_account",
        { ...formData, selectedTypes },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.status === "200") {
        alert("Account created successfully.");
        navigate("/login-institute");
      } else {
        setBackendError(response.data.msg || "Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setBackendError("Server error. Try again later.");
    }
  };

  return (
    <div className="institution-form-wrapper">
      <form className="institution-form" onSubmit={handleSubmit}>
        <h2>Institution Registration</h2>

        <div className="form-grid">
          <label className="full-label">Institution Type*:</label>
          <div className="checkbox-group full-width">
            {[
              "University",
              "College",
              "ITI / Vocational",
              "Coaching Center",
              "Tutor",
              "Consultant",
              "Other",
            ].map((type) => (
              <label key={type} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)}
                  onChange={() => handleTypeChange(type)}
                />
                {type}
              </label>
            ))}
          </div>

          {selectedTypes.includes("University") && (
            <>
              <label>Name of University:</label>
              <input
                type="text"
                className="text-input"
                name="universityName"
                placeholder="Enter university name"
                value={formData.universityName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("College") && (
            <>
              <label>Name of College:</label>
              <input
                type="text"
                className="text-input"
                name="collegeName"
                placeholder="Enter college name"
                value={formData.collegeName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("ITI / Vocational") && (
            <>
              <label>Name of ITI/Vocational Institute:</label>
              <input
                type="text"
                className="text-input"
                name="itiName"
                placeholder="Enter ITI/Vocational institute name"
                value={formData.itiName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("Coaching Center") && (
            <>
              <label>Name of Coaching Center:</label>
              <input
                type="text"
                className="text-input"
                name="coachingName"
                placeholder="Enter coaching center name"
                value={formData.coachingName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("Tutor") && (
            <>
              <label>Name of Tutor:</label>
              <input
                type="text"
                className="text-input"
                name="tutorName"
                placeholder="Enter tutor name"
                value={formData.tutorName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("Consultant") && (
            <>
              <label>Name of Consultant:</label>
              <input
                type="text"
                className="text-input"
                name="consultantName"
                placeholder="Enter consultant name"
                value={formData.consultantName}
                onChange={handleChange}
              />
            </>
          )}

          {selectedTypes.includes("Other") && (
            <>
              <label>Specify Other Type:</label>
              <input
                type="text"
                className="text-input"
                name="otherTypeName"
                placeholder="Enter custom type"
                value={formData.otherTypeName}
                onChange={handleChange}
              />
            </>
          )}

          {/* COMMON FIELDS */}
          <label>Address*:</label>
          <input
            type="text"
            className="text-input"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label>Country*:</label>
          <input
            type="text"
            className="text-input"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />

          <label>City*:</label>
          <input
            type="text"
            className="text-input"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />

          <label>District*:</label>
          <input
            type="text"
            className="text-input"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />

          <label>Pin Code*:</label>
          <input
            type="text"
            className="text-input"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />

          <label>ISD Code & Mobile:</label>
          <div className="flex-row">
            <select
              className="text-input small"
              name="isdCode"
              value={formData.isdCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="text"
              placeholder="Mobile Number"
              className="text-input"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <label className="full-label">Privacy Settings:</label>
          <div className="privacy-group full-width">
            {[
              "Contact me on mobile for education products",
              "Contact me via email for education products",
              "Send me Aadhyayan Newsletter email",
              "Yes, I have read and consent to Privacy Policy & Terms",
              "I agree to be contacted for promotional purposes",
            ].map((text, i) => (
              <label key={i} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.privacyPreferences.includes(text)}
                  onChange={() => handlePrivacyChange(text)}
                />
                {text}
              </label>
            ))}
          </div>
        </div>

        {backendError && <p className="error-message">{backendError}</p>}

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Create your account
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => window.location.reload()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstitutionAccountForm;
