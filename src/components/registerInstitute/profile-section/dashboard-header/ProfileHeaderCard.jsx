import React from "react";
import { FaPen } from "react-icons/fa";
import "./ProfileHeaderCard.css";

const ProfileHeaderCard = ({ user }) => {
  return (
    <div className="profile-header-wrapper">
      <div className="profile-note">
        <strong>Complete your profile</strong><br />
        Your profile is currently incomplete. Please update your profile to receive better responses and connect
      </div>

      <div className="profile-main-box">
        <img src="/institution-logo.png" alt="Logo" className="institution-logo-left" />

        <div className="cover-box">
          <div className="institution-logo-circle">
            <span>Institution<br />Logo</span>
            <FaPen className="edit-icon" />
          </div>

          <div className="cover-text">
            <h3>Cover Photo</h3>
            <em>(yaha bhe cover pic upload kerna hoga)</em>
          </div>

          <div className="edit-profile-btn">Edit Profile</div>
        </div>

        <div className="profile-username">
          <strong>Username ({user?.username || "jnicsrofficial"})</strong>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;
