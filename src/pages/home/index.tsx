import Events from "@/components/events";
import Loader from "@/components/loader";
import SearchModal from "@/components/search";
// import SearchModal from "@/components/search";
import Title from "@/components/title";
import ToTopButton from "@/components/topButton";
import useFetch from "@/hooks/useFetch";
import useGeolocation from "@/hooks/useGeoLocation";
import { MapPin } from "lucide-react";

const Home = () => {
  const { result, isLoading } = useFetch();

  const { location, error, loading } = useGeolocation();
  console.log("🚀 ~ App ~ location, error, loading:", location, error, loading);

  if (isLoading) return <Loader />;
  return (
    <div className="w-screen h-screen break-keep overflow-y-auto snap-y snap-mandatory scroll-p-4 ">
      <main className="max-w-2xl mx-auto pb-[120px] snap-center">
        <Title result={result} />

        <section className="z-10 relative bg-gradient-to-b from-primary-50 to-pink-100 pt-10">
          <div className="absolute -top-4 left-0 right-0 h-12 bg-gradient-to-b from-white via-primary-50 to-primary-50"></div>
          {/* <div className="flex flex-wrap gap-2 mb-4 px-6">
              {CATEGORY.map((item) => (
                <PlaceTag key={item.value}>{item.label}</PlaceTag>
              ))}
            </div> */}

          <div className="flex justify-between items-end  px-6">
            <div className="flex items-start gap-x-1">
              <MapPin size={19} />
              <div className="flex flex-col gap-y-1">
                <p className="text-lg">우리동네 문화행사</p>

                <p className="text-sm text-primary-800">현재위치:용산구</p>
              </div>
            </div>
            {/* <button className="border-1 border-primary-500 px-4 text-xs py-2 rounded-md bg-primary-100 text-primary-900" onClick={move}>
              <div className="flex gap-x-1 items-center">
                <p>더보기</p>
                <ChevronRight size={15} />
              </div>
            </button> */}

            <SearchModal />
          </div>
          <Events result={result} isLoading={isLoading} />
        </section>

        <ToTopButton />
      </main>
    </div>
  );
};

export default Home;
