import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueZindexShow: true,
};

export const zindexShow = createSlice({
  name: "zindexshow",
  initialState,
  reducers: {
    showvaluezindex: (state) => {
      state.valueZindexShow = true;
    },
    hidevaluezindexshow: (state) => {
      state.valueZindexShow = false;
    },
    togglevaluezindexshow: (state) => {
      state.valueZindexShow = !state.valueZindexShow;
    },
  },
});

export const { showvaluezindex, hidevaluezindexshow, togglevaluezindexshow } =
  zindexShow.actions;
export default zindexShow.reducer;
