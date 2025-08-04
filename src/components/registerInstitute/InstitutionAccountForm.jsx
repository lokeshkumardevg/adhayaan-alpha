import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InstitutionAccountForm.css";

const InstitutionAccountForm = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [backendError, setBackendError] = useState("");
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

  const validateForm = () => {
    const errors = {};

    if (selectedTypes.length === 0)
      errors.selectedTypes = "Please select at least one institution type.";
    if (!formData.address.trim()) errors.address = "Address is required.";
    if (!formData.country.trim()) errors.country = "Country is required.";
    if (!formData.city.trim()) errors.city = "City is required.";
    if (!formData.district.trim()) errors.district = "District is required.";
    if (!formData.pincode.trim()) errors.pincode = "Pin code is required.";
    if (!formData.mobile.trim()) errors.mobile = "Mobile number is required.";

    if (selectedTypes.includes("University") && !formData.universityName.trim())
      errors.universityName = "University name is required.";

    if (selectedTypes.includes("College") && !formData.collegeName.trim())
      errors.collegeName = "College name is required.";

    if (selectedTypes.includes("ITI / Vocational") && !formData.itiName.trim())
      errors.itiName = "ITI/Vocational name is required.";

    if (selectedTypes.includes("Coaching Center") && !formData.coachingName.trim())
      errors.coachingName = "Coaching center name is required.";

    if (selectedTypes.includes("Tutor") && !formData.tutorName.trim())
      errors.tutorName = "Tutor name is required.";

    if (selectedTypes.includes("Consultant") && !formData.consultantName.trim())
      errors.consultantName = "Consultant name is required.";

    if (selectedTypes.includes("Other") && !formData.otherTypeName.trim())
      errors.otherTypeName = "Please specify the custom type.";

    return errors;
  };

  const checkMobileExists = async (mobile) => {
    try {
      const res = await axios.post(
        "http://localhost/admin/index.php/Api/check_mobile_exists",
        { mobile },
        { headers: { "Content-Type": "application/json" } }
      );
      return res.data.exists;
    } catch (err) {
      console.error("Error checking mobile:", err);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError("");
    setFormErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const exists = await checkMobileExists(formData.mobile);
    if (exists) {
      setBackendError(
        <>
          This mobile number is already registered.{" "}
            <button className="register-btn-sm" onClick={() => navigate("/login-institute")}>
            Go To Login
          </button>
          .
        </>
      );
      return;
    }

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
            {["University", "College", "ITI / Vocational", "Coaching Center", "Tutor", "Consultant", "Other"].map((type) => (
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
          {formErrors.selectedTypes && <p className="error-message">{formErrors.selectedTypes}</p>}

          {selectedTypes.includes("University") && (
            <>
              <label>Name of University:</label>
              <input
                type="text"
                className="text-input"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
              />
              {formErrors.universityName && <p className="error-message">{formErrors.universityName}</p>}
            </>
          )}

          {selectedTypes.includes("College") && (
            <>
              <label>Name of College:</label>
              <input
                type="text"
                className="text-input"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
              />
              {formErrors.collegeName && <p className="error-message">{formErrors.collegeName}</p>}
            </>
          )}

          {selectedTypes.includes("ITI / Vocational") && (
            <>
              <label>Name of ITI/Vocational Institute:</label>
              <input
                type="text"
                className="text-input"
                name="itiName"
                value={formData.itiName}
                onChange={handleChange}
              />
              {formErrors.itiName && <p className="error-message">{formErrors.itiName}</p>}
            </>
          )}

          {selectedTypes.includes("Coaching Center") && (
            <>
              <label>Name of Coaching Center:</label>
              <input
                type="text"
                className="text-input"
                name="coachingName"
                value={formData.coachingName}
                onChange={handleChange}
              />
              {formErrors.coachingName && <p className="error-message">{formErrors.coachingName}</p>}
            </>
          )}

          {selectedTypes.includes("Tutor") && (
            <>
              <label>Name of Tutor:</label>
              <input
                type="text"
                className="text-input"
                name="tutorName"
                value={formData.tutorName}
                onChange={handleChange}
              />
              {formErrors.tutorName && <p className="error-message">{formErrors.tutorName}</p>}
            </>
          )}

          {selectedTypes.includes("Consultant") && (
            <>
              <label>Name of Consultant:</label>
              <input
                type="text"
                className="text-input"
                name="consultantName"
                value={formData.consultantName}
                onChange={handleChange}
              />
              {formErrors.consultantName && <p className="error-message">{formErrors.consultantName}</p>}
            </>
          )}

          {selectedTypes.includes("Other") && (
            <>
              <label>Specify Other Type:</label>
              <input
                type="text"
                className="text-input"
                name="otherTypeName"
                value={formData.otherTypeName}
                onChange={handleChange}
              />
              {formErrors.otherTypeName && <p className="error-message">{formErrors.otherTypeName}</p>}
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
          {formErrors.address && <p className="error-message">{formErrors.address}</p>}

          <label>Country*:</label>
          <input
            type="text"
            className="text-input"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          {formErrors.country && <p className="error-message">{formErrors.country}</p>}

          <label>City*:</label>
          <input
            type="text"
            className="text-input"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {formErrors.city && <p className="error-message">{formErrors.city}</p>}

          <label>District*:</label>
          <input
            type="text"
            className="text-input"
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
          {formErrors.district && <p className="error-message">{formErrors.district}</p>}

          <label>Pin Code*:</label>
          <input
            type="text"
            className="text-input"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
          />
          {formErrors.pincode && <p className="error-message">{formErrors.pincode}</p>}

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
          {formErrors.mobile && <p className="error-message">{formErrors.mobile}</p>}

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
          <button type="button" className="cancel-btn" onClick={() => window.location.reload()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstitutionAccountForm;
