import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/categories" component={Categories} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
