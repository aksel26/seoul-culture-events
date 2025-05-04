import React from "react";

const PlaceTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-mint-50 rounded-md p-1">
      <p className="text-xs text-mint-800">{children}</p>
    </div>
  );
};

export default PlaceTag;
