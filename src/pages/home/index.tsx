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

            <div className="flex justify-between items-end  px-6 mb-4">
              <div className="flex items-start gap-x-1">
                <MapPin size={19} />
                <div className="flex flex-col gap-y-1">
                  <p className="text-lg">우리동네 문화행사</p>

                  <p className="text-sm text-primary-800">현재위치:용산구</p>
                </div>
              </div>
              <SearchModal />
            </div>
            <Events result={result} isLoading={isLoading} />
          </div>
        </section>

        <ToTopButton />
      </div>
    </main>
  );
};

export default Home;
