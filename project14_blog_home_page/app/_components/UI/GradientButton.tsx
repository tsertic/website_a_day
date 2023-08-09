import React from "react";

export const GradientButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="rounded-full bg-200 bg-gradient-to-r from-primary from-0% via-secondary via-50% to-primary to-99% p-[.5rem] hover:bg-right text-primary-content cursor-pointer transition-all duration-500">
      {/* Page content here */}
      {children}
    </div>
  );
};
