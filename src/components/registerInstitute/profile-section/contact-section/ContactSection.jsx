import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <div className="contact-container">
      <h3>Contact</h3>

      <div className="contact-grid">
        <div className="left">
          <p><strong>Address:</strong> </p>
          <p><strong>Country:</strong> </p>
          <p><strong>City:</strong> </p>
          <p><strong>District:</strong> </p>
          <p><strong>Pin Code:</strong> </p>
        </div>
        <div className="right">
          <p><strong>ISD Code:</strong> </p>
          <p><strong>Phone no:</strong> </p>
          <p><strong>Official Website:</strong> </p>
          <p><strong>Official Email:</strong> </p>
        </div>
      </div>

      <div className="button-group">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>

      <div className="image-preview">
        <img src="/contact1.png" alt="Preview 1" />
        <img src="/contact2.png" alt="Preview 2" />
        <img src="/contact3.png" alt="Preview 3" />
      </div>
    </div>
  );
};

export default ContactSection;
