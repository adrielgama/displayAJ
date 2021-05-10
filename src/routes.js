import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
