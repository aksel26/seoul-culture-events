import { Music } from "lucide-react";
import React from "react";

const CategoryCard = ({ label, icon }: { label: string; icon?: any }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col p-3 gap-y-2 min-w-[120px]">
      <Music size={18} strokeWidth={1.4} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryCard;
