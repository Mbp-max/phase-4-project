import React from "react";
import { useState, useEffect } from "react";
import Feed from "./Feed";
import HomeAbout from "./HomeAbout";
import { Link } from "react-router-dom";

function HomeSignIn({ setIsAuthenticated, setUser, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState([]);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const newUser = {
      newUsername,
      newPassword,
      newEmail,
    };

    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.errors));
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: username,
      password,
    };

    fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setIsAuthenticated(true);
        });
      } else {
        res.json().then((json) => setError(json.error));
      }
    });
  };

  return (
      <div className="Home">
        <div className="Banner">
          <h1 className="Tittle"> Ticket Stubs </h1>
        </div>
        <HomeAbout />
      
      <div>Sign In</div>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <input type="submit" value="Log In" />
      </form>
      {errors ? <div>{errors}</div> : null}

      <div>
        Don't have an account ? Sing Up Below
        <>
          <form onSubmit={handleSignUp}>
            <label>
              Username
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </label>
            <label>
              Password
              <input
                type="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label>
              newEmail
              <input
                type="newEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </label>

            <input type="submit" value="Login!" />
          </form>
          {errors ? <div>{errors}</div> : null}
        </>
      </div>
      </div>
  );
}
export default HomeSignIn;
