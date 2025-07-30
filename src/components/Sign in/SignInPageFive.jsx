import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./Sign5.css";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
const SignInPageFive = () => {
  // const [listShow, setListShow] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [courseNameValue, setCourseNameValue] = useState("");
  const [streamValue, setStreamValue] = useState("");
  const [streamShow, setStreamShow] = useState(true);
  const [stream, setStream] = useState("");
  const [show, setShow] = useState(true);
  const [showCourseName, setShowCourseName] = useState(true);
  // const [nationality, setNationality] = useState("");
  const [course, setCourse] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseName, setCourseName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(hidenav());
  }, [dispatch])
  return (
    <Layout>
      <div className="sign-in-page-5">
        <div className="inner-sign-in-page-5">
          <div className="w-sign-in-page5">
            <div className="h-w-s-page-5">
              <h3>Choose the course that’s right for you</h3>
            </div>

            <div className="course-main">
              <div className="course-code-left">
                <div className="course-container-1">
                  <div className="course-input">
                    <input
                      type="text"
                      onChange={(e) => setCourse(e.target.value)}
                    />
                    <div
                      className={
                        course.length === 0
                          ? "label-container"
                          : "label-container fix-3"
                      }
                    >
                      Course Code
                    </div>
                  </div>
                </div>

                <div className="course-container-1 course-container-2">
                  <div className="course-input course-input-2">
                    <input
                      type="text"
                      onChange={(e) => setCourseCategory(e.target.value)}
                      onClick={() => setShow(!show)}
                      value={inputValue}
                    />

                    <div
                      className={
                        courseCategory.length === 0 && inputValue.length === 0
                          ? "label-container"
                          : "label-container fix-3"
                      }
                    >
                      Course Category
                    </div>
                    <i
                      class="fa-solid fa-caret-down"
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={() => setShow(!show)}
                    ></i>
                  </div>
                  <div className={show ? "list-hide" : "d-r-p-show"}>
                    <p onClick={() => setInputValue("BACHELOR")}>BACHELOR'S</p>
                    <p onClick={() => setInputValue("MASTER")}>MASTER'S</p>
                    <p onClick={() => setInputValue("DIPLOMA")}>DIPLOMA</p>
                    <p onClick={() => setInputValue("CERTIFICATE")}>CERTIFICATE</p>
                    <p onClick={() => setInputValue("PG DIPLOMA")}>PG DIPLOMA</p>
                    <p onClick={() => setInputValue("EXECUTIVE")}>EXECUTIVE</p>
                  </div>
                </div>

                
                <div className="course-container-1 course-container-3">
                  <div className="course-input course-input-2">
                    <input
                      type="text"
                      onChange={(e) => setCourseName(e.target.value)}
                      onClick={() => setShowCourseName(!showCourseName)}
                      value={courseNameValue}
                    />

                    <div
                      className={
                        courseName.length === 0 && courseNameValue.length === 0
                          ? "label-container"
                          : "label-container fix-3"
                      }
                    >
                      Course Name
                    </div>
                    <i
                      class="fa-solid fa-caret-down"
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={() => setShowCourseName(!showCourseName)}
                    ></i>
                  </div>
                  {console.log(showCourseName, "<===========")}
                  <div
                    className={
                      courseNameValue.length > 0 || showCourseName
                        ? "list-hide"
                        : "d-r-p-show"
                    }
                  >
                    {inputValue === "BACHELOR" && (
                      <>
                        <p onClick={() => setCourseNameValue("B.TECH")}> B.TECH</p>
                        <p onClick={() => setCourseNameValue("BBA")}>BBA</p>
                        <p onClick={() => setCourseNameValue("BCA")}>BCA</p>
                        <p onClick={() => setCourseNameValue("B.COM")}>B.COM</p>
                        <p onClick={() => setCourseNameValue("B.PHARMA")}>
                          B.PHARMA
                        </p>
                      </>
                    )}
                    {inputValue === "MASTER" && (
                      <>
                        <p onClick={() => setCourseNameValue("MCA")}>MCA</p>
                        <p onClick={() => setCourseNameValue("MBA")}>MBA</p>
                        <p onClick={() => setCourseNameValue("MTECH")}>M.TECH</p>
                        <p onClick={() => setCourseNameValue("M.COM")}>M.COM</p>
                      </>
                    )}
                  </div>
                </div>
              </div>


              <div className="course-code-right">
             

                <div className="course-container-1 course-container-2">
                  <div className="course-input course-input-2">
                    <input
                      type="text"
                      onChange={(e) => setStreamValue(e.target.value)}
                      onClick={() => setStreamShow(!streamShow)}
                      value={streamValue}
                    />

                    <div
                      className={
                        stream.length === 0 && streamValue.length === 0
                          ? "label-container"
                          : "label-container fix-3"
                      }
                    >
                      Stream
                    </div>
                    <i
                      class="fa-solid fa-caret-down"
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={() => setStreamShow(!streamShow)}
                    ></i>
                  </div>

                  <div
                    className={
                      streamValue.length > 0 || streamShow
                        ? "list-hide"
                        : "d-r-p-show"
                    }
                    style={{ marginBottom: "30px" }}
                  >
                    <p onClick={() => setStreamValue("Arts")}>Arts</p>
                    <p onClick={() => setStreamValue("Humanities")}>Humanities</p>
                    <p onClick={() => setStreamValue("Engineering")}>Engineering</p>
                    <p onClick={() => setStreamValue("Medicine")}>Medicine</p>
                    <p onClick={() => setStreamValue("Business Management")}>
                      Business Management
                    </p>
                    <p onClick={() => setStreamValue("Computer")}>Computer</p>
                    <p onClick={() => setStreamValue("IT")}>IT</p>
                    <p onClick={() => setStreamValue("Nursing")}>Nursing</p>
                    <p onClick={() => setStreamValue("Para-Medical")}>
                      Para-Medical
                    </p>
                    <p onClick={() => setStreamValue("Fine Arts")}>Fine Arts</p>
                    <p onClick={() => setStreamValue("Animation")}>Animation</p>
                    <p onClick={() => setStreamValue("CSR")}>CSR</p>
                    <p onClick={() => setStreamValue("Vocational")}>Vocational</p>
                    <p onClick={() => setStreamValue("ITI")}>ITI</p>
                  </div>
                </div>

                <div className="course-container-1 course-container-2">
                  <div className="course-input course-input-2">
                    <input
                      type="text"
                      onChange={(e) => setCourseCategory(e.target.value)}
                      onClick={() => setShow(!show)}
                      value={inputValue}
                    />

                    <div
                      className={
                        courseCategory.length === 0 && inputValue.length === 0
                          ? "label-container"
                          : "label-container fix-3"
                      }
                    >
                      Duration
                    </div>
                    <i
                      class="fa-solid fa-caret-down"
                      style={{ cursor: "pointer", zIndex: "1" }}
                      onClick={() => setShow(!show)}
                    ></i>
                  </div>
                  <div className={show ? "list-hide" : "d-r-p-show"}>
                    <p onClick={() => setInputValue("BACHELOR")}>BACHELOR'S</p>
                    <p onClick={() => setInputValue("MASTER")}>MASTER'S</p>
                    <p onClick={() => setInputValue("DIPLOMA")}>DIPLOMA</p>
                    <p onClick={() => setInputValue("CERTIFICATE")}>CERTIFICATE</p>
                    <p onClick={() => setInputValue("PG DIPLOMA")}>PG DIPLOMA</p>
                    <p onClick={() => setInputValue("EXECUTIVE")}>EXECUTIVE</p>
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
              className="for-button-container-4 three"
              style={{ paddingBottom: "20px" }}
            >
              {/* <button>S K I P</button> */}
              <button onClick={() => navigate("/sign-in-4")}>
                P R E V I O U S
              </button>
              <button onClick={() => navigate("/sign-in-6")}>N E X T</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPageFive;
