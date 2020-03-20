import React from "react";
import { Router } from "@reach/router";

import Covid19 from "views/Covid19";
import Tasks from "views/Tasks";
import Home from "views/Home";
import NotFound from "views/NotFound";

export default () => (
  <Router>
    <NotFound default />
    <Covid19 path="/covid19" />
    <Tasks path="/tasks" />
    <Home path="/" />
  </Router>
);
