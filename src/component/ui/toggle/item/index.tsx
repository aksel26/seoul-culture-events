import React from "react";

type TToggleItem = {
  value: string;
  label: string;
  isSelected: boolean;
  onClick: (value: string) => void;
};

const ToggleItem = ({ value, label, isSelected, onClick }: TToggleItem) => {
  return (
    <button
      className={`p-1 px-6 rounded-xl text-xs font-medium transition-colors  ${
        isSelected
          ? "bg-primary-800 text-primary-200"
          : "bg-primary-200 text-primary-800 hover:bg-primary-400"
      }`}
      onClick={() => onClick(value)}
    >
      {label || value}
    </button>
  );
};

export default ToggleItem;
