"use client";
import { getPosts } from "@/api/posts.api";
import React from "react";
import { useQuery } from "react-query";
import { BlogPost } from "./BlogPost/BlogPost";
export const BlogPostList = () => {
  const { isLoading, isError, data: posts } = useQuery("posts", getPosts);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {posts &&
        posts.map((post) => {
          return <BlogPost post={post} key={post.id} />;
        })}
    </div>
  );
};
