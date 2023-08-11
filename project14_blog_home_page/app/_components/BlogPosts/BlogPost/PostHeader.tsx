interface IPostHeader {
  author: string;
  date: string;
}
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
export const PostHeader: React.FC<IPostHeader> = ({ author, date }) => {
  console.log(author.replace(" ", "-").toLowerCase);
  const formatedDate = format(new Date(date), "dd MMMM yyyy");
  return (
    <ul className="flex gap-[22px] items-center text-sm  text-base-300  ">
      <li className="">
        <a
          href="#"
          className="flex flex-row items-center gap-[12px] hover:text-primary"
        >
          <div className=" w-[24px] h-[24px]">
            <Image
              src={`/images/${author.replace(" ", "-").toLowerCase()}.png`}
              width={32}
              height={32}
              alt={author}
              className="rounded-[50%] w-full h-full object-fill "
            />
          </div>
          {author}
        </a>
      </li>
      <li className="block w-[3px] h-[3px] bg-primary rounded-full"></li>
      <li>{formatedDate}</li>
    </ul>
  );
};
