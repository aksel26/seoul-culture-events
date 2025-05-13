import PlaceTag from "@/component/ui/tag";
import { Input } from "@/components/ui/input";
import { CATEGORY, CITY } from "@/lib/const";
import React from "react";

const Discover = () => {
  return (
    <section className="p-6">
      <p className="text-2xl font-extrabold ">Discover</p>

      <Input className="mt-2" placeholder="찾고싶은 문화공연명을 입력해 주세요." />

      <p className="mt-4">카테고리 선택</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {CATEGORY.map((item) => (
          <PlaceTag key={item.value}>{item.label}</PlaceTag>
        ))}
      </div>

      <p>지역 선택</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {CITY.map((item) => (
          <PlaceTag key={item.value}>{item.label}</PlaceTag>
        ))}
      </div>
    </section>
  );
};

export default Discover;
