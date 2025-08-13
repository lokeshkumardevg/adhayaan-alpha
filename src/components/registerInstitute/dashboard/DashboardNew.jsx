import React, { useState, useEffect, useRef } from "react";
import AboutSection from "../profile-section/about-section/AboutSection";
import TutorSection from "../profile-section/tutor-section/TutorSection";
import UniversitySection from "../profile-section/university-section/UniversitySection";
import ConsultantSection from "../profile-section/consultant-section/ConsultantSection";
import CourseSection from "../profile-section/course-section/CourseSection";
import SocialMediaSection from "../profile-section/social-media-section/SocialMediaSection";
import PhotosSection from "../profile-section/photo-section/PhotosSection";
import AccoladeSection from "../profile-section/accoladation-section/AccoladeSection";
import ManagementSection from "../profile-section/management-section/ManagementSection";
import ContactSection from "../profile-section/contact-section/ContactSection";
import ProfileView from "../profile-section/profile-view-section/ProfileView";
import ProfileHeaderCard from "../profile-section/dashboard-header/ProfileHeaderCard";
import CollegeSection from "../profile-section/college-section/CollegeSection";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const DashboardNew = () => {
  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user, setUser] = useState(storedUser || {
    name: "Admin",
    type: "Tutor",
    email: "admin@gmail.com",
    username: "jnicsrofficial",
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    about: "",
    institutionName: "",
    address: "",
    city: "",
    country: "",
    mobile: "",
    supportEmail: "",
    facebook: "",
    linkedin: "",
    accolades: [],
    headName: "",
    alternateMobile: "",
    courses: [],
  });

  const handleLogout = () => {
    localStorage.removeItem("AdhyayanAuth");
    navigate("/login-institute", { replace: true });
  };
  const goToProfile = () => {
    navigate("/profile-view", { replace: true }); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dashboard-wrapper">
      {/* 🔹 Top Navbar */}
      <div className="top-navbar">
        <div className="logo">🎓 Aadhyayan</div>
        <div className="navbar-center-title">Institute Dashboard</div>

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
              <button  onClick={goToProfile} className="view-profile-btn">View Profile</button>
              <div className="logout" onClick={handleLogout}>
                <i className="fas fa-power-off"></i> Logout
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 🔹 Profile Header */}
      <ProfileHeaderCard
        user={{
          ...user,
          username: user?.user_id?.username || "jnicsrofficial",
        }}
      />

      {/* 🔹 Sections */}
      <div className="dashboard-sections">
        <AboutSection formData={formData} setFormData={setFormData} />

        {user?.user_id?.institution_type === "Tutor" && (
          <TutorSection formData={formData} setFormData={setFormData} />
        )}
        {user?.user_id?.institution_type === "University" && (
          <UniversitySection formData={formData} setFormData={setFormData} />
        )}
        {user?.user_id?.institution_type === "Consultant" && (
          <ConsultantSection formData={formData} setFormData={setFormData} />
        )}
        {user?.user_id?.institution_type === "Courses" && (
          <CourseSection formData={formData} setFormData={setFormData} />
        )}
        {user?.user_id?.institution_type === "College" && (
          <CollegeSection formData={formData} setFormData={setFormData} />
        )}
        <SocialMediaSection formData={formData} setFormData={setFormData} />
        <PhotosSection formData={formData} setFormData={setFormData} />
        <AccoladeSection formData={formData} setFormData={setFormData} />
        <ManagementSection formData={formData} setFormData={setFormData} />
        <ContactSection formData={formData} setFormData={setFormData} />
      </div>
    </div>
  );
};

export default DashboardNew;
