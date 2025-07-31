import React, { useState } from "react";
import "./CourseSection.css";

const CourseSection = ({ formData, setFormData }) => {
  const [course, setCourse] = useState({
    degreeType: "",
    name: "",
    duration: "",
    mode: "",
    eligibility: ""
  });

  const handleAddCourse = () => {
    if (course.name) {
      const updatedCourses = [...formData.courses, course];
      setFormData({ ...formData, courses: updatedCourses });
      setCourse({
        degreeType: "",
        name: "",
        duration: "",
        mode: "",
        eligibility: ""
      });
    }
  };

  const streamOptions = [
    "Arts / Humanities", "Engineering", "Commerce", "Medical / Medicine", "Business Managements",
    "Computer / IT", "Nursing", "Para-Medical", "Fine Arts", "Animation", "CSR", "Vocational", "ITI",
    "Law", "Social Science", "Teaching", "Fashion", "Hospitality", "Agriculture", "Aviation", "Naval"
  ];

  return (
    <div className="course-section">
      <h3>Courses</h3>

      <div className="streams-wrapper">
        <label>Streams:</label>
        <div className="streams-list">
          {streamOptions.map((stream, idx) => (
            <div key={idx}>
              <input type="checkbox" id={`stream-${idx}`} />
              <label htmlFor={`stream-${idx}`}>{stream}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="count-fields">
        <label>Total no of courses:</label>
        <input type="text" />
        <label>Total no of degree:</label>
        <input type="text" />
        <label>Total no of diploma:</label>
        <input type="text" />
        <label>Total no of certificate:</label>
        <input type="text" />
      </div>

      <h4>Add your courses <small>(Degree / Diploma / Certificate)</small></h4>
      <div className="course-entry">
        <input
          type="text"
          placeholder="Course Name"
          value={course.name}
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Duration (e.g. 3)"
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mode (Year / Semester / Week / Hour)"
          value={course.mode}
          onChange={(e) => setCourse({ ...course, mode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Eligibility"
          value={course.eligibility}
          onChange={(e) => setCourse({ ...course, eligibility: e.target.value })}
        />
        <button className="add-btn" onClick={handleAddCourse}>Add Course</button>
      </div>

      <div className="added-courses">
        {formData.courses.map((item, index) => (
          <div className="course-chip" key={index}>
            {item.name}
          </div>
        ))}
      </div>

      <div className="course-actions">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CourseSection;
