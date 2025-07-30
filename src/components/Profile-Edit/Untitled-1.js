import React, { useState } from "react";
import "./Profileedit.css";
import Layout from "../Layout/Layout";
import { useAuth } from "../ContextApi/auth";
import axios from "axios";
import Dashboardheader from "../DashiboardHeader/Dashboardheader";

const ProfileEdit = () => {
  // State variables
  const { email } = useAuth();
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [fatherName, setFatherName] = useState(
    localStorage.getItem("fatherName") || ""
  );
  const [collegename, setcollegeName] = useState(
    localStorage.getItem("collageName") || ""
  );
  const [universityname, setUniversityName] = useState(
    localStorage.getItem("universityName") || ""
  );
  const [student_enrolment_no, setstudent_enrolment_no] = useState(
    localStorage.getItem("enrolmentNo") || ""
  );
  const [gender, setGender] = useState(localStorage.getItem("gender") || "");
  const [address, setAddress] = useState(
    localStorage.getItem("address") || ""
  );
  const [mobile, setPhone] = useState(
    localStorage.getItem("contactNo") || ""
  );
  const [pincode, setPincode] = useState("");
  const [usedcode, setUsedcode] = useState("");
  const [state, setState] = useState("");
  const [user_id, setUserId] = useState(localStorage.getItem("userId"));
  const [adharcard, setAdharCard] = useState("ajksbdf");
  const [selectedStateShow, setSelectedStateShow] = useState(false);
  const [selectedDistrictShow, setselectedDistrictShow] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStateList = () => {
    setSelectedStateShow(!selectedStateShow);
  };

  const toggleDistrictList = () => {
    setselectedDistrictShow(!selectedDistrictShow);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedStateShow(false);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setselectedDistrictShow(false);
  };

  const allStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
    "Jammu and Kashmir",
    "Ladakh",
  ];
  const filteredStates = allStates.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const fetchDistricts = (state) => {
    switch (state) {
      case "State1":
        return ["District1A", "District1B", "District1C"];
      case "State2":
        return ["District2A", "District2B", "District2C"];
      case "State3":
        return ["District3A", "District3B", "District3C"];
      default:
        return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        // "https://aadhyayan.aboqindia.com/admin/index.php/Api/smsupdate/",
        {
          name,
          fatherName,
          mobile,
          user_id,
          usedcode,
          address,
          adharcard,
          gender,
          district: selectedDistrict,
          state: selectedState,
          student_enrolment_no,
          collegename,
          universityname,
          email,
          pincode,
        }
      );
      if (res.data) {
        alert("Data updated");
        localStorage.setItem("name", name);
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("collageName", collegename);
        localStorage.setItem("universityName", universityname);
        localStorage.setItem("enrolmentNo", student_enrolment_no);
        localStorage.setItem("address", address);
        localStorage.setItem("contactNo", mobile);
        localStorage.setItem("fatherName", fatherName);
        localStorage.setItem("collageName", collegename);
        localStorage.setItem("universityName", universityname);
        localStorage.setItem("enrolmentNo", student_enrolment_no);
        localStorage.setItem("gender", gender);
        console.log(res.data);
        console.log(res);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Dashboardheader />
      <div className="pofile-container">
        <div className="inner-pro-conatiern">
          <div className="width-pro-container">
            <div className="left-pro-container">
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      style={{ zIndex: "1" }}
                      value={email}
                      readOnly
                    />
                    <div
                      className={
                        email.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Email
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      style={{ zIndex: "1" }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div
                      className={
                        name.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={fatherName}
                      onChange={(e) => setFatherName(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        fatherName.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Father Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="div-ss">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onClick={() => setGender("male")}
                  />{" "}
                  <label htmlFor="Male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={() => setGender("female")}
                  />{" "}
                  <label htmlFor="Female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    value="3rd gender"
                    onClick={() => setGender("Other")}
                  />{" "}
                  <label htmlFor="Other">Other</label>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={usedcode}
                      onChange={(e) => setUsedcode(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        usedcode.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Used Code
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        pincode.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Pin Code
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-pro-container">
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={collegename}
                      onChange={(e) => setcollegeName(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        collegename.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      College Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={universityname}
                      onChange={(e) => setUniversityName(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        universityname.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      University Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={student_enrolment_no}
                      onChange={(e) =>
                        setstudent_enrolment_no(e.target.value)
                      }
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        student_enrolment_no.length === 0
                          ? "labelline"
                          : "labelline fix"
                      }
                    >
                      Student Enrolment No
                    </div>
                  </div>
                </div>
              </div>
              <div className="email-container">
                <div className="div-f f-d fd-d">
                  <input
                    type="text"
                    style={{ zIndex: "1" }}
                    value={selectedState}
                    onClick={toggleStateList}
                  />
                  <div
                    className={
                      selectedState.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    State
                  </div>
                  {selectedStateShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedStateShow
                      ? "search-bar-div search-bar-div-2"
                      : "hide-list"
                  }
                >
                  <div className="s-icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="s-input-div">
                    <input
                      type="text"
                      placeholder="Search...."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className={
                    selectedStateShow ? "show-list-55 show-555" : "hide-list"
                  }
                >
                  {filteredStates.map((state, index) => (
                    <p
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleStateSelect(state)}
                    >
                      {state}
                    </p>
                  ))}
                </div>
              </div>
              <div className="email-container">
                <div className="div-f f-d fd-d">
                  <input
                    type="text"
                    style={{ zIndex: "1" }}
                    value={selectedDistrict}
                    onClick={toggleDistrictList}
                  />
                  <div
                    className={
                      selectedDistrict.length === 0
                        ? "labelline"
                        : "labelline fix"
                    }
                  >
                    District
                  </div>
                  {selectedDistrictShow ? (
                    <i
                      className="fa-solid fa-chevron-up"
                      style={{ fontSize: "16px" }}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{ fontSize: "16px" }}
                    ></i>
                  )}
                </div>
                <div
                  className={
                    selectedDistrictShow
                      ? "show-list-55 show-555"
                      : "hide-list"
                  }
                >
                  {fetchDistricts(selectedState).map(
                    (districtOption, index) => (
                      <p
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDistrictSelect(districtOption)}
                      >
                        {districtOption}
                      </p>
                    )
                  )}
                </div>
              </div>
              <div className="email-container"></div>
              <div className="email-container">
                <div className="edit-conatien">
                  <div className="div-f f-d f-d-1 f-d-2">
                    <input
                      type="text"
                      value={mobile}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ zIndex: "1" }}
                    />
                    <div
                      className={
                        mobile.length === 0 ? "labelline" : "labelline fix"
                      }
                    >
                      Phone
                    </div>
                  </div>
                </div>
              </div>
              <div className="btn-4">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
