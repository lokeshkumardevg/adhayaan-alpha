import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import "./NeedHelp.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
function NeedHelp() {
  const [resetMethod1, setResetMethod1] = useState("email");
  const [resetMethod2, setResetMethod2] = useState("sms");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, []);
  return (
    <Layout>
      <div className="parentneedhelp" onClick={()=>dispatch(hidenav())}>
        <div className="needhelp">
          <div className="Apps">
            <h1>Forgot Email/Password</h1>
            <form className="form" style={{ paddingTop: "30px" }}>
              <fieldset>
                <legend>How would you like to reset your password?</legend>
                <label>
                  <input
                    type="radio"
                    name="reset_method1"
                    value="email"
                    checked={resetMethod1 === "email"}
                    onChange={() => setResetMethod1("email")}
                  />
                  Email
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="reset_method1"
                    value="sms"
                    checked={resetMethod1 === "sms"}
                    onChange={() => setResetMethod1("sms")}
                  />
                  Text Message (SMS)
                </label>
              </fieldset>
              <p className="need-help-p">
                We will send you an email with instructions on how to reset your
                password.
              </p>

              <p>I can't remember my email address or phone number.</p>
            </form>

            <div
              className="inner-first"
              style={{ zIndex: "1", marginTop: "30px" }}
            >
              <input type="email" onChange={(e) => setEmail(e.target.value)} />
              <div
                className={email.length === 0 ? "inner" : "inner fix"}
                style={{ padding: "12px" }}
              >
                Email
              </div>
            </div>

            <button className="needhelpbutton">Email</button>
          </div>

          <div className="Apps-one">
            <h1>Forgot Email/Password</h1>
            <form style={{ paddingTop: "30px" }}>
              <fieldset>
                <legend>How would you like to reset your password?</legend>
                <label>
                  <input
                    type="radio"
                    name="reset_method2"
                    value="email"
                    checked={resetMethod2 === "email"}
                    onChange={() => setResetMethod2("email")}
                  />
                  Email
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="reset_method2"
                    value="sms"
                    checked={resetMethod2 === "sms"}
                    onChange={() => setResetMethod2("sms")}
                  />
                  Text Message (SMS)
                </label>
              </fieldset>
              <p className="need-help-p">
                We will text you a verification code to reset your password.
                Message and data rates may apply.
              </p>

              <p>I can't remember my email address or phone number.</p>

              <div className="inner-first" style={{ zIndex: "1" }}>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className={email.length === 0 ? "inner" : "inner fix"}
                  style={{ padding: "12px" }}
                >
                  Phone Number
                </div>
              </div>
            </form>
            <button className="needhelpbuttonphone">Phone</button>
          </div>


        </div>
      </div>
    </Layout>
  );
}

export default NeedHelp;
