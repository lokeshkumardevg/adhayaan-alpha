import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseShow: true,
};

export const showCourse = createSlice({
  name: "displaycourse",
  initialState,
  reducers: {
    showcoursevalue: (state) => {
      state.courseShow = true;
    },
    hidecoursevalue: (state) => {
      state.courseShow = false;
    },
    togglecoursevalue: (state) => {
      state.courseShow = !state.courseShow;
    },
   
  },
});

export const { showcoursevalue, hidecoursevalue, togglecoursevalue } = showCourse.actions;
export default showCourse.reducer;
