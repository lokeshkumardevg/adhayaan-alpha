import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InstitutionAccountForm.css";

const InstitutionAccountForm = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [formData, setFormData] = useState({
    institutionName: "",
    addInstitutionName: "",
    tutorName: "",
    consultantName: "",
    address: "",
    country: "",
    city: "",
    district: "",
    pincode: "",
    isdCode: "+91",
    mobile: "",
    otherType: "",
    privacyPreferences: []
  });
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();

  const handleTypeChange = (type) => {
    let updated = [...selectedTypes];
    if (updated.includes(type)) {
      updated = updated.filter((t) => t !== type);
      if (type === "Other") setShowOtherInput(false);
    } else {
      updated.push(type);
      if (type === "Other") setShowOtherInput(true);
    }
    setSelectedTypes(updated);
  };

  const handlePrivacyChange = (text) => {
    let updated = [...formData.privacyPreferences];
    if (updated.includes(text)) {
      updated = updated.filter((item) => item !== text);
    } else {
      updated.push(text);
    }
    setFormData((prev) => ({ ...prev, privacyPreferences: updated }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBackendError("");
    try {
      const response = await axios.post("http://localhost/admin/index.php/Api/create_institute_account", {
        ...formData,
        selectedTypes,
        otherTypeText: formData.otherType,
      }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.data.status === "200") {
        navigate("/profile");
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
            {showOtherInput && (
              <input
                type="text"
                placeholder="Write type"
                className="text-input small"
                name="otherType"
                value={formData.otherType}
                onChange={handleChange}
              />
            )}
          </div>

          <label>Name of Institution:</label>
          <select className="text-input" name="institutionName" onChange={handleChange}>
            <option value="">Search your name</option>
          </select>

          <label>Add Institution Name:</label>
          <div className="flex-row">
            <input type="checkbox" />
            <input
              type="text"
              placeholder="Write your institution name"
              className="text-input"
              name="addInstitutionName"
              value={formData.addInstitutionName}
              onChange={handleChange}
            />
          </div>

          <label>Name of Tutor:</label>
          <input
            type="text"
            placeholder="Name of Tutor"
            className="text-input"
            name="tutorName"
            value={formData.tutorName}
            onChange={handleChange}
          />

          <label>Name of Consultant:</label>
          <input
            type="text"
            placeholder="Name of Consultant"
            className="text-input"
            name="consultantName"
            value={formData.consultantName}
            onChange={handleChange}
          />

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
            {["Contact me on mobile for education products",
              "Contact me via email for education products",
              "Send me Aadhyayan Newsletter email",
              "Yes, I have read and consent to Privacy Policy & Terms",
              "I agree to be contacted for promotional purposes"].map((text, i) => (
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
          <button type="submit" className="submit-btn">Create your account</button>
          <button type="button" className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default InstitutionAccountForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./InstitutionAccountForm.css";

// const InstitutionAccountForm = () => {
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [showOtherInput, setShowOtherInput] = useState(false);
//   const [formData, setFormData] = useState({
//     institutionName: "",
//     addInstitutionName: "",
//     tutorName: "",
//     consultantName: "",
//     address: "",
//     country: "",
//     city: "",
//     district: "",
//     pincode: "",
//     isdCode: "+91",
//     mobile: "",
//     otherType: "",
//     privacyPreferences: []
//   });
//   const [backendError, setBackendError] = useState("");
//   const [formErrors, setFormErrors] = useState({});
//   const navigate = useNavigate();

//   const handleTypeChange = (type) => {
//     let updated = [...selectedTypes];
//     if (updated.includes(type)) {
//       updated = updated.filter((t) => t !== type);
//       if (type === "Other") setShowOtherInput(false);
//     } else {
//       updated.push(type);
//       if (type === "Other") setShowOtherInput(true);
//     }
//     setSelectedTypes(updated);
//   };

//   const handlePrivacyChange = (text) => {
//     let updated = [...formData.privacyPreferences];
//     if (updated.includes(text)) {
//       updated = updated.filter((item) => item !== text);
//     } else {
//       updated.push(text);
//     }
//     setFormData((prev) => ({ ...prev, privacyPreferences: updated }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (selectedTypes.length === 0) {
//       errors.institutionType = "Please select at least one institution type.";
//     }
//     if (!formData.address.trim()) errors.address = "Address is required.";
//     if (!formData.country.trim()) errors.country = "Country is required.";
//     if (!formData.city.trim()) errors.city = "City is required.";
//     if (!formData.district.trim()) errors.district = "District is required.";
//     if (!formData.pincode.trim()) errors.pincode = "Pin code is required.";
//     if (!formData.mobile.trim()) errors.mobile = "Mobile number is required.";
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setBackendError("");
//     if (!validateForm()) return;
//     try {
//       const response = await axios.post("http://localhost/admin/index.php/Api/create_institute_account", {
//         ...formData,
//         selectedTypes,
//         otherTypeText: formData.otherType,
//       }, {
//         headers: { "Content-Type": "application/json" }
//       });

//       if (response.data.status === "200") {
//         navigate("/profile");
//       } else {
//         setBackendError(response.data.msg || "Submission failed");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setBackendError("Server error. Try again later.");
//     }
//   };

//   return (
//     <div className="institution-form-wrapper">
//       <form className="institution-form" onSubmit={handleSubmit}>
//         <h2>Institution Registration</h2>

//         <div className="form-grid">
//           <label className="full-label">Institution Type*:</label>
//           <div className="checkbox-group full-width">
//             {["University", "College", "ITI / Vocational", "Coaching Center", "Tutor", "Consultant", "Other"].map((type) => (
//               <label key={type} className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   checked={selectedTypes.includes(type)}
//                   onChange={() => handleTypeChange(type)}
//                 />
//                 {type}
//               </label>
//             ))}
//             {showOtherInput && (
//               <input
//                 type="text"
//                 placeholder="Write type"
//                 className="text-input small"
//                 name="otherType"
//                 value={formData.otherType}
//                 onChange={handleChange}
//               />
//             )}
//             {formErrors.institutionType && <p className="error-message">{formErrors.institutionType}</p>}
//           </div>

//           <label>Name of Institution:</label>
//           <select className="text-input" name="institutionName" onChange={handleChange}>
//             <option value="">Search your name</option>
//           </select>

//           <label>Add Institution Name:</label>
//           <div className="flex-row">
//             <input type="checkbox" />
//             <input
//               type="text"
//               placeholder="Write your institution name"
//               className="text-input"
//               name="addInstitutionName"
//               value={formData.addInstitutionName}
//               onChange={handleChange}
//             />
//           </div>

//           <label>Name of Tutor:</label>
//           <input
//             type="text"
//             placeholder="Name of Tutor"
//             className="text-input"
//             name="tutorName"
//             value={formData.tutorName}
//             onChange={handleChange}
//           />

//           <label>Name of Consultant:</label>
//           <input
//             type="text"
//             placeholder="Name of Consultant"
//             className="text-input"
//             name="consultantName"
//             value={formData.consultantName}
//             onChange={handleChange}
//           />

//           <label>Address*:</label>
//           <input
//             type="text"
//             className="text-input"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//           {formErrors.address && <p className="error-message">{formErrors.address}</p>}

//           <label>Country*:</label>
//           <input
//             type="text"
//             className="text-input"
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//           />
//           {formErrors.country && <p className="error-message">{formErrors.country}</p>}

//           <label>City*:</label>
//           <input
//             type="text"
//             className="text-input"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//           />
//           {formErrors.city && <p className="error-message">{formErrors.city}</p>}

//           <label>District*:</label>
//           <input
//             type="text"
//             className="text-input"
//             name="district"
//             value={formData.district}
//             onChange={handleChange}
//           />
//           {formErrors.district && <p className="error-message">{formErrors.district}</p>}

//           <label>Pin Code*:</label>
//           <input
//             type="text"
//             className="text-input"
//             name="pincode"
//             value={formData.pincode}
//             onChange={handleChange}
//           />
//           {formErrors.pincode && <p className="error-message">{formErrors.pincode}</p>}

//           <label>ISD Code & Mobile:</label>
//           <div className="flex-row">
//             <select
//               className="text-input small"
//               name="isdCode"
//               value={formData.isdCode}
//               onChange={handleChange}
//             >
//               <option value="+91">+91</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               className="text-input"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//           </div>
//           {formErrors.mobile && <p className="error-message">{formErrors.mobile}</p>}

//           <label className="full-label">Privacy Settings:</label>
//           <div className="privacy-group full-width">
//             {["Contact me on mobile for education products",
//               "Contact me via email for education products",
//               "Send me Aadhyayan Newsletter email",
//               "Yes, I have read and consent to Privacy Policy & Terms",
//               "I agree to be contacted for promotional purposes"].map((text, i) => (
//               <label key={i} className="checkbox-label">
//                 <input
//                   type="checkbox"
//                   checked={formData.privacyPreferences.includes(text)}
//                   onChange={() => handlePrivacyChange(text)}
//                 />
//                 {text}
//               </label>
//             ))}
//           </div>
//         </div>

//         {backendError && <p className="error-message">{backendError}</p>}

//         <div className="form-buttons">
//           <button type="submit" className="submit-btn">Create your account</button>
//           <button type="button" className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InstitutionAccountForm;
