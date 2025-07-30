import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loder from "../Loder-page/Loder";
import { useAuth } from "../ContextApi/auth";
const CoursePage2 = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [consolidatedSubjects, setConsolidatedSubjects] = useState([]);
  const [show, setShow] = useState(true);
  const [rowIndex, setRowIndex] = useState(0);
  const navigate = useNavigate();
  const { email } = useAuth();
  const apiKey = process.env.REACT_APP_API_URL;
  const getCourseDetails = async () => {
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_details",
        `${apiKey}admin/index.php/Api/get_course_details`,
        {
          course_id: id,
        }
      );
      setCourseDetails(response.data);

      const syllabusDetails = response.data.res[0].syllabus_details;

      // Group syllabusDetails by course_mode_no
      const groupedSubjects = syllabusDetails.reduce((acc, subject) => {
        const { course_mode_no, subject_name, pdf_link } = subject;
        if (!acc[course_mode_no]) {
          acc[course_mode_no] = [];
        }
        acc[course_mode_no].push({ subject_name, pdf_link });
        return acc;
      }, {});

      // Convert groupedSubjects into an array
      const consolidatedSubjectsArray = Object.entries(groupedSubjects).map(
        ([course_mode_no, subjects]) => ({
          course_mode_no,
          subjects,
        })
      );

      setConsolidatedSubjects(consolidatedSubjectsArray);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  useEffect(() => {
    getCourseDetails();
  }, [id]);

  if (!courseDetails) {
    return <Loder />;
  }

  return (
    <Layout>
      <div className="container-course-details">
        <div className="course-details-container">
          <h3 className="head">
            {courseDetails.res[0].course_name} (
            {courseDetails.res[0].course_short_code})
          </h3>
          <hr className="hr-line" />
          <h3>About Program</h3>
          <hr className="hr-line-2" />
          <p
            dangerouslySetInnerHTML={{
              __html: courseDetails.res[0].about_program,
            }}
          />
          <div className="wrap-course-d">
            <div className="div-class">
              <h3>Duration </h3>
              <p>{courseDetails.res[0].duration} Years</p>
            </div>
            <div className="div-class c-2">
              <h3>Mode </h3>
              <p>
                {courseDetails.res[0].course_mode === "Y"
                  ? "Yearly"
                  : "Semester"}
              </p>
            </div>
            <div className="div-class c-2">
              <h3>Course Fees </h3>
              <p>&#8377; {courseDetails.res[0].course_type_price}</p>
              <hr className="hr-line-2" />
            </div>
          </div>

          <h3 className="pipo">Subjects:</h3>
          {consolidatedSubjects.map((subjectGroup, index) => (
            <div key={index} className="course-detail">
              <div className="course-d">
                <p>
                  {subjectGroup.course_mode_no}{" "}
                  {courseDetails.res[0].course_mode === "Y"
                    ? "Year"
                    : "Semester"}
                </p>
                {show && rowIndex === index ? (
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => setShow(false)}
                  ></i>
                ) : (
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      setShow(true);
                      setRowIndex(index);
                    }}
                  ></i>
                )}
              </div>
              <div
                className={show && rowIndex === index ? "content-d " : "hide-d"}
              >
                {subjectGroup.subjects.map((subject, idx) => (
                  <div key={idx}>
                    {email ? (
                      // <a href={subject.pdf_link} target="_blank" rel="noopener noreferrer" style={{color:'black'}}>PDF Link</a>
                      <a
                        href={subject.pdf_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {subject.subject_name}
                      </a>
                    ) : (
                      <p
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <i
                          class="fa-regular fa-circle-dot"
                          style={{ marginTop: "-5px", fontSize: "10px" }}
                        ></i>
                        {subject}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div
            className="for-button-container-4 three three-2"
            style={{ paddingBottom: "20px" }}
          >
            <button
              style={{
                textTransform: "uppercase",
                marginLeft: "90px",
                background: "#630000",
                color: "#fff",
              }}
              onClick={() => navigate("/sign-in/user")}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePage2;
