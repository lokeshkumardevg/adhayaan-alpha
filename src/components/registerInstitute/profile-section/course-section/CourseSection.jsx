// src/profile-section/course-section/CourseSection.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./CourseSection.css";

// ✅ API URL constants
const API_BASE = "http://localhost/admin/index.php/Api";
const GET_COURSES_URL = `${API_BASE}/get_courses`;
const SAVE_COURSES_URL = `${API_BASE}/save_courses`;

const CourseSection = ({ userId = 1 }) => {
  const [formData, setFormData] = useState({
    streams: [],
    total_courses: "",
    total_degrees: "",
    total_diplomas: "",
    total_certificates: "",
    courses: [],
  });

  const [course, setCourse] = useState({
    name: "",
    duration: "",
    mode: "",
    eligibility: "",
  });

  const [courseList, setCourseList] = useState([]);

  // Example streams (replace with your actual)
  const streamOptions = [
    "Engineering", "Management", "Medical", "Arts", "Science", "Commerce"
  ];

  // ✅ Fetch existing data
  const fetchData = async () => {
    try {
      const res = await axios.get(`${GET_COURSES_URL}/${userId}`);
      if (res.data.status === 200) {
        setFormData(res.data.data || {});
        setCourseList(res.data.data?.courses || []);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // ✅ Save data
  const handleSave = async () => {
    try {
      const payload = { ...formData, user_id: userId };
      const res = await axios.post(SAVE_COURSES_URL, payload);

      if (res.data.status === "200") {
        Swal.fire({
          icon: "success",
          title: "Saved!",
          text: res.data.msg || "Courses saved successfully",
          timer: 2000,
          showConfirmButton: false,
        });
        fetchData();
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: res.data.msg || "Unable to save courses",
        });
      }
    } catch (err) {
      console.error("Save error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Server error while saving",
      });
    }
  };

  // ✅ Stream toggle
  const handleStreamToggle = (stream) => {
    const updated = formData.streams.includes(stream)
      ? formData.streams.filter((s) => s !== stream)
      : [...formData.streams, stream];
    setFormData((prev) => ({ ...prev, streams: updated }));
  };

  // ✅ Add course to list
  const handleAddCourse = () => {
    if (course.name.trim()) {
      const updatedCourses = [...formData.courses, course];
      setFormData((prev) => ({ ...prev, courses: updatedCourses }));
      setCourse({ name: "", duration: "", mode: "", eligibility: "" });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Course Name Required",
        text: "Please enter a course name before adding.",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="course-section">
      {/* Navbar */}
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses",
          "Coaching Center", "Tutor", "Consultants", "Social Media",
          "Photos", "Accolades", "Management", "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Courses" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <div className="section-header">
        <h3>Courses :</h3>
        <label>Streams :</label>
        <div className="streams-grid">
          {streamOptions.map((stream, i) => (
            <label key={i}>
              <input
                type="checkbox"
                checked={formData.streams.includes(stream)}
                onChange={() => handleStreamToggle(stream)}
              />
              {stream}
            </label>
          ))}
        </div>
      </div>

      {/* Totals */}
      <div className="totals">
        <label>Total no of courses :</label>
        <input
          type="text"
          value={formData.total_courses}
          onChange={(e) =>
            setFormData({ ...formData, total_courses: e.target.value })
          }
        />
        <label>Total no of degree :</label>
        <input
          type="text"
          value={formData.total_degrees}
          onChange={(e) =>
            setFormData({ ...formData, total_degrees: e.target.value })
          }
        />
        <label>Total no of diploma :</label>
        <input
          type="text"
          value={formData.total_diplomas}
          onChange={(e) =>
            setFormData({ ...formData, total_diplomas: e.target.value })
          }
        />
        <label>Total no of certificate :</label>
        <input
          type="text"
          value={formData.total_certificates}
          onChange={(e) =>
            setFormData({ ...formData, total_certificates: e.target.value })
          }
        />
      </div>

      {/* Add Course */}
      <h4>Add your courses <span>(Degree / Diploma / Certificate):</span></h4>
      <div className="course-inputs">
        <div className="course-name-row">
          <label>Course Name :</label>
          <input
            type="text"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>

        <div className="details-grid">
          <label>Duration :</label>
          <input
            type="text"
            value={course.duration}
            onChange={(e) =>
              setCourse({ ...course, duration: e.target.value })
            }
          />

          <label>Mode :</label>
          <input
            type="text"
            value={course.mode}
            onChange={(e) => setCourse({ ...course, mode: e.target.value })}
          />

          <label>Eligibility :</label>
          <input
            type="text"
            value={course.eligibility}
            onChange={(e) =>
              setCourse({ ...course, eligibility: e.target.value })
            }
          />
        </div>

        <button className="add-btn" onClick={handleAddCourse}>
          Add Course
        </button>
      </div>

      {/* Added Courses Chips */}
      <div className="course-chips">
        {formData.courses.map((item, i) => (
          <div className="chip" key={i}>{item.name.toUpperCase()}</div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={fetchData}>Cancel</button>
      </div>

      {/* Optional Table */}
      {courseList.length > 0 && (
        <div className="course-table">
          <h4>Saved Courses</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Mode</th>
                <th>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {courseList.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.name}</td>
                  <td>{c.duration}</td>
                  <td>{c.mode}</td>
                  <td>{c.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseSection;
