import React, { useRef, useState } from "react";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  function changeHandle(e) {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let validationErrors = {};
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (name.trim() === '') {
      validationErrors.name = 'Name is required!';
      nameRef.current.focus();
      isValid = false;
    } else if (!nameRegex.test(name)) {
      validationErrors.name = 'Name can only contain letters and spaces!';
      nameRef.current.focus();
      isValid = false;
    } else if (name.length < 4) {
      validationErrors.name = 'Name must be at least 4 characters long!';
      nameRef.current.focus();
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      validationErrors.email = 'Email is required!';
      emailRef.current.focus();
      isValid = false;
    } else if (!emailRegex.test(email)) {
      validationErrors.email = 'Please enter a valid email address';
      emailRef.current.focus();
      isValid = false;
    }

    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;  
    const capitalLetterRegex = /[A-Z]/;                 
    if (password.trim() === '') {
      validationErrors.password = 'Password is required!';
      passwordRef.current.focus();
      isValid = false;
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long!';
      passwordRef.current.focus();
      isValid = false;
    } else if (!specialCharRegex.test(password)) {
      validationErrors.password = 'Password must contain at least one special character!';
      passwordRef.current.focus();
      isValid = false;
    } else if (!capitalLetterRegex.test(password)) {
      validationErrors.password = 'Password must contain at least one uppercase letter!';
      passwordRef.current.focus();
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      console.log("Form submitted successfully");
      // console.log({ name, email, password });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="input pl-2"
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          ref={nameRef}
          onChange={changeHandle}
        />
        {errors.name && <p style={{ color: "red", fontSize: "12px", marginLeft: "20px" }}>{errors.name}</p>}
      </div>
      <div>
        <input
          className="input pl-2"
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          ref={emailRef}
          onChange={changeHandle}
        />
        {errors.email && <p style={{ color: "red", fontSize: "12px", marginLeft: "20px" }}>{errors.email}</p>}
      </div>
      <div>
        <input
          className="input pl-2"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          ref={passwordRef}
          onChange={changeHandle}
        />
        {errors.password && <p style={{ color: "red", fontSize: "12px", marginLeft: "20px" }}>{errors.password}</p>}
      </div>
      <button className="submit" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;
