// src/components/ProfileView.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProfileView.css";

const API_BASE = "http://localhost/admin/index.php/Api";

const ProfileView = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const storedUser = JSON.parse(localStorage.getItem("AdhyayanAuth"));
  const [user] = useState(
    storedUser || {
      name: "Admin",
      type: "Institution",
      email: "admin@gmail.com",
      username: "jnicsrofficial",
    }
  );

  const [profile, setProfile] = useState(null);

  const goBack = () => navigate("/dashboardnew");
  const handleLogout = () => {
    localStorage.removeItem("AdhyayanAuth");
    navigate("/login-institute", { replace: true });
  };

  // ✅ Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `${API_BASE}/get_profile_data?user_id=${storedUser?.user_id?.id}`
        );

        if (res.data.status === "200") {
          const data = res.data.data;

          // Courses parsing
          data.courses = Array.isArray(data.courses)
            ? data.courses.map((c) => ({
                name: c.courses || "",
                duration: c.total_courses || "",
              }))
            : [];

          // Accolades parsing
          data.accolades = Array.isArray(data.accolades)
            ? data.accolades.map((a) => a.accolades)
            : [];

          // Management parsing
          data.management = Array.isArray(data.management)
            ? data.management
            : [];

             data.contact = Array.isArray(data.contact)
            ? data.contact
            : [];

          setProfile(data);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    if (storedUser?.user_id?.id) {
      fetchProfile();
    }
  }, [storedUser?.user_id?.id]);

  if (!profile) return <p>Loading...</p>;
 console.log("Profile Data:", profile);

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
        {/* Cover Image */}
        <div className="cover-photo">
          <img
            src={
              profile.institution_profile_header?.cover_photo
                ? `http://localhost/admin/${profile.institution_profile_header.cover_photo}`
                : "https://via.placeholder.com/900x200.png?text=Cover+Image"
            }
            alt="Cover"
          />
        </div>

        {/* Header with Logo */}
        <div className="profile-header">
          <div className="profile-logo">
            <img
              src={
                profile.institution_profile_header?.logo
                  ? `http://localhost/admin/${  profile.institution_profile_header?.logo}`
                  : "https://via.placeholder.com/150.png?text=Logo"
              }
              alt="Institution Logo"
            />
          </div>
          <div>
            <h3>{profile.about?.username || "demo_user"}</h3>
            <h2>{profile.university?.institutionName || "Institution Name"}</h2>
          </div>
        </div>

        {/* Table */}
        <table className="profile-table">
          <tbody>
            {/* About */}
            <tr>
              <td colSpan="2" className="section-title">About</td>
            </tr>
            <tr>
              <td>About Institution</td>
              <td>{profile.about?.about || "N/A"}</td>
            </tr>

            {/* Establishment Info */}
            <tr>
              <td>Year of Establishment</td>
              <td>{profile.about?.year_of_establishment || "N/A"}</td>
            </tr>
            <tr>
              <td>Study Mode</td>
              <td>{profile.about?.study_modes || "N/A"}</td>
            </tr>
            <tr>
              <td>College Type</td>
              <td>{profile.about?.collegeOwnership || "N/A"}</td>
            </tr>
            <tr>
              <td>Teaching Staff</td>
              <td>{profile.university?.collegeTeachingStaff || "N/A"}</td>
            </tr>
            <tr>
              <td>Non-Teaching Staff</td>
              <td>{profile.university?.collegeNonTeachingStaff || "N/A"}</td>
            </tr>

            {/* Streams */}
            <tr>
              <td colSpan="2" className="section-title">Streams</td>
            </tr>
            {profile.courses?.map((course, idx) => (
              <tr key={idx}>
                <td>Stream {idx + 1}</td>
                <td>{course.name}</td>
              </tr>
            ))}

            {/* Courses */}
            <tr>
              <td colSpan="2" className="section-title">Courses</td>
            </tr>
            {profile.courses?.length > 0 ? (
              profile.courses.map((course, idx) => (
                <tr key={idx}>
                  <td>{course.name}</td>
                  <td>Duration: {course.duration}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No Courses</td></tr>
            )}

            {/* Social Media */}
            <tr>
              <td colSpan="2" className="section-title">Social Media</td>
            </tr>
            <tr><td>Facebook</td><td>{profile.social_media?.facebook || "N/A"}</td></tr>
            <tr><td>LinkedIn</td><td>{profile.social_media?.linkedin || "N/A"}</td></tr>
            <tr><td>YouTube</td><td>{profile.social_media?.youtube || "N/A"}</td></tr>

            {/* Accolades */}
            <tr>
              <td colSpan="2" className="section-title">Accolades</td>
            </tr>
            <tr>
              <td>Accolades</td>
              <td>{profile.accolades?.join(", ") || "N/A"}</td>
            </tr>

            {/* Management */}
            <tr>
              <td colSpan="2" className="section-title">Management</td>
            </tr>
            {profile.management?.length > 0 ? (
              profile.management.map((m, idx) => (
                <tr key={idx}>
                  <td>{m.chairman_name || "N/A"}</td>
                  <td>Email: {m.chairman_email || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No Management Data</td></tr>
            )}

            {/* Contact */}
            <tr>
              <td colSpan="2" className="section-title">Contact</td>
            </tr>
            <tr><td>Address</td><td>{profile.contact?.address || "N/A"}</td></tr>
            <tr><td>City</td><td>{profile.contact?.city || "N/A"}</td></tr>
            <tr><td>PIN</td><td>{profile.contact?.pin || "N/A"}</td></tr>
            <tr><td>Phone</td><td>{profile.contact?.phone || "N/A"}</td></tr>
            <tr><td>Email</td><td>{profile.contact?.email || "N/A"}</td></tr>
            <tr><td>Official Email</td><td>{profile.contact?.officialEmail || "N/A"}</td></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProfileView;
