import { useEffect, useState } from "react";
import React from "react";
import Layout from "../Layout/Layout";
import CryptoJS from "crypto-js";
import AffordabilityWidget from "../AffordabilityWidget/AffordabilityWidget";

const GiftConfirm = () => {
  const [buyerRecipientEmail, setBuyerRecipientEmail] = useState(
    localStorage.getItem("recipient_email") || ""
  );
  const [finalAmount, setFinalAmount] = useState();
  const [courseFee, setCourseFee] = useState(
    localStorage.getItem("courseFees")
  );
  const [showFinalPrice, setShowFinalPrice] = useState(false);
  const [name, setFirstname] = useState(localStorage.getItem("name"));
  const [giftamount, setGIftAmount] = useState(
    localStorage.getItem("giftamount")
  );
  const apiKey = process.env.REACT_APP_API_URL;
  const generateTxnId = () => {
    return "TXN" + Math.floor(Math.random() * 1000000);
  };

  const generateHash = (data) => {
    const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|||||||||||${data.salt}`;
    return CryptoJS.SHA512(hashString).toString();
  };
  const tnxId = generateTxnId();

  const handlePayment = (e) => {
    e.preventDefault();
    const key = "symA4P";
    const salt = "B3XI6Oy0OPA3HxAUShiV6CdiyXd90UQG";
    const txnid = generateTxnId();
    const amount = giftamount;
    const productinfo = "Course Payment";
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const hash = generateHash({
      key,
      txnid,
      amount,
      productinfo,
      firstname: name,
      email,
      salt,
    });

    const form = document.createElement("form");
    form.method = "post";
    form.action = "https://test.payu.in/_payment";
    const fields = {
      key,
      txnid,
      amount,
      productinfo,
      firstname: name,
      email,
      phone,
      hash,
      // surl: "https://aadhyayan.aboqindia.com/admin/index.php/api/giftpayuapi",
      surl: `${apiKey}admin/index.php/api/giftpayuapi`,
      furl: `${apiKey}admin/index.php/api/giftpayuapi`,
      // furl: "https://aadhyayan.aboqindia.com/admin/index.php/api/giftpayuapi",
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

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout>
      <div className="gift-confirm">
        <div className="inner-gift-confirm">
          <div className="w-inner-gift-container">
            <p>Please confirm the delivery email.</p>

            <div className="gift-row">
              <div className="gift-row-container">
                <div className="gift-entry-area">
                  <input
                    type="text"
                    value={buyerRecipientEmail}
                    onChange={(e) => setBuyerRecipientEmail(e.target.value)}
                  />
                  <div
                    className={
                      buyerRecipientEmail.length === 0
                        ? "gift-labelline"
                        : "gift-labelline stick"
                    }
                  >
                    Recipient email
                  </div>
                </div>
              </div>
            </div>
            <div className="gift-row gift-row-1" style={{ marginTop: "60px" }}>
              <button onClick={handlePayment}>Confirm</button>
            </div>
            <div className="row">
              <AffordabilityWidget transactionid={tnxId} amount={giftamount} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GiftConfirm;
