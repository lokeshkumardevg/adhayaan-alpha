import React from "react";
import "./ManagementSection.css";

const ManagementSection = () => {
  return (
    <div className="main-form-wrapper">
      <h3>Management</h3>
      <form>
        <div className="management-grid">
          <div>
            <label>Chancellor :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Vice Chancellor :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Pro-Vice Chancellor :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Chairman :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Vice Chairman :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Registrar :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Director :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Principle :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
          <div>
            <label>Training & Placement Officer (TPO) :</label>
            <input type="text" />
            <label>Email :</label>
            <input type="email" />
          </div>
        </div>

        <div className="button-row">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ManagementSection;
