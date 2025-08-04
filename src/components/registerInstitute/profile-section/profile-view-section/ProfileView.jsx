import React, { useRef } from "react";
import "./ProfileView.css";
import html2pdf from "html2pdf.js";

const ProfileView = () => {
  const profileRef = useRef();

  const downloadPDF = () => {
    const element = profileRef.current;
    html2pdf().from(element).save("Institution_Profile.pdf");
  };

  return (
    <div className="section-wrapper form-container">
      <div className="top-bar">
        <h2>JNICSR Foundation</h2>
        <img
          src="/default-logo.png" // Replace with dynamic photo path
          alt="Institution Logo"
          className="profile-pic"
        />
      </div>

      <div ref={profileRef}>
        <table className="profile-table">
          <tbody>
            <tr><td colSpan="2" className="section">About Institution</td></tr>
            <tr><td colSpan="2">JNICSR believes in corporate social responsibility...</td></tr>

            <tr><td colSpan="2" className="section">Institution Details</td></tr>
            <tr><td>Year of Establishment:</td><td>2015</td></tr>
            <tr><td>Study Mode:</td><td>Online</td></tr>

            <tr><td colSpan="2" className="section">College</td></tr>
            <tr><td>Ownership:</td><td>Autonomous</td></tr>
            <tr><td>Total Teaching Staff:</td><td>12</td></tr>
            <tr><td>Total Non-Teaching Staff:</td><td>3</td></tr>

            <tr><td colSpan="2" className="section">Streams</td></tr>
            <tr><td colSpan="2">Arts / Humanities, Business Managements</td></tr>

            <tr><td colSpan="2" className="section">Courses</td></tr>
            <tr><td>Total:</td><td>7</td></tr>
            <tr><td>Degree:</td><td>2</td></tr>
            <tr><td>Diploma:</td><td>3</td></tr>
            <tr><td>Certificate:</td><td>2</td></tr>

            <tr><td colSpan="2" className="section">Course Details</td></tr>
            <tr><td>Course:</td><td>MBA in Finance (2 Yrs)</td></tr>
            <tr><td>Course:</td><td>BBA (3 Yrs)</td></tr>

            <tr><td colSpan="2" className="section">Social Media</td></tr>
            <tr><td>Facebook:</td><td>facebook.com/jnicsrofficial</td></tr>
            <tr><td>Twitter:</td><td>twitter.com/jnicsrofficial</td></tr>

            <tr><td colSpan="2" className="section">Management</td></tr>
            <tr><td>Chairman:</td><td>Nikhil Kumar</td></tr>
            <tr><td>Vice Chairman:</td><td>Sanjay Jain</td></tr>

            <tr><td colSpan="2" className="section">Contact</td></tr>
            <tr><td>Address:</td><td>132, Vasundhara Enclave, Delhi</td></tr>
            <tr><td>Email:</td><td>contact@jnicsr.com</td></tr>
          </tbody>
        </table>
      </div>

      <div className="btn-group">
        <button onClick={downloadPDF}>Download as PDF</button>
      </div>
    </div>
  );
};

export default ProfileView;


  // import React, { useEffect, useRef, useState } from "react";
  // import "./ProfileView.css";
  // import html2pdf from "html2pdf.js";
  // import axios from "axios";

  // const ProfileView = () => {
  //   const profileRef = useRef();
  //   const [profile, setProfile] = useState(null);

  //   const downloadPDF = () => {
  //     const element = profileRef.current;
  //     html2pdf().from(element).save("Institution_Profile.pdf");
  //   };

  //   useEffect(() => {
  //     const fetchProfile = async () => {
  //       try {
  //         const userId = localStorage.getItem("userId");
  //         const res = await axios.get(
  //           `http://localhost/admin/index.php/Api/get_profile_data?user_id=${userId}`
  //         );
  //         if (res.data.status === "200") {
  //           const data = res.data.data;
  //           data.study_modes = JSON.parse(data.study_modes || "[]");
  //           data.courses = JSON.parse(data.courses || "[]");
  //           data.streams = JSON.parse(data.streams || "[]");
  //           setProfile(data);
  //         }
  //       } catch (err) {
  //         console.error("Error loading profile:", err);
  //       }
  //     };

  //     fetchProfile();
  //   }, []);

  //   if (!profile) return <p>Loading profile...</p>;

  //   return (
  //     <div className="form-container">
  //       <div className="top-bar">
  //         <h2>{profile.added_institution_name || "Institution Name"}</h2>
  //         <img
  //           src={profile.profile_image || "/default-logo.png"}
  //           alt="Institution Logo"
  //           className="profile-pic"
  //         />
  //       </div>

  //       <div ref={profileRef}>
  //         <table className="profile-table">
  //           <tbody>
  //             <tr><td colSpan="2" className="section">About Institution</td></tr>
  //             <tr><td colSpan="2">{profile.about}</td></tr>

  //             <tr><td colSpan="2" className="section">Institution Details</td></tr>
  //             <tr><td>Year of Establishment:</td><td>{profile.year}</td></tr>
  //             <tr><td>Study Mode:</td><td>{profile.study_modes.join(", ")}</td></tr>

  //             <tr><td colSpan="2" className="section">Address</td></tr>
  //             <tr><td>Address:</td><td>{profile.address}</td></tr>
  //             <tr><td>City:</td><td>{profile.city}</td></tr>
  //             <tr><td>Country:</td><td>{profile.country}</td></tr>

  //             <tr><td colSpan="2" className="section">Social Media</td></tr>
  //             <tr><td>Facebook:</td><td>{profile.facebook}</td></tr>
  //             <tr><td>LinkedIn:</td><td>{profile.linkedin}</td></tr>

  //             <tr><td colSpan="2" className="section">Management</td></tr>
  //             <tr><td>Head Name:</td><td>{profile.head_name}</td></tr>
  //             <tr><td>Alternate Mobile:</td><td>{profile.alternate_mobile}</td></tr>

  //             <tr><td colSpan="2" className="section">Courses</td></tr>
  //             {profile.courses.map((course, index) => (
  //               <tr key={index}><td>Course:</td><td>{course}</td></tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>

  //       <div className="btn-group">
  //         <button onClick={downloadPDF}>Download as PDF</button>
  //       </div>
  //     </div>
  //   );
  // };

  // export default ProfileView;
