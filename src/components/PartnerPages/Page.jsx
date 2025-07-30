import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom/dist";
import Carousel from "react-multi-carousel";
import { hidenav } from "../store/slices/sideNavSlice";
import aos from "aos";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
const Page = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showArrow, setShowArrow] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(hidenav());
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window.innerWidth < 974) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };
    aos.init();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <Layout>
      <div className="p-h-s" onClick={handlemenu2}>
        <div className="inner-p-h-s">
          <div className="s-ph-s" data-aos="zoom-in">
            <h2>
              Start your business The building blocks you’ll need to become an
              Aadhyayan Sales and Marketing Partner (ASMP)
            </h2>
          </div>
        </div>
      </div>
      <div className="ph-s-2" onClick={handlemenu2}>
        <div className="inner-ph-s-2">
          <div className="width-ph-s-2" data-aos="zoom-in">
            <p style={{ marginTop: "-40px", fontSize: "20px" }}>
              Steps you'll take
            </p>
            <p>
              From starting your application to making your first sales,
              becoming an partner can take as little as three months or as long
              as six months, depending on the availability of opportunities in
              your area.
            </p>
            <ol>
              <li> Create an account and set up your profile</li>
              <li> Fill out a formal application</li>
              <li> Application review and final interview</li>
              <li>Complete two weeks of hands-on training</li>
              <li> Set up your business and build a team </li>
              <li> Start sale.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="ph-s-3" onClick={handlemenu2}>
        <div className="inner-ph-s-3">
          <div className="w-p-s-3" style={{ color: "#fff" }}>
            <h3
              style={{ fontSize: "45px", textAlign: "center" }}
              data-aos="fade-down"
              data-aos-once="true"
            >
              Ready to get started?
            </h3>
            <p
              style={{ cursor: "text", lineHeight: "30px" }}
              data-aos="zoom-in"
              data-aos-once="true"
            >
              If you have the time, dedication, and qualifications to be a{" "}
              <span style={{ fontWeight: "bold" }}>
                Aadhyayan Sales and Marketing Partner (ASMP){" "}
              </span>
              , you are only two steps away from starting your journey. First,
              determine if the location where you would like to operate is
              accepting applications through the list below. Second, create an
              account and get to work on submitting your application.
            </p>
          </div>
        </div>
      </div>

      <div className="what-container" onClick={handlemenu2}>
        <div className="inner-what-conatiner">
          <div className="width-w-y-do">
            <div className="what-you-do-div">
              <h2 style={{ color: "#fff" }} data-aos="zoom-out">
                What you do?
              </h2>
            </div>

            <Carousel
              responsive={responsive}
              className="carousel ccarousel"
              dotListClass="custom-dot-list-style"
              containerClass="container-with-dots"
              autoPlay={true}
              autoPlaySpeed={1000}
              infinite
              showDots={true}
              // arrows={showArrow ? false : true}
              arrows={false}

              // arrows={false}
              // showDots={true}
              // renderDotsOutside={true}
            >
              <div className="w-y-card">
                <h4>Set up your business</h4>
                <p>
                  You can leverage a suite of exclusive Aadhyayan negotiated
                  deals to start your business, and work with our network of
                  top-in-class sales and marketing service providers to keep
                  your operation rolling.
                </p>
              </div>
              <div className="w-y-card">
                <h4>Build your team</h4>
                <p>
                  You’re a coach. This is your team. Your most important
                  responsibility is recruiting and retaining solid sales and
                  marketing professionals, who will enable your ongoing success.
                </p>
              </div>

              <div className="w-y-card">
                <h4 style={{ fontSize: "20px" }}>
                  Sales of Course Study Material (CSM) login
                </h4>
                <p style={{ lineHeight: "30px", marginTop: "-0px" }}>
                  *Your team of sales and marketing professionals may sale at
                  least 4 login per day to the applicants.
                </p>
              </div>
              <div className="w-y-card ">
                <h4 style={{ fontSize: "24px" }}>Create your team culture</h4>
                <p style={{ marginTop: "-10px" }}>
                  You lead with a can-do attitude that ensures your business
                  reflects Aadhyayan’s high standards and customer-obsessed
                  culture. Coach, develop, and motivate your team to exceed
                  expectations on every sale.
                </p>
              </div>
              <div className="w-y-card ">
                <h4>Grow your business</h4>
                <p>
                  Deliver a great customer experience and get the opportunity to
                  hire more people, sales of more logins, and grow your
                  business.
                </p>
              </div>
            </Carousel>
            {/* <div className="w-y-d-div"></div> */}
          </div>
        </div>
      </div>

      <div className="f-h" onClick={handlemenu2}>
        <div className="inner-ph-s-3 i-sa">
          <div className="width-w-y-do">
            <div className="what-you-do-div">
              <h2 style={{ color: "#630000" }} data-aos="zoom-out">
                {" "}
                What we do?
              </h2>
            </div>

            <Carousel
              responsive={responsive}
              className="carousel ccarousel"
              dotListClass="custom-dot-list-style"
              containerClass="container-with-dots"
              autoPlay={true}
              autoPlaySpeed={1000}
              infinite
              // arrows={showArrow ? false : true}
              arrows={false}
              showDots={true}
              // renderDotsOutside={true}
            >
              <div className="w-y-card o-c">
                <h4>Get you started</h4>
                <p>
                  *Exclusive courses study material for applicants, so that you
                  and your team can market the product in the all colleges,
                  universities, coaching center, student oriented potential
                  areas etc. and other services help you get your sales and
                  marketing business up and running.
                </p>
              </div>
              <div className="w-y-card  o-c">
                <h4>Provide training</h4>
                <p>
                  We provide one weeks of hands-on training to ensure you’re set
                  up for success, starting with a 3 days of online training on
                  introduction to Aadhyayan, followed by 4 days in the field to
                  learn the tips and tricks of operating a successful sales and
                  marketing business from those who know it best.
                </p>
              </div>

              <div className="w-y-card o-c">
                <h4 style={{ fontSize: "20px" }}>
                  Give you a comprehensive toolkit
                </h4>
                <p style={{ lineHeight: "30px", marginTop: "-0px" }}>
                  We give you the tools and technology you’ll need to run your
                  business, designed to keep your operation running smoothly.
                </p>
              </div>
              <div className="w-y-card o-c">
                <h4 style={{ fontSize: "24px" }}>Offer on-demand support</h4>
                <p style={{ marginTop: "-10px" }}>
                  Managing Partner (MP) receive ongoing support from Aadhyayan
                </p>
              </div>
              {/* <div className="w-y-card o-c">
                <h4>Grow your business</h4>
                <p>
                  Deliver a great customer experience and get the opportunity to
                  hire more people, sales of more logins, and grow your
                  business.
                </p>
              </div> */}
            </Carousel>
            {/* <div className="w-y-d-div"></div> */}
          </div>
        </div>
      </div>

      <div className="ph-s-4" onClick={handlemenu2}>
        <div className="inner-ph-s-4">
          <div
            className="w-ph-s-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h3 style={{ fontSize: "30px  " }}>Share our experience</h3>
            <p>
              Aadhyayan shares more than 14 years of sales and marketing
              experience to guide you in one of the fastest-growing industries
              in the world.
            </p>
            <div className="bt-div-ph">
              <h3>Your success story starts here.</h3>
              <button onClick={() => navigate("/apply-now")} className="a-n">Apply Now</button>
            </div>

            {/* <Link to="/" className="c-h-r">
              <p>Click Here to Register</p>
            </Link> */}
          </div>
        </div>
      </div>

      <div className="div-thinking" onClick={handlemenu2}>
        <div className="inner-div-thinking">
          <div className="width-thinking">
            <img
              src="https://png.pngtree.com/png-vector/20221122/ourmid/pngtree-thinking-man-illustration-with-question-mark-and-light-bulb-for-business-png-image_6475461.png"
              alt=""
              // width={"10%"}
            />
            <p style={{ color: "#630000" }}>
              Still have questions ?{" "}
              <Link
                to={"/faq"}
                style={{
                  textDecoration: "none",
                  color: "#630000",
                  fontWeight: "bolder",
                }}
              >
                {" "}
                Check out our FAQs.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
