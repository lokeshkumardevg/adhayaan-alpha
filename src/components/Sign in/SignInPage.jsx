import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SignINPage.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInShowNav } from "../store/slices/isLogIn";
import { hidenav } from "../store/slices/sideNavSlice";
import Loder from "../Loder-page/Loder";

const SignInPage = () => {
  const [identifier, setIdentifier] = useState(localStorage.getItem("getStartedMobile") || "");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [backendError, setBackendError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = "http://localhost/";

  const isEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isMobile = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(value);
  };

  const handleSendOtp = async () => {
    if (!identifier.trim()) {
      setBackendError("Please enter mobile number or email.");
      return;
    }

    setLoading(true);
    setBackendError("");

    try {
      let response;
      if (isEmail(identifier)) {
        // Send OTP to email
        response = await axios.post(`${apiKey}admin/index.php/Api/send_email_to_sms`, {
          email: identifier,
        }, {
          headers: { 'Content-Type': 'application/json' }
        });
      } else if (isMobile(identifier)) {
        // Send OTP to mobile
        response = await axios.post(`${apiKey}admin/index.php/Api/send_otp`, {
          mobile: identifier,
        }, {
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        setBackendError("Please enter a valid mobile number or email.");
        return;
      }

      if (response.data && response.data.status === "200") {
        setIsOtpSent(true);
        setBackendError("OTP sent successfully.");
      } else {
        setBackendError(response.data.msg || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setBackendError("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setBackendError("Please enter the OTP.");
      return;
    }

    setLoading(true);
    setBackendError("");

    try {
      const response = await axios.post(`${apiKey}admin/index.php/Api/verify_otp`, {
        mobile: identifier,
        otp,
      }, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.data && response.data.status === "200") {
        const userData = response.data;
        localStorage.setItem("userId", userData.user_id);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("fatherName", userData.fatherName);
        localStorage.setItem("gender", userData.gender);
        localStorage.setItem("course_id", userData.course_id);
        localStorage.setItem("contactNo", userData.mobile);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("second_course_id", userData.second_course_id);
        localStorage.setItem("profile_image", userData.profileImage);
        localStorage.setItem("AdhyayanAuth", JSON.stringify({ mobile: identifier }));

        dispatch(logInShowNav());

        const courseId2 = localStorage.getItem("course_id2") || "";
        if (userData.course_id > 0) {
          navigate("/dashboard/user", { replace: true });
        } else if (courseId2) {
          navigate("/confirmation", { replace: true });
        } else {
          navigate("/choose-course", { replace: true });
        }
      } else {
        setBackendError(response.data.msg || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setBackendError("Error verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, [dispatch]);

  return (
    <Layout>
      <div className="signIn-Page-div" onClick={() => dispatch(hidenav())}>
        <div className="inner-signIn-Pge">
          <div className="box-sign-container">
            <h3>Sign In</h3>
            <div className="input-div-conateirn">
              <div className="inner-input-div">
                <input
                  type="text"
                  placeholder="Mobile Number or Email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  disabled={isOtpSent && identifier.trim() !== ""}
                  className="input-field"
                />
                {isOtpSent && (
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="input-field"
                  />
                )}
              </div>
              {backendError && <p className="error-message">{backendError}</p>}
              <div className="btn-input-div">
                {loading ? (
                  <Loder />
                ) : (
                  <button
                    onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
                    className="signIn-button"
                  >
                    {isOtpSent ? "Verify OTP" : "Send OTP"}
                  </button>
                )}
                <p
                  className="forgot-password"
                  onClick={() => navigate("/forget-passwrd")}
                >
                  Forgot Password?
                </p>
              </div>
              <p className="signup-text">
                New to Aadhyayan?{" "}
                <span
                  className="signup-link"
                  onClick={() => navigate("/sign-up")}
                >
                  Sign up now.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPage;
