import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InstitutionSignInPage.css";
import Layout from "../../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInShowNav } from "../../store/slices/isLogIn";
import { hidenav } from "../../store/slices/sideNavSlice";
import Loder from "../../Loder-page/Loder";

const InstitutionSignInPage = () => {
  const [identifier, setIdentifier] = useState(localStorage.getItem("getStartedMobile") || "");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [backendError, setBackendError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [timer, setTimer] = useState(60);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = "http://localhost/";

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isMobile = (value) => /^[6-9]\d{9}$/.test(value);

  const startTimer = () => {
    setTimer(60);
    setShowResend(false);
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setShowResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOtp = async () => {
    if (!identifier.trim()) return setBackendError("Please enter mobile number or email.");

    setLoading(true);
    setBackendError("");

    try {
      let response;
      if (isEmail(identifier)) {
        response = await axios.post(`${apiKey}admin/index.php/Api/send_email_to_sms`, { email: identifier });
      } else if (isMobile(identifier)) {
        response = await axios.post(`${apiKey}admin/index.php/Api/send_otp`, { mobile: identifier });
      } else {
        return setBackendError("Please enter a valid mobile number or email.");
      }

      if (response.data?.status === "200") {
        setIsOtpSent(true);
        setBackendError("OTP sent successfully.");
        startTimer();
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
    if (!otp.trim()) return setBackendError("Please enter the OTP.");
    setLoading(true);
    setBackendError("");

    try {
      const response = await axios.post(`${apiKey}admin/index.php/Api/verify_otp`, { mobile: identifier, otp });

      if (response.data?.status === "200") {
        const userData = response.data;

        // 🟢 Save all user info
        localStorage.setItem("AdhyayanAuth", JSON.stringify({
          userId: userData.id,
          name: userData.name,
          username: userData.username,
          institution_type: userData.type,
          institution_type: userData.institution_type,
          email: userData.email,
          profileImage: userData.profileImage || "",
        }));

        dispatch(logInShowNav());
        navigate("/dashboardnew", { replace: true });
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
      <div className="institution-signin-container">
        <div className="institution-header">🎓 Aadhyayan for Institutions</div>

        <div className="signin-box">
          <h2>Institution Login</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Mobile Number or Email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              disabled={isOtpSent && identifier.trim() !== ""}
            />

            {isOtpSent && (
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            )}
          </div>

          {backendError && <p className="error-message">{backendError}</p>}

          {isOtpSent && !showResend && <p className="timer-text">Resend OTP in {timer} seconds</p>}
          {isOtpSent && showResend && (
            <p className="resend-text" onClick={handleSendOtp}>🔁 Resend OTP</p>
          )}

          <div className="actions">
            {loading ? <Loder /> : (
              <button onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}>
                {isOtpSent ? "Verify OTP" : "Send OTP"}
              </button>
            )}
          </div>

          <p className="note-text">
            Need help? <span onClick={() => navigate("/contact")}>Contact Support</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default InstitutionSignInPage;
