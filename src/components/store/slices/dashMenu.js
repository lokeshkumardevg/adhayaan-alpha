import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashMenuShow: false,
};

export const dashMenu = createSlice({
  name: "dashnave",
  initialState,
  reducers: {
    dashnave: (state) => {
      state.dashMenuShow = false;
    },
    navmenudash: (state) => {
      state.dashMenuShow = true;
    },
    toggledashnav:(state)=>{
        state.dashMenuShow =!state.dashMenuShow
    }
  },
});

export const { dashnave, navmenudash ,toggledashnav} = dashMenu.actions;
export default dashMenu.reducer;
