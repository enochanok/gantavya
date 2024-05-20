import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UserData from "./Pages/VehicleData";
import BookingPage from "./Pages/BookingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/users" element={<UserPage />} exact />
          <Route path="/booking" element={<BookingPage />} exact />
          <Route path="/vehicle" element={<UserData />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
