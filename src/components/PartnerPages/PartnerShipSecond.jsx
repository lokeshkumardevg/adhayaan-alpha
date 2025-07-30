import React from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import image1 from "../Images/Exciting-Partnership-Opportunities.png";

// import image2 from "../Images/bring-leadership-in-sales.png";
// import image3 from "../Images/right-opportunity.png";
// import image4 from "../Images/Great-team-leaders-make-great-ASMPs.png";
import image5 from "../Images/Managing partnership.png";
import image6 from "../Images/social media influencer partnership.png";
import { hidenav } from "../store/slices/sideNavSlice";
import aos from "aos";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";

const PartnerShipSecond = () => {
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(hidenav());
    aos.init({
      delay: 200,
    });
  }, []);
  const navigate = useNavigate();
  return (
    <Layout>
      <div
        className="pr-p-2-container"
        style={{ overflowX: "hidden" }}
        onClick={handlemenu2}
      >
        <div className="inner-pr-p-2">
          <div className="pr-p2-div">
            <div className="inner-pr-p2-div fi" data-aos="fade-right">
              <h3 style={{ fontSize: "29px" }}>
                Important Note :{" "}
                <span style={{ fontWeight: "normal", fontSize: "20px" }}>
                  {" "}
                  Application before April 30, 2022, we encourage you to
                  re-apply with the necessary details. Rest assured, we will
                  reach out to you as new opportunities arise. We trust this
                  message finds you well. We would like to inform you that our
                  application process has recently undergone a comprehensive
                  revision. If you have submitted an
                </span>
              </h3>
            </div>
          </div>

          <div className="adhyayan-off bg">
            <div className="inner-ad-off">
              <div
                className="div-ad-off"
                style={{ color: "#f7e5e5" }}
                data-aos="fade-right"
              >
                <h3>
                  Aadhyayan is offers two types of sales and marketing
                  partnerships:
                </h3>
                <li>Managing Partnership (MP)</li>
                <li>Social Media Influencer Partnership (SMIP)</li>
              </div>
            </div>
          </div>

          <div className="ad-para-content ">
            <div className="inner-ad-para" style={{ color: "#630000" }}>
              <div className="w-ad-para">
                <p
                  style={{
                    fontWeight: "bold",
                    cursor: "text",
                    fontSize: "20px",
                  }}
                  data-aos="fade-right"
                >
                  1. Managing Partnership (MP):
                </p>
                <li
                  style={{ marginLeft: "10px", listStyle: "none" }}
                  data-aos="fade-right"
                >
                  <i class="fa-solid fa-arrow-right-long"></i> Startup fee as
                  low as ₹1,50,000 Lakhs
                </li>

                <div className="row-container">
                  <div className="row-inner-container">
                    <div
                      className="s-s-p"
                      style={{ display: "flex", gap: "10px" }}
                      data-aos="fade-right"
                    >
                      <i
                        class="fa-regular fa-circle-dot"
                        style={{ marginTop: "19px", fontSize: "12px" }}
                      ></i>

                      <p style={{ textAlign: "justify" }}>
                        Annual revenue for Managing Partner (MP) operating with
                        10 AP: ₹47,50,000 based on modality described below. If
                        Managing Partner (MP) sell 4 Study Material Subscription
                        (SMS) a day, Study Material Subscription (SMS) fee is ₹
                        2500 (Two Thousand Five Hundred Rupees) But Managing
                        Partner (MP) can offer at ₹ 2000) by providing a Partner
                        Code to the prospective applicant. Managing Partner (MP)
                        will get ₹ 750 (Seven Hundred Fifty) on every Study
                        Material Subscription (SMS).
                      </p>
                    </div>
                    <div
                      className="s-s-p"
                      style={{ display: "flex", gap: "10px" }}
                      data-aos="fade-right"
                    >
                      <i
                        class="fa-regular fa-circle-dot"
                        style={{ marginTop: "19px", fontSize: "12px" }}
                      ></i>
                      <p style={{ textAlign: "justify" }}>
                        4 Study Material Subscription (SMS) x 365 = Annual
                        revenue potential from individual Study Material
                        Subscription (SMS) sale * ₹ 11,000,00 (Eleven Lac
                        Rupees) Only Managing Partner (MP) can offer Associate
                        Partner (AP) Associate Partner (AP) Registration Fee
                        (RF): ₹ 25000 (Twenty Five Thousand) Registration Fee
                        Shall be share between Aadhyayan ₹ 10000 (Ten Thousand)
                        and Managing Partner (MP) ₹ 15,000 (Fifteen Thousand
                        Rupees).
                      </p>
                    </div>
                  </div>
                  <div className="img-row-container" data-aos="fade-left">
                    <img src={image5} alt="" />
                  </div>
                </div>

                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    Managing Partner (MP) can make countless Associate Partner
                    (AP) under him/her. If he/she makes 10 Associate Partner
                    (AP): ₹ 15000 x 10 = ₹ 150000 (One lac fifty Thousand)
                    (*Recovered your startup cost).
                  </p>
                </div>

                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    Managing Partner (MP) will get ₹ 250 on every Study Material
                    Subscription (SMS) of AP. If 4 Study Material Subscription
                    (SMS) by Associate Partner (AP) x 365 = ₹ 365000 (Three Lac
                    Sixty Five Thousand Rupees)
                  </p>
                </div>
                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    ₹ 365000 (Three Lac Sixty Five Thousand Rupees) x 10
                    Associate Partner (AP) = ₹ 3650000 (Thirty Six Lac fifty
                    Thousand Rupees) ₹ 3650000 (Thirty Six Lac fifty Thousand
                    Rupees) + ₹ 110000 (Eleven Lac Rupees) = ₹ 4750000 (Forty
                    Seven Lac Fifty Thousand Rupees) Managing Partner (MP)
                    Annual revenue potential * ₹ 4750000 (Forty Seven Lac Fifty
                    Thousand Rupees)
                  </p>{" "}
                </div>
                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    Figures are projected for Managing Partner (MP) operation
                    with 10 Associate Partner (AP) 4 Study Material Subscription
                    (SMS) sale every day.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ad-para-con-2">
            <div className="inner-ad-p-2">
              <div className="w-inner-ad-p-2" style={{ padding: "20px 0px" }}>
                <p
                  style={{
                    fontWeight: "bold",
                    cursor: "text",
                    fontSize: "20px",
                  }}
                  data-aos="fade-right"
                >
                  2. Social Media Influencer Partnership (SMIP)
                </p>

                <div className="row-container">
                  <div className="row-inner-container" data-aos="fade-right">
                    <div className="s-s-p">
                      <i
                        class="fa-regular fa-circle-dot"
                        style={{ marginTop: "19px", fontSize: "12px" }}
                      ></i>
                      <p style={{ textAlign: "justify" }}>
                        Social Media Influencer Partnership (SMIP) is a
                        partnership agreement between Aadhyayan and Influencer
                        of any social media platform with minimum
                        following/subscriber of 10K. (Instagram / Facebook /
                        Youtube / LinkedIN / X Etc.) Social Media Influencer can
                        avail the opportunity to work with Aadhyayan as a
                        partner by registering themself on our Partner
                        Registration Link, after successful registration
                        Influencer will get the Partner Code. In the partnership
                        you have to promote Aadhyayan on your platform with your
                        partner code.
                      </p>
                    </div>
                    <div className="s-s-p">
                      <i
                        class="fa-regular fa-circle-dot"
                        style={{ marginTop: "19px", fontSize: "12px" }}
                      ></i>
                      <p style={{ textAlign: "justify" }}>
                        If Social Media Influencer Partner (SMIP) sell 4 Study
                        Material Subscription (SMS) a day
                      </p>
                    </div>
                  </div>
                  <div className="img-row-container">
                    <img
                      src={image6}
                      alt=""
                      // srcset=""
                      // width={"100%"}
                      data-aos="fade-left"
                    />
                  </div>
                </div>
                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    Study Material Subscription (SMS) fee is ₹ 2500 (Two
                    Thousand Five Hundred Rupees) But Social Media Influencer
                    Partner (SMIP) can offer at ₹ 2000 (Two Thousand Five
                    Hundred Rupees) (follower/subscriber will use your partner
                    code, the time of submission of the application).
                  </p>
                </div>
                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    Social Media Influencer Partner (SMIP) will get ₹ 750 (Seven
                    Hundred Fifty) on every Study Material Subscription (SMS).
                  </p>
                </div>
                <div className="s-s-p" data-aos="zoom-in">
                  <i
                    class="fa-regular fa-circle-dot"
                    style={{ marginTop: "19px", fontSize: "12px" }}
                  ></i>
                  <p style={{ textAlign: "justify" }}>
                    3. Study Material Subscription (SMS) (Every day) x 365= 1460
                    Study Material Subscription (SMS) (Yearly) = Annual revenue
                    potential from individual Study Material Subscription (SMS)
                    sale * ₹ 11,000,00 Approx. (Eleven Lac Rupees Approx.)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="c-div-btn">
            <button onClick={() => navigate("/get-started")} data-aos="zoom-in">
              Get started{" "}
            </button>
          </div> */}
          <div className="c-div-btn">
            {/* <button onClick={() => navigate("/partnership-plan")}>
              Partnership Plan
            </button> */}

            <button class="button" onClick={() => navigate("/get-started")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                style={{ marginLeft: "10px", fontSize: "13px" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>

              <div class="text" style={{ fontSize: "16px" }}>
                Get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PartnerShipSecond;
