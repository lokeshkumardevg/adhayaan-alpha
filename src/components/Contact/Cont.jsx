import React from "react";
import "./Contact.css";
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import Image13 from "../Images/Image13.png";
import contactone from "../Images/contactone.png";

import locationimg from "../Images/locationimg.png";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import axios from "axios";

function Contact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [Organisation, setOrganisation] = useState("");
  // const [Country, setCountry] = useState("");
  // const [State, setState] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const apiKey = process.env.REACT_APP_API_URL;
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;

    if (name.trim() === "") {
      setNameError("Name is required*");
      valid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required*");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid*");
      valid = false;
    } else {
      setEmailError("");
    }

    if (subject.trim() === "") {
      setSubjectError("Subject is required*");
      valid = false;
    } else {
      setSubjectError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required*");
      valid = false;
    } else {
      setMessageError("");
    }

    if (!isChecked) {
      alert("You must agree to the terms and conditions before submitting.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    // if (!isChecked) {
    //   alert("You must agree to the terms and conditions before submitting.");
    //   return;
    // }
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/contact_us_email",
        `${apiKey}admin/index.php/Api/contact_us_email`,
        { name, subject, email, message }
      );
      if (response.data.msg === "Successfully Added") {
        alert(response.data.msg);
        console.log(response.data);
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
      }
      setFormSubmitted(true);
    } catch (error) {
      alert("Error while submitting form:", error);
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="contact-one">
        <div className="contact">
          <div
            className="contact-child-1"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {" "}
            <div style={{ paddingTop: "48px" }}>
              {" "}
              <i class="fa-solid fa-phone"> </i>
              <br></br>
              <br></br>
              <h2>Phone number</h2>
              <h4>4986346384</h4>
            </div>
          </div>
          <div
            className="contact-child-2"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="contact-child-icon" style={{ paddingTop: "48px" }}>
              <i class="fa-regular fa-envelope"></i>
              <br></br>
              <br></br>
              <h2>Email Address</h2>
              <h4>gjsghdjh@gmail.com</h4>
            </div>
          </div>

          <div
            className="contact-child-3"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div style={{ paddingTop: "48px" }}>
              <i class="fa-solid fa-location-dot"></i>
              <br></br>
              <br></br>
              <h2> Address</h2>
              <h4 style={{ whiteSpace: "pre-wrap" }}>
                gjsghdjhrfhnoeijsmitdgeudshu
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-two">
        <div className="contact-2">
          <div
            className="contactimagecontainer"
            data-aos="fade-right"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={contactone}
              style={{ marginTop: "52px", marginLeft: "20px" }}
              height={"360px"}
              className="contact-image"
              alt=""
            />
          </div>
          <div
            className="container"
            data-aos="fade-left"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="wraper-container-input">
              <div className="Containerrow1">
                <div className="contact-f">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      name.length === 0 ? "contactinput" : "contactinput fix2"
                    }
                  >
                    Name
                  </div>
                </div>
                {nameError && <p className="error-message">{nameError}</p>}
                <div className="contact-f">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      email.length === 0 ? "contactinput" : "contactinput fix2"
                    }
                  >
                    Email
                  </div>
                </div>
                {emailError && <p className="error-message">{emailError}</p>}
                {/* <div className="contact-f">
                <input
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ zIndex: "1" }}
                />
                <div
                  className={
                    phoneNumber.length === 0
                      ? "contactinput"
                      : "contactinput fix2"
                  }
                >
                  PhoneNumber
                </div>
              </div> */}
              </div>

              <div className="Containerrow2">
                <div className="contact-f">
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      subject.length === 0
                        ? "contactinput"
                        : "contactinput fix2"
                    }
                  >
                    Subject
                  </div>
                </div>
                {subjectError && (
                  <p className="error-message">{subjectError}</p>
                )}
                <div className="contact-f">
                  {/* <input
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  style={{ zIndex: "1" }}
                />
                <div
                  className={
                    Country.length === 0 ? "contactinput" : "contactinput fix2"
                  }
                >
                  Country
                </div> */}
                  <textarea
                    name=""
                    placeholder="Message"
                    id=""
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                {messageError && (
                  <p className="error-message em-3">{messageError}</p>
                )}
                {/* <div className="contact-f">
                <input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  style={{ zIndex: "1" }}
                />
                <div
                  className={
                    State.length === 0 ? "contactinput" : "contactinput fix2"
                  }
                >
                  State
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact-three">  
      <div className="contact-3">
        <div className="contact-3-h1">
          <div
            data-aos="fade-right"
            data-aos-delay="120"
            data-aos-duration="1000"
            data-aos-once="true"
            style={{ paddingTop : "40px", marginLeft : "150px"}}
          >
            <h1> Connect with Us</h1>
            <div className="contacticons">
              <div className="connecticon1">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="connecticon1">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="connecticon1">
                <i class="fa-brands fa-x-twitter"></i>
              </div>
              <div className="connecticon1">
                <i class="fa-brands fa-square-instagram"></i>
              </div>
              <div className="connecticon1">
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>

       
         </div>

         </div>
         </div> */}

      <div className="check-box">
        <div className="check-box-first">
          <div className="check-box-inner-first">
            <form onSubmit={handleSubmit}>
              <label style={{ fontSize: "20px" }}>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I have read Aadhyayan’s Privacy Policy(AH13) and agree to the
                terms and conditions(AH14).
              </label>
              <br />
              <br />
              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
            {formSubmitted && (
              <p>Thank you, Our team will contact you with in 48 hours.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
