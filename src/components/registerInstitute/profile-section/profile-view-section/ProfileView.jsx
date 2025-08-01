import React, { useRef } from "react";
import "./ProfileView.css";
import html2pdf from "html2pdf.js";

const ProfileView = () => {
  const profileRef = useRef();

  const downloadPDF = () => {
    const element = profileRef.current;
    html2pdf().from(element).save("Institution_Profile.pdf");
  };

  return (
    <div className="form-container">
      <div className="top-bar">
        <h2>JNICSR Foundation</h2>
        <img
          src="/default-logo.png" // Replace with dynamic photo path
          alt="Institution Logo"
          className="profile-pic"
        />
      </div>

      <div ref={profileRef}>
        <table className="profile-table">
          <tbody>
            <tr><td colSpan="2" className="section">About Institution</td></tr>
            <tr><td colSpan="2">JNICSR believes in corporate social responsibility...</td></tr>

            <tr><td colSpan="2" className="section">Institution Details</td></tr>
            <tr><td>Year of Establishment:</td><td>2015</td></tr>
            <tr><td>Study Mode:</td><td>Online</td></tr>

            <tr><td colSpan="2" className="section">College</td></tr>
            <tr><td>Ownership:</td><td>Autonomous</td></tr>
            <tr><td>Total Teaching Staff:</td><td>12</td></tr>
            <tr><td>Total Non-Teaching Staff:</td><td>3</td></tr>

            <tr><td colSpan="2" className="section">Streams</td></tr>
            <tr><td colSpan="2">Arts / Humanities, Business Managements</td></tr>

            <tr><td colSpan="2" className="section">Courses</td></tr>
            <tr><td>Total:</td><td>7</td></tr>
            <tr><td>Degree:</td><td>2</td></tr>
            <tr><td>Diploma:</td><td>3</td></tr>
            <tr><td>Certificate:</td><td>2</td></tr>

            <tr><td colSpan="2" className="section">Course Details</td></tr>
            <tr><td>Course:</td><td>MBA in Finance (2 Yrs)</td></tr>
            <tr><td>Course:</td><td>BBA (3 Yrs)</td></tr>

            <tr><td colSpan="2" className="section">Social Media</td></tr>
            <tr><td>Facebook:</td><td>facebook.com/jnicsrofficial</td></tr>
            <tr><td>Twitter:</td><td>twitter.com/jnicsrofficial</td></tr>

            <tr><td colSpan="2" className="section">Management</td></tr>
            <tr><td>Chairman:</td><td>Nikhil Kumar</td></tr>
            <tr><td>Vice Chairman:</td><td>Sanjay Jain</td></tr>

            <tr><td colSpan="2" className="section">Contact</td></tr>
            <tr><td>Address:</td><td>132, Vasundhara Enclave, Delhi</td></tr>
            <tr><td>Email:</td><td>contact@jnicsr.com</td></tr>
          </tbody>
        </table>
      </div>

      <div className="btn-group">
        <button onClick={downloadPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default ProfileView;
