import React, { useEffect, useState } from "react";
import "./Header.css";
// import logo from "../../Images/Aadhyayan-logo-final.png";
// import logo from "../../Images/Aadhyayan 3 7 May 2024 White.png";
import logo from "../../Images/Aadhyayan-3-7-May-2024.png";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/navSlice";
import { useNavigate } from "react-router-dom";
import { toggleNav } from "../../store/slices/sideNavSlice";
// import { logInShowNav } from "../../store/slices/sideNavSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../ContextApi/auth";
import { resetPasswordShow, showvalue } from "../../store/slices/trueFalse";
import { toggledashnavshow } from "../../store/slices/headerMenuNav";

const Header = () => {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);
  const [stream, setStream] = useState([]);
  const [courses, setCourses] = useState([]);
  const [show, setShow] = useState("Course Type");
  // const [hide, setHide] = useState(false);
  const [course_id, setCourseId] = useState(
    localStorage.getItem("course_id") || ""
  );
  const apiKey = process.env.REACT_APP_API_URL;
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.show);
  const sideNav = useSelector((state) => state.nav.hide);
  const isLoggedIn = useSelector((state) => state.nav.hide);
  const { email } = useAuth();
  const hide = useSelector((state) => state.headersmenusnavs.hadernavshowmenu);
  const handleLogout = () => {
    // email: null;
    localStorage.removeItem("AdhyayanAuth");
    localStorage.removeItem("getStartedEmail");
    localStorage.removeItem("enrolmentNo");
    localStorage.removeItem("recipient_email");
    localStorage.removeItem("selectedMode");
    localStorage.removeItem("address");
    localStorage.removeItem("courseName");
    localStorage.removeItem("collageName");
    localStorage.removeItem("name");
    localStorage.removeItem("giftamount");
    localStorage.removeItem("courseFee");
    localStorage.removeItem("finalAmount");
    localStorage.removeItem("course_id");
    localStorage.removeItem("userId");
    localStorage.removeItem("Signupemail");
    localStorage.removeItem("fatherName");
    localStorage.removeItem("contactNo");
    localStorage.removeItem("universityName");
    localStorage.removeItem("email");
    localStorage.removeItem("courseStream");
    localStorage.removeItem("courseCategory");
    localStorage.removeItem("course_id_3");
    localStorage.removeItem("fatherName23");
    localStorage.removeItem("course_name2");
    localStorage.removeItem("gender23");
    localStorage.removeItem("course_duration2");
    localStorage.removeItem("course_name2");
    localStorage.removeItem("gender");
    localStorage.removeItem("course_fees2");
    localStorage.removeItem("courseFees");
    localStorage.removeItem("finalamount");
    localStorage.removeItem("course_id2");
    localStorage.removeItem("course_mode2");
    localStorage.removeItem("course_stream2");
    localStorage.removeItem("course_type_name2");
    localStorage.removeItem("course_id_3");
    localStorage.removeItem("userId");
    localStorage.removeItem("name23");
    localStorage.removeItem("savedPassword");
    localStorage.removeItem("second_course_id");
    localStorage.removeItem("isFirstRender");
    localStorage.removeItem("second_pay_status");
    localStorage.removeItem("pay_status");
    localStorage.removeItem("profile_image");
    navigate("/");
    window.location.reload();
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

  const mouseLeaveEvent = () => {
    dispatch(decrement());
    setShow("Course Type");
  };
  const handleReset = () => {
    dispatch(resetPasswordShow());
    navigate("/dashboard/user");
  };
  const handleDash = () => {
    navigate("/dashboard/user");
    dispatch(showvalue());
  };
  useEffect(() => {
    getAllStream();
    getAllCoursetype();
    dispatch(decrement());
  }, []);

  return (
    <>
      <div className="header-container">
        <div className="inner-header-container">
          <div className="one-div" onClick={() => dispatch(decrement())}>
            {console.log("nadklsj bkabdj fqwjeb ", course_id)}
            <img
              src={logo}
              alt=""
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          {console.log("dsfasdf", email)}
          <div className="two-div hide-two">
            <div className="div" onMouseEnter={() => dispatch(increment())}>
              <p>
                {console.log(isLoggedIn)}
                BROWSE by <span> Course, Stream & Duration</span>{" "}
                <i className="fa-solid fa-angle-down eye"> </i>
                <div
                  className={count ? "drop-down-container" : "dm-hide"}
                  onMouseLeave={() => mouseLeaveEvent()}
                >
                  <div className="right-d-div" style={{ color: "#630000" }}>
                    <div
                      className="h-i-1"
                      onMouseEnter={() => setShow("Course Type")}
                    >
                      <h3>Course Type</h3>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div
                      className="h-i-1"
                      onMouseEnter={() => setShow("Stream")}
                    >
                      <h3>Stream</h3>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div
                      className="h-i-1"
                      onMouseEnter={() => setShow("Duration")}
                    >
                      <h3>Duration</h3>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                  <div className="left-d-div" style={{ color: "#630000" }}>
                    {show === "Course Type" && (
                      <>
                        {courses.map((courseType) => (
                          <div
                            key={courseType.course_type_id}
                            className="course-div"
                          >
                            {courseType.course_list.length > 0 ? (
                              <>
                                <h3>{courseType.course_type_name}</h3>
                                <ul style={{ color: "#630000" }}>
                                  {courseType.course_list.map((course) => (
                                    <Link
                                      key={course.id}
                                      to={`/course-details/${course.id}`}
                                      className="linkss"
                                      onClick={() => dispatch(decrement())}
                                    >
                                      <p>
                                        {course.course_name} (
                                        {course.course_short_code})
                                      </p>
                                    </Link>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <>
                                <h3>{courseType.course_type_name}</h3>
                                <p
                                  style={{
                                    marginLeft: "40px",
                                    fontSize: "12px",
                                  }}
                                >
                                  Courses not found
                                </p>
                              </>
                            )}
                          </div>
                        ))}
                      </>
                    )}
                    {show === "Stream" && (
                      <>
                        {stream.map((streamType) => (
                          <div
                            key={streamType.course_type_id}
                            className="course-div"
                          >
                            {streamType.course_list.length > 0 ? (
                              <>
                                <h3>{streamType.strem_name}</h3>
                                <ul>
                                  {streamType.course_list.map((item) => (
                                    <Link
                                      key={item.id}
                                      to={`/course-details/${item.id}`}
                                      className="linkss"
                                      onClick={() => dispatch(decrement())}
                                    >
                                      <p>
                                        {item.course_name} (
                                        {item.course_short_code})
                                      </p>
                                    </Link>
                                  ))}
                                </ul>
                              </>
                            ) : (
                              <>
                                <h3>{streamType.strem_name}</h3>
                                <p style={{ marginLeft: "40px" }}>
                                  Stream's not found
                                </p>
                              </>
                            )}
                          </div>
                        ))}
                      </>
                    )}

                    {show === "Duration" && (
                      <>
                        <div className="left-div-h">
                          <h2>Yearly</h2>
                          {courses
                            .flatMap((course) =>
                              course.course_list.filter(
                                (item) => item.course_mode === "Y"
                              )
                            )
                            .map((course, index) => (
                              <Link
                                to={`/course-details/${course.id}`}
                                className="linkss"
                                onClick={() => dispatch(decrement())}
                              >
                                <p key={index}>
                                  {course.course_name} (
                                  {course.course_short_code})
                                </p>
                              </Link>
                            ))}
                        </div>
                        <div className="right-div-h">
                          <h2>Semester</h2>
                          {courses
                            .flatMap((course) =>
                              course.course_list.filter(
                                (item) => item.course_mode === "S"
                              )
                            )
                            .map((course, index) => (
                              <Link
                                to={`/course-details/${course.id}`}
                                className="linkss"
                                onClick={() => dispatch(decrement())}
                              >
                                <p key={index}>
                                  {course.course_name} (
                                  {course.course_short_code})
                                </p>
                              </Link>
                            ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </p>
            </div>
          </div>

          <div
            className="three-div"
            // style={{ overflowX: "hidden" }}
            onClick={() => dispatch(decrement())}
          >
            {/* login-institute */}
            {!email ? (
              <>
                <div className="btn-div bts">
                  <button
                    className="btn hide-btn"
                    onClick={() => navigate("/registerInstitute")}
                  >
                    Register Institute
                  </button>
                </div>
                <div className="btn-div">
                  <button
                    className="btn"
                    onClick={() => navigate("/sign-in/user")}
                  >
                    Sign In
                  </button>
                </div>
              </>
            ) : (
              <div
                className="icon-container"
                //  onClick={() => setHide(!hide)}
                onClick={() => dispatch(toggledashnavshow())}
              >
                <div className="icon-div">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div className={hide ? "icon-menu" : "hide-coantainer"}>
                  {course_id > 0 && (
                    <p className="ss-pp" onClick={handleDash}>
                      Dashboard <i class="fa-regular fa-user"></i>
                    </p>
                  )}

                  <p
                    className="ss-pp"
                    onClick={() => navigate("/profile-edit")}
                  >
                    Edit Profile <i class="fa-regular fa-pen-to-square"></i>
                  </p>
                  <p className="ss-pp" onClick={handleReset}>
                    Reset Password <i class="fa-regular fa-pen-to-square"></i>
                  </p>
                  <p className="ss-pp" onClick={handleLogout}>
                    Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  </p>
                </div>
              </div>
            )}

            {!email && (
              <div className="burger-box" onClick={() => dispatch(toggleNav())}>
                <div
                  className="burger-line"
                  data-aos={ok && "flip-left"}
                  data-aos-duration={ok && "1000"}
                ></div>
                <div
                  className="burger-line-2"
                  data-aos={ok && "flip-left"}
                  data-aos-duration={ok && "1000"}
                ></div>
              </div>
            )}

            {sideNav && (
              <div
      
              >
                <div
                  className="side-bar"
                
                  style={{ zIndex: "99999999999999px" }}
                >
                  <div className="headericons">
                    {" "}
                    {/* saj */}
                    <i
                      className="fa-solid fa-xmark"
                      // data-aos="flip-left"
                      data-aos-duration="1000"
                      style={{
                        fontSize: "25px",
                        position: "absolute",
                        right: "30px",
                        top: "30px",
                        padding: "15px",
                      }}
                      onClick={() => dispatch(toggleNav())}
                    ></i>
                  </div>

                  <div
                    className="side-bar-content"
                    style={{ paddingLeft: "55px", paddingTop: "80px" }}
                  >
                    <Link
                      to={"/about"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        About Us
                      </p>
                    </Link>

                    <Link
                      to={"/gift-form"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Gift Card
                      </p>
                    </Link>
                    <Link
                      to={"/contact"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Contact Us
                      </p>
                    </Link>
                    <Link
                      to={"/become-a-partner"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Became a partner
                      </p>
                    </Link>
                    <Link
                      to={"/privacy-policy"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      {" "}
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Privacy policy
                      </p>
                    </Link>
                    {/* <Link style={{ textDecoration: "none", color: "#6e6e6e" }}>
                      {" "}
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Reset Password
                      </p>
                    </Link> */}
                    <Link
                      to={"/Needhelp"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                    >
                      {" "}
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Need Help
                      </p>
                    </Link>
                    <Link
                      to={"/login-institute"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                      className="hide-link"
                    >
                      {" "}
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        register Institute
                      </p>
                    </Link>
                    <Link
                      to={"/sign-in/user"}
                      style={{ textDecoration: "none", color: "#6e6e6e" }}
                      className="hide-link"
                    >
                      {" "}
                      <p
                        style={{
                          color: "white",
                          cursor: "pointer",
                          paddingBottom: "15px",
                          fontSize: "20px",
                        }}
                      >
                        Sign In
                      </p>
                    </Link>
                    <div className="sidebarheadericons">
                      <div className="headersicon1">
                        <i className="fa-brands fa-facebook"></i>
                      </div>
                      <div className="headersicon1">
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                      <div className="headersicon1">
                        <i className="fa-brands fa-x-twitter"></i>
                      </div>

                      <div className="headersicon1">
                        <i className="fa-brands fa-youtube"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
