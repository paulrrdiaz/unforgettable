import { cards as defaultCards } from "data/normalized";
import { Types } from "store/actions/cards";
import { addEntity } from "utils/data";

export default (state = defaultCards, action) => {
  switch (action.type) {
    case Types.CREATE_CARD: {
      const { card, cardId } = action.payload;

      // return {
      //   entities: {
      //     ...state.entities,
      //     [cardId]: {
      //       ...card,
      //     },
      //   },
      //   ids: [...state.ids, cardId],
      // };

      return addEntity(state, card, cardId);
    }
    default:
      return state;
  }
};
