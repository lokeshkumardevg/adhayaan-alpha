import React, { useRef, useState } from "react";
import "./Callback.css";
import image from "../Images/Call-Back (1).png";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
const Callback = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      toast.error("Error");
    } else {
      emailjs

        .sendForm("service_0jvdqv9", "template_prpv7wv", form.current, {
          publicKey: "QUuR1bbZRpjMyKGEt",
        })
        .then(
          () => {
            setName("");
            setEmail("");
            setPhone("");
            console.log("SUCCESS!");
            toast.success("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="call-back-contianer">
      <div
        className="inner-call-back-container"
        style={{ overflowX: "hidden" }}
        onClick={() => dispatch(decrement())}
      >
        <div
          className="cb-div"
          data-aos="fade-right"
          data-aos-duration="100"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <div className="cb-inner-div" style={{ marginTop: "20px" }}>
            <p>We are always ready</p>
            <h3>Request a call back</h3>
          </div>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="cb-inner-div-1">
              <div className="input-div">
                <p >Full name</p>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{border:'1px solid black'}}
                />
              </div>
              <div className="input-div-1">
                <div className="wrap">
                  <p>Mobile Number</p>
                  <input
                    type="text"
                    name="user_phone"
                    id=""
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{border:'1px solid black'}}
                  />
                </div>
                <div className="wrap">
                  <p>Email Address</p>
                  <input
                    type="email"
                    name="user_email"
                    id=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{border:'1px solid black'}}
                  />
                </div>
              </div>
            </div>
            <div className="cb-inner-div-2">
              <button className="cb-btn">Send Request</button>
            </div>
          </form>
        </div>
        <div className="cb-div-1">
          <img
            src={image}
            alt=""
            width={"60%"}
            data-aos="fade-left"
            data-aos-duration="100"
            data-aos-once="true"
            data-aos-delay="400"
          />
        </div>
      </div>
    </div>
  );
};

export default Callback;
