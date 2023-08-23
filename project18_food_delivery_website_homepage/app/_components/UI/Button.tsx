import Link from "next/link";
import React from "react";
interface IButton {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
export const Button: React.FC<IButton> = ({ children, href, onClick }) => {
  if (href) {
    return <Link href={href}>{children}</Link>;
  }
  if (onClick) {
    return <button onClick={onClick}>{children}</button>;
  }
  return (
    <button className="rounded-[30px] bg-primary text-primary-content px-[20px] py-[10px] text-[1rem] shadow-sm hover:scale-105 transition-all duration-100 font-semibold">
      {children}
    </button>
  );
};
