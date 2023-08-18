import { createSlice } from "@reduxjs/toolkit";
import { IPosts } from "../../types/posts.t";

const initialState: IPosts = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state) => {
      state.posts.push({
        title: `test ${new Date().toLocaleDateString}`,
        id: Math.random().toString(),
        completed: false,
      });
    },
  },
});

export const { addPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
