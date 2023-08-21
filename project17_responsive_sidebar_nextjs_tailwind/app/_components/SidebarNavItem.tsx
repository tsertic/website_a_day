import React from "react";
import { INavItem } from "../_types/types.t";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BiRightArrow } from "react-icons/bi";
export const SidebarNavItem: React.FC<{ navItem: INavItem }> = ({
  navItem,
}) => {
  const { path, name, icon } = navItem;
  const pathname = usePathname();

  return (
    <li className="group max-w-[150px] py-2 px-4 hover:bg-primary/90 hover:text-base-100 rounded-md">
      <Link href={path} className="relative flex gap-3 items-center capitalize">
        {pathname === navItem.path && (
          <span className="absolute left-[-15px]">
            <BiRightArrow className="text-primary w-[10px] block" />
          </span>
        )}
        <span>{icon}</span>
        {name}
      </Link>
    </li>
  );
};
