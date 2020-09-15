import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header-com";

import HomePage from "./pages/homepage/homepage-com";
import SignUp from "./pages/signUp/signup-com";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
