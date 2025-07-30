import React from "react";
import "./ContactSection.css";

const ContactSection = ({ formData, setFormData }) => {
  return (
    <div className="section">
      <h3>Contact Information</h3>

      <label>Alternate Mobile Number</label>
      <input
        type="text"
        name="alternateMobile"
        value={formData.alternateMobile || ""}
        onChange={(e) => setFormData({ ...formData, alternateMobile: e.target.value })}
      />

      <label>Support Email</label>
      <input
        type="email"
        name="supportEmail"
        value={formData.supportEmail || ""}
        onChange={(e) => setFormData({ ...formData, supportEmail: e.target.value })}
      />
    </div>
  );
};

export default ContactSection;
