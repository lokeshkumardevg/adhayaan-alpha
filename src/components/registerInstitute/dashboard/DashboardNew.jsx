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
import "./Dashboard.css";

const DashboardNew = ({ user = { type: "Tutor", name: "Amit Sharma" } }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

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
    courses: []
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  const handleLogout = () => {
    alert("Logout logic goes here");
  };

  // Close menu on outside click
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
      {/* Top Navbar */}
      <div className="top-navbar">
        <div className="logo">🎓 Aadhyayan</div>

        <div className="navbar-center-title">Institute Dashboard</div>

        <div className="menu-dropdown" ref={menuRef}>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          {menuOpen && (
            <div className="dropdown-content">
              <p>{user.name}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Cover Section */}
      <ProfileHeaderCard user={{ ...user, username: "jnicsrofficial" }} />

      {/* Profile Form Sections */}
      <div className="dashboard-sections">
        <AboutSection formData={formData} setFormData={setFormData} />

        {user.type === "Tutor" && (
          <TutorSection formData={formData} setFormData={setFormData} />
        )}
        {user.type === "University" && (
          <UniversitySection formData={formData} setFormData={setFormData} />
        )}
        {user.type === "Consultant" && (
          <ConsultantSection formData={formData} setFormData={setFormData} />
        )}

        <CourseSection formData={formData} setFormData={setFormData} />
        <SocialMediaSection formData={formData} setFormData={setFormData} />
        <PhotosSection formData={formData} setFormData={setFormData} />
        <AccoladeSection formData={formData} setFormData={setFormData} />
        <ManagementSection formData={formData} setFormData={setFormData} />
        <ContactSection formData={formData} setFormData={setFormData} />

        <ProfileView profile={formData} />
      </div>
    </div>
  );
};

export default DashboardNew;
