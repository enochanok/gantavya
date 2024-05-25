import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
          "http://localhost:8080/gantavyaAdmin/user/login",
          {
            email,
            password,
          }
      );

      console.log(
          "Response data in JSON format:",
          JSON.stringify(response.data)
      );
      toast.success("Login successful!");
      localStorage.setItem("admin", true);

      navigate("/", { replace: true });
    } catch (error) {
      console.error("Sign In error:", error);
      toast.error("Invalid email or password!");
    }
  };

  return (
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="login-form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
            />
          </div>
          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>
      </div>
  );
};

export default Login;