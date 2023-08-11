import React from "react";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoTelegram,
  BiMailSend,
} from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
export const PostFooter = () => {
  return (
    <footer className="py-[20px] flex justify-between items-center">
      <nav>
        <ul className="flex gap-[10px] ">
          <li>
            <a href="#">
              <BiLogoFacebook
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>

          <li>
            <a href="#">
              <BiLogoTwitter
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoLinkedin
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoPinterest
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogoTelegram
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <BiMailSend
                className="text-base-content/50 text-md hover:text-base-content"
                cursor="pointer"
              />
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="#"
        className="font-bold flex items-center group justify-between text-md gap-[10px]"
      >
        Continue reading
        <span>
          <IoIosArrowForward className="group-hover:translate-x-3 transition-all duration-500 text-base-content/50" />
        </span>
      </a>
    </footer>
  );
};
