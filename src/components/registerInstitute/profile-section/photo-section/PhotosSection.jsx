import React, { useState } from "react";
import axios from "axios";
import "./PhotosSection.css";

const PhotosSection = ({ userId }) => {
  const [files, setFiles] = useState([]);
  const [msg, setMsg] = useState("");
  const [uploadedPaths, setUploadedPaths] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (!files.length) return alert("Please select photos first");

    const formData = new FormData();
    files.forEach((file) => formData.append("photos[]", file));
    formData.append("user_id", 1);

    try {
      const res = await axios.post("http://localhost:8081/admin/index.php/Api/upload_photos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "200") {
        setMsg("Uploaded successfully!");

        setUploadedPaths(res.data.files || []);
        setTimeout(() => setMsg(""), 3000);
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      console.error("Upload error", error);
      alert("Upload failed!");
    }
  };
  console.log("Uploaded paths:", uploadedPaths);  
  return (
    <div className="photos-container">
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses",
          "Coaching Center", "Tutor", "Consultants", "Social Media",
          "Photos", "Accolades", "Management", "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Photos" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <div className="photos-section">
        <h3>Photos</h3>
        <p className="note">(10 photos can be uploaded initially)</p>

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

        {msg && <p className="success-msg">{msg}</p>}

        <div className="uploaded-images">
          {uploadedPaths.map((path, idx) => (
            <img key={idx} src={path} alt={`uploaded-${idx}`} width="120" style={{ margin: "10px" }} />
          ))}
        </div>

        <div className="btn-row">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PhotosSection;
