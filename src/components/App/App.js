import React from "react";
import { Provider } from "react-redux";
import { Global, css } from "@emotion/core";
import globals from "styles/globals";
import store from "store";
import Router from "router";

const App = () => {
  return (
    <>
      <Global
        styles={css`
          ${globals}
        `}
      />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
};

export default App;
