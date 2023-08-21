import Link from "next/link";
import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
export const SettingsButton = () => {
  return (
    <Link href="/settings" className="hover:text-primary">
      <AiOutlineSetting size={18} />
    </Link>
  );
};
