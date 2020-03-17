import React from "react";
import { Card, CardTitle, CardDescription } from "./Card.styles";

export default ({ card }) => {
  const { title, description } = card;
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{title}</CardDescription>
    </Card>
  );
};
