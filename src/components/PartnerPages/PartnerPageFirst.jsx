import React from "react";
import "./PartnerPage.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { hidenav } from "../store/slices/sideNavSlice";
import image1 from "../Images/Exciting-Partnership-Opportunities.png";

import image2 from "../Images/bring-leadership-in-sales.png";
import image3 from "../Images/right-opportunity.png";
import image4 from "../Images/Great-team-leaders-make-great-ASMPs.png";
// import image5 from "../Images/Managing partnership.png";
// import image6 from "../Images/social media influencer partnership.png";
import aos from "aos";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
const PartnerPageFirst = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(hidenav());
    dispatch(hidenav());
    aos.init({
      delay: 200,
    });
  }, []);
  return (
    <Layout>
      <div className="pr-p-2-container" style={{ overflowX: "hidden" }}onClick={handlemenu2}>
        <div className="inner-pr-p-2">
          <div className="pr-pr-2-div bg-2">
            <div className="inner-pr-pr-2">
              <div className="w-h-sa">
                <div className="p-image-container">
                  <div
                    className="image-div-container o-2"
                    data-aos="zoom-in-up"
                  >
                    <img src={image2} alt="" />
                  </div>
                  <div className="p-div ml" data-aos="zoom-in">
                    <p
                      style={{
                        lineHeight: "30px",
                        textAlign: "justify",
                        color: "#630000",
                      }}
                    >
                      <h2 style={{ color: "#630000" }}>
                        You bring leadership in sales; we'll bring the rest.
                      </h2>
                      With low startup costs, inherent demand, and access to
                      Aadhyayan's vast sales and marketing experience, this
                      program provides a platform to establish and expand a
                      successful business in sales and marketing. Join a dynamic
                      community of Aadhyayan Sales and Marketing Partners in one
                      of the world's fastest-growing industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pr-pr-2-div">
            <div
              className="inner-pr-pr-2"
              style={{
                overflowX: "hidden",
                overflowY: "hidden",
                padding: "30px 0px",
              }}
            >
              <div className="w-h-sa">
                <div className="p-image-container">
                  <div
                    className="p-div"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    id="trigger-left"
                  >
                    <h2>Exciting Partnership Opportunities with Aadhyayan</h2>
                    <p style={{ lineHeight: "30px", textAlign: "justify" }}>
                      Aadhyayan (Parent Organization) is pleased to introduce
                      the Aadhyayan Sales and Marketing Partnership (ASMP)
                      Program as part of our Partnership initiative. If you
                      possess strong leadership skills, a passion for team
                      development, and expertise in marketing and sales, this
                      opportunity is tailor-made for you. Become an Aadhyayan
                      Sales and Marketing Partner (ASMP) and contribute to
                      student success by facilitating access to Study Material
                      Subscription (SMS) benefits. Here's why you should
                      consider this opportunity:
                    </p>
                  </div>
                  <div
                    className="image-div-container"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <img src={image1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pr-pr-2-div bg-2">
            <div className="inner-pr-pr-2">
              <div className="w-h-sa">
                <div className="p-image-container">
                  <div
                    className="image-div-container o-2"
                    data-aos="fade-right"
                  >
                    <img src={image4} alt="" width={"100%"} />
                  </div>
                  <div className="p-div ml" data-aos="fade-left">
                    <p
                      style={{
                        lineHeight: "30px",
                        textAlign: "justify",
                        color: "#630000",
                      }}
                    >
                      <h2 style={{ color: "#630000" }}>
                        Great team leaders make great ASMPs.
                      </h2>
                      The key to success as an owner is engaging and leading a
                      high-performing team. Owning a Sales and Marketing
                      business demands strong leadership, grit, and hard work.
                      If you possess these qualities, bring your leadership
                      skills, and we will provide the necessary technological
                      and operational support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pr-pr-2-div">
            <div className="inner-pr-pr-2">
              <div className="w-h-sa">
                <div className="p-image-container" style={{ padding: "20px" }}>
                  <div className="p-div" data-aos="zoom-out-right">
                    <h2>Is this the right opportunity for you?</h2>
                    <p className="p-left" style={{ lineHeight: "30px", textAlign: "justify" }}>
                      If you are a customer-focused individual who excels at
                      team development in a fast-paced, ever-evolving
                      environment, becoming an Aadhyayan Sales and Marketing
                      Partner (ASMP) is an ideal prospect. As an owner, you will
                      operate alongside your Associate Partner (AP) and be fully
                      responsible for selecting and building a high-performing
                      team, while we handle the setup logistics. Your primary
                      focus will be to provide support to ensure successful
                      sales.
                    </p>
                  </div>
                  <div className="image-div-container" data-aos="zoom-out-left">
                    <img src={image3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-div-btn">
            {/* <button onClick={() => navigate("/partnership-plan")}>
              Partnership Plan
            </button> */}
          <img src="" alt="" />
            <button
              class="button"
              onClick={() => navigate("/partnership-plan")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 h-b-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>

              <div class="text text-2">Partnership Plan</div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerPageFirst;
