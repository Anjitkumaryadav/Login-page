import React, { useRef, useState } from "react";
import "./SignUp.css";
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const refObject = useRef();
  
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
    if(name==''){
        // refObject.current.style.border = '2px solid red';
        refObject.current.focus();
        refObject.current.placeholder="* Required field"
        setError('Name is required!');
        return ;
    }
    else if (email==''){
        refObject.current.style.border = '2px solid red';
        setError2("Email is required!")
        return;
    }
    else if (password==""){
        setError3("Password is required")
        return;
    }
    console.log(name)
    console.log(email)
    console.log(password)

  }
  return (
    <form>
      <input
        className="input pl-2 "
        type="text"
        placeholder="Name"
        value={name}
        name="name"
        required
        ref={refObject}
        onChange={changeHadle}
      />
      {error && <p style={{ color: 'red', fontSize:'12px', marginLeft:"20px" }}>{error}</p>}
      <input
        className="input pl-2"
        type="email"
        placeholder="Email"
        value={email}
        name="email"
        onChange={changeHadle}
      />
      {error && <p style={{ color: 'red', fontSize:'12px', marginLeft:"20px" }}>{error2}</p>}
      <input
        className="input pl-2"
        type="password"
        placeholder="Password "
        name="password"
        value={password}
        onChange={changeHadle}
      />
      {error && <p style={{ color: 'red', fontSize:'12px', marginLeft:"20px" }}>{error3}</p>}
      <button className="submit" onClick={handleSubmit}> Signup</button>
    </form>
  );
}

export default SignUp;
