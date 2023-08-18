import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./feauteres/counter.slice";
import { postsReducer } from "./feauteres/posts.slice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
