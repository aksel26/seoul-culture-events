import React from "react";

const ToggleGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-wrap gap-2">{children}</div>;
};

export default ToggleGroup;
