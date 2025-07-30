import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDetails.css";
import Layout from "../Layout/Layout";
import AffordabilityWidget from "../AffordabilityWidget/AffordabilityWidget";
import CryptoJS from "crypto-js";
import axios from "axios";
import Loding from "../Loder/Loding";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_URL;

  const [courseName, setCourseName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseStream, setCourseStream] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [universityname, setUniversityName] = useState("");
  const [student_enrolment_no, setStudentEnrolmentNo] = useState("");
  const [address, setAddress] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [usedcode, setCouponCode] = useState("");
  const [finalAmount, setFinalAmount] = useState();
  const [errorShow, setErrorShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const [courseName2] = useState(localStorage.getItem("course_name2") || "");
  const [courseCategory2] = useState(localStorage.getItem("course_type_name2") || "");
  const [courseStream2] = useState(localStorage.getItem("course_stream2") || "");
  const [courseMode] = useState(localStorage.getItem("course_mode2") || "");
  const [courseFee2] = useState(localStorage.getItem("course_fees2") || "");

  const [user_id] = useState(localStorage.getItem("userId"));
  const [name] = useState(localStorage.getItem("name"));
  const [mobile] = useState(localStorage.getItem("contactNo") || "");
  const [fatherName] = useState(localStorage.getItem("fatherName"));
  const [email] = useState(localStorage.getItem("email") || "");
  const [course_id] = useState(localStorage.getItem("course_id"));
  
  const [adharcard] = useState("kasndjf");
  const [gender, setgender] = useState();
  const [district, setdistrict] = useState();
  const [state, setstate] = useState();
  const [pincode] = useState(32552);

  const [showFinalPrice, setShowFinalPrice] = useState(false);

  const fetchValuesFromLocalStorage = () => {
    setCourseName(localStorage.getItem("courseName"));
    setCourseCategory(localStorage.getItem("courseCategory"));
    setCourseStream(localStorage.getItem("courseStream"));
    setSelectedMode(localStorage.getItem("selectedMode"));
    setAddress(localStorage.getItem("address"));
    setCollegeName(localStorage.getItem("collageName"));
    setUniversityName(localStorage.getItem("universityName"));
    setStudentEnrolmentNo(localStorage.getItem("enrolmentNo"));
    setCourseFee(localStorage.getItem("courseFee"));
  };

  const generateTxnId = () => "TXN" + Math.floor(Math.random() * 1000000);

  const generateHash = (data) => {
    const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|||||||||||${data.salt}`;
    return CryptoJS.SHA512(hashString).toString();
  };

  const handlePayment = () => {
    const key = "symA4P";
    const salt = "B3XI6Oy0OPA3HxAUShiV6CdiyXd90UQG";
    const txnid = generateTxnId();
    const amount = showFinalPrice ? finalAmount : courseFee;
    const productinfo = `${course_id}_${user_id}`;

    const hash = generateHash({ key, txnid, amount, productinfo, firstname: name, email, salt });

    const form = document.createElement("form");
    form.method = "post";
    form.action = "https://test.payu.in/_payment";

    const fields = {
      key, txnid, amount, productinfo,
      firstname: name, email,
      phone: mobile,
      hash,
      surl: `${apiKey}admin/index.php/api/payuapi`,
      furl: `${apiKey}admin/index.php/api/payuapi`,
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
    e.preventDefault();
    try {
      const response = await axios.post(`${apiKey}admin/index.php/Api/check_coupon`, {
        code: usedcode,
        amount: courseFee
      });
      if (response.data.status === "200") {
        setFinalAmount(response.data.row.pay_amount);
        setShowFinalPrice(true);
        setErrorShow(false);
      } else {
        setErrorShow(true);
        setErrorMessage(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiKey}admin/index.php/Api/smsupdate/`, {
        name, fatherName, mobile, user_id, usedcode, address, adharcard, gender,
        district, state, student_enrolment_no, collegename, universityname, email, pincode
      });
      alert("Data updated");
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        finalAmount > 0 ? handlePayment() : navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
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
          <div className="user-details-container" onClick={handlemenu2}>
            <div className="inner-user-details-container">
              <div className="w-user-details">
                <div className="row-1"><h2>Personal Information</h2></div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE NAME</p>
                  <div className="row-3"><p>{courseName2 || courseName}</p></div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE CATEGORY</p>
                  <div className="row-3"><p>{courseCategory2 || courseCategory}</p></div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE STREAM</p>
                  <div className="row-3"><p>{courseStream2 || courseStream}</p></div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE MODE</p>
                  <div className="row-3">
                    <p>{(courseMode || selectedMode) === "Y" ? "Yearly" : "Semester"}</p>
                  </div>
                </div>
                <div className="row-1 row1-1">
                  <p className="row-p">COURSE FEE'S</p>
                  <div className="row-3"><p>&#8377; {courseFee2 || courseFee}</p></div>
                </div>
                <div className="row-1 row-6">
                  <p>COUPON CODE</p>
                  <div className="inner-row-wrap">
                    <input type="text" value={usedcode} onChange={(e) => setCouponCode(e.target.value)} />
                    <button onClick={handleCouponCode}>APPLY</button>
                    {errorShow && <p style={{ color: "red" }}>{errorMessage}</p>}
                  </div>
                </div>
                {finalAmount && (
                  <>
                    <div className="row-1 row-4"><p>COURSE FEE'S</p><p>&#8377; {courseFee2 || courseFee}</p></div>
                    <div className="row-1 row-4"><p>COUPON DISCOUNT</p><p>-20%</p></div>
                    <div className="row-1 row-4"><p>TOTAL PAYABLE AMOUNT</p><p>&#8377; {finalAmount}</p></div>
                  </>
                )}
                <div className="row row-7">
                  <button onClick={handleSubmit}>PROCEED</button>
                </div>
                <div className="row">
                  <AffordabilityWidget
                    transactionid="symA4P"
                    amount={showFinalPrice ? finalAmount : (courseFee2 || courseFee)}
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

export default UserDetails;
