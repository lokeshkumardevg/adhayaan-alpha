import React from "react";
import Layout from "../Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import "./Terms.css";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/navSlice";
import { hidenav } from "../store/slices/sideNavSlice";
import { dashnavemenushow } from "../store/slices/headerMenuNav";
function Termscond() {
  const dispatch = useDispatch();
  const handlemenu2 = () => {
    dispatch(decrement());
    dispatch(hidenav());
    dispatch(dashnavemenushow());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="parentterms" onClick={handlemenu2}>
        <div className="termsandcondition">
          <h1>Terms and Conditions</h1>
          <p>
            <strong>Version date:</strong> June 01, 2023
          </p>
          <p>
            The following are the terms and conditions of accessing or using any
            of our website, mobile site, mobile app etc. (hereinafter
            “Platforms”) developed and operated by JNICSR Foundation and our
            affiliated companies (hereinafter "Aadhyayan").
          </p>
          <p>
            Your use of this Platform at any time constitutes a binding
            agreement by you to abide by these Terms and conditions whether or
            not you become a registered user of the services. The Terms and
            Conditions and Privacy Policy as amended by us from time to time
            govern your use of our platforms. You acknowledge and agree that, by
            accessing or using our Platforms, you are indicating that you have
            read and that you understand and agree to be bound by these terms
            and receive our services. The terms are also applicable to the
            comments (reviews) you leave explaining your personal experience as
            a student, and any information you specify on our platforms.
          </p>
          <p>
            We may, at our sole discretion, modify or revise these Terms and
            Conditions and Privacy Policy at any time. You should check from
            time to time to ensure that you are happy with any modifications.
            Your continued use of our platform means that you agree to these
            terms, as revised.
          </p>

          <h2>1. Registration</h2>
          <p>
            1.1 Although parts of our Platforms may be visited by any visitor,
            you will need to register as a member to access certain features of
            the Platforms, to contribute or use any of our community features,
            downloading eBooks, showing willingness to apply to educational
            institutions, access demo / mock tests / test preparation material,
            access various tools and services on the platform etc. Registration
            on our platforms is free
          </p>
          <p>
            1.2 To register as a member, you must confirm that you are over 18
            years of age. If you are less than 18 years old, please refer to
            Section 3 below.
          </p>
          <p>
            1.3 You agree that any information you provide us about yourself
            after registration or at any other time is true, accurate,
            up-to-date and complete. We reserve the right to terminate your
            membership and access to our platform if we learn that you have
            provided false or misleading information.
          </p>
          <p>
            1.4 By registering, you agree to make your contact details available
            to partners / business associates of the Platform, receive
            promotional mails/ updates from Platform or any of its partners or
            business associates. You may be contacted by platform, partner
            educational institutions / service providers for additional
            information through email, telephone, SMS and WhatsApp.
          </p>
          <p>
            1.5 When you register, your email ID may be used as your username.
            The login process is through an OTP that will be sent to your
            registered email address and / or mobile number.
          </p>
          <p>
            1.6 We have the absolute discretion to cancel your username/password
            at any time if we suspect it is being used by an unauthorized
            person.
          </p>
          <p>
            1.7 Post Registration, you may be required to provide details of
            your preferred exams, locations, colleges and interest in any
            product offerings, some of which may be provided by our clients, in
            which case you may be contacted by them.
          </p>

          <h2>2. Your use of our Platforms</h2>
          <p>
            2.1 All information, documents, software, images, photographs, text,
            services and other similar materials (collectively "Materials")
            contained in this platform are provided by 'Aadhyayan' or its
            third-party manufacturers, authors, developers and vendors ("Third
            Party Providers") and are the copyrighted work of Aadhyayan and/or
            the Third Party Providers. Except as stated herein, none of the
            Materials may be copied, reproduced, distributed, republished,
            downloaded, displayed, posted or transmitted in any form or by any
            means, including, but not limited to, electronic, mechanical,
            photocopying, recording, or otherwise, without the prior express
            written permission of Aadhyayan or the third-Party Provider.
          </p>
          <p>
            2.2 No part of the Platforms, including logos, graphics, sounds or
            images, may be reproduced or retransmitted in any way, or by any
            means, without the prior express written permission of Aadhyayan
          </p>
          <p>2.3 You agree that the following actions are prohibited</p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Copying, extracting, downloading, sharing, displaying, selling, or
              otherwise exploiting any content, data, information, photos,
              images, preparation material, questions and solutions available on
              the Platforms or any other products or services provided by the
              Company for any purpose which is not adhering to these terms and
              conditions.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Using or exploiting Platforms and any content or data or
              information or test preparation material provided therein for any
              commercial purposes without prior written consent of the Company
              and / or undertaking any business activity which is competing with
              business activities of the Company.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Gaining or attempting to gain unauthorized access to any portion
              of the Platform which are not intended for your use.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Using any software or automated programs or any process to access,
              navigate, copy, download, crawl, scrape or extract any manner any
              data, content information, test preparation material from the
              Platform.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Reverse engineering, decompiling, deciphering or deriving the
              source code for the Platform.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Impersonating any other person or entity or making any
              misrepresentation of the information shared about you.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Stalking, threatening, spamming or in any manner harassing any
              other use of the Platform.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Imposing an unreasonable or large load on the infrastructure of
              the Platforms.
            </li>
          </ul>

          <p>
            2.4 For the purposes of these terms, “content” refers to all data,
            text, logos, artwork, software, documents, images, photographs,
            learning material and other materials downloaded from our platforms.
            This also includes any material you may upload including information
            about yourself, and comments about your experience as a student or
            about your study interests etc.
          </p>
          <p>
            2.5 You must ensure that any content that you submit to our
            platforms
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Does not infringe any third party's intellectual property rights
              (“intellectual property rights” refers to registered and/or
              unregistered copyright, database rights, trade marks, design
              rights and other intellectual and proprietary rights of whatever
              nature, and all applications for such rights, anywhere in the
              world)
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Does not breach any
              applicable law.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Is not defamatory, profane, sexually or racially offensive or
              discriminating, harassing, threatening, obscene, pornographic,
              false, unreliable or misleading or otherwise objectionable in our
              opinion.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Does not disrupt the
              online community on our platforms.
            </li>
          </ul>
          <p>2.6 You agree that you will not use our platforms</p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              For commercial purposes or to obtain financial gain without our
              prior written consent.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              To send chain letters, junk mail, ‘spam’, business or bulk
              communications of any kind.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              To advertise a company, product or service of any educational
              establishment except under the terms of a written advertiser
              agreement that we have entered into with you.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              In a way that might reasonably be expected to cause another
              person's computer systems and/or their communications network to
              be interrupted, damaged or rendered less efficient.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              To obtain personal information from users in a non-transparent or
              deceptive way.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              To obtain passwords or personal identifying information for
              commercial or unlawful purposes from other users.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>To attempt to
              impersonate another user.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>To harass, threaten, or
              intimidate any user.
            </li>
          </ul>
          <p>
            2.7 You will be responsible for logging out from your registered
            account at the end of each session on our platform.
          </p>
          <p>
            2.8 If you are a visitor, you agree not to obtain unauthorized
            access to areas of our platform reserved for members.
          </p>
          <p>
            2.9 If you are aware of anything on our platform which appears to
            infringe these terms, you agree to contact us immediately.
          </p>
          <p>
            2.10 If you are a university, college, school, other educational
            institution, educational service provider or any other entity
            partnered with Aadhyayan where Aadhyayan shares details of students
            who have expressed willingness to apply for your programs:
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              You will comply with all applicable data protection laws in
              relation to the processing of personal data; and not process
              personal data in an unlawful manner and excessive with regard to
              agreed purposes as defined in the privacy policy and this terms
              and conditions.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              You shall implement adequate technical and organizational controls
              to protect the shared personal data obtained from the Company
              against unauthorized or unlawful processing and against accidental
              loss, destruction, damage, alteration or disclosure.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              You warrant and represent that the institution shall not disclose
              or transfer Personal Data obtained from the Company to any
              sub-processors without ensuring that adequate and equivalent
              safeguards to the Personal Data.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              You shall retain or process shared Personal Data for no longer
              than is necessary to carry out the agreed purposes.
            </li>
          </ul>

          <h2> 3 Under 18 Years of Age</h2>

          <p>
            {" "}
            3.1 If you are under 18 years of age and want to become a member,
            you must obtain a parent or guardian's permission before registering
            on our platform. You may also discuss these terms with them before
            obtaining their permission.
          </p>

          <p>
            {" "}
            3.2 If you are a member under 18 years of age, you will need to
            obtain a parent or guardian's permission before taking part in any
            online discussions. You should never reveal personal information
            about yourself, such as your address, telephone number, and school
            name etc., to other users.
          </p>

          <p>
            {" "}
            3.3 You cannot register on our Platforms if you are less than 13
            years old. We do not intentionally collect or maintain personal
            information of those who are under 13 years of age.
          </p>

          <h2>Content Posted</h2>

          <p>
            {" "}
            4.1 None of the views expressed in the user content section is the
            views of the Aadhyayan team and we are just providing a platform.
            You acknowledge that all content is the responsibility of the person
            who posted, emailed or otherwise provided the content to our
            platforms. We are not responsible in any way for any user-managed
            content and if you post, email, upload or otherwise provide content,
            you are entirely responsible for it.
          </p>

          <p>
            {" "}
            4.2 We do not necessarily endorse, support, encourage or agree with
            the opinions, advice, statements, or other information or content
            posted by you.
          </p>

          <p>
            {" "}
            4.3 By submitting or posting content on our platforms, you grant to
            Aadhyayan a non-exclusive, irrevocable, perpetual, royalty free,
            sublicensable worldwide license to use, reproduce, copy, modify,
            publish, reformat the content posted by you. Further, you authorize
            us to adapt such content and you agree to waive your moral rights to
            object to any derogatory treatment, or to be identified as the
            author, of the material in question.
          </p>

          <p>
            {" "}
            4.4 However, we operate a "take down and notice" procedure. If you
            believe that any content is defamatory, profane, sexually or
            racially offensive or discriminating, harassing, threatening,
            obscene, pornographic, false, unreliable or misleading or otherwise
            objectionable, or infringes intellectual property or other legal
            rights please notify us immediately by email. We will investigate
            each matter notified to us and will act in our sole discretion.
          </p>

          <p>
            {" "}
            4.5 We have the right in our absolute discretion to alter, edit,
            remove, suspend or refuse any content without notice, if we consider
            that the content is objectionable or violates these terms or for any
            other reason.
          </p>

          <p>
            {" "}
            4.6 If you post content which is found to be in breach of these
            terms, we reserve the right to deactivate your username and password
            to prevent you from further access to our platform as a member.
          </p>

          <p>
            {" "}
            4.7 We may preserve or disclose the content and your personal
            details as well as any content to any third party if such disclosure
            is necessary:
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>For the purpose of
              maintaining our website
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>By law or
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              To respond to claims that our platform infringes or restricts the
              right of any party.
            </li>
          </ul>

          <p>
            {" "}
            4.8 Our platforms are not responsible in any manner whatsoever for
            how any search engine -- such as Google, Bing etc. -- caches or
            displays the comments posted by you.
          </p>

          <h2>5. Intellectual Property Rights</h2>

          <p>
            5.1 All the content, material, trademarks, service marks, trade
            names, software, text, script, images, graphics, videos, audio,
            preparation material with questions and solutions etc. contained in
            the Website, Application, Products / services are proprietary
            property of the Company (“Intellectual Property”) and protected by
            the governing laws and regulations in India.
          </p>

          <p>
            5.2 You may view, print, download or temporarily store such content
            for your personal, non-commercial reference without alteration,
            addition or deletion. You may not otherwise copy, reproduce,
            retransmit, distribute, publish, commercially exploit or otherwise
            transfer such content. You acknowledge that you will not acquire any
            intellectual property rights by downloading or otherwise using any
            such content.
          </p>

          <p>
            5.3 All other trademarks, service marks and logos used on the
            Platforms are trademarks, service marks and logos of their
            respective owners like universities, colleges, schools, educational
            service providers, organizations etc.
          </p>

          <p>
            5.4 Aadhyayan respects intellectual property rights of any third
            party. If we receive any communication with regard to any possible
            infringement of any intellectual property right of any third party,
            we shall remove the infringing content from the Platforms and
            terminate the account of the associated user.
          </p>

          <p>
            5.5 When you submit content on the Platforms, you grant us a
            royalty-free, perpetual, irrevocable, non-exclusive right and
            license to use, reproduce, modify, adapt, publish, translate, create
            derivative works from, distribute and communicate to the public such
            content.
          </p>

          <h2>6. Mobile Services</h2>

          <p>
            The subscriber availing this service shall be deemed to have
            consented to be bound by all the applicable terms and conditions of
            this service. Decision of Aadhyayan regarding all transactions under
            this service shall be final and binding and no correspondence shall
            be entertained in this regard.
          </p>

          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Your mobile phone number will be used during the transmission of
              text messages through the mobile service provider's server for SMS
              Service.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The subscriber understands that he/she can avail SMS Services at
              his/her discretion and the said service shall be availed in such
              options as are made available by Aadhyayan from time to time.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              This service is subject to guidelines/directions issued by Telecom
              Regulatory Authority of India or any other statutory authority as
              applicable from time to time.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The SMS or its contents once sent for availing the SMS services
              shall be treated as final and the same cannot be withdrawn,
              changed or retrieved subsequently under any circumstances.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              WAP Services enable you to access our Services and to submit
              and/or receive Content through your wireless Device. Your access
              to our WAP Services may be dependent on the wireless Device you
              use to access the applicable WAP services.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Aadhyayan reserves the right to modify/delete the account contents
              at its own discretion without prior notice if the contents of
              profile are deemed unfit for broadcast.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The users specifically note and agree that the content and service
              or part thereof may be varied, added, withdrawn, withheld or
              suspended by Aadhyayan at its sole discretion without prior notice
              to the users.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Aadhyayan shall not be liable for any costs, loss or damage
              (whether direct or indirect), or for loss of revenue, loss of
              profits or any consequential loss whatsoever as a result of the
              user using the Service.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              No reversal of deducted charges shall be allowed under any
              circumstances.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The users shall remain solely responsible for all content,
              information, data originated from the users and transmitted via
              the Service (content), and the users shall accordingly indemnify
              Aadhyayan and / or the Operator, against all third party claims
              relating to the users content or due to the users act, negligence
              or omission.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              You are bound by the terms and conditions as mentioned herein and
              as stated on the site.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Message delivery is conditional to Mobile operator's technical
              infrastructure and its network uptime.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              By using various SMS based services from Aadhyayan you agree to
              receive phone calls, messages etc. from Aadhyayan and/or its
              associates tailored to provide with better education related
              opportunities.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Subscribing or using various paid/free services of Aadhyayan on
              SMS/Voice/WAP either directly or indirectly doesn't in any manner
              guarantee the user an admissions.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              By agreeing to register at Aadhyayan Mobile alerts, a user allows
              Aadhyayan to get in touch with him/her from time to time on events
              or offers regarding careers, admissions, jobs and ancillary
              services on mobile. This can include exciting offers, information,
              as well as promotions.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The subscriber shall be required to comply with all
              directions/instructions etc. issued by the Company relating to the
              network, the services and any/all matters connected therewith and
              provide the Company all other and further information and
              co-operation as the Company may require from{" "}
            </li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            When we provide services, we want to make them easy, useful and
            reliable. Where services are delivered on the internet, this
            sometimes involves placing small amounts of information on your
            device, for example, computer or mobile phone. These include small
            files known as ‘cookies’. They cannot be used to identify you
            personally.
          </p>
          <p>
            These pieces of information are used to improve services for you
            through, for example:
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Enabling Aadhyayan to recognize your device so you don't have to
              give the same information several times during one task and
              presenting you with the most relevant courses, programs, reviews,
              and scholarships.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Recognizing that you may already have given a username and
              password so you don't need to do it for every web page requested,
              for example when enquiring to universities and colleges.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Measuring how many people are using our sites, so they can be made
              easier to use and there's enough capacity to ensure they are fast.
            </li>
          </ul>
          <p>
            You can manage these small files yourself and learn more about them
            through Internet browser cookies - what they are and how to manage
            them.
          </p>

          <h2>
            8. Counselling Products & Services / Test Preparation Products
          </h2>

          <p>
            8.1 Amount payable towards any of the paid products like Counseling
            products or Services, Test preparation products, Common Form etc
            will be displayed to the student before the student is making
            payment. Unless otherwise expressly mentioned, full payments towards
            any of the products or services offered by Aadhyayan shall be made
            before accessing the programs or services. It is the sole
            responsibility of the user purchasing a product or service on our
            Platform to assess the suitability and relevance of the product or
            service proposed to be purchased.
          </p>

          <p>
            8.2 We generate system-generated invoices with regard to the
            products or services purchased on our Platforms. The amount payable
            by you is inclusive of all the taxes, as applicable.
          </p>

          <p>
            8.3 If you are allowed to make the payment by using installments or
            staggered payments option, if the payment is not received within
            stipulated time periods, Aadhyayan may withdraw your access to the
            Program till the payment is made.
          </p>

          <p>
            8.4 In the event of any suspension or termination of services on
            account of non-compliance of these Terms of Use, any payment made to
            the Company by you shall stand forfeited with immediate effect.
          </p>

          <p>
            8.5 The Company shall have the right to monitor the usage of the
            e-learning / test preparation products by the user, to analyze the
            usage and to communicate with the user, seeking feedback, mentoring
            the user to enable effective and efficient usage of the application
            / products acquired by the users.
          </p>

          <p>
            8.6 It is the sole responsibility of the user enrolling into a
            program to check the accuracy of, and evaluate the suitability and
            relevance of the program elected. The enrollment into a program is
            non-transferable.
          </p>

          <p>
            8.7 To make payment for any program or to purchase any services or
            products offered through Aadhyayan platform, you must have internet
            access and a current valid accepted payment method as indicated
            during sign-up ("payment method"). Aadhyayan does not store any of
            your credit card information or such other information restricted by
            the Reserve Bank of India (RBI) for processing payment and has
            partnered with payment gateways for the payment towards the
            services. By using a third-party payment provider, you agree to
            abide by the terms of such a payment provider. You agree that in
            case Aadhyayan’s third-party payment provider stores any such
            information, Aadhyayan will not be responsible for such storage, and
            it will be solely at your discretion to allow the third party to
            store such information. Any loss of such information or any loss
            incurred by you due to the usage of such information will be solely
            a loss incurred by you, and Aadhyayan is in no way liable for any
            such losses and is neither responsible to reimburse / make good such
            losses in any manner whatsoever. You also agree to pay the
            applicable fees for the payments made through the platform.
          </p>

          <p>
            8.8 Failure to pay may result in withdrawal of your access to a
            program. Depending on where you transact with us, the type of
            payment method used and where your payment was issued, your
            transaction with us may be subject to foreign exchange fees or
            exchange rates. Aadhyayan does not support all payment methods,
            currencies or locations for payment.
          </p>
          <h2>9. Refund / Cancellation Policy</h2>
          <p>
            Amount paid towards products purchased will neither be refunded nor
            adjusted under any circumstance. Our customer service team would be
            available to address any concerns related to the product and
            services rendered by us.
          </p>
          <p>
            However, if you have purchased products under ‘guaranteed success’
            facility, the amount would be returned in case of not meeting the
            minimum guarantee promised, provided that you have engaged with the
            portal with minimum number of hours and taken up a minimum number of
            tests specified against each such package sold under such facility.
          </p>
          <p>
            For further information, please write to us at{" "}
            <a href="mailto:support@Aadhyayan.com">support@Aadhyayan.com</a>.
          </p>

          <h2>10. Applying to Educational Institutions</h2>
          <p>
            10.1 If you are applying to any college / university (Institution)
            by using ‘Common Form’ or any other mode on our Platforms, you will
            take complete responsibility for the completeness and accuracy of
            the personal and academic information submitted in the application
            form provided. You undertake and agree that the information
            submitted in the Form is factually true and correct.
          </p>
          <p>
            10.2 You understand that you will have to check the eligible
            criteria for the programs for which applications are being made and
            apply for only those Institutions which meet your requirements.
          </p>
          <p>
            10.3 You authorize Aadhyayan to share the information provided by
            you with Institutions to whom you are applying.
          </p>
          <p>
            10.4 The information submitted in ‘Common Form’ is not a complete
            application form and the Institution may contact you for additional
            information, if required.
          </p>
          <p>
            10.5 You agree to notify the Institutions to whom you have applied
            if there is any change in the information submitted in the
            Application Form.
          </p>
          <p>
            10.6 You understand that any changes in the information made after
            the application is submitted would not be shared with the
            Institutions. You need to contact the institution directly if you
            wish to change any information submitted in the Form.
          </p>
          <p>
            10.7 Applying through ‘Common Form’ or any other application form
            does not give any guarantee admission, or provide any preference in
            the application process.
          </p>
          <p>
            10.8 The Institutions for whom applications are allowed through
            ‘Common Form’ or through any other similar feature are our
            advertisers / partners and it is your responsibility to review the
            details of the Institutions and their programs before applying.
          </p>
          <h2>11. Counselling Services</h2>
          <p>
            11.1 The Counselling services and the information, recommendations,
            advices and other services provided to you on or through the
            Counselling sessions / Webinars / WhatsApp Text/Call etc. are
            intended to provide information and guidance only and do not
            constitute any commitment of performance/admission of the user in
            any manner.
          </p>
          <p>
            11.2 Aadhyayan will judiciously keep the content/information/data
            provided through the counseling services correct but does not
            guarantee that the information/data is free of errors, defects etc.
          </p>
          <p>
            11.3 Information provided by the counselors/experts through the
            counseling services would be based on the expert's analysis backed
            by data, past experience etc. Aadhyayan will not be responsible for
            the decision taken by the users on the basis of Expert
            advice/guidance.
          </p>
          <p>
            11.4 You understand that you will have to check the eligibility
            criteria for the programs for which applications are being made and
            apply for only those Institutions which meet your requirements.
          </p>

          <h2>12. Shipment Policy</h2>
          <p>
            When you are purchasing products, you have to specify the address to
            which the shipment has to be made at the time of purchase. All
            products shall be shipped to the address specified at the time of
            placing the order. You cannot change the address after the order is
            processed. In case of any change in the address, you are required to
            make a written request prior to shipment date. Any inconsistency in
            name or address may result in non-delivery of the product(s).
          </p>
          <p>
            In case a damaged product is delivered and a return request has been
            raised by you, then shipping cost shall be borne by the Company. You
            may also choose to refuse the delivery of any product that seems to
            be tampered with, opened or damaged at the time of delivery. You can
            cancel your order online before the product has been shipped. Your
            entire order amount will be refunded. Unfortunately, an order cannot
            be cancelled once the item has been shipped or delivered to you. The
            products must be returned in the same condition as delivered by the
            Company. Any products returned showing signs of any use or damage in
            any manner shall not be accepted for return. All requests for return
            of products have to be placed within 7 (seven) days from the date of
            delivery. Please note that no refunds shall be claimed or will be
            entertained post 7 days from the date of delivery.
          </p>
          <p>
            In case of all products and services, where the delivery is
            instantaneously online and is completed electronically, you cannot
            cancel the delivery. If the email id/mobile id that you have used to
            avail any such aforementioned products/services is incorrect, you
            can email us for recourse. We will attempt to restore the purchase
            of your products/services to the correct email/mobile details but do
            not guarantee the success of such a request. Please note, no such
            requests will be entertained post 7 days from the date of online
            delivery.
          </p>

          <h2>13. Indemnification</h2>
          <p>
            You agree to indemnify, defend and make good Aadhyayan, employees,
            contractors, licensors, third party suppliers, partners, from any
            claims, losses, damages, liabilities and expenses arising out of any
            use or misuse of the Platforms, infringement of intellectual
            property rights, any violation of the Term or any breach of the
            representations, warranties made herein.
          </p>

          <h2>14. Warranties and Disclaimers:</h2>
          <p>
            14.1 Aadhyayan makes reasonable efforts to ensure that the Platforms
            are safe to use and the content. You expressly understand and agree
            that your use of the platforms, the content, products and services
            is at your sole risk. All content and material on the platforms are
            provided on an AS IS and AS AVAILABLE basis. Aadhyayan expressly
            disclaims all warranties and conditions of any kind whether express
            or implied.
          </p>
          <p>
            14.2 Aadhyayan makes no warranty that the
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                The content and services are accurate, timely and error free
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>The content and
                services are uninterrupted and virus free
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                The results that may be obtained from the use of the Platforms
                including from test preparation and counselling products and
                services are accurate and reliable
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Any errors in the
                products and services will be corrected
              </li>
            </ul>
          </p>
          <p>
            14.3 Though the website has been designed with utmost care but due
            to some inevitable error quotient in human working the graphics and
            documents may have some typographical or technical errors which will
            be removed or edited from time to time as the website will be
            updated. You understand and agree that we do not guarantee the
            accuracy, relevancy or completeness of any information in or
            provided on or from our platforms. In no unprecedented or already
            occurred event, Aadhyayan and / or its Supplier/Licensor shall not
            bear any liability to any party or individual for any
            Direct/Indirect, Special or other Consequential Damages pertaining
            to the usage of websites, information on them or any other
            hyperlinked website inclusive of any limitation, lost profits,
            interruption of business, program loss or any other data loss while
            handling the information or system or otherwise even of the
            Pathfinder Group has been expressly apprised of the probability and
            possibility of such damages. Our platform is provided for the
            general information of the general public.
          </p>
          <p>
            14.4 'Aadhyayan' expressly disclaims warranties of any kind for any
            use of or any access to any of its platform, to any material,
            information, links, or content presented on its platforms, to any
            external website linked thereto, and to any material, information
            (including any software, products, or services), links, or content
            linked thereto including the implied warranties of merchantability
            and fitness for a particular purpose, and non-infringement.
            'Aadhyayan' has no control over any external website or over any
            external material, information, links, and content linked to its
            platforms. Certain jurisdictions do not permit the exclusion of
            implied warranties and the foregoing exclusions of implied
            warranties may not apply to you. There are no guarantees and no
            warranties of online availability, impressions, and click-throughs.
            The entire risk as to the performance of, or non-performance of, or
            arising out of the use of, or the access of, or the lack of access
            to our platforms, any material, information, links, or content
            presented on the platforms to any external website.
          </p>
          <h2>14. Warranties and Disclaimers:</h2>
          <p>
            14.5 Your use and participation in our platform and services are
            solely at your own risk. No advice or information, whether oral or
            written, obtained by you from our platform shall create any warranty
            not expressly made in these terms or imposed by law.
          </p>
          <p>
            14.6 We explicitly disclaim, and will not accept any responsibility
            for any of the following in respect of the sites that we link to:
            <ul>
              <li>
                <i class="fa-regular fa-circle-check"></i>Infection by computer
                viruses
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Damage caused by
                downloaded software
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Technical problems,
                failures and speed of operation
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>Libelous or illegal
                material
              </li>
              <li>
                <i class="fa-regular fa-circle-check"></i>
                The quality or truth of any material, or advice that is offered
              </li>
            </ul>
          </p>
          <p>
            14.7 Purchasing and Ordering Disclaimer: If You are making or
            planning to make any decision, whether personal or business
            decisions, based on the content on the site, you should conduct an
            independent verification before making Your important decision. In
            the case of any listings or banners displaying any content related
            to any educational products, you may contact the
            institution/individual directly. In the case of test preparation
            products or counseling products, you have to review and verify the
            offerings, and seek more details if needed before taking decision to
            purchase any product or service. All decisions made would be
            entirely Your prerogative and Aadhyayan does not claim to offer any
            advice, either legal or financial. Aadhyayan doesn't take any
            ownership, directly or indirectly towards any person whatsoever,
            with respect to banners hosted on its websites Platform by its
            customers, which are strictly in the nature of sale of space by
            websites Platform & it has not carried out any independent
            verification on the authenticity or compliance requirements, as may
            have been required under any law for the time being in force, of
            such images/ banners/ listings
          </p>

          <h2>15. Limitation of liability</h2>
          <p>
            15.1 In no event shall the Company, its affiliates, directors,
            officers, employees, partners, advertisers, licensors, suppliers or
            agents be liable to You or any third party for any special,
            incidental, indirect, consequential, punitive or exemplary damages
            whatsoever, including those resulting from loss of use, data or
            profits or any other claim arising out, of or in connection with,
            your use of, or access to the Platforms
          </p>
          <p>
            15.2 Except as required by law, we will not be liable for any direct
            losses or damages arising in contract, tort (including negligence)
            and for any reason.
          </p>
          <p>
            15.3 Except as required by law, we shall not be liable for any
            indirect, incidental, special or consequential losses or damages or
            loss of profits, data, goodwill or revenue. We shall also not be
            liable in each case regardless of whether such losses or damages
            arise in the normal course of events or whether we have been advised
            of the possibility of such damages and whether such losses or
            damages arise in contact or tort (including negligence) and for any
            reason.
          </p>
          <p>
            15.4 Our platforms bear no responsibility for any accident, injury
            or loss of life to any individual or group of people resulting from
            accessing the information hosted on its network of websites
          </p>

          <h2>16. Governing Law</h2>
          <p>
            The terms and conditions shall be governed by and construed in
            accordance with laws in force in India. Any disputes arising here
            from shall be subject exclusively to the jurisdiction of the courts
            of law in Delhi, India.
          </p>
          <p>
            You acknowledge that you have read and accept these terms and
            conditions. If you do not agree to these terms and conditions, you
            may choose not to become a user of our Platforms.
          </p>
          <p>
            For further information, please write to us at
            aadhyayan@aadhyayan.com
          </p>
          <p style={{ fontWeight: "bold" }}>
            Copyright © 2023 Pathfinder Publishing Private Ltd. All rights
            reserved.
          </p>

          <h2>Our comment policy</h2>
          <p>
            We at Aadhyayan.com welcome your feedback to our qna/career/ course
            reviews, advisories and other articles featured by us. But do keep
            the following pointers in mind before posting a comment:
          </p>
          <p>
            1. Please keep your comments/feedback/queries limited to the subject
            matter of the article you are responding to. Please note that our
            comments section is not a general free-for-all. It is for feedback
            to articles and relevant queries posted on the site. Please try and
            keep your comments concise and clear. Short messages tend to get
            noticed and also have a high probability of getting published in our
            respective print magazines.
          </p>
          <p>
            2. Please do not spam us. Please do not post the same message again
            and again. Even in different threads.
          </p>
          <p>
            3. Scathing, passionate, even angry, critique is welcome; abuse and
            invective are not. We request civility and urge our readers to try
            and express their disagreements, if any, without being disagreeable.
            There is just no space for personal attacks. No ad hominem, please.
          </p>
          <p>
            4. If any of the above three conditions are violated, we reserve the
            right to delete any comment that we deem objectionable and/or also
            to withdraw posting privileges from the abuser(s). Please note that
            it may not be possible for our moderators to sift through your
            messages and if they find more than one instance of abuse, they may
            decide to delete all your messages ever posted by you rather than
            spend time trying to locate all the abusive ones. Therefore, if you
            want us to take you seriously and for your messages to be retained
            on the site, please ensure that you do not cross the civil lines of
            propriety.
          </p>
          <p>
            Please note that hate-speech is punishable by law and in extreme
            circumstances, we may be forced to take legal action by tracing the
            IP addresses of the poster.
          </p>
          <p>
            Our endeavor is to keep these forums unmoderated and unexpurgated.
            Please help us help you.
          </p>
          <p>
            5. If someone is being abusive or personal, or generally being a
            troll or a flame-baiter, please do not stoop to their level. The
            best response to such posters is to ignore them and send us a
            message with links to the offending mails at the following email
            address:{" "}
            <a href="mailto:Editor@Aadhyayan.com">
              Editor At Aadhyayan DOT com
            </a>
            . Please put "COMPLAINT" in the subject header of your mail.
          </p>
          <p>
            6. Please do not copy and paste copyrighted material. If you think
            that an article on another site has relevance to the point you wish
            to make, please only quote what is considered "fair-use" and provide
            a link to the article under question.
          </p>
          <p>
            7. There is no particular Aadhyayan.com line on any subject. The
            views expressed in our columns are those of the author concerned and
            do not necessarily reflect the views of Aadhyayan.com.
          </p>
          <p>
            8. Please also note that the sole responsibility for the comments
            posted on the site is that of the relevant user posting the comment.
            The comments could be deleted or edited entirely at our discretion
            if we find them objectionable. However, the mere fact of a comment's
            existence on our site does not mean that we necessarily approve of
            its contents. Aadhyayan.com however, retains the right to publish
            any of these comments, with or without editing, in any medium
            whatsoever.
          </p>
          <p>
            9. 9. Aadhyayan.com is not responsible in any manner whatsoever for
            how any search engine -- such as Google, Bing etc -- caches or
            displays the comments posted by you. Please note that you are solely
            responsible for posting these comments and it is a privilege being
            granted to our registered users which can be withdrawn in case of
            abuse. To reiterate:{" "}
          </p>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Comments once posted can only be deleted at the discretion of
              Aadhyayan.com
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The comments reflect the views of the authors and not of
              Aadhyayan.com
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Aadhyayan.com is not responsible in any manner whatsoever for the
              way search engines cache or display these comments
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Please, therefore, take due caution before you post any comments
              as your words could potentially show up on search engines such as
              Google, Bing etc.
            </li>
          </ul>
          <h2>What is Aadhyayan QnA</h2>
          <p>
            Aadhyayan’s QnA is a user-generated question and answer platform
            that helps students in making informed career decisions.
          </p>
          <p>
            Our mission is to bring great ideas, students, and resources
            together. We seek to achieve this mission by creating the best
            education platform on the internet for any given question related to
            careers, exam preparation, college admission etc. so that students
            can make the choices that are right for them.
          </p>

          <h2>How to Use</h2>
          <p>Ask questions when you have them</p>
          <ol>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Questions should be written to retain reusable information and
              provide helpful answers to similar questions.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Questions need to be a
              maximum of 140 characters long.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Make sure the question is tagged with all the relevant topics.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Write a brief description (this is optional) as it helps others
              understand your question.
            </li>
          </ol>

          <p>Answer a question</p>
          <ol>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Good answers are helpful to both the original poster of the
              question and to others who have the same question in future.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Your opinion matters.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Upvote/downvote –
              Answers are rated by visitors.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Comment on an answer to
              reply/post your opinion.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>Follow Topics
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              When you follow a topic, questions and answers tagged with that
              topic will appear in QnA feed.
            </li>
          </ol>

          <h2>Do’s</h2>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>Post questions related
              to education and career.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Be clear and concise when asking a question. Try avoiding chat
              lingo.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Ensure that your write-up is easy to read, meaningful and
              informative.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              The answer is helpful when credible and sincerely addresses the
              question that was asked.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Answer a question so that others benefit from your knowledge,
              opinions, or personal experiences.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Assume that other people have their own knowledge/background. Be
              respectful and considerate when commenting on an answer.
            </li>
          </ul>

          <h2>Don’ts</h2>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Promote Business - It is prohibited to use Aadhyayan QnA platform
              for promoting business interest, self-promotion, advertisement and
              spamming members.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Duplicate/False Content - Before posting any new
              question/answer/comment, please see if the same has already been
              posted. You can quickly scroll through the answers to see if your
              query is answered in them. If not, go ahead and drop your
              question. Please don't exaggerate or falsify an answer.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Copyright and Intellectual Property - Posting of copyrighted
              material is strictly prohibited. Do not post content that
              infringes any intellectual property right of another party.
              Writing taken from another source should be properly attributed
              and block quoted. You can cite the same as a source and use the
              web link to direct the community members to the original source.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Hate Speech - Keep foul/abusive/hateful language, threats, and
              lewdness out of your question/answer/comment. QnA is a place for
              civil discourse and does not tolerate content that attacks or
              disparages an individual or group based on race, gender, religion,
              nationality, political group or another similar characteristic.
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              Sexually Explicit Material - Adult Content is NOT allowed on
              Aadhyayan QnA. Profile photos should not contain nudity or
              sexually explicit material.
            </li>
          </ul>

          <h2>Moderation</h2>
          <p>
            There are few community members who care about the quality of
            content on Aadhyayan QnA and fulfilling the mission to make it a
            great resource for students. You as our passionate platform user can
            help us in moderation by joining us to keep an eye out on our site
            as well.
          </p>

          <h2>Violation of Guidelines</h2>
          <p>
            Any violation of these QnA guidelines may lead to the restriction,
            suspension, or termination of your account at the sole discretion of
            Aadhyayan.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Termscond;
