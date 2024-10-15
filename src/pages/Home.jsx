import React, { useState } from "react";
import "./Home.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
function Home(data) {
    const[isLogin, setIsLogin] = useState(true);
    function getData(data){
        setIsLogin(data)
    }
  return (
    <div className="main">
      <div className="main-div">
      <button className={ isLogin?"blue":'button'}   onClick={()=>setIsLogin(true)}>login page</button>
      <button className={isLogin?'button':'blue'} onClick={()=>setIsLogin(false)}>signup page</button>
        {
            (isLogin?<Login getData={getData}/>:<SignUp/>)
        }
      </div>
      <div>
        </div>
    </div>
  );
}

export default Home;
