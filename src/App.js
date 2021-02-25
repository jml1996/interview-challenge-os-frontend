import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Athletes from './components/Athletes';
import NavBar from './components/NavBar';
import NewProfile from "./components/NewProfile";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/new-profile" component={NewProfile} />
          <Route path="/athletes" component={Athletes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
