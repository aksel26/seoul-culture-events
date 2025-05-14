import Events from "@/components/events";
import Loader from "@/components/loader";
// import SearchModal from "@/components/search";
import Title from "@/components/title";
import ToTopButton from "@/components/topButton";
import useConvertAddress from "@/hooks/useConvertAddress";
import useFetch from "@/hooks/useFetch";
import useGeolocation from "@/hooks/useGeoLocation";
import { ChevronRight, MapPin } from "lucide-react";
import { useEffect } from "react";

const Home = () => {
  const { location, error: locationError, loading: locationLoading } = useGeolocation();

  // Step 2: Convert location to address
  const { setLocation, address, error: addressError } = useConvertAddress();

  // Step 3: Fetch data based on address
  const { result, isLoading: fetchLoading } = useFetch();
  // console.log("🚀 ~ Home ~ address:", address)
  //
  //
  // ;

  useEffect(() => {
    if (location && !locationLoading && !locationError) {
      setLocation((prev) => ({
        ...prev,
        lat: location?.latitude ?? prev?.lat,
        lng: location?.longitude ?? prev?.lng,
      }));
    }
  }, [location, locationLoading, locationError, setLocation]);

  if (locationLoading) {
    return <div>위치 정보를 가져오는 중...</div>;
  }

  if (locationError) {
    return <div>위치 정보를 가져오는데 오류가 발생했습니다: {locationError}</div>;
  }

  if (!address) {
    return <div>주소로 변환 중...</div>;
  }

  if (addressError) {
    return <div>주소 변환 중 오류가 발생했습니다: {addressError}</div>;
  }

  if (fetchLoading) {
    return <Loader />;
  }
  return (
    <main className="w-screen break-keep overflow-y-auto snap-y  ">
      <div className="max-w-2xl mx-auto ">
        <section>
          <Title result={result} />
          <div className="z-10 relative bg-gradient-to-b from-primary-50 to-pink-100 pt-10">
            <div className="absolute -top-4 left-0 right-0 h-12 bg-gradient-to-b from-white via-primary-50 to-primary-50"></div>
            {/* <div className="flex flex-wrap gap-2 mb-4 px-6">
              {CATEGORY.map((item) => (
                <PlaceTag key={item.value}>{item.label}</PlaceTag>
              ))}
            </div> */}

            <div className="flex justify-between items-end px-6 mb-4">
              <div className="flex items-start gap-x-1">
                <MapPin size={19} />
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg">우리동네 문화행사</p>

                  <p className="text-sm text-primary-800">현재위치:{address}</p>
                </div>
              </div>
              {/* <Button variant={"ghost"} size={"xs"}> */}
              <div className="flex gap-x-1 px-4 text-xs items-center text-gray-500 pr-4">
                <p>전체보기</p>
                <ChevronRight size={16} />
              </div>
              {/* </Button> */}
              {/* <SearchModal /> */}
            </div>
            <Events result={result} isLoading={fetchLoading} />
          </div>
        </section>

        <ToTopButton />
      </div>
    </main>
  );
};

export default Home;
