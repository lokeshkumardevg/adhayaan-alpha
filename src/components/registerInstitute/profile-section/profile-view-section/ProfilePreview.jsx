import React from "react";
import "./ProfilePreview.css";

const ProfilePreview = ({ profile }) => {
  return (
    <div className="preview-container">
      <h2>Profile Preview</h2>
      <p><strong>Institution:</strong> {profile.institutionName}</p>
      <p><strong>Address:</strong> {profile.address}, {profile.city}, {profile.country}</p>
      <p><strong>Mobile:</strong> {profile.mobile}</p>
      <p><strong>Email:</strong> {profile.supportEmail}</p>

      <div className="preview-section">
        <h3>Courses</h3>
        <ul>
          {(profile.courses || []).map((course, i) => (
            <li key={i}>{course}</li>
          ))}
        </ul>
      </div>

      <div className="preview-section">
        <h3>Social Links</h3>
        <ul>
          {profile.facebook && <li>Facebook: {profile.facebook}</li>}
          {profile.linkedin && <li>LinkedIn: {profile.linkedin}</li>}
        </ul>
      </div>

      <div className="preview-section">
        <h3>Accolades</h3>
        <ul>
          {(profile.accolades || []).map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePreview;
