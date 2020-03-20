import { Types } from "store/actions/covid19";
import produce from "immer";

const INITIAL_STATE = {
  total: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.GET_TOTAL_SUCCESS: {
      return produce(state, nextState => {
        nextState.total = action.payload.total;
      });
    }
    default:
      return state;
  }
};
