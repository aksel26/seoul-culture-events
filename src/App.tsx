import "./App.css";

import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Discover from "./pages/discover";
import Home from "./pages/home";
import Layout from "./components/layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
