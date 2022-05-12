import React from "react";
import HomeAbout from "./HomeAbout";
import HomeSignIn from "./HomeSignIn";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
}


  useEffect(() => {
    fetch("/authorize_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  }, []);

  console.log(user);
  if (!isAuthenticated)
    return (
      <HomeSignIn
        to="/login"
        error={"please login"}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
    );

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
