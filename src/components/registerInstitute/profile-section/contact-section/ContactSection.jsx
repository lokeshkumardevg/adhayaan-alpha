import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContactSection.css";

const ContactSection = () => {
  const userdat = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [contact, setContact] = useState({
    user_id:userdat.user_id.id,
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

  const [records, setRecords] = useState([]); // For table view

  useEffect(() => {
    fetchContact();
    fetchAllRecords();
  }, []);

  const fetchContact = async () => {
    try {
      const res = await axios.get("http://localhost/admin/index.php/Api/save_contact_section"); // 🔁 adjust endpoint
      if (res.data) {
        setContact(res.data);
      }
    } catch (err) {
      console.error("Failed to load contact data", err);
    }
  };

  const fetchAllRecords = async () => {
    try {
      const res = await axios.get("http://localhost/admin/index.php/Api/save_contact_section"); // 🔁 adjust endpoint
      if (res.data) {
        setRecords(res.data);
      }
    } catch (err) {
      console.error("Failed to load records", err);
    }
  };

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  
  const handleSave = async () => {
    try {
    const res=  await axios.post("http://localhost/admin/index.php/Api/save_contact_section", contact);

      if (res.data.status === "200") {
        alert("Saved successfully");
  
      }
    } catch (err) {
      console.error("Save error:", err);
      
    }
  };


  return (
    <div className="section-wrapper contact-form-wrapper">
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses",
          "Coaching Center", "Tutor", "Consultants", "Social Media",
          "Photos", "Accolades", "Management", "Contact"
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
        <button className="cancel-btn" onClick={() => fetchContact()}>Cancel</button>
      </div>

      <div className="image-preview">
        <img src="/contact1.png" alt="Preview 1" />
        <img src="/contact2.png" alt="Preview 2" />
        <img src="/contact3.png" alt="Preview 3" />
      </div>

      {/* Display all records in a table */}
      <div className="record-table">
        <h4>Contact Records</h4>
        <table>
          <thead>
            <tr>
              <th>Address</th>
              <th>City</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td>{r.address}</td>
                <td>{r.city}</td>
                <td>{r.phone}</td>
                <td>{r.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactSection;
