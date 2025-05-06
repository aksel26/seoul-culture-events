import React from "react";

const PlaceTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-50 rounded-md p-1">
      <p className="text-xs text-primary-800">{children}</p>
    </div>
  );
};

export default PlaceTag;
