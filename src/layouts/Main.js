import React from "react";
import Header from "components/Header";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
