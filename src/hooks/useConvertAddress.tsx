import axios from "axios";
import { useEffect, useState } from "react";

interface TLocation {
  lat?: number | undefined;
  lng?: number | undefined;
}
const useConvertAddress = () => {
  const [location, setLocation] = useState<TLocation | undefined>();
  const [address, setAddress] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const config = {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
    },
  };
  useEffect(() => {
    // Kakao Maps SDK 스크립트 로드

    const fetchMap = async () => {
      await axios
        .get("https://dapi.kakao.com/v2/local/geo/coord2address.json", {
          params: {
            x: location?.lng,
            y: location?.lat,
          },
          ...config,
        })
        .then((res) => {
          console.log("🚀 ~ .then ~ res:", res);
          setAddress(res.data.documents[0].address.region_2depth_name);
        })
        .catch((error) => {
          setError(error);
        });
    };

    if (location) fetchMap();
  }, [location]);

  // 좌표를 주소로 변환하는 함수
  //   const convertCoordToAddress = (lat: number, lng: number): void => {
  //     const geocoder = new window.kakao.maps.services.Geocoder();

  //     geocoder.coord2Address(lng, lat, (result, status) => {
  //       if (status === window.kakao.maps.services.Status.OK) {
  //         if (result.length > 0) {
  //           // 도로명 주소가 있으면 도로명 주소, 없으면 지번 주소 사용
  //           const roadAddr = result[0].road_address ? result[0].road_address.address_name : "";
  //           const jibunAddr = result[0].address.address_name;

  //           console.log("도로명 주소:", roadAddr);
  //           console.log("지번 주소:", jibunAddr);

  //           setAddress({
  //             roadAddress: roadAddr,
  //             jibunAddress: jibunAddr,
  //           });
  //           setError(null);
  //         }
  //       } else {
  //         setError("주소를 찾을 수 없습니다.");
  //         console.error("Geocoder failed: " + status);
  //       }
  //     });
  //   };

  return { address, error, setLocation };
};

export default useConvertAddress;
