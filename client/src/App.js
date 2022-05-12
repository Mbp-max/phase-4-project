import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import {useEffect} from "react"

function App() {

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => console.log(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<Feed />} />
          <Route path="/userName/*" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
