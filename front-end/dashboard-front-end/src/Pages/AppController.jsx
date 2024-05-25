import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import UserData from "./VehicleData";
import BookingPage from "./BookingPage";
import Login from "../Components/Login";
import ProfilePage from "../Components/Profile.jsx";

function AppController() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/users" element={<UserPage />} exact />
        <Route path="/booking" element={<BookingPage />} exact />
        <Route path="/vehicle" element={<UserData />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/Profile/:userId" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default AppController;
