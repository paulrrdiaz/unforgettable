import { v4 } from "uuid";

export const Types = {
  CREATE_CARD: "cards/create_card",
};

const defaultCardData = {
  title: "Default Title",
  description: "Default Description",
};

export const createCard = (listId, cardData) => {
  const cardId = v4();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };

  return {
    type: Types.CREATE_CARD,
    payload: {
      card,
      listId,
      cardId,
    },
  };
};
