import React from "react";
import { Router } from "@reach/router";

import Home from "views/Home";
import NotFound from "views/NotFound";

export default () => (
  <Router>
    <NotFound default />
    <Home path="/" />
  </Router>
);
