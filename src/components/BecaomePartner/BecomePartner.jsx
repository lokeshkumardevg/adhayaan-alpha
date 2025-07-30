import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "./Second.css";
import Layout from "../Layout/Layout";
const BecomePartner = () => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const toggleWidth = () => {
    setExpanded(!expanded);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);
  return (
    <Layout>
      <div>
        <div className="box">
          {/* Left box */}
          <div className="left-box">
            <div
              className={`circle ${expanded ? "expanded" : ""} ${
                hovered ? "hover" : ""
              }`}
              onClick={toggleWidth}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {expanded ? (
                <div>
                  <iframe
                    width="500"
                    height="280"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameborder="0"
                    style={{
                      position: "relative",
                      top: "104px",
                      left: "548px",
                      transform: "translate(-70%, -70%)",
                      borderRadius: "15px",
                    }}
                  ></iframe>
                </div>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={{ color: "#f7e5e5" }}
                  />
                  <h4 style={{ color: "#f7e5e5", marginLeft: "5px" }}>
                    {" "}
                    Play{" "}
                  </h4>
                </>
              )}
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <h2>Reach millions of AWS customers</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, modi impedit. Corporis nam nesciunt recusandae debitis
                ullam itaque eum commodi tempora, voluptate corrupti, placeat a
                animi, optio deserunt saepe soluta?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, modi impedit. Corporis nam nesciunt{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="parent">
          <div className="left-div">
            <h2>
              Why become an
              <br />
              AWS Partner?
            </h2>
            <h4 style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad
              nisi consequuntur
            </h4>
          </div>
          <div className="right-div">
            <div className="next-div">
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                  <h3>first</h3>
                  <div
                    className="icons"
                    style={{
                      fontSize: "18px",
                      position: "relative",
                      left: "393px",
                    }}
                  >
                    {isOpen ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion1}>
                  <h3>Second</h3>
                  <div className="icons" style={{ fontSize: "18px" }}>
                    {isOpen1 ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen1 && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion2}>
                  <h3>Third</h3>
                  <div
                    className="icons"
                    style={{
                      fontSize: "18px",
                      position: "relative",
                      left: "378px",
                    }}
                  >
                    {isOpen2 ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen2 && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          {/* Left box */}
          <div className="left-box">
            <div
              className={`circle ${expanded ? "expanded" : ""} ${
                hovered ? "hover" : ""
              }`}
              onClick={toggleWidth}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {expanded ? (
                <div>
                  <iframe
                    width="500"
                    height="280"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameborder="0"
                    style={{
                      position: "relative",
                      top: "104px",
                      left: "548px",
                      transform: "translate(-70%, -70%)",
                      borderRadius: "15px",
                    }}
                  ></iframe>
                </div>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={{ color: "#f7e5e5" }}
                  />
                  <h4 style={{ color: "#f7e5e5", marginLeft: "5px" }}>
                    {" "}
                    Play{" "}
                  </h4>
                </>
              )}
            </div>
          </div>
          <div className="right">
            <div className="right-content">
              <h2>Reach millions of AWS customers</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, modi impedit. Corporis nam nesciunt recusandae debitis
                ullam itaque eum commodi tempora, voluptate corrupti, placeat a
                animi, optio deserunt saepe soluta?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, modi impedit. Corporis nam nesciunt{" "}
              </p>
            </div>
          </div>
        </div>
        <div class="parent">
          <div class="left-div">
            <h2>
              Why become an
              <br />
              AWS Partner?
            </h2>
            <h4 style={{ width: "400px" }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad
              nisi consequuntur
            </h4>
          </div>
          <div class="right-div">
            <div className="next-div">
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion}>
                  <h3>first</h3>
                  <div
                    className="icons"
                    style={{
                      fontSize: "18px",
                      position: "relative",
                      left: "393px",
                    }}
                  >
                    {isOpen ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion1}>
                  <h3>Second</h3>
                  <div className="icons" style={{ fontSize: "18px" }}>
                    {isOpen1 ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen1 && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
              <div className="custom-accordion">
                <div className="accordion-header" onClick={toggleAccordion2}>
                  <h3>Third</h3>
                  <div
                    className="icons"
                    style={{
                      fontSize: "18px",
                      position: "relative",
                      left: "378px",
                    }}
                  >
                    {isOpen2 ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </div>
                </div>
                {isOpen2 && (
                  <div className="accordion-body">
                    <p>
                      This is the first item's accordion body. It is shown by
                      default, until the collapse plugin adds the appropriate
                      classes that we use to style each element.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BecomePartner;
