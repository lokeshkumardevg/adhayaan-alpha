import React, { useState } from "react";
import Layout from "../Layout/Layout";
import "./Sign5.css";
import { useNavigate } from "react-router-dom";

const Practice = () => {
  const [streamValue, setStreamValue] = useState("");
  const [streamShow, setStreamShow] = useState(true);
  const [show, setShow] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [streamOptionsVisible, setStreamOptionsVisible] = useState(false); // Initially set to false
  const navigate = useNavigate();

  const handleStreamSelect = (stream) => {
    setStreamValue(stream);
    setStreamShow(false); // Hide the stream options after selection
    setStreamOptionsVisible(false); // Also hide the stream options when a selection is made
  };

  const toggleStreamOptions = () => {
    setStreamOptionsVisible(!streamOptionsVisible);
  };

  return (
    <Layout>
      <div className="sign-in-page-5">
        <div className="inner-sign-in-page-5">
          <div className="w-sign-in-page5">
            <div className="h-w-s-page-5">
              <h3>Choose the course that’s right for you</h3>
            </div>
            <div className="course-container-1 course-container-2">
              <div className="course-input course-input-2">
                <input
                  type="text"
                  onChange={(e) => setCourseCategory(e.target.value)}
                  onClick={() => setShow(!show)}
                  value={inputValue}
                />

                <div
                  className={
                    courseCategory.length === 0 && inputValue.length === 0
                      ? "label-container"
                      : "label-container fix-3"
                  }
                >
                  Course Category
                </div>
                <i
                  class="fa-solid fa-caret-down"
                  style={{ cursor: "pointer", zIndex: "1" }}
                  onClick={() => setShow(!show)}
                ></i>
              </div>
              <div className={show ? "list-hide" : "d-r-p-show"}>
                <p onClick={() => setInputValue("BACHELOR")}>BACHELOR'S</p>
                <p onClick={() => setInputValue("MASTER")}>MASTER'S</p>
                <p onClick={() => setInputValue("DIPLOMA")}>DIPLOMA</p>
                <p onClick={() => setInputValue("CERTIFICATE")}>CERTIFICATE</p>
                <p onClick={() => setInputValue("PG DIPLOMA")}>PG DIPLOMA</p>
                <p onClick={() => setInputValue("EXECUTIVE")}>EXECUTIVE</p>
              </div>
            </div>
            <div className="course-container-1 course-container-2">
              <div className="course-input course-input-2">
                <input
                  type="text"
                  onChange={(e) => setStreamValue(e.target.value)}
                  onClick={toggleStreamOptions}
                  value={streamValue}
                />

                <div
                  className={
                    streamValue.length === 0
                      ? "label-container"
                      : "label-container fix-3"
                  }
                >
                  Stream
                </div>
                <i
                  className="fa-solid fa-caret-down"
                  style={{ cursor: "pointer", zIndex: "1" }}
                  onClick={toggleStreamOptions}
                ></i>
              </div>

              {streamOptionsVisible && (
                <div className="d-r-p-show" style={{ marginBottom: "30px" }}>
                  {/* Stream options */}
                  <p onClick={() => handleStreamSelect("Arts")}>Arts</p>
                  <p onClick={() => handleStreamSelect("Humanities")}>
                    Humanities
                  </p>
                  <p onClick={() => handleStreamSelect("Engineering")}>
                    Engineering
                  </p>
                  {/* Add other stream options similarly */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Practice;
