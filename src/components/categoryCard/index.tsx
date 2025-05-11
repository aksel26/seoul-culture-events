import { Music } from "lucide-react";
import React from "react";

const CategoryCard = ({ label, icon }: { label: string; icon?: any }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col p-3 gap-y-4 min-w-[120px]">
      <Music />
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;
