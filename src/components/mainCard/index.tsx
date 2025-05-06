import React from "react";
import { TList } from "../../lib/types";
import { IconMapPin } from "@tabler/icons-react";
// import PlaceTag from "../tag";

const ContentCard = ({ item }: { item: TList }) => {
  const redirectPage = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div
      className="flex flex-col w-full relative overflow-hidden"
      onClick={() => redirectPage(item.HMPG_ADDR)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-md"></div>

      <img src={item.MAIN_IMG} className="w-full md:max-w-50 rounded-md" />

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <p className="font-bold">{item.TITLE}</p>
        <p className="text-sm text-slate-50">{item.DATE}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs">{item.CODENAME}</p>
          <div className="flex gap-x-1 items-center">
            <IconMapPin size={20} strokeWidth={1.2} />
            <p className="text-xs">{item.GUNAME}</p>
          </div>
          {/* <PlaceTag>{item.GUNAME}</PlaceTag> */}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
