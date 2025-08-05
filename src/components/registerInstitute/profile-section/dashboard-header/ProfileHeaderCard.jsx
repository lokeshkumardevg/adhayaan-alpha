import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaPen } from "react-icons/fa";
import "./ProfileHeaderCard.css";

const ProfileHeaderCard = () => {
  const [profile, setProfile] = useState({});
  const fileLogoRef = useRef(null);
  const fileCoverRef = useRef(null);
  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user] = useState(storedUser || {
    name: "Demo User",
    type: "Tutor",
    email: "admin@gmail.com",
    username: "jnicsrofficial",
    profileImage: "",
  });

  const baseUrl = "http://localhost/admin/instituteprofile/";
const [isEditingUsername, setIsEditingUsername] = useState(false);
const [newUsername, setNewUsername] = useState("");

const handleUsernameSave = async () => {
  try {
    const res = await axios.post(
      "http://localhost/admin/index.php/Api/update_profile_username",
      {
        user_id: user.user_id.id,
        username: newUsername,
      }
    );

    if (res.data.status === 200) {
      setProfile((prev) => ({ ...prev, username: newUsername }));
      setIsEditingUsername(false);
    }
  } catch (error) {
    console.error("Username update failed:", error);
  }
};

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        `http://localhost/admin/index.php/Api/get_profile_header/${user.user_id.id}`
      );
      if (res.data.status === 200) setProfile(res.data.data);
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  const handleUpload = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", type);
    formData.append("user_id", user.user_id.id);

    try {
      const res = await axios.post(
        "http://localhost/admin/index.php/Api/upload_profile_image",
        formData
      );
      if (res.data.status === 200) {
        setProfile((prev) => ({ ...prev, [type]: res.data.file }));
      }
    } catch (err) {
      console.error("Upload Error:", err);
    }
  };

  return (
    <div className="profile-header-wrapper">
      <div className="profile-note">
        <strong>Complete your profile</strong>
        <br />
        Your profile is currently incomplete. Please update your profile to
        receive better responses and connect.
      </div>

      <div className="profile-main-box">
        {/* Cover Image */}
        <div className="cover-box" onClick={() => fileCoverRef.current.click()}>
          <img
            src={
              profile.cover_photo
                ? profile.cover_photo.startsWith("http")
                  ? profile.cover_photo
                  : baseUrl + profile.cover_photo
                : "/default-cover.jpg"
            }
            alt="Cover"
            className="cover-image"
          />
          <input
            type="file"
            ref={fileCoverRef}
            hidden
            accept="image/*"
            onChange={(e) => handleUpload(e, "cover_photo")}
          />

          {/* Logo on top of cover */}
          <div
            className="institution-logo-overlay"
            onClick={(e) => {
              e.stopPropagation();
              fileLogoRef.current.click();
            }}
          >
            <img
              src={
                profile.logo
                  ? profile.logo.startsWith("http")
                    ? profile.logo
                    : baseUrl + profile.logo
                  : "/institution-logo.png"
              }
              alt="Logo"
              className="overlay-logo-img"
            />
            <FaPen className="edit-icon logo-pen" />
            <input
              type="file"
              ref={fileLogoRef}
              hidden
              accept="image/*"
              onChange={(e) => handleUpload(e, "logo")}
            />
          </div>

          <div className="cover-text">
            <h3>Cover Photo</h3>
            <em>(Click anywhere to upload)</em>
          </div>
        </div>

        <div className="profile-username">
          <strong>Username:</strong>{" "}
          {isEditingUsername ? (
            <>
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="username-input"
              />
              <button onClick={handleUsernameSave} className="save-btn">Save</button>
              <button onClick={() => setIsEditingUsername(false)} className="cancel-btn">Cancel</button>
            </>
          ) : (
            <>
              {profile.username || "jnicsrofficial"}
              <FaPen
                onClick={() => {
                  setIsEditingUsername(true);
                  setNewUsername(profile.username || "");
                }}
                className="edit-icon username-pen"
              />
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProfileHeaderCard;
