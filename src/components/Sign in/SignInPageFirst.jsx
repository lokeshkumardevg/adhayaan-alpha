import React, { useEffect } from "react";
import "./Sign.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
const SignInPageFirst = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(hidenav());
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <div className="sign-in-container" onClick={()=>dispatch(hidenav())}>
        <div className="inner-sign-in-container">
          <div className="w-sign-in-container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              alt=""
            />
            <h2>Finish setting up your account</h2>
            <p className="mt">
              Aadhyayan is personalised for you. Create a password 
              to study on any device at any time.
            </p>

            {/* <button
                class="animated-button"
                onClick={() => navigate("/sign-in-2")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span class="text"> N E X T</span>
                <span class="circle"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="arr-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button> */}
            <button onClick={() => navigate("/create-password")}>NEXT</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPageFirst;
