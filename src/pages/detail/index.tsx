import useListStore from "@/store/useEvent";
import { Building2, ChevronRight, Globe, HandCoins, MapPin, UserRound } from "lucide-react";
import { useEffect } from "react";

const Detail = () => {
  const { selectedItem } = useListStore();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  if (!selectedItem) return null;

  const { MAIN_IMG, PLACE, CODENAME, TITLE, GUNAME, DATE, USE_FEE, USE_TRGT, HMPG_ADDR, ORG_NAME } = selectedItem;

  const goWebsite = () => window.open(HMPG_ADDR, "_blank");

  return (
    <section className=" max-w-2xl mx-auto p-4 bg-gradient-to-b from-primary-50 to-pink-100 flex flex-col gap-y-2">
      <img src={MAIN_IMG} alt="mainImg" className="rounded-md" onClick={goWebsite} />
      <div className="bg-white rounded-md px-3 py-5 flex flex-col w-full mx-auto">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2">
            <p className="text-xs text-primary-800">{CODENAME}</p>
            <p className="text-sm mb-1">{TITLE}</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex gap-x-1 items-center text-gray-400">
              <MapPin size={16} strokeWidth={1.2} />
              <p className="text-xs">{GUNAME}</p>
            </div>
            <p className="text-xs text-gray-400">{DATE}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-md py-4 flex flex-col w-full mx-auto">
        <div className="flex items-center gap-x-4 px-3 ">
          <MapPin size={20} strokeWidth={2} />
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">장소</p>
            <p className="text-gray-400 text-xs">{PLACE}</p>
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-200 w-full my-4" />
        <div className="flex items-center gap-x-4 px-3 ">
          <HandCoins size={20} strokeWidth={2} />
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">이용요금</p>
            <p className="text-gray-400 text-xs">{USE_FEE === "" ? "무료" : USE_FEE}</p>
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-200 w-full my-4" />
        <div className="flex items-center gap-x-4 px-3 ">
          <UserRound size={20} strokeWidth={2} />
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">이용대상</p>
            <p className="text-gray-400 text-xs">{USE_TRGT}</p>
          </div>
        </div>

        <div className="h-[0.5px] bg-gray-200 w-full my-4" />
        <div className="flex items-center gap-x-4 px-3 ">
          <Building2 size={20} strokeWidth={2} />
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">기관명</p>
            <p className="text-gray-400 text-xs">{ORG_NAME}</p>
          </div>
        </div>
        <div className="h-[0.5px] bg-gray-200 w-full my-4" />
        <div className="flex items-center gap-x-4 px-3" onClick={goWebsite}>
          <Globe size={20} strokeWidth={2} />
          <div className="flex justify-between items-center flex-1">
            <p className="text-xs">홈페이지</p>
            <ChevronRight size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
