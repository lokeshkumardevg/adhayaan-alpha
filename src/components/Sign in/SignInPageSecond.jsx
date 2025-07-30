import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
import "./Singinsecond.css";
import axios from "axios";
import Loding from "../Loder/Loding";

const SignInPageSecond = () => {
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let hasError = false;

    if (!email) {
      setEmailError("Please enter your email.");
      hasError = true;
      setLoader(false);
    } else if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email.");
      hasError = true;
      // setLoader(false);
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      hasError = true;
      // setLoader(false);
    }
    if (password && email && !backendError) {
      setLoader(true);
    }

    if (!hasError) {
      try {
        const res = await axios.post(
          // "https://aadhyayan.aboqindia.com/admin/index.php/Api/smssignup/",
          `${apiKey}admin/index.php/Api/smssignup/`,
          { email, password }
        );
        if (res.data && res.data.status === "201") {
          // Handle backend error
          setBackendError(res.data.msg);
          alert(res.data.msg);
        } else if (res.data) {
          navigate("/verify-email");
          localStorage.setItem("Signupemail", email);
        }
        // if (res.data) {
        //   navigate("/verify-email");
        //   localStorage.setItem("Signupemail", email);
        // }
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    dispatch(hidenav());
    // setEmail(localStorage.getItem('getStartedEmail')
    // setEmail(localStorage.getItem("getStartedEmail"));
  }, []);

  return (
    <>
      {loader ? (
        <Loding />
      ) : (
        <Layout>
          <div className="sgn-container-1" onClick={()=>dispatch(hidenav())}>
            <div className="inner-sgn-container-1">
              <div className="w-i-sgn-container-1">
                <h2>Create a password to start your membership</h2>
                <p>
                  Just a few more steps and you're done! We hate paperwork, too.
                </p>
              </div>
            </div>
          </div>
          <div className="sgn-container-2">
            <div className="inner-sgn-container-2">
              <div className="w-sgn-c-2">
                {/* <div
                  className="wc-inner"
                  style={{ width: "200px", height: "100px" }}
                > */}
                <div
                  className={`div-f bg-f ${emailError && "has-error"}`}
                  style={{ zIndex: "1", marginTop: "30px" }}
                >
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className={
                      email.length === 0
                        ? "labelline bg-l"
                        : "labelline bg-l fix"
                    }
                  >
                    Email*
                  </div>
                </div>
                {emailError && (
                  <div className="error-message">{emailError}</div>
                )}
                {backendError && (
                  <div className="error-message">{backendError}</div>
                )}
                {/* </div> */}
                <div
                  className="div-f bg-f"
                  style={{ zIndex: "1", marginTop: "10px" }}
                >
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={
                      password.length === 0
                        ? "labelline bg-l"
                        : "labelline bg-l fix"
                    }
                  >
                    Add a password*
                  </div>
                </div>
                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}
              </div>
            </div>
          </div>
          <div className="sgn-container-3">
            <div className="inner-sgn-container-3">
              <div className="w-sgn-c-3" style={{ marginTop: "60px" }}>
                <button
                  className="button-33"
                  onClick={() => navigate("/sign-up")}
                >
                  P R E V I O U S
                </button>
                <button className="button-33" onClick={handleSubmit}>
                  N E X T
                </button>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default SignInPageSecond;
