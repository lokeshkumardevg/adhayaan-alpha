import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SocialMediaSection.css";

const MySwal = withReactContent(Swal);

const API_BASE = "http://localhost/admin/index.php/Api";
const GET_SOCIAL_MEDIA_URL = `${API_BASE}/get_social_media`;
const SAVE_SOCIAL_MEDIA_URL = `${API_BASE}/save_social_media`;

const SocialMediaSection = ( ) => {
  const userId = localStorage.getItem("userId");
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${GET_SOCIAL_MEDIA_URL}?user_id=${userId || 12}`);
        if (res.data.status === "200") {
          setFormData(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching social media:", err);
      }
    };

    fetchData();
  }, [userId]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSave = async () => {
    try {
      const res = await axios.post(SAVE_SOCIAL_MEDIA_URL, {
        ...formData,
        user_id: userId || 12
      });

      if (res.data.status === "200") {
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "Social media links have been updated.",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: "Could not save social media links."
        });
      }
    } catch (err) {
      console.error("Save failed:", err);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <div className="social-media-container">
      <div className="navbar">
        {[
         
          "Social Media",
         
        ].map((tab) => (
          <span key={tab} className={tab === "Social Media" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <div className="social-section">
        <h3>Social Media</h3>

        <label>
          Facebook:
          <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Facebook profile link" />
        </label>

        <label>
          Instagram:
          <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Instagram profile link" />
        </label>

        <label>
          LinkedIn:
          <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn profile link" />
        </label>

        <label>
          X (Twitter):
          <input type="text" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="Twitter profile link" />
        </label>

        <label>
          YouTube:
          <input type="text" name="youtube" value={formData.youtube} onChange={handleChange} placeholder="YouTube channel link" />
        </label>

        <div className="btn-row">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
