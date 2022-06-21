import React from "react";
import "./register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="login">
      <div className="login_wrapper">
        <p className="heading-login">Sign up</p>

        <form className="login-form" method="post">
          <input
            className="label__input register-input"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="label__input register-input"
            type="password"
            placeholder="Password"
          />

          <button className="login-submit-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p className="create-accaunt">
          Already have an account? <NavLink to="/login">sign in</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;
