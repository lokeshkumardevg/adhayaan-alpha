import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hadernavshowmenu: false,
};

export const headerMenuNav = createSlice({
  name: "headersmenusnavs",
  initialState,
  reducers: {
    dashnavemenushow: (state) => {
      state.hadernavshowmenu = false;
    },
    navmenudashshow: (state) => {
      state.hadernavshowmenu = true;
    },
    toggledashnavshow: (state) => {
      state.hadernavshowmenu = !state.hadernavshowmenu;
    },
  },
});

export const { dashnavemenushow, navmenudashshow, toggledashnavshow } =
  headerMenuNav.actions;
export default headerMenuNav.reducer;
