import React, { useState } from "react";
import "./TutorSection.css";

const TutorSection = () => {
  const [demoClass, setDemoClass] = useState("");
  const [chargeDemo, setChargeDemo] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [maxDistance, setMaxDistance] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState(["", "", ""]);

  return (
    <div className="tutor-section">
      <h3>Tutor (Individual)</h3>

      <div className="row">
        <label>Study Mode :</label>
        <div className="options">
          <label><input type="checkbox" /> Student House</label>
          <label><input type="checkbox" /> Tutor House</label>
          <label><input type="checkbox" /> Online</label>
        </div>
      </div>

      <div className="row">
        <label>Do You Give Demo Classes :</label>
        <input type="text" placeholder="Yes / No" />
      </div>

      <div className="row">
        <label>Do You Charge For Demo Classes :</label>
        <input type="text" placeholder="Yes / No" />
      </div>

      <div className="row">
        <label>No of Tuition in a Month :</label>
        <input type="text" placeholder="1-5 / 5-12 / 15+" />
      </div>

      <div className="row">
        <label>Preferred Location :</label>
        <input type="text" placeholder="e.g. Vaishali, Ghaziabad" />
        <label>Pin Code :</label>
        <input type="text" value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
      </div>

      <div className="row">
        <label>Max Distance Willing To Travel (Kilometers) :</label>
        <input type="text" value={maxDistance} onChange={(e) => setMaxDistance(e.target.value)} />
        <span className="hint">(Please enter a valid Distance between 1KM to 50KM)</span>
      </div>

      <div className="row full">
        <label>Brief your experience (max 200 words):</label>
        <textarea value={experience} onChange={(e) => setExperience(e.target.value)} rows={4}></textarea>
      </div>

      <div className="row">
        <label>Languages you can Speak :</label>
        {languages.map((lang, idx) => (
          <input key={idx} type="text" value={lang} onChange={(e) => {
            const updated = [...languages];
            updated[idx] = e.target.value;
            setLanguages(updated);
          }} />
        ))}
      </div>

      <div className="row">
        <label>You are a :</label>
        <input type="text" placeholder="Part Time Tutor / Full Time Tutor" />
      </div>

      <div className="row">
        <label>Class / Subject :</label>
        <button className="add-btn">Add Class/Subject</button>
      </div>

      <div className="subject-table">
        <div className="row">
          <label>Sections :</label>
          <div className="sections green">School / College / Language / Hobbies / IT Courses / Competitive Exams / Entrance Exam</div>
        </div>

        <div className="row">
          <label>Class :</label>
          <div className="classes red">Below 5th / 6th to 9th / 10th / 11th / 12th</div>
        </div>

        <div className="row">
          <label>Subjects :</label>
          <div className="subjects yellow">
            <div>Maths</div>
            <div>Science</div>
            <div>SST</div>
            <div>English</div>
            <div>Hindi</div>
          </div>
        </div>

        <div className="row">
          <label>Stream :</label>
          <input type="text" placeholder="Arts / Humanities / Commerce / Science" />
          <button>➕</button>
          <button>🗑️</button>
        </div>

        <div className="row">
          <label>Charges :</label>
          <input type="text" placeholder="e.g. Rs 400" />
        </div>

        <div className="row">
          <label>Charges Type :</label>
          <input type="text" placeholder="Month / Week / Hour" />
        </div>
      </div>

      <div className="btns">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default TutorSection;
