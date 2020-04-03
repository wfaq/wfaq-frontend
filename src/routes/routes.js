import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Principal from '../pages/principal';
import Questions from '../pages/questions';

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={() => <Login />} ></Route>
        <Route path="/main" component={() => <Principal />} ></Route>
        <Route path="/questions" component={() => <Questions />} ></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
