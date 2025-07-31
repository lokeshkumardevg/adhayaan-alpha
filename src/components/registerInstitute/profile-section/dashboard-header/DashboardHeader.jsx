import React from "react";
import "./DashboardHeader.css";

const DashboardHeader = ({ user, onEdit }) => {
  return (
    <div className="dashboard-header">
      <div className="profile-alert">
        <strong>Complete your profile</strong>
        <p>Your profile is currently incomplete. Please update your profile to receive better responses and connect</p>
      </div>

      <div className="cover-section">
        <div className="logo-box">
          <img
            src={user?.logo || "/default-logo.png"}
            alt="Institution Logo"
            className="institution-logo"
          />
          <div className="edit-icon">✎</div>
        </div>

        <div className="cover-photo-box">
          {user?.coverPhoto ? (
            <img
              src={user.coverPhoto}
              alt="Cover"
              className="cover-photo"
            />
          ) : (
            <div className="cover-placeholder">
              Cover Photo <br />
              <em>(yaha bhe cover pic upload kerna hoga)</em>
            </div>
          )}
        </div>

        <div className="edit-profile-link" onClick={onEdit}>
          Edit Profile
        </div>
      </div>

      <div className="username-display">
        <strong>Username ({user?.username || "user"})</strong>
      </div>
    </div>
  );
};

export default DashboardHeader;
