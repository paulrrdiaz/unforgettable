import { Types } from "store/actions/cards";
import { lists as defaultLists } from "data/normalized";
import { addIdToChildren } from "utils/data";

export default (state = defaultLists, action) => {
  switch (action.type) {
    case Types.CREATE_CARD: {
      const { listId, cardId } = action.payload;

      // return {
      //   ...state,
      //   entities: {
      //     ...state.entities,
      //     [state.entities[listId].id]: {
      //       ...state.entities[listId],
      //       cards: [...state.entities[listId].cards, cardId],
      //     },
      //   },
      // };

      return addIdToChildren(state, listId, "cards", cardId);
    }
    default:
      return state;
  }
};
