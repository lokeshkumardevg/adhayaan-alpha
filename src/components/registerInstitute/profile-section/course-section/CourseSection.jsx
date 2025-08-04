import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CourseSection.css";

const CourseSection = ({ userId }) => {
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

  const streamOptions = [ /* same array as above */ ];

  const fetchData = async () => {
    const res = await axios.get(
      `http://localhost:8081/admin/index.php/Api/get_courses/${userId}`
    );
    if (res.data.status === 200) setFormData(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStreamToggle = (stream) => {
    const updated = formData.streams.includes(stream)
      ? formData.streams.filter((s) => s !== stream)
      : [...formData.streams, stream];
    setFormData((prev) => ({ ...prev, streams: updated }));
  };

  const handleAddCourse = () => {
    if (course.name.trim()) {
      setFormData((prev) => ({
        ...prev,
        courses: [...prev.courses, course],
      }));
      setCourse({ name: "", duration: "", mode: "", eligibility: "" });
    }
  };

  const handleSave = async () => {
    const payload = {
      ...formData,
      user_id: 1,
    };
    const res = await axios.post(
      "http://localhost:8081/admin/index.php/Api/save_courses",
      payload
    );
    alert(res.data.msg);
  };

  return (
    <div className="course-section">
      <div className="navbar">
        {["About", "University", "Collage", "ITI/Vocational", "Courses", "Coaching Center", "Tutor", "Consultants", "Social Media", "Photos", "Accolades", "Management", "Contact"].map((tab) => (
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

      <div className="course-chips">
        {formData.courses.map((item, i) => (
          <div className="chip" key={i}>{item.name.toUpperCase()}</div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="cancel-btn" onClick={fetchData}>Cancel</button>
      </div>
    </div>
  );
};

export default CourseSection;
