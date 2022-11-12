import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Globalstyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
    <Globalstyle/>
      <div className="pages">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
