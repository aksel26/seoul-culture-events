import Footer from "./components/footer";
import "./App.css";

import ToTopButton from "./components/topButton";
import Events from "./components/events";
import PlaceTag from "./component/ui/tag";
import { CATEGORY } from "./lib/const";
import Title from "./components/title";
function App() {
  return (
    <div className="w-screen h-screen break-keep ">
      <header className="sticky top-0  bg-white shadow-xs transition-opacity duration-300 z-50">
        <div className="container mx-auto px-4">
          <div className="text-center text-base font-bold py-2 text-primary">서울시 문화공연</div>
        </div>
      </header>
      <main className="max-w-2xl mx-auto">
        <Title />

        <section className="z-10 relative bg-gradient-to-b from-primary-50 to-pink-100 pt-10">
          <div className="absolute -top-4 left-0 right-0 h-12 bg-gradient-to-b from-white via-primary-50 to-primary-50"></div>
          <div className="flex flex-wrap gap-2 mb-4 px-6">
            {CATEGORY.map((item) => (
              <PlaceTag key={item.value}>{item.label}</PlaceTag>
            ))}
          </div>
          <Events />
        </section>

        <ToTopButton />
        <Footer />
      </main>
    </div>
  );
}

export default App;
