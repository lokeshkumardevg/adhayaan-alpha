import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggIn: false,
};

export const isLoggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    logInShowNav: (state) => {
      state.loggIn = true;
    },
  },
});

export const { logInShowNav } = isLoggedInSlice.actions;
export default isLoggedInSlice.reducer;
