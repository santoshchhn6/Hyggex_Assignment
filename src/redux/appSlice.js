import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { shouldRedirect: true },
  reducers: {
    setShouldRedirect(state, action) {
      state.shouldRedirect = action.payload;
    },
  },
});

export const { setShouldRedirect } = appSlice.actions;
export default appSlice;
