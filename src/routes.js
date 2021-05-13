import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import { isAuth } from "./controller/Auth/auth";

import Login from "./pages/Login/Login";
import Users from "./pages/Users/Users";
import Estoque from "./pages/Estoque/Estoque";

// function setToken(userToken) {
//   sessionStorage.setItem("token", JSON.stringify(userToken));
// }
// function getToken() {
//   const tokenString = sessionStorage.getItem("token");
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token;
// }

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
  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/users" component={Users} /> */}
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/estoque" component={Estoque} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
