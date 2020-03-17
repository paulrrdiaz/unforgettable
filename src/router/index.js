import React from "react";
import { Router } from "@reach/router";

import Tasks from "views/Tasks";
import Home from "views/Home";
import NotFound from "views/NotFound";

export default () => (
  <Router>
    <NotFound default />
    <Tasks path="/tasks" />
    <Home path="/" />
  </Router>
);
