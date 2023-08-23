interface INavMobileModal {
  showModal: boolean;
  closeModal: () => void;
}
import Image from "next/image";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { NavListMobile } from "./NavListMobile";
import Link from "next/link";
export const NavMobileModal: React.FC<INavMobileModal> = ({
  showModal,
  closeModal,
}) => {
  return (
    <nav
      className={`fixed left-0   bg-gradient-to-r
      from-primary
      via-primary-200
      to-primary
      background-animate  ${
        showModal
          ? "top-0  w-screen h-screen"
          : "top-[-200%] bg-base-200 w-screen h-screen"
      }  md:hidden  transition-all duration-500  z-40`}
    >
      <button
        onClick={() => closeModal()}
        className="absolute text-primary-content right-[3%] top-[3%]"
      >
        <AiOutlineClose size={32} />
      </button>
      <div className="w-[200px] max-w-full mx-auto h-full flex flex-col items-center pt-[50px]">
        <Image
          src="/logo.svg"
          width={42}
          height={42}
          alt="company logo"
          className="mb-10"
        />
        <NavListMobile />
        <div className="flex flex-col w-full pl-7 mt-16 text-primary-content uppercase gap-3">
          <Link href={"#"}>Login</Link>
          <Link href={"#"}>Signup</Link>
        </div>
      </div>
    </nav>
  );
};
