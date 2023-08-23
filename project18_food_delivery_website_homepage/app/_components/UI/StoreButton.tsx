import React from "react";
interface IStoreButton {
  bgColor?: string;
  children: React.ReactNode;
  path: string;
}
export const StoreButton: React.FC<IStoreButton> = ({
  children,
  bgColor,
  path,
}) => {
  return (
    <a
      href={path}
      className={`block w-fit ${
        bgColor ? bgColor : "bg-base-200"
      } p-4 shadow-md`}
    >
      {children}
    </a>
  );
};
