import React from "react";
import { List, ListTitle } from "./List.styles";
import Card from "containers/Card";
import CreateCard from "components/CreateCard";

export default ({ list }) => {
  const { title, cards } = list;

  return (
    <List>
      <ListTitle>{title}</ListTitle>
      {cards.map(cardId => (
        <Card cardId={cardId} key={cardId} />
      ))}
      <CreateCard />
    </List>
  );
};
