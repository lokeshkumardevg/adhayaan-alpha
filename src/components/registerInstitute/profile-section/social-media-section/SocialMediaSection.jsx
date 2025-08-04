import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SocialMediaSection.css";

const SocialMediaSection = ({ userId }) => {
  const [formData, setFormData] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: ""
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/admin/index.php/Api/get_social_media?user_id=${1}`);
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
      const res = await axios.post("http://localhost:8081/admin/index.php/Api/save_social_media", {
        ...formData,
        user_id: 1
      });

      if (res.data.status === "200") {
        setMsg("Saved successfully!");
        setTimeout(() => setMsg(""), 3000);
      }
    } catch (err) {
      console.error("Save failed:", err);
      setMsg("Something went wrong.");
    }
  };

  return (
    <div className="social-media-container">
      <div className="navbar">
        {["About", "University", "Collage", "ITI/Vocational", "Courses", "Coaching Center", "Tutor", "Consultants", "Social Media", "Photos", "Accolades", "Management", "Contact"].map((tab) => (
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

        {msg && <p className="success-msg">{msg}</p>}
      </div>
    </div>
  );
};

export default SocialMediaSection;
