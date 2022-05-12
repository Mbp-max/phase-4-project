import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
import HomeSignIn from './HomeSignIn';


function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<HomeSignIn />} />
          <Route exact path="/user" element={<Feed />} />
          <Route path="/userName/*" element={<Profile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
