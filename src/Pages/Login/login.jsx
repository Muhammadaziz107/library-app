import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <p className="heading-login">Sign in</p>
        <span className="incorrect-login">
          <p>Sorry, That password is incorrect</p>
        </span>

        <form className="login-form" method="post">
          <input className="label__input" type="password" placeholder="Password" />

          <button className="login-submit-btn" type="submit">
            Sign In
          </button>
        </form>

        <p className="create-accaunt">
          Don't have an account? <NavLink to="/register">sign up</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
