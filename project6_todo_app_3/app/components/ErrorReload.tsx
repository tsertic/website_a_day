"use client";
interface IErrorReload {
  message: string;
}
import React from "react";
import { useRouter } from "next/navigation";
export const ErrorReload: React.FC<IErrorReload> = ({ message }) => {
  const router = useRouter();
  const handleRefresh = () => {
    router.refresh();
  };
  return (
    <div className="text-center">
      <h3 className="text-error">{message}</h3>
      <button className="btn" onClick={handleRefresh}>
        Try refresh
      </button>
    </div>
  );
};
