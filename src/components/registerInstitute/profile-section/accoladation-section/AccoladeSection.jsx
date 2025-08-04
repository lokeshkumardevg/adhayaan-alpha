import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AccoladeSection.css";

const defaultAccolades = [
  "UGC", "AICTE", "AIU MemberShip", "Institute of National Importance",
  "NAAC", "IMA", "INC", "NCTE", "Bar Council of India (BCI)",
  "DEB", "NCVT", "ICWA", "12(b)", "2(f)", "2(f) and 12(b)"
];

const AccoladesSection = ({ userId }) => {
  const [accolades, setAccolades] = useState([]);
  const [others, setOthers] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/admin/index.php/Api/get_accolades?user_id=${1}`);
        if (res.data.status === "200") {
          setAccolades(res.data.data.accolades || []);
        }
      } catch (err) {
        console.error("Fetch accolades error:", err);
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
      const res = await axios.post("http://localhost:8081/admin/index.php/Api/save_accolades", {
        user_id: 1,
        accolades
      });

      if (res.data.status === "200") {
        setMsg("Saved successfully!");
        setTimeout(() => setMsg(""), 3000);
      }
    } catch (err) {
      console.error("Save error:", err);
      setMsg("Save failed.");
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

        {msg && <p className="success-msg">{msg}</p>}
      </div>
    </div>
  );
};

export default AccoladesSection;
