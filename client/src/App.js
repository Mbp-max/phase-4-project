import './App.css';
import Home from "./Home";
import Feed from "./Feed";
import Profile from "./Profile";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/user">
            <Feed />
          </Route>
          <Route exact path="/userName">
            <Profile />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
