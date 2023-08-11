interface IBlogPost {
  post: IPost;
}
import { IPost } from "@/types/posts.type";
import React from "react";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";

export const BlogPost: React.FC<IBlogPost> = ({ post }) => {
  const { title, id, author, date, category } = post;
  return (
    <article className="max-w-[860px] w-full mx-auto px-2">
      <div className="max-w-[670px] w-full mx-auto mb-[40px]">
        <PostHeader author={author} date={date} />
        <h1 className="mt-[24px] text-title hover:text-primary cursor-pointer font-poppins">
          {title}
        </h1>
      </div>
      <PostImage imageUrl="/" category={category} />
    </article>
  );
};
