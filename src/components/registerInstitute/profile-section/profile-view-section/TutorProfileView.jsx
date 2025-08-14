import React, { useState, useRef } from "react";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./TutorProfileView.css";

const TutorProfileView = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user] = useState(
    storedUser || {
      name: "Admin",
      type: "Tutor",
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

  const subjects = [
    { class: "Class 6", subjects: "Maths, Science, SST, English, Hindi" },
    { class: "Class 7", subjects: "Maths, Science, SST, English, Hindi" },
    { class: "Class 8", subjects: "Maths, Science, SST, English, Hindi" },
    {
      class: "Class 9",
      subjects: "Maths, Science, Chemistry, Biology, Information Technology",
    },
    {
      class: "Class 10",
      subjects: "Maths, Science, Chemistry, Biology, Information Technology",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="top-navbar">
        <div className="logo" onClick={goBack} style={{ cursor: "pointer" }}>
          <FaArrowLeft style={{ marginRight: 10 }} /> Back
        </div>
        <div className="navbar-center-title">Tutor Profile View</div>

        <div className="menu-dropdown" ref={menuRef}>
          <div
            className="profile-avatar"
            onClick={() => setMenuOpen(!menuOpen)}
          >
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

      {/* Profile Content */}
      <div className="tutor-container">
        <div className="profile-header">
          <img src="/cover.jpg" alt="Cover" className="cover-img" />
          <img src="/profile.jpg" alt="Tutor" className="profile-img" />
          <div className="name-section">
            <h2>jnicsrofficial</h2>
            <h3>Rajesh Kumar</h3>
          </div>
        </div>

        <table className="profile-table">
          <tbody>
            {/* About */}
            <tr>
              <td colSpan="2" className="section-heading">About</td>
            </tr>
            <tr>
              <td>About Institution:</td>
              <td>I am a teacher for 8 to 10 standard, from Delhi</td>
            </tr>
            <tr>
              <td>Year of Establishment:</td>
              <td>2014</td>
            </tr>
            <tr>
              <td>Study Type:</td>
              <td>Regular</td>
            </tr>

            {/* Tutor */}
            <tr>
              <td colSpan="2" className="section-heading">Tutor</td>
            </tr>
            <tr><td>Study Mode:</td><td>Student Home</td></tr>
            <tr><td>Demo Classes:</td><td>Yes</td></tr>
            <tr><td>Charge for Demo:</td><td>No</td></tr>
            <tr><td>No. of Tuitions in Month:</td><td>12</td></tr>
            <tr><td>Preferred Location:</td><td>Karol Bagh</td></tr>
            <tr><td>Pin Code:</td><td>110005</td></tr>
            <tr><td>Max Distance:</td><td>4KM</td></tr>
            <tr><td>Experience:</td><td>I am a teacher for 8 to 10 standard, teach all subjects including science and mathematics.</td></tr>
            <tr><td>Languages:</td><td>English, Hindi</td></tr>
            <tr><td>You are a:</td><td>Full Time Tutor</td></tr>

            {/* Subjects */}
            <tr>
              <td colSpan="2" className="section-heading">Subjects You Teach</td>
            </tr>
            <tr>
              <td colSpan="2">
                {subjects.map((subj, index) => (
                  <div key={index} className="subject-row">
                    <span className="class">{subj.class}</span>
                    <span className="subjects">{subj.subjects}</span>
                    <span className="actions">
                      <FaEdit className="icon edit" />
                      <FaTrash className="icon delete" />
                    </span>
                  </div>
                ))}
              </td>
            </tr>

            {/* Social Media */}
            <tr>
              <td colSpan="2" className="section-heading">Social Media</td>
            </tr>
            <tr><td>Website:</td><td>www.facebook.com/rajkumar.official</td></tr>
            <tr><td>Facebook:</td><td>rajkumar.official</td></tr>
            <tr><td>Instagram:</td><td>rajeshkumar</td></tr>

            {/* Accolades */}
            <tr>
              <td colSpan="2" className="section-heading">Accolades</td>
            </tr>
            <tr><td colSpan="2">Best Teacher Award 2018</td></tr>
            <tr><td colSpan="2">Student got 100% marks in Physics class 12</td></tr>

            {/* Management */}
            <tr>
              <td colSpan="2" className="section-heading">Management</td>
            </tr>
            <tr><td colSpan="2">—</td></tr>

            {/* Contact */}
            <tr>
              <td colSpan="2" className="section-heading">Contact</td>
            </tr>
            <tr><td>Chairman:</td><td>N/A</td></tr>
            <tr><td>Email:</td><td>rajeshkumar@gmail.com</td></tr>
            <tr><td>Address:</td><td>306, Northern Sunrise Plaza, New Delhi</td></tr>
            <tr><td>Phone:</td><td>011-23456789</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TutorProfileView;
