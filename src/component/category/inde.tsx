import React from "react";
import ToggleGroup from "../ui/toggle/group";
import ToggleItem from "../ui/toggle/item";
import { useToggleGroup } from "../../hooks/useToggle";

const items = [
  { value: "전체", label: "전체" },
  { value: "공연", label: "공연" },
  { value: "전시", label: "전시" },
  { value: "축제", label: "축제" },
  { value: "교육/체험", label: "교육/체험" },
  { value: "기타", label: "기타" },
  { value: "문화달력", label: "문화달력" },
  { value: "영상", label: "영상" },
];

const Category = () => {
  const { selectedValues, toggleItem } = useToggleGroup(items);

  return (
    <ToggleGroup>
      {items.map((item) => (
        <ToggleItem
          key={item.value}
          value={item.value}
          label={item.label}
          isSelected={selectedValues.includes(item.value)}
          onClick={toggleItem}
        />
      ))}
    </ToggleGroup>
  );
};

export default Category;
