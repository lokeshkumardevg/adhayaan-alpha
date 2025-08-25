import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./PhotosSection.css";

const MySwal = withReactContent(Swal);

const API_BASE = "http://localhost/admin/index.php/Api";
const UPLOAD_PHOTOS_URL = `${API_BASE}/upload_photos`;

const PhotosSection = () => {
    const userId = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
  const [files, setFiles] = useState([]);
  const [uploadedPaths, setUploadedPaths] = useState([]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (!files.length) {
      MySwal.fire({
        icon: "warning",
        title: "No Files Selected",
        text: "Please select photos before uploading.",
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("photos[]", file));
    formData.append("user_id", userId || 1);

    try {
      const res = await axios.post(UPLOAD_PHOTOS_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.status === "200") {
        setUploadedPaths(res.data.files || []);
        MySwal.fire({
          icon: "success",
          title: "Uploaded Successfully 🎉",
          text: "Your photos have been uploaded.",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Upload Failed ❌",
          text: res.data.msg || "Something went wrong."
        });
      }
    } catch (error) {
      console.error("Upload error", error);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Upload failed! Please try again later."
      });
    }
  };

  return (
    <div className="photos-container">
      <div className="navbar">
        {[
      
          "Photos"
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

        <div className="uploaded-images">
          {uploadedPaths.map((path, idx) => (
            <img
              key={idx}
              src={path}
              alt={`uploaded-${idx}`}
              width="120"
              style={{ margin: "10px" }}
            />
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
