import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./feauteres/posts.slice";
import { notesReducer } from "./feauteres/notes.slice";
export default configureStore({
  reducer: {
    posts: postsReducer,
    notes: notesReducer,
  },
});
