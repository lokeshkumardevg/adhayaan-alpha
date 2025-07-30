import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

export const navSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.show = true;
    },
    decrement: (state) => {
      state.show = false;
    },
    incrementByAmount: (state, action) => {
      state.show =!state.show
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = navSlice.actions;

export default navSlice.reducer;
