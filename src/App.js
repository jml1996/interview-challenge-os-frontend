import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import PrivateRoute from "./components/PrivateRoute";
import Athletes from './components/Athletes';

import NavBar from './components/NavBar';
import NewProfile from "./components/NewProfile";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* <Route exact path="/" component={LoginForm} /> */}
          {/* <Route exact path="/register" component={RegisterForm} /> */}
          {/* <PrivateRoute path="/athletes" component={Athletes} /> */}
          <Route path="/new-profile" component={NewProfile} />
          <Route path="/athletes" component={Athletes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
