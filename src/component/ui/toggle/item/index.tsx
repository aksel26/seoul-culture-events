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
          ? "bg-mint-800 text-mint-200"
          : "bg-mint-200 text-mint-800 hover:bg-mint-400"
      }`}
      onClick={() => onClick(value)}
    >
      {label || value}
    </button>
  );
};

export default ToggleItem;
