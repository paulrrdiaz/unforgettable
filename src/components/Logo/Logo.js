import React from "react";
import { Isotype } from "components/Icons";
import { Logo } from "./Logo.styles";

const LogoComponent = () => {
  return (
    <Logo to="/">
      <Isotype maxWidth="20px" />
      Unforgettable
    </Logo>
  );
};

export default LogoComponent;
