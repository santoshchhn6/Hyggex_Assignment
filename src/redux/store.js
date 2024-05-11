import { configureStore } from "@reduxjs/toolkit";
import flashcardSlice from "./flashcardSlice";

const store = configureStore({
  reducer: {
    flashcard: flashcardSlice.reducer,
  },
});

export default store;
