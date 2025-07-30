import React from "react";
import "./PhotosSection.css";

const PhotosSection = ({ formData, setFormData }) => {
  const handleFileChange = (e) => {
    setFormData({ ...formData, photos: e.target.files });
  };

  return (
    <div className="section">
      <h3>Upload Photos</h3>
      <input type="file" multiple onChange={handleFileChange} />
    </div>
  );
};

export default PhotosSection;
