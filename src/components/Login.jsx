import React, { useState } from "react";
import "./login.css";
import SignUp from "./SignUp";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  function handleSubmit(e) {
    e.preventDefault();

    let isValid = true;
    const errors = { email: "", password: "" };


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation (check if it's empty)
    if (password.trim() === "") {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);

    if (isValid) {
      // If form is valid, submit the form (you can handle the login logic here)
      console.log("Form Submitted", { email, password });
    }
  }

  return (
    <form className="main-login" onSubmit={handleSubmit}>
      <div>
        <input
          className="input mt-10 pl-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div>
        <input
          className="input mt-10 pl-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
      </div>
      <button className="submit" type="submit">
        Login
      </button>

      <p className="p">New member?</p>
      <a className="a" href="">
        Signup
      </a>
    </form>
  );
}

export default Login;
