import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <section className="login">
        <div className="container">
          <h1 className="login-title">Account</h1>
          <form className="login-form">
            <input type="text" className="login-input" placeholder="Name" />
            <input type="text" className="login-input" placeholder="Job" />
            <input
              type="email"
              className="login-input"
              placeholder="Email Address"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
