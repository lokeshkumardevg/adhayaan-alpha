import React, { useState, useEffect } from "react";
import "./SignInStyle.css";
import Layout from "../Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const SignInPages = () => {
  const navigate = useNavigate();
  const [courseFee, setCourseFee] = useState(
    localStorage.getItem("courseFees") || ""
  );
  const [courseList, setCourseList] = useState([]);
  const [courseName, setCourseName] = useState(
    localStorage.getItem("courseName") || ""
  );
  const [courseCategory, setCourseCategory] = useState(
    localStorage.getItem("courseCategory") || ""
  );
  const [courseCode, setCourseCode] = useState(
    localStorage.getItem("courseCode") || ""
  );
  const [selectedCourseShow, setSelectedCourseShow] = useState(false);
  const [selectedCategoryShow, setSelectedCategoryShow] = useState(false);
  const [courseStream, setCourseStream] = useState(
    localStorage.getItem("courseStream") || ""
  );
  const [selectedStreamShow, setSelectedStreamShow] = useState(false);
  const [selectedMode, setSelectedMode] = useState(
    localStorage.getItem("selectedMode") || ""
  );
  const [selectedCourseModeShow, setSelectedCourseModeShow] = useState(false);
  const [course_code, setCoursecode] = useState(courseCode);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchStream, setSearchStream] = useState("");
  const apiKey = process.env.REACT_APP_API_URL;
  const getAllCoursetype = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
        `${apiKey}admin/index.php/Api/get_course_type`
      );
      if (data?.res) {
        setCourseList(data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    setCourseName(value);
    setSelectedCourseShow(value === "" ? true : false);
    setSelectedCategoryShow(false);
    if (value !== "") {
      setAndStoreInLocalStorage("courseName", value);
    }
  };

  // Function to set and store data in local storage
  const setAndStoreInLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  
  const handleItemClick = (value) => {
    setCourseName(value);
    setSelectedCourseShow(false);

    // Find the selected course from the course list
    const selectedCourse = courseList.find((courseType) =>
      courseType.course_list.some((course) => course.course_name === value)
    );

    // If the selected course is found, set its category and stream in state
    if (selectedCourse) {
      const selectedCourseDetails = selectedCourse.course_list.find(
        (course) => course.course_name === value
      );
      if (selectedCourseDetails) {
        // Set course category and stream
        setCourseCategory(selectedCourseDetails.course_type_name);
        setCourseStream(selectedCourseDetails.stream_name);
        setSelectedMode(
          selectedCourseDetails.course_mode === "Y" ? "Yearly" : "Semester"
        );
        // Optionally, you can also store these values in localStorage
        localStorage.setItem(
          "courseCategory",
          selectedCourseDetails.course_type_name
        );
        localStorage.setItem("courseStream", selectedCourseDetails.stream_name);
        localStorage.setItem("course_id", selectedCourseDetails.id);
        localStorage.setItem(
          "courseFee",
          selectedCourseDetails.course_type_price
        );
      }
    }
  };

  const handleInputChangeCategory = (e) => {
    const { value } = e.target;
    setCourseCategory(value);
    setSelectedCategoryShow(value === "" ? true : false);
    setSelectedCourseShow(false); // Close course name dropdown when category is selected
  };
  const handleItemClickCategory = (value) => {
    setCourseCategory(value);
    setSelectedCategoryShow(false); // Close the list after selecting an item
  };

  const handleInputChangeStream = (e) => {
    const { value } = e.target;
    setCourseStream(value);
    setSelectedStreamShow(value === "" ? true : false);
  };
  const handleItemClickStream = (value) => {
    setCourseStream(value);
    setSelectedStreamShow(false); // Close the list after selecting an item
  };
  const handleInputChangeMode = (e) => {
    const { value } = e.target;
    setSelectedMode(value);
    setSelectedCourseModeShow(value === "" ? true : false);
  };
  const handleItemClickMode = (value) => {
    setSelectedMode(value);
    setSelectedCourseModeShow(false); // Close the list after selecting an item
  };

  const toggleCourseList = () => {
    setSelectedCourseShow(!selectedCourseShow);
    setSelectedCategoryShow(false); // Close category dropdown when course name dropdown is toggled
    setSelectedStreamShow(false);
    setSelectedCourseModeShow(false);
  };

  const toggleCategoryList = () => {
    setSelectedCategoryShow(!selectedCategoryShow);
    setSelectedStreamShow(false);
    setSelectedCourseModeShow(false);

    setSelectedCourseShow(false); // Close course name dropdown when category dropdown is toggled
  };
  const toggleStreamList = () => {
    setSelectedStreamShow(!selectedStreamShow);
    setSelectedCourseModeShow(false);
    setSelectedCourseShow(false);
    setSelectedCategoryShow(false);
  };

  const toggleModeList = () => {
    setSelectedCourseModeShow(!selectedCourseModeShow);
    setSelectedCourseShow(false);
    setSelectedCategoryShow(false);
    setSelectedStreamShow(false);
  };
  const handleNextClick = () => {
    // Save all input values to local storage
    setAndStoreInLocalStorage("courseName", courseName);
    setAndStoreInLocalStorage("courseCategory", courseCategory);
    setAndStoreInLocalStorage("courseStream", courseStream);
    setAndStoreInLocalStorage("selectedMode", selectedMode);
    setAndStoreInLocalStorage("courseFees", courseFee);
    // Navigate to the next page
    navigate("/personal-information");
  };
  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      console.log("Searching for:", searchTerm);
      // Perform search logic here
    }
  };
  const searchHandle = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      console.log("Searching for:", searchTerm);
      // Perform search logic here
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getAllCoursetype();
  }, []);
  return (
    <Layout>
      {console.log("===>", courseCode, courseName)}
      {console.log("===>", courseFee)}

      <div className="sign-pages-container">
        <div className="inner-sign-pages-container">
          <div className="width-sign-pages-contaienr">
            <div className="for-heading-w-container">
              <h2>Choose the course that’s right for you</h2>
            </div>
            <div className="input-div-s-p">
              <div className="input-div-s-right">
                {/* <div className="for-icons">
                  <div className="div-f f-d">
                    <input
                      type="text"
                      onChange={(e) => setCourseCode(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={courseCode}
                    />
                    <div
                      className={
                        courseCode.length === 0
                          ? "labelline fix-0"
                          : "labelline fix fix-0"
                      }
                    >
                      Course Code
                      {console.log(courseCode)}
                    </div>
                  </div>
                  <i
                    className="fa-regular fa-circle-question"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Hello world!"
                  ></i>
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
                </div> */}
                {/* course name */}

                <div className="div-f f-d f-d-1">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    style={{ zIndex: "1" }}
                    value={courseName}
                    onClick={toggleCourseList}
                  />
                  <div
                    className={
                      courseName.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Course Name
                  </div>
                  {selectedCourseShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      onClick={toggleCourseList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    // <i class="fa-solid fa-chevron-down"></i>
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={toggleCourseList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedCourseShow ? "search-bar-div" : "hide-list"
                  }
                >
                  <div className="s-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="s-input-div">
                    <input
                      type="text"
                      placeholder="Search...."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onClick={handleSearch}
                    />
                  </div>
                </div>
                <div
                  className={
                    selectedCourseShow ? "show-list-2-39" : "hide-list"
                  }
                >
                  {courseList.length > 0 &&
                    courseList.map((courseType) => (
                      <div
                        key={courseType.course_type_id}
                        className="course-div"
                      >
                        {courseType.course_list.length > 0 && (
                          <>
                            {/* <ul style={{ color: "#630000" }}>
                              {courseType.course_list.map((course) => (
                                <Link
                                  key={course.id}
                                  className="linkss"
                                  style={{ color: "#fff" }}
                                >
                                  <p
                                    className="inside-c-d"
                                    onClick={() =>
                                      handleItemClick(course.course_name)
                                    }
                                  >
                                    {course.course_name}
                                  </p>
                                </Link>
                              ))}
                            </ul> */}
                            <ul style={{ color: "#630000" }}>
                              {courseType.course_list
                                .filter((course) =>
                                  course.course_name
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                )
                                .map((course) => (
                                  <Link
                                    key={course.id}
                                    className="linkss"
                                    style={{ color: "#fff" }}
                                  >
                                    <p
                                      className="inside-c-d"
                                      onClick={() =>
                                        handleItemClick(course.course_name)
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

                {/* course category */}

                <div className="div-f f-d f-d-1 f-d-34">
                  <input
                    type="text"
                    onChange={handleInputChangeCategory}
                    style={{ zIndex: "1" }}
                    value={courseCategory}
                    onClick={toggleCategoryList}
                  />
                  <div
                    className={
                      courseCategory.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Course Category
                  </div>
                  {selectedCategoryShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                      onClick={toggleCategoryList}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={toggleCourseList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedCategoryShow ? "show-list-2-3 " : "hide-list"
                  }
                  //   style={{padding:'40px 0px'}}
                >
                  {courseList.map((courseType) => (
                    <div
                      key={courseType.course_type_id}
                      className="course-div c-d-2"
                    >
                      <p
                        className="inside-c-d-h"
                        onClick={() =>
                          handleItemClickCategory(courseType.course_type_name)
                        }
                      >
                        {courseType.course_type_name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="input-div-s-left">
                {/* course stream */}
                <div className="div-f f-d">
                  <input
                    type="text"
                    onChange={handleInputChangeStream}
                    style={{ zIndex: "1" }}
                    value={courseStream}
                    onClick={toggleStreamList}
                  />
                  <div
                    className={
                      courseStream.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Stream{" "}
                  </div>
                  {selectedStreamShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                      onClick={toggleStreamList}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={toggleCourseList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>

                <div
                  className={
                    selectedStreamShow ? "search-bar-div" : "hide-list"
                  }
                >
                  <div className="s-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="s-input-div">
                    <input
                      type="text"
                      placeholder="Search...."
                      value={searchStream}
                      onChange={(e) => setSearchStream(e.target.value)}
                      onClick={searchHandle}
                    />
                  </div>
                </div>

                <div
                  className={selectedStreamShow ? "show-list-45" : "hide-list"}
                >
                  {courseList.map((courseType) => (
                    <div key={courseType.stream_name} className="course-div">
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
                                    handleItemClickStream(course.stream_name)
                                  }
                                >
                                  {course.stream_name}
                                </p>
                              </Link>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* //duration */}
                <div className="div-f f-d">
                  <input
                    type="text"
                    onChange={handleInputChangeMode}
                    style={{ zIndex: "1" }}
                    value={selectedMode}
                    onClick={toggleModeList}
                  />
                  <div
                    className={
                      selectedMode.length === 0 ? "labelline" : "labelline fix"
                    }
                  >
                    Duration{" "}
                  </div>
                  {selectedCourseModeShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      onClick={toggleModeList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      onClick={toggleCourseList}
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedCourseModeShow ? "show-list-55" : "hide-list"
                  }
                >
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleItemClickMode("Yearly")}
                  >
                    Yearly
                  </p>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleItemClickMode("Semester")}
                  >
                    Semester
                  </p>
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
              className="for-button-container-4 three t-btn"
              style={{ paddingBottom: "20px" }}
            >
              {/* <button>S K I P</button> */}
              <button onClick={() => navigate("/choose-course")}>
                P R E V I O U S
              </button>
              <button onClick={handleNextClick}>N E X T</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPages;
