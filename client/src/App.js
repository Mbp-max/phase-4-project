import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import HomeSignIn from './HomeSignIn';
import HomeSignUp from './HomeSignUp';
import {useEffect, useState} from "react"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
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
  console.log(user)
  if (!isAuthenticated)
    return (
      <>
      <HomeSignIn
        to="/login"
        error={"please login"}
        setIsAuthenticated={setIsAuthenticated}
        setUser={setUser}
      />
      </>
    );

  return (
    <div className="Home">
      <header className="App-header">
        <Routes>
          <Route exact path="/home" element={<Home setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route exact path="/signin" element={<HomeSignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
          <Route exact path="/" element={<Feed user={user}/>} />
          <Route path="/userName/*" element={<Profile />} />
          <Route path="/signup" element={<HomeSignUp setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
