import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Globalstyle from "./styles/GlobalStyle";
import { Pages } from "./styles/HomeStyle";

function App() {
  return (
    <>
    <Globalstyle/>
    <Pages>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Pages>
       
    </>
  );
}

export default App;
