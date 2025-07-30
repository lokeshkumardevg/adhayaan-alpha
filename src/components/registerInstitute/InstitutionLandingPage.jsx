import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./InstitutionLandingPage.css";

const InstitutionLandingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="institution-landing">
        <div className="landing-box">
          <h1>Register Your Institution for FREE!</h1>
          <p>
            Eligible types of institutions include:
            <br />
            <strong>
              University, College, ITI / Vocational Institute, Coaching Center, Tutor, Consultant, Other
            </strong>
          </p>
          <p>
            Scale your institution with confidence.
            <br />
            Become an incorporated institution with Aadhyayan’s expert guidance.
          </p>
          <button className="register-btn" onClick={() => navigate("/sign-in/user")}>
            Register Now
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default InstitutionLandingPage;
