import React from "react";
import "./SocialMediaSection.css";

const SocialMediaSection = ({ formData, setFormData }) => {
  return (
    <div className="section">
      <h3>Social Media Links</h3>
      <label>Facebook</label>
      <input
        type="url"
        name="facebook"
        value={formData.facebook || ""}
        onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
      />
      <label>Instagram</label>
      <input
        type="url"
        name="instagram"
        value={formData.instagram || ""}
        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
      />
      <label>LinkedIn</label>
      <input
        type="url"
        name="linkedin"
        value={formData.linkedin || ""}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <label>Twitter</label>
      <input
        type="url"
        name="twitter"
        value={formData.twitter || ""}
        onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
      />
    </div>
  );
};

export default SocialMediaSection;
