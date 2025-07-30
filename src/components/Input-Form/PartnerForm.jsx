import React, { useEffect, useState } from "react";
import "./partner-style.css";
import "./Style.css";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Patnerform = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [mobile, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGenderValue] = useState();
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [occupation, setOccupation] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  // const [socialMedia, setSocialMediaLink] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNumber] = useState("");
  const [isValidAccountNo, setIsValidAccountNo] = useState(true);
  const [ifscCode, setIfscCode] = useState("");
  const [isValidIfsc, setIsValidIfsc] = useState(true);
  const [accountName, setAccountName] = useState("");
  const [upiCode, setUpiCode] = useState("");
  const [isValidUpi, setIsValidUpi] = useState(true);
  const [cancelledCheque, setCheque] = useState("jnklnkla");
  const [addressProof, setAddressProof] = useState("naoaa");
  const [msg, setMsg] = useState("");
  const [partnerType, setPartnerShip] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [accountMessage, setAccountMessage] = useState(false);
  const [isNumericNameError, setIsNumericNameError] = useState(false);
  const [isNumericFatherError, setIsNumericFatherError] = useState(false);
  const [isNumericError, setIsNumericError] = useState(false);
  const [facebooksocialMedia, setFacebook] = useState("");
  const [socialMediaErrorMessage, setSocialMediaErrorMessage] = useState(false);
  const [instagramsocialMedia, setInstagram] = useState("");
  const [linkdinsocialMedia, setLinkdin] = useState("");
  const [youtubesocialMedia, setYoutube] = useState("");
  const navigate = useNavigate();
  const apiKey = process.env.REACT_APP_API_URL;
  // const selectFile = (e)=>{
  //   setAddressProof(e.target.files[0])

  // }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

    if (file && allowedTypes.includes(file.type)) {
      setAddressProof(file);
      setErrorMessage("");
    } else {
      setAddressProof(null);
      setErrorMessage("Only JPEG, PNG, or PDF files are allowed.");
    }
  };

  // Validation functions
  const isAlphabetic = (value) => /^[a-zA-Z\s]*$/.test(value);
  const isNumeric = (value) => /^\d+$/.test(value);

  const handleChangeFatherName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setFatherName(value);
      setMessage(false);
      setIsNumericFatherError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericFatherError(true);
    } else {
      setIsNumericFatherError(false);
    }
  };

  const handleChangeMotherName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setMotherName(value);
      setMessage(false);
      setIsNumericError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericError(true);
    } else {
      setIsNumericError(false);
    }
  };

  const handleChangeName = (e) => {
    const value = e.target.value;
    if (value.length <= 50) {
      setName(value);
      setMessage(false);
      setIsNumericNameError(false); // Reset numeric error state
    } else {
      setMessage(true);
    }

    // Check if value contains numeric characters
    if (/\d/.test(value)) {
      setIsNumericNameError(true);
    } else {
      setIsNumericNameError(false);
    }
  };

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(value);
    setIsValid(isValidEmail);
    // setMessage(false)
  };

  // Function to validate UPI code
  const validateUpiCode = (value) => {
    // Regular expression for UPI code validation
    const upiRegex = /^[a-zA-Z0-9_.-]+$/;
    return upiRegex.test(value);
  };

  const handleChangeUpiCode = (e) => {
    const value = e.target.value;
    setUpiCode(value);
    setIsValidUpi(validateUpiCode(value));
  };
  // Function to validate IFSC code
  const validateIfscCode = (value) => {
    // Regular expression for IFSC code validation
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return ifscRegex.test(value);
  };

  // Handler for IFSC code change
  const handleChangeIfscCode = (e) => {
    const value = e.target.value.toUpperCase(); // Convert to uppercase
    setIfscCode(value);
    setIsValidIfsc(validateIfscCode(value));
  };
  const validateAccountNumber = (accountNumber) => {
    const regex = /^[0-9]{8}$/; // Example: 8 digits numeric only
    return regex.test(accountNumber);
  };
  const handleChangeAccountNo = (e) => {
    const inputAccountNumber = e.target.value;
    setAccountNumber(inputAccountNumber);
    setIsValidAccountNo(validateAccountNumber(inputAccountNumber));
    accountNo.length !== 8 && setAccountMessage(false);
  };
  const validateSocialMedia = (value) => {
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(value);
  };

  const handleSubmit = async () => {
    if (
      !name ||
      !fatherName ||
      !motherName ||
      !dob ||
      !email ||
      !mobile ||
      !nationality ||
      !state ||
      !district ||
      !pinCode ||
      !occupation ||
      !gender ||
      !workExperience ||
      !upiCode ||
      !ifscCode ||
      !bankName ||
      !accountName ||
      !accountNo
    ) {
      setIsFormValid(true);

      return;
    }

    // Validate fields
    if (
      !isAlphabetic(name) ||
      !isAlphabetic(fatherName) ||
      !isAlphabetic(motherName) ||
      !isAlphabetic(accountName)
    ) {
      alert(
        "Name, father's name, accountName and mother's name should contain only alphabetic characters."
      );
      return;
    }
    if (!isNumeric(mobile) || !isNumeric(pinCode)) {
      alert("Mobile number should contain only numeric characters.");
      setErrorMessage(true);
      return;
    } else {
      setErrorMessage(false);
    }
    if (!isValid) {
      toast.error("Please enter a valid email address.");
      setMessage(true);
      return;
    } else {
      setMessage(false);
    }
    if (!isValidUpi) {
      toast.error("Please enter a valid UPI code.");
      return;
    }
    // Validate IFSC code before submission
    if (!isValidIfsc) {
      toast.error("Please enter a valid IFSC code.");
      return;
    }
    if (!isValidAccountNo) {
      toast.error("Please enter a valid ACCOUNT NUMBER code.");
      setAccountMessage(true);
      return;
    }
    if (partnerType === "SMIP") {
      if (!linkdinsocialMedia) {
        setSocialMediaErrorMessage(true);
      }
      if (!validateSocialMedia(linkdinsocialMedia)) {
        toast.error("Please enter a valid LinkedIn URL.");
        return;
      }
      if (!validateSocialMedia(facebooksocialMedia)) {
        toast.error("Please enter a valid Facebook URL.");
        return;
      }
      if (!validateSocialMedia(instagramsocialMedia)) {
        toast.error("Please enter a valid Instagram URL.");
        return;
      }
      if (!validateSocialMedia(youtubesocialMedia)) {
        toast.error("Please enter a valid Youtube URL.");
        return;
      }
      // Validate address proof file
      // if (!validateAddressProof(addressProof)) {
      //   toast.error("Please upload a valid address proof file.");
      //   return;
      // }
    }
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("dob", dob);
      productData.append("fatherName", fatherName);
      productData.append("motherName", motherName);
      productData.append("email", email);
      productData.append("mobile", mobile);
      productData.append("nationality", nationality);
      productData.append("pinCode", pinCode);
      productData.append("state", state);
      productData.append("district", district);
      productData.append("pincode", pinCode);
      productData.append("addressProof", addressProof);
      productData.append("cancelledCheque", cancelledCheque);
      productData.append("partnerType", partnerType);
      productData.append("bankName", bankName);
      productData.append("accountNo", accountNo);
      productData.append("ifscCode", ifscCode);
      productData.append("accountName", accountName);
      productData.append("upiCode", upiCode);
      // productData.append("socialMedia", socialMedia);
      productData.append("workExperience", workExperience);
      productData.append("occupation", occupation);
      productData.append("gender", gender);
      productData.append("linkdinsocialMedia", linkdinsocialMedia);
      productData.append("instagramsocialMedia", instagramsocialMedia);
      productData.append("facebooksocialMedia", facebooksocialMedia);
      productData.append("youtubesocialMedia", youtubesocialMedia);
      productData.append("address", address);

      // Send form data to the API endpoint using Axios
      const response = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/add_member/",
        `${apiKey}admin/index.php/Api/add_member/`,
        productData
      );

      // Handle response if needed
      console.log("Response:", response.data);

      // Navigate to success page upon successful submission
      navigate("/successfully");
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="partner-form-container-s">
        <div className="inner-partner-form-conatainer-s">
          <div className="width-i-p-f-c-s">
            <h3>Application Form For Partnership Code</h3>
            <p>
              The application process includes work history and financial
              information to determine eligibility for the partnership.
            </p>
            <p>Type of partnership* : </p>
            <input
              type="radio"
              name="partnerType"
              value="Managing Partnership (MP)"
              onClick={() => setPartnerShip("MP")}
            />{" "}
            Managing Partnership (MP){" "}
            <input
              type="radio"
              name="partnerType"
              value=" Social Media Influencer Partnership (SMIP)"
              onClick={() => setPartnerShip("SMIP")}
            />{" "}
            Social Media Influencer Partnership (SMIP)
            {isFormValid && !partnerType && (
              <p className="error-message em-2" style={{ marginTop: "10px" }}>
                Please select partnership type*
              </p>
            )}
            <p>Managing Partner (MP) Code :</p>
            {console.log(partnerType)}
          </div>
        </div>
      </div>

      <div className="partner-form-container-2-s">
        <div className="inner-partner-form-c-2">
          <div className="width-i-p-f-c-s-2">
            <div className="left-p-f-c">
              <div className="div-f">
                <input
                  type="text"
                  name="applicantName"
                  // onChange={(e) => setName(e.target.value)}
                  onChange={handleChangeName}
                  style={{ zIndex: "1" }}
                  value={name}
                />
                <div
                  className={
                    name.length === 0 ? "labelline la-2" : "labelline fix"
                  }
                >
                  Name of Applicant*
                </div>
              </div>
              {isFormValid && !name && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {message && name.length === 50 && (
                <p className="error-message">
                  Maximum character limit for name exceeded. Please limit input
                  to 50 characters.
                </p>
              )}
              {isNumericNameError && (
                <p className="error-message">
                  Name should not contain numeric characters
                </p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  name="fatherName"
                  // onChange={(e) => setFatherName(e.target.value)}
                  onChange={handleChangeFatherName}
                  style={{ zIndex: "1" }}
                  value={fatherName}
                />
                <div
                  className={
                    fatherName.length === 0 ? "labelline ll-2" : "labelline fix"
                  }
                >
                  Father Name*
                </div>
              </div>
              {isFormValid && !fatherName && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {message && fatherName.length === 50 && (
                <p className="error-message">
                  Maximum character limit for father name exceeded. Please limit
                  input to 50 characters.
                </p>
              )}
              {isNumericFatherError && (
                <p className="error-message">
                  fatherName should not contain numeric characters
                </p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  // onChange={(e) => setMotherName(e.target.value)}
                  onChange={handleChangeMotherName}
                  style={{ zIndex: "1" }}
                  value={motherName}
                  name="motherName"
                />
                <div
                  className={
                    motherName.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Mohter Name*
                </div>
              </div>
              {isFormValid && !motherName && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {message && motherName.length === 50 && (
                <p className="error-message">
                  Maximum character limit for mother name exceeded. Please limit
                  input to 50 characters.
                </p>
              )}
              {isNumericError && (
                <p className="error-message">
                  motherName should not contain numeric characters
                </p>
              )}
              <div className="div-f ff" style={{ zIndex: "1" }}>
                <input
                  type="date"
                  name="dob"
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}
                />
                <div className="labelline fix" style={{ zIndex: "9999" }}>
                  Date of Birth*
                </div>
              </div>
              {isFormValid && !dob && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={handleChangeEmail}
                  style={{ zIndex: "1" }}
                  value={email}
                />
                <div
                  className={email.length === 0 ? "labelline" : "labelline fix"}
                >
                  Email ID*
                </div>
              </div>
              {isFormValid && !email && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {message && email && (
                <p className="error-message">
                  Please enter a valid email address.
                </p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={mobile}
                  name="mobile"
                />
                <div
                  className={
                    mobile.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Phone No*
                </div>
              </div>
              {isFormValid && !mobile && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {mobile.length !== 10 && mobile.length > 0 && (
                <p className="error-message">
                  Please enter a valid phone number.
                </p>
              )}
              {errorMessage && mobile && (
                <p className="error-message">
                  Mobile number should contain only numeric characters.
                </p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setNationality(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={nationality}
                />
                <div
                  className={
                    nationality.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Nationality*
                </div>
              </div>
              {isFormValid && !nationality && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-g">
                <p>Gender* :</p>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onClick={() => setGenderValue("Male")}
                />{" "}
                Male{" "}
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onClick={() => setGenderValue("Female")}
                />{" "}
                Female
                <input
                  type="radio"
                  name="gender"
                  value=" 3rd Gender"
                  onClick={() => setGenderValue("3rd Gender")}
                />{" "}
                3rd Gender
              </div>
              {partnerType === "SMIP" && (
                <div className="div-f">
                  <input
                    type="text"
                    onChange={(e) => setFacebook(e.target.value)}
                    style={{ zIndex: "1" }}
                    value={facebooksocialMedia}
                    name="socialMedia"
                  />
                  <div
                    className={
                      facebooksocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Facebook social Media*
                  </div>
                </div>
              )}

              {partnerType === "SMIP" && (
                <div className="div-f">
                  <input
                    type="text"
                    onChange={(e) => setInstagram(e.target.value)}
                    style={{ zIndex: "1" }}
                    value={instagramsocialMedia}
                    name="socialMedia"
                  />
                  <div
                    className={
                      instagramsocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Instagram social Media*
                  </div>
                </div>
              )}
            </div>

            <div className="right-p-f-c">
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={address}
                  name="address"
                />
                <div
                  className={
                    address.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Address*
                </div>
              </div>

              <div className="div-g">
                <p style={{ width: "310px", fontSize: "14px" }}>
                  {" "}
                  Address Proof*
                  <span style={{ fontSize: "10px" }}>
                    (Aadhar Card / VoterID Card / Passport/ ) Any One
                  </span>
                </p>
                <input
                  type="file"
                  name="addressProof"
                  id=""
                  onChange={handleFileChange}
                  style={{ border: "none", width: "250px" }}
                />
              </div>
              {errorMessage && (
                <p style={{ color: "red" }} className="error-message">
                  {errorMessage}
                </p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={state}
                  name="state"
                />
                <div
                  className={state.length === 0 ? "labelline" : "labelline fix"}
                >
                  State*
                </div>
              </div>
              {isFormValid && !state && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={district}
                  name="district"
                />
                <div
                  className={
                    district.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  District*
                </div>
              </div>
              {isFormValid && !district && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setPinCode(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={pinCode}
                  name="pincode"
                />
                <div
                  className={
                    pinCode.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Pin Code*
                </div>
              </div>
              {isFormValid && !pinCode && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {errorMessage && pinCode.length === "" && (
                <p className="error-message">Pincode should be in number*</p>
              )}

              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setOccupation(e.target.value)}
                  value={occupation}
                  style={{ zIndex: "1" }}
                  name="occupation"
                />
                <div
                  className={
                    occupation.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Occupation*
                </div>
              </div>
              {isFormValid && !occupation && (
                <p className="error-message">Please fill out this field*</p>
              )}

              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setWorkExperience(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={workExperience}
                  name="workExperience"
                />
                <div
                  className={
                    workExperience.length === 0
                      ? "labelline la-2"
                      : "labelline fix"
                  }
                >
                  Work Experience*
                </div>
              </div>
              {isFormValid && !workExperience && (
                <p className="error-message">Please fill out this field*</p>
              )}

              {isFormValid && !gender && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {partnerType === "SMIP" && (
                <div className="div-f">
                  <input
                    type="text"
                    onChange={(e) => setYoutube(e.target.value)}
                    style={{ zIndex: "1" }}
                    value={youtubesocialMedia}
                    name="socialMedia"
                  />
                  <div
                    className={
                      youtubesocialMedia.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    Youtube social Media*
                  </div>
                </div>
              )}
              {partnerType === "SMIP" && (
                <>
                  <div className="div-f">
                    <input
                      type="text"
                      onChange={(e) => setLinkdin(e.target.value)}
                      style={{ zIndex: "1" }}
                      value={linkdinsocialMedia}
                      name="socialMedia"
                    />
                    <div
                      className={
                        linkdinsocialMedia.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      linkdin social Media*
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="partner-form-container-3-s">
        <div className="inner-p-f-c-3-s">
          <div className="w-i-p-f-c-3-s">
            <p>
              To facilitate the transfer of your commission, we kindly request
              you to share your bank details
            </p>
            <h3>Bank Details*</h3>
          </div>
        </div>
      </div>

      <div className="p-f-c-4-s">
        <div className="i-p-f-c-4-s">
          <div className="w-i-p-f-c-4-s">
            <div className="left-p-f-c">
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setBankName(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={bankName}
                  name="bankName"
                />
                <div
                  className={
                    bankName.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Bank Name*
                </div>
              </div>
              {isFormValid && !bankName && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  onChange={(e) => setAccountName(e.target.value)}
                  style={{ zIndex: "1" }}
                  value={accountName}
                  name="accountName"
                />
                <div
                  className={
                    accountName.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Account Name*
                </div>
              </div>
              {isFormValid && !accountName && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  // onChange={(e) => setAccountNumber(e.target.value)}
                  onChange={handleChangeAccountNo}
                  style={{ zIndex: "1" }}
                  value={accountNo}
                  name="accountNo"
                />
                <div
                  className={
                    accountNo.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  Account No*
                </div>
              </div>
              {isFormValid && !accountNo && (
                <p className="error-message">Please fill out this field*</p>
              )}
              {accountMessage && (
                <p className="error-message">
                  Please enter a valid ACCOUNT NUMBER code
                </p>
              )}
            </div>

            <div className="right-p-f-c">
              <div className="div-g">
                <p>Upload Cancelled Cheque</p>
                <input
                  type="file"
                  name="cancelledCheque"
                  id=""
                  style={{ border: "none", width: "250px" }}
                  // value={cheque}
                  // onChange={(e) => setCheque(e.target.files[0])}
                />
              </div>
              <div className="div-f">
                <input
                  type="text"
                  // onChange={(e) => setIfscCode(e.target.value)}
                  onChange={handleChangeIfscCode}
                  style={{ zIndex: "1" }}
                  value={ifscCode}
                  name="ifscCode"
                />
                <div
                  className={
                    ifscCode.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  IFSC Code*
                </div>
              </div>
              {isFormValid && !ifscCode && (
                <p className="error-message">Please fill out this field*</p>
              )}
              <div className="div-f">
                <input
                  type="text"
                  // onChange={(e) => setUpiCode(e.target.value)}
                  onChange={handleChangeUpiCode}
                  style={{ zIndex: "1" }}
                  value={upiCode}
                  name="upiCode"
                />
                <div
                  className={
                    upiCode.length === 0 ? "labelline" : "labelline fix"
                  }
                >
                  UPI Code*
                </div>
              </div>
              {isFormValid && !upiCode && (
                <p className="error-message">Please fill out this field*</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="submit-d-container">
        <div className="inner-s-d-c" style={{ background: "#f7e5e5" }}>
          {/* <button onClick={() => navigate("/successfully")}>Submit</button> */}
          <button
            onClick={handleSubmit}
            style={{ background: "#630000", color: "#fff" }}
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Patnerform;
