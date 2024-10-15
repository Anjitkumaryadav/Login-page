import React from "react";
import "./login.css";
import SignUp from "./SignUp";
function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="main-login">
      <input
        className="input mt-10 pl-2"
        type="email"
        required={true}
        placeholder="Email"
      />
      <input
        className="input mt-10 pl-2"
        type="password"
        placeholder="Password"
      />
      <button className="submit" onClick={handleSubmit}>
        Login
      </button>

      <p className="p">New member?</p>
      <a className="a" href="#">
        Signup
      </a>
    </form>
  );
}

export default Login;
