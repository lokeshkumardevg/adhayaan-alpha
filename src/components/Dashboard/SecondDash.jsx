import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import "./Dashboard.css";
import Dashboardheader from "../DashiboardHeader/Dashboardheader";
import { useNavigate } from "react-router-dom";
import Pdf from "./Pdf";
import { useDispatch, useSelector } from "react-redux";
import {
  hidevalue,
  resetPasswordShow,
  showvalue,
} from "../store/slices/trueFalse";
import { hidecoursevalue, showcoursevalue } from "../store/slices/showCourse";
import { dshboardnave } from "../store/slices/dashboardNav";
const SecondDash = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const [courseName, setCourseName] = useState("");
  const [courseName2, setCourseName2] = useState("");
  const [courseTypeName, setCourseTypeName] = useState("");
  const [courseTypeName2, setCourseTypeName2] = useState("");
  const [duration, setDuration] = useState("");
  const [duration2, setDuration2] = useState("");
  const [course_mode, setCourseMode] = useState("");
  const [course_mode2, setCourseMode2] = useState("");
  const [name, setName] = useState(localStorage.getItem("name"));
  const [course_id1, setCourseID] = useState(localStorage.getItem("course_id"));
  const [course_id2, setCourseId] = useState(
    localStorage.getItem("second_course_id") || ""
  );
  const [paymentStatus, setPaymentStatus] = useState(
    localStorage.getItem("second_pay_status") 
  );
  const [payStatus, setPaStatus] = useState(
    // localStorage.getItem("pay_status") 
  );
  const [syllabusDetails, setSyllabusDetails] = useState([]);
  const [syllabusDetails2, setSyllabusDetails2] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdfLink, setSelectedPdfLink] = useState("");
  const [openMode, setOpenMode] = useState(null); // Track which mode is open
  const [openMode2, setOpenMode2] = useState(null); // Track which mode is open
  const [resData, setResData] = useState([]); // State variable for second API response
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(
    localStorage.getItem("savedPassword")
  );
  const [dropdownShow, setDropDownShow] = useState(false);
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profile_image") || ""
  );
  // const [showCourse, setShowCourse] = useState(true);
  const showValue = useSelector((state) => state.truefalse.valueShow);
  const showCourse = useSelector((state) => state.displaycourse.courseShow);
  const apiKey = process.env.REACT_APP_API_URL;
  const [user_id, setUsersId] = useState(localStorage.getItem("userId"));
  const [old_password, setOld_password] = useState("");
  const [new_password, setnew_password] = useState("");
  const [errorMessage, setErrorMessage] = useState();

  const [buyer_name, setBuyerName] = useState("");
  const [buyer_email, setBuyerEmail] = useState("");
  const [buyer_mobile, setBuyerContact] = useState("");
  const [buyer_recpient_email, setRecipientEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [errors, setErrors] = useState({
    buyer_name: "",
    buyer_email: "",
    buyer_mobile: "",
    buyer_recpient_email: "",
    acceptedTerms: "",
  });
  const [tr,setTr]=useState(true)
// window.location.reload()

  const groupSyllabusByMode = () => {
    const groupedSyllabus = {};
    syllabusDetails.forEach((syllabus) => {
      if (!groupedSyllabus[syllabus.course_mode_no]) {
        groupedSyllabus[syllabus.course_mode_no] = [];
      }
      groupedSyllabus[syllabus.course_mode_no].push(syllabus);
    });
    return groupedSyllabus;
  };
  const [record, setRecord] = useState(false);
  const groupSyllabusByMode2 = () => {
    const groupedSyllabus2 = {};
    syllabusDetails2.forEach((syllabus) => {
      if (!groupedSyllabus2[syllabus.course_mode_no]) {
        groupedSyllabus2[syllabus.course_mode_no] = [];
      }
      groupedSyllabus2[syllabus.course_mode_no].push(syllabus);
    });
    // groupedSyllabus2.length > 0 ? setRecord(false) : setRecord(true);
    return groupedSyllabus2;
  };

  const getCourseModeLabel = (mode) => {
    return mode === "Y" ? "Year" : mode === "S" ? "Semester" : "";
  };
  const getCourseModeLabel2 = (mode) => {
    return mode === "Y" ? "Year" : mode === "S" ? "Semester" : "";
  };

  const openModal = (pdfLink) => {
    setSelectedPdfLink(pdfLink);
    setModalIsOpen(true);
  };
  //   const openModal2 = (pdfLink) => {
  //     setSelectedPdfLink(pdfLink);
  //     setModalIsOpen(true);
  //   };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPdfLink("");
  };
  //   const closeModal2 = () => {
  //     setModalIsOpen(false);
  //     setSelectedPdfLink("");
  //   };

  const toggleMode = (mode) => {
    setOpenMode(openMode === mode ? null : mode);
  };
  const toggleMode2 = (mode) => {
    setOpenMode2(openMode2 === mode ? null : mode);
  };

  const handleSubmit = async () => {
    // Validate form fields
    const errorsCopy = { ...errors };
    let formValid = true;

    if (!buyer_name.trim()) {
      errorsCopy.buyer_name = "Buyer name is required*";
      formValid = false;
    } else {
      errorsCopy.buyer_name = "";
    }

    if (!buyer_email.trim()) {
      errorsCopy.buyer_email = "Buyer email is required*";
      formValid = false;
    } else if (!isValidEmail(buyer_email)) {
      errorsCopy.buyer_email = "Please enter a valid email address*";
      formValid = false;
    } else {
      errorsCopy.buyer_email = "";
    }

    if (!buyer_mobile.trim()) {
      errorsCopy.buyer_mobile = "Buyer contact number is required*";
      formValid = false;
    } else {
      errorsCopy.buyer_mobile = "";
    }
    setErrors(errorsCopy);

    if (!formValid) {
      return;
    }

    // Prepare the data to send
    const data = {
      name: buyer_name,
      email: buyer_email,
      mobile: buyer_mobile,
      user_id: userId,
    };

    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/refer_friend",
        `${apiKey}admin/index.php/Api/refer_friend`,
        data
      );

      // console.log(response.data);
      if (response.status === 200) {
        alert("Gift purchased successfully!");
      } else {
        alert("Failed to purchase gift. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handelClick = () => {
    // setShow(true);
    dispatch(showvalue());
    // alert('jp')
    // setShowCourse(true);
    dispatch(showcoursevalue());
  };
  const handleClick2 = () => {
    dispatch(showvalue());
    dispatch(hidecoursevalue());
    // setShowCourse(false);
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/reset_password",
        `${apiKey}admin/index.php/Api/reset_password`,
        { user_id, old_password, new_password }
      );
      if (response.status === "200") {
        alert(response.data.msg);
        localStorage.setItem("savedPassword", new_password);
        setOld_password("");
        setnew_password("");
        // localStorage.setItem('savedPasswordTrue',true)
      } else {
        alert(response.data.msg);
        setErrorMessage(response.data.msg);
        localStorage.setItem("savedPassword", new_password);
        // localStorage.setItem('savedPasswordTrue',true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // showCourse
    dispatch(showcoursevalue())
    dispatch(dshboardnave());
    window.scrollTo(0, 0);
    if (course_id1 === 0) {
      navigate("/choose-course");
    }
    const handleSignIn = async () => {
        try {
          const response = await axios.post(
            // "https://aadhyayan.aboqindia.com/admin/index.php/Api/smslogin",
            `${apiKey}admin/index.php/Api/smslogin`,
  
            { email, password }
          );
  
          if (response.data && response.data.msg === "successfully created .") {
            const userData = response.data.res[0];
  
            localStorage.setItem("second_course_id", userData.second_course_id);
            localStorage.setItem("second_pay_status", userData.second_pay_status);
            localStorage.setItem("pay_status", userData.pay_status);
            setPaStatus(localStorage.getItem("pay_status", userData.pay_status))
            // localStorage.setItem("profile_images", userData.profileImage);
            // window.location.reload();
          } else {
            console.error("Login failed:", response.data);
            // alert("Please check your credentials. from dashboard", response.data);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    const fetchCourseDetails = async () => {
      try {
        // First API call
        const response = await axios.post(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_details",
          `${apiKey}admin/index.php/Api/get_course_details`,
          { course_id: course_id1 }
        );
        if (response.data && response.data.res) {
          const courseDetail = response.data.res[0];
          if (courseDetail && courseDetail.syllabus_details) {
            setSyllabusDetails(courseDetail.syllabus_details);
            setCourseTypeName(courseDetail.course_type_name);
            setDuration(courseDetail.duration);
            setCourseMode(courseDetail.course_mode);
            setCourseName(courseDetail.course_name); // Set courseName from first API response
            const firstMode = courseDetail.syllabus_details[0]?.course_mode_no;
            if (firstMode) {
              setOpenMode(firstMode); // Open the first mode by default
            }
          }
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }

      try {
        // Second API call
        const res = await axios.post(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_details",
          `${apiKey}admin/index.php/Api/get_course_details`,
          { course_id: course_id2 }
        );
        // if (res) {
        // }

        if (res.data && res.data.res) {
          setResData(res.data.res[0]);
          const courseDetail1 = res.data.res[0];
          if (courseDetail1 && courseDetail1.syllabus_details) {
            setSyllabusDetails2(courseDetail1.syllabus_details);
            setCourseTypeName2(courseDetail1.course_type_name);
            setDuration2(courseDetail1.duration);
            setCourseMode2(courseDetail1.course_mode);
            setCourseName2(courseDetail1.course_name); // Set courseName from first API response
            const firstMode2 =
              courseDetail1.syllabus_details[0]?.course_mode_no;
            if (firstMode2) {
              setOpenMode2(firstMode2); // Open the first mode by default
            }
          }
        }
      } catch (error) {
        console.error("Error fetching second course details:", error);
      }
    };
    
    handleSignIn();
    // if (course_id) {
    fetchCourseDetails();
   
  }, [
    course_id1,
    course_id2,
    show,
    profileImage,
    password,
    email,
    navigate,
    dispatch,
    
  ]);

  return (
    <>
      <Dashboardheader />
      {console.log(showValue, "asdfas")}
      {console.log(payStatus, "===>asdfas")}
      <div className="dashboard-container">
        {console.log(resData)}
        <div className="inner-dashboard-container">
          <div className="left-side-dash">
            <div className="left-top">
              <h2>Dashboard</h2>
              <div className="image-circle">
                <img src={profileImage} alt="Profile" width={"180%"} />
                {console.log("nabsdi fankfowu  efj cc uh", profileImage)}
              </div>
              <p style={{ textTransform: "capitalize" }}>Hello, {name}</p>
              <br></br>
              <div className="right-one-top one">
                <p
                  onClick={() => setDropDownShow(!dropdownShow)}
                  style={{ cursor: "pointer" }}
                >
                  Study Material 
                </p>
                {/* <hr /> */}
                <i
                  className="fa-solid fa-angle-right"
                  // onClick={() => setShow(true)}
                  onClick={() => setDropDownShow(!dropdownShow)}
                ></i>
              </div>
              <hr className="p-7" />
              <div className={dropdownShow ? "inside-menu" : "drop-down-hide"}>
                <p
                  onClick={handelClick}
                  style={{ cursor: "pointer" }}
                  className="courseName-2"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                  {courseName}
                </p>
                {course_id2 > 0 && (
                  <p
                    // onClick={() => setShowCourse(false)}
                    onClick={handleClick2}
                    // onClick={()=>dispatch(showvalue())}
                    style={{ cursor: "pointer" }}
                    className="courseName"
                  >
                    <i class="fa-solid fa-arrow-right"></i>
                    {courseName2}
                  </p>
                )}
              </div>

              <div className="right-one-top">
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(hidevalue())}
                >
                  Earn Money From Aadhyayan
                </p>
                {console.log("inside paymentstaur ===>", paymentStatus)}
                <i
                  className="fa-solid fa-angle-right"
                  onClick={() => dispatch(hidevalue())}
                ></i>
              </div>
              <hr className="p-8" />
              {paymentStatus === 0 ? (
                <>
                  <div className="right-one-top">
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/select-another-course")}
                    >
                      Choose Another Course
                    </p>

                    <i
                      className="fa-solid fa-angle-right"
                      onClick={() => navigate("/select-another-course")}
                    ></i>
                  </div>
                  <hr className="p-8" />
                  {console.log(`==========>API Key: ${apiKey}`)}
                </>
              ) : (
                " "
              )}
              <div className="right-one-top">
                <p
                  style={{ cursor: "pointer" }}
                
                  onClick={() => navigate("/apply-now")}
                >
                  Become partner
                </p>

                {console.log("inside paymentstaur ===>", paymentStatus)}
                <i
                  className="fa-solid fa-angle-right"
                  onClick={() => navigate("/apply-now")}
                ></i>
              </div>
              <hr className="p-7" />
              <div className="right-one-top">
                <p
                  style={{ cursor: "pointer" }}
                  //  onClick={() => setShow(false)}
                  onClick={() => dispatch(resetPasswordShow())}
                >
                  Reset Password
                </p>
                {console.log("inside paymentstaur ===>", paymentStatus)}
                <i
                  className="fa-solid fa-angle-right"
                  onClick={() => navigate("/apply-now")}
                ></i>
              </div>
              <hr className="p-7" />
            </div>
          </div>

          {showValue === "study-matarial" && (
            <>
              {showCourse ? (
                <>
                  {payStatus > 0 && (
                    <div
                      className="right-side-dash"
                      style={{ marginTop: "-40px" }}
                    >
                      <div className="right-side-dash-inner">
                        <div className="right-side-dash-heading">
                          <div className="info-row">
                            <h3>Course Name : </h3>
                            <p>{courseName}</p>
                          </div>
                          <div className="info-row">
                            <h3>Course Type:</h3>
                            <p style={{ textTransform: "uppercase" }}>
                              {" "}
                              {courseTypeName}
                            </p>
                          </div>
                          <div className="info-row">
                            <h3>Duration : </h3>
                            <p style={{ textTransform: "uppercase" }}>
                              {duration}{" "}
                              {course_mode === "Y" ? "Year" : "Semester"}
                            </p>
                          </div>
                          <div class="go-corner" href="#"></div>
                        </div>

                        {groupSyllabusByMode() ? (
                          <>
                            {Object.entries(groupSyllabusByMode()).map(
                              ([mode, syllabusList]) => (
                                <div
                                  key={mode}
                                  className="right-side-dash-inner-1"
                                >
                                  {mode && (
                                    <div
                                      className="dhasboard-icon-heading"
                                      onClick={() => toggleMode(mode)}
                                    >
                                      <h3>
                                        {course_mode === "Y"
                                          ? "Year"
                                          : "Semester"}{" "}
                                        : {mode} {getCourseModeLabel(mode)}
                                      </h3>
                                      <i
                                        className={`fa-solid ${
                                          openMode === mode
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                        }`}
                                      ></i>
                                    </div>
                                  )}
                                  {openMode === mode && (
                                    <div className="dhasboard-subjects">
                                      {syllabusList.map((syllabus, index) => (
                                        <div
                                          key={index}
                                          className="dhasboard-subjects-one"
                                        >
                                          <div className="b-game-card">
                                            <img
                                              onClick={() =>
                                                openModal(syllabus.pdf_link)
                                              }
                                              src={syllabus.subject_name_image}
                                              alt={syllabus.subject_name}
                                              // className="subject-image"
                                              className="b-game-card__cover"
                                              height="310px"
                                              width="210px"
                                              style={{
                                                borderRadius: "20px",
                                                cursor: "pointer",
                                              }}
                                            />
                                          </div>
                                          <br />
                                          <div className="dhasboard-heading">
                                            <button
                                              onClick={() =>
                                                openModal(syllabus.pdf_link)
                                              }
                                              style={{
                                                backgroundColor: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                                color: "#000",
                                                width: "180px",
                                                textAlign: "left",
                                              }}
                                            >
                                              {syllabus.subject_name}
                                            </button>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <p>Record not found</p>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="right-side-dash" style={{ marginTop: "-10px" }}>
                  <div className="right-side-dash-inner">
                    {course_id2 > 0 && (
                      <>
                        <div
                          className="right-side-dash-heading"
                          // style={{ marginTop: "100px" }}
                        >
                          <div className="info-row">
                            <h3>Course Name : </h3>
                            <p>{courseName2}</p>
                          </div>
                          <div className="info-row">
                            <h3>Course Type:</h3>
                            <p style={{ textTransform: "uppercase" }}>
                              {" "}
                              {courseTypeName2}
                            </p>
                          </div>
                          <div className="info-row">
                            <h3>Duration : </h3>
                            <p style={{ textTransform: "uppercase" }}>
                              {duration2}{" "}
                              {course_mode2 === "Y" ? "Year" : "Semester"}
                            </p>
                          </div>
                        </div>
                        {console.log(course_mode2, "<======")}
                        {groupSyllabusByMode2() ? (
                          <>
                            {Object.entries(groupSyllabusByMode2()).map(
                              ([mode, syllabusList2]) => (
                                <div
                                  key={mode}
                                  className="right-side-dash-inner-1"
                                >
                                  {mode && (
                                    <div
                                      className="dhasboard-icon-heading"
                                      onClick={() => toggleMode2(mode)}
                                    >
                                      <h3>
                                        {mode}{" "}
                                        {course_mode2 === "Y"
                                          ? "Year"
                                          : "Semester"}
                                        {getCourseModeLabel2(mode)}
                                        {console.log(mode, "inside mode===>")}
                                      </h3>
                                      <i
                                        className={`fa-solid ${
                                          openMode2 === mode
                                            ? "fa-chevron-up"
                                            : "fa-chevron-down"
                                        }`}
                                      ></i>
                                    </div>
                                  )}
                                  {openMode2 === mode && (
                                    <div className="dhasboard-subjects">
                                      {syllabusList2.length === 0 ? (
                                        <p>no record found</p>
                                      ) : (
                                        <>
                                          {syllabusList2.map(
                                            (syllabus, index) => (
                                              <div
                                                key={index}
                                                className="dhasboard-subjects-one"
                                              >
                                                <div className="b-game-card">
                                                  <img
                                                    onClick={() =>
                                                      openModal(
                                                        syllabus.pdf_link
                                                      )
                                                    }
                                                    src={
                                                      syllabus.subject_name_image
                                                    }
                                                    alt={syllabus.subject_name}
                                                    // className="subject-image"
                                                    className="b-game-card__cover"
                                                    height="310px"
                                                    width="210px"
                                                    style={{
                                                      borderRadius: "20px",
                                                      cursor: "pointer",
                                                    }}
                                                  />
                                                </div>

                                                <br />
                                                <div className="dhasboard-heading">
                                                  <button
                                                    style={{
                                                      backgroundColor:
                                                        "transparent",
                                                      border: "none",
                                                      cursor: "pointer",
                                                      color: "#000",
                                                      width: "180px",
                                                      textAlign: "left",
                                                    }}
                                                  >
                                                    {syllabus.subject_name}
                                                  </button>
                                                </div>
                                              </div>
                                            )
                                          )}
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )
                            )}
                          </>
                        ) : (
                          <p>Record not found</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {showValue === "earn-monye" && (
            <div className="right-side-dash">
              <div className="inner-r-s-dash">
                <div className="w-g-f-container">
                  <div className="gift-row">
                    <div className="gift-row-container">
                      <div className="gift-entry-area">
                        <input
                          type="text"
                          value={buyer_name}
                          onChange={(e) => setBuyerName(e.target.value)}
                        />
                        <div
                          className={
                            buyer_name.length === 0
                              ? "gift-labelline"
                              : "gift-labelline stick"
                          }
                        >
                          Name
                        </div>
                      </div>
                      {errors.buyer_name && (
                        <p
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {errors.buyer_name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="gift-row">
                    <div className="gift-row-container">
                      <div className="gift-entry-area">
                        <input
                          type="text"
                          value={buyer_email}
                          onChange={(e) => setBuyerEmail(e.target.value)}
                        />
                        <div
                          className={
                            buyer_email.length === 0
                              ? "gift-labelline"
                              : "gift-labelline stick"
                          }
                        >
                          Email
                        </div>
                      </div>
                      {errors.buyer_email && (
                        <p
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {errors.buyer_email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="gift-row">
                    <div className="gift-row-container">
                      <div className="gift-entry-area">
                        <input
                          type="text"
                          value={buyer_mobile}
                          onChange={(e) => setBuyerContact(e.target.value)}
                        />
                        <div
                          className={
                            buyer_mobile.length === 0
                              ? "gift-labelline"
                              : "gift-labelline stick"
                          }
                        >
                          Contact
                        </div>
                      </div>
                      {errors.buyer_mobile && (
                        <p
                          className="error"
                          style={{ fontSize: "12px", color: "red" }}
                        >
                          {errors.buyer_mobile}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* <div className="gift-row">
                    <div className="gift-row-container">
                      <div className="gift-entry-area">
                        <input
                          type="text"
                          value={userId}
                          
                        />
                        <div className="gift-labelline">User Id</div>
                      </div>
                    </div>
                  </div> */}

                  <div className="gift-row gift-row-1">
                    <button onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showValue === "reset-password" && (
            <div className="right-side-dash">
              <div className="inner-r-s-dash reset-pass-dash">
                <div className="w-g-f-container">
                  <div className="gift-row">
                    <div
                      className="gift-row-container"
                      style={{ marginTop: "100px" }}
                    >
                      <div className="gift-entry-area">
                        <input
                          type="password"
                          value={old_password}
                          onChange={(e) => setOld_password(e.target.value)}
                        />
                        <div
                          className={
                            old_password.length === 0
                              ? "gift-labelline"
                              : "gift-labelline stick"
                          }
                        >
                          Old Password
                        </div>
                      </div>
                      {/* {errors.buyer_name && ( */}
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errorMessage}
                      </p>
                      {/* )} */}
                    </div>
                  </div>
                  <div className="gift-row" style={{ marginTop: "50px" }}>
                    <div className="gift-row-container">
                      <div className="gift-entry-area">
                        <input
                          type="password"
                          value={new_password}
                          onChange={(e) => setnew_password(e.target.value)}
                        />
                        <div
                          className={
                            new_password.length === 0
                              ? "gift-labelline"
                              : "gift-labelline stick"
                          }
                        >
                          New Password
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="gift-row gift-row-1">
                    <button
                      onClick={handleResetPassword}
                      style={{ fontSize: "14px" }}
                    >
                      Reset Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Viewer"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">
          &times;
        </button>
        <Pdf pdfLink={selectedPdfLink} />
      </Modal>
    </>
  );
};

export default SecondDash;
