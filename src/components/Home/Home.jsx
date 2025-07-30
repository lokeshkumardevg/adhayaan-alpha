import React, { useEffect, useState } from "react";
import "./Home.css";
import image1 from "../Images/5.png";
import image2 from "../Images/6.png";
import image3 from "../Images/3 (2).png";
import image4 from "../Images/4 (1).png";
import image5 from "../Images/1 (1).png";
// import gift_card from '../Images/WhatsApp Image 2024-07-18 at 4.44.16 PM.jpeg'
// import Callback from "../Callback/Callback";
import AOS from "aos";
import "aos/dist/aos.css";
// import "react-multi-carousel/lib/styles.css";
import Latestnews from "../Latest news/Latestnews";
import Testimonial from "../Testimonial/Testimonial";
// import reportWebVitals from "../../reportWebVitals";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import axios from "axios";
import { Helmet } from "react-helmet";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import { hidenav } from "../store/slices/sideNavSlice";
// import News from "../Latest news/News";
// import New from "../Latest news/New";
// import One from "../Latest news/One";
const Home = () => {
  const [show, setShow] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  const [email, setGetStartedEmail] = useState(
    localStorage.getItem("getStartedEmail") || ""
  );
  const apikey = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const [data] = useState([
    {
      title: "1.What is Aadhyayan?",
      content: `Aadhyayan is a subscription-basedAadhyayan is the India's first online study material provider. We have more then 100 programmes from all the interest like Bachelors, Masters, Diplomas, Certificates etc on an internet-connected device. We follow the structure of Indian educational institution.`,
    },
    {
      title: "2.Aadhyayan publication, Books or study Material?",
      content:
        "Aadhyayan content varies by region and may change over time. You can study a variety of your course books online Aadhyayan originals, more.The more you study, the better Aadhyayan gets at recommending course content or study material.",
    },
    {
      title: "3.Getting started with Aadhyayan?",
      content: `Welcome to Aadhyayan! Below you'll find some information to get you started. If you don’t see a topic covered here, try searching for it on our Help Center (). If you haven't signed up yet and would like to learn more, visit What is Aadhyayan?
        `,
    },
    {
      title: "4.What is the process after the enrolment?",
      content: (
        <p>
          After the successful enrolment, Aadhyayan will send you an official
          acknowledgment of the receiving of the document with the fee
          submission & the student will receive Personal Login ID for the access
          to the Aadhyayan website, where they can get a access to the course
          content
        </p>
      ),
    },
    {
      title: "5.When and where will examination be held?",
      content: (
        <p>
          Aadhyayan will intimate you via email your examination Date.
          Examination will be conducted by University as per the student
          programs twice a year (end of 6 months semester) or end of the year.
          From the date of the start of the enrolment. Examination will be held
          online.
        </p>
      ),
    },
  ]);

  const getStarted = async () => {
    if (!email) {
      alert("please fill");
    } else {
      try {
        const response = await axios.post(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/get_started_email",
          `${apikey}admin/index.php/Api/get_started_email`,
          { email }
        );
        console.log(response);
        if (response.data.status === "200") {
          alert("Email sent successfully");
          setTimeout(() => {
            navigate("/sign-up");
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setGetStartedEmail(value);
  };

  const handleGetStarted = () => {
    getStarted();
    saveToLocalStorage();
    if (email.length > 0) {
    }
  };

  const saveToLocalStorage = () => {
    if (email.trim() !== "") {
      localStorage.setItem("getStartedEmail", email);
    }
  };
  const handleChange = () => {
    navigate("/searchpage");
  };
  const dispatch = useDispatch();
  const handlemenu = () => {
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };

  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
    const savedEmail = localStorage.getItem("getStartedEmail");
    if (savedEmail) {
      setGetStartedEmail(savedEmail);
    }
  }, []);
  return (
    <Layout>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}

      <div
        className="middle-banner-container"
        // onClick={()=>dispatch(dashnavemenushow())}
        onClick={handlemenu}
      >
        <div
          className="inner-mb-container"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="true"
          style={{ overflow: "hidden" }}
          onClick={() => dispatch(decrement())}
        >
          <h3>
            {/* {apikey} */}
            Absolute Course materials, Study material, Reference Material <br />
            and more
          </h3>
          <p className="in-p" style={{ cursor: "text" }}>
            Study Anyone, Anytime, Anywhere.
          </p>
          <div className="input-container hide-2">
            <input
              type="text"
              placeholder="Courses  Stream   Programmers   Vocatioinal Programmers   Duration/Mode"
              onClick={handleChange}
            />
            <button onClick={() => navigate("/searchpage")}>
              <i class="fa-solid fa-magnifying-glass"></i>Search
            </button>
          </div>{" "}
          <div className="input-container-2 ">
            <input
              type="text"
              placeholder="Courses     Programmers   Vocatioinal Programmers   "
              onClick={handleChange}
            />
            <button onClick={() => navigate("/searchpage")}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>{" "}
          <div className="input-container-1">
            <p style={{ cursor: "text" }}>
              Ready to study? Enter your email to create or restart your
              membership.
            </p>
            <div className="email-div fl">
              <input
                type="email"
                value={email}
                // onChange={(e) => setGetStartedEmail(e.target.value)}
                onChange={handleEmailChange}
                id="input"
                placeholder="Email adress"
              />
              <button className="get-btn" id="btn" onClick={handleGetStarted}>
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className=" fl-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email adress"
              />
              <button className="get-btn" onClick={handleGetStarted}>
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {/* <div className="input-container-1">
           
            <div className="email-div fl">
              <input
                type="email"
                name=""
                id="input"
                placeholder="Email adress"
              />
              <button className="get-btn" id="btn">
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div> */}
        </div>
      </div>

      <div
        className="home-container"
        style={{ overflowY: "hidden" }}
        onClick={handlemenu2}
      >
        <div className="inner-home-container">
          <div
            className="home-div"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img src={image1} alt="" width={"70%"} />
          </div>
          <div
            className="home-div-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <h3>Enjoy your study Material or course books online</h3>
            <p style={{ cursor: "text" }}>
              Aadhyayan emergs as a solution to this predic-ament by providing
              access to study materials for various programmers and course
              through digital platforms such as mobile devices, desk-tops,
              latops, and iPads/Tab.
            </p>
          </div>
        </div>
      </div>

      <div className="app-container">
        <div
          className="inner-app-container"
          style={{ overflowX: "hidden", overflowY: "hidden" }}
          onClick={handlemenu2}
        >
          <div
            className="app-div-1"
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <h3>Download your Aadhyayan Application in your mobile phone</h3>
            <p style={{ cursor: "text" }}>
              Save your favourites easily and always have some-thing to study at
              your converience.
            </p>
          </div>
          <div
            className="app-div"
            data-aos="fade-left"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <img src={image2} alt="" width={"70%"} />
          </div>
        </div>
      </div>

      {/* <div className="study-container">
        <div
          className="inner-study-container"
          onClick={() => dispatch(decrement())}
        >
          <div
            className="study-div"
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <img src={image3} alt="" width={"70%"} />
          </div>
          <div
            className=" study-div-1"
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <h3>Study anytime, anyware, everywhere</h3>
            <p style={{ cursor: "text" }}>
              Majority of indian students are deprived of the course materials
              and books because of the lack flexiblities and higher costs of the
              study materials libraries are a far fetched dream for many and
              uncommon according to certian demo graphic criteria.
            </p>
          </div>
        </div>
      </div> */}
      <div
        className="study-container"
        style={{ overflowY: "hidden" }}
        // onClick={() => dispatch(decrement())}
        onClick={handlemenu2}
      >
        <div className="inner-study-container">
          <div
            className="study-div"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-once="true"
            data-aos-delay="800"
          >
            <img src={image3} alt="" width={"70%"} />
          </div>
          <div
            className="study-div-1"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <h3>Study anytime, anyware, everywhere</h3>
            <p style={{ cursor: "text"}}>
              Majority of indian students are deprived of the course materials
              and books because of the lack flexiblities and higher costs of the
              study materials libraries are a far fetched dream for many and
              uncommon according to certian demo graphic criteria.
            </p>
          </div>
        </div>
      </div>

      <div className="family-container">
        <div
          className="inner-family-container"
          // onClick={() => dispatch(decrement())}
          onClick={handlemenu2}
        >
          <div
            className="family-div-1"
            data-aos="zoom-in"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="100"
          >
            <h3>Become part of the Aadhyayan family.</h3>
            <p style={{ cursor: "text" }}>
              If you process strong leader skills, a passion for team
              development, and experties in marketing and sales, this
              opportunity is made for you.
            </p>
          </div>
          <div
            className="family-div"
            data-aos="zoom-in"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <img src={image4} alt="" width={"70%"} />
          </div>
        </div>
      </div>

      <div
        className="bg-container"
        data-aos-duration="1000"
        data-aos-once="true"
        data-aos="fade-up"
        data-aos-delay="100"
        // onClick={() => dispatch(decrement())}
        onClick={handlemenu2}
      >
        <div className="inner-bg-container"></div>
      </div>

      <div className="faq-container">
        <div
          className="inner-faq-container"
          style={{ overflowX: "hidden" }}
          // onClick={() => dispatch(decrement())}
          onClick={handlemenu2}
        >
          <p
            className="faq-p"
            data-aos="zoom-in"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="200"
            style={{ cursor: "text" }}
          >
            <span>Frequently</span> Asked Question
          </p>
          <div className="wrap-faq">
            <div
              className="faq-img"
              data-aos="fade-left"
              data-aos-duration="100"
              data-aos-once="true"
              data-aos-delay="600"
            >
              <img src={image5} alt="" width={"70%"} />
            </div>
            <div
              className="faq-content"
              data-aos="fade-right"
              data-aos-duration="100"
              data-aos-once="true"
              data-aos-delay="1000"
            >
              {data.map((value, index) => {
                return (
                  <div className="fc-wraper">
                    <div
                      className={
                        show && rowIndex === index ? " fc-1-1" : "fc-1"
                      }
                    >
                      <p
                        onClick={() => {
                          rowIndex === index && setShow(!show);
                        }}
                      >
                        {value.title}
                      </p>
                      {show && rowIndex === index ? (
                        <i
                          class="fa-solid fa-xmark"
                          onClick={() => {
                            setShow(false);
                          }}
                          style={{ color: "#630000" }}
                        ></i>
                      ) : (
                        <>
                          <i
                            class="fa-solid fa-plus"
                            onClick={() => {
                              setShow(true);
                              setRowIndex(index);
                            }}
                            style={{ color: "#630000" }}
                          ></i>
                        </>
                      )}
                    </div>
                    <div
                      className={
                        show && rowIndex === index ? "fc-2" : "fc-hide"
                      }
                    >
                      <p style={{ textAlign: "justify" }}>{value.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Latestnews />
      {/* <News/> */}
      <Testimonial />

      <div className="gift-banner-coantainer">
        <div
          className="inner-banner-container"
          onClick={() => navigate("/gift-form")}
          style={{ cursor: "pointer" }}
        ></div>
      </div>

      <div className="get-start-container">
        <div
          className="inner-get-start-container"
          style={{ overflowY: "hidden" }}
          // onClick={() => dispatch(decrement())}
          onClick={handlemenu2}
        >
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-once="true"
            style={{textAlign:'justify'}}
          >
            Ready to study? Enter your email to create or restart your
            membership.
          </p>

          <div
            className="ed-1"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <input
              type="email"
              name=""
              placeholder="Email adress"
              value={email}
              onChange={handleEmailChange}
            />
            <button className="ed-btn" onClick={handleGetStarted}>
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
