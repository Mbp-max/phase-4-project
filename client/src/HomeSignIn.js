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
      username: newUsername,
      password: newPassword,
      email: newEmail,
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
    <div className="home-page" >
      <div className="Banner">
        <h1 className="Tittle"> Ticket Stubs </h1>
      </div>
      <HomeAbout />

      <div className="sign-in" >Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label>
            Username:{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="password">
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="submit"> <input className="SaveButton" type="submit" value="Log In" />
        </div>
      </form>
      {errors ? <div>{errors}</div> : null}

      <div className="sign-up">
        Don't have an account ? Sign Up Below
        <>
          <form className="form" onSubmit={handleSignUp}>
            <div className="username-signup">
              <label>
                Username:{" "}
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </label>
            </div>
            <div className="password-signup">
              <label>
                Password:{" "}
                <input
                  type="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="email-signup">
              <label>
                Email:{" "}
                <input
                  type="newEmail"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <input type="submit" value="Sign Up!" className="SaveButton" />
            </div>
          </form>
          {errors ? <div>{errors}</div> : null}
        </>
      </div>
    </div>
  );
}
export default HomeSignIn;
