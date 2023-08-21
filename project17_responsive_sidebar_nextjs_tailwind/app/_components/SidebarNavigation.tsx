import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  BsDistributeHorizontal,
  BsFillBuildingsFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SidebarNavItem } from "./SidebarNavItem";
export const MAIN_NAVIGATION = [
  {
    name: "dashboard",
    path: "/",
    icon: <BiSolidDashboard />,
  },
  {
    name: "distrubutor",
    path: "/distrubutor",
    icon: <BsDistributeHorizontal />,
  },
  {
    name: "analytics",
    path: "/analytics",
    icon: <IoAnalyticsSharp />,
  },
  {
    name: "capital",
    path: "/capital",
    icon: <BsFillBuildingsFill />,
  },
  {
    name: "personel",
    path: "/personel",
    icon: <BsFillPersonLinesFill />,
  },
];
export const SidebarNavigation = () => {
  return (
    <ul className="pl-2 flex flex-col gap-2">
      {MAIN_NAVIGATION.map((navItem) => {
        return <SidebarNavItem key={navItem.name} navItem={navItem} />;
      })}
    </ul>
  );
};
