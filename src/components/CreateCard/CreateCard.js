import React, { useState } from "react";
import { Form, FormControl, Button, Input, Textarea } from "./CreateCard.styles";

export default ({ createCard, listId }) => {
  const [card, setCard] = useState({});

  const handleChange = target => {
    const { name, value } = target;

    setCard({
      ...card,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    createCard(listId, card);
  };

  return (
    <Form onSubmit={onSubmit} marginBottom direction="column">
      <FormControl>
        <Input
          name="title"
          onChange={e => handleChange(e.target)}
          type="text"
          placeholder="Title"
        />
      </FormControl>
      <FormControl>
        <Textarea
          name="description"
          onChange={e => handleChange(e.target)}
          placeholder="Description"
        />
      </FormControl>
      <FormControl>
        <Button type="submit">Create new card</Button>
      </FormControl>
    </Form>
  );
};
