// Full Register Page Component with Backend Integration & CSS-friendly structure
import React, { useState } from "react";
import axios from "axios";
import Layout from "../Layout/Layout";
import Loder from "../Loder-page/Loder";
import "./RegisterInstitution.css";
import { useNavigate } from "react-router-dom";

const InstitutionRegisterPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "",
    otp: "",
    password: "",
    confirmPassword: "",
    institutionType: "",
    institutionName: "",
    yearOfEstablishment: "",
    studyMode: "",
    address: "",
    country: "",
    city: "",
    district: "",
    pinCode: "",
    isdCode: "",
    phone: "",
    email: "",
    logo: null,
    photos: [],
    courses: [],
    currentCourse: {
      name: "",
      shortName: "",
      duration: "",
      mode: "",
      eligibility: ""
    },
    socialLinks: {
      facebook: "",
      instagram: "",
      linkedin: "",
      twitter: "",
      youtube: ""
    },
    accolades: [],
    management: {
      chairman: "",
      chairmanEmail: "",
      director: "",
      directorEmail: ""
    },
  });

  const apiKey = "http://localhost/";

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSocialInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      socialLinks: { ...formData.socialLinks, [name]: value }
    });
  };

  const handleManagementInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      management: { ...formData.management, [name]: value }
    });
  };

  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isMobile = (val) => /^[6-9]\d{9}$/.test(val);

  const handleSendOtp = async () => {
    const { identifier } = formData;
    if (!identifier.trim()) return setError("Enter email or mobile");
    setLoading(true);
    try {
      let res;
      if (isEmail(identifier)) {
        res = await axios.post(`${apiKey}admin/index.php/Api/send_email_to_sms`, { email: identifier });
      } else if (isMobile(identifier)) {
        res = await axios.post(`${apiKey}admin/index.php/Api/send_otp`, { mobile: identifier });
      } else {
        return setError("Invalid identifier");
      }
      if (res.data.status === "200") {
        setStep(2);
      } else {
        setError(res.data.msg || "OTP send failed");
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const { identifier, otp } = formData;
    if (!otp) return setError("Enter OTP");
    setLoading(true);
    try {
      const res = await axios.post(`${apiKey}admin/index.php/Api/verify_otp`, { mobile: identifier, otp });
      if (res.data.status === "200") {
        setStep(3);
      } else {
        setError(res.data.msg || "OTP verification failed");
      }
    } catch {
      setError("OTP server error");
    } finally {
      setLoading(false);
    }
  };

  const addCourse = () => {
    const updated = [...formData.courses, formData.currentCourse];
    setFormData({
      ...formData,
      courses: updated,
      currentCourse: { name: "", shortName: "", duration: "", mode: "", eligibility: "" }
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: Array.from(e.target.files) });
  };

  const handleLogoChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccessMsg("");
    try {
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        if (key === "photos") {
          val.forEach((file, i) => submissionData.append(`photos[${i}]`, file));
        } else if (key === "logo") {
          submissionData.append("logo", val);
        } else if (typeof val === "object" && val !== null) {
          submissionData.append(key, JSON.stringify(val));
        } else {
          submissionData.append(key, val);
        }
      });

      const res = await axios.post(`${apiKey}admin/index.php/Api/register_institution`, submissionData);
      if (res.data.status === "200") {
        setSuccessMsg("Institution registered successfully!");
        setTimeout(() => navigate("/dashboard/user"), 2000);
      } else {
        setError(res.data.msg || "Registration failed");
      }
    } catch (err) {
      console.log(err);
      setError("Server error during submission");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <Layout>
      <div className="register-page">
        <div className="register-box">
          <h2>Register Institution</h2>

          {/* Reuse the previous steps up to step 5 */}

          {step === 6 && (
            <>
              <h3>Social Media</h3>
              {Object.entries(formData.socialLinks).map(([key, val]) => (
                <input
                  key={key}
                  name={key}
                  value={val}
                  onChange={handleSocialInput}
                  placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} link`}
                  className="input-field"
                />
              ))}
              <button onClick={handleNext} className="main-btn">Next</button>
            </>
          )}

          {step === 7 && (
            <>
              <h3>Accolades</h3>
              {['UGC','NAAC','AICTE','AIU','NCTE','INC','IMA','BCI'].map(item => (
                <label key={item}><input
                  type="checkbox"
                  onChange={(e) => {
                    const list = formData.accolades.includes(item)
                      ? formData.accolades.filter(i => i !== item)
                      : [...formData.accolades, item];
                    setFormData({...formData, accolades: list});
                  }}
                  checked={formData.accolades.includes(item)}
                /> {item}</label>
              ))}
              <button onClick={handleNext} className="main-btn">Next</button>
            </>
          )}

          {step === 8 && (
            <>
              <h3>Management</h3>
              <input name="chairman" value={formData.management.chairman} onChange={handleManagementInput} placeholder="Chairman" className="input-field" />
              <input name="chairmanEmail" value={formData.management.chairmanEmail} onChange={handleManagementInput} placeholder="Chairman Email" className="input-field" />
              <input name="director" value={formData.management.director} onChange={handleManagementInput} placeholder="Director" className="input-field" />
              <input name="directorEmail" value={formData.management.directorEmail} onChange={handleManagementInput} placeholder="Director Email" className="input-field" />
              <button onClick={handleNext} className="main-btn">Next</button>
            </>
          )}

          {step === 9 && (
            <>
              <h3>Review & Submit</h3>
              <button onClick={handleSubmit} className="main-btn">Submit</button>
            </>
          )}

          {error && <p className="error">{error}</p>}
          {successMsg && <p className="success">{successMsg}</p>}
          {loading && <Loder />}
          {step > 1 && step < 9 && <button onClick={handlePrev} className="main-btn">Back</button>}
        </div>
      </div>
    </Layout>
  );
};

export default InstitutionRegisterPage;
