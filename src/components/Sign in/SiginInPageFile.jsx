import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import './SignInPageStyle.css'
const SiginInPageFile = () => {
    const [courseCategory, setCourseCategory] = useState("");
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState("");
    return (
        <Layout>
            <div className="sigin-page-container-div">
                <div className="inner-signin-page-container-div">
                    <div className="width-page">

                        <h2>Choose the course that’s right for you</h2>
                        <div className="input-sigin-container">
                            <div className="input-s-container-left">
                                <div className="course-input-page-container">
                                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                    <div
                                        className={
                                            courseCategory.length === 0 && inputValue.length === 0
                                                ? "label-container-1"
                                                : "label-container-1 fix-3"
                                        }
                                    >
                                        Course Category

                                    </div>
                                    <i class="fa-solid fa-sort-down"></i>
                                    <div className={show ? "list-hide" : "d-r-p-show"}>
                                        <p onClick={() => setInputValue("BACHELOR")}>BACHELOR'S</p>
                                        <p onClick={() => setInputValue("MASTER")}>MASTER'S</p>
                                        <p onClick={() => setInputValue("DIPLOMA")}>DIPLOMA</p>
                                        <p onClick={() => setInputValue("CERTIFICATE")}>CERTIFICATE</p>
                                        <p onClick={() => setInputValue("PG DIPLOMA")}>PG DIPLOMA</p>
                                        <p onClick={() => setInputValue("EXECUTIVE")}>EXECUTIVE</p>
                                    </div>
                                </div>
                                <div className="course-input-page-container"></div>
                                <div className="course-input-page-container"></div>
                            </div>
                            <div className="input-s-container-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SiginInPageFile
