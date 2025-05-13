import { TCulturalEventInfo, TList } from "@/lib/types";
import React from "react";
import Loader from "../loader";
import ContentCard from "../mainCard";

const Events = ({ result, isLoading }: { result: TCulturalEventInfo | undefined; isLoading: boolean }) => {
  // const { result, isLoading } = useFetch();

  if (isLoading) return <Loader />;
  return (
    <div className="p-6 z-20 h-full">
      {result?.row.map((item: TList, index: number) => (
        <React.Fragment key={index}>
          <div className="p-1 snap-center">
            <ContentCard item={item} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Events;
