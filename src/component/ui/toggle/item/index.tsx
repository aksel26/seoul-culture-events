import { X } from "lucide-react";
import React from "react";

type TToggleItem = {
  value: string;
  key: string;
  keyValue: string;
  label: string;
  onClick: (value: string) => void;
};

const ToggleItem = ({ value, keyValue, label, onClick }: TToggleItem) => {
  return (
    <button
      className={`p-1 px-3 rounded-xl text-xs font-medium transition-colors bg-primary-200 text-primary-800 hover:bg-primary-400`}
      onClick={() => onClick(keyValue)}
    >
      <div className="flex gap-x-1 justify-between items-center">
        {label || value}
        <X size={15} strokeWidth={1.5} />
      </div>
    </button>
  );
};

export default ToggleItem;
