interface IBlogPost {
  post: IPost;
}
import { IPost } from "@/types/posts.type";
import React from "react";
import { PostHeader } from "./PostHeader";
import { PostImage } from "./PostImage";
import { PostFooter } from "./PostFooter";

export const BlogPost: React.FC<IBlogPost> = ({ post }) => {
  const { title, id, author, date, category, short_preview } = post;
  return (
    <article className="max-w-[860px] w-full mx-auto px-2 mb-[60px] md:mb-[140px]">
      <div className="max-w-[670px] w-full mx-auto mb-[40px]">
        <PostHeader author={author} date={date} />
        <h1 className="mt-[24px] text-title hover:text-primary cursor-pointer font-poppins">
          {title}
        </h1>
      </div>
      <PostImage imageUrl="/" category={category} />
      <div className=" max-w-[670px] mx-auto">
        <p className="text-base-content/70  border-b-[1px] border-base-content/10 shadow-sm p-[50px]">
          {short_preview}...
        </p>
        <PostFooter />
      </div>
    </article>
  );
};
