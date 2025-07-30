import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
import "./Style2.css";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";

const SignInSix = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [fatherName, setFatherName] = useState(
    localStorage.getItem("fatherName") || ""
  );
  const [contactNo, setContactNo] = useState(
    localStorage.getItem("contactNo") || ""
  );
  const [nameError, setNameError] = useState(false);
  const [fatherNameError, setFatherNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hidenav());
    window.scrollTo(0, 0);
  }, []);

  // Function to check if all required fields are filled
  const validateFields = () => {
    let valid = true;
    if (name.trim() === "") {
      setNameError(true);
      valid = false;
    } else {
      setNameError(false);
    }
    if (fatherName.trim() === "") {
      setFatherNameError(true);
      valid = false;
    } else {
      setFatherNameError(false);
    }
    if (email.trim() === "") {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }
    if (contactNo.trim() === "") {
      setContactNoError(true);
      valid = false;
    } else {
      setContactNoError(false);
    }
    return valid;
  };

  // Function to save data to localStorage
  const saveDataToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  // Handle form submission
  const handleNext = () => {
    const isValid = validateFields();
    if (isValid) {
      saveDataToLocalStorage("name", name);
      saveDataToLocalStorage("email", email);
      saveDataToLocalStorage("fatherName", fatherName);
      saveDataToLocalStorage("contactNo", contactNo);
      navigate("/additional-information");
    } else {
      // alert("Please fill in all required fields.");
    }
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };

  return (
    <Layout>
      <div className="div-six-container" onClick={handlemenu2}>
        <div className="inner-six-container">
          <div className="w-six-container">
            <div className="for-heading">
              <h3>Personal information for future correspondence</h3>
            </div>
            <div className="sign-in-wrap-container">
              <div className="sign-in-left">
                <div className="div-f">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      name.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Name*
                  </div>
                </div>
                {nameError && (
                  <p
                    className="error-message"
                    style={{ marginTop: "-40px", color: "#fff" }}
                  >
                    Please enter your name
                  </p>
                )}
                <div className="div-f">
                  <input
                    type="text"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      fatherName.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Father Name*
                  </div>
                </div>
                {fatherNameError && (
                  <p
                    className="error-message"
                    style={{ marginTop: "-40px", color: "#fff" }}
                  >
                    Please enter your father's name
                  </p>
                )}
              </div>
              <div className="sign-in-right">
                <div className="div-f">
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      email.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Email*
                  </div>
                </div>
                {emailError && (
                  <p
                    className="error-message"
                    style={{ marginTop: "-40px", color: "#fff" }}
                  >
                    Please enter your email
                  </p>
                )}
                <div className="div-f">
                  <input
                    type="text"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      contactNo.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Contact No*
                  </div>
                </div>
                {contactNoError && (
                  <p
                    className="error-message"
                    style={{ marginTop: "-40px", color: "#fff" }}
                  >
                    Please enter your contact number
                  </p>
                )}
              </div>
            </div>
            <div
              className="for-button-container-4 three pn-btn"
              style={{ padding: "20px" }}
            >
              <button
                onClick={() => {
                  saveDataToLocalStorage("name", name);
                  navigate("/select-course");
                }}
                style={{ background: "#f7e5e5", color: "#630000" }}
              >
                P R E V I O U S
              </button>
              <button
                onClick={handleNext} // Call handleNext on button click
                style={{ background: "#f7e5e5", color: "#630000" }}
              >
                N E X T
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInSix;
