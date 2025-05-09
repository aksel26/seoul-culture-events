import React from "react";
import useFetch from "../../hooks/useFetch";
import { TList } from "../../lib/types";
import ParamsList from "../category";
import Loader from "../loader";
import ContentCard from "../mainCard";
import SearchModal from "../search";

const Content = () => {
  const { result, isLoading } = useFetch();

  // console.log("params: ", params);

  if (isLoading) return <Loader />;
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex justify-between items-center ">
          <p className="text-sm text-slate-400">
            총<span className="ml-1 font-extrabold text-primary-900">{result?.list_total_count}개</span>의 행사가 있어요.
          </p>
        </div>
        <SearchModal />
      </div>
      <ParamsList />

      {/* <Category /> */}
      <div className="flex flex-wrap gap-12 mt-6">
        {result?.row.map((item: TList, index: number) => (
          <React.Fragment key={index}>
            <ContentCard item={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Content;
