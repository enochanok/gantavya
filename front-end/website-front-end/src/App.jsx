import React, { useEffect } from "react";
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
import ProfilePage from "./Pages/ProfilePage";
import SidebarRoutes from "./SidebarRoutes";
import Layout from "./Pages/Layout";
import UserDetail from "./Pages/AdminUser";
import PaymentForm from "./components/PaymentComponent";

function App() {
  useEffect(() => {
    const loadScript = (url) => {
      const script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };
    // loading Google Places API
    loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAfJvYy8974YJQfwGlxhFVMVcli5X8mcCo&libraries=places`);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Vehicles" element={<VehicelList />} exact />
            <Route path="/information" element={<Information />} exact />
            <Route path="/Vehicles/:car" element={<VehicleDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/dashboard/*" element={<SidebarRoutes />} />
            <Route path="/userdetail" element={<UserDetail />} />
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="/" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
