import React from "react";
import "./SocialMediaSection.css";

const SocialMediaSection = () => {
  return (
    <div className="social-media-container">
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
            className={tab === "Social Media" ? "tab active" : "tab"}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="social-section">
        <h3>Social Media</h3>

        <label>
          Facebook : <input type="text" placeholder="Facebook profile link" />
        </label>

        <label>
          Instagram : <input type="text" placeholder="Instagram profile link" />
        </label>

        <label>
          LinkedIn : <input type="text" placeholder="LinkedIn profile link" />
        </label>

        <label>
          X (Formerly Twitter) : <input type="text" placeholder="Twitter profile link" />
        </label>

        <label>
          Youtube : <input type="text" placeholder="YouTube channel link" />
        </label>

        <div className="btn-row">
          <button className="save-btn">Save</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
