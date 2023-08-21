import React from "react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  BsDistributeHorizontal,
  BsFillBuildingsFill,
  BsFillPersonLinesFill,
} from "react-icons/bs";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SidebarNavItem } from "./SidebarNavItem";
import { FiLogOut } from "react-icons/fi";
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
    <div className="h-full pl-2 py-2 flex flex-col justify-between ">
      <ul className=" flex flex-col gap-2">
        {MAIN_NAVIGATION.map((navItem) => {
          return <SidebarNavItem key={navItem.name} navItem={navItem} />;
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            console.log("logout user");
          }}
          className="flex items-center px-4 py-2 w-full max-w-[150px] gap-2 hover:bg-primary/90 hover:text-base-100 rounded-md"
        >
          <span>
            <FiLogOut />
          </span>{" "}
          Log Out
        </button>
      </div>
    </div>
  );
};
