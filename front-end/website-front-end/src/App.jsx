import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginForm from "./components/LoginForm";
import Vehicles from "./components/Vehicles";
import VehicelList from "./Pages/VehicelList";
import Information from "./components/Information";
import VehicleDetail from "./components/VehicleDetail";
import AboutUs from "./components/AboutUs";
import PageNotFound from "./components/PageNotFound";
import ContactUs from "./components/ContactUs";
import Contact from "./Pages/ContactPage";
import About from "./Pages/AboutPage";
import VehicleDetailPage from "./Pages/VehicleDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Vehicles" element={<VehicelList />} exact />
          <Route path="/information" element={<Information />} exact />
          <Route path="/Vehicles/:car" element={<VehicleDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
