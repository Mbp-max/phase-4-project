import React from "react";
import HomeAbout from "./HomeAbout";
import HomeSignIn from "./HomeSignIn";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({setIsAuthenticated, setUser, user}) {
  

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
}


  

  return (
    <div className="Home">
      <div className="Banner">
        <h1 className="Tittle"> Ticket Stubs </h1>
      </div>
        <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
