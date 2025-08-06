import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import axios from "axios";
import "./ProfileView.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ProfileView = () => {
  const profileRef = useRef();
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user] = useState(
    storedUser || {
      name: "Admin",
      type: "Tutor",
      email: "admin@gmail.com",
      username: "jnicsrofficial",
    }
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const [profile, setProfile] = useState(null);

  const downloadPDF = () => {
    const element = profileRef.current;
    html2pdf().from(element).save("Institution_Profile.pdf");
  };

  const handleLogout = () => {
    localStorage.removeItem("AdhyayanAuth");
    navigate("/login-institute", { replace: true });
  };

  const goBack = () => {
    navigate("/dashboardnew"); // adjust if your dashboard route is different
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = storedUser?.user_id?.id;
        const res = await axios.get(
          `http://localhost/admin/index.php/Api/get_profile_data?user_id=${userId}`
        );
        if (res.data.status === "200") {
          const data = res.data.data;
          data.study_modes = JSON.parse(data.study_modes || "[]");
          data.streams = JSON.parse(data.streams || "[]");
          data.courses = JSON.parse(data.courses || "[]");
          setProfile(data);
        }
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    fetchProfile();

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <>
      <div className="top-navbar">
        <div className="logo" onClick={goBack} style={{ cursor: "pointer" }}>
          <FaArrowLeft style={{ marginRight: 10 }} /> Back
        </div>
        <div className="navbar-center-title">Institution Profile View</div>

        <div className="menu-dropdown" ref={menuRef}>
          <div className="profile-avatar" onClick={() => setMenuOpen(!menuOpen)}>
            <img
              src={user?.profileImage || "https://i.pravatar.cc/150?img=3"}
              alt="Profile"
            />
          </div>

          {menuOpen && (
            <div className="dropdown-box">
              <div className="profile-info">
                <img
                  src={user?.profileImage || "https://i.pravatar.cc/150?img=3"}
                  alt="User"
                />
                <div>
                  <h4>{user?.user_id?.username || "Admin"}</h4>
                  <p>{user?.email || "user@gmail.com"}</p>
                </div>
              </div>
              <div className="logout" onClick={handleLogout}>
                <i className="fas fa-power-off"></i> Logout
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="form-container">
        <div className="top-bar">
          <h2>{profile.added_institution_name || "Institution Name"}</h2>
          <img
            src={
              profile.profile_image
                ? `http://localhost/admin/instituteprofile/${profile.profile_image}`
                : "/default-logo.png"
            }
            alt="Institution Logo"
            className="profile-pic"
          />
        </div>

        <div ref={profileRef}>
          <table className="profile-table">
            <tbody>
              <tr><td colSpan="2" className="section">About Institution</td></tr>
              <tr><td colSpan="2">{profile.about || "Not provided"}</td></tr>

              <tr><td colSpan="2" className="section">Institution Details</td></tr>
              <tr><td>Year of Establishment:</td><td>{profile.year || "N/A"}</td></tr>
              <tr><td>Study Modes:</td><td>{profile.study_modes.join(", ")}</td></tr>
              <tr><td>Streams:</td><td>{profile.streams.join(", ")}</td></tr>

              <tr><td colSpan="2" className="section">Courses</td></tr>
              {profile.courses.map((course, idx) => (
                <tr key={idx}><td>Course:</td><td>{course}</td></tr>
              ))}

              <tr><td colSpan="2" className="section">Social Media</td></tr>
              <tr><td>Facebook:</td><td>{profile.facebook || "N/A"}</td></tr>
              <tr><td>LinkedIn:</td><td>{profile.linkedin || "N/A"}</td></tr>

              <tr><td colSpan="2" className="section">Management</td></tr>
              <tr><td>Head Name:</td><td>{profile.head_name || "N/A"}</td></tr>
              <tr><td>Alternate Mobile:</td><td>{profile.alternate_mobile || "N/A"}</td></tr>

              <tr><td colSpan="2" className="section">Contact</td></tr>
              <tr><td>Address:</td><td>{profile.address || "N/A"}</td></tr>
              <tr><td>City:</td><td>{profile.city || "N/A"}</td></tr>
              <tr><td>Country:</td><td>{profile.country || "N/A"}</td></tr>
              <tr><td>Email:</td><td>{profile.support_email || "N/A"}</td></tr>
              <tr><td>Mobile:</td><td>{profile.mobile || "N/A"}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="btn-group">
          <button onClick={downloadPDF}>Download as PDF</button>
        </div>
      </div>
    </>
  );
};

export default ProfileView;
