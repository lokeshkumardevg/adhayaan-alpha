import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./Dashboardheader.css";
// import logo from "../Images/White-color.png";
import logo from "../Images/Aadhyayan-3-7-May-2024.png";
import { useDispatch, useSelector } from "react-redux";
import { hidevalue, resetPasswordShow, showvalue } from "../store/slices/trueFalse";
import { hidecoursevalue, showcoursevalue } from "../store/slices/showCourse";
import { toggledashnav } from "../store/slices/dashMenu";
const Dashboardheader = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  const [dropdownShow, setDropDownShow] = useState(false);
  const [show, setShow] = useState(true);
  const [showCourse, setShowCourse] = useState(true);
  const [course_id2] = useState(localStorage.getItem('second_course_id'));
  const dispatch = useDispatch();
  const dashboardMenu = useSelector((state) => state.dashboardmenushow.dashboardMenuShow);
  const hidemenu = useSelector((state)=>state.dashnave.dashMenuShow)
  const handleLogout = () => {
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
    localStorage.removeItem("courseCategory2");
    localStorage.removeItem("selectedMode2");
    localStorage.removeItem("courseFee2");
    localStorage.removeItem("courseStream2");
    localStorage.removeItem("course_id2");
    localStorage.removeItem("savedPassword");
    localStorage.removeItem("second_course_id");
    localStorage.removeItem("courseName2");
    localStorage.removeItem("isFirstRender");
    localStorage.removeItem("second_pay_status");
    localStorage.removeItem("pay_status");
    localStorage.removeItem("courseFees2");
    localStorage.removeItem("gender");
    localStorage.removeItem("profile_image");
    navigate("/");
    window.location.reload();
  };
  const handelClick = () => {
    // setShow(true);
    dispatch(showvalue());
    // setShowCourse(true);
    dispatch(showcoursevalue());
  };
  const handleClick2 = () => {
    dispatch(showvalue());
    dispatch(hidecoursevalue());
    // setShowCourse(false);
  };
  const handle=()=>{
    dispatch(resetPasswordShow())
    navigate('/dashboard/user')
  }
  return (
    <div className="header-container-dash">
      <div className="inner-dash-header">
        <div className="dash-logo">
          <img
            src={logo}
            style={{ cursor: "pointer" }}
            alt=""
            onClick={() => navigate("/dashboard/user")}
          />
        </div>

        <div className="dash-contanet-conatainer ss-a-1">
          <div className="icon-container" 
          // onClick={() => setHide(!hide)}
          onClick={()=>dispatch(toggledashnav())}
          >
            <div className="icon-conatiner-dash">
              <i class="fa-regular fa-user"></i>
            </div>
            <div className={hidemenu ? "icon-menu" : "hide-coantainer"}>
              <p className="ss-pp" onClick={() => navigate("/profile-edit")}>
                Edit Profile <i class="fa-regular fa-pen-to-square"></i>
              </p>
              <p
                className="ss-pp"
                onClick={() => navigate("/apply-now")}
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                Become a partner <i class="fa-regular fa-pen-to-square"></i>
              </p>
              <p
                className="ss-pp"
                onClick={handle}
                style={{ fontSize: "12px", fontWeight: "600" }}
              >
                Reset Password<i class="fa-regular fa-pen-to-square"></i>
              </p>
              {dashboardMenu && (
                <p
                  className="ss-pp"
                  onClick={() => navigate("/dashboard/user")}
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Dashboard <i class="fa-regular fa-pen-to-square"></i>
                </p>
              )}

              <p className="ss-pp" onClick={handleLogout}>
                Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="dash-contanet-conatainer ss-a">
          <div className="icon-container" onClick={() => setHide(!hide)}>
            <div className="icon-conatiner-dash">
              <i class="fa-regular fa-user"></i>
            </div>
            <div className={hide ? "icon-menu im-2" : "hide-coantainer"}>
              <p onClick={() => setDropDownShow(!dropdownShow)}>
                Study Material
              </p>
              <div className={dropdownShow ? "inside-menu" : "drop-down-hide"}>
                <p
                  onClick={handelClick}
                  style={{ cursor: "pointer", marginLeft: "50px" }}
                  className="courseName-3"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  course-1
                </p>
                {course_id2 >0 && (
                  <p
                    // onClick={() => setShowCourse(false)}

                    onClick={handleClick2}
                    style={{ cursor: "pointer", marginLeft: "50px" }}
                    className="courseName-3"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                    course-2
                  </p>
                )}
              </div>
              <p onClick={() => dispatch(hidevalue())}>
                Earn Money From Aadhyayan
              </p>
              <p onClick={() => navigate('/apply-now')}>
               Become Partner
              </p>
              <p onClick={handle}>
                Reset Password
              </p>

              <p className="ss-pp" onClick={handleLogout}>
                Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardheader;
