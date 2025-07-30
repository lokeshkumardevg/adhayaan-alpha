import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import axios from "axios";
import "./Courses.css";
import Loding from "../Loder/Loding";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";

function PostCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { course_type_id } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);
  const apiKey = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch()
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    const getAllCoursetype = async () => {
      try {
        const { data } = await axios.get(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
          `${apiKey}admin/index.php/Api/get_course_type`
        );
        if (data?.res) {
          setCourses(data.res);
        } else {
          setError("Failed to fetch courses");
        }
      } catch (error) {
        setError("An error occurred while fetching courses");
      } finally {
        setLoading(false);
      }
    };

    getAllCoursetype();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Courses:", courses);
    const filtered = courses.filter(
      (courseType) => courseType.course_type_id === course_type_id
    );
    setFilteredCourses(filtered);
    console.log("Filtered Courses:", filtered);
  }, [courses, course_type_id]);

  if (loading) {
    return (
      <Layout>
        <div>
          <Loding />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div>{error}</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="course-div-parents" onClick={handlemenu2}>
        {filteredCourses.map((courseType) => (
          <div
            key={courseType.course_type_id}
            className="course-div-footer"
            style={{ height: "40%", width: "80%" }}
          >
            <h1 style={{ marginLeft: "40px" }}>
              {" "}
              {courseType.course_type_name}
            </h1>
            <div className="coursefooterlist">
              <ul>
                {courseType.course_list.length > 0 ? (
                  courseType.course_list.map((course) => (
                    <Link
                      to={`/course-details/${course.id}`}
                      key={course.id}
                      className="links"
                      style={{ textDecoration: "none", color: "#f7e5e5" }}
                    >
                      <div
                        className="footer-course-headings"
                        style={{
                          // background:'red',
                          minHeight: "30px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{ color: "#630000" }}
                          className="footer-div-c-name"
                        >
                          {course.course_name}
                        </div>
                        <div className="icon-div-c-nm">
                          <i
                            className="fas fa-arrow-circle-right"
                            style={{
                              fontSize: "24px",
                              position: "relative",
                              right: "25px",
                              color: "#630000",
                            }}
                          ></i>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No records found.</p>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default PostCourses;
