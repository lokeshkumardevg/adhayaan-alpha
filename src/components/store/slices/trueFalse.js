import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  valueShow: "study-matarial",
};

export const trueFalse = createSlice({
  name: "truefalse",
  initialState,
  reducers: {
    showvalue: (state) => {
      state.valueShow = "study-matarial";
    },
    hidevalue: (state) => {
      state.valueShow = "earn-monye";
    },
    resetPasswordShow: (state) => {
      state.valueShow = "reset-password";
    },
    togglevalue: (state) => {
      state.valueShow = !state.valueShow;
    },
  },
});

export const { showvalue, hidevalue, togglevalue ,resetPasswordShow} = trueFalse.actions;
export default trueFalse.reducer;
