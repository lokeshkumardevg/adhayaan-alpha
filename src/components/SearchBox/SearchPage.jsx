import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import { Link, useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";

const SearchPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const apiKey = process.env.REACT_APP_API_URL;
  const handleClick = () => {
    navigate("/");
  };

  const getAllCourseTypes = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
        `${apiKey}admin/index.php/Api/get_course_type`
      );
      if (data?.res) {
        setCourses(data.res);
      }
    } catch (error) {
      console.error("Error fetching course types:", error);
    }
  };

  useEffect(() => {
    getAllCourseTypes();
  }, []);

  const filteredCourses = courses.filter((courseType) => {
    return (
      (courseType.course_list &&
        courseType.course_list.some(
          (course) =>
            (course.course_name &&
              course.course_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())) ||
            (course.course_short_code &&
              course.course_short_code
                .toLowerCase()
                .includes(searchTerm.toLowerCase()))
        )) ||
      (courseType.stream_name &&
        courseType.stream_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())) ||
      (courseType.duration &&
        courseType.duration.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const renderCourses = () => {
    if (searchTerm.trim() === "") {
      // If search term is empty, render all courses
      return courses.map((courseType) => (
        <div key={courseType.course_type_id}>
          <ul>
            {courseType.course_list.map((course) => (
              <Link
                key={course.id}
                to={`/course-details/${course.id}`}
                className="linksss"
                style={{ color: "#630000" }}
              >
                <p
                  style={{
                    marginLeft: "-40px",
                    cursor: "pointer",
                    color: "#666666",
                  }}
                >
                  {course.course_name} ({course.course_short_code})
                </p>
                <hr className="hr-2" />
              </Link>
            ))}
          </ul>
        </div>
      ));
    } else {
      // If there's a search term, render filtered courses or all courses for matching course type name
      const matchingCourseType = courses.find((courseType) =>
        courseType.course_type_name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      if (matchingCourseType) {
        return (
          <div key={matchingCourseType.course_type_id}>
            <h3>{matchingCourseType.course_type_name}</h3>
            <ul style={{ color: "#630000" }}>
              {matchingCourseType.course_list.map((course) => (
                <Link
                  key={course.id}
                  to={`/course-details/${course.id}`}
                  className="linksss"
                >
                  <p style={{ marginLeft: "-40px", cursor: "pointer" }}>
                    {course.course_name} ({course.course_short_code})
                  </p>
                  <hr className="hr-2" />
                </Link>
              ))}
            </ul>
          </div>
        );
      } else {
        // If no matching course type, render filtered courses
        return filteredCourses.length > 0 ? (
          filteredCourses.map((courseType) => (
            <div key={courseType.course_type_id}>
              {/* <h3>{searchTerm && courseType.course_type_name}</h3> */}
              <ul style={{ color: "#630000" }}>
                {courseType.course_list
                  .filter(
                    (course) =>
                      course.course_name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      (course.course_short_code &&
                        course.course_short_code
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()))
                  )
                  .map((course) => (
                    <Link
                      key={course.id}
                      to={`/course-details/${course.id}`}
                      className="linksss"
                    >
                      <p style={{ marginLeft: "-40px", cursor: "pointer" }}>
                        {course.course_name} ({course.course_short_code})
                      </p>
                      <hr className="hr-2" />
                    </Link>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No matching courses found</p>
        );
      }
    }
  };

  return (
    <div className="search-page">
      <div className="inner-search-page">
        <div className="cros-div">
          <i className="fa-solid fa-xmark" onClick={handleClick}></i>
        </div>
        <div className="input-sp-div">
          <div className="i-d">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search Courses, Streams, Duration & more"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <p style={{ color: "#cfcfcf" }}>Popular Searches</p>
          {renderCourses()}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
