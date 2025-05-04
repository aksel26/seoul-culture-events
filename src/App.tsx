import Header from "./component/header";
import Content from "./component/content";
import Footer from "./component/footer";
import "./App.css";
import ToTopButton from "./component/topButton";
function App() {
  return (
    <div className="w-screen bg-gradient-to-b from-mint-50 to-pink-100 break-keep">
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
