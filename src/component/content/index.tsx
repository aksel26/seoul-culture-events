import { useEffect, useState } from "react";
// import { TCulturalEventInfo } from "../../lib/types";
// import apiClient from "../../services/api";
import ContentCard from "../mainCard";
import { TList } from "../../lib/types";

const TEMP = [
  {
    CODENAME: "전시/미술",
    GUNAME: "강남구",
    TITLE: "K-핸드메이드페어 2025",
    DATE: "2025-12-18~2025-12-21",
    PLACE: "서울 삼성동 코엑스 1층  B홀",
    ORG_NAME: "기타",
    USE_TRGT: "누구나",
    USE_FEE: "사전 예매가: 8,000원, 현장 구매가: 10,000원",
    PLAYER: "",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK: "https://k-handmade.com/",
    MAIN_IMG:
      "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=42afe00583eb4b0983dba37a04a41222&thumb=Y",
    RGSTDATE: "2025-01-10",
    TICKET: "기관",
    STRTDATE: "2025-12-18 00:00:00.0",
    END_DATE: "2025-12-21 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.5118239121138",
    LAT: "127.059159043842",
    IS_FREE: "유료",
    HMPG_ADDR:
      "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=152033&menuNo=200009",
  },
  {
    CODENAME: "축제-문화/예술",
    GUNAME: "금천구",
    TITLE: "2025 금천하모니축제",
    DATE: "2025-10-18~2025-10-19",
    PLACE: "금천구청광장, 안양천다목적광장, 금천구 전역",
    ORG_NAME: "금천문화재단",
    USE_TRGT: "누구나",
    USE_FEE: "",
    PLAYER: "",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK: "https://www.instagram.com/geumcheon_harmony/",
    MAIN_IMG:
      "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=520ec510b1db4ca6976e8f87402fd6d1&thumb=Y",
    RGSTDATE: "2025-03-31",
    TICKET: "기관",
    STRTDATE: "2025-10-18 00:00:00.0",
    END_DATE: "2025-10-19 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.4570656519531",
    LAT: "126.896036850324",
    IS_FREE: "무료",
    HMPG_ADDR:
      "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=152953&menuNo=200010",
  },
  {
    CODENAME: "축제-문화/예술",
    GUNAME: "광진구",
    TITLE: "2025 서울라이트 한강 빛섬축제",
    DATE: "2025-10-03~2025-10-12",
    PLACE: "뚝섬 한강공원",
    ORG_NAME: "서울시청",
    USE_TRGT: "누구나",
    USE_FEE: "",
    PLAYER: "",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK: "https://bitseomfestival.com/",
    MAIN_IMG:
      "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=b13d2032bec441088ab18e1f0164eaa6&thumb=Y",
    RGSTDATE: "2025-04-16",
    TICKET: "기관",
    STRTDATE: "2025-10-03 00:00:00.0",
    END_DATE: "2025-10-12 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.5293645718995",
    LAT: "127.073978164616",
    IS_FREE: "무료",
    HMPG_ADDR:
      "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=153245&menuNo=200010",
  },
  {
    CODENAME: "축제-문화/예술",
    GUNAME: "광진구",
    TITLE: "[광진문화재단] 제4회 2025 나루 스트릿 댄스 페스티벌",
    DATE: "2025-09-20~2025-09-20",
    PLACE: "나루아트센터 야외광장",
    ORG_NAME: "광진문화재단",
    USE_TRGT: "전체관람",
    USE_FEE: "",
    PLAYER: "",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK:
      "https://www.naruart.or.kr/exhibition/program_view.php?page=1&sch_tab=date&sch_year=2025&sch_month=09&idx=10111",
    MAIN_IMG:
      "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=a3ab97a289ab44eba250ef33e4314175&thumb=Y",
    RGSTDATE: "2025-04-02",
    TICKET: "기관",
    STRTDATE: "2025-09-20 00:00:00.0",
    END_DATE: "2025-09-20 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.5375706269359",
    LAT: "127.070576040786",
    IS_FREE: "무료",
    HMPG_ADDR:
      "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=152983&menuNo=200010",
  },
  {
    CODENAME: "전시/미술",
    GUNAME: "강남구",
    TITLE: "2025 핸드아티코리아",
    DATE: "2025-08-07~2025-08-10",
    PLACE: "코엑스전시장 C홀",
    ORG_NAME: "기타",
    USE_TRGT: "누구나",
    USE_FEE: "일반 (2006년생 이상): 12,000 / 청소년 (2018 - 07년생): 6,000원",
    PLAYER: "",
    PROGRAM: "",
    ETC_DESC: "",
    ORG_LINK: "https://handarty.co.kr/coex/exhibition/handartykorea/",
    MAIN_IMG:
      "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=39c8b53e2d9e4eac963dc0497f57afed&thumb=Y",
    RGSTDATE: "2025-03-13",
    TICKET: "시민",
    STRTDATE: "2025-08-07 00:00:00.0",
    END_DATE: "2025-08-10 00:00:00.0",
    THEMECODE: "기타",
    LOT: "37.5118239121138",
    LAT: "127.059159043842",
    IS_FREE: "유료",
    HMPG_ADDR:
      "https://culture.seoul.go.kr/culture/culture/cultureEvent/view.do?cultcode=152682&menuNo=200009",
  },
];
const Content = () => {
  //   const KEY = import.meta.env.VITE_OPEN_API_KEY;

  //   const [result, setResult] = useState<TCulturalEventInfo>();
  //   console.log("result: ", result);
  const [isLoading, setIsLoading] = useState(true);
  console.log("isLoading: ", isLoading);
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      //   const fetchResult = await apiClient.get(
      //     `http://openapi.seoul.go.kr:8088/${KEY}/json/culturalEventInfo/1/5`
      //   );

      setIsLoading(false);

      //   setResult(fetchResult.data.culturalEventInfo);
    };

    fetchUsers();
  }, []);

  if (isLoading) return <div>로딩중</div>;
  return (
    <div className="bg-slate-300 p-6">
      <p className="text-right text-sm mb-5">총 4738개</p>
      {/* <p className="text-sm">{result?.list_total_count}개 </p> */}
      <div className="flex flex-wrap gap-8 ">
        {TEMP.map((item: TList) => (
          <ContentCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default Content;
