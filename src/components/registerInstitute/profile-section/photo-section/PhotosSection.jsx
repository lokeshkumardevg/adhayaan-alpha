import React, { useState } from "react";
import "./PhotosSection.css";

const PhotosSection = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = () => {
    console.log("Uploading", files);
  };

  return (
    <div className="photos-container">
      <div className="navbar">
        {[
          "About",
          "University",
          "Collage",
          "ITI/Vocational",
          "Courses",
          "Coaching Center",
          "Tutor",
          "Consultants",
          "Social Media",
          "Photos",
          "Accolades",
          "Management",
          "Contact"
        ].map((tab) => (
          <span
            key={tab}
            className={tab === "Photos" ? "tab active" : "tab"}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="photos-section">
        <h3>Photos</h3>
        <p className="note">
          (10 photos can be uploaded initially)
        </p>

        <div className="photo-actions">
          <label className="btn-light">
            Select Photos
            <input
              type="file"
              multiple
              accept=".jpg,.jpeg,.png"
              onChange={handleFileChange}
              hidden
            />
          </label>

          <button className="btn-light" onClick={handleUpload}>
            Upload photo
          </button>
        </div>

        <p className="file-note">Drop .JPG, .PNG, .JPEG images here</p>

        <div className="btn-row">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
