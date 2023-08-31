import React from 'react';
import "./Login.css";
const Login = () => {
  return (
    <div className={`show`}>
    <div class="container">
    <div class="card">
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <div class="buttons">
                <button class="register-button">Register</button>
                <button type="submit" class="login-button">Login</button>
            </div>
        </form>
    </div>
    </div>
    </div>
  )
}

export default Login
