import React, { useEffect } from "react";
import "./Success.css";
import Layout from "../Layout/Layout";
import { hidenav } from "../store/slices/sideNavSlice";
import { useNavigate } from "react-router-dom";
const SuccessfullyPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);
    navigate(hidenav())
  }, []);
  
  return (
    <Layout>
      <div className="success-container">
        <div className="inner-success-coantiner">
          <div className="width-su-container">
            <p>
              Your form is submitted successfully, our team will contact you
              with in <span style={{fontWeight:'bold'}} className="sp"> 48 hours</span> for submission of your partnership fee. For more
              enquiry you can email at <span style={{fontWeight:'bold'}} className="sp"> aadhyayan@aadhyayan.com</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessfullyPage;
