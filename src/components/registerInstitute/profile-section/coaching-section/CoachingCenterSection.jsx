import React, { useState } from "react";
import "./CoachingCenterSection.css";

const CoachingCenterSection = () => {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [course, setCourse] = useState({
    name: "",
    duration: "",
    mode: "",
    eligibility: ""
  });

  const addSubject = () => {
    if (subject.trim()) {
      setSubjects([...subjects, subject]);
      setSubject("");
    }
  };

  return (
    <div className="coaching-center-section">
      <h3>Coaching Center :</h3>

      <div className="row">
        <label>Number of Teacher :</label>
        <input type="text" />
      </div>

      <div className="row">
        <label>List of Subject :</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button onClick={addSubject}>➕</button>
        <button>🗑️</button>
      </div>

      <div className="row">
        <label>Course/Exam Name :</label>
        <input
          type="text"
          value={course.name}
          onChange={(e) =>
            setCourse({ ...course, name: e.target.value })
          }
        />
        <button>➕</button>
        <button>🗑️</button>
      </div>

      <p className="note">
        <i>
          (Mention the name jo bhe course fill kerna hai like, below e.g.)
        </i>
      </p>

      <div className="row">
        <label>Duration :</label>
        <input
          type="text"
          placeholder="e.g. 6"
          value={course.duration}
          onChange={(e) =>
            setCourse({ ...course, duration: e.target.value })
          }
        />
        <span className="info">
          (duration mai numeric wch khud type ker le gai)
        </span>
      </div>

      <div className="row">
        <label>Mode :</label>
        <input
          type="text"
          placeholder="Year / Semester / Week / Hour"
          value={course.mode}
          onChange={(e) =>
            setCourse({ ...course, mode: e.target.value })
          }
        />
        <span className="info">
          (yeh 4 category hum limit ker de gai)
        </span>
      </div>

      <div className="row">
        <label>Eligibility :</label>
        <input
          type="text"
          value={course.eligibility}
          onChange={(e) =>
            setCourse({ ...course, eligibility: e.target.value })
          }
        />
        <span className="info">
          (Eligibility mai wch khud type ker le gai)
        </span>
      </div>

      <div className="btns">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CoachingCenterSection;
