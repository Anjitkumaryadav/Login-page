import React from "react";
import "./login.css";
import SignUp from "./SignUp";
function Login(props) {
  function getData() {
    const f = false;
    props.getData(f);
  }
  return (
    <div className="main-login">
      <input className="input mt-10 pl-2" type="email" placeholder="Email" />
      <input
        className="input mt-10 pl-2"
        type="password"
        placeholder="Password"
      />
      <button className="submit">Login</button>

      <p className="p">New member?</p>
      <a className="a" href={<SignUp />}>
        Signup
      </a>
    </div>
  );
}

export default Login;
