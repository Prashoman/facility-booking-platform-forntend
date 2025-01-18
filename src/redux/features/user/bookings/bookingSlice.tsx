import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payload: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setPayload: (state, action) => {
      state.payload = action.payload;
    },
  },
});

export const { setPayload } = bookingSlice.actions;
export default bookingSlice.reducer;
