// src/components/CoachingCenterSection.jsx
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./CoachingCenterSection.css";

// ✅ API base URL ko constant rakha hai
const API_BASE = "http://localhost/admin/index.php/Api";

const CoachingCenterSection = () => {
  const [numTeachers, setNumTeachers] = useState("");
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [course, setCourse] = useState({ name: "", duration: "", mode: "", eligibility: "" });
  const [courses, setCourses] = useState([]);

  // 🟢 Subject Add
  const addSubject = () => {
    if (subject.trim()) {
      setSubjects([...subjects, subject]);
      setSubject("");
    }
  };

  // 🟢 Subject Delete
  const deleteSubject = (index) => {
    const updated = [...subjects];
    updated.splice(index, 1);
    setSubjects(updated);
  };

  // 🟢 Course Add
  const addCourse = () => {
    if (course.name.trim()) {
      setCourses([...courses, course]);
      setCourse({ name: "", duration: "", mode: "", eligibility: "" });
    }
  };

  // 🟢 Course Delete
  const deleteCourse = (index) => {
    const updated = [...courses];
    updated.splice(index, 1);
    setCourses(updated);
  };

  // 🟢 Save API Call
  const handleSave = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem("AdhyayanAuth"))?.user_id?.id || 1;
      const payload = {
        user_id: userId,
        num_teachers: numTeachers,
        subjects: JSON.stringify(subjects),
        courses: JSON.stringify(courses),
      };

      const res = await axios.post(`${API_BASE}/save_coaching_center`, payload);

      if (res.data.status === "200") {
        Swal.fire("✅ Success", res.data.message, "success");
      } else {
        Swal.fire("⚠️ Error", res.data.message, "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("❌ Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="coaching-center-section">
      <div className="navbar">
        <span className="tab active">Coaching Center</span>
      </div>

      <h3>Coaching Center :</h3>

      <div className="row">
        <label>Number of Teacher :</label>
        <input type="text" value={numTeachers} onChange={(e) => setNumTeachers(e.target.value)} />
      </div>

      {/* Subjects */}
      <div className="row">
        <label>List of Subject :</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <button onClick={addSubject}>➕</button>
      </div>
      <ul>
        {subjects.map((s, i) => (
          <li key={i}>
            {s} <button onClick={() => deleteSubject(i)}>🗑️</button>
          </li>
        ))}
      </ul>

      {/* Courses */}
      <div className="row">
        <label>Course/Exam Name :</label>
        <input type="text" value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} />
        <button onClick={addCourse}>➕</button>
      </div>

      <div className="row">
        <label>Duration :</label>
        <input type="text" value={course.duration} onChange={(e) => setCourse({ ...course, duration: e.target.value })} />
      </div>

      <div className="row">
        <label>Mode :</label>
        <input type="text" value={course.mode} onChange={(e) => setCourse({ ...course, mode: e.target.value })} />
      </div>

      <div className="row">
        <label>Eligibility :</label>
        <input type="text" value={course.eligibility} onChange={(e) => setCourse({ ...course, eligibility: e.target.value })} />
      </div>

      <ul>
        {courses.map((c, i) => (
          <li key={i}>
            {c.name} ({c.duration} {c.mode}) - {c.eligibility} 
            <button onClick={() => deleteCourse(i)}>🗑️</button>
          </li>
        ))}
      </ul>

      <div className="btns">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CoachingCenterSection;
