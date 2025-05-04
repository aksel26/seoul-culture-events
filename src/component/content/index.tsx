import useFetch from "../../hooks/useFetch";
import { TList } from "../../lib/types";
import Category from "../category/inde";
import ContentCard from "../mainCard";

const Content = () => {
  const { result, isLoading } = useFetch();

  if (isLoading) return <div>로딩중</div>;
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-5">
        <p className="text-sm text-slate-400">
          총
          <span className="ml-1 font-extrabold text-mint-900">
            {result?.list_total_count}개
          </span>
          의 행사가 있어요.
        </p>
        <select name="placeSelect" id="placeSelect" className="text-xs">
          <option value="gangnam">강남구</option>
        </select>
      </div>
      <Category />
      <div className="flex flex-wrap gap-12 mt-6">
        {result?.row.map((item: TList) => (
          <ContentCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
