import { createSlice } from "@reduxjs/toolkit";

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState: { expanded: false },
  reducers: {
    setExpanded(state, action) {
      state.expanded = action.payload;
    },
  },
});

export const { setExpanded } = flashcardSlice.actions;
export default flashcardSlice;
