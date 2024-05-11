import Profile from "./components/Profile";
import ProfileDashboard from "./components/ProfileDashboard";
import ProfileForm from "./components/ProfileForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function SidebarRoutes() {
  return (
    <Profile>
      <Routes>
        <Route path="/dash" element={<ProfileDashboard />} />
        <Route path="/ProfileForm" element={<ProfileForm />} />
      </Routes>
    </Profile>
  );
}

export default SidebarRoutes;
