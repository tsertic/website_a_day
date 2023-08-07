interface IButton {
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}
import React from "react";

export const Button: React.FC<IButton> = ({ children, href, onClick }) => {
  return (
    <a
      className="px-[32px] py-[8px] bg-primary text-primary-content cursor-pointer inline-block rounded-[4px] text-btn capitalize"
      href={href}
    >
      {children}
    </a>
  );
};
