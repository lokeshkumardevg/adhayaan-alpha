import React from "react";
import { useEffect } from "react";
import image1 from "../Images/5.png";
import first from "../Images/first.png";
import second from "../Images/second.png";
import third from "../Images/third.png";
import fourth from "../Images/fourth.png";
import five from "../Images/five.png";
import six from "../Images/six.png";

import Layout from "../Layout/Layout";
import "./Aboutuscss.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";

function Aboutus() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    dispatch(hidenav());
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={{background:'#f7e5e5'}}>
        <div
          className="About-one"
          style={{ overflowY: "hidden" }}
          onClick={() => dispatch(hidenav())}
        >
          <div className="abouts">
            <div
              className="about-page"
              style={{
                // marginTop:'20px'
                // marginBottom: "10px",
                paddingTop: "70px",
              }}
            >
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="250"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <h1>About Aadhyayan </h1>
                <p>
                Adhyayan is a online provider of study material. Offering an extensive array of over 100 programs, including Bachelors, Masters, Diplomas, and Certificates, we align our curriculum with the structure of educational institutions.{" "}
                </p>
              </div>
              <div
                className="about-image"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img src={first} alt="" height={"320px"}></img>
              </div>
            </div>

            <div className="about-page ap-2" style={{ marginBottom: "10px" }}>
              <div
                className="about-image1"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img src={second} alt="" height={"330px"}></img>
              </div>
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>
                Our approach involves adhering to the standardized syllabus of universities and colleges across India. This methodology addresses the persistent challenge faced by students who struggle to access all required textbooks for their respective programmes. Notably, a significant portion of India's student population faces difficulties in obtaining course materials from traditional bookstores, compelling them to travel long distances to libraries. This becomes especially burdensome for those who are financially constrained, as each library visit incurs hidden costs.
                </p>

                <p>
                  {" "}
                  {/* India's majority of students are deprived of not getting the
                  course material at book stores and they have to keep suffer
                  because of that and they have to visit libraries far from
                  their home to study. Many of students can do that, but there
                  are maximum students who are not financially empowered. Every
                  visit to a library has a hidden cost associated. */}
                </p>
              </div>
            </div>

            <div className="about-page" style={{ marginBottom: "10px" }}>
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>
                Procuring study materials from conventional bookstores often proves futile for higher education courses, revealing an unfortunate reality. Whether at Pustak Bhandar, Book Store, Book Depot, or other sellers, availability is scarce, and when found, the costs are exorbitant. The weight of physical books also poses a challenge, making it impractical to carry all necessary materials.{" "}
                </p>
              </div>
              <div
                className="about-image"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img src={third} alt="" height={"350px"}></img>
              </div>
            </div>

            <div className="about-page ap-2" style={{ marginBottom: "10px" }}>
              <div
                className="about-image1"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img
                  src={fourth}
                  alt=""
                  height={"380px"}
                  className="image"
                ></img>
              </div>
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>
                  {" "}
                  Aadhyayan emerges as a solution to this predicament by providing access to study materials for various programmes and courses through digital platforms such as mobile devices, desktops, laptops, and iPads/Tab. Students can effortlessly obtain their required materials by completing a membership application form.
                </p>

                {/* <p>
                  You have to fill a form and apply for the exclusive membership
                  for your course study material at only Rs 2500 for students
                  after 50% discount.
                </p>

                <p>
                  With help of this initiative at least Indian students are
                  getting books while pursuing higher education.
                </p> */}
              </div>
            </div>

            {/* <div className="about-page" style={{ marginBottom: "10px" }}>
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>
                  Aadhyayan stands as India's pioneering online provider of
                  study material. Offering an extensive array of over 100
                  programs, including Bachelors, Masters, Diplomas, and
                  Certificates, we align our curriculum with the structure of
                  Indian educational institutions.
                </p>

                <p>
                  Our approach involves adhering to the standardized syllabus of
                  universities and colleges across India. This methodology
                  addresses the persistent challenge faced by students who
                  struggle to access all required textbooks for their respective
                  programmes. Notably, a significant portion of India's student
                  population faces difficulties in obtaining course materials
                  from traditional bookstores, compelling them to travel long
                  distances to libraries. This becomes especially burdensome for
                  those who are financially constrained, as each library visit
                  incurs hidden costs.
                </p>
              </div>
              <div
                className="about-image"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img src={five} alt="" height={"420px"}></img>
              </div>
            </div> */}

            {/* <div className="about-page ap-2" >
              <div
                className="about-image1"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <img src={six} alt="" height={"400px"} />
              </div>
              <div
                className="about-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <p>
                  Procuring study materials from conventional bookstores often
                  proves futile for higher education courses, revealing an
                  unfortunate reality. Whether at Pustak Bhandar, Book Store,
                  Book Depot, or other sellers, availability is scarce, and when
                  found, the costs are exorbitant. The weight of physical books
                  also poses a challenge, making it impractical to carry all
                  necessary materials.
                </p>
                <p>
                  Aadhyayan emerges as a solution to this predicament by
                  providing access to study materials for various programmes and
                  courses through digital platforms such as mobile devices,
                  desktops, laptops, and iPads/Tab. Students can effortlessly
                  obtain their required materials by completing a membership
                  application form, with an exclusive offer priced at INR. 2500
                  after a 50% discount.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div
          className="About-two"
          style={{ overflowY: "hidden" }}
          onClick={() => dispatch(hidenav())}
        >
          <div className="About2">
            <div className="abouticon1-one">
              <div
                className="abouticon1"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <i
                  class="fa-solid fa-eye"
                  style={{ fontSize: "37px", color: "#630000" }}
                ></i>

                <h2>Vision </h2>
                <p>
                  Aadhyayan vision is to be the world's leading online study
                  material provider, we initially started our organisation with
                  only 20 programmes in 2015, now in 2024, now we are providing
                  study material of more then 100 programmes/courses. Our vision
                  is to reach the number of courses more then 300
                  programmes/courses absolute course material in coming years
                  from all the streams and languages. And soon we will also
                  going to offer reference books for important programmes with
                  articles and we'll also introduce market professionals advise
                  platforms in future.
                </p>
                <p>
                  We have seen that in our nation after 12th standard
                  availability of course material/study material is not
                  available. If available then how many of students can afford.
                  Generally students study between 36 to 26 subject in the 3
                  year graduation programme. Majority of students are deprived
                  of having course material/study material.
                </p>
                <p>
                  Our vision is that no student will never be deprived of having
                  course material in future. And that is why we have invested
                  our years into building a standard course material for our
                  future generations. so that at least while perusing education
                  at lease they can study at anywhere.
                </p>
              </div>
            </div>

            <div className="abouticon2-one">
              <div
                className="abouticon2"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <i
                  class="fa-solid fa-bullseye"
                  style={{ fontSize: "37px", color: "#630000" }}
                ></i>

                <h2>Mission</h2>
                <p>
                  Our mission is to build India's first free Online school and a
                  free online university. In that school and university any one
                  can register and obtain education. Our focus is to make
                  platform where students can get live classes 24x7. We know
                  that there are many students in our country will not able to
                  afford computers or such technologies. but we will share our
                  own profits for those students who are deprived and poor's
                  Because our goal is to build a strongest nations and we are
                  ready to contribute in a nation building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;
