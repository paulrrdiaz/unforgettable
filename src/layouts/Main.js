import React from "react";
import Header from "components/Header";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app--wrapper">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Main;
