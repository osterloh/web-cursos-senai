import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Appointment from "../components/Appointment";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/appointment" component={Appointment} />
  </Switch>
);

export default Routes;
