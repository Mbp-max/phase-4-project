import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import HomeSignIn from './HomeSignIn';
import HomeSignUp from './HomeSignUp';
import ReviewMovieCard from './ReviewMovieCard';
import {useEffect, useState} from "react"
import NewReview from "./NewReview";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
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

  // const {id, username, email} = user;
      // console.log(id)
  return (
    <div className="Home">
      <header className="App-header">
        <Routes>
          <Route exact path="/home" element={<Home setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route exact path="/signin" element={<HomeSignIn setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />} />
          <Route exact path="/" element={<Feed {...user}/>} />
          <Route path="/userName/*" element={<Profile user={user} />} />
          <Route path="/signup" element={<HomeSignUp setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          <Route path="/newreview" element={<NewReview setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
