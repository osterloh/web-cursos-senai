import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Appointment from "../components/Appointment";
import Login from "../components/Login";
import Demanda from "../components/Demanda";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/appointment" component={Appointment} />
    <Route path="/login" component={Login} />
    <Route path="/demanda" component={Demanda} />
  </Switch>
);

export default Routes;
