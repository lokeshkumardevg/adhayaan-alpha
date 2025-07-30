import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Grievance.css";
const Grievance = () => {
  const [buyer_name, setBuyerName] = useState("");
  return (
    <Layout>
      <div className="grievance-container">
        <div className="inner-grievance">
          <div className="w-grievance">
            <h2>Grievance Redressal</h2>
            <p>
              If you are facing some problems with Aadhyayan and would like to
              either find out your rights, or get your problem fixed.
            </p>
            <h3>Register your complaint here.</h3>
            <p>
              Aadhyayan is the founding member of the Indian Edtech Consortium
              (IEC), which is a self-regulatory body. As a member of the IEC, we
              are committed to resolve grievances within 30 days from the date
              of receipt. This is the official page where you can share your
              queries, feedbacks, complaints, suggestions or any concerns that
              you may have for Aadhyayan and its learning programs.
            </p>
            <p>
              In case of any grievance, please fill the form and share your
              concern with us. Our dedicated team will respond to you within 2
              business days. At Aadhyayan, we strive to address and resolve your
              issues in the most seamless manner & shortest possible time. Every
              question that you have is very valuable to us. Hence, we request
              you to route all your concerns through this official portal
            </p>
            <h4>Grievance Officer :</h4>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              Mr. Leena Sharma
              <p style={{ fontWeight: "400" }}>,Sr Manager Finance</p>
            </span>

            <p>
              Please fill the form and share your concern regarding the product
              you have purchased.
            </p>
            <div className="grievance">
              <div className="gift-row">
                <div className="gift-row-container">
                  <div className="gift-entry-area">
                    <input
                      type="text"
                      value={buyer_name}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <div
                      className={
                        buyer_name.length === 0
                          ? "gift-labelline"
                          : "gift-labelline stick"
                      }
                    >
                      Buyer name
                    </div>
                  </div>
                  {/* {errors.buyer_name && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_name}
                      </p>
                    )} */}
                </div>
              </div>
              <div className="gift-row">
                <div className="gift-row-container">
                  <div className="gift-entry-area">
                    <input
                      type="text"
                      value={buyer_name}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <div
                      className={
                        buyer_name.length === 0
                          ? "gift-labelline"
                          : "gift-labelline stick"
                      }
                    >
                      Buyer name
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="grievance">
              <div className="gift-row">
                <div className="gift-row-container">
                  <div className="gift-entry-area">
                    <input
                      type="text"
                      value={buyer_name}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <div
                      className={
                        buyer_name.length === 0
                          ? "gift-labelline"
                          : "gift-labelline stick"
                      }
                    >
                      Buyer name
                    </div>
                  </div>
                  {/* {errors.buyer_name && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_name}
                      </p>
                    )} */}
                </div>
              </div>
              <div className="gift-row">
                <div className="gift-row-container">
                  <div className="gift-entry-area">
                    <input
                      type="text"
                      value={buyer_name}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <div
                      className={
                        buyer_name.length === 0
                          ? "gift-labelline"
                          : "gift-labelline stick"
                      }
                    >
                      Buyer name
                    </div>
                  </div>
                  {/* {errors.buyer_name && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_name}
                      </p>
                    )} */}
                </div>
              </div>
            </div>
            <div className="grievance" style={{ marginTop: "80px" }}>
              <textarea
                name=""
                id=""
                placeholder="Pls explain your concern (Max 500 words)*
"
              ></textarea>
            </div>
            <div className="grievance" style={{ marginTop: "20px" }}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Grievance;
