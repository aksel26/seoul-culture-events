import { MapPin } from "lucide-react";
import { TList } from "../../lib/types";
import { useNavigate } from "react-router-dom";
import useListStore from "@/store/useEvent";
// import PlaceTag from "../tag";

const ContentCardV2 = ({ item }: { item: TList }) => {
  // const redirectPage = (url: string) => {
  //   window.open(url, "_blank");
  // };
  const router = useNavigate();
  const { setItems } = useListStore();
  const goDetail = (item: TList) => {
    setItems(item);
    router("/detail");
  };
  return (
    <div className="bg-white rounded-md px-3 py-3 flex flex-col w-full mx-auto" onClick={() => goDetail(item)}>
      <div className="flex justify-between h-full gap-x-3">
        <div className="flex flex-col gap-y-1 justify-between">
          <div className="flex flex-col gap-y-2">
            <p className="text-xs text-primary-800">{item.CODENAME}</p>
            <p className="text-sm mb-1">{item.TITLE}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-1 items-center text-gray-400">
              <MapPin size={16} strokeWidth={1.2} />
              <p className="text-xs">{item.GUNAME}</p>
            </div>
            <p className="text-xs text-gray-400">{item.DATE}</p>
          </div>
        </div>
        <img src={item.MAIN_IMG} className="w-20 rounded-md" />
      </div>
    </div>
  );
};

export default ContentCardV2;
