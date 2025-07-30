import React from "react";
import "./AccoladeSection.css";

const AccoladeSection = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const updated = [...(formData.accolades || [])];
    updated[index] = e.target.value;
    setFormData({ ...formData, accolades: updated });
  };

  const addAccolade = () => {
    const updated = [...(formData.accolades || []), ""];
    setFormData({ ...formData, accolades: updated });
  };

  return (
    <div className="section">
      <h3>Certificates / Awards</h3>
      {(formData.accolades || []).map((item, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Award ${index + 1}`}
          value={item}
          onChange={(e) => handleChange(e, index)}
          className="accolade-input"
        />
      ))}
      <button type="button" className="add-btn" onClick={addAccolade}>+ Add</button>
    </div>
  );
};

export default AccoladeSection;
