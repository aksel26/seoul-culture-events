import React from "react";

const PlaceTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary-700 rounded-md p-1 px-2">
      <p className="text-sm text-primary-50">{children}</p>
    </div>
  );
};

export default PlaceTag;
