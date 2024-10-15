import React, { useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  function changeHadle(e) {
    if (e.target.name == 'name') {
      const data = (e.target.value);
      setName(data);
    }
    else if(e.target.name == 'email'){
        const Email=(e.target.value)
        setEmail(Email)
    }
    else if(e.target.name == 'password'){
        const pswd= (e.target.value)
        setPassword(pswd)
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)

  }
  return (
    <form>
      <input
        className="input pl-2"
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        onChange={changeHadle}
      />
      <input
        className="input pl-2"
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={changeHadle}
      />
      <input
        className="input pl-2"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={changeHadle}
      />
      <button className="submit" onClick={handleSubmit}> Signup</button>
    </form>
  );
}

export default SignUp;
