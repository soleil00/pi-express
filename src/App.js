import Home from "./pages/Home";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import P2P from "./components/p2p/P2P";
import HomeComponent from "./components/home/HomeComponent";
import TradeForm from "./components/p2p/TradeForm";
import P2pHome from "./components/p2p/P2pHome";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/p2p">
          <Route index element={<P2pHome />} />
          <Route path="/p2p/create-ad" element={<P2P />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
