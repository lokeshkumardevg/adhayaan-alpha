import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../Images/White-color.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hidenav } from "../../store/slices/sideNavSlice";
import { dashnavemenushow } from "../../store/slices/headerMenuNav";
import { decrement } from "../../store/slices/navSlice";

const Footer = () => {
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  const dispatch = useDispatch();
  const navigatePage = () => {
    navigate("/become-a-partner");
  };
  const apiKey = process.env.REACT_APP_API_URL;
  const getAllCourse = async () => {
    try {
      const { data } = await axios.get(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_type"
        `${apiKey}admin/index.php/Api/get_course_type`
      );
      if (data?.res) {
        setCourse(data.res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };

  useEffect(() => {
    getAllCourse();
  }, []);

  return (
    <div className="footer-container" onClick={handlemenu2}>
      <div className="inner-footer-container">
        <div className="one-footer-div">
          <div className="img-div">
            <img src={logo} alt="Aadhyayan Logo" width={"50%"} />
          </div>
          <div className="container-div">
            <p>
              Aadhyayan is the India's first online study material provider. We
              have more then 100 programmes from all the interest like
              Bachelors, Masters, Diplomas, Certificates etc. We follow the
              structure of Indian educational institution.
            </p>
          </div>
          <div className="btn-container">
            <button className="ft-btn" onClick={navigatePage}>
              Become a <span>Partner</span>
            </button>
            <p>
              <i className="fa-brands fa-whatsapp"></i>{" "}
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to={"https://wa.me/+91 9210663597"}
              >
                +91 9210663597
              </Link>
            </p>
          </div>
        </div>
        <div className="two-footer-div">
          <div className="one-ft-div">
            <div className="heading-ft-div">
              <p>About</p>
              <p className="p">Aadhyayan</p>
              <div className="div-s">
                <div className="lin-div"></div>
                <div className="lin-div-1"></div>
              </div>
            </div>
            <div className="nav-div">
              <ul>
                <li>
                  <Link
                    to={"/about"}
                    style={{ textDecoration: "none", color: "#6e6e6e" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none", color: "#6e6e6e" }}>
                    Vision
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none", color: "#6e6e6e" }}>
                    Mission
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/career-opportunities"}
                    style={{ textDecoration: "none", color: "#6e6e6e" }}
                  >
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/faq"}
                    style={{ textDecoration: "none", color: "#6e6e6e" }}
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    style={{ textDecoration: "none", color: "#6e6e6e" }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="two-ft-div">
            <div className="heading-ft-div">
              <p className="p course">Courses</p>
              <div className="div-s">
                <div className="lin-div"></div>
                <div className="lin-div-1"></div>
              </div>
            </div>
            <div className="nav-div">
              <ul>
                {course.map((value) => (
                  <li key={value.course_type_id}>
                    <Link
                      to={`/courses/${value.course_type_id}`}
                      style={{ textDecoration: "none", color: "#6e6e67" }}
                    >
                      {value.course_type_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="three-ft-div">
            <div className="heading-ft-div">
              <p className="p">Our Group</p>
              <div className="div-s">
                <div className="lin-div"></div>
                <div className="lin-div-1"></div>
              </div>
            </div>
            <div className="nav-div">
              <ul>
                <li>
                  <Link
                    to={"/foundation"}
                    style={{ textDecoration: "none", color: "#6e6e6e" }}
                    target="blank"
                  >
                    {" "}
                    JNICSR Foundation
                  </Link>
                </li>
                <li>Post Graduation</li>
                <li>Diploma</li>
                <li>Certificate</li>
                <li>Bachelors</li>
                <li>Masters</li>
              </ul>
            </div>
          </div>
          <div className="four-ft-div">
            <div className="heading-ft-div">
              <p className="p">Partnership</p>
              <div className="div-s">
                <div className="lin-div"></div>
                <div className="lin-div-1"></div>
              </div>
            </div>
            <div className="nav-div">
              <ul>
                <li>About Partnership</li>
                <li>Partner Login</li>
                <li>Diploma</li>
                <li>Certificate</li>
                <li>Bachelors</li>
                <li>Equalities</li>
                <li>Blogs</li>
                <li>Downloads</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bt-footer">
        <div className="inner-bt-ft">
          <div className="bt-ft-div">
            <div className="bt-1">
              <div className="bt-icons">
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
              <div className="para">
                <Link to={"/privacy-policy"} style={{ color: "#fff", textDecoration: "none" }}>
                  Privacy
                </Link>{" "}
                | Notices/Summaries | abc | abc
              </div>
            </div>
            <div className="bt-2">
              <p>
                Copyright &#169; 2023 JNCSER Foundation. All rights reserved.
              </p>
              <Link
                to="/term-condition"
                style={{
                  textDecoration: "none",
                  color: "#6e6e6e",
                  cursor: "pointer",
                }}
              >
                <p style={{ cursor: "pointer" }}>Terms & Conditions</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
