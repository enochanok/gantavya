import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./components/LoginForm";
import Vehicles from "./components/Vehicles";
import VehicelList from "./Pages/VehicelList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Vehicles" element={<VehicelList />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
