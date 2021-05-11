import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import { isAuth } from "./services/auth";

import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/users" component={Users} />
        {/* <Route path="/users" component={Users} /> */}
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
