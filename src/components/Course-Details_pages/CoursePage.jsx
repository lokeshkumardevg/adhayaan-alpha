import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import Loder from "../Loder-page/Loder";
// import image1 from "../Images/calendar-date-icon-illustration_23-2151261471-removebg-preview.png";
// import image2 from "../Images/3d-nft-icon-digital-artist-male_629802-8-removebg-preview.png";
// import image3 from "../Images/money-blank-banner-sales-background_23-2151114593-removebg-preview.png";
import "./CoursePage.css";
import { useAuth } from "../ContextApi/auth";
import Loding from "../Loder/Loding";
import { Helmet } from "react-helmet";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
const CoursePage = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [consolidatedSubjects, setConsolidatedSubjects] = useState([]);
  const [show, setShow] = useState(true);
  const [rowIndex, setRowIndex] = useState(0);
  // const [courseId2,setCourseId2]=useState(id)
  const navigate = useNavigate();
  const { email } = useAuth();
  const apiKey = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch()
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
        const { course_mode_no, subject_name } = subject;
        if (!acc[course_mode_no]) {
          acc[course_mode_no] = [];
        }
        acc[course_mode_no].push(subject_name);
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
  const handleApplyNow = () => {
    // Save course_id in localStorage
    localStorage.setItem("course_id2", id);
    localStorage.setItem("courseFee2", courseDetails.res[0].course_type_price);
    localStorage.setItem("course_name2", courseDetails.res[0].course_name);
    localStorage.setItem("course_mode2", courseDetails.res[0].course_mode);
    localStorage.setItem(
      "courseCategory2",
      courseDetails.res[0].course_type_name
    );
    localStorage.setItem("courseStream2", courseDetails.res[0].stream_name);
    navigate("/sign-in/user"); // Navigate to sign-in page
  };

  useEffect(() => {
    getCourseDetails();
    window.scrollTo(0, 0);
  }, [id]);

  if (!courseDetails) {
    return <Loding />;
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course details</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container-course-details"onClick={()=>dispatch(hidenav())}>
        <div className="course-details-container">
          <div className="w-course-container">
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
              {/* <div className="div-class">
                <img src={image1} width={"50%"} alt="" />
                <h3 style={{ marginTop: "-10px" }}>Duration </h3>
                <p style={{ marginTop: "-30px" }}>
                  {courseDetails.res[0].duration} Years
                </p>
              </div> */}

              <div className="ag-courses_item">
                <div className="ag-courses-item_link">
                  <div className="ag-courses-item_bg" />
                  <div className="ag-courses-item_title">Duration</div>
                  <div className="ag-courses-item_date-box">
                    <p>{courseDetails.res[0].duration} Years</p>
                  </div>
                </div>
              </div>
              {/* <div className="div-class c-2">
                <img src={image2} width={"50%"} alt="" />
                <h3 style={{ marginTop: "-10px" }}>Mode </h3>
                <p style={{ marginTop: "-30px" }}>
                  {courseDetails.res[0].course_mode === "Y"
                    ? "Yearly"
                    : "Semester"}
                </p>
              </div> */}
              <div className="ag-courses_item">
                <div className="ag-courses-item_link">
                  <div className="ag-courses-item_bg" />
                  <div className="ag-courses-item_title">Mode</div>
                  <div className="ag-courses-item_date-box">
                    <p>
                      {courseDetails.res[0].course_mode === "Y"
                        ? "Yearly"
                        : "Semester"}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="div-class c-2">
                <img
                  src={image3}
                  width={"50%"}
                  alt=""
                  style={{ marginTop: "20px" }}
                />
                <h3>Course Fees </h3>
                <p>&#8377; {courseDetails.res[0].course_type_price}</p>
                
              </div> */}
              {/* <div class="ag-courses_item">
                  <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                    Course Fees
                    </div>

                    <div class="ag-courses-item_date-box">
                    <p>&#8377; {courseDetails.res[0].course_type_price}</p>
                    </div>
                  </a>
                </div> */}
              <div className="ag-courses_item">
                <div className="ag-courses-item_link">
                  <div className="ag-courses-item_bg" />
                  <div className="ag-courses-item_title">Course Fees</div>
                  <div className="ag-courses-item_date-box">
                    <p>&#8377; {courseDetails.res[0].course_type_price}</p>
                  </div>
                </div>
              </div>
            </div>
            <h3>Course code: {courseDetails.res[0].course_code}</h3>
            <h3 className="pipo">Subjects:</h3>
            {consolidatedSubjects.map((subjectGroup, index) => (
              <div key={index} className="course-detail">
                <div className="course-d">
                  <p style={{ color: "#fff" }}>
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
                  className={
                    show && rowIndex === index ? "content-d " : "hide-d"
                  }
                >
                  {subjectGroup.subjects.map((subject, idx) => (
                    <div key={idx}>
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
                // onClick={() => navigate("/sign-in")}
                onClick={handleApplyNow}
              >
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePage;
