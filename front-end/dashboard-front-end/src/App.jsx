import { BrowserRouter } from "react-router-dom";
import AppController from "./Pages/AppController";
import Login from "./Components/Login";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("admin");
    if (data) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log("Logged in successfully!");
  };

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <BrowserRouter>
      {isLoggedIn ? <AppController /> : <Login onLogin={handleLogin} />}
    </BrowserRouter>
  );
}

export default App;
