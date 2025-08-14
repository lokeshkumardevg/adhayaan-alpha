// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Footer from "./components/Layout/Footer/Footer";
// import Header from "./components/Layout/Header/Header";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFOund/PageNotFound";
import SearchPage from "./components/SearchBox/SearchPage";
import { Toaster } from "react-hot-toast";
import PrivateRouteInstitute from "./components/PrivateRouteInstitute";
import BecomePartner from "./components/BecaomePartner/BecomePartner";
import Faq from "./components/Faq/Faq";
import PartnerPageFirst from "./components/PartnerPages/PartnerPageFirst";
import PartnerShipSecond from "./components/PartnerPages/PartnerShipSecond";
import Page from "./components/PartnerPages/Page";
// import PartnerForm from "./components/Input-Form/PartnerForm";
import SuccessfullyPage from "./components/SuccessfullPage/SuccessfullyPage";
// import SignInPageFive from "./components/Sign in/SignInPageFive";
import SignInPageFirst from "./components/Sign in/SignInPageFirst";
import SignInPageSecond from "./components/Sign in/SignInPageSecond";
import SignInPageTh from "./components/Sign in/SignInPageTh";
import SignInPageFo from "./components/Sign in/SignInPageFo";
import Aboutus from "./components/About/Aboutus";
import Contact from "./components/Contact/Contact";
import SignInSix from "./components/Sign in/SignInSix";
import SignIn7 from "./components/Sign in/SignIn7";
// import Practice from "./components/Sign in/Practice";
import SignInPage from "./components/Sign in/SignInPage";
import CoursePage from "./components/Course-Details_pages/CoursePage";
import Stream from "./components/Stream-Details-page/Stream";
import Patnerform from "./components/Input-Form/Patnerform";
import Loder from "./components/Loder-page/Loder";
import SiginInPageFile from "./components/Sign in/SiginInPageFile";
import Input from "./components/Input-box/Input";
// import SignInPageFivee from "./components/Sign in/SignInPageFivee";
// import Practice from "./components/Sign in/Practice";
import Privacypolicy from "./components/Privacy/Privacypolicy";
import Courses from "./components/Courses/Courses";
import NeedHelp from "./components/NeedHelp/NeedHelp1";
import UserDetails from "./components/User_details_page/UserDetails";
import SignInPages from "./components/Sign in/SignInPages";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
import Dashboard from "./components/Dashboard/Dashboard";
import ProfileEdit from "./components/Profile-Edit/ProfileEdit";
import Loding from "./components/Loder/Loding";
import PrivetRoute from "./components/Route/PrivetRoute";
// import CoursePage2 from "./components/Course-Details_pages/CoursePage2";
import Dashboardheader from "./components/DashiboardHeader/Dashboardheader";
import { useEffect } from "react";
import SignInAgain from "./components/Sign in/SignInAgain";
import GiftForm from "./components/Gift-page/GiftForm";
import GiftConfirm from "./components/Gift-page/GiftConfirm";
import Termscond from "./components/Terms/Termscond";
import CareerOpportunities from "./components/Carrer/Carrer/CareerOpportunities";
import Foundation from "./components/Carrer/Carrer/Foundations";
import ErrorPage from "./components/ThankYouPage/ErrorPage";
import Blogpage from "./components/Latest news/Blogpage";
import SelectCourse from "./components/Select-Course/SelectCourse";
import UserDetail from "./components/User_details_page/UserDetail";
import Grievance from "./components/Grievance/Grievance";
import Pdf from "./components/Dashboard/Pdf";
import One from "./components/One";
import Practice from "./components/Practice";
import Password from "./components/Reset-Password/Password";
import NewLatest from "./components/Latest news/NewLatest";
import SecondDash from "./components/Dashboard/SecondDash";
import Proute from "./components/Route/Proute";
import InstitutionRegisterPage from "./components/registerInstitute/InstitutionRegisterPage";
import InstitutionLandingPage from "./components/registerInstitute/InstitutionLandingPage";
import InstitutionAccountForm from "./components/registerInstitute/InstitutionAccountForm";
import DashboardNew from "./components/registerInstitute/dashboard/DashboardNew";
import InstitutionSignInPage from "./components/registerInstitute/auth-institute/InstitutionSignInPage";
import ProfileView from "./components/registerInstitute/profile-section/profile-view-section/ProfileView";
import TutorProfileView from "./components/registerInstitute/profile-section/profile-view-section/TutorProfileView";
// import Carousel from "./components/Latest news/Carousel"
// import News from "./components/Latest news/News";
// import Free from "./components/Free";
function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });
  const handleContextMenu = (e) => {
    e.preventDefault();
    // alert("Right click is disabled");
  };

  
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            zIndex: "9229999994353",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/searchpage" element={<SearchPage />} />
        {/* <Route path="/becomepartner" element={<BecomePartner />} /> */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/become-a-partner" element={<PartnerPageFirst />} />
        <Route path="/partnership-plan" element={<PartnerShipSecond />} />
        <Route path="/get-started" element={<Page />} />
        <Route path="/apply-now" element={<Patnerform />} />
        {/* <Route path="/form" element={<PartnerForm />} /> */}
        <Route path="/successfully" element={<SuccessfullyPage />} />
        <Route path="/sign-up" element={<SignInPageFirst />} />
        <Route path="/create-password" element={<SignInPageSecond />} />
        <Route path="/verify-email" element={<SignInPageTh />} />
        <Route path="/choose-course" element={<SignInPageFo />} />
        {/* <Route path="/sign-in-5" element={<SignInPageFive />} /> */}
        <Route path="/select-course" element={<SignInPages />} />
        <Route path="/select-another-course" element={<SelectCourse />} />
        <Route path="/personal-information" element={<SignInSix />} />
        <Route path="/additional-information" element={<SignIn7 />} />
        <Route path="/about" element={<Aboutus />} />
        {/* <Route path="/practice-s" element={<Practice/>}/> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<Proute />}>
          <Route path="user" element={<SignInPage />} />
        </Route>
        <Route path="/course-details/:id" element={<CoursePage />} />
        {/* <Route path="/course-details-2/:id" element={<CoursePage2 />} /> */}
        {/* <Route path="/course-details/:name" element={<CoursePage />} /> */}
        <Route path="/courses/:course_type_id" element={<Courses />} />
        <Route path="/stream/:id" element={<Stream />} />
        <Route path="/blog/:id" element={<Blogpage />} />
        <Route path="/practice" element={<One />} />
        <Route path="/loder" element={<Loder />} />
        <Route path="/si" element={<SiginInPageFile />} />
        <Route path="/input" element={<Input />} />
        <Route path="/privacy-policy" element={<Privacypolicy />} />
        <Route path="/Needhelp" element={<NeedHelp />} />
        <Route path="/confirmation" element={<UserDetails />} />
        <Route path="/another-confirmation" element={<UserDetail />} />
        {/* <Route path="/extra" element={<SignInPages />} /> */}
        <Route path="/thank-you-page" element={<ThankYouPage />} />
        <Route path="/dashboard" element={<PrivetRoute />}>
          <Route path="user" element={<Dashboard />} />
          {/* <Route path="user-2" element={<SecondDash />} /> */}
        </Route>
        <Route path="/profile-edit" element={<ProfileEdit />} />
        <Route path="/loding" element={<Loding />} />
        <Route path="/loder" element={<Loder />} />
        <Route path="/dashboard-header" element={<Dashboardheader />} />
        {/* <Route path="/again" element={<SignInAgain />} /> */}
        <Route path="/term-condition" element={<Termscond />} />
        <Route path="/gift-form" element={<GiftForm />} />
        <Route path="/gift-conform" element={<GiftConfirm />} />
        <Route path="/career-opportunities" element={<CareerOpportunities />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/Error" element={<ErrorPage />} />
        <Route path="grievance" element={<Grievance />} />
        <Route path="/pages" element={<Practice />} />
        <Route path="/forget-passwrd" element={<Password />} />
        <Route path="/dash" element={<Dashboardheader />} />
        {/* regoster institute */}
        <Route path="registerInstitute" element={<InstitutionLandingPage/>}></Route>
         <Route path="institutedetails" element={<InstitutionAccountForm/>}></Route>
  
        <Route path="/login-institute" element={<InstitutionSignInPage/>}></Route>
        <Route path="/tutorProfileView" element={<TutorProfileView/>}></Route>
        {/* 🔒 Protected Institute Routes */}
<Route element={<PrivateRouteInstitute />}>
  <Route path="/dashboardnew" element={<DashboardNew />} />
  <Route path="/profile-view" element={<ProfileView />} />
</Route>
        
      </Routes>
    </>
  );
}
export default App;
