import React, { useEffect } from "react";
import "./ThankYou.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
const ThankYouPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard/user");
    }, 2000);
  });
  return (
    <Layout>
      <div className="thank-you-container">
        <div className="inner-thank-u-container">
          {/* <h2>Thank you for registration</h2> */}
          <div className="width">
            <h2>Thank you for registration</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
