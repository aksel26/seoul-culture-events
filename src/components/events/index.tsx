import React from "react";

const Events = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between sticky top-0f px-2">
        <p className="text-lg">최근 올라온 문화행사 </p>
        <button className="text-base text-slate-800">더보기 </button>
      </div>
      <div className="mt-3 flex flex-col gap-y-2 h-[250px] overflow-scroll">
        <img src="https://picsum.photos/200/250" alt="d" className="" />
        <img src="https://picsum.photos/200/250" alt="d" className="" />
        <img src="https://picsum.photos/200/250" alt="d" className="" />
        <img src="https://picsum.photos/200/200" alt="d" className="" />
      </div>
    </div>
  );
};

export default Events;
