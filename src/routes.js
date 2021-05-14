import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";

import { isAuth } from "./controller/Auth/auth";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Estoque from "./pages/Estoque/Estoque";
import ListaItens from "./pages/ListaItens/ListaItens";
import ItensConferidos from "./pages/ItensConferidos/ItensConferidos";

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
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/estoque" component={Estoque} />
        <PrivateRoute path="/lista-itens" component={ListaItens} />
        <PrivateRoute path="/itens-conferidos" component={ItensConferidos} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
