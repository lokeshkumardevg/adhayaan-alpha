import React from "react";
import "./ConsultantSection.css";

const ConsultantSection = () => {
  return (
    <div className="consultant-section">

      {/* 🟥 Red Header Tabs Manual (copy-paste style) */}
      <div className="navbar">
        {[
          "About", "University", "Collage", "ITI/Vocational", "Courses", "Coaching Center",
          "Tutor", "Consultants", "Social Media", "Photos", "Accolades", "Management", "Contact"
        ].map((tab) => (
          <span key={tab} className={tab === "Consultants" ? "tab active" : "tab"}>
            {tab}
          </span>
        ))}
      </div>

      <h3>Consultants</h3>
      <p>
        Student services : (jo service doh dete hai un aus ko select ker le gai gai hai aus ko select ker le gai)
      </p>

      <div className="checkbox-grid">
        {[
          "Course selection", "Application assistance", "Admission assistance", "Visa services",
          "Finance & Scholarship", "Pre-departure event & kit", "Course recommendation", "Scholarship assistance",
          "Admission support", "Visa support", "University selection", "Financial guidance",
          "Pre-departure checklist", "Application tracking", "Profiling", "Course and university selection",
          "Application editing & review", "Finance and scholarship assistance", "Personal consultation",
          "Application creation", "Personal statement construction", "Guaranteed offer",
          "Abroad career counselling", "Visa & forex assistance", "Pre-departure guidance",
          "Abroad counselling", "Course selection & application",
          "Scholarship guidance & assistance in essays", "Internship guidance",
          "Loan assistance", "Visa processing & mock interviews", "Abroad Counselling"
        ].map((service, idx) => (
          <label key={idx}>
            <input type="checkbox" />
            {service}
          </label>
        ))}
      </div>

      <hr />

      <div className="checkbox-columns">
        <div>
          <label><input type="checkbox" /> Free visa help</label>
        </div>
        <div>
          <label><input type="checkbox" /> Students essentials– health cover, accommodation, banking</label>
        </div>
      </div>

      <div className="checkbox-groups">
        <div className="group">
          <strong>Allied services (free) :</strong>
          <label><input type="checkbox" /> Accommodation</label>
          <label><input type="checkbox" /> Health services</label>
        </div>

        <div className="group">
          <strong>Forex :</strong>
          <label><input type="checkbox" /> Forex</label>
          <label><input type="checkbox" /> Remittance</label>
        </div>

        <div className="group">
          <strong>Test preparation :</strong>
          {["IELTS", "GRE", "GMAT", "TOEFL", "SAT", "ACT", "PTE", "CELPIP", "CAEL", "DET"].map((test, idx) => (
            <label key={idx}><input type="checkbox" /> {test}</label>
          ))}
        </div>

        <div className="group">
          <strong>Additional key service :</strong>
          <label><input type="checkbox" /> Accommodation</label>
          <label><input type="checkbox" /> Health cover</label>
          <label><input type="checkbox" /> Free counselling</label>
          <label><input type="checkbox" /> Flight bookings</label>
        </div>

        <div className="group">
          <strong>Free services :</strong>
          <label><input type="checkbox" /> Consultation</label>
          <label><input type="checkbox" /> University recommendation</label>
          <label><input type="checkbox" /> Review of personal statement, documentation</label>
          <label><input type="checkbox" /> Scholarship advice</label>
          <label><input type="checkbox" /> Admission support</label>
        </div>

        <div className="group">
          <strong>Other services :</strong>
          <label><input type="checkbox" /> International banking</label>
          <label><input type="checkbox" /> Travel Assistance</label>
          <label><input type="checkbox" /> Guardianship and welfare service for under 18 years students</label>
        </div>
      </div>

      <div className="btn-row">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default ConsultantSection;
