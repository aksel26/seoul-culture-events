import React from "react";
import { TList } from "../../lib/types";

const ContentCard = ({ item }: { item: TList }) => {
  console.log("item: ", item);
  return (
    <div className="flex flex-col w-full">
      <img
        src="https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=42afe00583eb4b0983dba37a04a41222&thumb=Y"
        className="w-full md:max-w-50"
      />
      <div className="mt-2">
        <p>{item.TITLE}</p>
        <p className="text-xs">{item.DATE}</p>
        <div className="flex justify-between">
          <p className="text-xs">{item.CODENAME}</p>
          <p className="text-xs">{item.GUNAME}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
