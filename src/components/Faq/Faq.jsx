import React, { useState } from "react";
import "./Faq.css";
import Layout from "../Layout/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
const Faq = () => {
  const [show, setShow] = useState(false);
  const [rowIndex, setRowIndex] = useState(null);
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  const [data] = useState([
    {
      title: "1.What is Aadhyayan?",
      content: `Aadhyayan is a subscription-basedAadhyayan is the India's first online study material provider. We have more then 100 programmes from all the interest like Bachelors, Masters, Diplomas, Certificates etc on an internet-connected device. We follow the structure of Indian educational institution.`,
    },
    {
      title: "2.Aadhyayan publication, Books or study Material?",
      content:
        "Aadhyayan content varies by region and may change over time. You can study a variety of your course books online Aadhyayan originals, more.The more you study, the better Aadhyayan gets at recommending course content or study material.",
    },
    {
      title: "3.Getting started with Aadhyayan?",
      content: `Welcome to Aadhyayan! Below you'll find some information to get you started. If you don’t see a topic covered here, try searching for it on our Help Center (). If you haven't signed up yet and would like to learn more, visit What is Aadhyayan?
            `,
    },
    {
      title: "4.What is the process after the enrolment?",
      content: (
        <p>
          Ans: After the successful enrolment, Aadhyayan will send you an
          official acknowledgment of the receiving of the document with the fee
          submission & the student will receive Personal Login ID for the access
          to the Aadhyayan website, where they can get a access to the course
          content
        </p>
      ),
    },
    {
      title: "5.When and where will examination be held?",
      content: (
        <p>
          Ans: Aadhyayan will intimate you via email your examination Date.
          Examination will be conducted by University as per the student
          programs twice a year (end of 6 months semester) or end of the year.
          From the date of the start of the enrolment. Examination will be held
          online.
        </p>
      ),
    },
    {
      title: "6.How will I be intimated of the result?",
      content: (
        <p>Ans: The result will be accessible on the Aadhyayan website. .</p>
      ),
    },
    {
      title: "7.When will I get my certificate/Degree?",
      content: (
        <p>
          Ans: The certificate distribution will happen during the annual
          Convocation Ceremony.
        </p>
      ),
    },
    {
      title: "8.Who do I approach for the queries?",
      content: <p>Ans: Student Online Support available 24X7</p>,
    },
    {
      title: "9.Where will I get the internship?",
      content: (
        <p>Ans: internship will be with any Organizations across India.</p>
      ),
    },
    {
      title: "10.I completed masters, Is there any diploma after masters?",
      content: (
        <p>
          Ans: Yes, we have many Post Graduation Diploma courses for Senior
          professionals.
        </p>
      ),
    },
    {
      title: "11.Does Aadhyayan award a degree?",
      content: (
        <p>
          Ans: Bir Tikendrajit University awards the degree to the respective
          students after successful completion of the course .
        </p>
      ),
    },
    {
      title: "12.Is placements guaranteed to students?",
      content: (
        <p>
          Ans: Jobs depend upon the economic situation of the country at a given
          point of time. However past experience suggests that about 80 percent
          of students joining Aadhyaayn programmes every year opt for placements
          as the others end up joining their own businesses or start their own
          ventures or go for further studies.
        </p>
      ),
    },
    {
      title: "13.Can we migrate from one course from another?",
      content: (
        <p>
          Ans: Yes, Fee is Rs 2000/- But after that no EMI Option Available.
        </p>
      ),
    },
    {
      title: "14.Do Aadhyayan have refund policy?",
      content: (
        <p>
          Ans: Every Student apply for admission after completion of his all the
          doubts, and every enrolment dashboard which personal space for
          students and institution invest money for it. We have a no refund
          policy
        </p>
      ),
    },
    {
      title: "15.What is the cancelation fee?",
      content: (
        <p>
          Ans: No Cancelation, No refund Cancelation Fee DCSR = Rs 4000/- PGDCSR
          = Rs 5000/
        </p>
      ),
    },
  ]);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, []);
  return (
    <Layout>
      <div className="faq-page" onClick={handlemenu2}>
        <div className="inner-faq-page">
          <div className="f-p-heading">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="f-p-content">
            {data.map((value, index) => {
              return (
                <>
                  <div className="f-p-c-wraper">
                    <div
                      className="f-p-div-content"
                      onClick={() => {
                        setShow(!show);
                        setRowIndex(index);
                      }}
                    >
                      <h2>{value.title}</h2>
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
                    <div
                      className={
                        show && rowIndex === index ? "fp-div-inner" : "fp-hide"
                      }
                    >
                      <div className="fp-inside">
                        <p>{value.content}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
