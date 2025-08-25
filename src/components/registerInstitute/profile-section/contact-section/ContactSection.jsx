import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ContactSection.css";

const MySwal = withReactContent(Swal);

// API constants
const API_BASE = "http://localhost/admin/index.php/Api";
const GET_CONTACT_URL = `${API_BASE}/get_contact_section`;
const SAVE_CONTACT_URL = `${API_BASE}/save_contact_section`;

const ContactSection = () => {
  const userdat = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
  const [contact, setContact] = useState({
    user_id: userdat,
    address: "",
    country: "",
    city: "",
    district: "",
    pinCode: "",
    isdCode: "",
    phone: "",
    website: "",
    email: "",
  });

  useEffect(() => {
    fetchContact();
  }, []);

  // Fetch saved contact details
  const fetchContact = async () => {
    try {
      const res = await axios.get(`${GET_CONTACT_URL}?user_id=${contact.user_id}`);
      if (res.data.status === "200" && res.data.data) {
        setContact((prev) => ({ ...prev, ...res.data.data }));
      }
    } catch (err) {
      console.error("Failed to load contact data", err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // Save contact info
  const handleSave = async () => {
    try {
      const res = await axios.post(SAVE_CONTACT_URL, contact);

      if (res.data.status === "200") {
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "Contact details have been updated.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: res.data.msg || "Could not save contact details.",
        });
      }
    } catch (err) {
      console.error("Save error:", err);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="section-wrapper contact-form-wrapper">
      <div className="navbar">
        {[
           "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Contact" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <h3>Contact</h3>

      <div className="contact-grid">
        <div className="left">
          <p><strong>Address:</strong><input name="address" value={contact.address} onChange={handleChange} /></p>
          <p><strong>Country:</strong><input name="country" value={contact.country} onChange={handleChange} /></p>
          <p><strong>City:</strong><input name="city" value={contact.city} onChange={handleChange} /></p>
          <p><strong>District:</strong><input name="district" value={contact.district} onChange={handleChange} /></p>
          <p><strong>Pin Code:</strong><input name="pinCode" value={contact.pinCode} onChange={handleChange} /></p>
        </div>

        <div className="right">
          <p><strong>ISD Code:</strong><input name="isdCode" value={contact.isdCode} onChange={handleChange} /></p>
          <p><strong>Phone No:</strong><input name="phone" value={contact.phone} onChange={handleChange} /></p>
          <p><strong>Website:</strong><input name="website" value={contact.website} onChange={handleChange} /></p>
          <p><strong>Email:</strong><input name="email" value={contact.email} onChange={handleChange} /></p>
        </div>
      </div>

      <div className="button-group">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={fetchContact}>Cancel</button>
      </div>

      {/* <div className="image-preview">
        <img src="/contact1.png" alt="Preview 1" />
        <img src="/contact2.png" alt="Preview 2" />
        <img src="/contact3.png" alt="Preview 3" />
      </div> */}
    </div>
  );
};

export default ContactSection;
