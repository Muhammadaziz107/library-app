import React, { useRef } from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

function Login() {
  const elPassword = useRef(null);
  const elAlert = useRef(null);
  const handleLogin = async evt => {
    try {
      evt.preventDefault();

      const res = await fetch("https://coursesnodejs.herokuapp.com/user/sign-in", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          password: elPassword.current.value.trim(),
        }),
      });

      if (res.status === 200) {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhMGNiYTAxNzM2ZGVlNWZkYjNjMzYiLCJpYXQiOjE2NTUzMTI3ODksImV4cCI6MTY1NTkxNzU4OX0.Ll33OKvq26TWZqPS7pe1wTKtND1EHXlaWof7DZyr7Hw";

        window.localStorage.setItem("token", JSON.stringify(token));
      } else {
        elAlert.current.classList.add("alert--active");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <p className="heading-login">Sign in</p>
        <div className="incorrect-login" ref={elAlert}>
          <p>Sorry, That password is incorrect</p>
        </div>

        <form className="login-form" method="post" onSubmit={handleLogin}>
          <input
            ref={elPassword}
            className="label__input"
            type="password"
            placeholder="Password"
          />

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
