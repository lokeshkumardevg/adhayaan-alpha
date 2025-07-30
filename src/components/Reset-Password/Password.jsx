import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./password.css";
import axios from "axios";
const Password = () => {
  const [user_id, setUserId] = useState(localStorage.getItem("userId"));
  const [email, setBuyerName] = useState("");
  const [new_password, setnew_password] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const apiKey = process.env.REACT_APP_API_URL;
  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/forget_password",
        `${apiKey}admin/index.php/Api/forget_password`,
        { email }
      );
      if (response.status === "200") {
        alert(response.data.msg);
        // localStorage.setItem('savedPassword',new_password)
        // localStorage.setItem('savedPasswordTrue',true)
      } else {
        alert(response.data.msg);
        setErrorMessage(response.data.msg);
        // localStorage.setItem('savedPassword',new_password)
        // localStorage.setItem('savedPasswordTrue',true)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="reset-password-container">
        <div className="inner-reset-password-conatiner">
          <div className="width-reset-password-conatiner">
            <div className="grievance">
              <div className="gift-row" style={{ marginTop: "-100px" }}>
                <div className="gift-row-container">
                  <div className="gift-entry-area">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setBuyerName(e.target.value)}
                    />
                    <div
                      className={
                        email.length === 0
                          ? "gift-labelline"
                          : "gift-labelline stick"
                      }
                    >
                      Email
                      {console.log("yo ===", user_id)}
                    </div>
                  </div>
                  <p style={{ color: "red" }}> {errorMessage}</p>

                  <button className="r-password" onClick={handleResetPassword}>
                    Forget Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Password;
