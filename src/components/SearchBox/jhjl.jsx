import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchPage.css";
import { Link, useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";

const SearchPage2 = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    navigate("/");
  };

  const getAllCourseTypes = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
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

  const renderCourses = () => {
    return courses.map((courseType) => {
      const filteredCourseList = courseType.course_list.filter((course) =>
        course.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (course.course_short_code && course.course_short_code.toLowerCase().includes(searchTerm.toLowerCase()))
      );

      if (courseType.course_type_name.toLowerCase().includes(searchTerm.toLowerCase()) || filteredCourseList.length > 0) {
        return (
          <div key={courseType.course_type_id}>
            <h3>{courseType.course_type_name}</h3>
            <ul style={{ color: "#630000" }}>
              {filteredCourseList.map((course) => (
                <Link
                  key={course.id}
                  to={`/course-details/${course.id}`}
                  className="linksss"
                >
                  <p style={{ marginLeft: "-40px" }}>
                    {course.course_name} ({course.course_short_code})
                  </p>
                </Link>
              ))}
            </ul>
          </div>
        );
      }
      return null;
    });
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

export default SearchPage2;
