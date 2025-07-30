import React from 'react';

const UniversitySection = ({ data, onChange }) => {
  return (
    <div className="section">
      <h3>University Details</h3>
      <input type="text" name="established" placeholder="Year Established" value={data.established} onChange={onChange} />
      <input type="text" name="affiliation" placeholder="Affiliation" value={data.affiliation} onChange={onChange} />
    </div>
  );
};

export default UniversitySection;
