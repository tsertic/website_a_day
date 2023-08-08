interface IButton {
  children: React.ReactNode;
  onClickF?: () => void;
  href: string;
}
import React from "react";

export const Button: React.FC<IButton> = ({ children, onClickF, href }) => {
  if (onClickF !== undefined) {
    return (
      <a
        href={href}
        onClick={onClickF}
        className=" font-inconsolata py-[12px] px-[16px] text-btn text-primary bg-transparent border-[1px] border-primary inline-block rounded-sm hover:bg-primary/10"
      >
        {children}
      </a>
    );
  } else {
    return (
      <a
        href={href}
        onClick={onClickF ? onClickF : () => {}}
        className=" font-inconsolata py-[12px] px-[16px] text-btn text-primary bg-transparent border-[1px] border-primary inline-block rounded-sm hover:bg-primary/10"
      >
        {children}
      </a>
    );
  }
};
