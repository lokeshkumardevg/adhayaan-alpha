import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hide: false,
};

export const sideNavSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    shownav: (state) => {
      state.hide = true;
    },
    hidenav: (state) => {
      state.hide = false;
    },
    toggleNav: (state) => {
      state.hide = !state.hide;
    },
  },
});

export const { shownav, hidenav, toggleNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;
