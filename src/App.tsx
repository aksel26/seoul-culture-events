import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";
import ToTopButton from "./components/topButton";
function App() {
  return (
    <div className="w-screen bg-gradient-to-b from-primary-50 to-pink-100 break-keep">
      <div className="max-w-2xl mx-auto">
        <header>
          <Header />
        </header>
        <section>
          <Content />
        </section>
        <Footer />

        <ToTopButton />
      </div>
    </div>
  );
}

export default App;
