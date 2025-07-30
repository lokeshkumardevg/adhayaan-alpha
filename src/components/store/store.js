import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import sideNavSlice from "./slices/sideNavSlice";
import isLogIn from "./slices/isLogIn";
import trueFalse from "./slices/trueFalse";
import showCourse from "./slices/showCourse";
import dashboardNav from "./slices/dashboardNav";
import dashMenu from "./slices/dashMenu";
import headerMenuNav from "./slices/headerMenuNav";
import zindexShow from "./slices/zindexShow";

export const store = configureStore({
  reducer: {
    counter: navSlice,
    nav: sideNavSlice,
    loggedin: isLogIn,
    truefalse: trueFalse,
    displaycourse: showCourse,
    dashboardmenushow: dashboardNav,
    dashnave: dashMenu,
    headersmenusnavs: headerMenuNav,
    zindexshow: zindexShow,
  },
});
