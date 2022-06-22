import React, { useRef } from "react";
import { useNavigate } from "react-router";
import "./register.css";
import { NavLink } from "react-router-dom";

function Register() {
  const elForm = useRef(null);
  const elPassword = useRef(null);
  const elName = useRef(null);
  const elBtn = useRef(null);

  let navigate = useNavigate();

  const handleRegister = async evt => {
    try {
      evt.preventDefault();
      const res = await fetch(`https://coursesnodejs.herokuapp.com/user/sign-up`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          fullName: elName.current.value.trim(),
          password: elPassword.current.value.trim(),
        }),
      });

      if (res.status === 200) {
        navigate("/");
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFhMGNiYTAxNzM2ZGVlNWZkYjNjMzYiLCJpYXQiOjE2NTUzMTI3ODksImV4cCI6MTY1NTkxNzU4OX0.Ll33OKvq26TWZqPS7pe1wTKtND1EHXlaWof7DZyr7Hw";

        window.localStorage.setItem("token", JSON.stringify(token));
      } else {
        alert("Something went wrong!!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <p className="heading-login">Sign up</p>

        <form className="login-form" method="post" ref={elForm} onSubmit={handleRegister}>
          <input
            className="label__input register-input"
            type="text"
            placeholder="Full Name"
            ref={elName}
          />
          <input
            className="label__input register-input"
            type="password"
            placeholder="Password"
            ref={elPassword}
          />

          <button ref={elBtn} className="login-submit-btn" type="submit">
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
