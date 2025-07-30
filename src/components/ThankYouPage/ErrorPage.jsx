import React from "react";
import Layout from "../Layout/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="thank-you-container">
        <div className="inner-thank-u-container">
          {/* <h2>Thank you for registration</h2> */}
          <div className="width">
            <h2>Payment faild please try again</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
