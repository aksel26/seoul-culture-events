import useFetch from "@/hooks/useFetch";
import { TList } from "@/lib/types";
import React from "react";
import Loader from "../loader";
import ContentCard from "../mainCard";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const Events = () => {
  const { result, isLoading } = useFetch();

  if (isLoading) return <Loader />;
  return (
    <div className="p-6 z-20 h-full snap-center">
      <div className="flex justify-between mb-2">
        <p className="text-lg">최근 10개 올라온 문화행사 </p>
        <button className="text-base text-slate-400">더보기 </button>
      </div>

      <Carousel
        orientation="vertical"
        opts={{
          align: "center",
        }}
      >
        <CarouselContent className="h-[600px]">
          {result?.row.map((item: TList, index: number) => (
            <React.Fragment key={index}>
              <CarouselItem className="pt-1 basis-1/3">
                <div className="p-1">
                  <ContentCard item={item} />
                </div>
              </CarouselItem>
            </React.Fragment>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Events;
