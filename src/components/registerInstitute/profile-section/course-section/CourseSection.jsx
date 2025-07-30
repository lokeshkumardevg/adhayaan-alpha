import React from 'react';

const CourseSection = ({ courses, onChange }) => {
  return (
    <div className="section">
      <h3>Courses Offered</h3>
      <textarea name="courses" placeholder="List your courses..." value={courses} onChange={onChange}></textarea>
    </div>
  );
};

export default CourseSection;
