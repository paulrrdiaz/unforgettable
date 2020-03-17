import React from "react";
import { List, ListTitle } from "./List.styles";
import Card from "containers/Card";
import CreateCard from "containers/CreateCard";

export default ({ list }) => {
  const { title, cards, id } = list;

  return (
    <List>
      <ListTitle>{title}</ListTitle>
      <CreateCard listId={id} />
      {cards.map(cardId => (
        <Card cardId={cardId} key={cardId} />
      ))}
    </List>
  );
};
