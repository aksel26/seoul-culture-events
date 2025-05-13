import Footer from "./components/footer";
import "./App.css";

import ToTopButton from "./components/topButton";
import Events from "./components/events";
import PlaceTag from "./component/ui/tag";
import { CATEGORY } from "./lib/const";
import Title from "./components/title";

import useFetch from "./hooks/useFetch";
import useGeolocation from "./hooks/useGeoLocation";
import Header from "./components/header";
import Loader from "./components/loader";
function App() {
  const { result, isLoading } = useFetch();

  const { location, error, loading } = useGeolocation();
  console.log("🚀 ~ App ~ location, error, loading:", location, error, loading);

  if (isLoading) return <Loader />;
  return (
    <div className="w-screen h-screen break-keep ">
      <Header />
      <main className="max-w-2xl mx-auto">
        <Title result={result} />

        <section className="z-10 relative bg-gradient-to-b from-primary-50 to-pink-100 pt-10">
          <div className="absolute -top-4 left-0 right-0 h-12 bg-gradient-to-b from-white via-primary-50 to-primary-50"></div>
          <div className="flex flex-wrap gap-2 mb-4 px-6">
            {CATEGORY.map((item) => (
              <PlaceTag key={item.value}>{item.label}</PlaceTag>
            ))}
          </div>
          <Events result={result} isLoading={isLoading} />
        </section>

        <ToTopButton />
        <Footer />
      </main>
    </div>
  );
}

export default App;
