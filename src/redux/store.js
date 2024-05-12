import { configureStore } from "@reduxjs/toolkit";
import flashcardSlice from "./flashcardSlice";
import appSlice from "./appSlice";

const store = configureStore({
  reducer: {
    flashcard: flashcardSlice.reducer,
    app: appSlice.reducer,
  },
});

export default store;
