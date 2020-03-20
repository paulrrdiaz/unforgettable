import React from "react";
import Main from "layouts/Main";
import { PrincipalTitle } from "components/Texts";
import Tweets from "components/Tweets";

export default () => {
  return (
    <Main>
      <PrincipalTitle>Covid 19</PrincipalTitle>
      <Tweets />
    </Main>
  );
};
