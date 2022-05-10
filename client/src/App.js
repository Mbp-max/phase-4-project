import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<Feed />} />
          <Route path="/userName/*" element={<Profile />} />
          {/* <Home />
          </Route> */}
          {/* <Route exact path="/user">
            <Feed />
          </Route> */}

          {/* <Route exact path="/userName">
            <Profile />
          </Route> */}
        </Routes>
      </header>
    </div>
  );
}

export default App;
