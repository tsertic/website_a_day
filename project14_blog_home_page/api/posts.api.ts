import { IPost } from "@/types/posts.type";
import axios from "axios";

const postsApi = axios.create({
  baseURL: "http://127.0.0.1:5678/posts",
});

export const getPosts = async (): Promise<IPost[]> => {
  const res = await postsApi.get("");
  return res.data;
};

export default postsApi;
