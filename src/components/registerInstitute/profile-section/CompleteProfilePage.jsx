import React, { useEffect, useState } from "react";
import AboutSection from "./sections/AboutSection";
import TutorSection from "./sections/TutorSection";
import UniversitySection from "./sections/UniversitySection";
import ConsultantSection from "./sections/ConsultantSection";
import SocialMediaSection from "./sections/SocialMediaSection";
import CourseSection from "./sections/CourseSection";
import AccoladeSection from "./sections/AccoladeSection";
import ManagementSection from "./sections/ManagementSection";
import PhotosSection from "./sections/PhotosSection";
import ContactSection from "./sections/ContactSection";
import ProfilePreview from "./ProfilePreview";

const CompleteProfilePage = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedType = localStorage.getItem("userType") || "Tutor";
    setUserType(storedType);
  }, []);

  const updateFormData = (sectionData) => {
    setFormData((prev) => ({ ...prev, ...sectionData }));
  };

  const handleSaveAll = () => {
    console.log("FormData to save:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return <ProfilePreview data={formData} />;
  }

  return (
    <div className="complete-profile-wrapper">
      <h2>Complete your profile</h2>
      <p>Your profile is currently incomplete. Please update your profile to receive better responses and connections.</p>

      <AboutSection onChange={updateFormData} />

      {userType === "Tutor" && <TutorSection onChange={updateFormData} />}
      {userType === "University" && <UniversitySection onChange={updateFormData} />}
      {userType === "Consultant" && <ConsultantSection onChange={updateFormData} />}

      <CourseSection onChange={updateFormData} />
      <SocialMediaSection onChange={updateFormData} />
      <PhotosSection onChange={updateFormData} />
      <AccoladeSection onChange={updateFormData} />
      <ManagementSection onChange={updateFormData} />
      <ContactSection onChange={updateFormData} />

      <div className="save-section">
        <button onClick={handleSaveAll} className="save-btn">Save All</button>
      </div>
    </div>
  );
};

export default CompleteProfilePage;
