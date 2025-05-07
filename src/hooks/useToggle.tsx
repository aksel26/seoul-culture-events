import { useState, useEffect } from "react";

// 토글 그룹 커스텀 훅
export const useToggleGroup = (items: Array<{ value: string; label: string }>) => {
  // 선택된 값들을 배열로 관리
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // 기본 토글 처리 함수
  const toggleItem = (value: string) => {
    // "전체" 항목 클릭 시 로직
    if (value === "전체") {
      // 모든 항목이 선택된 상태라면 모두 해제, 아니면 모두 선택
      if (selectedValues.length === items.length) {
        setSelectedValues([]);
      } else {
        setSelectedValues(items.map((item) => item.value));
      }
      return;
    }

    // 일반 항목 클릭 시 토글 처리
    setSelectedValues((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      }
      return [...prevSelected, value];
    });
  };

  // "전체" 항목 자동 선택/해제 처리 (관심사 분리)
  useEffect(() => {
    // 이미 "전체"가 포함된 상태에서 다른 변경이 있었다면 처리 건너뛰기
    if (selectedValues.includes("전체") && selectedValues.length !== items.length) {
      setSelectedValues((prev) => prev.filter((item) => item !== "전체"));
      return;
    }

    // 모든 일반 항목이 선택되었고 "전체"가 선택되지 않았다면 "전체" 추가
    const hasAllItemsExceptAll = items.every((item) => item.value === "전체" || selectedValues.includes(item.value));

    if (hasAllItemsExceptAll && !selectedValues.includes("전체") && items.some((item) => item.value === "전체")) {
      setSelectedValues((prev) => [...prev, "전체"]);
    }
  }, [selectedValues, items]);

  return {
    selectedValues,
    toggleItem,
    setSelectedValues,
  };
};
