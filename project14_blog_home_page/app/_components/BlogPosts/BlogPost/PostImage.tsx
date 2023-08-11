interface IPostImage {
  imageUrl: string;
  category: string;
}
import React from "react";
import Image from "next/image";
import { GradientButton } from "../../UI/GradientButton";
import { BsImage } from "react-icons/bs";
export const PostImage: React.FC<IPostImage> = ({ imageUrl, category }) => {
  return (
    <div className="relative">
      <div className="w-full  rounded-lg overflow-hidden cursor-pointer ">
        <div className="absolute top-5 left-5 z-50">
          <GradientButton>{category}</GradientButton>
        </div>
        <Image
          src="/images/post-placeholder.jpg"
          width={800}
          height={600}
          alt="decorative header post image "
          className="w-full object-cover  hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute bottom-[-20px] right-[32px] ">
        <GradientButton>
          <div className="p-[.3rem] md:p-[.5rem]">
            <BsImage className="w-[16px] h-[16px] md:w-[24px] md:h-[24px]" />
          </div>
        </GradientButton>
      </div>
    </div>
  );
};
