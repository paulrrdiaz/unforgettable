import React from "react";
import { Board } from "./Board.styles";
import List from "containers/List";

export default ({ lists }) => {
  console.log(lists);

  return (
    <Board>
      {lists.map(listId => (
        <List listId={listId} key={listId} />
      ))}
    </Board>
  );
};
