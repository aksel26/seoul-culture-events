import { TList } from "@/lib/types";
import React from "react";
import Loader from "../loader";
// import ContentCard from "../mainCard";
import ContentCardV2 from "../mainCardV2";

const Events = ({ result, isLoading }: { result: TList[] | undefined; isLoading: boolean }) => {
  // const { result, isLoading } = useFetch();

  if (isLoading) return <Loader />;
  return (
    <div className="px-6 z-20 flex flex-col gap-y-3 pb-4">
      {result?.map((item: TList, index: number) => (
        <React.Fragment key={index}>
          {/* <div className="p-1"> */}
          <ContentCardV2 item={item} />
          {/* </div> */}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Events;
