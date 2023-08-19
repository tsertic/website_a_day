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
        title: `test ${Math.random() * 20}`,
        id: Math.random().toString(),
        completed: false,
      });
    },
    deletePost: (state, action) => {
      const id = action.payload;
      const updatedPosts = state.posts.filter((post) => post.id !== id);
      state.posts = updatedPosts;
    },
  },
});

export const { addPost, deletePost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
