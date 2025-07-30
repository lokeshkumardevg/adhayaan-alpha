import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
import { useAuth } from "../ContextApi/auth";

const SignInPageFo = () => {
  const [showBtn, setShowBtn] = useState(
    localStorage.getItem("AdhyayanAuth") || ""
  );
  const [course_id, setCourseId] = useState(
    localStorage.getItem("course_id") || ""
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hidenav());
    window.scrollTo(0, 0);
    // if (course_id > 0) {
    //   navigate("/dashboard/user");
    // } else {
    //   navigate("/choose-course");
    // }
  }, []);

  return (
    <Layout>
      <div className="sigin-in-container-4">
        <div className="inner-sign-in-container-4">
          <div className="w-sigin-in-conatiner-4 w-w-s-4">
            <div className="for-heading-container-4 line-height">
              <i class="fa-regular fa-circle-check"></i>
              <h3 className="style">Choose your Course. </h3>

              <div className="wape-content">
                <div className="div-class-name">
                  <i class="fa-solid fa-check"></i>
                  <p>No commitments, surrender anytime.</p>
                </div>
                <div className="div-class-name">
                  <i class="fa-solid fa-check"></i>
                  <p>Everything on Aadhyayan for one low price.</p>
                </div>
                <div className="div-class-name">
                  <i class="fa-solid fa-check"></i>
                  <p>No ads and no extra</p>
                </div>
              </div>
            </div>
            <div className="for-button-container-4 btn-sign-3 ss-4">
              {showBtn ? null : (
                <button onClick={() => navigate("")}>S K I P</button>
              )}
              {showBtn ? null : (
                <button onClick={() => navigate("/create-password")}>
                  P R E V I O U S
                </button>
              )}
              <button onClick={() => navigate("/select-course")}>
                N E X T
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPageFo;
