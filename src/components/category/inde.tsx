import React, { useEffect } from "react";
import ToggleGroup from "../../component/ui/toggle/group";
import ToggleItem from "../../component/ui/toggle/item";
import { useToggleGroup } from "../../hooks/useToggle";
import useCategoryStore from "../../store/useStore";

const items = [
  { value: "문화교양/강좌", label: "문화교양/강좌" },
  { value: "전시/미술", label: "전시/미술" },
  { value: "뮤지컬/오페라", label: "뮤지컬/오페라" },
  { value: "기타", label: "기타" },
  { value: "연극", label: "연극" },
  { value: "무용", label: "무용" },
  { value: "영화", label: "영화" },
  { value: "국악", label: "국악" },
  { value: "콘서트", label: "콘서트" },
  { value: "축제-문화/예술", label: "축제-문화/예술" },
  { value: "축제-전통/역사", label: "축제-전통/역사" },
  { value: "축제-시민화합", label: "축제-시민화합" },
  { value: "클래식", label: "클래식" },
  { value: "축제-기타", label: "축제-기타" },
  { value: "축제-자연/경관", label: "축제-자연/경관" },
  { value: "독주/독창회", label: "독주/독창회" },
];

const Category = () => {
  const { selectedValues, toggleItem } = useToggleGroup(items);
  const { setCategory } = useCategoryStore();

  useEffect(() => {
    setCategory(selectedValues);
  }, [selectedValues, setCategory]);

  console.log("selectedValues: ", selectedValues);

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
