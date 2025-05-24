import { TList } from "@/lib/types";
import { useMemo } from "react";

/**
 * GUNAME(구 이름) 별로 데이터를 그룹핑하는 커스텀 훅
 * @param {Array} data - 문화행사 데이터 배열
 * @returns {Object} GUNAME을 키로 하고 해당 구의 행사들을 값으로 하는 객체
 */
export const useGroupByGuname = (data = []) => {
  const groupedData = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return {};
    }

    return data.reduce((acc: { [key: string]: TList[] }, item: TList) => {
      const guname = item.GUNAME;

      if (!acc[guname]) {
        acc[guname] = [];
      }

      acc[guname].push(item);
      return acc;
    }, {});
  }, [data]);
  // 추가적으로 유용한 정보들도 함께 반환
  const groupInfo = useMemo(() => {
    const groups = Object.keys(groupedData);
    const totalGroups = groups.length;
    const totalItems = data.length;

    // 각 구별 아이템 개수
    const countByGu: { [key: string]: number } = {};
    groups.forEach((gu) => {
      countByGu[gu] = groupedData[gu].length;
    });

    return {
      groups,
      totalGroups,
      totalItems,
      countByGu,
    };
  }, [groupedData, data.length]);

  return {
    groupedData,
    ...groupInfo,
  };
};
