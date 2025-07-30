import React from "react";
import Layout from "../Layout/Layout";
import "./Privacy.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidenav } from "../store/slices/sideNavSlice";
import { decrement } from "../store/slices/navSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";

function Privacypolicy() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(hidenav());
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  return (
    <Layout>
      <div className="privacy-1" onClick={handlemenu2}>
        <div className="privacy-2">
          <div className="privacy-content-one">
            <div
              className="privacy-content1"
              data-aos="fade-right"
              data-aos-delay="120"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h1>Our Privacy Policy</h1>

              <p>
                We, at "JNICSR Foundation" along with our wholly owned
                subsidiary company "Edukriti Learning Solutions Private Limited"
                (hereinafter ‘Aadhyayan’), are committed to respecting your
                online privacy and recognize your need for appropriate
                protection and management of any "Personal Information" you
                share with us. Should we ask you to provide certain information
                by which you can be identified when using our website, mobile
                site, mobile app etc. (hereinafter ‘Platforms’), then you can be
                assured that it will only be used in accordance with this
                privacy statement. By using the Platforms, you indicate that you
                understand, agree and consent to this Privacy Policy. This
                Policy is subject to the ‘Terms and Conditions’ of the
                Platforms.
              </p>

              <h2>
                The types of Personal Information that we collect and hold
              </h2>
              <p>
                As a visitor, you can browse our platforms to view the content
                on various exams, details of schools, colleges, universities,
                service providers, organizations, courses, programs etc. and
                other information available on our Platforms. You are not
                required to provide any personal data as a visitor.
              </p>

              <p>
                However, many of our services require you to register on
                Aadhyayan.com. When you register, we will ask for your personal
                information and education preferences to create your account.
              </p>
            </div>

            <div className="privacy-registration">
              <h2>Registration</h2>
              <p>
                We may collect the following information to register you on our
                platforms to allow you to use our products and/or avail the
                various services we offer, and to provide you better services:
              </p>

              <div className="custom-list">
                {/* <ul className="custom-list-1"> */}
                <ul class="custom-list-1 cl-1">
                  <li>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">Your name</div>
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">
                      Contact information such as email address and phone number
                    </div>
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">
                      Demographic information such as current location and/or
                      residential address
                    </div>
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">
                      Education details such as education Interest, current
                      education level, year of passing etc
                    </div>
                  </li>
                  <li style={{ display: "flex" }}>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">
                      {" "}
                      Educational preferences / interests including but not
                      limited to preferred location of study, choice of exams /
                      programs / course preference to take up coaching,
                      interested to pursue programs with partner colleges etc.
                    </div>
                  </li>
                  <li>
                    <i class="fa-regular fa-circle-dot"></i>{" "}
                    <div class="privacy-div">
                      {" "}
                      Work Experience, occupation, career domain, skills and
                      specializations that you are interested to pursue /
                      upskill
                    </div>
                  </li>
                </ul>
                {/* </ul> */}
              </div>
            </div>

            <div class="coaching-info">
              <h2>Online Coaching / Counselling Products:</h2>
              <p>
                At the time of purchasing or using any of our test preparation
                products, counselling products or other tools / services, paid
                or free, on our platform, we may collect additional information
                such as:
              </p>
              <div className="custom-list">
                <ul className="custom-list-1">
                  <ul class="custom-list-1 cl-1 cl-2">
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">Your location and state</div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Your socio-economic profile, gender, religion etc. for
                        providing recommendations where admission cut-offs are
                        based on such parameters
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Your score, rank in various entrance exams.
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">Date of birth / Age</div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        {" "}
                        Enrolment number pertaining to exam/institutions applied
                        to{" "}
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>

            <div class="Application-info">
              <h2>Application Form:</h2>
              <p>
                When you are applying to colleges / universities by using our
                ‘Common Form or any other mode on our platforms, we may collect
                the following additional information from you to enable them to
                process your application.
              </p>
              <div className="custom-list">
                <ul className="custom-list-1">
                  <ul class="custom-list-1 cl-1 cl-2">
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Category / Stream for which form is filled, course
                        interested in, preferred location of study
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Gender, Nationality, State, Address, Date of Birth
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Father’s / guardian’s name, occupation, mother’s name
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Details of 10th class including marks scored, school
                        name, school board, passing year
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                      Details of 12th class / under graduation including stream, marks scored, school name, school board, passing year
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        Work experience (if applicable) including companies last
                        worked / working, years of experience, job designation,
                        occupation, domain, skills and specializations etc.
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="Application-paragraph">
                <p>
                  Further, Platforms may collect information like IP address,
                  device details, operating system, behavioural patterns, your
                  engagement on various pages / products of the platforms, test
                  results, transactional information etc.
                </p>

                <p>
                  For purchase of products, we may ask for financial information
                  such as bank account or credit card or debit card or any other
                  payment information for processing of payments.
                </p>

                <p>
                  We will only collect Personal Information by lawful and fair
                  means. Personal Information may be collected directly from you
                  or your authorised representative, or may be collected from a
                  third party such as a licensee or representative authorised by
                  us to provide services to you. We collect information about
                  the services that you use and how you use them including but
                  not limited to log information and location information
                </p>

                <p>
                  The above information is collected to help us provide you with
                  improved and personalized content and services, analyse
                  trends, conduct research and to aid evolution of our
                  product/service offerings to benefit the end user that is
                  you.?
                </p>

                <p>
                  We do not collect Personal and Sensitive information unless
                  the information is reasonably necessary for conducting our
                  business functions/activities
                </p>
              </div>

              <div className="log-files">
                <h2>
                  Log files, IP Addresses and Information about your Computer
                  and Mobile Device
                </h2>

                <p>
                  Due to the communications standards on the internet, when you
                  visit our platforms we automatically receive the URL of the
                  site from which you came and the site to which you are going
                  to when you leave our platforms.
                </p>

                <p>
                  Additionally, advertisers receive the URL of the page you were
                  on when you click on an ad on our platforms. PPPL also
                  receives the internet protocol (“IP”) address of your computer
                  and additional information including but not limited to your
                  computer operating system, your mobile device and its
                  operating system (if you are accessing our platforms using a
                  mobile device),web/mobile browser you are using as well as the
                  name of your ISP or your mobile network carrier
                </p>

                <h2>Use of your personal information</h2>

                <p>
                  By providing information for the purposes of creating your
                  User account or adding any additional details to your
                  Aadhyayan profile, you are expressly and voluntarily accepting
                  the terms and conditions of this Privacy Policy and User
                  Agreement that allow us to process information about you.
                </p>

                <p>
                  We require this information to understand your needs and to
                  provide you better service; in particular for all or some of
                  the following reasons:
                </p>

                <div className="custom-list">
                  <ul className="custom-list-1">
                    <ul class="custom-list-1 cl-1 cl-2">
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To customise experience on our platforms based on your
                          profile and interests
                        </div>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To recommend the ‘best fit college/program ’ with the
                          information provided by you
                        </div>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To enhance your engagement levels with the test
                          preparation platform and to enable us improve your
                          learning outcomes
                        </div>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To process your application(s) to our partner
                          Colleges, Universities, Service Providers,
                          Contractors, Vendors etc. which require the
                          information to assess your suitability for admission
                        </div>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To process your application(s) or share your interest
                          to our partner Organisations, Certification providers,
                          Service Providers, Online Program Management entities
                          (OPMs), Coaching institutes etc. for the programs that
                          you are interested to pursue
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To share your information with financial service
                          providers including banks / NBGCs, if you have shown
                          interest in any of the products services being offered
                          by them
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To send you updates / information about the exams,
                          schools / colleges / universities / service providers,
                          courses, programs, events and other information that
                          you may be interested in
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To send you updates / information about the exams,
                          schools / colleges / universities / service providers,
                          courses, programs, events and other information that
                          you may be interested in
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To allow you to participate in surveys, reviews,
                          promotional offers or interactive features of our
                          products/services when you choose to do{" "}
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To respond appropriately to any questions or comments
                          that you submitted to use on our platforms or
                          otherwise.
                        </div>
                      </li>

                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          To enhance products, functionalities and services
                          offered by us
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>

                <div className="paragraph-1">
                  <p>
                    {" "}
                    We may periodically send promotional emails/SMS/WhatsApp
                    about new products, special offers or other information
                    which we think you may find interesting using the email
                    address which you have provided
                  </p>

                  <p>
                    From time to time, we may also use your information to
                    contact you for market research purposes. We may contact you
                    by phone, sms, WhatsApp or e-mail. We may use this
                    information to customize the platform according to
                    demographic interests
                  </p>

                  <p>
                    Your personal data may be shared with selected educational
                    institutions or OPMs or educational service providers or
                    others organisations to communicate their marketing
                    campaigns for their courses / programs which may be
                    beneficial to you.
                  </p>

                  <p>
                    You can at any time ask us to stop sending you marketing
                    information or withdraw the permission to contact you by
                    mailing us at support@Aadhyayan.com
                  </p>
                </div>
              </div>

              <div className="sharing-info">
                <h2>Sharing of your information</h2>
                <p>
                  We work with a range of educational institutions and other
                  organisations that advertise courses on our platforms. Your
                  personal data will only be shared with educational
                  institutions or other organisations (including educational
                  service providers, coaching institutes, financial service
                  providers etc.) you have chosen to engage with via our
                  websites. For example, when you make an enquiry, show interest
                  or a prospectus request to an institution, your details
                  relating to that enquiry will be provided to the institution
                  so that they may engage with you directly.
                </p>
                <p>
                  We may also share the information under the following
                  circumstances
                </p>
                <div className="custom-list">
                  <ul className="custom-list-1">
                    <ul class="custom-list-1 cl-1 cl-2">
                      <li>
                        <i
                          class="fa-regular fa-circle-dot"
                          style={{ marginTop: "-34px" }}
                        ></i>{" "}
                        <div class="privacy-div">
                          We believe it is necessary to share information in
                          order to investigate, prevent, or take action
                          regarding illegal activities, suspected fraud,
                          situations involving potential threats to the physical
                          safety of any person, violations of terms of services
                          of Aadhyayan platforms, or as otherwise required by
                          law.
                        </div>
                      </li>
                      <li>
                        <i class="fa-regular fa-circle-dot"></i>{" "}
                        <div class="privacy-div">
                          We are responding to subpoenas, court orders, legal
                          process or to establish our legal rights or defend
                          against legal claims.{" "}
                        </div>
                      </li>
                    </ul>
                  </ul>
                </div>
                <p>
                  {" "}
                  Further, we may share your personal information with selected
                  educational institutions and other third party organisations
                  based on your browsing behaviour or expression of interest
                  regarding education interest, courses, specialisations,
                  current and preferred locations etc. and educational
                  institutions or such third party organisations etc. may
                  contact you. Please note, that those educational institutions
                  or third party organisations using your data are not governed
                  by our privacy policy. For further information on how such
                  educational institutions or such third party organisations
                  etc. or advertisers use your information, please visit the
                  applicable policy of that aforesaid entity.
                </p>
                <p>
                  The information you provide by filling ‘Common Form’ or any
                  other mode is shared only with the institution(s) that you
                  have expressly consented to apply to by paying the applicable
                  application fee. This information enables these institution(s)
                  to process your application and to contact you to initiate the
                  next steps in the admissions process
                </p>
                <p>
                  {" "}
                  Furthermore, whenever you make payments on our Platforms, your
                  payment card information is shared with a payment gateway /
                  processor.
                </p>
              </div>
              <div className="cokkies">
                <h2>Cookies</h2>
                <p>
                  Like most platforms, we use “Cookies” and web log files to
                  track site usage and trends, to improve the quality of our
                  service, to customize your experience on our platforms, as
                  well as to deliver Aadhyayan and third-party advertising to
                  Users both on and off our platforms.
                </p>
                <p>
                  A cookie is a tiny data file that resides on your computer,
                  mobile phone, or other device, and allows us to recognize you
                  as a User when you return to our platforms using the same
                  computer and web browser. You can remove or block cookies
                  using the settings in your browser, but in some cases doing so
                  may impact your ability to use our platforms.
                </p>
                <p>
                  In the course of serving advertisements or optimizing the
                  services to our Users, we may allow authorized third parties
                  to place or recognize a unique cookie on your browser. Any
                  information provided to third parties through cookies will not
                  be personally identifiable but may provide general segment
                  information (e.g., your industry or geography or information
                  about your professional or educational background) for the
                  enhancement of your user experience by providing more relevant
                  advertising. Most browsers are initially set up to accept
                  cookies, but you can reset your browser to refuse all cookies
                  or to indicate when a cookie is being sent. Our platforms do
                  not store unencrypted personally identifiable information in
                  the cookies.
                </p>
              </div>
            </div>
            <div className="sahil">
              <h2>Advertisment</h2>

              <p>
                To support the services, we provide at no cost to our Users, as
                well as provide a more relevant and useful experience for our
                Users, we target and serve our own ads and third-party ads.
              </p>

              <p>
                We target ads to Users based on general profile information or
                on non-personally identifiable information inferred from a
                User’s profile (e.g., school, gender, age, nationality,
                interests or other relevant information). If in the future we
                show advertising on our platforms, the advertiser may use
                cookies to track the number of anonymous users responding to the
                campaign. We will not have access to or control of cookies
                placed by third parties.
              </p>

              <p>
                We target ads to Users based on general profile information or
                on non-personally identifiable information inferred from a
                User’s profile (e.g., school, gender, age, nationality,
                interests or other relevant information). If in the future we
                show advertising on our platforms, the advertiser may use
                cookies to track the number of anonymous users responding to the
                campaign. We will not have access to or control of cookies
                placed by third parties.
              </p>

              <h3>Links to Other platforms</h3>
              <p>
                Our platforms may contain links to other platforms of interest.
                However, once you have used these links to leave our platform,
                you should note that we do not have any control over that other
                platform you have voluntarily chosen to visit by clicking on
                that link. Therefore, we are not responsible for the protection
                and privacy of any information which you provide whilst visiting
                such platforms as these aforesaid platforms are not governed by
                this privacy statement. You should exercise caution and review
                the privacy statement applicable to the platform in question to
                understand your rights and/or protect your interests.
              </p>

              <h3>Children</h3>
              <p>
                To use the Platforms, you agree that you must be at least 18
                years of age. If you are under the age of 18 or the applicable
                age of majority in your jurisdiction, whichever is higher, you
                must use Aadhyayan.com and/or its platforms under the
                supervision of your parent, legal guardian or responsible adult.
              </p>
              <p>
                In case you are a resident of the European Union, the minimum
                age for these purposes shall be 16 years, however if local laws
                require that you must be older in order for Aadhyayan.com to
                lawfully provide the services on the Site to you, then that
                older age shall apply as the applicable minimum age.
              </p>
              <p>
                In case you are a resident of the European Union, the minimum
                age for these purposes shall be 16 years, however if local laws
                require that you must be older in order for Aadhyayan.com to
                lawfully provide the services on the Site to you, then that
                older age shall apply as the applicable minimum age.
              </p>
              <h3>
                How individuals can access and correct their Personal
                Information held by us?
              </h3>

              <p>
                The Company provides you the ability to keep your personal
                information accurate and up-to-date. You have a right to access,
                modify, correct and delete the data you supplied. If you update
                any of your information, we may keep a copy of the information
                that you originally provided to us in our archives for uses
                documented in this policy.
              </p>

              <p>
                If at any time you would like to rectify or restrict the
                processing of your personal information, you may access your
                personal information and make necessary changes.
              </p>

              <p>
                {" "}
                At any time, if you wish to withdraw your consent to processing
                your data, please email us at support@Aadhyayan.com
              </p>

              <p>
                We will retain your information as long as your account is
                active or as needed to provide you services and/or to enable
                your usage of our products. We will retain and use your
                information as necessary to comply with our legal obligations,
                resolve disputes, and enforce this Agreement.
              </p>

              <h3>Your Obligations</h3>
              <p>
                As a User, you have certain obligations towards other Users.
                Some of these obligations are imposed by applicable laws and
                regulations, and others have become commonplace to support a
                user-friendly interface and environment. Your obligations
                include but are not limited to:
              </p>

              <div className="custom-list">
                <ul className="custom-list-1">
                  <ul class="custom-list-1 cl-1 cl-2">
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        You must, at all times, abide by the terms and
                        conditions of the then-current Privacy Policy and Terms
                        of use.
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        You must respect all intellectual property rights that
                        may belong to third parties
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        You must not download or otherwise disseminate any
                        information that may be deemed to be injurious, violent,
                        offensive, racist or xenophobic, or which may otherwise
                        violate the purpose and spirit of PPPL and its community
                        of Users
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        You must not provide us and/or other Users information
                        that you believe might be injurious or detrimental to
                        your person or to your professional or social status.
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        You must keep your password confidential and not share
                        it with others preference to take up coaching,
                        interested to pursue programs with partner colleges etc.{" "}
                      </div>
                    </li>
                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        {" "}
                        Aadhyayan.com operates channels, pages and accounts on
                        some social media sites to inform, assist and engage
                        with you. Aadhyayan.com monitors and records comments
                        and posts made on these channels to improve its products
                        and services. Please note, you must not communicate with
                        Aadhyayan.com through such social media sites by
                        divulging the following information:
                      </div>
                    </li>

                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        {" "}
                        Sensitive personal data including information revealing
                        racial or ethnic origin, political opinions, religious
                        or philosophical beliefs, or trade union membership, and
                        the processing of genetic data, biometric data for the
                        purpose of uniquely identifying a natural person, data
                        concerning health or data concerning a natural person's
                        sex life or sexual orientation
                      </div>
                    </li>

                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        {" "}
                        Other sensitive personal data such as criminal
                        convictions and offences and national identification
                        numb
                      </div>
                    </li>

                    <li>
                      <i class="fa-regular fa-circle-dot"></i>{" "}
                      <div class="privacy-div">
                        {" "}
                        Excessive, inappropriate, offensive or insulting
                        information directed towards individuals/entities
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>

              <p>
                Any violation of these guidelines may lead to the restriction,
                suspension or termination of your account at our sole
                discretion.
              </p>

              <p>For more information, refer to our Terms of Use</p>
              <h3>Cancellation and Refund Policy</h3>
              <p>
                However, if you have purchased products / services under ‘money
                back guarantee’ facility, the amount would be returned in case
                of not meeting the minimum guarantee promised, provided that you
                have fulfilled the terms and conditions pertaining to the offer
                provided by us
              </p>

              <p>
                Our customer service team would be available to address any
                concerns related to the product and services rendered by us. For
                further information, please write to us at support@Aadhyayan.com
              </p>
              <h3>Your Consent</h3>
              <p>
                By registering with us, you are expressly consenting to our
                collection, processing, storing, disclosing and handling of your
                information as set forth in this Policy now and as amended by us
                from time to time. Processing your information in any way,
                includes collecting, storing, deleting, using, combining,
                sharing, transferring and disclosing information. We believe
                that every user of our Platforms must be in a position to
                provide an informed consent prior to providing any Information
                required for the use of any of the Platforms. Even if you reside
                outside India, your information will be transferred, processed
                and stored in accordance with the applicable data protection
                laws of India.
              </p>

              <h3>Changes to our Privacy Policy</h3>
              <p>
                We reserve the right to update, change or modify this policy at
                any time. Changes to our policy will be updated on our platforms
                only. You are advised to review this Policy regularly for any
                changes, as continued use is deemed approval of all changes.
                This policy was last updated on June 01, 2023.
              </p>

              <h3>Authorization</h3>
              <p>
                In purview of the Telecom Regulatory Authority of India (TRAI)
                guidelines, you hereby authorise us and our affiliates/partners
                or otherwise who are accessing your Information by virtue of
                their association with the company to communicate with you
                through telephone/mobile, Email, SMS, WhatsApp or other modes of
                communication even if Your number/numbers(s) is/are registered
                in the National Do Not Call Registry (NDNC) or
                www.nccptrai.gov.in
              </p>

              <p>
                You are providing your express consent to receive information,
                including telemarketing, about products and services from us and
                you hereby agree and consent to our contacting you using the
                information you have provided to us. We may contact you by
                e-mail, phone, including automated dialling equipment, SMS,
                WhatsApp and other kinds of text message, social networks or any
                other means of communication
              </p>

              <h3>User communications</h3>
              <p>
                When you send an email or other communication to the company, it
                may retain those communications in order to process your
                inquiries, respond to your requests and improve our Services.
              </p>

              <h3>Security Measures</h3>
              <p>
                We take utmost care to secure your information from unauthorized
                access, usage or disclosure or alteration. We take appropriate
                steps and security measures to safeguard your information and
                make sure that your Information is secured as mandated by law.
                For this purpose, we adopt reasonable security practices and
                procedures, in line with the industry standards, to include,
                technical, operational, managerial and physical security
                controls in order to protect your personal information from
                unauthorized access, or disclosure while it is under our
                control.
              </p>
              <p>
                While we protect your personal information as per industry
                standards, you acknowledge that the internet or computer
                networks are not fully secure and we cannot provide any absolute
                assurance regarding the security of your personal information.
                Therefore, you shall not hold us responsible for any loss of
                your information, or any other data which you have shared
              </p>

              <h3>How to Contact Us</h3>
              <p>
                You may also write to us with any questions or concerns about
                this Privacy Policy at:
              </p>
              <div>
                <p>JNICSR Foundation</p>
                <p>
                  324, Vardhman Sunrise Plaza, Vasundhara Enclave, Delhi -
                  110096
                </p>
                <p>Email: support@Aadhyayan.com</p>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Privacypolicy;
