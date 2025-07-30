import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";
import Layout from "../Layout/Layout";

import AffordabilityWidget from "../AffordabilityWidget/AffordabilityWidget";
import CryptoJS from "crypto-js";
import axios from "axios";
import Loder from "../Loder-page/Loder";
import Loding from "../Loder/Loding";

const UserDetail = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  //   const [courseName2, setCourseName2] = useState(
  //     localStorage.getItem("course_name2") || ""
  //   );
  //   const [courseCategory2, setCourseCategory2] = useState(
  //     localStorage.getItem("course_type_name2") || ""
  //   );
  //   const [courseMode, setCourseMode] = useState(
  //     localStorage.getItem("course_mode2") || ""
  //   );
  //   const [courseStream2, setCourseStream2] = useState(
  //     localStorage.getItem("course_stream2") || ""
  //   );
  //   const [courseFee2, setCourseFee2] = useState(
  //     localStorage.getItem("course_fees2") || ""
  //   );
  const [courseCategory, setCourseCategory] = useState("");
  const [courseStream, setCourseStream] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [universityname, setUniversityName] = useState("");
  const [student_enrolment_no, setStudentEnrolmentNo] = useState("");
  const [address, setAddress] = useState("");
  const [courseFee, setCourseFee] = useState("");
  // const [usedcode, setCouponCode] = useState("AMP0051");
  const [usedcode, setCouponCode] = useState("");
  const [finalAmount, setFinalAmount] = useState();
  const [errorShow, setErrorShow] = useState(false);
  const [user_id, setUserId] = useState(localStorage.getItem("userId"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const [showFinalPrice, setShowFinalPrice] = useState(false);
  const [mobile, setMobile] = useState(localStorage.getItem("contactNo") || "");
  const [fatherName, setFatherName] = useState(
    localStorage.getItem("fatherName")
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [adharcard, setadharcard] = useState("kasndjf");
  const [gender, setgender] = useState();
  const [district, setdistrict] = useState();
  const [state, setstate] = useState();
  const [email, setEmial] = useState(localStorage.getItem("email") || "");
  const [course_id, setCourseId] = useState(localStorage.getItem("course_id2"));
  const [pincode, setpincode] = useState(32552);
  const courseId_user_id = course_id + "_" + user_id;
  // const validCouponCode = "AMP0003";
  const [loader, setLoader] = useState(false);
  const apiKey = process.env.REACT_APP_API_URL;
  const fetchValuesFromLocalStorage = () => {
    const savedCourseName = localStorage.getItem("courseName2");
    const savedCourseCategory = localStorage.getItem("courseCategory2");
    const savedCourseStream = localStorage.getItem("courseStream2");
    const savedSelectedMode = localStorage.getItem("selectedMode");
    const savedCollegeName = localStorage.getItem("collageName");
    const savedUniversityName = localStorage.getItem("universityName");
    const savedStudentEnrolmentNo = localStorage.getItem("enrolmentNo");
    const savedAddress = localStorage.getItem("address");
    const savedCourseFee = localStorage.getItem("courseFee2");
    setCourseName(savedCourseName);
    setCourseCategory(savedCourseCategory);
    setCourseStream(savedCourseStream);
    setSelectedMode(savedSelectedMode);
    setAddress(savedAddress);
    setCollegeName(savedCollegeName);
    setUniversityName(savedUniversityName);
    setStudentEnrolmentNo(savedStudentEnrolmentNo);
    setCourseFee(savedCourseFee);
  };

  const generateTxnId = () => {
    return "TXN" + Math.floor(Math.random() * 1000000);
  };

  const generateHash = (data) => {
    const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|||||||||||${data.salt}`;
    // const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|${data.address1}||||||${data.salt}`;
    return CryptoJS.SHA512(hashString).toString();
  };

  const handlePayment = (e) => {
    // e.preventDefault();
    const key = "symA4P";
    const salt = "B3XI6Oy0OPA3HxAUShiV6CdiyXd90UQG";
    const txnid = generateTxnId();
    const amount = showFinalPrice ? finalAmount : courseFee;
    const productinfo = courseId_user_id;
    // const productinfo = 'isad';
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    // const courseid = 3434
    // const address1 = localStorage.getItem("userId");
    const hash = generateHash({
      key,
      txnid,
      amount,
      productinfo,
      firstname: name,
      email,
      phone,
      // address1,
      salt,
    });

    const form = document.createElement("form");
    form.method = "post";
    form.action = "https://test.payu.in/_payment"; // Adjust this URL if necessary

    const fields = {
      key,
      txnid,
      amount,
      productinfo,
      firstname: name,
      email,
      phone,
      // address1,
      hash,
      // surl: "https://aadhyayan.aboqindia.com/admin/index.php/api/otherpayuapi",
      surl: `${apiKey}admin/index.php/api/otherpayuapi`,
      furl: `${apiKey}admin/index.php/api/otherpayuapi`,
      // furl: "https://aadhyayan.aboqindia.com/admin/index.php/api/otherpayuapi",
    };

    for (const key in fields) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  const handleCouponCode = async (e) => {
    // setCouponCode(e.target.value);
    e.preventDefault();
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/check_coupon",
        `${apiKey}admin/index.php/Api/check_coupon`,
        { code: usedcode, amount: courseFee }
      );
      if (response.data.status === "200") {
        setFinalAmount(response.data.row.pay_amount);
        localStorage.setItem("finalamount", finalAmount);
        setShowFinalPrice(true);
        setErrorShow(false);
      } else {
        setErrorShow(true);
        setErrorMessage(response.data.msg);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/smsupdate/",
        `${apiKey}admin/index.php/Api/smsupdate/`,
        {
          name,
          fatherName,
          mobile,
          user_id,
          usedcode,
          address,
          adharcard,
          gender,
          district,
          state,
          student_enrolment_no,
          collegename,
          universityname,
          email,
          pincode,
        }
      );
      if (res.data) {
        alert("Data updated");

        setLoader(true);

        setTimeout(() => {
          setLoader(false);
          // if (parseFloat(finalAmount) > 0) {
          //   handlePayment();
          // }else{
          //   navigate('/')
          // }
          if (finalAmount <= 0) {
            navigate("/"); // Redirect to home page if finalAmount is 0 or falsy
          } else {
            handlePayment(); // Proceed to payment if finalAmount is greater than 0
          }
        }, 1000);
        console.log(res.data);
        console.log(res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error gracefully, show error message to user or retry submission
    }
  };

  const handleSubmitAgain = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/purchase_course",
        `${apiKey}admin/index.php/Api/purchase_course`,
        { course_id, code: usedcode, amount: finalAmount, user_id }
      );
      if (response.status === "200") {
        alert(response.data.msg);
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchValuesFromLocalStorage();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loader ? (
        <Loding />
      ) : (
        <Layout>
          {console.log(courseName, courseCategory, courseStream, selectedMode)}
          <div className="user-details-container">
            <div className="inner-user-details-container">
              <div className="w-user-details">
                <div className="row-1">
                  <h2>Personal Information</h2>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE NAME</p>
                  <div className="row-3">
                    <p>{courseName}</p>
                    {console.log(courseId_user_id)}
                  </div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE CATEGORY</p>
                  <div className="row-3">
                    {/* {courseCategory2.length > 0 ? (
                      <p>{courseCategory2}</p>
                    ) : (
                      <p>{courseCategory}</p>
                    )} */}
                    <p>{courseCategory}</p>
                  </div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE STREAM</p>
                  <div className="row-3">
                    {/* {courseStream2.length > 0 ? (
                      <p>{courseStream2}</p>
                    ) : (
                      <p>{courseStream}</p>
                    )} */}
                    <p>{courseStream}</p>
                  </div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE MODE</p>
                  <div className="row-3">
                    {/* {courseMode.length > 0 ? (
                      <p>{courseMode === "Y" ? "Yearly" : "Semester"}</p>
                    ) : (
                      <p>{selectedMode === "Y" ? "Yearly" : "Semester"}</p>
                    )} */}
                    <p>{selectedMode === "Y" ? "Yearly" : "Semester"}</p>
                  </div>
                </div>

                <div className="row-1 row1-1">
                  <p className="row-p">COURSE FEE'S</p>
                  <div className="row-3">
                    {/* {courseFee2.length > 0 ? (
                      <p>&#8377; {courseFee2}</p>
                    ) : (
                      <p>&#8377; {courseFee}</p>
                    )} */}
                    <p>&#8377; {courseFee}</p>
                  </div>
                </div>

                <div className="row-1 row-6">
                  <p>COUPON CODE</p>
                  <div className="inner-row-wrap">
                    <input
                      type="text"
                      value={usedcode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button
                      onClick={handleCouponCode}
                      style={{ cursor: "pointer" }}
                    >
                      APPLY
                    </button>
                    {errorShow && (
                      // <p style={{ color: "red" }}>Invalid coupon code!</p>
                      <p style={{ color: "red", width: "400px" }}>
                        {errorMessage}
                      </p>
                    )}
                  </div>
                </div>
                {console.log("final amout ===>", finalAmount)}
                {console.log("=====>", errorMessage)}
                {finalAmount && (
                  <>
                    <div className="row-1 row-4">
                      <p>COURSE FEE'S</p>
                      {/* {courseFee2 ? (
                        <p>&#8377; {courseFee2}</p>
                      ) : (
                        <p>&#8377; {courseFee}</p>
                      )} */}
                      <p>&#8377; {courseFee}</p>
                    </div>
                    <div className="row-1 row-4">
                      <p>COUPON DISCOUNT</p>
                      <p>-20%</p>
                    </div>
                    <div className="row-1 row-4">
                      <p>TOTAL PAYABLE AMOUNT</p>
                      <p>
                        &#8377;{" "}
                        {finalAmount || localStorage.getItem("finalAmount")}
                      </p>
                    </div>
                  </>
                )}
                <div className="row row-7">
                  {/* <button onClick={handleSubmit}>PROCEED </button> */}
                  {finalAmount !== undefined && finalAmount <= 0 ? (
                    <>
                      <button onClick={handleSubmitAgain}>SUBMIT</button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button onClick={handleSubmit}>PROCEED </button>
                    </>
                  )}
                </div>

                <div className="row">
                  {/* {courseFee2 ? (
                    <AffordabilityWidget
                      transactionid="symA4P"
                      amount={showFinalPrice ? finalAmount : courseFee2}
                    />
                  ) : (
                    
                  )} */}
                  <AffordabilityWidget
                    transactionid="symA4P"
                    amount={showFinalPrice ? finalAmount : courseFee}
                  />
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default UserDetail;
