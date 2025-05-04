import Header from "./component/header";
import Content from "./component/content";
import "./App.css";
import Footer from "./component/footer";
function App() {
  return (
    <div className="w-screen bg-slate-200 break-keep">
      <div className="max-w-2xl mx-auto">
        <header>
          <Header />
        </header>
        <section>
          <Content />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
