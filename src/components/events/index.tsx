import { TCulturalEventInfo, TList } from "@/lib/types";
import React from "react";
import Loader from "../loader";
import ContentCard from "../mainCard";

const Events = ({ result, isLoading }: { result: TCulturalEventInfo | undefined; isLoading: boolean }) => {
  // const { result, isLoading } = useFetch();

  if (isLoading) return <Loader />;
  return (
    <div className="p-6 z-20 h-full snap-center">
      <div className="flex justify-between mb-2">
        <p className="text-lg">최근 10개 올라온 문화행사 </p>
        <button className="text-base text-slate-400">더보기 </button>
      </div>

      <div className="h-[600px] overflow-y-auto snap-y snap-mandatory scroll-p-4">
        {result?.row.map((item: TList, index: number) => (
          <React.Fragment key={index}>
            <div className="p-1 snap-center">
              <ContentCard item={item} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Events;
