import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import axios from "axios";
import { useParams } from "react-router-dom/dist";
import Loder from "../Loder-page/Loder";

const Stream = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [detailsId2, setDetailsId2] = useState([]);
  const [show, setShow] = useState(true);
  const [rowIndex, setRowIndex] = useState(0); // Initialize rowIndex with 0 to show the first content-d by default
  const apiKey = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.post(
      // 'https://aadhyayan.aboqindia.com/admin/index.php/Api/get_course_details'
      `${apiKey}admin/index.php/Api/get_course_details`
      , {
      course_id: id,
    })
      .then(response => {
        setCourseDetails(response.data);
        const syllabusDetails = response.data.res[0].syllabus_details;

        const filteredDetails = syllabusDetails.filter(detail => detail.course_id === id);
        if (filteredDetails.length > 0) {
          // Sort details by course_mode_no
          filteredDetails.sort((a, b) => a.course_mode_no - b.course_mode_no);
          setDetailsId2(filteredDetails);
        }
      })
      .catch(error => {
        console.error('Error fetching course details:', error);
      });
    window.scrollTo(0, 0);
  }, [id]);

  if (!courseDetails) {
    return <Loder />
  }

  return (
    <Layout>
      <div className="container-course-details">
        <div className="course-details-container">
          {/* <h1 className="course-details-title">Course Details</h1> */}
          <h3>{courseDetails.res[0].course_name}</h3> {/* Display course name here */}
          {/* <p>course_mode : {courseDetails.res[0].course_mode}</p> */}
          {courseDetails.res[0].course_mode === "Y" && (
            // <h3 >About Program : <span dangerouslySetInnerHTML={{ __html: courseDetails.res[0].about_program }} style={{ marginTop: '3px' }} /></h3>
            <>
              <h3>About Program</h3>
              <p dangerouslySetInnerHTML={{ __html: courseDetails.res[0].about_program }} />
              <div className="div-class">

                <h3>Duration :</h3>

                <p>{courseDetails.res[0].duration} Years</p>
              </div>
              <div className="div-class">

                <h3>Mode : </h3>
                <p>{courseDetails.res[0].course_mode === 'Y' ? 'Yearly' : 'Semester'}</p>
              </div>
              <h3>Subjects:</h3>
            </>
          )}
          <div>
            {detailsId2.map((detail, index) => (
              <div className="course-detail" key={index}>
                {/* <p>ID: {detail.id}</p> */}

                <div className="course-d">
                  <p> {detail.course_mode_no} {courseDetails.res[0].course_mode === 'Y' ? 'Year' : 'Semester'}</p>
                  {show && rowIndex === index ? (
                    <i
                      class="fa-solid fa-xmark"
                      onClick={() => setShow(false)}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-plus"
                      onClick={() => {
                        setShow(true);
                        setRowIndex(index);
                      }}
                    ></i>
                  )}
                </div>
                <div className={show && rowIndex === index ? "content-d " : "hide-d"}>
                  <div dangerouslySetInnerHTML={{ __html: detail.details }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
