// src/components/ProfileView.jsx
import React, { useState, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProfileView.css";

const ProfileView = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Dummy user
  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user] = useState(
    storedUser || {
      name: "Admin",
      type: "Institution",
      email: "admin@gmail.com",
      username: "jnicsrofficial",
    }
  );

  const goBack = () => {
    navigate("/dashboardnew");
  };

  const handleLogout = () => {
    localStorage.removeItem("AdhyayanAuth");
    navigate("/login-institute", { replace: true });
  };

  // Dummy profile data (screenshot जैसा)
  const profile = {
    username: "jnicsrofficial",
    institutionName: "JNICSER Foundation",
    about:
      "Janadhar Institute of Corporate Social Responsibility (JNICSER) believes in technology-empowered projects to do great things in this world. We also believe in practical education that brings measurable results.",
    year: "2015",
    studyType: "College",
    collegeType: "Autonomous",
    noOfCourses: "12",
    streams: ["Arts / Humanities", "Business Management", "Social Science"],
    totalCourses: [
      { name: "MASTER'S BUSINESS ADMINISTRATION IN FINANCE (MBA-F)", duration: "2 YEAR" },
      { name: "MASTER'S BUSINESS ADMINISTRATION (MBA)", duration: "2 YEAR" },
    ],
    social: {
      website: "www.jnicsr.org",
      facebook: "www.facebook.com/jnicsr.official",
      linkedin: "www.linkedin.com/in/jnicsr.official",
      youtube: "www.youtube.com/@jnicsr",
    },
    accolades: ["NAAC", "AICTE", "NMC"],
    management: {
      chairman: "Nishikant Kumar",
      chairmanEmail: "nishikantjnicsr@gmail.com",
      viceChairman: "Vikas Kumar",
      viceChairmanEmail: "jnicsrproject@gmail.com",
    },
    contact: {
      address: "306, Northern Sunrise Plaza, Vasundhara Enclave",
      city: "Delhi",
      pin: "110096",
      phone: "011-35018790",
      email: "jnicsrproject@gmail.com",
      officialEmail: "jnicsrproject@gmail.com",
    },
  };

  return (
    <>
      {/* Navbar */}
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
                  <h4>{user?.username || "Admin"}</h4>
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

      {/* Profile Content */}
      <div className="profile-view-container">
        {/* Header Image */}
        <div className="cover-photo">
          <img
            src={
              profile?.cover_image
                ? `http://localhost/admin/instituteprofile/${profile.cover_image}`
                : "https://via.placeholder.com/900x200.png?text=Cover+Image"
            }
            alt="Cover"
          />
        </div>

        <div className="profile-header">
          <div className="profile-logo">
            <img
              src={
                profile?.profile_image
                  ? `http://localhost/admin/instituteprofile/${profile.profile_image}`
                  : "https://via.placeholder.com/150.png?text=Logo"
              }
              alt="Institution Logo"
            />
          </div>
          <div>
            <h3>{profile?.username || "demo_user"}</h3>
            <h2>{profile?.added_institution_name || "Institution Name"}</h2>
          </div>
        </div>


        {/* Table Content */}
        <table className="profile-table">
          <tbody>
            <tr>
              <td colSpan="2" className="section-title">About</td>
            </tr>
            <tr>
              <td>About Institution</td>
              <td>{profile.about}</td>
            </tr>

            <tr>
              <td>Year of Establishment</td>
              <td>{profile.year}</td>
            </tr>
            <tr>
              <td>Study Type</td>
              <td>{profile.studyType}</td>
            </tr>
            <tr>
              <td>College Type</td>
              <td>{profile.collegeType}</td>
            </tr>
            <tr>
              <td>No. of Courses</td>
              <td>{profile.noOfCourses}</td>
            </tr>

            <tr>
              <td colSpan="2" className="section-title">Streams</td>
            </tr>
            {profile.streams.map((stream, idx) => (
              <tr key={idx}>
                <td>Stream {idx + 1}</td>
                <td>{stream}</td>
              </tr>
            ))}

            <tr>
              <td colSpan="2" className="section-title">Total Courses</td>
            </tr>
            {profile.totalCourses.map((course, idx) => (
              <tr key={idx}>
                <td>{course.name}</td>
                <td>Duration : {course.duration}</td>
              </tr>
            ))}

            <tr>
              <td colSpan="2" className="section-title">Social Media</td>
            </tr>
            <tr>
              <td>Website</td>
              <td>{profile.social.website}</td>
            </tr>
            <tr>
              <td>Facebook</td>
              <td>{profile.social.facebook}</td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>{profile.social.linkedin}</td>
            </tr>
            <tr>
              <td>YouTube</td>
              <td>{profile.social.youtube}</td>
            </tr>

            <tr>
              <td colSpan="2" className="section-title">Accolades</td>
            </tr>
            <tr>
              <td>Accolades</td>
              <td>{profile.accolades.join(", ")}</td>
            </tr>

            <tr>
              <td colSpan="2" className="section-title">Management</td>
            </tr>
            <tr>
              <td>Chairman</td>
              <td>{profile.management.chairman} | Email: {profile.management.chairmanEmail}</td>
            </tr>
            <tr>
              <td>Vice Chairman</td>
              <td>{profile.management.viceChairman} | Email: {profile.management.viceChairmanEmail}</td>
            </tr>

            <tr>
              <td colSpan="2" className="section-title">Contact</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{profile.contact.address}</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{profile.contact.city}</td>
            </tr>
            <tr>
              <td>PIN</td>
              <td>{profile.contact.pin}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{profile.contact.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profile.contact.email}</td>
            </tr>
            <tr>
              <td>Official Email</td>
              <td>{profile.contact.officialEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProfileView;
