import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = ({handleLoginClick}) => {
  const {login} = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await await axios.post(
        "http://localhost:5147/api/Auth/Login",
        data
      );
      if (response.data.token) {
        // Authentication was successful, clear the login error and store the token
        setLoginError(null);
        login(response.data.token);
        handleLoginClick();
      } else {
        // The response didn't contain a token, handle this as an authentication failure
        setLoginError("Authentication failed: Token not received");
      }
    } catch (error) {
      if (error.response) {
        // The server responded with an error status code (e.g., 4xx or 5xx)
        if (error.response.status === 401) {
          // Authentication failed (invalid credentials)
          setLoginError("Authentication failed: Invalid credentials");
        } else {
          // Other server errors
          setLoginError("Server error: " + error.response.data.message);
        }
      } else if (error.request) {
        // The request was made but no response was received (e.g., network issue)
        setLoginError("Network error: " + error.message);
      } else {
        // Something else went wrong
        setLoginError("An error occurred: " + error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <div className="reg-container">
          <h1>Login to ThomasCook</h1>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="error-message">
            {loginError && <p className="error-text">{loginError}</p>}
          </div>

          <div className="clearfix">
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
