import React, { useEffect, useState } from "react";
import "./GiftForm.css";
import Layout from "../Layout/Layout";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loding from "../Loder/Loding";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
import { decrement } from "../store/slices/navSlice";

const GiftForm = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(true);
  const [buyer_name, setBuyerName] = useState("");
  const [buyer_email, setBuyerEmail] = useState("");
  const [buyer_mobile, setBuyerContact] = useState("");
  const [buyer_recpient_email, setRecipientEmail] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    buyer_name: "",
    buyer_email: "",
    buyer_mobile: "",
    buyer_recpient_email: "",
    acceptedTerms: "",
  });
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_URL;
  const handleSubmit = async () => {
    // Validate form fields
    const errorsCopy = { ...errors };
    let formValid = true;

    if (!buyer_name.trim()) {
      errorsCopy.buyer_name = "Buyer name is required*";
      formValid = false;
    } else {
      errorsCopy.buyer_name = "";
    }

    if (!buyer_email.trim()) {
      errorsCopy.buyer_email = "Buyer email is required*";
      formValid = false;
    } else if (!isValidEmail(buyer_email)) {
      errorsCopy.buyer_email = "Please enter a valid email address*";
      formValid = false;
    } else {
      errorsCopy.buyer_email = "";
    }

    if (!buyer_mobile.trim()) {
      errorsCopy.buyer_mobile = "Buyer contact number is required*";
      formValid = false;
    } else {
      errorsCopy.buyer_mobile = "";
    }

    if (!buyer_recpient_email.trim()) {
      errorsCopy.buyer_recpient_email = "Recipient email is required*";
      formValid = false;
    } else if (!isValidEmail(buyer_recpient_email)) {
      errorsCopy.buyer_recpient_email = "Please enter a valid email address*";
      formValid = false;
    } else {
      errorsCopy.buyer_recpient_email = "";
    }

    if (!acceptedTerms) {
      errorsCopy.acceptedTerms = "Please accept the terms and conditions*";
      formValid = false;
    } else {
      errorsCopy.acceptedTerms = "";
    }

    setErrors(errorsCopy);

    if (!formValid) {
      return;
    }

    // Prepare the data to send
    const data = {
      amount: price ? 2500 : 1500,
      buyer_name,
      buyer_email,
      buyer_mobile,
      buyer_recpient_email,
    };

    try {
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/purchase_gift",
        `${apiKey}admin/index.php/Api/purchase_gift`,
        data
      );

      if (response.status === 200) {
        alert("Gift purchased successfully!");

        localStorage.setItem("recipient_email", buyer_recpient_email);
        localStorage.setItem("giftamount", data.amount);

        navigate("/gift-conform");
        setBuyerName("");
        setBuyerEmail("");
        setBuyerContact("");
        setRecipientEmail("");
        setAcceptedTerms(false);
      } else {
        alert("Failed to purchase gift. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
    }
  };
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, []);

  const isValidEmail = (email) => {
    // Basic email validation using regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      {loader ? (
        <Loding />
      ) : (
        <Layout>
          <div className="gift-form-container"onClick={handlemenu2}>
            <div className="inner-gift-form-container">
              <div className="w-g-f-container">
                <input
                  type="radio"
                  name="partnerType"
                  value="Bachelor/Master"
                  checked={price && true}
                  onClick={() => setPrice(true)}
                />{" "}
                Bachelor/Master
                <input
                  type="radio"
                  name="partnerType"
                  value="Certificate/Diploma"
                  onClick={() => setPrice(false)}
                />{" "}
                Certificate/Diploma
                <div className="gift-row">
                  <div className="gift-row-container">
                    <div className="gift-entry-area">
                      <input
                        type="text"
                        readonly
                        value={price ? 2500 : 1500}
                        style={{
                          cursor: "no-drop",
                          border: "2px solid #630000",
                        }}
                        readOnly={true}
                      />
                      <div className="gift-labelline stick">Amount</div>
                    </div>
                  </div>
                </div>
                <div className="gift-row">
                  <div className="gift-row-container">
                    <div className="gift-entry-area">
                      <input
                        type="text"
                        value={buyer_name}
                        onChange={(e) => setBuyerName(e.target.value)}
                      />
                      <div
                        className={
                          buyer_name.length === 0
                            ? "gift-labelline"
                            : "gift-labelline stick"
                        }
                      >
                        Buyer name
                      </div>
                    </div>
                    {errors.buyer_name && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="gift-row">
                  <div className="gift-row-container">
                    <div className="gift-entry-area">
                      <input
                        type="text"
                        value={buyer_email}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                      />
                      <div
                        className={
                          buyer_email.length === 0
                            ? "gift-labelline"
                            : "gift-labelline stick"
                        }
                      >
                        Buyer email
                      </div>
                    </div>
                    {errors.buyer_email && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="gift-row">
                  <div className="gift-row-container">
                    <div className="gift-entry-area">
                      <input
                        type="text"
                        value={buyer_mobile}
                        onChange={(e) => setBuyerContact(e.target.value)}
                      />
                      <div
                        className={
                          buyer_mobile.length === 0
                            ? "gift-labelline"
                            : "gift-labelline stick"
                        }
                      >
                        Buyer contact
                      </div>
                    </div>
                    {errors.buyer_mobile && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_mobile}
                      </p>
                    )}
                  </div>
                </div>
                <div className="gift-row">
                  <div className="gift-row-container">
                    <div className="gift-entry-area">
                      <input
                        type="text"
                        value={buyer_recpient_email}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                      />
                      <div
                        className={
                          buyer_recpient_email.length === 0
                            ? "gift-labelline"
                            : "gift-labelline stick"
                        }
                      >
                        Recipient email
                      </div>
                    </div>
                    {errors.buyer_recpient_email && (
                      <p
                        className="error"
                        style={{ fontSize: "12px", color: "red" }}
                      >
                        {errors.buyer_recpient_email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="gift-row-1">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={() => setAcceptedTerms(!acceptedTerms)}
                    // style={{ marginTop: "64px" }}
                  />
                  <label htmlFor="" style={{ marginTop: "70px" }}>
                    I accept the{" "}
                    <Link
                      to={"/term-condition"}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      term & condition
                    </Link>{" "}
                    of the gift card
                  </label>
                </div>
                {errors.acceptedTerms && (
                  <p
                    className="error"
                    style={{ fontSize: "12px", color: "red" }}
                  >
                    {errors.acceptedTerms}
                  </p>
                )}
                <div className="gift-row gift-row-1">
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default GiftForm;
