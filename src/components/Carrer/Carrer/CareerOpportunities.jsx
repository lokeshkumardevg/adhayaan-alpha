import React, { useEffect } from "react";

import "./CareerOpportunities.css";
import Layout from "../../Layout/Layout";
import { hidenav } from "../../store/slices/sideNavSlice";
import { useDispatch } from "react-redux";

function CareerOpportunities() {
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="career-opportunities-container-one"onClick={()=>dispatch(hidenav())}>
        <div className="career-opportunities-container">
          <h1>Your Ready to Discover Opportunities? Take the First Step</h1>
          <p>
            As we work together to propel some of the world’s best-known
            businesses into the future, we help candidates at all levels enhance
            their skills, gain a distinct advantage and supercharge their
            potential.
          </p>
          {/* <nav className="career-nav">
          <h3 id="career-pathways">Career Path Ways|</h3>
            <h3 id="why-join-us">Why Join Us |</h3>
            <h3 id="hiring-process">Hiring Process</h3>
          </nav> */}

          <section id="career-pathways">
            <h2>
              <span className="carrers-icons">
                {" "}
                <i
                  class="fa-solid fa-square-caret-right"
                  style={{ fontSize: "24px", marginRight: "8px" }}
                ></i>
              </span>{" "}
              Career Path Ways
            </h2>
            <h3>A Career Opportunity for Everyone</h3>
            <p>
              The Next Step in Your Career Starts Here. At Aadhyayan, experience
              fuels experience. Experienced professionals will join a community
              of people who are shaping the future of technology. Your skills,
              experience and perspective will supercharge our business units
              with industry-leading technology services and human insight,
              unlocking innovation and value for our clients. Do what you love
              in an environment that will supercharge the industry and your
              career.
            </p>
            <h3>From College to Career in a Single Spark</h3>
            <p>
              Careers are not built by simply landing a job. They’re built by
              landing a job that fuels your spirit and supercharges your
              potential. Aadhyayan is designed to help you find your spark and
              shape your career. A first job at Aadhyayan means discovering new
              opportunities, diverse career paths and unique experiences that
              put you at the center of technology, innovation and personal and
              professional growth. Find your spark here and launch your career.
            </p>
            <h3>High School Career Launcher</h3>
            <p>
              As an aspiring tech professional, you shouldn’t have to wait until
              college to supercharge your future. Our Early Career Program
              creates new career pathways for high school-aged students,
              delivering comprehensive technical instruction, hands-on training,
              mentorship and wraparound support. The program allows curious,
              motivated learners to open the door to a full-time tech job, even
              before college. Upon completion of the program, you’ll become a
              regular employee of Aadhyayan with an offer of tuition assistance
              that allows you to fund your higher education with financial
              support from Aadhyayan.
            </p>
            <h3>Taking a Break From Work Shouldn’t Break Your Career</h3>
            <p>
              No matter the reason, career breaks are often necessary and, if
              you return to the right environment, they can lead to even more
              productive careers. Our Returnship Program makes coming back to
              work less overwhelming and far more supportive. We welcome our
              'Returners' with open arms, matching you with the perfect job and
              making sure this career return is just the beginning of a long and
              rewarding journey with us.
            </p>
            <h2>Find Your Spark</h2>
            <p>
              Aadhyayan is a India's recognized leader in the tech and IT
              industry, but we’ve never forgotten the startup mindset that got
              us here. We’ve always approached our work with an idea-first
              attitude because every one of our accomplishments —no matter how
              big or small —can be traced back to an idea’s single spark. It’s
              that spark —that inner drive —that sets our people apart from our
              competitors. It enables us not just to pull off game-changing feat
              after game-changing feat but to better our world in the process.
              We want you to find your spark. Because that’s what drives you to
              be better, be more and, ultimately, be more fulfilled.
            </p>
          </section>

          <section id="why-join-us">
            <h2>
              <i
                class="fa-solid fa-square-caret-right"
                style={{ fontSize: "24px", marginRight: "8px" }}
              ></i>{" "}
              Why Join Us
            </h2>
            <p>
              At Aadhyayan, you’ll supercharge your potential. You’ll find your
              career. And you’ll find your spark. All at a place that knows that
              helping our clients stay on top starts by putting our people
              first. We offer:
            </p>
            <ul className="Carrer-list">
              <li>Career opportunities on your terms</li>
              <li>Enriching job experiences</li>
              <li>An employment that you can trust in</li>
              <li>
                A diverse, international culture that values your whole self
              </li>
            </ul>
            <h3>Our People-centric Culture</h3>
            <p>
              We are admired as a top employer around the India and offer a
              global scale you can rely on. We recognize talent and empower
              people with new capabilities. We cheer you on with advice as you
              explore your path in a supportive and inclusive culture. We enable
              our leaders to scale in new domains and territories. We focus on
              next-gen capabilities and talents and provide learning
              opportunities at all levels. We give our people the freedom and
              flexibility to find their spark and grow in their own unique ways.
            </p>
          </section>

          <section id="hiring-process">
            <h2>
              <i
                class="fa-solid fa-square-caret-right"
                style={{ fontSize: "24px", marginRight: "8px" }}
              ></i>{" "}
              Hiring Process
            </h2>
            <p>
              Putting people first begins the moment we meet. Tell us about your
              skills and aspirations. Explore job opportunities that speak to
              your journey.
            </p>
            <ol className="Carrer-list">
              <li>
                <strong>Job Opportunities and Application Submission:</strong>{" "}
                Search for job posting that match your skills and interests.
                Submit your resume with complete credentials.
              </li>
              <li>
                <strong>Shortlisting:</strong> Our Dedicated team reviews your
                application. We will contact your for further details if yours
                credentials match our requirements.
              </li>
              <li>
                <strong>Business/Technical Interview:</strong> This is a golden
                opportunity to highlight your skills. Interview questions span
                discipline and may include out-of-the-box queries, puzzles and
                problems.
              </li>
              <li>
                <strong>HR Interview:</strong> Here's our chance to know each
                other. We want to understand your goals, skills, strengths
                interests and more. You can quiz the recruiter about anything
                you wish to know about the position or Aadhyayan as an
                organisation.
              </li>
              <li>
                <strong>Decision and Offer:</strong> If the outcome is positive,
                we'll present you with an offer that includes a compensation
                structure and official information related to employment at
                Aadhyayan.
              </li>
            </ol>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default CareerOpportunities;
