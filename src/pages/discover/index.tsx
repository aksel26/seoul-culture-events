import ToTopButton from "@/components/topButton";
import { TList } from "@/lib/types";
import useAllEvents from "@/store/useAllEvents";
import useListStore from "@/store/useEvent";
import { useGroupByGuname } from "@/store/useGroupEvents";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const { events } = useAllEvents();
  const { setItems } = useListStore();
  const navigate = useNavigate();
  const { groupedData } = useGroupByGuname(events);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const goDetail = (item: TList) => {
    navigate(`/detail`);
    setItems(item);
  };

  return (
    <section className="max-w-2xl mx-auto p-6 bg-gradient-to-b from-primary-50 to-pink-100">
      <div className="flex flex-col gap-8">
        {Object.entries(groupedData).map(([key, value]: [string, TList[]]) => {
          return (
            <div key={key} className="flex flex-col gap-1">
              <p className="text-lg font-bold">
                {key || "기타"}
                <span className="text-sm text-gray-500 ml-1">
                  {value.length}개
                </span>
              </p>
              <div className="flex flex-nowrap gap-2 overflow-x-auto">
                {value.map((item: TList, index: number) => (
                  <img
                    onClick={() => goDetail(item)}
                    key={index}
                    src={item.MAIN_IMG}
                    className="rounded-md h-42 object-cover"
                  />
                ))}
              </div>
              {/* <p>{value.length}</p> */}
            </div>
          );
        })}
      </div>
      <ToTopButton />
    </section>
  );
};

export default Discover;
