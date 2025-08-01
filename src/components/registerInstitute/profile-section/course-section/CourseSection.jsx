import React, { useState } from "react";
import "./CourseSection.css";

const CourseSection = ({ formData, setFormData }) => {
  const [course, setCourse] = useState({
    name: "",
    duration: "",
    mode: "",
    eligibility: ""
  });

  const streamOptions = [
    "Arts / Humanities", "Engineering", "Commerce", "Medical / Medicine", "Business Managements",
    "Computer / IT", "Nursing", "Para-Medical", "Fine Arts", "Animation", "CSR",
    "Vocational", "ITI", "Law", "Social Science", "Teaching", "Fashion",
    "Hospitality", "Agriculture", "Aviation", "Naval"
  ];

  const handleAddCourse = () => {
    if (course.name.trim()) {
      setFormData({
        ...formData,
        courses: [...formData.courses, course]
      });
      setCourse({ name: "", duration: "", mode: "", eligibility: "" });
    }
  };

  return (
    <div className="course-section">
      <div className="section-header">
        <h3>Courses :</h3>
        <label>Streams :</label>
        <div className="streams-grid">
          {streamOptions.map((stream, i) => (
            <label key={i}><input type="checkbox" /> {stream}</label>
          ))}
        </div>
      </div>

      <div className="totals">
        <label>Total no of courses :</label> <input type="text" />
        <label>Total no of degree :</label> <input type="text" />
        <label>Total no of diploma :</label> <input type="text" />
        <label>Total no of certificate :</label> <input type="text" />
      </div>

      <h4>Add your courses <span>(Degree / Diploma / Certificate) :</span></h4>

      <div className="course-inputs">
        <div className="course-name-row">
          <label>Course Name :</label>
          <input
            type="text"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>

        <p className="note">
          <i>(Mention the name of the degree/diploma exactly as mentioned in the official website.)</i>
        </p>

        <div className="details-grid">
          <label>Duration :</label>
          <input
            type="text"
            placeholder="e.g. 3"
            value={course.duration}
            onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          />
          <span className="info">(duration mai numeric wch khud type ker le gai)</span>

          <label>Mode :</label>
          <input
            type="text"
            placeholder="Year / Semester / Week / Hour"
            value={course.mode}
            onChange={(e) => setCourse({ ...course, mode: e.target.value })}
          />
          <span className="info">(yeh 4 category hum limit ker de gai)</span>

          <label>Eligibility :</label>
          <input
            type="text"
            value={course.eligibility}
            onChange={(e) => setCourse({ ...course, eligibility: e.target.value })}
          />
          <span className="info">(Eligibility mai wch khud type ker le gai)</span>
        </div>

        <button className="add-btn" onClick={handleAddCourse}>Add Course</button>
      </div>

      <div className="course-chips">
        {formData.courses.map((item, i) => (
          <div className="chip" key={i}>{item.name.toUpperCase()}</div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CourseSection;
