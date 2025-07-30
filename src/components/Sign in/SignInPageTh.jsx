import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import "./Sign.css";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
const SignInPageTh = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hidenav());
  }, []);
  return (
    <Layout>
      <div className="sigin-in-container-4 or s-i-c-4">
        <div className="inner-sign-in-container-4">
          <div className="w-sigin-in-conatiner-4 w-s-i-c-4">
            <div className="for-heading-container-4 para-size-3">
              <h3 className="inner-h">Great, now let us verify your email </h3>
              <p className="inner-p-2">
                Click the link we sent to your gmail to verify
              </p>

              <p className="inner-p">
                Verifying your email will improve account security and help you
                receive important Aadhyayan communications.
              </p>
            </div>
            <div className="for-button-container-4 three thre-two">
              <button
                onClick={() => navigate("/sign-in/user")}
                className="bt-div"
              >
                S K I P
              </button>
              <button
                onClick={() => navigate("/create-password")}
                className="bt-div"
              >
                P R E V I O U S
              </button>
              <button
                onClick={() => navigate("/sign-in/user")}
                className="bt-div"
              >
                N E X T
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInPageTh;
