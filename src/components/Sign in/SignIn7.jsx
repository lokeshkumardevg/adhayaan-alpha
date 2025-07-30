import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { hidenav } from "../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";
import "./Style2.css";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import { decrement } from "../store/slices/navSlice";

const SignIn7 = () => {
  const [collageName, setCollageName] = useState(
    localStorage.getItem("collageName") || ""
  );
  const [universityName, setUniversityName] = useState(
    localStorage.getItem("universityName") || ""
  );
  const [enrolmentNo, setEnrolmentNo] = useState(
    localStorage.getItem("enrolmentNo") || ""
  );
  const [address, setAddress] = useState(localStorage.getItem("address") || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hidenav());
    window.scrollTo(0, 0);
  }, []);

  // Save each input field's value to local storage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
  };

  // Save form data to local storage
  const handleSave = () => {
    saveToLocalStorage("collageName", collageName);
    saveToLocalStorage("universityName", universityName);
    saveToLocalStorage("enrolmentNo", enrolmentNo);
    saveToLocalStorage("address", address);
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  return (
    <Layout>
      <div className="div-six-container" onClick={handlemenu2}>
        <div className="inner-six-container">
          <div className="w-six-container">
            <div className="for-heading">
              <h3>Personal information for future correspondence</h3>
            </div>
            <div className="sign-in-wrap-container">
              <div className="sign-in-left">
                <div className="div-f">
                  <input
                    type="text"
                    value={collageName}
                    onChange={(e) => setCollageName(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      collageName.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    College Name*
                  </div>
                </div>

                <div className="div-f">
                  <input
                    type="text"
                    value={universityName}
                    onChange={(e) => setUniversityName(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      universityName.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    University Name*
                  </div>
                </div>
              </div>

              <div className="sign-in-right">
                <div className="div-f">
                  <input
                    type="text"
                    value={enrolmentNo}
                    onChange={(e) => setEnrolmentNo(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      enrolmentNo.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Student enrolment no*
                  </div>
                </div>

                <div className="div-f">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ zIndex: "1" }}
                  />
                  <div
                    className={
                      address.length === 0 ? "labelline" : "labelline fix"
                    }
                    style={{color:'#fff'}}
                  >
                    Address*
                  </div>
                </div>
              </div>
            </div>
            <div
              className="for-button-container-4 three pn-btn"
              style={{ padding: "20px" }}
            >
              <button
                onClick={() => navigate("/personal-information")}
                style={{ color: "#630000", background: "#f7e5e5" }}
              >
                P R E V I O U S
              </button>
              <button
                onClick={() => {
                  handleSave();
                  navigate("/confirmation");
                }}
                style={{ color: "#630000", background: "#f7e5e5" }}
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

export default SignIn7;
