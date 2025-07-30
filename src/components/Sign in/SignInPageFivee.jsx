import React, { useEffect, useState } from "react";
import "./SignIn5.css";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import axios from "axios";

const SignInPageFivee = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [courses, setCourses] = useState([]);
  const [stream, setStream] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseShow, setSelectedCourseShow] = useState(false);
  const [selectedStream, setSelectedStream] = useState("");
  const [selectedStreamShow, setSelectedStreamShow] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedCourseCategoryShow, setSelectedCourseCategoryShow] =
    useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_URL;
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleDropdownCourse = () => {
    setSelectedCourseShow(!selectedCourseShow);
  };

  const toggleDropdownCourseCategory = () => {
    setSelectedCourseCategoryShow(!selectedCourseCategoryShow);
  };

  const toggleDropdownStream = () => {
    setSelectedStreamShow(!selectedStreamShow);
  };

  const getAllCoursetype = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
        `${apiKey}admin/index.php/Api/get_course_type`
      );
      if (data?.res) {
        setCourses(data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllStream = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_all_stream/"
        `${apiKey}admin/index.php/Api/get_all_stream/`
      );
      if (data?.res) {
        setStream(data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllStream();
    getAllCoursetype();
  }, []);

  // F u n c t i o n t o h a n d l e c h a n g e s i n t h e c o u r s e c o d e i n p u t
  const handleCourseCodeChange = async (event) => {
    const courseCode = event.target.value;
    setInputValue(courseCode);

    // F e t c h c o u r s e d e t a i l s b a s e d o n t h e e n t e r e d c o u r s e c o d e
    try {
      const { data } = await axios.get(
        `${apiKey}admin/index.php/Api/get_course_details/${courseCode}`
      );
      if (data?.res) {
        const courseDetails = data.res;
        setSelectedCourse(courseDetails.course_type_name);
        setSelectedStream(courseDetails.stream_name);
        setSelectedMode(courseDetails.course_mode);
        setSelectedCourseName(courseDetails.course_name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="sign-page-5-container">
        <div className="inner-sign-page-5-container">
          <div className="width-cotainer-div">
            <div className="div-1-for-heading">
              <h3>Choose the course that’s right for you</h3>
            </div>
            <div className="div-2-for-input">
              <div className="div-2-for-input-left">
                <div className="entryarea-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleCourseCodeChange} // U p d a t e c o u r s e d e t a i l s b a s e d o n c o u r s e c o d e i n p u t
                  />
                  <div className="label l-7">Course Code</div>
                  <div className="bulb-icon">
                    <i
                      className="fa-regular fa-circle-question"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Hello world!"
                    ></i>
                  </div>
                  <Tooltip
                    id="my-tooltip"
                    style={{
                      backgroundColor: "#630000",
                      color: "#fff",
                      width: "100px",
                      height: "30px",
                      fontSize: "10px",
                      lineHeight: "10px",
                    }}
                  />
                </div>
                <div className="wrap-area">
                  <div className="entryarea">
                    <input
                      type="text"
                      value={selectedCourseName}
                      onClick={toggleDropdownCourse}
                    />
                    <div
                      className={
                        selectedCourseName.length === 0 ? "label" : "fix-label"
                      }
                    >
                      Course Name
                    </div>
                    <i
                      className={`fa-solid fa-caret-${
                        selectedCourseShow ? "up" : "down"
                      }`}
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={toggleDropdownCourse}
                    ></i>
                  </div>
                  <div
                    className={selectedCourseShow ? "show-list" : "hide-list"}
                  >
                    {courses.map((courseType) => (
                      <div
                        key={courseType.course_type_id}
                        className="course-div"
                      >
                        {courseType.course_list.length > 0 && (
                          <>
                            <ul style={{ color: "#630000" }}>
                              {courseType.course_list.map((course) => (
                                <Link
                                  key={course.id}
                                  className="linkss"
                                  style={{ color: "#fff" }}
                                >
                                  <p
                                    className="inside-c-d"
                                    onClick={() =>
                                      setSelectedCourseName(course.course_name)
                                    }
                                  >
                                    {course.course_name}
                                  </p>
                                </Link>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="wrap-area">
                  <div className="entryarea">
                    <input
                      type="text"
                      value={selectedStream}
                      onClick={toggleDropdownStream}
                    />
                    <div
                      className={
                        selectedStream.length === 0 ? "label" : "fix-label"
                      }
                    >
                      Stream
                    </div>
                    <i
                      className={`fa-solid fa-caret-${
                        selectedStreamShow ? "up" : "down"
                      }`}
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={toggleDropdownStream}
                    ></i>
                  </div>
                  <div
                    className={
                      selectedStreamShow ? "show-list s-l-2" : "hide-list"
                    }
                  >
                    {stream.map((streamType) => (
                      <div
                        key={streamType.course_type_id}
                        className="course-div"
                      >
                        <p
                          className="in-c-d-h"
                          onClick={() =>
                            setSelectedStream(streamType.strem_name)
                          }
                        >
                          {streamType.strem_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="div-2-for-input-right">
                <div className="wrap-area">
                  <div className="entryarea">
                    <input
                      type="text"
                      value={selectedCourse}
                      onClick={toggleDropdownCourseCategory}
                    />
                    <div
                      className={
                        selectedCourse.length === 0
                          ? "label label-22"
                          : "fix-label"
                      }
                    >
                      Course Category
                    </div>
                    <i
                      className={`fa-solid fa-caret-${
                        showDropdown ? "up" : "down"
                      }`}
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={toggleDropdownCourseCategory}
                    ></i>
                  </div>
                  <div
                    className={
                      selectedCourseCategoryShow
                        ? "show-list s-l-2"
                        : "hide-list"
                    }
                  >
                    {courses.map((courseType) => (
                      <div
                        key={courseType.course_type_id}
                        className="course-div c-d-2"
                      >
                        <p
                          className="inside-c-d-h"
                          onClick={() =>
                            setSelectedCourse(courseType.course_type_name)
                          }
                        >
                          {courseType.course_type_name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="wrap-area">
                  <div className="entryarea">
                    <input
                      type="text"
                      value={selectedMode}
                      onClick={toggleDropdown}
                    />
                    <div
                      className={
                        selectedMode.length === 0 ? "label" : "fix-label"
                      }
                    >
                      Duration
                    </div>
                    <i
                      className={`fa-solid fa-caret-${
                        showDropdown ? "up" : "down"
                      }`}
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={toggleDropdown}
                    ></i>
                  </div>
                  <div className={showDropdown ? "show-list " : "hide-list"}>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedMode("Yearly")}
                    >
                      Yearly
                    </p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setSelectedMode("Semester")}
                    >
                      Semester
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="note-container">
              <p>
                *Full availability subject to your internet service and device
                capabilities. Not all content is available in all resolutions.
                See our Terms of Use for more details.
              </p>
              <p>
                *Only people who live with you may use your account. Study on 2
                different devices at the same time with Premium.
              </p>
            </div>

            <div
              className="for-button-container-4 three pn-btn"
              style={{ paddingBottom: "20px" }}
            >
              <button
                onClick={() => navigate("/sign-in-4")}
                style={{ background: "#630000", color: "#fff" }}
              >
                P R E V I O U S
              </button>
              <button
                onClick={() => navigate("/sign-in-6")}
                style={{ background: "#630000", color: "#fff" }}
              >
                N E X T
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPageFivee;
