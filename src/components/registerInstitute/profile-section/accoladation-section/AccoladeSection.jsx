import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AccoladeSection.css";

const MySwal = withReactContent(Swal);

// API base and endpoints
const API_BASE = "http://localhost/admin/index.php/Api";
const GET_ACCOLADES_URL = `${API_BASE}/get_accolades`;
const SAVE_ACCOLADES_URL = `${API_BASE}/save_accolades`;

const defaultAccolades = [
  "UGC", "AICTE", "AIU MemberShip", "Institute of National Importance",
  "NAAC", "IMA", "INC", "NCTE", "Bar Council of India (BCI)",
  "DEB", "NCVT", "ICWA", "12(b)", "2(f)", "2(f) and 12(b)"
];

const AccoladesSection = ({ userId }) => {
  const [accolades, setAccolades] = useState([]);
  const [others, setOthers] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${GET_ACCOLADES_URL}?user_id=${userId || 1}`);
        if (res.data.status === "200") {
          setAccolades(res.data.data.accolades || []);
        }
      } catch (err) {
        console.error("Fetch accolades error:", err);
        MySwal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load accolades."
        });
      }
    };
    fetchData();
  }, [userId]);

  const handleCheck = (value) => {
    setAccolades((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleAddOther = () => {
    if (others.trim()) {
      setAccolades([...accolades, others.trim()]);
      setOthers("");
    }
  };

  const handleSave = async () => {
    try {
      const res = await axios.post(SAVE_ACCOLADES_URL, {
        user_id: userId || 1,
        accolades
      });

      if (res.data.status === "200") {
        MySwal.fire({
          icon: "success",
          title: "Saved Successfully 🎉",
          text: "Accolades have been updated.",
          timer: 2000,
          showConfirmButton: false
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: "Save Failed ❌",
          text: res.data.msg || "Could not save accolades."
        });
      }
    } catch (err) {
      console.error("Save error:", err);
      MySwal.fire({
        icon: "error",
        title: "Server Error 🚨",
        text: "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <div className="accolades-container">
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses",
          "Coaching Center", "Tutor", "Consultants", "Social Media",
          "Photos", "Accolades", "Management", "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Accolades" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <div className="accolades-content">
        <h3>Accolades</h3>
        <div className="checkbox-columns">
          <div>
            {defaultAccolades.slice(0, 8).map((item) => (
              <label key={item} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={accolades.includes(item)}
                  onChange={() => handleCheck(item)}
                />
                {item}
              </label>
            ))}
          </div>
          <div>
            {defaultAccolades.slice(8).map((item) => (
              <label key={item} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={accolades.includes(item)}
                  onChange={() => handleCheck(item)}
                />
                {item}
              </label>
            ))}
            <div className="others-row">
              <label>Others:</label>
              <input
                type="text"
                value={others}
                onChange={(e) => setOthers(e.target.value)}
              />
              <button onClick={handleAddOther} className="add-btn">＋</button>
            </div>
          </div>
        </div>

        <div className="btn-row">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => window.location.reload()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AccoladesSection;
