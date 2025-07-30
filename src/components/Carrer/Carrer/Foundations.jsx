import React, { useEffect } from "react";
import "./Foundation.css"; // Import your CSS file for styling
import Layout from "../../Layout/Layout";

function Foundation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="foundation-container-1">
        <div className="foundation-container">
          <h1>JNICSR Foundation</h1>
          <p>
            JNICSR Foundation was conceived in 2015. With a vision of spreading
            awareness about digital and virtual education, our paperless
            foundation ventured into the world of digital education. This world
            is traversing in emerging technology, with the help of which every
            part of the world seems accessible. We have worked in various
            domains of education. We are the biggest promoter of Corporate
            Social Responsibility (CSR) education in India. As an institution,
            we taught CSR education to countless students and helped them obtain
            meaningful profiles in corporate CSR sectors. We were also
            instrumental in helping the poor and underprivileged of the nation
            via various social networks. We have not only delivered qualified
            manpower but also are skill builders in the field of social
            responsibility.
          </p>

          <p>
            JNICSR Foundation is founded in 2015. We have a vision of spreading
            awareness about digital and virtual education. This world is running
            on emerging technology, and with the help of technology, we can
            reach every part of the world. We have worked in various domains of
            education. We are the biggest promoter of Corporate Social
            Responsibility (CSR) education in India. As an institution, we have
            taught CSR education to countless students and helped them obtain
            jobs in corporate CSR sectors. Indirectly, we have helped lakhs of
            poor and underprivileged people, as all students from JNICSR work in
            CSR sectors and help society through lawful activities. We have not
            only delivered qualified manpower but also embrace character in our
            students so that when our students enter the system, they contribute
            justly to society at large.
          </p>

          <p>
            We have observed that in our nation, after the 12th standard,
            availability of course material/study material is scarce. Even if
            available, many students cannot afford it. Generally, students study
            between 36 to 26 subjects in a 3-year graduation program. A majority
            of students are deprived of having course material/study material.
          </p>

          <p>
            Our vision is that no student will be deprived of having course
            material in the future. That is why we have invested years in
            building standard course material for our future generations so that
            at least while pursuing education, they can study anywhere.
          </p>

          <p>
            Our mission is to build India's first free online school and a free
            online university. In that school and university, anyone can
            register and obtain education. Our focus is to create a platform
            where students can get live classes 24x7. We understand that many
            students in our country cannot afford computers or such
            technologies, but we will share our own profits for those deprived
            and poor students because our goal is to build the strongest nations
            and contribute to nation-building.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Foundation;
