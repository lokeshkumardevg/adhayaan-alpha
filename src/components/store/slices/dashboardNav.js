import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardMenuShow: true,
};

export const dashboardNav = createSlice({
  name: "dashboardmenushow",
  initialState,
  reducers: {
  dshboardnave:(state)=>{
      state.dashboardMenuShow = false;
    },
    navmenudashboard:(state)=>{
    state.dashboardMenuShow = true
    }
  },
  
});

export const { dshboardnave,navmenudashboard} = dashboardNav.actions;
export default dashboardNav.reducer;
